// @vitest-environment jsdom
/**
 * Unit tests for HumidityCalculator component
 * Validates: Requirements 3.1, 3.8
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup, within } from "@testing-library/react";

// Mock next-intl — return the key as the translation value
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock useCalculatorSubmit hook used inside EmailCaptureForm
const mockSubmit = vi.fn();
vi.mock("../../src/features/tools/hooks/useCalculatorSubmit", () => ({
  useCalculatorSubmit: () => ({
    status: "idle" as const,
    error: null,
    submit: mockSubmit,
  }),
}));

import { HumidityCalculator } from "../../src/features/tools/components/HumidityCalculator";
import { QUESTIONS } from "../../src/features/tools/lib/questions";
import { activeLocales } from "../../src/config/locales";
import type { ActiveLocale } from "../../src/config/locales";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Renders the calculator, starts it, answers every question with the first
 * available option, and clicks Next/Submit until the result phase is reached.
 */
async function renderAndReachResult(locale: ActiveLocale = "en") {
  const { container } = render(<HumidityCalculator locale={locale} />);

  // Click "Start"
  const startButton = within(container).getByRole("button");
  fireEvent.click(startButton);

  // Answer each question and advance
  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    const firstOption = question.options[0];

    // Select the first radio option for this question
    const radio = within(container).getByDisplayValue(firstOption.value);
    fireEvent.click(radio);

    // Click Next (or Submit on the last step)
    const advanceButton = within(container).getAllByRole("button").find(
      (btn) => btn.textContent === "nextButton" || btn.textContent === "submitButton"
    );
    expect(advanceButton).toBeDefined();
    fireEvent.click(advanceButton!);
  }

  // Wait for result phase to appear
  await waitFor(() => {
    expect(within(container).getByText("resultTitle")).toBeInTheDocument();
  });

  return { container };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("HumidityCalculator", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  describe("Req 3.8 — renders without email input and reaches result state", () => {
    it("starts in idle state and shows start button", () => {
      const { container } = render(<HumidityCalculator locale="en" />);
      expect(within(container).getByText("title")).toBeInTheDocument();
      expect(within(container).getByRole("button")).toHaveTextContent("startButton");
    });

    it("transitions through all steps and reaches result state without requiring email", async () => {
      const { container } = await renderAndReachResult("en");

      // Result phase must be visible
      expect(within(container).getByText("resultTitle")).toBeInTheDocument();

      // Email capture form is present but optional — the result is already shown
      // The score display (x / 100) should be visible
      expect(within(container).getByText(/\/\s*100/)).toBeInTheDocument();
    });

    it("shows the email capture form as optional (skip button present)", async () => {
      const { container } = await renderAndReachResult("en");

      // The skip button lets users bypass email input
      const skipButton = within(container).getByText("emailCaptureSkip");
      expect(skipButton).toBeInTheDocument();
    });

    it("result remains visible after skipping email capture", async () => {
      const { container } = await renderAndReachResult("en");

      const skipButton = within(container).getByText("emailCaptureSkip");
      fireEvent.click(skipButton);

      await waitFor(() => {
        expect(within(container).getByText("emailCaptureSuccess")).toBeInTheDocument();
      });
    });
  });

  describe("Req 3.1 — renders for each of the 7 locales", () => {
    it.each(activeLocales as unknown as ActiveLocale[])(
      "renders without errors for locale: %s",
      (locale) => {
        expect(() => {
          const { container } = render(<HumidityCalculator locale={locale} />);
          // Should render the title and start button
          expect(within(container).getByText("title")).toBeInTheDocument();
          expect(within(container).getByRole("button")).toBeInTheDocument();
          cleanup();
        }).not.toThrow();
      }
    );

    it.each(activeLocales as unknown as ActiveLocale[])(
      "can reach result state for locale: %s",
      async (locale) => {
        const { container } = await renderAndReachResult(locale);
        expect(within(container).getByText("resultTitle")).toBeInTheDocument();
        cleanup();
      }
    );
  });
});
