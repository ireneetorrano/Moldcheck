import { Resend } from "resend";
import { requireEnv } from "@backend/shared/env";
import { esc } from "@backend/shared/utils";
import type { ContactSubmission } from "./supabase";

function getResend() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

export async function sendContactEmail(data: ContactSubmission): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL ?? "info@moldcheck.pt";
  const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck <no-reply@moldcheck.pt>";

  console.log("[contact-form] sendContactEmail called");
  console.log("[contact-form] To:", to);
  console.log("[contact-form] From:", from);
  console.log("[contact-form] Reply-To:", data.email);
  console.log("[contact-form] RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

  const resend = getResend();

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f7fafa;font-family:ui-sans-serif,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7fafa;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #d8e8e7;border-radius:6px;overflow:hidden;">
        <tr><td style="background:#1b4d4a;padding:20px 28px;">
          <p style="margin:0;font-size:18px;color:#ffffff;font-weight:700;">MoldCheck.pt — New Contact</p>
        </td></tr>
        <tr><td style="padding:28px;">
          <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;white-space:nowrap;vertical-align:top;width:120px;">Name</td>
              <td style="padding:8px 0;color:#0f1c1b;">${esc(data.full_name)}</td>
            </tr>
            <tr style="background:#f7fafa;">
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;vertical-align:top;">Email</td>
              <td style="padding:8px 0;color:#0f1c1b;"><a href="mailto:${esc(data.email)}" style="color:#2a7a75;">${esc(data.email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;vertical-align:top;">Phone</td>
              <td style="padding:8px 0;color:#0f1c1b;">${esc(data.country_prefix)} ${esc(data.phone_number)}</td>
            </tr>
            <tr style="background:#f7fafa;">
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;vertical-align:top;">Municipality</td>
              <td style="padding:8px 0;color:#0f1c1b;">${esc(data.municipality)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;vertical-align:top;">Source</td>
              <td style="padding:8px 0;color:#0f1c1b;">${esc(data.source_page)}</td>
            </tr>
            <tr style="background:#f7fafa;">
              <td style="padding:8px 12px 8px 0;font-weight:700;color:#1b4d4a;vertical-align:top;">Date</td>
              <td style="padding:8px 0;color:#0f1c1b;">${esc(data.created_at)}</td>
            </tr>
          </table>
          <p style="margin:20px 0 8px;font-size:13px;font-weight:700;color:#1b4d4a;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
          <p style="margin:0;font-size:14px;line-height:1.7;color:#0f1c1b;white-space:pre-wrap;background:#f7fafa;padding:14px;border-radius:4px;border:1px solid #d8e8e7;">${esc(data.message)}</p>
          <p style="margin:20px 0 0;font-size:13px;color:#6b8a89;">Reply directly to this email to respond to ${esc(data.full_name)}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  console.log("[contact-form] calling resend.emails.send()");

  const { data: result, error } = await resend.emails.send({
    from,
    to,
    subject: `New contact: ${data.full_name} — MoldCheck.pt`,
    html,
    replyTo: data.email,
  });

  if (error) {
    console.error("[contact-form] Resend failure response:", JSON.stringify(error));
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }

  console.log("[contact-form] Resend success response — message id:", result?.id ?? "unknown");
}
