export const activeLocales = ["pt", "en", "fr", "de", "nl", "it", "es"] as const;
export const cmsLocales = ["pt", "en", "fr", "de", "nl", "it", "es"] as const;
export const defaultLocale = "pt" as const;

export type ActiveLocale = (typeof activeLocales)[number];
export type CmsLocale = (typeof cmsLocales)[number];

export const localeLabels: Record<CmsLocale, string> = {
  pt: "Portuguese",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  it: "Italiano",
  es: "Español",
};

export const localeMarkers: Record<CmsLocale, string> = {
  pt: "PT",
  en: "EN",
  fr: "FR",
  de: "DE",
  nl: "NL",
  it: "IT",
  es: "ES",
};

export function isActiveLocale(value: string): value is ActiveLocale {
  return activeLocales.includes(value as ActiveLocale);
}

