import type { ActiveLocale } from "@/config/locales";

export type BrevoTag = "checklist_download" | "calculator_completed";

export interface BrevoContact {
  email: string;
  locale: ActiveLocale;
  riskScore?: number;
}

export class BrevoError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly body?: unknown,
  ) {
    super(message);
    this.name = "BrevoError";
  }
}
