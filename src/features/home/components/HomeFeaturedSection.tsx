import type { ActiveLocale } from "@/config/locales";
import { getHomeFeaturedContent } from "@/features/content/data/homeContent";

/* ── Card icons: editorial, sharp, minimal ───────────────────────────────── */

function IconFoundingEssay() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Document with chart bars */}
      <path d="M4 2h9l4 4v12H4V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="miter"/>
      <path d="M13 2v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="miter"/>
      <line x1="7" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square"/>
      {/* Mini bar chart */}
      <rect x="7" y="13" width="2" height="3" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="10" y="11" width="2" height="5" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="13" y="12" width="2" height="4" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  );
}

function IconBleach() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Spray bottle */}
      <rect x="6" y="9" width="7" height="8" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 9V7h3v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
      {/* Spray mist dots */}
      <circle cx="15" cy="5.5" r="0.6" fill="currentColor"/>
      <circle cx="16.5" cy="7.5" r="0.6" fill="currentColor"/>
      <circle cx="15" cy="9.5" r="0.6" fill="currentColor"/>
      {/* Strike-through */}
      <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconHealth() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* House outline */}
      <path d="M3 9l7-6 7 6v9H3V9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="miter"/>
      {/* Heart inside */}
      <path d="M10 14s-3.5-2.5-3.5-5A2.5 2.5 0 0 1 10 8a2.5 2.5 0 0 1 3.5 1c0 2.5-3.5 5-3.5 5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    </svg>
  );
}

function IconChecklist() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Clipboard */}
      <rect x="3" y="4" width="14" height="14" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 4V3h6v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
      {/* Check rows */}
      <path d="M6 9l1.5 1.5L10 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square"/>
      <path d="M6 13l1.5 1.5L10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square"/>
    </svg>
  );
}

const cardIcons = [IconFoundingEssay, IconBleach, IconHealth, IconChecklist];

const eyebrowByLocale: Record<ActiveLocale, string> = {
  pt: "Comece aqui",
  en: "Start here",
  fr: "Commencez ici",
  de: "Beginnen Sie hier",
  nl: "Begin hier",
  it: "Inizia da qui",
  es: "Empieza aquí",
};

const subtitleByLocale: Record<ActiveLocale, string> = {
  pt: "O essencial para compreender o bolor em Portugal",
  en: "The essentials for understanding mold in Portugal",
  fr: "L'essentiel pour comprendre les moisissures au Portugal",
  de: "Das Wesentliche zum Verständnis von Schimmel in Portugal",
  nl: "Het essentiële om schimmel in Portugal te begrijpen",
  it: "L'essenziale per capire la muffa in Portogallo",
  es: "Lo esencial para entender el moho en Portugal",
};

export function HomeFeaturedSection({ locale }: { locale: ActiveLocale }) {
  const { cards } = getHomeFeaturedContent(locale);
  const eyebrow = eyebrowByLocale[locale] ?? eyebrowByLocale.en;
  const subtitle = subtitleByLocale[locale] ?? subtitleByLocale.en;

  return (
    <section className="home-featured">
      <div className="home-featured__header">
        <p className="home-featured__eyebrow">{eyebrow}</p>
        <h2 className="home-featured__title">{subtitle}</h2>
      </div>
      <div className="home-featured__grid">
        {cards.map((card, i) => {
          const Icon = cardIcons[i];
          return (
            <article key={card.title} className="home-featured__card">
              <div className="home-featured__card-icon">
                <Icon />
              </div>
              <h3 className="home-featured__card-title">{card.title}</h3>
              <p className="home-featured__card-body">{card.body}</p>
              <a href={card.href} className="home-featured__card-cta">{card.ctaLabel}</a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
