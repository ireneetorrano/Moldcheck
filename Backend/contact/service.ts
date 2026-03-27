import { validateContactForm, hasErrors, type ContactFormData } from "./schema";
import { insertContactSubmission } from "./supabase";
import { sendContactEmail } from "./email";

export type ContactServiceResult =
  | { ok: true }
  | { ok: false; status: number; error: string; fields?: Record<string, string> };

export async function handleContactSubmission(
  raw: Record<string, unknown>,
): Promise<ContactServiceResult> {
  console.log("[contact-form] request received");
  console.log("[contact-form] raw payload keys:", Object.keys(raw));

  // Honeypot — discard only if non-empty after trim
  const honeypotValue = String(raw.honeypot ?? "").trim();
  console.log("[contact-form] honeypot value:", JSON.stringify(honeypotValue));
  if (honeypotValue.length > 0) {
    console.log("[contact-form] honeypot triggered — discarding");
    return { ok: true };
  }

  const data: ContactFormData = {
    fullName: String(raw.fullName ?? ""),
    email: String(raw.email ?? ""),
    countryPrefix: String(raw.countryPrefix ?? ""),
    phoneNumber: String(raw.phoneNumber ?? ""),
    municipality: String(raw.municipality ?? ""),
    message: String(raw.message ?? ""),
    consentAccepted: raw.consentAccepted === true,
  };

  const errors = validateContactForm(data);
  if (hasErrors(errors)) {
    console.log("[contact-form] validation failed:", JSON.stringify(errors));
    return { ok: false, status: 422, error: "Validation failed", fields: errors as Record<string, string> };
  }

  console.log("[contact-form] validation passed — from:", data.email);

  const now = new Date().toISOString();
  const sourcePage = typeof raw.sourcePage === "string" ? raw.sourcePage : "/contact";

  const submission = {
    full_name: data.fullName.trim(),
    email: data.email.trim().toLowerCase(),
    country_prefix: data.countryPrefix.trim(),
    phone_number: data.phoneNumber.replace(/\s+/g, ""),
    municipality: data.municipality.trim(),
    message: data.message.trim(),
    consent_accepted: true,
    source_page: sourcePage,
    created_at: now,
  };

  // DB insert is non-fatal — email must fire regardless
  try {
    await insertContactSubmission(submission);
    console.log("[contact-form] saved to database");
  } catch (err) {
    console.error("[contact-form] database error (non-fatal):", err instanceof Error ? err.message : err);
    // Do NOT return here — continue to email send
  }

  // Email send is the critical path
  console.log("[contact-form] route reached — about to call Resend");
  console.log("[contact-form] CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL ?? "info@moldcheck.pt (default)");
  console.log("[contact-form] CONTACT_FROM_EMAIL:", process.env.CONTACT_FROM_EMAIL ?? "MoldCheck <no-reply@moldcheck.pt> (default)");
  console.log("[contact-form] RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

  try {
    await sendContactEmail(submission);
    console.log("[contact-form] email sent successfully");
  } catch (err) {
    console.error("[contact-form] email send failed:", err instanceof Error ? err.message : err);
    // Still return ok — submission is stored (or was attempted)
  }

  console.log("[contact-form] returning ok:true to frontend");
  return { ok: true };
}
