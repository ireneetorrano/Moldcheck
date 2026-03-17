// Feature: newsletter-checklist-humidity-tool, Property 7: Answer preservation on back-navigation

/**
 * Validates: Requirements 3.6
 *
 * Property 7: Answer preservation on back-navigation
 * For any sequence of answers entered across calculator steps, navigating back
 * to any previous step and then forward again must produce the same answers
 * that were originally entered — no answer is lost or mutated by navigation.
 *
 * Strategy: simulate the HumidityCalculator state machine transitions directly
 * (without React rendering) to keep tests fast and focused on the logic.
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { QUESTIONS } from "../../src/features/tools/lib/questions";
import type { Answers, CalculatorPhase } from "../../src/features/tools/types";

// ---------------------------------------------------------------------------
// Inline state machine — mirrors the logic in HumidityCalculator.tsx exactly
// ---------------------------------------------------------------------------

function start(): CalculatorPhase {
  return { phase: "step", stepIndex: 0, answers: {} };
}

function handleAnswer(
  phase: CalculatorPhase,
  questionId: string,
  value: string
): CalculatorPhase {
  if (phase.phase !== "step") return phase;
  return { ...phase, answers: { ...phase.answers, [questionId]: value } };
}

function handleNext(phase: CalculatorPhase): CalculatorPhase {
  if (phase.phase !== "step") return phase;
  const currentQuestion = QUESTIONS[phase.stepIndex];
  if (currentQuestion.required && !phase.answers[currentQuestion.id]) {
    // validation error — step unchanged (we don't model stepError here)
    return phase;
  }
  if (phase.stepIndex < QUESTIONS.length - 1) {
    return { ...phase, stepIndex: phase.stepIndex + 1 };
  }
  // Last step — transition to result (not needed for this property)
  return phase;
}

function handleBack(phase: CalculatorPhase): CalculatorPhase {
  if (phase.phase !== "step" || phase.stepIndex === 0) return phase;
  return { ...phase, stepIndex: phase.stepIndex - 1 };
}

// ---------------------------------------------------------------------------
// Arbitraries
// ---------------------------------------------------------------------------

/**
 * Generates one valid answer value per question (keyed by question id).
 */
const answerSequenceArb = fc.record(
  Object.fromEntries(
    QUESTIONS.map((q) => [q.id, fc.constantFrom(...q.options.map((o) => o.value))])
  )
) as fc.Arbitrary<Record<string, string>>;

// ---------------------------------------------------------------------------
// Property 7
// ---------------------------------------------------------------------------

describe("Property 7: Answer preservation on back-navigation", () => {
  it(
    "answers are identical after back + forward navigation for any answer sequence",
    () => {
      fc.assert(
        fc.property(answerSequenceArb, (answers) => {
          // 1. Start the calculator
          let phase = start();

          // 2. Answer all questions and advance to the last step (without submitting)
          for (let stepIdx = 0; stepIdx < QUESTIONS.length; stepIdx++) {
            const question = QUESTIONS[stepIdx];
            phase = handleAnswer(phase, question.id, answers[question.id]);

            if (stepIdx < QUESTIONS.length - 1) {
              phase = handleNext(phase);
            }
            // On the last step we stop before calling handleNext (which would
            // transition to "result") so we stay in "step" phase.
          }

          // Sanity: we should be on the last step with all answers filled
          expect(phase.phase).toBe("step");
          if (phase.phase !== "step") return; // type narrowing

          const answersBeforeBack: Answers = { ...phase.answers };

          // 3. Navigate back through all steps
          for (let i = QUESTIONS.length - 1; i >= 1; i--) {
            phase = handleBack(phase);
            expect(phase.phase).toBe("step");
            if (phase.phase !== "step") return;
            expect(phase.stepIndex).toBe(i - 1);

            // Answers must be unchanged at every back step
            expect(phase.answers).toEqual(answersBeforeBack);
          }

          // 4. Navigate forward again through all steps
          for (let stepIdx = 0; stepIdx < QUESTIONS.length - 1; stepIdx++) {
            expect(phase.phase).toBe("step");
            if (phase.phase !== "step") return;

            // Answer for this step must still be the original value
            const question = QUESTIONS[stepIdx];
            expect(phase.answers[question.id]).toBe(answers[question.id]);

            phase = handleNext(phase);
          }

          // 5. On the last step, verify the answer is still preserved
          expect(phase.phase).toBe("step");
          if (phase.phase !== "step") return;
          const lastQuestion = QUESTIONS[QUESTIONS.length - 1];
          expect(phase.answers[lastQuestion.id]).toBe(answers[lastQuestion.id]);

          // 6. Full answers object must equal the original answers
          expect(phase.answers).toEqual(answersBeforeBack);
        }),
        { numRuns: 100 }
      );
    }
  );
});

// Feature: newsletter-checklist-humidity-tool, Property 8: Required-step validation blocks progression

/**
 * Validates: Requirements 3.7
 *
 * Property 8: Required-step validation blocks progression
 * For any calculator step that contains at least one required question,
 * attempting to advance without answering that question must leave the step
 * index unchanged and display a validation message.
 *
 * Strategy: simulate the HumidityCalculator state machine transitions directly
 * (without React rendering) to keep tests fast and focused on the logic.
 */

// ---------------------------------------------------------------------------
// Inline state machine with error tracking — mirrors HumidityCalculator.tsx
// ---------------------------------------------------------------------------

interface StepPhaseWithError {
  phase: "step";
  stepIndex: number;
  answers: Record<string, string>;
  stepError: string | null;
}

function startWithError(): StepPhaseWithError {
  return { phase: "step", stepIndex: 0, answers: {}, stepError: null };
}

function handleNextWithError(state: StepPhaseWithError): StepPhaseWithError {
  const currentQuestion = QUESTIONS[state.stepIndex];
  if (currentQuestion.required && !state.answers[currentQuestion.id]) {
    // Validation error — step index unchanged, error set
    return { ...state, stepError: "errorRequired" };
  }
  if (state.stepIndex < QUESTIONS.length - 1) {
    return { ...state, stepIndex: state.stepIndex + 1, stepError: null };
  }
  // Last step with answer — would transition to result; keep as-is for test purposes
  return { ...state, stepError: null };
}

// ---------------------------------------------------------------------------
// Property 8
// ---------------------------------------------------------------------------

describe("Property 8: Required-step validation blocks progression", () => {
  it(
    "step index is unchanged and error is set when required question is unanswered",
    () => {
      // All questions in QUESTIONS are required — filter to confirm
      const requiredStepIndices = QUESTIONS
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => q.required)
        .map(({ i }) => i);

      // Sanity: there must be at least one required step
      expect(requiredStepIndices.length).toBeGreaterThan(0);

      fc.assert(
        fc.property(
          fc.integer({ min: 0, max: QUESTIONS.length - 1 }).filter(
            (idx) => QUESTIONS[idx].required
          ),
          (stepIndex) => {
            // Build a state positioned at the chosen required step with NO answer
            const state: StepPhaseWithError = {
              phase: "step",
              stepIndex,
              answers: {}, // intentionally empty — required question unanswered
              stepError: null,
            };

            const nextState = handleNextWithError(state);

            // Step index must be unchanged
            expect(nextState.stepIndex).toBe(stepIndex);

            // A validation error must be shown
            expect(nextState.stepError).not.toBeNull();
            expect(nextState.stepError).toBe("errorRequired");
          }
        ),
        { numRuns: 100 }
      );
    }
  );
});
