import type { ActiveLocale } from "@/config/locales";
import { getHomeConflictContent } from "@/features/content/data/homeContent";

/* ── Icons: sharp technical line-art ────────────────────────────────────── */

function IconNoSale() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="8" height="10" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M11 9V6h4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
      <circle cx="17" cy="5" r="0.7" fill="currentColor"/>
      <circle cx="18.5" cy="7" r="0.7" fill="currentColor"/>
      <circle cx="17" cy="9" r="0.7" fill="currentColor"/>
      <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconNoCommission() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="11" height="14" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="7" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <line x1="7" y1="10" x2="12" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <line x1="7" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <circle cx="16" cy="16" r="4.5" fill="var(--mc-teal-dark)" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M17.5 13.8c-.4-.5-1-.8-1.7-.8-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c.7 0 1.3-.3 1.7-.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconScience() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 2h9l4 4v14H5V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="miter"/>
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="miter"/>
      <line x1="8" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
      <path d="M8 15.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const icons = [IconNoSale, IconNoCommission, IconScience];

interface TrustItem { headline: string }

const trustContent: Record<ActiveLocale, { eyebrow: string; title: string; items: TrustItem[]; cta: string }> = {
  pt: {
    eyebrow: "A nossa independência",
    title: "MoldCheck.pt é a alternativa independente.",
    items: [
      { headline: "Sem venda de tratamentos" },
      { headline: "Sem comissões de remediação" },
      { headline: "Informação baseada na ciência" },
    ],
    cta: "Ler a nossa política editorial →",
  },
  en: {
    eyebrow: "Our independence",
    title: "MoldCheck.pt is the independent alternative.",
    items: [
      { headline: "No treatment sales" },
      { headline: "No remediation commissions" },
      { headline: "Science-first information" },
    ],
    cta: "Read our editorial policy →",
  },
  fr: {
    eyebrow: "Notre indépendance",
    title: "MoldCheck.pt est l'alternative indépendante.",
    items: [
      { headline: "Aucune vente de traitements" },
      { headline: "Aucune commission de remédiation" },
      { headline: "Information fondée sur la science" },
    ],
    cta: "Lire notre politique éditoriale →",
  },
  de: {
    eyebrow: "Unsere Unabhängigkeit",
    title: "MoldCheck.pt ist die unabhängige Alternative.",
    items: [
      { headline: "Kein Verkauf von Behandlungen" },
      { headline: "Keine Sanierungsprovisionen" },
      { headline: "Wissenschaftlich fundierte Information" },
    ],
    cta: "Unsere Redaktionsrichtlinie lesen →",
  },
  nl: {
    eyebrow: "Onze onafhankelijkheid",
    title: "MoldCheck.pt is het onafhankelijke alternatief.",
    items: [
      { headline: "Geen behandelingsverkoop" },
      { headline: "Geen saneringscommissies" },
      { headline: "Wetenschappelijk onderbouwde informatie" },
    ],
    cta: "Lees ons redactioneel beleid →",
  },
  it: {
    eyebrow: "La nostra indipendenza",
    title: "MoldCheck.pt è l'alternativa indipendente.",
    items: [
      { headline: "Nessuna vendita di trattamenti" },
      { headline: "Nessuna commissione di bonifica" },
      { headline: "Informazione basata sulla scienza" },
    ],
    cta: "Leggi la nostra politica editoriale →",
  },
  es: {
    eyebrow: "Nuestra independencia",
    title: "MoldCheck.pt es la alternativa independiente.",
    items: [
      { headline: "Sin venta de tratamientos" },
      { headline: "Sin comisiones de remediación" },
      { headline: "Información basada en la ciencia" },
    ],
    cta: "Leer nuestra política editorial →",
  },
};

export function HomeConflictSection({ locale }: { locale: ActiveLocale }) {
  const { conflictEyebrow, conflictTitle, conflictBody, conflictHref } =
    getHomeConflictContent(locale);

  // Only first 2 paragraphs — 3rd is replaced by the trust band
  const paragraphs = conflictBody.split("\n\n").filter(Boolean).slice(0, 2);
  const trust = trustContent[locale] ?? trustContent.en;

  return (
    <>
      <section className="home-conflict">
        <p className="home-conflict__eyebrow">{conflictEyebrow}</p>
        <h2 className="home-conflict__title">{conflictTitle}</h2>
        <div className="home-conflict__body">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Full-width trust band — breaks out of the narrow text column */}
      <div className="home-trust-band">
        <div className="home-trust-band__inner">
          <div className="home-trust-band__left">
            <p className="home-trust-band__eyebrow">{trust.eyebrow}</p>
            <p className="home-trust-band__title">{trust.title}</p>
            <a href={conflictHref} className="home-trust-band__cta">{trust.cta}</a>
          </div>
          <div className="home-trust-band__points">
            {trust.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.headline} className="home-trust-band__point">
                  <div className="home-trust-band__icon-wrap">
                    <Icon />
                  </div>
                  <p className="home-trust-band__point-label">{item.headline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
