import type { ActiveLocale } from "@/config/locales";

export interface SubscribePayload {
  email: string;
  locale: ActiveLocale;
  gdprConsent: true;
  hcaptchaToken?: string;
}

export interface SubscribeResponse {
  ok: true;
  duplicate?: boolean;
}

export interface CalculatorCompletedPayload {
  email: string;
  locale: ActiveLocale;
  riskScore: number;
  hcaptchaToken?: string;
}

export interface CalculatorCompletedResponse {
  ok: true;
  duplicate?: boolean;
}

export interface ApiErrorResponse {
  error: string;
  code: "VALIDATION_ERROR" | "ESP_ERROR" | "CAPTCHA_ERROR";
}
