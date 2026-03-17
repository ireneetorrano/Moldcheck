import { NextRequest, NextResponse } from "next/server";
import { upsertContact, applyTag } from "@/lib/brevo/client";
import { BrevoError } from "@/lib/brevo/types";
import { isValidEmail, verifyHcaptcha } from "@/lib/validation";
import { isActiveLocale } from "@/config/locales";
import type { ApiErrorResponse, SubscribeResponse } from "@/features/newsletter/types";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json<ApiErrorResponse>(
      { error: "Invalid JSON", code: "VALIDATION_ERROR" },
      { status: 422 },
    );
  }

  const { email, locale, gdprConsent, hcaptchaToken } = body as Record<string, unknown>;

  // Validate email
  if (!isValidEmail(email)) {
    return NextResponse.json<ApiErrorResponse>(
      { error: "Invalid email", code: "VALIDATION_ERROR" },
      { status: 422 },
    );
  }

  // Validate GDPR consent
  if (gdprConsent !== true) {
    return NextResponse.json<ApiErrorResponse>(
      { error: "Consent required", code: "VALIDATION_ERROR" },
      { status: 422 },
    );
  }

  // Validate locale
  const safeLocale = isActiveLocale(String(locale)) ? (locale as string) : "pt";

  // Verify hCaptcha if configured
  if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY) {
    if (!hcaptchaToken || typeof hcaptchaToken !== "string") {
      return NextResponse.json<ApiErrorResponse>(
        { error: "Captcha verification failed", code: "CAPTCHA_ERROR" },
        { status: 422 },
      );
    }
    const valid = await verifyHcaptcha(hcaptchaToken);
    if (!valid) {
      return NextResponse.json<ApiErrorResponse>(
        { error: "Captcha verification failed", code: "CAPTCHA_ERROR" },
        { status: 422 },
      );
    }
  }

  try {
    await upsertContact({ email: email.trim(), locale: safeLocale as never });
    await applyTag(email.trim(), "checklist_download");
    return NextResponse.json<SubscribeResponse>({ ok: true });
  } catch (err) {
    if (err instanceof BrevoError && err.statusCode === 409) {
      // Duplicate contact — idempotent success
      return NextResponse.json<SubscribeResponse>({ ok: true, duplicate: true });
    }
    console.error("[subscribe] Brevo error:", err);
    return NextResponse.json<ApiErrorResponse>(
      { error: "ESP error", code: "ESP_ERROR" },
      { status: 500 },
    );
  }
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
