import Image from "next/image";
import type { ActiveLocale } from "@/config/locales";
import { getGlobalPath } from "@/lib/routing/paths";
import { NewsletterSection } from "@/features/newsletter/components/NewsletterSection";

const copy: Record<
  ActiveLocale,
  {
    brandBody: string;
    articles: string;
    articlesLabel: string;
    company: string;
    about: string;
    editorialPolicy: string;
    contact: string;
    legal: string;
    privacy: string;
    services: string;
    copyright: string;
    disclaimer: string;
  }
> = {
  pt: {
    brandBody: "Publicação editorial independente sobre bolor, humidade e qualidade do ar interior em Portugal.",
    articles: "Artigos",
    articlesLabel: "Artigos",
    company: "Companhia",
    about: "Sobre",
    editorialPolicy: "Política editorial",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Privacidade",
    services: "Serviços",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Conteúdo informativo. Não substitui inspeção profissional nem aconselhamento médico.",
  },
  en: {
    brandBody: "Independent editorial publication on mold, damp and indoor air quality in Portugal.",
    articles: "Articles",
    articlesLabel: "Articles",
    company: "Company",
    about: "About",
    editorialPolicy: "Editorial policy",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy",
    services: "Services",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Informational content only. Not a substitute for professional inspection or medical advice.",
  },
  fr: {
    brandBody: "Publication éditoriale indépendante sur les moisissures, l'humidité et la qualité de l'air intérieur au Portugal.",
    articles: "Articles",
    articlesLabel: "Articles",
    company: "Entreprise",
    about: "À propos",
    editorialPolicy: "Politique éditoriale",
    contact: "Contact",
    legal: "Mentions légales",
    privacy: "Confidentialité",
    services: "Services",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Contenu informatif uniquement. Ne remplace pas une inspection professionnelle ni un avis médical.",
  },
  de: {
    brandBody: "Unabhängige redaktionelle Publikation zu Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.",
    articles: "Artikel",
    articlesLabel: "Artikel",
    company: "Unternehmen",
    about: "Über uns",
    editorialPolicy: "Redaktionsrichtlinie",
    contact: "Kontakt",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    services: "Dienste",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Nur zu Informationszwecken. Kein Ersatz für professionelle Inspektion oder medizinischen Rat.",
  },
  nl: {
    brandBody: "Onafhankelijke redactionele publicatie over schimmel, vocht en binnenluchtkwaliteit in Portugal.",
    articles: "Artikelen",
    articlesLabel: "Artikelen",
    company: "Bedrijf",
    about: "Over ons",
    editorialPolicy: "Redactioneel beleid",
    contact: "Contact",
    legal: "Juridisch",
    privacy: "Privacy",
    services: "Diensten",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Alleen informatieve inhoud. Geen vervanging voor professionele inspectie of medisch advies.",
  },
  it: {
    brandBody: "Pubblicazione editoriale indipendente su muffa, umidità e qualità dell'aria interna in Portogallo.",
    articles: "Articoli",
    articlesLabel: "Articoli",
    company: "Azienda",
    about: "Chi siamo",
    editorialPolicy: "Politica editoriale",
    contact: "Contatti",
    legal: "Legale",
    privacy: "Privacy",
    services: "Servizi",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Solo contenuto informativo. Non sostituisce un'ispezione professionale né una consulenza medica.",
  },
  es: {
    brandBody: "Publicación editorial independiente sobre moho, humedad y calidad del aire interior en Portugal.",
    articles: "Artículos",
    articlesLabel: "Artículos",
    company: "Compañía",
    about: "Sobre",
    editorialPolicy: "Política editorial",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Privacidad",
    services: "Servicios",
    copyright: `© ${new Date().getFullYear()} MoldCheck.pt — FAIRBANK Group`,
    disclaimer: "Contenido informativo. No sustituye una inspección profesional ni asesoramiento médico.",
  },
};

export function SiteFooter({ locale }: { locale: ActiveLocale }) {
  const c = copy[locale];

  return (
    <footer className="site-footer-shell">
      <div className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Image
              src="/img/logo.png"
              alt="MoldCheck.pt"
              width={160}
              height={48}
              className="site-footer__logo"
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
            <p>{c.brandBody}</p>
          </div>

          <div className="site-footer__column">
            <h3>{c.articlesLabel}</h3>
            <a href={getGlobalPath(locale, "articles")}>{c.articles}</a>
            <a href={getGlobalPath(locale, "services")}>{c.services}</a>
          </div>

          <div className="site-footer__column">
            <h3>{c.company}</h3>
            <a href={getGlobalPath(locale, "about")}>{c.about}</a>
            <a href={getGlobalPath(locale, "editorialPolicy")}>{c.editorialPolicy}</a>
          </div>

          <div className="site-footer__column">
            <h3>{c.legal}</h3>
            <a href={getGlobalPath(locale, "privacy")}>{c.privacy}</a>
            <a href={getGlobalPath(locale, "contact")}>{c.contact}</a>
          </div>
        </div>

        <NewsletterSection locale={locale} />

        <div className="site-footer__bottom">
          <div className="site-footer__bottom-inner">
            <span className="site-footer__copyright">{c.copyright}</span>
            <span className="site-footer__disclaimer">{c.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
