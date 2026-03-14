"use client";

import { useState } from "react";
import { activeLocales, localeLabels, localeMarkers, type ActiveLocale } from "@/config/locales";

export function LanguageSwitcher({ currentLocale }: { currentLocale: ActiveLocale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`language-switcher${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="language-switcher__trigger"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{localeMarkers[currentLocale]}</span>
        <span className="language-switcher__chevron">▾</span>
      </button>
      {open ? (
        <ul className="language-switcher__menu">
          {activeLocales.map((locale) => (
            <li key={locale}>
              <a
                className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                href={`/${locale}`}
              >
                {localeLabels[locale]}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
