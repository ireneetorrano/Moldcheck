"use client";

import { usePathname } from "next/navigation";
import type { ActiveLocale } from "@/config/locales";
import { getGlobalPath } from "@/lib/routing/paths";

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
type NavKey = typeof navKeys[number];

export function PrimaryNav({ locale }: { locale: ActiveLocale }) {
  const labels = navLabels[locale];
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      {navKeys.map((key) => {
        const href = getGlobalPath(locale, key);
        const isActive = pathname === href || (pathname?.startsWith(href + "/") ?? false);
        return (
          <a
            key={key}
            href={href}
            className={`site-nav__link${isActive ? " is-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {labels[key]}
          </a>
        );
      })}
    </nav>
  );
}
