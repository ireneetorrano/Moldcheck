import type { ActiveLocale } from "@/config/locales";
import { activeLocales } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { getDefaultGlobalPageContent } from "@/features/content/data/globalPages";
import { getGlobalPath } from "@/lib/routing/paths";
import type { GlobalPageKey } from "@/types/content";

// ── Per-page, per-locale SEO metadata ────────────────────────────────────────
// title: full browser tab string | description: meta description
type SeoEntry = { title: string; description: string };

const pageSeoMeta: Record<GlobalPageKey, Record<ActiveLocale, SeoEntry>> = {
  home: {
    pt: {
      title: "MoldCheck.pt Informação Independente sobre Bolor em Portugal",
      description:
        "Portugal tem o 2.º pior problema de bolor da Europa. Informação científica independente sobre diagnóstico, saúde e remediação sem vender tratamentos.",
    },
    en: {
      title: "MoldCheck.pt Independent Mold Information for Portugal",
      description:
        "Portugal has Europe's 2nd worst mold problem. Independent, science-based information on diagnosis, health and remediation without selling treatments.",
    },
    fr: {
      title: "MoldCheck.pt Information Indépendante sur les Moisissures au Portugal",
      description:
        "Le Portugal a le 2e pire problème de moisissures d'Europe. Information scientifique indépendante sur le diagnostic, la santé et la remédiation.",
    },
    de: {
      title: "MoldCheck.pt Unabhängige Schimmelinformationen für Portugal",
      description:
        "Portugal hat Europas zweitschlimmstes Schimmelproblem. Unabhängige, wissenschaftlich fundierte Informationen zu Diagnose, Gesundheit und Sanierung.",
    },
    nl: {
      title: "MoldCheck.pt Onafhankelijke Schimmelinformatie voor Portugal",
      description:
        "Portugal heeft het op één na ergste schimmelprobleem van Europa. Onafhankelijke, wetenschappelijke informatie over diagnose, gezondheid en sanering.",
    },
    it: {
      title: "MoldCheck.pt Informazione Indipendente sulla Muffa in Portogallo",
      description:
        "Il Portogallo ha il secondo peggior problema di muffa in Europa. Informazione scientifica indipendente su diagnosi, salute e bonifica.",
    },
    es: {
      title: "MoldCheck.pt Información Independiente sobre Moho en Portugal",
      description:
        "Portugal tiene el segundo peor problema de moho de Europa. Información científica independiente sobre diagnóstico, salud y remediación.",
    },
  },
  about: {
    pt: {
      title: "Sobre o MoldCheck.pt Quem Somos e Como Trabalhamos",
      description:
        "O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos. Publicamos o que a ciência diz com política editorial transparente.",
    },
    en: {
      title: "About MoldCheck.pt Who We Are and How We Work",
      description:
        "MoldCheck.pt is a FAIRBANK Group initiative. We don't sell treatments. We publish what the science says with a transparent editorial policy.",
    },
    fr: {
      title: "À Propos de MoldCheck.pt Qui Nous Sommes",
      description:
        "MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements. Nous publions ce que la science dit avec une politique éditoriale transparente.",
    },
    de: {
      title: "Über MoldCheck.pt Wer Wir Sind und Wie Wir Arbeiten",
      description:
        "MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Behandlungen. Wir veröffentlichen, was die Wissenschaft sagt mit transparenter Redaktionsrichtlinie.",
    },
    nl: {
      title: "Over MoldCheck.pt Wie We Zijn en Hoe We Werken",
      description:
        "MoldCheck.pt is een initiatief van de FAIRBANK Group. We verkopen geen behandelingen. We publiceren wat de wetenschap zegt met transparant redactioneel beleid.",
    },
    it: {
      title: "Chi Siamo MoldCheck.pt",
      description:
        "MoldCheck.pt è un'iniziativa del FAIRBANK Group. Non vendiamo trattamenti. Pubblichiamo ciò che dice la scienza con una politica editoriale trasparente.",
    },
    es: {
      title: "Sobre MoldCheck.pt Quiénes Somos y Cómo Trabajamos",
      description:
        "MoldCheck.pt es una iniciativa del FAIRBANK Group. No vendemos tratamientos. Publicamos lo que dice la ciencia con una política editorial transparente.",
    },
  },
  services: {
    pt: {
      title: "Serviços de Inspecção Independente MoldCheck.pt",
      description:
        "Inspecções independentes de bolor e humidade em Portugal. Diagnóstico imparcial, sem comissões de tratamento. Conheça os serviços da InspectOS.",
    },
    en: {
      title: "Independent Inspection Services MoldCheck.pt",
      description:
        "Independent mold and damp inspections in Portugal. Impartial diagnosis, no treatment commissions. Discover InspectOS inspection services.",
    },
    fr: {
      title: "Services d'Inspection Indépendante MoldCheck.pt",
      description:
        "Inspections indépendantes de moisissures et d'humidité au Portugal. Diagnostic impartial, sans commissions de traitement.",
    },
    de: {
      title: "Unabhängige Inspektionsdienste MoldCheck.pt",
      description:
        "Unabhängige Schimmel- und Feuchtigkeitsinspektionen in Portugal. Unparteiische Diagnose, keine Behandlungsprovisionen.",
    },
    nl: {
      title: "Onafhankelijke Inspectiediensten MoldCheck.pt",
      description:
        "Onafhankelijke schimmel- en vochtinspecties in Portugal. Onpartijdige diagnose, geen behandelingscommissies.",
    },
    it: {
      title: "Servizi di Ispezione Indipendente MoldCheck.pt",
      description:
        "Ispezioni indipendenti di muffa e umidità in Portogallo. Diagnosi imparziale, senza commissioni di trattamento.",
    },
    es: {
      title: "Servicios de Inspección Independiente MoldCheck.pt",
      description:
        "Inspecciones independientes de moho y humedad en Portugal. Diagnóstico imparcial, sin comisiones de tratamiento.",
    },
  },
  contact: {
    pt: {
      title: "Contacto MoldCheck.pt",
      description:
        "Entre em contacto com a equipa editorial do MoldCheck.pt ou solicite informações sobre inspecções independentes em Portugal.",
    },
    en: {
      title: "Contact MoldCheck.pt",
      description:
        "Get in touch with the MoldCheck.pt editorial team or request information about independent inspections in Portugal.",
    },
    fr: {
      title: "Contact MoldCheck.pt",
      description:
        "Contactez l'équipe éditoriale de MoldCheck.pt ou demandez des informations sur les inspections indépendantes au Portugal.",
    },
    de: {
      title: "Kontakt MoldCheck.pt",
      description:
        "Nehmen Sie Kontakt mit dem Redaktionsteam von MoldCheck.pt auf oder fordern Sie Informationen zu unabhängigen Inspektionen in Portugal an.",
    },
    nl: {
      title: "Contact MoldCheck.pt",
      description:
        "Neem contact op met het redactieteam van MoldCheck.pt of vraag informatie aan over onafhankelijke inspecties in Portugal.",
    },
    it: {
      title: "Contatti MoldCheck.pt",
      description:
        "Contatta il team editoriale di MoldCheck.pt o richiedi informazioni sulle ispezioni indipendenti in Portogallo.",
    },
    es: {
      title: "Contacto MoldCheck.pt",
      description:
        "Contacta con el equipo editorial de MoldCheck.pt o solicita información sobre inspecciones independientes en Portugal.",
    },
  },
  privacy: {
    pt: {
      title: "Política de Privacidade MoldCheck.pt",
      description: "Política de privacidade e tratamento de dados do MoldCheck.pt.",
    },
    en: {
      title: "Privacy Policy MoldCheck.pt",
      description: "Privacy policy and data handling practices of MoldCheck.pt.",
    },
    fr: {
      title: "Politique de Confidentialité MoldCheck.pt",
      description: "Politique de confidentialité et pratiques de traitement des données de MoldCheck.pt.",
    },
    de: {
      title: "Datenschutzrichtlinie MoldCheck.pt",
      description: "Datenschutzrichtlinie und Datenverarbeitungspraktiken von MoldCheck.pt.",
    },
    nl: {
      title: "Privacybeleid MoldCheck.pt",
      description: "Privacybeleid en gegevensverwerkingspraktijken van MoldCheck.pt.",
    },
    it: {
      title: "Informativa sulla Privacy MoldCheck.pt",
      description: "Informativa sulla privacy e pratiche di trattamento dei dati di MoldCheck.pt.",
    },
    es: {
      title: "Política de Privacidad MoldCheck.pt",
      description: "Política de privacidad y prácticas de tratamiento de datos de MoldCheck.pt.",
    },
  },
  tools: {
    pt: {
      title: "Ferramentas de Avaliação de Humidade MoldCheck.pt",
      description:
        "Calculadoras e ferramentas editoriais para avaliar risco de humidade e bolor em casa. Baseadas em critérios científicos.",
    },
    en: {
      title: "Humidity & Mold Assessment Tools MoldCheck.pt",
      description:
        "Editorial calculators and tools to assess damp and mold risk at home. Based on scientific criteria.",
    },
    fr: {
      title: "Outils d'Évaluation de l'Humidité MoldCheck.pt",
      description:
        "Calculateurs et outils éditoriaux pour évaluer le risque d'humidité et de moisissures à domicile.",
    },
    de: {
      title: "Feuchtigkeits- und Schimmelbewertungstools MoldCheck.pt",
      description:
        "Redaktionelle Rechner und Tools zur Bewertung von Feuchtigkeits- und Schimmelrisiken zu Hause.",
    },
    nl: {
      title: "Vocht- en Schimmelbeoordelingstools MoldCheck.pt",
      description:
        "Redactionele calculators en tools om vocht- en schimmelrisico thuis te beoordelen.",
    },
    it: {
      title: "Strumenti di Valutazione dell'Umidità MoldCheck.pt",
      description:
        "Calcolatori e strumenti editoriali per valutare il rischio di umidità e muffa in casa.",
    },
    es: {
      title: "Herramientas de Evaluación de Humedad MoldCheck.pt",
      description:
        "Calculadoras y herramientas editoriales para evaluar el riesgo de humedad y moho en casa.",
    },
  },
  shop: {
    pt: {
      title: "Loja MoldCheck.pt",
      description:
        "Inspecções, análises laboratoriais e recursos digitais sobre bolor e humidade em Portugal.",
    },
    en: {
      title: "Shop MoldCheck.pt",
      description:
        "Inspections, laboratory analyses and digital resources on mold and damp in Portugal.",
    },
    fr: {
      title: "Boutique MoldCheck.pt",
      description:
        "Inspections, analyses en laboratoire et ressources numériques sur les moisissures et l'humidité au Portugal.",
    },
    de: {
      title: "Shop MoldCheck.pt",
      description:
        "Inspektionen, Laboranalysen und digitale Ressourcen zu Schimmel und Feuchtigkeit in Portugal.",
    },
    nl: {
      title: "Winkel MoldCheck.pt",
      description:
        "Inspecties, laboratoriumanalyses en digitale bronnen over schimmel en vocht in Portugal.",
    },
    it: {
      title: "Negozio MoldCheck.pt",
      description:
        "Ispezioni, analisi di laboratorio e risorse digitali su muffa e umidità in Portogallo.",
    },
    es: {
      title: "Tienda MoldCheck.pt",
      description:
        "Inspecciones, análisis de laboratorio y recursos digitales sobre moho y humedad en Portugal.",
    },
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

export async function getGlobalPageContent(locale: ActiveLocale, pageKey: GlobalPageKey) {
  return getDefaultGlobalPageContent(locale, pageKey);
}

export async function buildGlobalPageMetadata(locale: ActiveLocale, pageKey: GlobalPageKey) {
  const seo = pageSeoMeta[pageKey]?.[locale];
  const page = await getGlobalPageContent(locale, pageKey);

  return {
    title: seo?.title ?? page.seoTitle ?? page.title,
    description:
      seo?.description ??
      page.seoDescription ??
      page.description ??
      page.heroBody ??
      siteConfig.name,
    alternates: {
      canonical: getGlobalPath(locale, pageKey),
      languages: Object.fromEntries(
        activeLocales.map((item) => [item, getGlobalPath(item, pageKey)]),
      ),
    },
  };
}
