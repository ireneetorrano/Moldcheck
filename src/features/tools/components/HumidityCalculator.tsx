"use client";

import { useState, useEffect, useRef } from "react";
import type { ActiveLocale } from "@/config/locales";
import type { Answers, CalculatorPhase } from "../types";
import { computeScore, getBand } from "../lib/scoring";
import { getCalcI18n } from "../lib/i18n";
import { analytics } from "../lib/analytics";
import { saveToStorage, loadFromStorage, clearStorage, readAnswersFromUrl } from "../lib/queryString";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorResult } from "./CalculatorResult";

interface HumidityCalculatorProps {
  locale: ActiveLocale;
  /** When true, skip the idle intro and go straight to the form (unless a saved result exists) */
  startDirect?: boolean;
}

// Navbar height to offset scroll-to-result
const NAVBAR_OFFSET = 80;

export function HumidityCalculator({ locale, startDirect }: HumidityCalculatorProps) {
  const i18n = getCalcI18n(locale);
  const [phase, setPhase] = useState<CalculatorPhase>(
    startDirect ? { phase: "form", answers: {} } : { phase: "idle" }
  );
  const resultRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // On mount: restore from URL params or localStorage directly into result state
  useEffect(() => {
    const fromUrl = readAnswersFromUrl();
    if (fromUrl) {
      const score = computeScore(fromUrl);
      const band = getBand(score);
      setPhase({ phase: "result", answers: fromUrl, score, band });
      return;
    }
    const stored = loadFromStorage();
    if (stored) {
      const band = getBand(stored.score);
      setPhase({ phase: "result", answers: stored.answers, score: stored.score, band });
    }
  }, []);

  // Scroll to result top whenever we enter result phase
  useEffect(() => {
    if (phase.phase !== "result") return;
    // Wait one frame for the DOM to render the result block
    const raf = requestAnimationFrame(() => {
      if (!resultRef.current) return;
      const top = resultRef.current.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [phase.phase]);

  function handleStart() {
    analytics.calculatorStarted();
    setPhase({ phase: "form", answers: {} });
  }

  function handleChange(id: string, value: string) {
    if (phase.phase !== "form") return;
    setPhase({ ...phase, answers: { ...phase.answers, [id]: value } });
  }

  function handleSubmit() {
    if (phase.phase !== "form") return;
    const score = computeScore(phase.answers);
    const band = getBand(score);
    analytics.calculatorCompleted(band);
    saveToStorage(phase.answers, score);
    setPhase({ phase: "result", answers: phase.answers, score, band });
  }

  const [scrollToTop, setScrollToTop] = useState(false);

  // Scroll to top of calculator after reset
  useEffect(() => {
    if (!scrollToTop) return;
    setScrollToTop(false);
    const raf = requestAnimationFrame(() => {
      if (!topRef.current) return;
      const top = topRef.current.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [scrollToTop]);

  function handleReset() {
    clearStorage();
    setPhase(startDirect ? { phase: "form", answers: {} } : { phase: "idle" });
    setScrollToTop(true);
  }

  return (
    <div className="humidity-calculator">
      {/* Hero / intro — always visible */}
      <div ref={topRef} className="calc-hero">
        <p className="calc-hero__eyebrow">{i18n.pageEyebrow}</p>
        <h1 className="calc-hero__title">{i18n.pageTitle}</h1>
        <p className="calc-hero__intro">{i18n.pageIntro}</p>
        {phase.phase === "idle" && (
          <div className="calc-hero__actions">
            <button type="button" onClick={handleStart} className="calc-start-btn">
              {i18n.startCta}
            </button>
          </div>
        )}
      </div>

      {/* Form */}
      {phase.phase === "form" && (
        <CalculatorForm
          i18n={i18n}
          answers={phase.answers}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}

      {/* Result — ref used for scroll target */}
      {phase.phase === "result" && (
        <div ref={resultRef}>
          <CalculatorResult
            locale={locale}
            i18n={i18n}
            answers={phase.answers}
            score={phase.score}
            band={phase.band}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  );
}
