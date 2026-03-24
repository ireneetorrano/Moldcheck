import type { Answers, RiskBand } from "../types";
import type { ChecklistId } from "./calculatorConfig";
import { QUESTIONS, BAND_THRESHOLDS } from "./calculatorConfig";

export function computeScore(answers: Answers): number {
  let total = 0;
  for (const q of QUESTIONS) {
    const val = answers[q.id];
    if (!val) continue;
    const opt = q.options.find((o) => o.value === val);
    if (opt) total += opt.score;
  }
  return Math.min(100, Math.max(0, Math.round(total)));
}

export function getBand(score: number): RiskBand {
  for (const { band, min } of BAND_THRESHOLDS) {
    if (score >= min) return band;
  }
  return "low";
}

// Returns up to 5 most relevant checklist item IDs based on answers
export function getPriorityChecklist(answers: Answers): ChecklistId[] {
  const items: ChecklistId[] = [];

  const add = (id: ChecklistId) => {
    if (!items.includes(id)) items.push(id);
  };

  // Ground floor → rising damp
  if (answers.floorLevel === "ground" || answers.buildingType === "ground_floor_apt") {
    add("cl_skirting");
    add("cl_lower_walls");
    add("cl_basement_floor");
  }

  // Major water event → hidden damage
  if (answers.waterEvents === "major" || answers.waterEvents === "moderate") {
    add("cl_hidden_water");
    add("cl_ceiling");
    add("cl_porous_materials");
  }

  // High humidity
  if (answers.hygrometer === "above_80" || answers.hygrometer === "70_80") {
    add("cl_moisture_meter");
    add("cl_ventilation_check");
    add("cl_condensation_windows");
  }

  // Recurrent mold
  if (answers.moldHistory === "recurrent" || answers.moldHistory === "large_porous") {
    add("cl_professional_assessment");
    add("cl_hidden_water");
    add("cl_porous_materials");
  }

  // Poor bathroom ventilation
  if (answers.bathroomVent === "no_vent" || answers.bathroomVent === "window_only") {
    add("cl_bathroom_ceiling");
    add("cl_grout");
    add("cl_extractor");
  }

  // Single glazing / thermal bridge risk
  if (answers.windowType === "single_alu" || answers.windowType === "double_no_break") {
    add("cl_window_frames");
    add("cl_thermal_bridge");
    add("cl_behind_furniture");
  }

  // Top floor
  if (answers.floorLevel === "top_floor" || answers.buildingType === "top_floor_apt") {
    add("cl_roof_terrace");
    add("cl_ceiling");
  }

  // Laundry indoors
  if (answers.laundryDrying === "usually_in" || answers.laundryDrying === "sometimes_in") {
    add("cl_ventilation_check");
    add("cl_condensation_windows");
  }

  // Old building
  if (answers.constructionYear === "before_1960" || answers.constructionYear === "1960_1980") {
    add("cl_wardrobe_back");
    add("cl_thermal_bridge");
    add("cl_behind_furniture");
  }

  // Strong odour
  if (answers.odour === "strong" || answers.odour === "regular") {
    add("cl_professional_assessment");
    add("cl_hidden_water");
  }

  // Fallback — always include monitoring
  add("cl_monitoring");

  return items.slice(0, 5);
}

// Returns up to 5 risk factor keys detected from answers
export function getDetectedRiskFactors(answers: Answers): string[] {
  const factors: string[] = [];

  if (answers.hygrometer === "above_80" || answers.hygrometer === "70_80") {
    factors.push("high_humidity");
  }
  if (answers.moldHistory === "recurrent") {
    factors.push("recurrent_mold");
  }
  if (answers.waterEvents === "major" || answers.waterEvents === "moderate") {
    factors.push("water_event");
  }
  if (answers.bathroomVent === "no_vent") {
    factors.push("no_bathroom_vent");
  }
  if (answers.windowType === "single_alu") {
    factors.push("thermal_bridge_windows");
  }
  if (answers.constructionYear === "before_1960" || answers.constructionYear === "1960_1980") {
    factors.push("old_building");
  }
  if (answers.odour === "strong" || answers.odour === "regular") {
    factors.push("musty_odour");
  }
  if (answers.laundryDrying === "usually_in") {
    factors.push("indoor_laundry");
  }
  if (answers.heating === "rarely") {
    factors.push("poor_heating");
  }
  if (answers.floorLevel === "ground" || answers.buildingType === "ground_floor_apt") {
    factors.push("ground_floor");
  }

  return factors.slice(0, 5);
}
