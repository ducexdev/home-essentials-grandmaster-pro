import { Order } from "@/types/order";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ORDER_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL ?? "order@homeessentials.com.ng";
const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS ?? "noreply@homeessentials.com.ng";
const FROM_NAME = process.env.EMAIL_FROM_NAME ?? "Home Essentials Orders";

function formatNaira(kobo: number): string {
  const naira = kobo / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(naira);
}

function buildOrderEmail(order: Order): { subject: string; html: string } {
  const subject = `🛒 New Order — ${order.orderReference} | ${order.variantName}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order Notification</title>
  <style>
    body { font-family: Inter, sans-serif; background: #F4F6F8; margin: 0; padding: 20px; }
    .card { background: #fff; border-radius: 8px; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
    .header { background: #0B1F3A; color: #fff; padding: 20px 24px; border-radius: 6px; margin-bottom: 24px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 4px 0 0; opacity: .8; font-size: 14px; }
    .ref { background: #FF6B1A; color: #fff; display: inline-block; padding: 4px 12px; border-radius: 4px; font-weight: 700; font-size: 16px; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    th { text-align: left; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: .05em; padding: 6px 0; }
    td { padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #344054; }
    td.label { font-weight: 600; width: 40%; }
    .section-title { font-size: 13px; font-weight: 700; color: #155EEF; text-transform: uppercase; letter-spacing: .08em; margin: 20px 0 8px; }
    .total-row td { font-size: 18px; font-weight: 700; color: #0B1F3A; border-bottom: none; }
    .footer { font-size: 12px; color: #999; margin-top: 24px; text-align: center; }
    .status { background: #F0FFF4; border: 1px solid #86EFAC; color: #16A34A; padding: 4px 10px; border-radius: 4px; font-size: 13px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🏠 Home Essentials — New Order</h1>
      <p>Grandmaster Pro — Action Required</p>
    </div>

    <div class="ref">${order.orderReference}</div>
    <span class="status">Pending</span>

    <div class="section-title">Customer Details</div>
    <table>
      <tr>
        <td class="label">Full Name</td>
        <td>${escapeHtml(order.customerName)}</td>
      </tr>
      <tr>
        <td class="label">Phone</td>
        <td><a href="tel:${escapeHtml(order.customerPhone)}">${escapeHtml(order.customerPhone)}</a></td>
      </tr>
      ${order.customerWhatsapp ? `<tr>
        <td class="label">WhatsApp</td>
        <td><a href="https://wa.me/${escapeHtml(order.customerWhatsapp.replace(/\D/g, ""))}">${escapeHtml(order.customerWhatsapp)}</a></td>
      </tr>` : ""}
      ${order.customerEmail ? `<tr>
        <td class="label">Email</td>
        <td>${escapeHtml(order.customerEmail)}</td>
      </tr>` : ""}
    </table>

    <div class="section-title">Delivery Address</div>
    <table>
      <tr>
        <td class="label">State</td>
        <td>${escapeHtml(order.deliveryState)}</td>
      </tr>
      <tr>
        <td class="label">City/Town</td>
        <td>${escapeHtml(order.deliveryCity)}</td>
      </tr>
      <tr>
        <td class="label">Address</td>
        <td>${escapeHtml(order.deliveryAddress)}</td>
      </tr>
    </table>

    <div class="section-title">Order Details</div>
    <table>
      <tr>
        <td class="label">Product</td>
        <td>Grandmaster Pro</td>
      </tr>
      <tr>
        <td class="label">Variant</td>
        <td>${escapeHtml(order.variantName)}</td>
      </tr>
      <tr>
        <td class="label">Quantity</td>
        <td>${order.quantity}</td>
      </tr>
      <tr>
        <td class="label">Unit Price</td>
        <td>${formatNaira(order.unitPriceKobo)}</td>
      </tr>
      <tr class="total-row">
        <td class="label">Total</td>
        <td>${formatNaira(order.totalKobo)}</td>
      </tr>
    </table>

    ${order.orderNotes ? `
    <div class="section-title">Customer Notes</div>
    <p style="background:#F4F6F8;padding:12px;border-radius:4px;font-size:14px;margin:0">${escapeHtml(order.orderNotes)}</p>
    ` : ""}

    ${(order.utmSource || order.fbclid || order.ttclid) ? `
    <div class="section-title">Attribution</div>
    <table>
      ${order.utmSource ? `<tr><td class="label">UTM Source</td><td>${escapeHtml(order.utmSource)}</td></tr>` : ""}
      ${order.utmMedium ? `<tr><td class="label">UTM Medium</td><td>${escapeHtml(order.utmMedium)}</td></tr>` : ""}
      ${order.utmCampaign ? `<tr><td class="label">Campaign</td><td>${escapeHtml(order.utmCampaign)}</td></tr>` : ""}
      ${order.fbclid ? `<tr><td class="label">FB Click ID</td><td>${escapeHtml(order.fbclid)}</td></tr>` : ""}
      ${order.ttclid ? `<tr><td class="label">TikTok Click ID</td><td>${escapeHtml(order.ttclid)}</td></tr>` : ""}
    </table>
    ` : ""}

    <div class="footer">
      Order created: ${new Date(order.createdAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })} WAT<br>
      Ref: ${order.orderReference}
    </div>
  </div>
</body>
</html>`;

  return { subject, html };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export type EmailResult =
  | { sent: true }
  | { sent: false; error: string };

/**
 * Send an order notification email via Resend.
 * This must only be called server-side.
 * Returns a result object rather than throwing, so callers can
 * log failures without rolling back already-saved orders.
 */
export async function sendOrderNotification(order: Order): Promise<EmailResult> {
  if (!RESEND_API_KEY) {
    const msg =
      "RESEND_API_KEY is not configured. Order saved but notification email not sent.";
    console.warn(`[Email] ${msg} Order: ${order.orderReference}`);
    return { sent: false, error: msg };
  }

  const { subject, html } = buildOrderEmail(order);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to: [ORDER_EMAIL],
        subject,
        html,
        tags: [
          { name: "order_ref", value: order.orderReference },
          { name: "product", value: order.productSlug },
        ],
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "(no body)");
      const errorMsg = `Resend API error ${response.status}: ${body}`;
      console.error(`[Email] ${errorMsg} Order: ${order.orderReference}`);
      return { sent: false, error: errorMsg };
    }

    console.log(`[Email] Order notification sent for ${order.orderReference}`);
    return { sent: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[Email] Failed to send notification: ${errorMsg} Order: ${order.orderReference}`);
    return { sent: false, error: errorMsg };
  }
}
