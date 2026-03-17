# Design Document — Newsletter Checklist & Humidity Tool

## Overview

This feature adds two interconnected capabilities to MoldCheck.pt:

1. **Newsletter subscription with checklist delivery** — a form collects an email address and GDPR consent, calls `/api/newsletter/subscribe`, which upserts the contact in Brevo and applies the tag `checklist_download`. A Brevo automation then sends Email Sequence 1 (immediate) containing the PDF checklist and a CTA to the calculator.

2. **Humidity Risk Calculator** — a multi-step, client-side questionnaire at `/[locale]/tools/humidity-risk-calculator` that computes a 0–100 Risk Score. After seeing results, the user may optionally provide their email; this calls `/api/newsletter/calculator-completed`, which upserts the contact in Brevo with the tag `calculator_completed` and stores the score and locale. A Brevo automation then sends Email Sequence 2.

Both flows are fully multilingual (7 locales), GDPR-compliant, and require no authentication.

---

## Architecture

```mermaid
graph TD
  subgraph Browser
    A[SubscriptionForm] -->|POST /api/newsletter/subscribe| B
    C[HumidityCalculator] -->|POST /api/newsletter/calculator-completed| D
  end

  subgraph Next.js API Routes
    B[/api/newsletter/subscribe]
    D[/api/newsletter/calculator-completed]
  end

  subgraph lib/brevo
    E[brevo.ts — upsertContact / applyTag]
  end

  B --> E
  D --> E

  subgraph Brevo ESP
    F[Contact DB]
    G[Automation: checklist_download tag → Email Seq 1]
    H[Automation: calculator_completed tag → Email Seq 2]
  end

  E --> F
  F --> G
  F --> H

  subgraph Static Assets
    I[public/pdf/moldcheck-checklist-*.pdf]
  end

  G -->|download link| I
```

Key design decisions:

- **Tag-based automation**: Email sending is entirely delegated to Brevo automations triggered by tags. The Next.js app never calls a transactional send endpoint — it only upserts contacts and applies tags. This keeps the app stateless with respect to email delivery.
- **Idempotent upsert**: Both API routes use Brevo's `createOrUpdateContact` endpoint (PUT `/contacts`), which is idempotent by email. Duplicate submissions return HTTP 200 without re-triggering automations (Brevo does not re-fire an automation for a tag already present on a contact).
- **Client-side calculator state**: The multi-step questionnaire runs entirely in the browser as a React state machine. No server round-trips occur until the optional email capture at the end.
- **hCaptcha opt-in**: Captcha verification is gated behind `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`. When the env var is absent the widget is not rendered and the API skips token verification.

---

## Components and Interfaces

### Feature directory: `src/features/newsletter/`

```
src/features/newsletter/
  components/
    SubscriptionForm.tsx          # Email + GDPR consent form
    SubscriptionFormSuccess.tsx   # Post-submit success state
  hooks/
    useSubscribe.ts               # Calls /api/newsletter/subscribe
  types.ts                        # SubscribePayload, SubscribeResponse

src/features/tools/
  components/
    HumidityCalculator.tsx        # Orchestrator — renders steps + result
    CalculatorStep.tsx            # Single question step
    CalculatorResult.tsx          # Score display + optional email capture
    EmailCaptureForm.tsx          # Post-result optional email form
  hooks/
    useCalculatorSubmit.ts        # Calls /api/newsletter/calculator-completed
  lib/
    scoring.ts                    # Pure scoring algorithm
    questions.ts                  # Question definitions (locale-key based)
  types.ts                        # CalculatorState, Question, Answer, RiskBand
```

### API Routes

```
src/app/api/newsletter/
  subscribe/route.ts              # POST only
  calculator-completed/route.ts   # POST only
```

### Brevo client

```
src/lib/brevo/
  client.ts                       # upsertContact(), applyTag()
  types.ts                        # BrevoContact, BrevoTag
```

### Page integration

The tool page at `src/app/(site)/[locale]/tools/[slug]/page.tsx` will detect `slug === "humidity-risk-calculator"` and render `<HumidityCalculator />`. The subscription form will be embedded as a section on the tools index page and/or as a standalone section component reusable across pages.

