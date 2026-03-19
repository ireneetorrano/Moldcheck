import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ActiveLocale } from "@/config/locales";
import { activeLocales } from "@/config/locales";
import { a4PortugalContent, a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import { a5MoldRiskContent, a5MoldRiskSlugs } from "@/features/content/data/articles/a5-mold-risk-guide";
import { ArticlePage } from "@/features/articles/components/ArticlePage";
import { getLocalizedArticlePath } from "@/config/routeMap";

interface PageParams {
  locale: ActiveLocale;
  slug: string;
}

export async function generateStaticParams() {
  const params: PageParams[] = [];
  for (const locale of activeLocales) {
    const slugA4 = a4PortugalSlugs[locale];
    if (slugA4) params.push({ locale, slug: slugA4 });
    const slugA5 = a5MoldRiskSlugs[locale];
    if (slugA5) params.push({ locale, slug: slugA5 });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (slug === a4PortugalSlugs[locale]) {
    const content = a4PortugalContent[locale];
    const alternates: Record<string, string> = {};
    for (const loc of activeLocales) {
      const locSlug = a4PortugalSlugs[loc];
      if (locSlug) alternates[loc] = `https://moldcheck.pt${getLocalizedArticlePath(loc, locSlug)}`;
    }
    return {
      title: content.seoTitle,
      description: content.seoDescription,
      alternates: { languages: alternates },
      openGraph: { title: content.seoTitle, description: content.seoDescription, locale },
    };
  }

  if (slug === a5MoldRiskSlugs[locale]) {
    const content = a5MoldRiskContent[locale];
    const alternates: Record<string, string> = {};
    for (const loc of activeLocales) {
      const locSlug = a5MoldRiskSlugs[loc];
      if (locSlug) alternates[loc] = `https://moldcheck.pt${getLocalizedArticlePath(loc, locSlug)}`;
    }
    return {
      title: content.seoTitle,
      description: content.seoDescription,
      alternates: { languages: alternates },
      openGraph: { title: content.seoTitle, description: content.seoDescription, locale },
    };
  }

  return {};
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, slug } = await params;

  if (slug === a4PortugalSlugs[locale]) {
    return (
      <ArticlePage
        locale={locale}
        content={a4PortugalContent[locale]}
        articleKey="a4-portugal"
        slugsByLocale={a4PortugalSlugs}
        section="portugal"
      />
    );
  }

  if (slug === a5MoldRiskSlugs[locale]) {
    return (
      <ArticlePage
        locale={locale}
        content={a5MoldRiskContent[locale]}
        articleKey="a5-mold-risk-guide"
        slugsByLocale={a5MoldRiskSlugs}
        section="inspection"
      />
    );
  }

  notFound();
}
