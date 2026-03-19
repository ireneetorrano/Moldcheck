// @vitest-environment jsdom
/**
 * Unit tests for SubscriptionForm component
 * Validates: Requirements 1.4, 1.8, 1.9
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup, within } from "@testing-library/react";

// Mock next-intl — return the key as the translation value
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock useSubscribe hook
const mockSubmit = vi.fn();
const mockUseSubscribe = vi.fn(() => ({
  status: "idle" as const,
  error: null,
  submit: mockSubmit,
}));

vi.mock("../../src/features/newsletter/hooks/useSubscribe", () => ({
  useSubscribe: () => mockUseSubscribe(),
}));

import { SubscriptionForm } from "../../src/features/newsletter/components/SubscriptionForm";

describe("SubscriptionForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseSubscribe.mockReturnValue({
      status: "idle" as const,
      error: null,
      submit: mockSubmit,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("renders email input, consent checkbox, and submit button", () => {
    const { container } = render(<SubscriptionForm locale="en" />);

    expect(within(container).getByRole("textbox")).toBeInTheDocument();
    expect(within(container).getByRole("checkbox")).toBeInTheDocument();
    expect(within(container).getByRole("button")).toBeInTheDocument();
  });

  it("submit button is disabled while loading (Req 1.4 — disabled only during loading)", () => {
    mockUseSubscribe.mockReturnValue({
      status: "loading" as const,
      error: null,
      submit: mockSubmit,
    });

    const { container } = render(<SubscriptionForm locale="en" />);
    const button = within(container).getByRole("button");
    expect(button).toBeDisabled();
  });

  it("submit button is enabled when consent is unchecked (validation happens on submit)", () => {
    const { container } = render(<SubscriptionForm locale="en" />);
    const button = within(container).getByRole("button");
    expect(button).not.toBeDisabled();
  });

  it("shows consent validation error when submitting without consent (Req 1.4)", async () => {
    const { container } = render(<SubscriptionForm locale="en" />);

    const emailInput = within(container).getByRole("textbox");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const button = within(container).getByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(within(container).getByText("errorConsentRequired")).toBeInTheDocument();
    });

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("shows success state after successful API response (Req 1.8)", () => {
    mockUseSubscribe.mockReturnValue({
      status: "success" as const,
      error: null,
      submit: mockSubmit,
    });

    const { container } = render(<SubscriptionForm locale="en" />);

    // Form should be replaced by success component
    expect(within(container).queryByRole("textbox")).not.toBeInTheDocument();
    expect(within(container).queryByRole("checkbox")).not.toBeInTheDocument();
    // Success component renders successTitle and successBody keys
    expect(within(container).getByText("successTitle")).toBeInTheDocument();
    expect(within(container).getByText("successBody")).toBeInTheDocument();
  });

  it("shows error banner on HTTP 500 (Req 1.9)", () => {
    mockUseSubscribe.mockReturnValue({
      status: "error" as const,
      error: "ESP error",
      submit: mockSubmit,
    });

    const { container } = render(<SubscriptionForm locale="en" />);

    const errorBanner = within(container).getByRole("alert");
    expect(errorBanner).toBeInTheDocument();
    expect(errorBanner).toHaveTextContent("errorGeneric");
  });
});
