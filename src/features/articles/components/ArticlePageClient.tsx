"use client";

import { useEffect, useRef, useState } from "react";
import type { ArticleLocaleContent, ArticleFaq, ArticleSource } from "@/features/content/data/articles/a4-portugal";
import type { ActiveLocale } from "@/config/locales";
import { ArticleLocaleContext } from "@/features/articles/context/ArticleLocaleContext";

export interface TocItem {
  id: string;
  label: string;
}

interface ArticlePageClientProps {
  locale: ActiveLocale;
  content: ArticleLocaleContent;
  sectionLabel: string;
  tocTitle: string;
  tocItems: TocItem[];
  slugsByLocale: Record<ActiveLocale, string>;
  uiLabels: {
    sources: string;
    disclosure: string;
    faq: string;
  };
}

// Render body paragraphs, injecting id anchors on ## headings
function ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((para, i) => {
        if (para.startsWith("## ")) {
          const text = para.slice(3);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .trim()
            .replace(/\s+/g, "-");
          return (
            <h2 key={i} id={id} className="article-page__h2">
              {text}
            </h2>
          );
        }
        return (
          <p key={i} className="article-page__para">
            {para}
          </p>
        );
      })}
    </>
  );
}

// Single accordion FAQ item
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button
        className="faq-item__trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function ArticlePageClient({
  locale,
  content,
  sectionLabel,
  tocTitle,
  tocItems,
  slugsByLocale,
  uiLabels,
}: ArticlePageClientProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [tocVisible, setTocVisible] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  // Show TOC after scrolling ~200px into the article
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setTocVisible(scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section spy: track which anchor is in view
  useEffect(() => {
    const ids = tocItems.map((t) => t.id);
    const observers: IntersectionObserver[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(callback, {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [tocItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ArticleLocaleContext.Provider value={slugsByLocale}>
    <div className="article-layout">
      {/* Sticky TOC — desktop only */}
      <aside
        className={`article-toc${tocVisible ? " article-toc--visible" : ""}`}
        aria-label={tocTitle}
      >
        <p className="article-toc__title">{tocTitle}</p>
        <nav>
          <ol className="article-toc__list">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`article-toc__item${activeId === item.id ? " is-active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      {/* Main article */}
      <article className="article-page" ref={articleRef}>
        <header className="article-page__header">
          <div className="article-page__eyebrow">{sectionLabel}</div>
          <h1 className="article-page__title">{content.title}</h1>
          <p className="article-page__byline">{content.byline}</p>
        </header>

        <div className="article-page__body">
          <ArticleBody paragraphs={content.body} />
        </div>

        {/* Disclosure */}
        <aside className="article-page__disclosure">
          <strong className="article-page__disclosure-label">{uiLabels.disclosure}</strong>
          <p>{content.disclosure}</p>
        </aside>

        {/* Sources */}
        <section id="sources" className="article-page__sources" aria-label={uiLabels.sources}>
          <h2 className="article-page__section-heading">{uiLabels.sources}</h2>
          <ol className="article-page__sources-list">
            {content.sources.map((src: ArticleSource, i: number) => (
              <li key={i}>{src.label}</li>
            ))}
          </ol>
        </section>

        {/* FAQ — accordion */}
        <section id="faq" className="article-page__faq" aria-label={uiLabels.faq}>
          <div className="faq-accordion">
            <h2 className="article-page__section-heading faq-accordion__heading">{uiLabels.faq}</h2>
            {content.faq.map((item: ArticleFaq, i: number) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </article>
    </div>
    </ArticleLocaleContext.Provider>
  );
}
