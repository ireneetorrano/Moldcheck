import type { ActiveLocale } from "@/config/locales";

export interface SubscribePayload {
  email: string;
  locale: ActiveLocale;
  consentAccepted: boolean;
  sourcePage?: string;
  hp?: string;
}

export interface SubscribeResponse {
  status: "subscribed" | "already_subscribed";
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
  field?: string;
}
