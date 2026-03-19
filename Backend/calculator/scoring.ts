/** Humidity risk calculator scoring logic */

export type QuestionWeight = {
  questionId: string;
  optionId: string;
  score: number;
};

/**
 * Computes a 0–100 risk score from a map of questionId → optionId answers.
 * Weights are defined here so they can be tested independently of the UI.
 */
export const QUESTION_WEIGHTS: QuestionWeight[] = [
  { questionId: "q_room_type", optionId: "basement", score: 20 },
  { questionId: "q_room_type", optionId: "bathroom", score: 15 },
  { questionId: "q_room_type", optionId: "kitchen", score: 10 },
  { questionId: "q_room_type", optionId: "bedroom", score: 8 },
  { questionId: "q_room_type", optionId: "living", score: 5 },

  { questionId: "q_condensation", optionId: "always", score: 25 },
  { questionId: "q_condensation", optionId: "often", score: 18 },
  { questionId: "q_condensation", optionId: "sometimes", score: 10 },
  { questionId: "q_condensation", optionId: "never", score: 0 },

  { questionId: "q_ventilation", optionId: "poor", score: 20 },
  { questionId: "q_ventilation", optionId: "moderate", score: 10 },
  { questionId: "q_ventilation", optionId: "good", score: 0 },

  { questionId: "q_water_damage", optionId: "current", score: 25 },
  { questionId: "q_water_damage", optionId: "past", score: 10 },
  { questionId: "q_water_damage", optionId: "none", score: 0 },

  { questionId: "q_climate_zone", optionId: "humid", score: 10 },
  { questionId: "q_climate_zone", optionId: "temperate", score: 5 },
  { questionId: "q_climate_zone", optionId: "dry", score: 0 },

  { questionId: "q_visible_mold", optionId: "large", score: 30 },
  { questionId: "q_visible_mold", optionId: "small", score: 15 },
  { questionId: "q_visible_mold", optionId: "none", score: 0 },
];

const MAX_RAW_SCORE = 130; // sum of all max-weight options

export function computeRiskScore(answers: Record<string, string>): number {
  const raw = QUESTION_WEIGHTS.reduce((sum, w) => {
    return answers[w.questionId] === w.optionId ? sum + w.score : sum;
  }, 0);
  return Math.min(100, Math.round((raw / MAX_RAW_SCORE) * 100));
}
