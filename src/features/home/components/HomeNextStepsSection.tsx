import type { ActiveLocale } from "@/config/locales";
import { getHomeNextStepsContent } from "@/features/content/data/homeContent";

/* ── Situation icons: minimal, technical, recognisable ───────────────────── */

function IconVisibleMold() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Eye outline */}
      <path d="M2 10c2-4 4.5-6 8-6s6 2 8 6c-2 4-4.5 6-8 6s-6-2-8-6z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="miter"/>
      {/* Pupil */}
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      {/* Mold dots */}
      <circle cx="10" cy="10" r="0.7" fill="currentColor"/>
    </svg>
  );
}

function IconHealthSymptoms() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Person silhouette */}
      <circle cx="10" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 18v-4a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
      {/* Alert pulse lines */}
      <path d="M14.5 8l1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M15.5 10h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M14.5 12l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconUnsure() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Magnifier */}
      <circle cx="8.5" cy="8.5" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
      {/* Question mark inside */}
      <path d="M7 7c0-1 .7-1.5 1.5-1.5S10 6 10 7c0 .8-.8 1.2-1.5 1.8V10"
        stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="8.5" cy="11.5" r="0.6" fill="currentColor"/>
    </svg>
  );
}

function IconProfessional() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* House */}
      <path d="M2 9l8-6 8 6v9H2V9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="miter"/>
      {/* Moisture meter device */}
      <rect x="7" y="11" width="6" height="5" stroke="currentColor" strokeWidth="1.2"/>
      {/* Probe pins */}
      <line x1="9" y1="16" x2="9" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <line x1="11" y1="16" x2="11" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      {/* Reading bar */}
      <line x1="8.5" y1="13" x2="11.5" y2="13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square"/>
    </svg>
  );
}

const cardIcons = [IconVisibleMold, IconHealthSymptoms, IconUnsure, IconProfessional];

const eyebrowByLocale: Record<ActiveLocale, string> = {
  pt: "O que fazer a seguir",
  en: "What to do next",
  fr: "Que faire ensuite",
  de: "Was als Nächstes tun",
  nl: "Wat nu te doen",
  it: "Cosa fare dopo",
  es: "Qué hacer a continuación",
};

const titleByLocale: Record<ActiveLocale, string> = {
  pt: "Próximos passos — consoante a sua situação",
  en: "Next steps — depending on your situation",
  fr: "Prochaines étapes — selon votre situation",
  de: "Nächste Schritte — je nach Ihrer Situation",
  nl: "Volgende stappen — afhankelijk van jouw situatie",
  it: "Prossimi passi — in base alla tua situazione",
  es: "Próximos pasos — según tu situación",
};

export function HomeNextStepsSection({ locale }: { locale: ActiveLocale }) {
  const { cards } = getHomeNextStepsContent(locale);
  const eyebrow = eyebrowByLocale[locale] ?? eyebrowByLocale.en;
  const title = titleByLocale[locale] ?? titleByLocale.en;

  return (
    <section className="home-next-steps">
      <div className="home-next-steps__inner">
        <div className="home-next-steps__header">
          <p className="home-next-steps__eyebrow">{eyebrow}</p>
          <h2 className="home-next-steps__title">{title}</h2>
        </div>
        <div className="home-next-steps__grid">
          {cards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <article key={card.title} className="home-next-steps__card">
                <div className="home-next-steps__card-top">
                  <div className="home-next-steps__card-num" aria-hidden="true">
                    {i + 1}
                  </div>
                  <div className="home-next-steps__card-icon">
                    <Icon />
                  </div>
                </div>
                <h3 className="home-next-steps__card-title">{card.title}</h3>
                <p className="home-next-steps__card-body">{card.body}</p>
                <a href={card.href} className="home-next-steps__card-cta">
                  {card.ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
