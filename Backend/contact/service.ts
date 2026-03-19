import { validateContactForm, hasErrors, type ContactFormData } from "./schema";
import { insertContactSubmission } from "./supabase";
import { sendContactEmail } from "./email";

export type ContactServiceResult =
  | { ok: true }
  | { ok: false; status: number; error: string; fields?: Record<string, string> };

export async function handleContactSubmission(
  raw: Record<string, unknown>,
): Promise<ContactServiceResult> {
  // Honeypot — silent discard
  if (raw.honeypot) return { ok: true };

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
    return { ok: false, status: 422, error: "Validation failed", fields: errors as Record<string, string> };
  }

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

  try {
    await insertContactSubmission(submission);
  } catch (err) {
    console.error("[contact] Supabase error:", err);
    return { ok: false, status: 500, error: "Database error" };
  }

  try {
    await sendContactEmail(submission);
  } catch (err) {
    // Email failure is non-fatal — submission is already stored
    console.error("[contact] Resend error:", err);
  }

  return { ok: true };
}
