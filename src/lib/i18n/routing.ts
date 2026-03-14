import { defineRouting } from "next-intl/routing";
import { activeLocales, defaultLocale } from "@/config/locales";
import { localizedPathnames } from "@/config/routeMap";

export const routing = defineRouting({
  locales: activeLocales,
  defaultLocale,
  localePrefix: "always",
  pathnames: localizedPathnames,
});
