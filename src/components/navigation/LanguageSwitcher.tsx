"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { activeLocales, localeLabels, localeMarkers, type ActiveLocale } from "@/config/locales";
import { Link, usePathname } from "@/lib/i18n/navigation";

export function LanguageSwitcher({ currentLocale }: { currentLocale: ActiveLocale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const isDynamicPath = pathname.includes("[");

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
              {isDynamicPath ? (
                <Link
                  className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                  href={{ pathname, params } as never}
                  locale={locale}
                  onClick={() => setOpen(false)}
                >
                  {localeLabels[locale]}
                </Link>
              ) : (
                <Link
                  className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                  href={pathname as never}
                  locale={locale}
                  onClick={() => setOpen(false)}
                >
                  {localeLabels[locale]}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
