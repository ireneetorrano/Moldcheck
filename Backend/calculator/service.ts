import { isValidRiskScore } from "./schema";
import { isValidEmail, verifyHcaptcha } from "@backend/shared/validation";
import { isActiveLocale } from "@/config/locales";

export type CalculatorServiceResult =
  | { ok: true; duplicate?: boolean }
  | { ok: false; httpStatus: number; error: string; code: string };

export async function handleCalculatorCompleted(
  body: unknown,
): Promise<CalculatorServiceResult> {
  const raw = body as Record<string, unknown>;
  const { email, locale, riskScore, hcaptchaToken } = raw;

  if (!isValidEmail(email)) {
    return { ok: false, httpStatus: 422, error: "Invalid email", code: "VALIDATION_ERROR" };
  }

  if (!isValidRiskScore(riskScore)) {
    return {
      ok: false,
      httpStatus: 422,
      error: "Invalid riskScore — must be integer 0–100",
      code: "VALIDATION_ERROR",
    };
  }

  const safeLocale = isActiveLocale(String(locale)) ? (locale as string) : "pt";

  if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY) {
    if (!hcaptchaToken || typeof hcaptchaToken !== "string") {
      return { ok: false, httpStatus: 422, error: "Captcha verification failed", code: "CAPTCHA_ERROR" };
    }
    const valid = await verifyHcaptcha(hcaptchaToken);
    if (!valid) {
      return { ok: false, httpStatus: 422, error: "Captcha verification failed", code: "CAPTCHA_ERROR" };
    }
  }

  // Brevo integration is handled by the route for now (legacy)
  // Future: move upsertContact / applyTag here
  return { ok: true };
}
