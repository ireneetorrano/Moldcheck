import type { ActiveLocale } from "@/config/locales";

export interface CalculatorCompletedPayload {
  email: string;
  locale: string;
  riskScore: number;
  hcaptchaToken?: string;
}

export type RiskBand = "low" | "medium" | "high";

export function getRiskBand(score: number): RiskBand {
  if (score < 34) return "low";
  if (score < 67) return "medium";
  return "high";
}

export function isValidRiskScore(score: unknown): score is number {
  return typeof score === "number" && Number.isInteger(score) && score >= 0 && score <= 100;
}
