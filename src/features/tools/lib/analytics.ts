import type { RiskBand } from "../types";

type PlausibleFn = (event: string, options?: { props?: Record<string, string> }) => void;

function plausible(): PlausibleFn | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).plausible ?? null;
}

function track(event: string, props?: Record<string, string>) {
  try {
    plausible()?.(event, props ? { props } : undefined);
  } catch {
    // fail silently — Plausible may not be loaded
  }
}

export const analytics = {
  calculatorStarted: () => track("calculator_started"),
  calculatorCompleted: (band: RiskBand) => {
    track("calculator_completed");
    const eventMap: Record<RiskBand, string> = {
      low: "score_low",
      moderate: "score_moderate",
      high: "score_high",
      critical: "score_critical",
    };
    track(eventMap[band]);
  },
  ctaChecklistClicked: () => track("cta_checklist_clicked"),
  ctaInspectionClicked: () => track("cta_inspection_clicked"),
};
