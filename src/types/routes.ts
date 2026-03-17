import type { ActiveLocale } from "@/config/locales";

export type GlobalRouteKey =
  | "home"
  | "about"
  | "articles"
  | "services"
  | "shop"
  | "shopThankYou"
  | "tools"
  | "privacy"
  | "contact"
  | "search"
  | "editorialPolicy";
export type SectionKey = "mold-types" | "remediation" | "health" | "portugal" | "inspection" | "causes" | "species" | "legislation";
export type LocalizedRouteMap<T extends string> = Record<T, Record<ActiveLocale, string>>;
