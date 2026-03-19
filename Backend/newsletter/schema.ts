export const ACTIVE_LOCALES = ["es", "pt", "en", "fr", "de", "nl", "it"] as const;
export type NewsletterLocale = (typeof ACTIVE_LOCALES)[number];

export interface NewsletterPayload {
  email: string;
  locale: string;
  consentAccepted: boolean;
  sourcePage?: string;
  hp?: string; // honeypot
}

export interface NewsletterValidated {
  email: string;
  emailNorm: string;
  locale: NewsletterLocale;
  consentAccepted: true;
  sourcePage: string;
}

export type NewsletterValidationError =
  | { field: "email"; message: string }
  | { field: "locale"; message: string }
  | { field: "consent"; message: string }
  | { field: "honeypot"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNewsletterPayload(
  raw: NewsletterPayload,
): { ok: true; data: NewsletterValidated } | { ok: false; error: NewsletterValidationError } {
  if (raw.hp && raw.hp.trim() !== "") {
    return { ok: false, error: { field: "honeypot", message: "Bot detected." } };
  }

  const email = (raw.email ?? "").trim();
  if (!email) return { ok: false, error: { field: "email", message: "Email is required." } };
  if (!EMAIL_RE.test(email)) return { ok: false, error: { field: "email", message: "Invalid email address." } };
  const emailNorm = email.toLowerCase();

  const locale = (raw.locale ?? "").trim() as NewsletterLocale;
  if (!ACTIVE_LOCALES.includes(locale)) {
    return { ok: false, error: { field: "locale", message: "Invalid locale." } };
  }

  if (raw.consentAccepted !== true) {
    return { ok: false, error: { field: "consent", message: "Consent is required." } };
  }

  return {
    ok: true,
    data: {
      email,
      emailNorm,
      locale,
      consentAccepted: true,
      sourcePage: (raw.sourcePage ?? "").trim() || "/",
    },
  };
}
