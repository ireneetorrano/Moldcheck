import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ActiveLocale } from "@/config/locales";
import { activeLocales } from "@/config/locales";
import { a4PortugalContent, a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import { ArticlePage } from "@/features/articles/components/ArticlePage";
import { getLocalizedArticlePath } from "@/config/routeMap";

interface PageParams {
  locale: ActiveLocale;
  slug: string;
}

export async function generateStaticParams() {
  const params: PageParams[] = [];
  for (const locale of activeLocales) {
    const slug = a4PortugalSlugs[locale];
    if (slug) params.push({ locale, slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (slug !== a4PortugalSlugs[locale]) return {};

  const content = a4PortugalContent[locale];

  const alternates: Record<string, string> = {};
  for (const loc of activeLocales) {
    const locSlug = a4PortugalSlugs[loc];
    if (locSlug) {
      alternates[loc] = `https://moldcheck.pt${getLocalizedArticlePath(loc, locSlug)}`;
    }
  }

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: { languages: alternates },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      locale,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, slug } = await params;

  if (slug !== a4PortugalSlugs[locale]) notFound();

  const content = a4PortugalContent[locale];

  return (
    <ArticlePage
      locale={locale}
      content={content}
      articleKey="a4-portugal"
      slugsByLocale={a4PortugalSlugs}
      section="portugal"
    />
  );
}
