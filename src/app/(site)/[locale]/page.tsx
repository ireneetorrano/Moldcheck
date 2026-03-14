import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";

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
      <section className={`home-hero home-hero--${locale}`}>
        <div className="home-hero__layout">
          <div className="home-hero__content">
            {page.eyebrow ? <p className="home-hero__eyebrow">{page.eyebrow}</p> : null}
            <h1>{page.heroTitle ?? page.title}</h1>
            {page.heroBody ? <p>{page.heroBody}</p> : null}
            <div className="home-hero__actions">
              {page.heroPrimaryCtaLabel && page.heroPrimaryCtaHref ? (
                <a href={page.heroPrimaryCtaHref} className="services-cta">{page.heroPrimaryCtaLabel}</a>
              ) : null}
              {page.heroSecondaryCtaLabel && page.heroSecondaryCtaHref ? (
                <a href={page.heroSecondaryCtaHref} className="services-cta services-cta--ghost">{page.heroSecondaryCtaLabel}</a>
              ) : null}
            </div>
          </div>
          <div className="home-hero__media">
            <div className="home-hero__media-frame" aria-hidden="true" />
          </div>
        </div>
      </section>
      {page.trustBarText ? (
        <section className="home-trust-bar" aria-label="Trust statement">
          <div className="home-trust-bar__inner">
            <p>{page.trustBarText}</p>
          </div>
        </section>
      ) : null}
      <GlobalPageBlocks page={page} disclosureVariant="homepage" />
    </>
  );
}
