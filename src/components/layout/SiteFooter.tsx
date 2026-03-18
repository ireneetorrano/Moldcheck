import Image from "next/image";
import type { ActiveLocale } from "@/config/locales";
import { getGlobalPath } from "@/lib/routing/paths";
import { NewsletterSection } from "@/features/newsletter/components/NewsletterSection";

const copy: Record<
  ActiveLocale,
  {
    brandBody: string;
    productsLabel: string;
    articles: string;
    company: string;
    about: string;
    editorialPolicy: string;
    contact: string;
    legal: string;
    privacy: string;
    services: string;
    disclaimer: string;
  }
> = {
  pt: {
    brandBody: "Publicação editorial independente sobre bolor, humidade e qualidade do ar interior em Portugal.",
    productsLabel: "Produtos",
    articles: "Artigos",
    company: "Empresa",
    about: "Sobre",
    editorialPolicy: "Política editorial",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Política de Privacidade",
    services: "Serviços",
    disclaimer: "Conteúdo informativo. Não substitui inspeção profissional nem aconselhamento médico.",
  },
  en: {
    brandBody: "Independent editorial publication on mold, damp and indoor air quality in Portugal.",
    productsLabel: "Products",
    articles: "Articles",
    company: "Company",
    about: "About",
    editorialPolicy: "Editorial policy",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    services: "Services",
    disclaimer: "Informational content only. Not a substitute for professional inspection or medical advice.",
  },
  fr: {
    brandBody: "Publication éditoriale indépendante sur les moisissures, l'humidité et la qualité de l'air intérieur au Portugal.",
    productsLabel: "Produits",
    articles: "Articles",
    company: "Entreprise",
    about: "À propos",
    editorialPolicy: "Politique éditoriale",
    contact: "Contact",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    services: "Services",
    disclaimer: "Contenu informatif uniquement. Ne remplace pas une inspection professionnelle ni un avis médical.",
  },
  de: {
    brandBody: "Unabhängige redaktionelle Publikation zu Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.",
    productsLabel: "Produkte",
    articles: "Artikel",
    company: "Unternehmen",
    about: "Über uns",
    editorialPolicy: "Redaktionsrichtlinie",
    contact: "Kontakt",
    legal: "Rechtliches",
    privacy: "Datenschutzerklärung",
    services: "Dienste",
    disclaimer: "Nur zu Informationszwecken. Kein Ersatz für professionelle Inspektion oder medizinischen Rat.",
  },
  nl: {
    brandBody: "Onafhankelijke redactionele publicatie over schimmel, vocht en binnenluchtkwaliteit in Portugal.",
    productsLabel: "Producten",
    articles: "Artikelen",
    company: "Bedrijf",
    about: "Over ons",
    editorialPolicy: "Redactioneel beleid",
    contact: "Contact",
    legal: "Juridisch",
    privacy: "Privacybeleid",
    services: "Diensten",
    disclaimer: "Alleen informatieve inhoud. Geen vervanging voor professionele inspectie of medisch advies.",
  },
  it: {
    brandBody: "Pubblicazione editoriale indipendente su muffa, umidità e qualità dell'aria interna in Portogallo.",
    productsLabel: "Prodotti",
    articles: "Articoli",
    company: "Azienda",
    about: "Chi siamo",
    editorialPolicy: "Politica editoriale",
    contact: "Contatti",
    legal: "Legale",
    privacy: "Informativa sulla Privacy",
    services: "Servizi",
    disclaimer: "Solo contenuto informativo. Non sostituisce un'ispezione professionale né una consulenza medica.",
  },
  es: {
    brandBody: "Publicación editorial independiente sobre moho, humedad y calidad del aire interior en Portugal.",
    productsLabel: "Productos",
    articles: "Artículos",
    company: "Empresa",
    about: "Sobre",
    editorialPolicy: "Política editorial",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Política de Privacidad",
    services: "Servicios",
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

          <div className="site-footer__nav">
            <div className="site-footer__column">
              <h3>{c.productsLabel}</h3>
              <a href={getGlobalPath(locale, "articles")}>{c.articles}</a>
              <a href={getGlobalPath(locale, "services")}>{c.services}</a>
            </div>

            <div className="site-footer__column">
              <h3>{c.company}</h3>
              <a href={getGlobalPath(locale, "about")}>{c.about}</a>
              <a href={getGlobalPath(locale, "editorialPolicy")}>{c.editorialPolicy}</a>
              <a href="https://www.inspectos.pt/" target="_blank" rel="noreferrer">InspectOS</a>
              <a href="https://www.propcheck.pt/" target="_blank" rel="noreferrer">PropCheck.pt</a>
            </div>

            <div className="site-footer__column">
              <h3>{c.legal}</h3>
              <a href={getGlobalPath(locale, "contact")}>{c.contact}</a>
              <a href={getGlobalPath(locale, "privacy")}>{c.privacy}</a>
            </div>
          </div>
        </div>

        <NewsletterSection locale={locale} />

        <div className="site-footer__bottom">
          <div className="site-footer__bottom-inner">
            <span className="site-footer__copyright">
              © MoldCheck.pt{" "}
              <a
                href="https://www.fairbank.pt/"
                target="_blank"
                rel="noreferrer"
                className="site-footer__copyright-link"
              >
                FAIRBANK
              </a>
              {" "}Group initiative
            </span>
            <span className="site-footer__disclaimer">{c.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
