import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, hasErrors, type ContactFormData } from "@/lib/contact/schema";
import { insertContactSubmission } from "@/lib/contact/supabase";
import { sendContactEmail } from "@/lib/contact/email";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot check — bots fill this field
  if (raw.honeypot) {
    return NextResponse.json({ ok: true }); // silent discard
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
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
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
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  try {
    await sendContactEmail(submission);
  } catch (err) {
    // Email failure is non-fatal — submission is already stored
    console.error("[contact] Resend error:", err);
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
export function PUT() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
export function DELETE() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
export function PATCH() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}
