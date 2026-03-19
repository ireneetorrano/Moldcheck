import type { NewsletterLocale } from "./schema";

/** Public URL path for each locale's checklist PDF */
const CHECKLIST_PATHS: Record<NewsletterLocale, string> = {
  es: "/checklists/moldcheck-checklist-es.pdf",
  pt: "/checklists/moldcheck-checklist-pt.pdf",
  en: "/checklists/moldcheck-checklist-en.pdf",
  fr: "/checklists/moldcheck-checklist-fr.pdf",
  de: "/checklists/moldcheck-checklist-de.pdf",
  nl: "/checklists/moldcheck-checklist-nl.pdf",
  it: "/checklists/moldcheck-checklist-it.pdf",
};

/** Localized calculator path */
const CALCULATOR_PATHS: Record<NewsletterLocale, string> = {
  es: "/es/tools/humidity-risk-calculator",
  pt: "/pt/tools/humidity-risk-calculator",
  en: "/en/tools/humidity-risk-calculator",
  fr: "/fr/tools/humidity-risk-calculator",
  de: "/de/tools/humidity-risk-calculator",
  nl: "/nl/tools/humidity-risk-calculator",
  it: "/it/tools/humidity-risk-calculator",
};

export function getChecklistUrl(locale: NewsletterLocale): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
  return `${base}${CHECKLIST_PATHS[locale]}`;
}

export function getCalculatorUrl(locale: NewsletterLocale): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
  return `${base}${CALCULATOR_PATHS[locale]}`;
}
