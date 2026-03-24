import type { QuestionDef, RiskBand } from "../types";

// ---------------------------------------------------------------------------
// Questions — 13 questions across 3 sections
// Score values are absolute points (0–100 total budget)
// Negative values = risk reductions
// ---------------------------------------------------------------------------

export const QUESTIONS: QuestionDef[] = [
  // ── Section 1: The Building ──────────────────────────────────────────────
  {
    id: "buildingType",
    sectionKey: "building",
    labelKey: "q_buildingType",
    options: [
      { value: "apartment_block",    labelKey: "opt_apartment_block",    score: 4 },
      { value: "detached",           labelKey: "opt_detached",           score: 2 },
      { value: "semi_detached",      labelKey: "opt_semi_detached",      score: 3 },
      { value: "ground_floor_apt",   labelKey: "opt_ground_floor_apt",   score: 8 },
      { value: "top_floor_apt",      labelKey: "opt_top_floor_apt",      score: 6 },
    ],
  },
  {
    id: "constructionYear",
    sectionKey: "building",
    labelKey: "q_constructionYear",
    options: [
      { value: "before_1960",  labelKey: "opt_before_1960",  score: 14 },
      { value: "1960_1980",    labelKey: "opt_1960_1980",    score: 12 },
      { value: "1980_2000",    labelKey: "opt_1980_2000",    score: 7 },
      { value: "2000_2015",    labelKey: "opt_2000_2015",    score: 3 },
      { value: "after_2015",   labelKey: "opt_after_2015",   score: -2 },
    ],
  },
  {
    id: "location",
    sectionKey: "building",
    labelKey: "q_location",
    options: [
      { value: "lisbon",    labelKey: "opt_lisbon",    score: 6 },
      { value: "porto",     labelKey: "opt_porto",     score: 8 },
      { value: "algarve",   labelKey: "opt_algarve",   score: 2 },
      { value: "interior",  labelKey: "opt_interior",  score: 3 },
      { value: "islands",   labelKey: "opt_islands",   score: 7 },
    ],
  },
  {
    id: "floorLevel",
    sectionKey: "building",
    labelKey: "q_floorLevel",
    options: [
      { value: "ground",      labelKey: "opt_ground",      score: 8 },
      { value: "first_third", labelKey: "opt_first_third", score: 3 },
      { value: "fourth_plus", labelKey: "opt_fourth_plus", score: 2 },
      { value: "top_floor",   labelKey: "opt_top_floor",   score: 5 },
      { value: "only_floor",  labelKey: "opt_only_floor",  score: 4 },
    ],
  },
  {
    id: "windowType",
    sectionKey: "building",
    labelKey: "q_windowType",
    options: [
      { value: "single_alu",         labelKey: "opt_single_alu",         score: 12 },
      { value: "double_no_break",    labelKey: "opt_double_no_break",    score: 7 },
      { value: "double_thermal",     labelKey: "opt_double_thermal",     score: -2 },
      { value: "triple",             labelKey: "opt_triple",             score: -4 },
    ],
  },

  // ── Section 2: Current Conditions ───────────────────────────────────────
  {
    id: "hygrometer",
    sectionKey: "conditions",
    labelKey: "q_hygrometer",
    options: [
      { value: "below_60",   labelKey: "opt_below_60",   score: 0 },
      { value: "60_70",      labelKey: "opt_60_70",      score: 8 },
      { value: "70_80",      labelKey: "opt_70_80",      score: 14 },
      { value: "above_80",   labelKey: "opt_above_80",   score: 18 },
      { value: "no_hygro",   labelKey: "opt_no_hygro",   score: 4 },
    ],
  },
  {
    id: "moldHistory",
    sectionKey: "conditions",
    labelKey: "q_moldHistory",
    options: [
      { value: "none",           labelKey: "opt_mold_none",           score: 0 },
      { value: "small_nonporous",labelKey: "opt_mold_small_nonporous",score: 5 },
      { value: "large_porous",   labelKey: "opt_mold_large_porous",   score: 12 },
      { value: "recurrent",      labelKey: "opt_mold_recurrent",      score: 18 },
    ],
  },
  {
    id: "odour",
    sectionKey: "conditions",
    labelKey: "q_odour",
    options: [
      { value: "none",       labelKey: "opt_odour_none",       score: 0 },
      { value: "occasional", labelKey: "opt_odour_occasional", score: 4 },
      { value: "regular",    labelKey: "opt_odour_regular",    score: 9 },
      { value: "strong",     labelKey: "opt_odour_strong",     score: 15 },
    ],
  },
  {
    id: "waterEvents",
    sectionKey: "conditions",
    labelKey: "q_waterEvents",
    options: [
      { value: "none",     labelKey: "opt_water_none",     score: 0 },
      { value: "minor",    labelKey: "opt_water_minor",    score: 5 },
      { value: "moderate", labelKey: "opt_water_moderate", score: 10 },
      { value: "major",    labelKey: "opt_water_major",    score: 16 },
    ],
  },

  // ── Section 3: Lifestyle ─────────────────────────────────────────────────
  {
    id: "bathroomVent",
    sectionKey: "lifestyle",
    labelKey: "q_bathroomVent",
    options: [
      { value: "window_only",    labelKey: "opt_bv_window",    score: 8 },
      { value: "extractor_out",  labelKey: "opt_bv_extractor", score: 0 },
      { value: "extractor_unk",  labelKey: "opt_bv_unknown",   score: 5 },
      { value: "no_vent",        labelKey: "opt_bv_none",      score: 14 },
    ],
  },
  {
    id: "kitchenVent",
    sectionKey: "lifestyle",
    labelKey: "q_kitchenVent",
    options: [
      { value: "window_only",   labelKey: "opt_kv_window",       score: 6 },
      { value: "recirculation", labelKey: "opt_kv_recirculation", score: 8 },
      { value: "extraction",    labelKey: "opt_kv_extraction",    score: 0 },
    ],
  },
  {
    id: "laundryDrying",
    sectionKey: "lifestyle",
    labelKey: "q_laundryDrying",
    options: [
      { value: "always_outside",  labelKey: "opt_ld_always_outside",  score: 0 },
      { value: "mostly_outside",  labelKey: "opt_ld_mostly_outside",  score: 2 },
      { value: "sometimes_in",    labelKey: "opt_ld_sometimes_in",    score: 5 },
      { value: "usually_in",      labelKey: "opt_ld_usually_in",      score: 9 },
    ],
  },
  {
    id: "heating",
    sectionKey: "lifestyle",
    labelKey: "q_heating",
    options: [
      { value: "always_18",   labelKey: "opt_heat_always",     score: 0 },
      { value: "most_days",   labelKey: "opt_heat_most",       score: 3 },
      { value: "occasional",  labelKey: "opt_heat_occasional", score: 7 },
      { value: "rarely",      labelKey: "opt_heat_rarely",     score: 10 },
    ],
  },
  {
    id: "occupants",
    sectionKey: "lifestyle",
    labelKey: "q_occupants",
    options: [
      { value: "one",      labelKey: "opt_occ_1",  score: 1 },
      { value: "two",      labelKey: "opt_occ_2",  score: 2 },
      { value: "three_four",labelKey: "opt_occ_34", score: 4 },
      { value: "five_plus", labelKey: "opt_occ_5p", score: 8 },
    ],
  },
];

export const SECTION_KEYS = ["building", "conditions", "lifestyle"] as const;

export const BAND_THRESHOLDS: { band: RiskBand; min: number }[] = [
  { band: "critical", min: 76 },
  { band: "high",     min: 51 },
  { band: "moderate", min: 26 },
  { band: "low",      min: 0 },
];

// Checklist item IDs (20 items)
export const CHECKLIST_IDS = [
  "cl_skirting",
  "cl_lower_walls",
  "cl_ceiling",
  "cl_behind_furniture",
  "cl_window_frames",
  "cl_bathroom_ceiling",
  "cl_grout",
  "cl_extractor",
  "cl_kitchen_ceiling",
  "cl_condensation_windows",
  "cl_hidden_water",
  "cl_porous_materials",
  "cl_moisture_meter",
  "cl_ventilation_check",
  "cl_thermal_bridge",
  "cl_roof_terrace",
  "cl_basement_floor",
  "cl_wardrobe_back",
  "cl_professional_assessment",
  "cl_monitoring",
] as const;

export type ChecklistId = (typeof CHECKLIST_IDS)[number];
