"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import { SubscriptionForm } from "./SubscriptionForm";

const STORAGE_KEY = "newsletter_popup_dismissed";

export function NewsletterPopup({ locale }: { locale: ActiveLocale }) {
  const t = useTranslations("NewsletterPopup");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="newsletter-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t("title")}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="newsletter-popup">
        <button
          className="newsletter-popup__close"
          onClick={dismiss}
          aria-label={t("close")}
          type="button"
        >
          ✕
        </button>
        <p className="newsletter-popup__eyebrow">MoldCheck.pt</p>
        <h2 className="newsletter-popup__title">{t("title")}</h2>
        <p className="newsletter-popup__description">{t("description")}</p>
        <SubscriptionForm locale={locale} onSuccess={dismiss} />
      </div>
    </div>
  );
}
