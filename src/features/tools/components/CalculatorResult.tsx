"use client";

import { useState } from "react";
import type { ActiveLocale } from "@/config/locales";
import type { Answers, RiskBand, CalcI18n } from "../types";
import { computeScore, getBand, getPriorityChecklist, getDetectedRiskFactors } from "../lib/scoring";
import { buildProfileText } from "../lib/i18n";
import { buildShareUrl } from "../lib/queryString";
import { analytics } from "../lib/analytics";

interface CalculatorResultProps {
  locale: ActiveLocale;
  i18n: CalcI18n;
  answers: Answers;
  score: number;
  band: RiskBand;
  onReset: () => void;
}

const BAND_CONFIG: Record<RiskBand, { color: string; bg: string; border: string; gauge: string }> = {
  low:      { color: "#1a7a4a", bg: "#f0faf4", border: "#a8d5b8", gauge: "#2a9d5c" },
  moderate: { color: "#92600a", bg: "#fffbf0", border: "#f0d080", gauge: "#d4a017" },
  high:     { color: "#b84a00", bg: "#fff8f5", border: "#f0b090", gauge: "#e05a00" },
  critical: { color: "#8b0000", bg: "#fff5f5", border: "#f0a0a0", gauge: "#c00000" },
};

function ScoreGauge({ score, band }: { score: number; band: RiskBand }) {
  const cfg = BAND_CONFIG[band];
  const pct = Math.min(100, Math.max(0, score));
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="calc-gauge">
      <svg viewBox="0 0 120 120" className="calc-gauge__svg" aria-hidden="true">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#e8f0ef" strokeWidth="10" />
        <circle
          cx="60" cy="60" r="54"
          fill="none"
          stroke={cfg.gauge}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>
      <div className="calc-gauge__inner">
        <span className="calc-gauge__score" style={{ color: cfg.color }}>{score}</span>
        <span className="calc-gauge__max">/100</span>
      </div>
    </div>
  );
}

export function CalculatorResult({ locale, i18n, answers, score, band, onReset }: CalculatorResultProps) {
  const [copied, setCopied] = useState(false);
  const cfg = BAND_CONFIG[band];
  const profileText = buildProfileText(locale, answers);
  const factorKeys = getDetectedRiskFactors(answers);
  const checklistIds = getPriorityChecklist(answers);
  const primaryCta = i18n.ctaPrimary[band];
  const secondaryCta = i18n.ctaSecondary[band];

  function handleShare() {
    const url = buildShareUrl(answers);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  function handlePrimaryClick() {
    if (band === "high" || band === "critical") {
      analytics.ctaInspectionClicked();
    } else {
      analytics.ctaChecklistClicked();
    }
  }

  function handleSecondaryClick() {
    if (band === "moderate") {
      analytics.ctaInspectionClicked();
    } else {
      analytics.ctaChecklistClicked();
    }
  }

  return (
    <div className="calc-result">
      {/* Score badge */}
      <div className="calc-result__badge" style={{ background: cfg.bg, borderColor: cfg.border }}>
        <ScoreGauge score={score} band={band} />
        <div className="calc-result__badge-text">
          <p className="calc-result__score-label">{i18n.scoreLabel}</p>
          <p className="calc-result__band-label" style={{ color: cfg.color }}>
            {i18n.bandLabels[band]}
          </p>
        </div>
      </div>

      {/* Profile */}
      <div className="calc-result__block">
        <h3 className="calc-result__block-title">{i18n.profileLabel}</h3>
        <p className="calc-result__profile-text">{profileText}</p>
      </div>

      {/* Risk factors */}
      {factorKeys.length > 0 && (
        <div className="calc-result__block">
          <h3 className="calc-result__block-title">{i18n.factorsLabel}</h3>
          <ul className="calc-result__factors">
            {factorKeys.map((key) => {
              const factor = i18n.riskFactorLabels[key];
              if (!factor) return null;
              return (
                <li key={key} className="calc-result__factor">
                  <span className="calc-result__factor-title">{factor.title}</span>
                  <span className="calc-result__factor-desc">{factor.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* CTAs */}
      <div className="calc-result__block">
        <h3 className="calc-result__block-title">{i18n.nextStepsLabel}</h3>
        <div className="calc-result__ctas">
          <a
            href={primaryCta.href}
            className="calc-cta calc-cta--primary"
            target={primaryCta.href.startsWith("/") ? undefined : "_blank"}
            rel={primaryCta.href.startsWith("/") ? undefined : "noopener noreferrer"}
            onClick={handlePrimaryClick}
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="calc-cta calc-cta--secondary"
            target={secondaryCta.href.startsWith("/") ? undefined : "_blank"}
            rel={secondaryCta.href.startsWith("/") ? undefined : "noopener noreferrer"}
            onClick={handleSecondaryClick}
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>

      {/* Checklist priorities */}
      {checklistIds.length > 0 && (
        <div className="calc-result__block">
          <h3 className="calc-result__block-title">{i18n.checklistLabel}</h3>
          <ul className="calc-result__checklist">
            {checklistIds.map((id) => {
              const text = i18n.checklistItems[id];
              if (!text) return null;
              return (
                <li key={id} className="calc-result__checklist-item">
                  <span className="calc-result__check-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke="#2a7a75" strokeWidth="1"/>
                      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#2a7a75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Share + Reset */}
      <div className="calc-result__actions">
        <button type="button" onClick={handleShare} className="calc-share-btn">
          {copied ? i18n.shareCopied : i18n.shareLabel}
        </button>
        <button type="button" onClick={onReset} className="calc-reset-btn">
          {i18n.resetButton}
        </button>
      </div>
    </div>
  );
}
