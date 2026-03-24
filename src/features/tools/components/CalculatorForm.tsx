"use client";

import { useState, useRef } from "react";
import type { Answers, CalcI18n } from "../types";
import { QUESTIONS } from "../lib/calculatorConfig";

interface CalculatorFormProps {
  i18n: CalcI18n;
  answers: Answers;
  onChange: (id: string, value: string) => void;
  onSubmit: () => void;
}

const SECTION_TITLES: Record<string, keyof Pick<CalcI18n, "section1Title" | "section2Title" | "section3Title">> = {
  building: "section1Title",
  conditions: "section2Title",
  lifestyle: "section3Title",
};

export function CalculatorForm({ i18n, answers, onChange, onSubmit }: CalculatorFormProps) {
  const [showValidation, setShowValidation] = useState(false);
  const firstMissingRef = useRef<HTMLFieldSetElement | null>(null);
  const sections = ["building", "conditions", "lifestyle"] as const;

  const missingIds = QUESTIONS.filter((q) => !answers[q.id]).map((q) => q.id);

  function handleSubmit() {
    if (missingIds.length > 0) {
      setShowValidation(true);
      // Scroll to first unanswered question
      setTimeout(() => {
        firstMissingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }
    onSubmit();
  }

  return (
    <div className="calc-form">
      {sections.map((sectionKey) => {
        const sectionQuestions = QUESTIONS.filter((q) => q.sectionKey === sectionKey);
        const titleKey = SECTION_TITLES[sectionKey];
        return (
          <section key={sectionKey} className="calc-section">
            <h2 className="calc-section__title">{i18n[titleKey]}</h2>
            <div className="calc-section__questions">
              {sectionQuestions.map((q, idx) => {
                const qStrings = i18n.questions[q.labelKey];
                if (!qStrings) return null;
                const isMissing = showValidation && missingIds.includes(q.id);
                const isFirstMissing = showValidation && missingIds[0] === q.id;
                return (
                  <fieldset
                    key={q.id}
                    className={`calc-question${isMissing ? " calc-question--error" : ""}`}
                    ref={isFirstMissing ? firstMissingRef : undefined}
                  >
                    <legend className="calc-question__label">
                      {qStrings.label}
                      {isMissing && (
                        <span className="calc-question__required-mark" aria-hidden="true"> *</span>
                      )}
                    </legend>
                    <div className="calc-question__options">
                      {q.options.map((opt) => {
                        const optLabel = qStrings.options[opt.value] ?? opt.value;
                        const isSelected = answers[q.id] === opt.value;
                        return (
                          <label
                            key={opt.value}
                            className={`calc-option${isSelected ? " calc-option--selected" : ""}`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt.value}
                              checked={isSelected}
                              onChange={() => {
                                onChange(q.id, opt.value);
                                setShowValidation(false);
                              }}
                              className="calc-option__radio"
                            />
                            <span className="calc-option__text">{optLabel}</span>
                          </label>
                        );
                      })}
                    </div>
                    {isMissing && (
                      <p className="calc-question__error-msg" role="alert">
                        {i18n.validationError}
                      </p>
                    )}
                  </fieldset>
                );
              })}
            </div>
          </section>
        );
      })}

      {showValidation && missingIds.length > 0 && (
        <div className="calc-validation-banner" role="alert">
          {i18n.validationError}
        </div>
      )}

      <div className="calc-form__submit">
        <button type="button" onClick={handleSubmit} className="calc-submit-btn">
          {i18n.calculateButton}
        </button>
      </div>
    </div>
  );
}
