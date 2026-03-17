# Requirements Document

## Introduction

This feature adds two interconnected capabilities to MoldCheck.pt:

1. **Newsletter subscription with automated email delivery** — when a user subscribes, they immediately receive an email containing a PDF humidity/mold home assessment checklist and a link to the free Humidity Risk Calculator tool. The subscriber is tagged `checklist_download`.

2. **Humidity Risk Calculator** — a free, interactive, multilingual tool hosted at `/[locale]/tools/humidity-risk-calculator`. When a user completes the calculator, a second automated email sequence is triggered and the user is tagged `calculator_completed`.

Both flows are fully multilingual across the 7 supported locales (PT, EN, FR, DE, NL, IT, ES) and must comply with GDPR requirements applicable in Portugal.

---

## Glossary

- **Newsletter_Service**: The backend integration responsible for storing subscriber data and triggering email automations (e.g. Mailchimp, Brevo, or equivalent ESP).
- **Subscriber**: A user who has submitted a valid email address via the newsletter subscription form.
- **Calculator**: The Humidity Risk Calculator interactive tool rendered at `/[locale]/tools/humidity-risk-calculator`.
- **Checklist_PDF**: The 20-point room-by-room humidity/mold home assessment checklist delivered as a PDF attachment or hosted download link.
- **Email_Sequence**: An automated series of emails triggered by a specific user action or tag.
- **ESP**: Email Service Provider — the third-party platform used to send transactional and marketing emails.
- **Tag**: A label applied to a contact in the ESP to segment them and trigger automations (e.g. `checklist_download`, `calculator_completed`).
- **Risk_Score**: A numeric value (0–100) computed by the Calculator from user inputs representing humidity risk level.
- **Locale**: One of the 7 supported language/region codes: `pt`, `en`, `fr`, `de`, `nl`, `it`, `es`.
- **Subscription_Form**: The UI form component that collects a user's email address and preferred locale for newsletter signup.
- **Subscribe_API**: The Next.js API route (`/api/newsletter/subscribe`) that processes subscription form submissions.
- **Calculator_API**: The Next.js API route (`/api/newsletter/calculator-completed`) that processes calculator completion events.
- **GDPR_Consent**: Explicit, informed, freely given consent to receive marketing communications, as required by GDPR.

---

## Requirements

### Requirement 1: Newsletter Subscription Form

**User Story:** As a visitor to MoldCheck.pt, I want to subscribe to the newsletter, so that I can receive the free humidity checklist and stay informed about mold-related content.

#### Acceptance Criteria

1. THE Subscription_Form SHALL collect the user's email address and infer the preferred Locale from the active route parameter.
2. WHEN a user submits the Subscription_Form with a valid email address, THE Subscribe_API SHALL register the Subscriber with the Newsletter_Service.
3. WHEN a user submits the Subscription_Form with an invalid or malformed email address, THE Subscription_Form SHALL display a localised inline validation error without submitting to the Subscribe_API.
4. THE Subscription_Form SHALL include an explicit GDPR_Consent checkbox that the user must check before submission is enabled.
5. WHEN a user submits the Subscription_Form without checking the GDPR_Consent checkbox, THE Subscription_Form SHALL prevent form submission and display a localised consent-required message.
6. WHEN the Subscribe_API successfully registers a Subscriber, THE Subscribe_API SHALL apply the tag `checklist_download` to the contact in the Newsletter_Service.
7. WHEN the Subscribe_API successfully registers a Subscriber, THE Subscribe_API SHALL store the Subscriber's preferred Locale in the Newsletter_Service contact record.
8. WHEN the Subscribe_API successfully registers a Subscriber, THE Subscription_Form SHALL display a localised success confirmation message to the user.
9. IF the Subscribe_API receives a network or ESP error, THEN THE Subscribe_API SHALL return an HTTP 500 response with a structured error body, and THE Subscription_Form SHALL display a localised error message.
10. IF the Subscribe_API receives a duplicate email address, THEN THE Subscribe_API SHALL return an HTTP 200 response (idempotent) without re-triggering the email sequence.

### Requirement 2: Checklist Delivery Email (Email Sequence 1 — Immediate)

**User Story:** As a new subscriber, I want to immediately receive the PDF checklist by email, so that I can start assessing my home for humidity and mold risks right away.

#### Acceptance Criteria

1. WHEN the Newsletter_Service receives a new contact tagged `checklist_download`, THE Newsletter_Service SHALL send Email Sequence 1 (immediate) to the Subscriber within 5 minutes.
2. THE Email Sequence 1 SHALL include a download link or attachment for the Checklist_PDF.
3. THE Email Sequence 1 SHALL include a clearly labelled call-to-action button linking to the Calculator at `/[locale]/tools/humidity-risk-calculator`, using the Subscriber's stored Locale.
4. THE Email Sequence 1 SHALL be rendered in the Subscriber's preferred Locale.
5. WHERE the Subscriber's preferred Locale is not available in the ESP template, THE Newsletter_Service SHALL fall back to the `en` locale template.
6. THE Checklist_PDF SHALL be available as a static asset hosted at a stable public URL (e.g. `/pdf/checklist-[locale].pdf`) for each supported Locale.
7. IF the Checklist_PDF for a specific Locale does not exist, THEN THE Newsletter_Service SHALL serve the `pt` locale Checklist_PDF as fallback.

