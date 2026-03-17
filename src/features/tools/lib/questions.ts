import type { Question } from "../types";

/**
 * All weights must sum to 1.0.
 * scoreContribution: 0 = no risk, 1 = maximum risk for that question.
 */
export const QUESTIONS: Question[] = [
  {
    id: "q_visible_mold",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_visible_mold_label",
    weight: 0.30,
    options: [
      { value: "none",  labelKey: "Calculator.q_visible_mold_opt_none",  scoreContribution: 0.0 },
      { value: "small", labelKey: "Calculator.q_visible_mold_opt_small", scoreContribution: 0.5 },
      { value: "large", labelKey: "Calculator.q_visible_mold_opt_large", scoreContribution: 1.0 },
    ],
  },
  {
    id: "q_condensation",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_condensation_label",
    weight: 0.20,
    options: [
      { value: "never",     labelKey: "Calculator.q_condensation_opt_never",     scoreContribution: 0.0 },
      { value: "sometimes", labelKey: "Calculator.q_condensation_opt_sometimes", scoreContribution: 0.33 },
      { value: "often",     labelKey: "Calculator.q_condensation_opt_often",     scoreContribution: 0.67 },
      { value: "always",    labelKey: "Calculator.q_condensation_opt_always",    scoreContribution: 1.0 },
    ],
  },
  {
    id: "q_ventilation",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_ventilation_label",
    weight: 0.15,
    options: [
      { value: "good",     labelKey: "Calculator.q_ventilation_opt_good",     scoreContribution: 0.0 },
      { value: "moderate", labelKey: "Calculator.q_ventilation_opt_moderate", scoreContribution: 0.5 },
      { value: "poor",     labelKey: "Calculator.q_ventilation_opt_poor",     scoreContribution: 1.0 },
    ],
  },
  {
    id: "q_water_damage",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_water_damage_label",
    weight: 0.20,
    options: [
      { value: "none",    labelKey: "Calculator.q_water_damage_opt_none",    scoreContribution: 0.0 },
      { value: "past",    labelKey: "Calculator.q_water_damage_opt_past",    scoreContribution: 0.5 },
      { value: "current", labelKey: "Calculator.q_water_damage_opt_current", scoreContribution: 1.0 },
    ],
  },
  {
    id: "q_climate_zone",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_climate_zone_label",
    weight: 0.10,
    options: [
      { value: "dry",       labelKey: "Calculator.q_climate_zone_opt_dry",       scoreContribution: 0.0 },
      { value: "temperate", labelKey: "Calculator.q_climate_zone_opt_temperate", scoreContribution: 0.5 },
      { value: "humid",     labelKey: "Calculator.q_climate_zone_opt_humid",     scoreContribution: 1.0 },
    ],
  },
  {
    id: "q_room_type",
    type: "single_choice",
    required: true,
    labelKey: "Calculator.q_room_type_label",
    weight: 0.05,
    options: [
      { value: "living",   labelKey: "Calculator.q_room_type_opt_living",   scoreContribution: 0.0 },
      { value: "bedroom",  labelKey: "Calculator.q_room_type_opt_bedroom",  scoreContribution: 0.25 },
      { value: "kitchen",  labelKey: "Calculator.q_room_type_opt_kitchen",  scoreContribution: 0.5 },
      { value: "bathroom", labelKey: "Calculator.q_room_type_opt_bathroom", scoreContribution: 0.75 },
      { value: "basement", labelKey: "Calculator.q_room_type_opt_basement", scoreContribution: 1.0 },
    ],
  },
];
