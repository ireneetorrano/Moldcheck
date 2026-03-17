"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import { SubscriptionForm } from "./SubscriptionForm";

export function NewsletterSection({ locale }: { locale: ActiveLocale }) {
  const t = useTranslations("NewsletterSection");
  const [open, setOpen] = useState(false);

  return (
    <section className="newsletter-section" aria-label={t("title")}>
      <div className="newsletter-section__row">
        <div className="newsletter-section__text">
          <h2 className="newsletter-section__title">{t("title")}</h2>
          <p className="newsletter-section__description">{t("description")}</p>
        </div>
        {open ? (
          <div className="newsletter-section__form">
            <SubscriptionForm locale={locale} />
          </div>
        ) : (
          <div className="newsletter-section__action">
            <button
              type="button"
              className="newsletter-section__cta"
              onClick={() => setOpen(true)}
            >
              {t("button")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
