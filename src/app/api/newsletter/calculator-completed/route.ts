import { NextRequest, NextResponse } from "next/server";
import { upsertContact, applyTag } from "@/lib/brevo/client";
import { BrevoError } from "@/lib/brevo/types";
import { isValidEmail, verifyHcaptcha } from "@/lib/validation";
import { isActiveLocale } from "@/config/locales";
import type { ApiErrorResponse, CalculatorCompletedResponse } from "@/features/newsletter/types";

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

  const { email, locale, riskScore, hcaptchaToken } = body as Record<string, unknown>;

  // Validate email
  if (!isValidEmail(email)) {
    return NextResponse.json<ApiErrorResponse>(
      { error: "Invalid email", code: "VALIDATION_ERROR" },
      { status: 422 },
    );
  }

  // Validate riskScore
  if (typeof riskScore !== "number" || !Number.isInteger(riskScore) || riskScore < 0 || riskScore > 100) {
    return NextResponse.json<ApiErrorResponse>(
      { error: "Invalid riskScore — must be integer 0–100", code: "VALIDATION_ERROR" },
      { status: 422 },
    );
  }

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
    await upsertContact({
      email: (email as string).trim(),
      locale: safeLocale as never,
      riskScore: riskScore as number,
    });
    await applyTag((email as string).trim(), "calculator_completed");
    return NextResponse.json<CalculatorCompletedResponse>({ ok: true });
  } catch (err) {
    if (err instanceof BrevoError && err.statusCode === 409) {
      return NextResponse.json<CalculatorCompletedResponse>({ ok: true, duplicate: true });
    }
    console.error("[calculator-completed] Brevo error:", err);
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
