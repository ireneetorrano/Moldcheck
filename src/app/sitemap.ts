import { activeLocales } from "@/config/locales";

export default function sitemap() {
  return activeLocales.map((locale) => ({
    url: `https://moldcheck.pt/${locale}`,
    lastModified: new Date(),
  }));
}
