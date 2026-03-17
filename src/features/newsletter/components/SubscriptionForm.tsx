"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import { useSubscribe } from "../hooks/useSubscribe";
import { SubscriptionFormSuccess } from "./SubscriptionFormSuccess";

interface SubscriptionFormProps {
  locale: ActiveLocale;
  onSuccess?: () => void;
}

export function SubscriptionForm({ locale, onSuccess }: SubscriptionFormProps) {
  const t = useTranslations("Newsletter");
  const { status, error, submit } = useSubscribe();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [consentError, setConsentError] = useState<string | null>(null);

  if (status === "success") {
    onSuccess?.();
    return <SubscriptionFormSuccess />;
  }

  function validate(): boolean {
    let valid = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t("errorInvalidEmail"));
      valid = false;
    } else {
      setEmailError(null);
    }
    if (!consent) {
      setConsentError(t("errorConsentRequired"));
      valid = false;
    } else {
      setConsentError(null);
    }
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    await submit({ email, locale, gdprConsent: true });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700">
          {t("emailLabel")}
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          aria-describedby={emailError ? "newsletter-email-error" : undefined}
          aria-invalid={!!emailError}
        />
        {emailError && (
          <p id="newsletter-email-error" className="mt-1 text-xs text-red-600" role="alert">
            {emailError}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="newsletter-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          aria-describedby={consentError ? "newsletter-consent-error" : undefined}
          aria-invalid={!!consentError}
        />
        <label htmlFor="newsletter-consent" className="text-sm text-gray-600">
          {t("consentLabel")}
        </label>
      </div>
      {consentError && (
        <p id="newsletter-consent-error" className="text-xs text-red-600" role="alert">
          {consentError}
        </p>
      )}

      {status === "error" && error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {t("errorGeneric")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {status === "loading" ? "…" : t("submitButton")}
      </button>
    </form>
  );
}
