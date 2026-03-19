import type { NewsletterLocale } from "./schema";

const CHECKLIST_PATHS: Record<NewsletterLocale, string> = {
  es: "/checklists/moldcheck-checklist-es.pdf",
  pt: "/checklists/moldcheck-checklist-pt.pdf",
  en: "/checklists/moldcheck-checklist-en.pdf",
  fr: "/checklists/moldcheck-checklist-fr.pdf",
  de: "/checklists/moldcheck-checklist-de.pdf",
  nl: "/checklists/moldcheck-checklist-nl.pdf",
  it: "/checklists/moldcheck-checklist-it.pdf",
};

const CALCULATOR_PATHS: Record<NewsletterLocale, string> = {
  es: "/es/herramientas/calculadora-riesgo-humedad",
  pt: "/pt/ferramentas/calculadora-risco-humidade",
  en: "/en/tools/humidity-risk-calculator",
  fr: "/fr/outils/calculateur-risque-humidite",
  de: "/de/tools/feuchtigkeitsrisikorechner",
  nl: "/nl/tools/vochtrisicocalculator",
  it: "/it/strumenti/calcolatore-rischio-umidita",
};

export function getChecklistUrl(locale: NewsletterLocale): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
  return `${base}${CHECKLIST_PATHS[locale]}`;
}

export function getCalculatorUrl(locale: NewsletterLocale): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
  return `${base}${CALCULATOR_PATHS[locale]}`;
}
