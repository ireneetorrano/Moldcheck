import type { ActiveLocale } from "@/config/locales";

export type RiskBand = "low" | "moderate" | "high" | "critical";

export interface Question {
  id: string;
  type: "single_choice";
  required: boolean;
  labelKey: string;
  weight: number;
  options: { value: string; labelKey: string; scoreContribution: number }[];
}

export interface AnswerOption {
  value: string;
  label: string; // resolved at runtime from i18n
  score: number; // absolute points (can be negative for reductions)
}

export interface QuestionDef {
  id: string;
  sectionKey: "building" | "conditions" | "lifestyle";
  labelKey: string;
  options: { value: string; labelKey: string; score: number }[];
}

export type Answers = Record<string, string>;

export type CalculatorPhase =
  | { phase: "idle" }
  | { phase: "form"; answers: Answers }
  | { phase: "result"; answers: Answers; score: number; band: RiskBand }
  | { phase: "submitted" }
  | { phase: "skipped" };

export interface RiskFactor {
  title: string;
  description: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface CalculatorResult {
  score: number;
  band: RiskBand;
  profileText: string;
  riskFactors: RiskFactor[];
  checklistItems: ChecklistItem[];
}

export interface CalcI18n {
  locale: ActiveLocale;
  pageEyebrow: string;
  pageTitle: string;
  pageIntro: string;
  pageMeta: string;
  startCta: string;
  section1Title: string;
  section2Title: string;
  section3Title: string;
  calculateButton: string;
  resetButton: string;
  resultTitle: string;
  scoreLabel: string;
  bandLabels: Record<RiskBand, string>;
  profileLabel: string;
  factorsLabel: string;
  nextStepsLabel: string;
  checklistLabel: string;
  ctaPrimary: Record<RiskBand, { label: string; href: string }>;
  ctaSecondary: Record<RiskBand, { label: string; href: string }>;
  questions: Record<string, { label: string; options: Record<string, string> }>;
  checklistItems: Record<string, string>;
  riskFactorLabels: Record<string, { title: string; description: string }>;
  shareLabel: string;
  shareCopied: string;
  previousResultLabel: string;
  previousResultCta: string;
  previousResultDismiss: string;
  validationError: string;
  profileTemplates: {
    buildingType: Record<string, string>;
    year: Record<string, string>;
    location: Record<string, string>;
    hygrometer: Record<string, string>;
    mold: Record<string, string>;
    connector: string;
    suffix: string;
  };
}
