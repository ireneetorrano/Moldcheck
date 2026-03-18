import type { ActiveLocale } from "@/config/locales";
import { getHomeProblemContent } from "@/features/content/data/homeContent";

/** Renders a paragraph, bolding any "Word:" prefix at the start. */
function ProblemParagraph({ text }: { text: string }) {
  // Match a short label like "The result:" or "O resultado:" at the start
  const match = text.match(/^([^:]{1,30}:)\s*/);
  if (match) {
    const label = match[1];
    const rest = text.slice(match[0].length);
    return (
      <p>
        <strong>{label}</strong>{" "}{rest}
      </p>
    );
  }
  return <p>{text}</p>;
}

export function HomeProblemSection({ locale }: { locale: ActiveLocale }) {
  const { problemEyebrow, problemTitle, problemBody, problemLink } = getHomeProblemContent(locale);
  const paragraphs = problemBody.split("\n\n").filter(Boolean);

  return (
    <section className="home-problem">
      <div className="home-problem__text">
        <p className="home-problem__eyebrow">{problemEyebrow}</p>
        <h2 className="home-problem__title">{problemTitle}</h2>
        <div className="home-problem__body">
          {paragraphs.map((p) => (
            <ProblemParagraph key={p} text={p} />
          ))}
        </div>
        <a href="#" className="home-problem__link">{problemLink}</a>
      </div>
      <div className="home-problem__image-wrap">
        <img
          src="/img/moho pared.png"
          alt=""
          className="home-problem__image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
