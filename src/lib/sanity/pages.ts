import type { ActiveLocale } from "@/config/locales";
import { activeLocales } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { getDefaultGlobalPageContent } from "@/features/content/data/globalPages";
import { getGlobalPath } from "@/lib/routing/paths";
import type { GlobalPageKey } from "@/types/content";

export async function getGlobalPageContent(locale: ActiveLocale, pageKey: GlobalPageKey) {
  return getDefaultGlobalPageContent(locale, pageKey);
}

export async function buildGlobalPageMetadata(locale: ActiveLocale, pageKey: GlobalPageKey) {
  const page = await getGlobalPageContent(locale, pageKey);

  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription ?? page.description ?? page.heroBody ?? siteConfig.name,
    alternates: {
      canonical: getGlobalPath(locale, pageKey),
      languages: Object.fromEntries(
        activeLocales.map((item) => [item, getGlobalPath(item, pageKey)]),
      ),
    },
  };
}
