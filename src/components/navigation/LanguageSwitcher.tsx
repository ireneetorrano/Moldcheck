"use client";

import { useParams, usePathname as useNextPathname } from "next/navigation";
import { activeLocales, localeLabels, localeMarkers, type ActiveLocale } from "@/config/locales";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { getLocalizedArticlePath, getLocalizedGlobalPath } from "@/config/routeMap";
import { a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import { a5MoldRiskSlugs } from "@/features/content/data/articles/a5-mold-risk-guide";
import { a2BleachSlugs } from "@/features/content/data/articles/a2-bleach";
import { a3HealthSlugs } from "@/features/content/data/articles/a3-health";
import { a1BlackMoldSlugs } from "@/features/content/data/articles/a1-black-mold";

// All known article slug maps — add new articles here as they are published
const articleSlugMaps: Record<ActiveLocale, string>[] = [a4PortugalSlugs, a5MoldRiskSlugs, a2BleachSlugs, a3HealthSlugs, a1BlackMoldSlugs];

function findArticleSlugMap(
  currentLocale: ActiveLocale,
  currentSlug: string
): Record<ActiveLocale, string> | null {
  for (const map of articleSlugMaps) {
    if (map[currentLocale] === currentSlug) return map;
  }
  return null;
}

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
  // next-intl pathname: strips locale prefix → e.g. "/articles/[slug]" or "/articulos/segundo-peor..."
  const pathname = usePathname();
  // next/navigation pathname: full path → e.g. "/es/articulos/segundo-peor-problema-moho-europa"
  const fullPathname = useNextPathname();
  const params = useParams();
  const isDynamicPath = pathname.includes("[");

  // params.slug is the raw URL slug value — reliable regardless of locale
  const currentSlug = typeof params?.slug === "string" ? params.slug : null;
  const slugMap = currentSlug ? findArticleSlugMap(currentLocale, currentSlug) : null;

  return (
    <div className="language-switcher">
      <button type="button" className="language-switcher__trigger" aria-haspopup="listbox">
        <GlobeIcon />
        <span className="language-switcher__code">{localeMarkers[currentLocale]}</span>
        <span className="language-switcher__chevron" aria-hidden="true">▾</span>
      </button>
      <ul className="language-switcher__menu" role="listbox">
        {activeLocales.map((locale) => {
          // Article page: build the translated URL directly from the slug map
          if (slugMap) {
            const targetSlug = slugMap[locale];
            const href = targetSlug
              ? getLocalizedArticlePath(locale, targetSlug)
              : getLocalizedGlobalPath(locale, "articles");
            return (
              <li key={locale}>
                <a
                  href={href}
                  className={`language-switcher__option${locale === currentLocale ? " is-active" : ""}`}
                  role="option"
                  aria-selected={locale === currentLocale}
                >
                  {localeLabels[locale]}
                </a>
              </li>
            );
          }

          // All other pages: use next-intl Link
          return (
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
          );
        })}
      </ul>
    </div>
  );
}