---

### Requirement 3: Humidity Risk Calculator Tool

**User Story:** As a homeowner or tenant, I want to use a free interactive tool to assess my humidity risk, so that I can understand whether my home has a mold problem and what to do about it.

#### Acceptance Criteria

1. THE Calculator SHALL be accessible at the route `/[locale]/tools/humidity-risk-calculator` for all supported Locales without authentication.
2. THE Calculator SHALL present a multi-step questionnaire collecting inputs relevant to humidity risk (e.g. room type, visible condensation, ventilation, water damage history, outdoor climate zone).
3. WHEN a user completes all required steps of the Calculator, THE Calculator SHALL compute a Risk_Score between 0 and 100 inclusive.
4. WHEN the Calculator computes a Risk_Score, THE Calculator SHALL display a localised result summary categorising the score into at least three risk bands: low (0–33), medium (34–66), high (67–100).
5. THE Calculator SHALL render all labels, questions, and result text in the active Locale.
6. WHEN a user navigates back to a previous step, THE Calculator SHALL preserve previously entered answers.
7. IF a user attempts to advance to the next step without completing a required input, THEN THE Calculator SHALL display a localised validation message and prevent progression.
8. THE Calculator SHALL be fully functional without requiring the user to provide an email address (anonymous use is permitted).

### Requirement 4: Calculator Completion Email Trigger (Email Sequence 2 — Immediate)

**User Story:** As a user who has completed the Humidity Risk Calculator, I want to receive a follow-up email with my results and next steps, so that I can take informed action about my home's humidity situation.

#### Acceptance Criteria

1. WHEN a user completes the Calculator and provides their email address via an optional post-result capture form, THE Calculator_API SHALL register or update the contact in the Newsletter_Service.
2. WHEN the Calculator_API registers a contact, THE Calculator_API SHALL apply the tag `calculator_completed` to the contact in the Newsletter_Service.
3. WHEN the Calculator_API registers a contact, THE Calculator_API SHALL store the computed Risk_Score and the active Locale in the Newsletter_Service contact record.
4. WHEN the Newsletter_Service receives a contact tagged `calculator_completed`, THE Newsletter_Service SHALL send Email Sequence 2 (immediate) to the contact within 5 minutes.
5. THE Email Sequence 2 SHALL include the user's Risk_Score and the corresponding risk band label in the Subscriber's preferred Locale.
6. THE Email Sequence 2 SHALL include localised next-step recommendations appropriate to the risk band.
7. THE Email Sequence 2 SHALL be rendered in the contact's stored Locale, with `en` as fallback.
8. IF the Calculator_API receives a network or ESP error, THEN THE Calculator_API SHALL return an HTTP 500 response with a structured error body, and THE Calculator SHALL display a localised non-blocking error notice (the result display SHALL still be shown).
9. IF the Calculator_API receives a duplicate email address already tagged `calculator_completed`, THEN THE Calculator_API SHALL return HTTP 200 without re-triggering Email Sequence 2.

---

### Requirement 5: API Security and Rate Limiting

**User Story:** As the site operator, I want the subscription and calculator APIs to be protected against abuse, so that the ESP account is not flooded with fake or bot-generated contacts.

#### Acceptance Criteria

1. THE Subscribe_API SHALL validate that the submitted email address conforms to RFC 5322 format before forwarding to the Newsletter_Service.
2. THE Calculator_API SHALL validate that the submitted email address conforms to RFC 5322 format before forwarding to the Newsletter_Service.
3. THE Subscribe_API SHALL reject requests that do not include a valid GDPR consent flag set to `true` with an HTTP 422 response.
4. THE Subscribe_API SHALL accept only `POST` requests; WHEN any other HTTP method is used, THE Subscribe_API SHALL return HTTP 405.
5. THE Calculator_API SHALL accept only `POST` requests; WHEN any other HTTP method is used, THE Calculator_API SHALL return HTTP 405.
6. WHERE a NEXT_PUBLIC_HCAPTCHA_SITE_KEY environment variable is configured, THE Subscription_Form SHALL render an hCaptcha widget and THE Subscribe_API SHALL verify the captcha token before processing the subscription.

---

### Requirement 6: Multilingual UI Strings

**User Story:** As a visitor in any of the 7 supported languages, I want all newsletter and calculator UI elements to appear in my language, so that the experience feels native and trustworthy.

#### Acceptance Criteria

1. THE Subscription_Form SHALL source all visible strings (labels, placeholders, error messages, success messages, consent text) from the next-intl message files for the active Locale.
2. THE Calculator SHALL source all visible strings (step labels, questions, answer options, result text, validation messages) from the next-intl message files for the active Locale.
3. THE System SHALL provide translated message keys for all 7 Locales: `pt`, `en`, `fr`, `de`, `nl`, `it`, `es`.
4. WHEN a message key is missing for a non-default Locale, THE System SHALL fall back to the `pt` locale string rather than rendering a raw key.
