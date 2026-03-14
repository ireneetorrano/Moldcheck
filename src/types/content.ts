import type { CmsLocale } from "@/config/locales";
import type { GlobalRouteKey, SectionKey } from "@/types/routes";

export type GlobalPageKey = Extract<
  GlobalRouteKey,
  "home" | "about" | "services" | "privacy" | "contact" | "tools" | "shop"
>;

export interface PortableTextSpan {
  _type: "span";
  _key?: string;
  text: string;
}

export interface PortableTextBlock {
  _type: "block";
  _key?: string;
  style?: string;
  children?: PortableTextSpan[];
}

export interface GlobalPageCard {
  eyebrow?: string;
  title: string;
  body: string;
  tone?: "default" | "featured" | "warning";
  ctaLabel?: string;
  ctaHref?: string;
  openInNewTab?: boolean;
}

export interface GlobalPageSection {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "band";
  layout?: "grid" | "utility";
  cards: GlobalPageCard[];
}

export interface GlobalPageContent {
  pageKey: GlobalPageKey;
  language: CmsLocale;
  translationGroup: string;
  title: string;
  eyebrow?: string;
  description: string;
  heroTitle?: string;
  heroBody?: string;
  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaHref?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaHref?: string;
  trustBarText?: string;
  seoTitle?: string;
  seoDescription?: string;
  body?: PortableTextBlock[];
  introLayout?: "grid" | "utility";
  introCards?: GlobalPageCard[];
  sections: GlobalPageSection[];
  disclosureTitle?: string;
  disclosureText?: string;
  footerNote?: string;
}

export interface TranslationReference {
  language: CmsLocale;
  slug: string;
  path: string;
}

export interface ArticleSummary {
  title: string;
  slug: string;
  section: SectionKey;
  language: CmsLocale;
  translationGroup: string;
  tier: "A" | "B" | "C";
}
