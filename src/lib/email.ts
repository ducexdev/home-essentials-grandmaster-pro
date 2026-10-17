import nodemailer from "nodemailer";
import { Order } from "@/types/order";

// ---------------------------------------------------------------------------
// Email Configuration
// Target inbox: naijahomeessentials4u@gmail.com
// ---------------------------------------------------------------------------
const GMAIL_USER = process.env.GMAIL_USER || "naijahomeessentials4u@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";

const SMTP_HOST = process.env.SMTP_HOST || "mail.homeessentials.com.ng";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_SECURE = process.env.SMTP_SECURE === "true" || SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || "order@homeessentials.com.ng";
const SMTP_PASS = process.env.SMTP_PASS || "5Lnnyy(5^Oyz}Jnz";
const SMTP_ENVELOPE_SENDER = `cpanel@${SMTP_HOST.replace(/^mail\./, "")}`;

const ORDER_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || "naijahomeessentials4u@gmail.com";
const FROM_NAME = process.env.EMAIL_FROM_NAME || "Home Essentials Orders";
const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS || "order@homeessentials.com.ng";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatNaira(kobo: number): string {
  const naira = kobo / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(naira);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---------------------------------------------------------------------------
// Email template
// ---------------------------------------------------------------------------
function buildOrderEmail(order: Order): { subject: string; html: string; text: string } {
  const subject = `🛒 New Order: ${order.orderReference} — ${order.variantName} (${order.customerName})`;

  const text = `
HOME ESSENTIALS — NEW ORDER RECEIVED
======================================
Order Ref: ${order.orderReference}
Date: ${new Date(order.createdAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })} WAT

CUSTOMER DETAILS
----------------
Name: ${order.customerName}
Phone: ${order.customerPhone}
WhatsApp: ${order.customerWhatsapp || "N/A"}
Email: ${order.customerEmail || "N/A"}

DELIVERY ADDRESS
----------------
State: ${order.deliveryState}
City/Town: ${order.deliveryCity}
Address: ${order.deliveryAddress}

ORDER DETAILS
-------------
Product: German Grinder Machine
Variant: ${order.variantName}
Quantity: ${order.quantity}
Unit Price: ${formatNaira(order.unitPriceKobo)}
Total: ${formatNaira(order.totalKobo)}
Payment: Pay On Delivery (POD)

Notes: ${order.orderNotes || "None"}
Attribution: Source: ${order.utmSource || "Direct"} | Campaign: ${order.utmCampaign || "N/A"}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order Notification</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #F4F6F8; margin: 0; padding: 20px; color: #1E293B; }
    .card { background: #ffffff; border-radius: 12px; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #E2E8F0; }
    .header { background: linear-gradient(135deg, #061325 0%, #0052CC 100%); color: #ffffff; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0; opacity: 0.9; font-size: 13px; color: #00D2FF; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    .ref-badge { background: #00AEEF; color: #061325; display: inline-block; padding: 6px 14px; border-radius: 6px; font-weight: 800; font-size: 16px; margin: 0 0 16px; letter-spacing: 0.05em; }
    .status-pod { background: #DCFCE7; border: 1px solid #86EFAC; color: #166534; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 800; display: inline-block; margin-left: 8px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th { text-align: left; font-size: 11px; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 0; border-bottom: 2px solid #E2E8F0; }
    td { padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 14px; color: #334155; }
    td.label { font-weight: 700; width: 38%; color: #0F172A; }
    .section-title { font-size: 12px; font-weight: 800; color: #0052CC; text-transform: uppercase; letter-spacing: 0.08em; margin: 24px 0 8px; padding-bottom: 4px; border-bottom: 1px solid #E2E8F0; }
    .total-row td { font-size: 18px; font-weight: 800; color: #0B1F3A; border-top: 2px solid #0052CC; border-bottom: none; padding-top: 12px; }
    .action-btn { display: inline-block; background: #25D366; color: #ffffff !important; padding: 12px 20px; border-radius: 8px; font-weight: 800; font-size: 14px; text-decoration: none; text-align: center; margin-top: 12px; }
    .footer { font-size: 11px; color: #94A3B8; margin-top: 28px; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🏠 Home Essentials</h1>
      <p>German Grinder Machine — New Order Alert</p>
    </div>

    <div style="text-align: center; margin-bottom: 16px;">
      <span class="ref-badge">${order.orderReference}</span>
      <span class="status-pod">✓ PAY ON DELIVERY</span>
    </div>

    <div class="section-title">👤 Customer Information</div>
    <table>
      <tr>
        <td class="label">Customer Name</td>
        <td><strong>${escapeHtml(order.customerName)}</strong></td>
      </tr>
      <tr>
        <td class="label">Phone Call</td>
        <td><a href="tel:${escapeHtml(order.customerPhone)}" style="color: #0052CC; font-weight: 700;">${escapeHtml(order.customerPhone)}</a></td>
      </tr>
      ${order.customerWhatsapp ? `<tr>
        <td class="label">WhatsApp</td>
        <td><a href="https://wa.me/${escapeHtml(order.customerWhatsapp.replace(/\D/g, ""))}" style="color: #16A34A; font-weight: 700;">${escapeHtml(order.customerWhatsapp)}</a></td>
      </tr>` : ""}
      ${order.customerEmail ? `<tr>
        <td class="label">Email</td>
        <td><a href="mailto:${escapeHtml(order.customerEmail)}" style="color: #0052CC;">${escapeHtml(order.customerEmail)}</a></td>
      </tr>` : ""}
    </table>

    <div class="section-title">📍 Doorstep Delivery Destination</div>
    <table>
      <tr>
        <td class="label">Delivery State</td>
        <td><strong>${escapeHtml(order.deliveryState)} State</strong></td>
      </tr>
      <tr>
        <td class="label">City / Town</td>
        <td>${escapeHtml(order.deliveryCity)}</td>
      </tr>
      <tr>
        <td class="label">Exact Street Address</td>
        <td>${escapeHtml(order.deliveryAddress)}</td>
      </tr>
    </table>

    <div class="section-title">📦 Package &amp; Payment Summary</div>
    <table>
      <tr>
        <td class="label">Product</td>
        <td>German Grinder Machine</td>
      </tr>
      <tr>
        <td class="label">Selected Variant</td>
        <td><strong>${escapeHtml(order.variantName)}</strong></td>
      </tr>
      <tr>
        <td class="label">Quantity</td>
        <td><strong>${order.quantity} unit(s)</strong></td>
      </tr>
      <tr>
        <td class="label">Free Bonus Kit</td>
        <td>Extra 6-Leaf Blade + Sieve + Brush + VIP Support (₦0)</td>
      </tr>
      <tr>
        <td class="label">Unit Price</td>
        <td>${formatNaira(order.unitPriceKobo)}</td>
      </tr>
      <tr class="total-row">
        <td class="label">TOTAL TO COLLECT</td>
        <td><span style="color: #0052CC;">${formatNaira(order.totalKobo)}</span></td>
      </tr>
    </table>

    ${order.orderNotes ? `
    <div class="section-title">📝 Customer Notes</div>
    <div style="background:#F8FAFC;border-left:3px solid #0052CC;padding:12px;border-radius:4px;font-size:13px;margin:8px 0 16px;">
      ${escapeHtml(order.orderNotes)}
    </div>
    ` : ""}

    <div style="text-align: center; margin: 24px 0 12px;">
      <a href="tel:${escapeHtml(order.customerPhone)}" class="action-btn" style="background: #0052CC; margin-right: 8px;">
        📞 Call Customer
      </a>
      ${order.customerWhatsapp ? `
      <a href="https://wa.me/${escapeHtml(order.customerWhatsapp.replace(/\D/g, ""))}" class="action-btn">
        💬 Chat on WhatsApp
      </a>
      ` : ""}
    </div>

    ${(order.utmSource || order.fbclid || order.ttclid) ? `
    <div class="section-title">📊 Marketing Attribution</div>
    <table>
      ${order.utmSource ? `<tr><td class="label">Source</td><td>${escapeHtml(order.utmSource)}</td></tr>` : ""}
      ${order.utmMedium ? `<tr><td class="label">Medium</td><td>${escapeHtml(order.utmMedium)}</td></tr>` : ""}
      ${order.utmCampaign ? `<tr><td class="label">Campaign</td><td>${escapeHtml(order.utmCampaign)}</td></tr>` : ""}
      ${order.fbclid ? `<tr><td class="label">FB Click ID</td><td>${escapeHtml(order.fbclid)}</td></tr>` : ""}
      ${order.ttclid ? `<tr><td class="label">TikTok Click ID</td><td>${escapeHtml(order.ttclid)}</td></tr>` : ""}
    </table>
    ` : ""}

    <div class="footer">
      Order Received: ${new Date(order.createdAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })} WAT<br>
      Home Essentials™ — Official Order Processing Desk
    </div>
  </div>
</body>
</html>`;

  return { subject, html, text };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type EmailResult =
  | { sent: true; messageId?: string }
  | { sent: false; error: string };

// ---------------------------------------------------------------------------
// Send order notification
// ---------------------------------------------------------------------------
export async function sendOrderNotification(order: Order): Promise<EmailResult> {
  const { subject, html, text } = buildOrderEmail(order);

  // Strategy 1: If GMAIL_APP_PASSWORD is set, use direct Gmail SMTP
  if (GMAIL_APP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_APP_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: `"${FROM_NAME}" <${GMAIL_USER}>`,
        to: ORDER_EMAIL,
        replyTo: ORDER_EMAIL,
        subject,
        text,
        html,
      });

      console.log(`[Email] Sent via Gmail SMTP for ${order.orderReference}. MessageId: ${info.messageId}`);
      return { sent: true, messageId: info.messageId };
    } catch (err) {
      console.warn(`[Email] Gmail SMTP attempt failed, falling back to mail server:`, err);
    }
  }

  // Strategy 2: Tested and verified direct delivery to ORDER_EMAIL (naijahomeessentials4u@gmail.com)
  // via mail.homeessentials.com.ng with cpanel@ envelope routing
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      envelope: {
        from: SMTP_ENVELOPE_SENDER,
        to: ORDER_EMAIL,
      },
      from: `"${FROM_NAME}" <${FROM_ADDRESS}>`,
      replyTo: ORDER_EMAIL,
      to: ORDER_EMAIL,
      subject,
      text,
      html,
    });

    console.log(`[Email] Sent notification to ${ORDER_EMAIL} for ${order.orderReference}. MessageId: ${info.messageId}`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[Email] Notification delivery failed for ${order.orderReference}: ${errorMsg}`);
    return { sent: false, error: errorMsg };
  }
}
