import type { Answers, Question, RiskBand } from "../types";

/**
 * Computes a risk score 0–100 as a weighted sum across all questions.
 * Risk_Score = round( Σ (question.weight × answer.scoreContribution) × 100 )
 */
export function computeScore(answers: Answers, questions: Question[]): number {
  let total = 0;
  for (const q of questions) {
    const answerValue = answers[q.id];
    if (!answerValue) continue;
    const option = q.options.find((o) => o.value === answerValue);
    if (!option) continue;
    total += q.weight * option.scoreContribution;
  }
  return Math.min(100, Math.max(0, Math.round(total * 100)));
}

export function getBand(score: number): RiskBand {
  if (score <= 33) return "low";
  if (score <= 66) return "medium";
  return "high";
}