### Component interfaces

```typescript
// SubscriptionForm props
interface SubscriptionFormProps {
  locale: ActiveLocale;
}

// HumidityCalculator props
interface HumidityCalculatorProps {
  locale: ActiveLocale;
}

// POST /api/newsletter/subscribe — request body
interface SubscribePayload {
  email: string;
  locale: ActiveLocale;
  gdprConsent: true;
  hcaptchaToken?: string;
}

// POST /api/newsletter/calculator-completed — request body
interface CalculatorCompletedPayload {
  email: string;
  locale: ActiveLocale;
  riskScore: number;          // 0–100
  hcaptchaToken?: string;
}

// Shared API error response
interface ApiErrorResponse {
  error: string;
  code: "VALIDATION_ERROR" | "ESP_ERROR" | "CAPTCHA_ERROR";
}
```

---

## Data Models

### Calculator State Machine

The calculator is modelled as a finite state machine with the following states:

```
idle → step(n) → ... → step(N) → result → [email_capture] → submitted
                                                           ↘ skipped
```

```typescript
type CalculatorPhase =
  | { phase: "idle" }
  | { phase: "step"; stepIndex: number; answers: Answers }
  | { phase: "result"; answers: Answers; score: number; band: RiskBand }
  | { phase: "email_capture"; score: number; band: RiskBand }
  | { phase: "submitted" }
  | { phase: "skipped" };

type RiskBand = "low" | "medium" | "high";

interface Answers {
  [questionId: string]: string | number;
}
```

### Question Model

Questions are defined as static data (not fetched from CMS). Labels and answer option text are i18n keys resolved at render time.

```typescript
interface Question {
  id: string;
  type: "single_choice" | "scale";
  required: boolean;
  labelKey: string;           // next-intl key, e.g. "Calculator.q_room_type"
  options?: AnswerOption[];   // for single_choice
  min?: number;               // for scale
  max?: number;
  weight: number;             // contribution to Risk_Score (0–1, sum = 1)
}

interface AnswerOption {
  value: string;
  labelKey: string;
  scoreContribution: number;  // 0–1 within this question's weight
}
```

### Scoring Algorithm

The Risk Score is a weighted sum across all questions, normalised to 0–100:

```
Risk_Score = round( Σ (question.weight × answer.scoreContribution) × 100 )
```

Where:
- `question.weight` values sum to 1.0 across all questions
- `answer.scoreContribution` is 0.0 (no risk) to 1.0 (maximum risk) per option
- Scale questions map their numeric value linearly to a 0–1 contribution

Risk bands:
- **Low**: 0–33
- **Medium**: 34–66
- **High**: 67–100

### Brevo Contact Model

Brevo contacts are upserted using the following attribute mapping:

| Brevo attribute | Source |
|---|---|
| `email` | form input |
| `LOCALE` | active locale param |
| `RISK_SCORE` | calculator output (calculator flow only) |
| Tags | `checklist_download` or `calculator_completed` |

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `BREVO_API_KEY` | Yes | Brevo REST API key (server-side only) |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | No | hCaptcha site key; omit to disable captcha |
| `HCAPTCHA_SECRET_KEY` | No (required if site key set) | hCaptcha secret for server-side verification |

### i18n Message Structure

New keys added to each locale file under two top-level namespaces:

