"use client";

import { useParams } from "next/navigation";
import { activeLocales, localeLabels, localeMarkers, type ActiveLocale } from "@/config/locales";
import { Link, usePathname } from "@/lib/i18n/navigation";

function GlobeIcon() {
  return (
    <svg
      className="language-switcher__globe"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="8" cy="8" rx="3" ry="7" stroke="currentColor" strokeWidth="1.4" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.4" />
      <line x1="2.5" y1="4.5" x2="13.5" y2="4.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2.5" y1="11.5" x2="13.5" y2="11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function LanguageSwitcher({ currentLocale }: { currentLocale: ActiveLocale }) {
  const pathname = usePathname();
  const params = useParams();
  const isDynamicPath = pathname.includes("[");

  return (
    <div className="language-switcher">
      <button type="button" className="language-switcher__trigger" aria-haspopup="listbox">
        <GlobeIcon />
        <span className="language-switcher__code">{localeMarkers[currentLocale]}</span>
        <span className="language-switcher__chevron" aria-hidden="true">▾</span>
      </button>
      <ul className="language-switcher__menu" role="listbox">
        {activeLocales.map((locale) => (
          <li key={locale}>
            {isDynamicPath ? (
              <Link
                className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                href={{ pathname, params } as never}
                locale={locale}
                role="option"
                aria-selected={locale === currentLocale}
              >
                {localeLabels[locale]}
              </Link>
            ) : (
              <Link
                className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                href={pathname as never}
                locale={locale}
                role="option"
                aria-selected={locale === currentLocale}
              >
                {localeLabels[locale]}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
