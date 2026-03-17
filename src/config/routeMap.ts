import type { Pathnames } from "next-intl/routing";
import { activeLocales, defaultLocale, type ActiveLocale } from "@/config/locales";
import type { GlobalRouteKey, LocalizedRouteMap, SectionKey } from "@/types/routes";

export const globalRouteSlugs: LocalizedRouteMap<Exclude<GlobalRouteKey, "home" | "shopThankYou">> = {
  about: { pt: "sobre", en: "about", fr: "a-propos", de: "ueber-uns", nl: "over-ons", it: "chi-siamo", es: "sobre" },
  articles: {
    pt: "artigos",
    en: "articles",
    fr: "articles",
    de: "artikel",
    nl: "artikelen",
    it: "articoli",
    es: "articulos",
  },
  services: { pt: "servicos", en: "services", fr: "services", de: "dienste", nl: "diensten", it: "servizi", es: "servicios" },
  shop: { pt: "loja", en: "shop", fr: "boutique", de: "shop", nl: "shop", it: "negozio", es: "tienda" },
  tools: { pt: "ferramentas", en: "tools", fr: "outils", de: "tools", nl: "tools", it: "strumenti", es: "herramientas" },
  privacy: {
    pt: "privacidade",
    en: "privacy-policy",
    fr: "politique-confidentialite",
    de: "datenschutz",
    nl: "privacybeleid",
    it: "informativa-privacy",
    es: "politica-privacidad",
  },
  contact: { pt: "contacto", en: "contact", fr: "contact", de: "kontakt", nl: "contact", it: "contatti", es: "contacto" },
  search: { pt: "pesquisa", en: "search", fr: "recherche", de: "suche", nl: "zoeken", it: "cerca", es: "buscar" },
  editorialPolicy: {
    pt: "politica-editorial",
    en: "editorial-policy",
    fr: "politique-editoriale",
    de: "redaktionsrichtlinie",
    nl: "redactioneel-beleid",
    it: "politica-editoriale",
    es: "politica-editorial",
  },
};

export const thankYouSlugs: Record<ActiveLocale, string> = {
  pt: "obrigado",
  en: "thank-you",
  fr: "merci",
  de: "danke",
  nl: "bedankt",
  it: "grazie",
  es: "gracias",
};

export const sectionBaseSlugs: LocalizedRouteMap<SectionKey | "municipalities"> = {
  "mold-types": { pt: "tipos-bolor", en: "mold-types", fr: "types-moisissures", de: "schimmelarten", nl: "schimmelsoorten", it: "tipi-muffa", es: "tipos-moho" },
  remediation: { pt: "remediacao", en: "remediation", fr: "remediation", de: "sanierung", nl: "sanering", it: "bonifica", es: "remediacion" },
  health: { pt: "saude", en: "health", fr: "sante", de: "gesundheit", nl: "gezondheid", it: "salute", es: "salud" },
  portugal: { pt: "portugal", en: "portugal", fr: "portugal", de: "portugal", nl: "portugal", it: "portogallo", es: "portugal" },
  inspection: { pt: "inspecao", en: "inspection", fr: "inspection", de: "inspektion", nl: "inspectie", it: "ispezione", es: "inspeccion" },
  causes: { pt: "causas", en: "causes", fr: "causes", de: "ursachen", nl: "oorzaken", it: "cause", es: "causas" },
  species: { pt: "especies", en: "species", fr: "especes", de: "arten", nl: "soorten", it: "specie", es: "especies" },
  legislation: { pt: "legislacao", en: "legislation", fr: "legislation", de: "gesetzgebung", nl: "wetgeving", it: "normativa", es: "legislacion" },
  municipalities: { pt: "municipios", en: "municipalities", fr: "municipalites", de: "gemeinden", nl: "gemeenten", it: "comuni", es: "municipios" },
};

function localizeStatic(slugs: Record<ActiveLocale, string>, parent?: Record<ActiveLocale, string>) {
  return Object.fromEntries(activeLocales.map((locale) => [locale, parent ? `/${parent[locale]}/${slugs[locale]}` : `/${slugs[locale]}`])) as Record<ActiveLocale, string>;
}

function localizeNested(parent: Record<ActiveLocale, string>) {
  return Object.fromEntries(activeLocales.map((locale) => [locale, `/${parent[locale]}/[slug]`])) as Record<ActiveLocale, string>;
}

export const localizedPathnames = {
  "/": "/",
  "/about": localizeStatic(globalRouteSlugs.about),
  "/articles": localizeStatic(globalRouteSlugs.articles),
  "/articles/[slug]": localizeNested(globalRouteSlugs.articles),
  "/services": localizeStatic(globalRouteSlugs.services),
  "/shop": localizeStatic(globalRouteSlugs.shop),
  "/shop/thank-you": localizeStatic(thankYouSlugs, globalRouteSlugs.shop),
  "/tools": localizeStatic(globalRouteSlugs.tools),
  "/tools/[slug]": localizeNested(globalRouteSlugs.tools),
  "/privacy": localizeStatic(globalRouteSlugs.privacy),
  "/contact": localizeStatic(globalRouteSlugs.contact),
  "/search": localizeStatic(globalRouteSlugs.search),
  "/mold-types": localizeStatic(sectionBaseSlugs["mold-types"]),
  "/mold-types/[slug]": localizeNested(sectionBaseSlugs["mold-types"]),
  "/remediation": localizeStatic(sectionBaseSlugs.remediation),
  "/remediation/[slug]": localizeNested(sectionBaseSlugs.remediation),
  "/health": localizeStatic(sectionBaseSlugs.health),
  "/health/[slug]": localizeNested(sectionBaseSlugs.health),
  "/portugal": localizeStatic(sectionBaseSlugs.portugal),
  "/portugal/[slug]": localizeNested(sectionBaseSlugs.portugal),
  "/inspection": localizeStatic(sectionBaseSlugs.inspection),
  "/inspection/[slug]": localizeNested(sectionBaseSlugs.inspection),
  "/municipalities/[slug]": localizeNested(sectionBaseSlugs.municipalities),
} satisfies Pathnames<typeof activeLocales>;

export function getLocalizedGlobalPath(locale: ActiveLocale, route: GlobalRouteKey) {
  if (route === "home") return `/${locale}`;
  if (route === "shopThankYou") return `/${locale}/${globalRouteSlugs.shop[locale]}/${thankYouSlugs[locale]}`;
  return `/${locale}/${globalRouteSlugs[route][locale]}`;
}

export function getLocalizedSectionPath(locale: ActiveLocale, section: SectionKey, slug?: string) {
  const base = `/${locale}/${sectionBaseSlugs[section][locale]}`;
  return slug ? `${base}/${slug}` : base;
}

export function getLocalizedMunicipalityPath(locale: ActiveLocale, slug: string) {
  return `/${locale}/${sectionBaseSlugs.municipalities[locale]}/${slug}`;
}

export function getLocalizedArticlePath(locale: ActiveLocale, slug: string) {
  return `/${locale}/${globalRouteSlugs.articles[locale]}/${slug}`;
}

export const routeMap = { defaultLocale, globalRouteSlugs, thankYouSlugs, sectionBaseSlugs, localizedPathnames };
