import type { ActiveLocale } from "@/config/locales";
import type { SectionKey } from "@/types/routes";

export interface FoundationalArticleAlternate {
  key: "black-mold" | "bleach" | "health" | "portugal" | "inspection-guide";
  section: SectionKey;
  slugs: Partial<Record<ActiveLocale, string>>;
}

export const foundationalArticles: FoundationalArticleAlternate[] = [
  {
    key: "black-mold",
    section: "mold-types",
    slugs: {
      pt: "bolor-negro-mitos-factos",
      en: "black-mold-facts-science",
      fr: "moisissures-noires-science",
      de: "schwarzer-schimmel-wissenschaft",
      nl: "zwarte-schimmel-wetenschap",
      it: "muffa-nera-scienza",
      es: "moho-negro-ciencia",
    },
  },
  {
    key: "bleach",
    section: "remediation",
    slugs: {
      pt: "lixivia-nao-resolve-bolor",
      en: "why-bleach-doesnt-fix-mold",
      fr: "eau-de-javel-ne-resout-pas-moisissures",
      de: "bleichmittel-loest-schimmel-nicht",
      nl: "bleekwater-lost-schimmel-niet-op",
      it: "candeggina-non-risolve-muffa",
      es: "lejia-no-resuelve-moho",
    },
  },
  {
    key: "health",
    section: "health",
    slugs: {
      pt: "casa-afeta-saude-bolor",
      en: "is-your-home-making-you-ill-mold",
      fr: "logement-affecte-sante-moisissures",
      de: "macht-wohnung-krank-schimmel",
      nl: "woning-maakt-je-ziek-schimmel",
      it: "casa-influisce-salute-muffa",
      es: "vivienda-afecta-salud-moho",
    },
  },
  {
    key: "portugal",
    section: "portugal",
    slugs: {
      pt: "segundo-pior-problema-bolor-europa",
      en: "europes-second-worst-mold-problem",
      fr: "deuxieme-pire-probleme-moisissures",
      de: "zweitschlimmstes-schimmelproblem-europa",
      nl: "op-een-na-ergste-schimmelprobleem",
      it: "secondo-peggior-problema-muffa-europa",
      es: "segundo-peor-problema-moho-europa",
    },
  },
  {
    key: "inspection-guide",
    section: "inspection",
    slugs: {
      pt: "avaliar-risco-bolor-casa-guia",
      en: "assess-mold-risk-home-guide",
      fr: "evaluer-risque-moisissures-guide",
      de: "schimmelrisiko-wohnung-beurteilen",
      nl: "schimmelrisico-woning-beoordelen",
      it: "valutare-rischio-muffa-casa-guida",
      es: "evaluar-riesgo-moho-casa-guia",
    },
  },
];