```json
{
  "Newsletter": {
    "emailLabel": "...",
    "emailPlaceholder": "...",
    "consentLabel": "...",
    "submitButton": "...",
    "successTitle": "...",
    "successBody": "...",
    "errorGeneric": "...",
    "errorInvalidEmail": "...",
    "errorConsentRequired": "..."
  },
  "Calculator": {
    "title": "...",
    "startButton": "...",
    "nextButton": "...",
    "backButton": "...",
    "submitButton": "...",
    "resultTitle": "...",
    "resultBandLow": "...",
    "resultBandMedium": "...",
    "resultBandHigh": "...",
    "resultScoreLabel": "...",
    "emailCaptureTitle": "...",
    "emailCaptureSkip": "...",
    "errorRequired": "...",
    "errorInvalidEmail": "...",
    "q_room_type_label": "...",
    "q_room_type_opt_bedroom": "...",
    "q_room_type_opt_bathroom": "...",
    "q_room_type_opt_kitchen": "...",
    "q_room_type_opt_living": "...",
    "q_room_type_opt_basement": "...",
    "q_condensation_label": "...",
    "q_condensation_opt_never": "...",
    "q_condensation_opt_sometimes": "...",
    "q_condensation_opt_often": "...",
    "q_condensation_opt_always": "...",
    "q_ventilation_label": "...",
    "q_ventilation_opt_good": "...",
    "q_ventilation_opt_moderate": "...",
    "q_ventilation_opt_poor": "...",
    "q_water_damage_label": "...",
    "q_water_damage_opt_none": "...",
    "q_water_damage_opt_past": "...",
    "q_water_damage_opt_current": "...",
    "q_climate_zone_label": "...",
    "q_climate_zone_opt_dry": "...",
    "q_climate_zone_opt_temperate": "...",
    "q_climate_zone_opt_humid": "...",
    "q_visible_mold_label": "...",
    "q_visible_mold_opt_none": "...",
    "q_visible_mold_opt_small": "...",
    "q_visible_mold_opt_large": "..."
  }
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Subscribe API correctness

*For any* valid subscribe payload (valid RFC 5322 email, supported locale, `gdprConsent: true`), calling the Subscribe API must result in the contact being upserted in Brevo with the `checklist_download` tag applied and the locale stored in the contact attributes.

**Validates: Requirements 1.2, 1.6, 1.7**

---

### Property 2: Invalid email rejection

*For any* string that does not conform to RFC 5322 email format, both the Subscribe API and the Calculator API must reject the request without forwarding to Brevo, returning an HTTP 422 response.

**Validates: Requirements 5.1, 5.2**

---

### Property 3: GDPR consent enforcement

*For any* subscribe request payload where `gdprConsent` is absent, `false`, or any non-`true` value, the Subscribe API must return HTTP 422 and must not call the Brevo client.

**Validates: Requirements 5.3**

---

### Property 4: HTTP method restriction

*For any* HTTP method other than POST sent to either `/api/newsletter/subscribe` or `/api/newsletter/calculator-completed`, the API must return HTTP 405.

**Validates: Requirements 5.4, 5.5**

---

### Property 5: Risk Score bounds invariant

*For any* complete set of answers to the calculator questionnaire (all required questions answered), the computed Risk Score must be an integer in the closed interval [0, 100].

**Validates: Requirements 3.3**

---

### Property 6: Risk band assignment exhaustiveness

*For any* integer score in [0, 100], the band assignment function must return exactly one of `"low"` (0–33), `"medium"` (34–66), or `"high"` (67–100), with no gaps or overlaps.

**Validates: Requirements 3.4**

---

### Property 7: Answer preservation on back-navigation

*For any* sequence of answers entered across calculator steps, navigating back to any previous step and then forward again must produce the same answers that were originally entered — no answer is lost or mutated by navigation.

**Validates: Requirements 3.6**

---

### Property 8: Required-step validation blocks progression

*For any* calculator step that contains at least one required question, attempting to advance without answering that question must leave the step index unchanged and display a validation message.

**Validates: Requirements 3.7**

---

### Property 9: Calculator API correctness

*For any* valid calculator-completed payload (valid email, supported locale, score in [0, 100]), calling the Calculator API must result in the contact being upserted in Brevo with the `calculator_completed` tag applied and both the score and locale stored in the contact attributes.

**Validates: Requirements 4.1, 4.2, 4.3**

---

### Property 10: i18n key completeness

*For any* required message key defined in the `Newsletter` or `Calculator` namespace, that key must be present in all 7 locale message files (`pt`, `en`, `fr`, `de`, `nl`, `it`, `es`).

**Validates: Requirements 6.3**

---

## Error Handling

### API layer

| Condition | HTTP status | Response body |
|---|---|---|
| Invalid email format | 422 | `{ error: "Invalid email", code: "VALIDATION_ERROR" }` |
| Missing or false GDPR consent | 422 | `{ error: "Consent required", code: "VALIDATION_ERROR" }` |
| Invalid captcha token (when enabled) | 422 | `{ error: "Captcha verification failed", code: "CAPTCHA_ERROR" }` |
| Brevo API error / network failure | 500 | `{ error: "ESP error", code: "ESP_ERROR" }` |
| Duplicate contact (already tagged) | 200 | `{ ok: true, duplicate: true }` |
| Wrong HTTP method | 405 | (empty body, `Allow: POST` header) |

### Client layer

- **SubscriptionForm**: On 422, display the specific validation message inline. On 500, display a generic localised error banner. On success, replace the form with `SubscriptionFormSuccess`.
- **EmailCaptureForm** (post-calculator): On any API error, display a non-blocking localised notice. The result display (`CalculatorResult`) remains visible regardless of API outcome — the email capture is a secondary action.

### Brevo client (`src/lib/brevo/client.ts`)

- Wraps all Brevo REST calls in try/catch and re-throws a typed `BrevoError` with the original status code and message.
- The API routes catch `BrevoError` and map it to HTTP 500.
- No retry logic at the application layer — Brevo's API is idempotent so callers can retry at the form level.

---

## Testing Strategy

### Dual approach

Both unit tests and property-based tests are required. They are complementary:

- **Unit tests** cover specific examples, integration points, and error conditions.
- **Property tests** verify universal invariants across randomised inputs.

### Property-based testing library

Use **[fast-check](https://github.com/dubzzz/fast-check)** (TypeScript-native, no additional runtime dependencies).

Each property test must run a minimum of **100 iterations** (fast-check default is 100; set explicitly via `{ numRuns: 100 }`).

Each property test must include a comment tag in the format:
`// Feature: newsletter-checklist-humidity-tool, Property N: <property_text>`

