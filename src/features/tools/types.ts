export type RiskBand = "low" | "medium" | "high";

export interface AnswerOption {
  value: string;
  labelKey: string;
  scoreContribution: number; // 0.0 (no risk) to 1.0 (max risk)
}

export interface Question {
  id: string;
  type: "single_choice";
  required: boolean;
  labelKey: string;
  options: AnswerOption[];
  weight: number; // contribution to total score; all weights sum to 1.0
}

export type Answers = Record<string, string>;

export type CalculatorPhase =
  | { phase: "idle" }
  | { phase: "step"; stepIndex: number; answers: Answers }
  | { phase: "result"; answers: Answers; score: number; band: RiskBand }
  | { phase: "email_capture"; score: number; band: RiskBand }
  | { phase: "submitted" }
  | { phase: "skipped" };
