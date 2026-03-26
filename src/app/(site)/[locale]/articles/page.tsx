import type { Metadata } from "next";
import type { ActiveLocale } from "@/config/locales";
import { activeLocales } from "@/config/locales";
import { a4PortugalContent, a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import { a5MoldRiskContent, a5MoldRiskSlugs } from "@/features/content/data/articles/a5-mold-risk-guide";
import { a2BleachContent, a2BleachSlugs } from "@/features/content/data/articles/a2-bleach";
import { a3HealthContent, a3HealthSlugs } from "@/features/content/data/articles/a3-health";
import { a1BlackMoldContent, a1BlackMoldSlugs } from "@/features/content/data/articles/a1-black-mold";
import { getLocalizedArticlePath } from "@/config/routeMap";

const indexMeta: Record<ActiveLocale, { title: string; description: string; eyebrow: string; heading: string }> = {
  pt: { title: "Artigos sobre Bolor e Humidade — MoldCheck.pt", description: "Artigos editoriais independentes sobre bolor, humidade e qualidade do ar interior em Portugal.", eyebrow: "Editorial", heading: "Artigos" },
  en: { title: "Articles on Mold and Damp — MoldCheck.pt", description: "Independent editorial articles on mold, damp and indoor air quality in Portugal.", eyebrow: "Editorial", heading: "Articles" },
  fr: { title: "Articles sur les Moisissures — MoldCheck.pt", description: "Articles éditoriaux indépendants sur les moisissures, l'humidité et la qualité de l'air intérieur au Portugal.", eyebrow: "Éditorial", heading: "Articles" },
  de: { title: "Artikel über Schimmel — MoldCheck.pt", description: "Unabhängige redaktionelle Artikel über Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.", eyebrow: "Redaktion", heading: "Artikel" },
  nl: { title: "Artikelen over Schimmel — MoldCheck.pt", description: "Onafhankelijke redactionele artikelen over schimmel, vocht en binnenluchtkwaliteit in Portugal.", eyebrow: "Redactioneel", heading: "Artikelen" },
  it: { title: "Articoli su Muffa e Umidità — MoldCheck.pt", description: "Articoli editoriali indipendenti su muffa, umidità e qualità dell'aria interna in Portogallo.", eyebrow: "Editoriale", heading: "Articoli" },
  es: { title: "Artículos sobre Moho y Humedad — MoldCheck.pt", description: "Artículos editoriales independientes sobre moho, humedad y calidad del aire interior en Portugal.", eyebrow: "Editorial", heading: "Artículos" },
};

const readLabel: Record<ActiveLocale, string> = {
  pt: "Ler artigo",
  en: "Read article",
  fr: "Lire l'article",
  de: "Artikel lesen",
  nl: "Artikel lezen",
  it: "Leggi l'articolo",
  es: "Leer artículo",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = indexMeta[locale] ?? indexMeta.en;

  const alternates: Record<string, string> = {};
  for (const loc of activeLocales) {
    alternates[loc] = `https://moldcheck.pt${getLocalizedArticlePath(loc, "").replace(/\/$/, "")}`;
  }

  return {
    title: m.title,
    description: m.description,
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}) {
  const { locale } = await params;
  const m = indexMeta[locale] ?? indexMeta.en;

  const a4 = a4PortugalContent[locale];
  const a4Href = getLocalizedArticlePath(locale, a4PortugalSlugs[locale]);

  const a5 = a5MoldRiskContent[locale];
  const a5Href = getLocalizedArticlePath(locale, a5MoldRiskSlugs[locale]);

  const a2 = a2BleachContent[locale];
  const a2Href = getLocalizedArticlePath(locale, a2BleachSlugs[locale]);

  const a3 = a3HealthContent[locale];
  const a3Href = getLocalizedArticlePath(locale, a3HealthSlugs[locale]);

  const a1 = a1BlackMoldContent[locale];
  const a1Href = getLocalizedArticlePath(locale, a1BlackMoldSlugs[locale]);

  return (
    <div className="articles-index">
      <header className="articles-index__header">
        <div className="articles-index__eyebrow">{m.eyebrow}</div>
        <h1 className="articles-index__heading">{m.heading}</h1>
      </header>

      <ul className="articles-index__list" role="list">
        <li className="articles-index__card">
          <a href={a4Href} className="articles-index__card-link">
            <article>
              <p className="articles-index__card-title">{a4.title}</p>
              <p className="articles-index__card-byline">{a4.byline}</p>
              <p className="articles-index__card-desc">{a4.seoDescription}</p>
              <span className="articles-index__card-cta">{readLabel[locale]}</span>
            </article>
          </a>
        </li>
        <li className="articles-index__card">
          <a href={a5Href} className="articles-index__card-link">
            <article>
              <p className="articles-index__card-title">{a5.title}</p>
              <p className="articles-index__card-byline">{a5.byline}</p>
              <p className="articles-index__card-desc">{a5.seoDescription}</p>
              <span className="articles-index__card-cta">{readLabel[locale]}</span>
            </article>
          </a>
        </li>
        <li className="articles-index__card">
          <a href={a2Href} className="articles-index__card-link">
            <article>
              <p className="articles-index__card-title">{a2.title}</p>
              <p className="articles-index__card-byline">{a2.byline}</p>
              <p className="articles-index__card-desc">{a2.seoDescription}</p>
              <span className="articles-index__card-cta">{readLabel[locale]}</span>
            </article>
          </a>
        </li>
        <li className="articles-index__card">
          <a href={a3Href} className="articles-index__card-link">
            <article>
              <p className="articles-index__card-title">{a3.title}</p>
              <p className="articles-index__card-byline">{a3.byline}</p>
              <p className="articles-index__card-desc">{a3.seoDescription}</p>
              <span className="articles-index__card-cta">{readLabel[locale]}</span>
            </article>
          </a>
        </li>
        <li className="articles-index__card">
          <a href={a1Href} className="articles-index__card-link">
            <article>
              <p className="articles-index__card-title">{a1.title}</p>
              <p className="articles-index__card-byline">{a1.byline}</p>
              <p className="articles-index__card-desc">{a1.seoDescription}</p>
              <span className="articles-index__card-cta">{readLabel[locale]}</span>
            </article>
          </a>
        </li>
      </ul>
    </div>
  );
}