### Property tests (one test per property)

| Property | Test file | fast-check arbitraries |
|---|---|---|
| P1: Subscribe API correctness | `__tests__/api/subscribe.property.test.ts` | `fc.emailAddress()`, `fc.constantFrom(...activeLocales)` |
| P2: Invalid email rejection | `__tests__/api/email-validation.property.test.ts` | `fc.string()` filtered to non-RFC5322 |
| P3: GDPR consent enforcement | `__tests__/api/subscribe.property.test.ts` | `fc.anything()` for consent field |
| P4: HTTP method restriction | `__tests__/api/methods.property.test.ts` | `fc.constantFrom("GET","PUT","DELETE","PATCH","HEAD")` |
| P5: Risk Score bounds | `__tests__/lib/scoring.property.test.ts` | `fc.record(...)` over all question answer options |
| P6: Risk band exhaustiveness | `__tests__/lib/scoring.property.test.ts` | `fc.integer({ min: 0, max: 100 })` |
| P7: Answer preservation | `__tests__/features/calculator.property.test.ts` | `fc.array(fc.record(...))` of answer sequences |
| P8: Required-step validation | `__tests__/features/calculator.property.test.ts` | `fc.integer({ min: 0, max: stepCount - 1 })` |
| P9: Calculator API correctness | `__tests__/api/calculator-completed.property.test.ts` | `fc.emailAddress()`, `fc.integer({ min: 0, max: 100 })`, `fc.constantFrom(...activeLocales)` |
| P10: i18n key completeness | `__tests__/messages/i18n-completeness.property.test.ts` | Iterate over all locale files |

### Unit tests

- `SubscriptionForm` renders email input, consent checkbox, and submit button
- `SubscriptionForm` submit button is disabled when consent is unchecked (Req 1.4)
- `SubscriptionForm` shows success state after successful API response (Req 1.8)
- `SubscriptionForm` shows error banner on HTTP 500 (Req 1.9)
- Subscribe API returns 200 with `duplicate: true` for already-tagged contact (Req 1.10)
- Calculator renders without email input and reaches result state (Req 3.8)
- Calculator page renders for each of the 7 locales (Req 3.1)
- `EmailCaptureForm` shows non-blocking error while keeping result visible (Req 4.8)
- Calculator API returns 200 for duplicate `calculator_completed` contact (Req 4.9)
- hCaptcha widget renders when `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is set (Req 5.6)
- Subscribe API rejects request without captcha token when captcha is enabled (Req 5.6)
- next-intl fallback config is set to `pt` locale (Req 6.4)
