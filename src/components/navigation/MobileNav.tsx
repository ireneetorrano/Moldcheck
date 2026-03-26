"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { activeLocales, localeLabels, localeMarkers, type ActiveLocale } from "@/config/locales";
import { getGlobalPath } from "@/lib/routing/paths";
import { Link, usePathname as useIntlPathname } from "@/lib/i18n/navigation";
import { getLocalizedArticlePath, getLocalizedGlobalPath } from "@/config/routeMap";
import { a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import { a5MoldRiskSlugs } from "@/features/content/data/articles/a5-mold-risk-guide";
import { a2BleachSlugs } from "@/features/content/data/articles/a2-bleach";
import { a3HealthSlugs } from "@/features/content/data/articles/a3-health";
import { a1BlackMoldSlugs } from "@/features/content/data/articles/a1-black-mold";

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

const navLabels: Record<
  ActiveLocale,
  { articles: string; services: string; about: string; contact: string }
> = {
  pt: { articles: "Artigos", services: "Serviços", about: "Sobre", contact: "Contacto" },
  en: { articles: "Articles", services: "Services", about: "About", contact: "Contact" },
  fr: { articles: "Articles", services: "Services", about: "À propos", contact: "Contact" },
  de: { articles: "Artikel", services: "Dienste", about: "Über", contact: "Kontakt" },
  nl: { articles: "Artikelen", services: "Diensten", about: "Over", contact: "Contact" },
  it: { articles: "Articoli", services: "Servizi", about: "Chi siamo", contact: "Contatti" },
  es: { articles: "Artículos", services: "Servicios", about: "Sobre nosotros", contact: "Contacto" },
};

const navKeys = ["articles", "services", "about", "contact"] as const;

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "#2a7a75" }}>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="8" cy="8" rx="3" ry="7" stroke="currentColor" strokeWidth="1.4" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.4" />
      <line x1="2.5" y1="4.5" x2="13.5" y2="4.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2.5" y1="11.5" x2="13.5" y2="11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function MobileNav({ locale }: { locale: ActiveLocale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const intlPathname = useIntlPathname();
  const params = useParams();
  const labels = navLabels[locale];
  const isDynamicPath = intlPathname.includes("[");

  const currentSlug = typeof params?.slug === "string" ? params.slug : null;
  const slugMap = currentSlug ? findArticleSlugMap(locale, currentSlug) : null;

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        className="mobile-nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`mobile-nav__bar${open ? " is-open" : ""}`} />
        <span className={`mobile-nav__bar${open ? " is-open" : ""}`} />
        <span className={`mobile-nav__bar${open ? " is-open" : ""}`} />
      </button>

      {/* Drawer */}
      {open && (
        <div className="mobile-nav__drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <nav className="mobile-nav__links" aria-label="Primary">
            {navKeys.map((key) => {
              const href = getGlobalPath(locale, key);
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <a
                  key={key}
                  href={href}
                  className={`mobile-nav__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {labels[key]}
                </a>
              );
            })}
          </nav>

          <div className="mobile-nav__lang-section">
            <div className="mobile-nav__lang-label">
              <GlobeIcon />
              <span>{localeMarkers[locale]}</span>
            </div>
            <div className="mobile-nav__lang-options">
              {activeLocales.map((loc) => {
                if (slugMap) {
                  const targetSlug = slugMap[loc];
                  const href = targetSlug
                    ? getLocalizedArticlePath(loc, targetSlug)
                    : getLocalizedGlobalPath(loc, "articles");
                  return (
                    <a
                      key={loc}
                      href={href}
                      className={`mobile-nav__lang-option${loc === locale ? " is-active" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      {localeLabels[loc]}
                    </a>
                  );
                }
                return (
                  <Link
                    key={loc}
                    href={isDynamicPath ? ({ pathname: intlPathname, params } as never) : (intlPathname as never)}
                    locale={loc}
                    className={`mobile-nav__lang-option${loc === locale ? " is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {localeLabels[loc]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
