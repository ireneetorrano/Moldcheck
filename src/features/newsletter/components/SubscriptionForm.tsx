"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import { useSubscribe } from "../hooks/useSubscribe";

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

  if (status === "subscribed") {
    onSuccess?.();
    return (
      <div className="sub-form__result sub-form__result--success" role="status">
        <p className="sub-form__result-title">{t("successTitle")}</p>
        <p className="sub-form__result-body">{t("successBody")}</p>
      </div>
    );
  }

  if (status === "already_subscribed") {
    return (
      <div className="sub-form__result sub-form__result--info" role="status">
        <p className="sub-form__result-body">{t("successAlreadySubscribed")}</p>
      </div>
    );
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
    await submit({ email, locale, consentAccepted: true });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="sub-form">
      <div className="sub-form__field">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          className={`sub-form__input${emailError ? " sub-form__input--error" : ""}`}
          aria-label={t("emailLabel")}
          aria-describedby={emailError ? "newsletter-email-error" : undefined}
          aria-invalid={!!emailError}
        />
        {emailError && (
          <p id="newsletter-email-error" className="sub-form__field-error" role="alert">
            {emailError}
          </p>
        )}
      </div>

      <div className="sub-form__consent">
        <input
          id="newsletter-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="sub-form__checkbox"
          aria-describedby={consentError ? "newsletter-consent-error" : undefined}
          aria-invalid={!!consentError}
        />
        <label htmlFor="newsletter-consent" className="sub-form__consent-label">
          {t("consentLabel")}
        </label>
      </div>
      {consentError && (
        <p id="newsletter-consent-error" className="sub-form__field-error" role="alert">
          {consentError}
        </p>
      )}

      {status === "error" && (
        <p className="sub-form__generic-error" role="alert">
          {/* In dev the hook exposes the real server error; in prod falls back to generic */}
          {t("errorGeneric")}
          {process.env.NODE_ENV !== "production" && error && (
            <span style={{ display: "block", fontSize: "0.7rem", opacity: 0.7, marginTop: "0.25rem" }}>
              {error}
            </span>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="sub-form__submit"
      >
        {status === "loading" ? "…" : t("submitButton")}
      </button>
    </form>
  );
}
