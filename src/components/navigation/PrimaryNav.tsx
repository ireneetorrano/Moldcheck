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
  es: { articles: "Artículos", services: "Servicios", about: "Sobre", contact: "Contacto" },
};

export function PrimaryNav({ locale }: { locale: ActiveLocale }) {
  const labels = navLabels[locale];

  return (
    <nav className="site-nav" aria-label="Primary">
      <a href={getGlobalPath(locale, "articles")} className="site-nav__link">
        {labels.articles}
      </a>
      <a href={getGlobalPath(locale, "services")} className="site-nav__link">
        {labels.services}
      </a>
      <a href={getGlobalPath(locale, "about")} className="site-nav__link">
        {labels.about}
      </a>
      <a href={getGlobalPath(locale, "contact")} className="site-nav__link">
        {labels.contact}
      </a>
    </nav>
  );
}
