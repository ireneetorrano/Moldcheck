"use client";

import { useTranslations } from "next-intl";
import type { QuestionDef } from "../types";

interface CalculatorStepProps {
  question: QuestionDef;
  value: string | undefined;
  onChange: (value: string) => void;
  error: string | null;
}

export function CalculatorStep({ question, value, onChange, error }: CalculatorStepProps) {
  const t = useTranslations();

  return (
    <fieldset className="space-y-3">
      <legend className="text-base font-semibold text-gray-900">{t(question.labelKey as never)}</legend>
      <div className="space-y-2">
        {question.options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-400 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{t(option.labelKey as never)}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
