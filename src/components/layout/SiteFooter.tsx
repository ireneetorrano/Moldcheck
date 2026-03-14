import type { ActiveLocale } from "@/config/locales";
import { getGlobalPath } from "@/lib/routing/paths";

const footerCopy: Record<
  ActiveLocale,
  {
    brandBody: string;
    sections: string;
    legal: string;
    articles: string;
    services: string;
    about: string;
    privacy: string;
    contact: string;
  }
> = {
  pt: {
    brandBody: "Publicação editorial independente sobre bolor, humidade e qualidade do ar interior em Portugal.",
    sections: "Secções",
    legal: "Legal",
    articles: "Artigos",
    services: "Serviços",
    about: "Sobre",
    privacy: "Privacidade",
    contact: "Contacto",
  },
  en: {
    brandBody: "Independent editorial publication on mold, damp and indoor air quality in Portugal.",
    sections: "Sections",
    legal: "Legal",
    articles: "Articles",
    services: "Services",
    about: "About",
    privacy: "Privacy",
    contact: "Contact",
  },
  fr: {
    brandBody: "Publication éditoriale indépendante sur les moisissures, l’humidité et la qualité de l’air intérieur au Portugal.",
    sections: "Sections",
    legal: "Mentions",
    articles: "Articles",
    services: "Services",
    about: "À propos",
    privacy: "Confidentialité",
    contact: "Contact",
  },
  de: {
    brandBody: "Unabhängige redaktionelle Publikation zu Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.",
    sections: "Bereiche",
    legal: "Rechtliches",
    articles: "Artikel",
    services: "Dienste",
    about: "Über",
    privacy: "Datenschutz",
    contact: "Kontakt",
  },
  nl: {
    brandBody: "Onafhankelijke redactionele publicatie over schimmel, vocht en binnenluchtkwaliteit in Portugal.",
    sections: "Secties",
    legal: "Juridisch",
    articles: "Artikelen",
    services: "Diensten",
    about: "Over",
    privacy: "Privacy",
    contact: "Contact",
  },
  it: {
    brandBody: "Pubblicazione editoriale indipendente su muffa, umidità e qualità dell’aria interna in Portogallo.",
    sections: "Sezioni",
    legal: "Legale",
    articles: "Articoli",
    services: "Servizi",
    about: "Chi siamo",
    privacy: "Privacy",
    contact: "Contatti",
  },
  es: {
    brandBody: "Publicación editorial independiente sobre moho, humedad y calidad del aire interior en Portugal.",
    sections: "Secciones",
    legal: "Legal",
    articles: "Artículos",
    services: "Servicios",
    about: "Sobre",
    privacy: "Privacidad",
    contact: "Contacto",
  },
};

export function SiteFooter({ locale }: { locale: ActiveLocale }) {
  const copy = footerCopy[locale];

  return (
    <footer className="site-footer-shell">
      <div className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <h2>MoldCheck.pt</h2>
            <p>{copy.brandBody}</p>
          </div>
          <div className="site-footer__column">
            <h2>{copy.sections}</h2>
            <a href={getGlobalPath(locale, "articles")}>{copy.articles}</a>
            <a href={getGlobalPath(locale, "services")}>{copy.services}</a>
            <a href={getGlobalPath(locale, "about")}>{copy.about}</a>
          </div>
          <div className="site-footer__column">
            <h2>{copy.legal}</h2>
            <a href={getGlobalPath(locale, "privacy")}>{copy.privacy}</a>
            <a href={getGlobalPath(locale, "contact")}>{copy.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
