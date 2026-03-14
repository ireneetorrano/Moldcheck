import { defineRouting } from "next-intl/routing";
import { activeLocales, defaultLocale } from "@/config/locales";

export const routing = defineRouting({
  locales: activeLocales,
  defaultLocale,
  localePrefix: "always",
});
