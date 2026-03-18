import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";
import { TrustBar } from "@/components/layout/TrustBar";
import { HomeProblemSection } from "@/features/home/components/HomeProblemSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}) {
  const { locale } = await params;
  return buildGlobalPageMetadata(locale, "home");
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const page = await getGlobalPageContent(locale, "home");

  return (
    <>
      <div className="home-hero-group">
        <section className={`home-hero home-hero--${locale}`}>
          <div className="home-hero__center">
            {page.eyebrow ? <p className="home-hero__eyebrow">{page.eyebrow}</p> : null}
            <h1 className="home-hero__title">{page.heroTitle ?? page.title}</h1>
            {page.heroBody ? <p className="home-hero__body">{page.heroBody}</p> : null}
            <div className="home-hero__actions">
              {page.heroPrimaryCtaLabel && page.heroPrimaryCtaHref ? (
                <a href={page.heroPrimaryCtaHref} className="hero-cta hero-cta--primary">{page.heroPrimaryCtaLabel}</a>
              ) : null}
              {page.heroSecondaryCtaLabel && page.heroSecondaryCtaHref ? (
                <a href={page.heroSecondaryCtaHref} className="hero-cta hero-cta--ghost">{page.heroSecondaryCtaLabel}</a>
              ) : null}
            </div>
          </div>
        </section>
        {page.trustBarText ? (
          <TrustBar text={page.trustBarText} />
        ) : null}
      </div>
      <HomeProblemSection locale={locale} />
      <GlobalPageBlocks page={page} disclosureVariant="homepage" />
    </>
  );
}
