import type { Metadata } from "next";
import type { ActiveLocale } from "@/config/locales";
import { getLocalizedGlobalPath } from "@/config/routeMap";

const indexMeta: Record<ActiveLocale, { title: string; description: string; eyebrow: string; heading: string; intro: string }> = {
  pt: {
    title: "Ferramentas de Avaliação — MoldCheck.pt",
    description: "Ferramentas editoriais gratuitas para avaliar o risco de humidade e bolor em casa.",
    eyebrow: "Ferramentas gratuitas",
    heading: "Ferramentas",
    intro: "Calculadoras e utilitários editoriais para apoiar decisões informadas sobre humidade e bolor.",
  },
  en: {
    title: "Assessment Tools — MoldCheck.pt",
    description: "Free editorial tools to assess humidity and mold risk at home.",
    eyebrow: "Free tools",
    heading: "Tools",
    intro: "Editorial calculators and utilities to support informed decisions about damp and mold.",
  },
  fr: {
    title: "Outils d'évaluation — MoldCheck.pt",
    description: "Outils éditoriaux gratuits pour évaluer le risque d'humidité et de moisissures chez soi.",
    eyebrow: "Outils gratuits",
    heading: "Outils",
    intro: "Calculateurs et utilitaires éditoriaux pour prendre des décisions éclairées sur l'humidité et les moisissures.",
  },
  de: {
    title: "Bewertungstools — MoldCheck.pt",
    description: "Kostenlose redaktionelle Tools zur Bewertung von Feuchtigkeits- und Schimmelrisiken zu Hause.",
    eyebrow: "Kostenlose Tools",
    heading: "Tools",
    intro: "Redaktionelle Rechner und Hilfsmittel für fundierte Entscheidungen zu Feuchtigkeit und Schimmel.",
  },
  nl: {
    title: "Beoordelingstools — MoldCheck.pt",
    description: "Gratis redactionele tools om vocht- en schimmelrisico thuis te beoordelen.",
    eyebrow: "Gratis tools",
    heading: "Tools",
    intro: "Redactionele calculators en hulpmiddelen voor weloverwogen beslissingen over vocht en schimmel.",
  },
  it: {
    title: "Strumenti di valutazione — MoldCheck.pt",
    description: "Strumenti editoriali gratuiti per valutare il rischio di umidità e muffa in casa.",
    eyebrow: "Strumenti gratuiti",
    heading: "Strumenti",
    intro: "Calcolatori e utilità editoriali per supportare decisioni informate su umidità e muffa.",
  },
  es: {
    title: "Herramientas de evaluación — MoldCheck.pt",
    description: "Herramientas editoriales gratuitas para evaluar el riesgo de humedad y moho en casa.",
    eyebrow: "Herramientas gratuitas",
    heading: "Herramientas",
    intro: "Calculadoras y utilidades editoriales para tomar decisiones informadas sobre humedad y moho.",
  },
};

const toolCards: Record<ActiveLocale, { title: string; description: string; cta: string; badge: string }[]> = {
  pt: [{ title: "Calculadora de Risco de Humidade", description: "Responda a 14 perguntas sobre o seu edifício, condições atuais e estilo de vida. Obtenha uma pontuação de risco personalizada e uma lista de verificação prioritária — sem registo.", cta: "Iniciar avaliação gratuita", badge: "FERRAMENTA GRATUITA" }],
  en: [{ title: "Humidity Risk Calculator", description: "Answer 14 questions about your building, current conditions and lifestyle. Get a personalised risk score and a priority checklist — no registration required.", cta: "Start free assessment", badge: "FREE TOOL" }],
  fr: [{ title: "Calculateur de risque d'humidité", description: "Répondez à 14 questions sur votre bâtiment, les conditions actuelles et votre mode de vie. Obtenez un score de risque personnalisé et une liste de contrôle prioritaire — sans inscription.", cta: "Commencer l'évaluation gratuite", badge: "OUTIL GRATUIT" }],
  de: [{ title: "Feuchtigkeitsrisiko-Rechner", description: "Beantworten Sie 14 Fragen zu Ihrem Gebäude, den aktuellen Bedingungen und Ihrem Lebensstil. Erhalten Sie eine personalisierte Risikobewertung und eine priorisierte Checkliste — ohne Registrierung.", cta: "Kostenlose Bewertung starten", badge: "KOSTENLOSES TOOL" }],
  nl: [{ title: "Vochtrisico Calculator", description: "Beantwoord 14 vragen over uw gebouw, huidige omstandigheden en levensstijl. Ontvang een gepersonaliseerde risicoscore en een prioriteitslijst — geen registratie vereist.", cta: "Gratis beoordeling starten", badge: "GRATIS TOOL" }],
  it: [{ title: "Calcolatore del rischio di umidità", description: "Rispondi a 14 domande sul tuo edificio, le condizioni attuali e il tuo stile di vita. Ottieni un punteggio di rischio personalizzato e una lista di controllo prioritaria — senza registrazione.", cta: "Inizia la valutazione gratuita", badge: "STRUMENTO GRATUITO" }],
  es: [{ title: "Calculadora de riesgo de humedad", description: "Responde 14 preguntas sobre tu edificio, las condiciones actuales y tu estilo de vida. Obtén una puntuación de riesgo personalizada y una lista de verificación prioritaria — sin registro.", cta: "Iniciar evaluación gratuita", badge: "HERRAMIENTA GRATUITA" }],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = indexMeta[locale] ?? indexMeta.en;
  return { title: m.title, description: m.description };
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const m = indexMeta[locale] ?? indexMeta.en;
  const cards = toolCards[locale] ?? toolCards.en;
  const toolsBase = getLocalizedGlobalPath(locale, "tools");

  return (
    <div className="tools-index">
      <header className="tools-index__header">
        <div className="tools-index__eyebrow">{m.eyebrow}</div>
        <h1 className="tools-index__heading">{m.heading}</h1>
        <p className="tools-index__intro">{m.intro}</p>
      </header>

      <ul className="tools-index__list" role="list">
        {cards.map((card, i) => {
          const href = i === 0 ? `${toolsBase}/humidity-risk-calculator` : "#";
          return (
            <li key={i} className="tools-index__card">
              <div className="tools-index__card-inner">
                <div className="tools-index__card-badge">{card.badge}</div>
                <p className="tools-index__card-title">{card.title}</p>
                <p className="tools-index__card-desc">{card.description}</p>
                <a href={href} className="tools-index__card-cta">{card.cta}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
