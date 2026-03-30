import type { ActiveLocale } from "@/config/locales";

interface IndependenceLocale {
  eyebrow: string;
  title: string;
  items: { headline: string; sub: string }[];
}

const content: Record<ActiveLocale, IndependenceLocale> = {
  pt: {
    eyebrow: "A nossa independência",
    title: "MoldCheck.pt é a alternativa independente.",
    items: [
      { headline: "Sem venda de tratamentos", sub: "Inspecionamos e informamos — não vendemos remediação." },
      { headline: "Sem comissões de remediação", sub: "Os nossos incentivos não dependem do que é recomendado a seguir." },
      { headline: "Informação baseada na ciência", sub: "Publicamos o que a evidência suporta, incluindo a incerteza onde ela existe." },
    ],
  },
  en: {
    eyebrow: "Our independence",
    title: "MoldCheck.pt is the independent alternative.",
    items: [
      { headline: "No treatment sales", sub: "We inspect and inform — we do not sell remediation." },
      { headline: "No remediation commissions", sub: "Our incentives do not depend on what gets recommended next." },
      { headline: "Science-first information", sub: "We publish what evidence supports, including uncertainty where it exists." },
    ],
  },
  fr: {
    eyebrow: "Notre indépendance",
    title: "MoldCheck.pt est l'alternative indépendante.",
    items: [
      { headline: "Aucune vente de traitements", sub: "Nous inspectons et informons — nous ne vendons pas de remédiation." },
      { headline: "Aucune commission", sub: "Nos incitations ne dépendent pas de ce qui est recommandé ensuite." },
      { headline: "Information fondée sur la science", sub: "Nous publions ce que les preuves soutiennent, y compris l'incertitude là où elle existe." },
    ],
  },
  de: {
    eyebrow: "Unsere Unabhängigkeit",
    title: "MoldCheck.pt ist die unabhängige Alternative.",
    items: [
      { headline: "Kein Verkauf von Behandlungen", sub: "Wir inspizieren und informieren — wir verkaufen keine Sanierung." },
      { headline: "Keine Sanierungsprovisionen", sub: "Unsere Anreize hängen nicht davon ab, was als Nächstes empfohlen wird." },
      { headline: "Wissenschaftlich fundierte Information", sub: "Wir veröffentlichen, was die Evidenz stützt, einschließlich Unsicherheiten." },
    ],
  },
  nl: {
    eyebrow: "Onze onafhankelijkheid",
    title: "MoldCheck.pt is het onafhankelijke alternatief.",
    items: [
      { headline: "Geen behandelingsverkoop", sub: "Wij inspecteren en informeren — wij verkopen geen sanering." },
      { headline: "Geen saneringscommissies", sub: "Onze prikkels hangen niet af van wat er daarna wordt aanbevolen." },
      { headline: "Wetenschappelijk onderbouwde informatie", sub: "Wij publiceren wat het bewijs ondersteunt, inclusief onzekerheid waar die bestaat." },
    ],
  },
  it: {
    eyebrow: "La nostra indipendenza",
    title: "MoldCheck.pt è l'alternativa indipendente.",
    items: [
      { headline: "Nessuna vendita di trattamenti", sub: "Ispezioniamo e informiamo — non vendiamo bonifica." },
      { headline: "Nessuna commissione di bonifica", sub: "I nostri incentivi non dipendono da ciò che viene raccomandato dopo." },
      { headline: "Informazione basata sulla scienza", sub: "Pubblichiamo ciò che le prove supportano, inclusa l'incertezza dove esiste." },
    ],
  },
  es: {
    eyebrow: "Nuestra independencia",
    title: "MoldCheck.pt es la alternativa independiente.",
    items: [
      { headline: "Sin venta de tratamientos", sub: "Inspeccionamos e informamos — no vendemos remediación." },
      { headline: "Sin comisiones de remediación", sub: "Nuestros incentivos no dependen de lo que se recomiende después." },
      { headline: "Información basada en la ciencia", sub: "Publicamos lo que la evidencia respalda, incluyendo la incertidumbre donde existe." },
    ],
  },
};

function IconNoSale() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M9 4h6l1 5H8L9 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 9l-4 4 7 7 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconNoCommission() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8v1m0 6v1M10 10.5c0-.83.67-1.5 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 0 0 3h1c.83 0 1.5-.67 1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconScience() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6M10 3v6l-4 8a1 1 0 0 0 .9 1.5h10.2A1 1 0 0 0 18 17l-4-8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 16.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="1" fill="currentColor"/>
    </svg>
  );
}

const icons = [IconNoSale, IconNoCommission, IconScience];

export function HomeIndependenceSection({ locale }: { locale: ActiveLocale }) {
  const c = content[locale] ?? content.en;

  return (
    <section className="home-independence">
      <div className="home-independence__header">
        <p className="home-independence__eyebrow">{c.eyebrow}</p>
        <h2 className="home-independence__title">{c.title}</h2>
      </div>
      <div className="home-independence__grid">
        {c.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div key={item.headline} className="home-independence__item">
              <div className="home-independence__icon-wrap">
                <Icon />
              </div>
              <p className="home-independence__item-headline">{item.headline}</p>
              <p className="home-independence__item-sub">{item.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
