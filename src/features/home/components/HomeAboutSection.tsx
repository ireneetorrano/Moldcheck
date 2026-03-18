import type { ActiveLocale } from "@/config/locales";
import { getHomeAboutContent } from "@/features/content/data/homeContent";

const eyebrowByLocale: Record<ActiveLocale, string> = {
  pt: "A NOSSA BASE EDITORIAL",
  en: "OUR EDITORIAL FOUNDATION",
  fr: "NOTRE BASE ÉDITORIALE",
  de: "UNSERE REDAKTIONELLE GRUNDLAGE",
  nl: "ONZE REDACTIONELE BASIS",
  it: "LA NOSTRA BASE EDITORIALE",
  es: "NUESTRA BASE EDITORIAL",
};

export function HomeAboutSection({ locale }: { locale: ActiveLocale }) {
  const { aboutTitle, aboutBody, aboutLink, aboutHref } = getHomeAboutContent(locale);
  const eyebrow = eyebrowByLocale[locale] ?? eyebrowByLocale.en;
  const paragraphs = aboutBody.split("\n\n").filter(Boolean);

  return (
    <section className="home-about">
      <div className="home-about__inner">
        {/* Decorative rule */}
        <div className="home-about__rule" aria-hidden="true" />
        <div className="home-about__content">
          <p className="home-about__eyebrow">{eyebrow}</p>
          <h2 className="home-about__title">{aboutTitle}</h2>
          <div className="home-about__body">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a href={aboutHref} className="home-about__cta">{aboutLink}</a>
        </div>
      </div>
    </section>
  );
}
