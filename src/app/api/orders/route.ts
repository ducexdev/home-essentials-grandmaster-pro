import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { orderSchema } from "@/lib/order-schema";
import { validateVariantAndQuantity, PRODUCT_CONFIG } from "@/lib/product-config";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendOrderNotification } from "@/lib/email";
import { Order, OrderSubmitResponse } from "@/types/order";

/**
 * Rate limiting (simple in-memory, replace with Redis/Upstash for production).
 * Limits to 5 submissions per IP per 10-minute window.
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

/**
 * POST /api/orders
 *
 * Accepts an order submission, validates all fields server-side,
 * calculates the price server-side (never trusts client price),
 * saves to Supabase, and sends an email notification.
 *
 * Never allows:
 * - Client-provided prices
 * - Unavailable variants
 * - Quantities outside 1–10
 * - Missing consent
 */
export async function POST(request: NextRequest): Promise<NextResponse<OrderSubmitResponse>> {
  // Extract client IP for rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Too many order submissions from your network. Please wait a few minutes and try again, or contact us via WhatsApp.",
      },
      { status: 429 }
    );
  }

  // Parse request body
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request format." },
      { status: 400 }
    );
  }

  // Honeypot check (bots fill hidden fields)
  if (rawBody && typeof rawBody === "object" && "_hp" in rawBody) {
    const hp = (rawBody as Record<string, unknown>)._hp;
    if (hp && String(hp).length > 0) {
      // Return success to fool bots, but don't save anything
      return NextResponse.json({ success: true, orderReference: "HE-BOT", message: "Order submitted." });
    }
  }

  // Validate with Zod
  const parseResult = orderSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parseResult.error.issues) {
      const field = issue.path.join(".");
      if (field) fieldErrors[field] = issue.message;
    }
    return NextResponse.json(
      {
        success: false,
        error: "Please correct the form errors and try again.",
        fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parseResult.data;

  // Validate variant and calculate price server-side
  const variantCheck = validateVariantAndQuantity(data.variantId, data.quantity);
  if (!variantCheck.valid) {
    return NextResponse.json(
      {
        success: false,
        error: variantCheck.error,
        fieldErrors: { variantId: variantCheck.error },
      },
      { status: 422 }
    );
  }

  const { variant, totalKobo } = variantCheck;

  // Generate unique order reference
  const orderReference = `HE-${nanoid(8).toUpperCase()}`;
  const now = new Date().toISOString();

  const order: Order = {
    id: crypto.randomUUID(),
    orderReference,
    customerName: data.fullName,
    customerPhone: data.phone,
    customerWhatsapp: data.whatsappPhone || undefined,
    customerEmail: data.email || undefined,
    deliveryState: data.state,
    deliveryCity: data.city,
    deliveryAddress: data.address,
    productSlug: PRODUCT_CONFIG.slug,
    variantId: variant.id,
    variantName: variant.name,
    quantity: data.quantity,
    unitPriceKobo: variant.priceKobo,
    totalKobo,
    currency: "NGN",
    orderNotes: data.notes || undefined,
    orderStatus: "pending",
    utmSource: data.utmSource,
    utmMedium: data.utmMedium,
    utmCampaign: data.utmCampaign,
    utmContent: data.utmContent,
    utmTerm: data.utmTerm,
    fbclid: data.fbclid,
    ttclid: data.ttclid,
    createdAt: now,
    updatedAt: now,
  };

  // Save to Supabase
  let supabaseAvailable = false;
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { error: dbError } = await supabaseAdmin.from("orders").insert({
      id: order.id,
      order_reference: order.orderReference,
      customer_name: order.customerName,
      customer_phone: order.customerPhone,
      customer_whatsapp: order.customerWhatsapp,
      customer_email: order.customerEmail,
      delivery_state: order.deliveryState,
      delivery_city: order.deliveryCity,
      delivery_address: order.deliveryAddress,
      product_slug: order.productSlug,
      variant_id: order.variantId,
      variant_name: order.variantName,
      quantity: order.quantity,
      unit_price_kobo: order.unitPriceKobo,
      total_kobo: order.totalKobo,
      currency: order.currency,
      order_notes: order.orderNotes,
      order_status: order.orderStatus,
      utm_source: order.utmSource,
      utm_medium: order.utmMedium,
      utm_campaign: order.utmCampaign,
      utm_content: order.utmContent,
      utm_term: order.utmTerm,
      fbclid: order.fbclid,
      ttclid: order.ttclid,
    });

    if (dbError) {
      // Duplicate order reference (idempotency) — return success
      if (dbError.code === "23505") {
        console.warn(`[Orders] Duplicate submission detected for ref: ${orderReference}`);
        return NextResponse.json({
          success: true,
          orderReference,
          message:
            "Your order has already been received. We will contact you shortly.",
        });
      }
      throw new Error(`Database error: ${dbError.message}`);
    }

    supabaseAvailable = true;
    console.log(`[Orders] Saved order ${orderReference}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[Orders] Failed to save order: ${msg}`);

    if (!supabaseAvailable) {
      // Database not configured or failed — still try to send email as fallback
      console.error(
        `[Orders] Supabase unavailable. Order ${orderReference} NOT saved to database. ` +
          `Attempting email notification as fallback.`
      );
    }
  }

  // Send email notification (always attempt, even if DB succeeded)
  const emailResult = await sendOrderNotification(order);
  if (!emailResult.sent) {
    // Log for operational alert — don't expose email details to client
    console.error(
      `[Orders] Email notification FAILED for order ${orderReference}: ${emailResult.error}. ` +
        `Order is ${supabaseAvailable ? "saved in database" : "NOT saved — manual recovery needed"}.`
    );
  }

  if (!supabaseAvailable && !emailResult.sent) {
    return NextResponse.json(
      {
        success: false,
        error:
          "We are experiencing technical difficulties. Please place your order via WhatsApp at +234 808 920 8005 and we will assist you immediately.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    success: true,
    orderReference,
    message:
      "Thank you! Your order has been received. We will contact you within 24 hours to confirm and arrange delivery.",
  });
}

// Method not allowed
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
