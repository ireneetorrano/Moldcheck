import type { ActiveLocale } from "@/config/locales";
import {
  getLocalizedArticlePath,
  getLocalizedGlobalPath,
  getLocalizedMunicipalityPath,
  getLocalizedSectionPath,
} from "@/config/routeMap";
import type { GlobalRouteKey, SectionKey } from "@/types/routes";

export function getGlobalPath(locale: ActiveLocale, route: GlobalRouteKey) {
  return getLocalizedGlobalPath(locale, route);
}

export function getSectionPath(locale: ActiveLocale, section: SectionKey, slug?: string) {
  return getLocalizedSectionPath(locale, section, slug);
}

export function getMunicipalityPath(locale: ActiveLocale, slug: string) {
  return getLocalizedMunicipalityPath(locale, slug);
}

export function getArticlePath(locale: ActiveLocale, slug: string) {
  return getLocalizedArticlePath(locale, slug);
}
