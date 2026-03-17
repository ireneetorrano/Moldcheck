/**
 * Unit tests for EmailCaptureForm component
 * Validates: Requirements 4.8
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup, within } from "@testing-library/react";

// Mock next-intl — return the key as the translation value
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock useCalculatorSubmit hook
const mockSubmit = vi.fn();
const mockUseCalculatorSubmit = vi.fn(() => ({
  status: "idle" as const,
  error: null,
  submit: mockSubmit,
}));

vi.mock("../../src/features/tools/hooks/useCalculatorSubmit", () => ({
  useCalculatorSubmit: () => mockUseCalculatorSubmit(),
}));

import { EmailCaptureForm } from "../../src/features/tools/components/EmailCaptureForm";

const defaultProps = {
  locale: "en" as const,
  score: 55,
  band: "medium" as const,
  onSkip: vi.fn(),
  onSuccess: vi.fn(),
};

describe("EmailCaptureForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCalculatorSubmit.mockReturnValue({
      status: "idle" as const,
      error: null,
      submit: mockSubmit,
    });
  });

  afterEach(() => {
    cleanup();
  });

  describe("Req 4.8 — non-blocking error while keeping result visible", () => {
    it("shows a non-blocking error notice when the API returns an error", () => {
      mockUseCalculatorSubmit.mockReturnValue({
        status: "error" as const,
        error: "ESP error",
        submit: mockSubmit,
      });

      const { container } = render(<EmailCaptureForm {...defaultProps} />);

      // Error notice is shown
      const errorNotice = within(container).getByRole("alert");
      expect(errorNotice).toBeInTheDocument();
      expect(errorNotice).toHaveTextContent("emailCaptureError");
    });

    it("keeps the form visible (non-blocking) when an error occurs", () => {
      mockUseCalculatorSubmit.mockReturnValue({
        status: "error" as const,
        error: "Network error",
        submit: mockSubmit,
      });

      const { container } = render(<EmailCaptureForm {...defaultProps} />);

      // The form itself is still rendered — email input and submit button remain
      expect(within(container).getByRole("textbox")).toBeInTheDocument();
      expect(within(container).getByRole("button", { name: "emailCaptureSubmit" })).toBeInTheDocument();
    });

    it("does not replace the form with a full-page error (form container still present)", () => {
      mockUseCalculatorSubmit.mockReturnValue({
        status: "error" as const,
        error: "ESP error",
        submit: mockSubmit,
      });

      const { container } = render(<EmailCaptureForm {...defaultProps} />);

      // Title and body of the email capture section remain visible
      expect(within(container).getByText("emailCaptureTitle")).toBeInTheDocument();
      expect(within(container).getByText("emailCaptureBody")).toBeInTheDocument();
    });

    it("skip button remains available when an error occurs", () => {
      mockUseCalculatorSubmit.mockReturnValue({
        status: "error" as const,
        error: "ESP error",
        submit: mockSubmit,
      });

      const { container } = render(<EmailCaptureForm {...defaultProps} />);

      const skipButton = within(container).getByText("emailCaptureSkip");
      expect(skipButton).toBeInTheDocument();
    });

    it("does not show an error notice when status is idle", () => {
      const { container } = render(<EmailCaptureForm {...defaultProps} />);

      expect(within(container).queryByRole("alert")).not.toBeInTheDocument();
    });
  });
});
