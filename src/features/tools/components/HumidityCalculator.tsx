"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import type { Answers, CalculatorPhase } from "../types";
import { QUESTIONS } from "../lib/questions";
import { computeScore, getBand } from "../lib/scoring";
import { CalculatorStep } from "./CalculatorStep";
import { CalculatorResult } from "./CalculatorResult";

interface HumidityCalculatorProps {
  locale: ActiveLocale;
}

export function HumidityCalculator({ locale }: HumidityCalculatorProps) {
  const t = useTranslations("Calculator");
  const [phase, setPhase] = useState<CalculatorPhase>({ phase: "idle" });
  const [stepError, setStepError] = useState<string | null>(null);

  function start() {
    setPhase({ phase: "step", stepIndex: 0, answers: {} });
    setStepError(null);
  }

  function handleAnswer(questionId: string, value: string) {
    if (phase.phase !== "step") return;
    setPhase({
      ...phase,
      answers: { ...phase.answers, [questionId]: value },
    });
    setStepError(null);
  }

  function handleNext() {
    if (phase.phase !== "step") return;
    const currentQuestion = QUESTIONS[phase.stepIndex];
    if (currentQuestion.required && !phase.answers[currentQuestion.id]) {
      setStepError(t("errorRequired"));
      return;
    }
    setStepError(null);
    if (phase.stepIndex < QUESTIONS.length - 1) {
      setPhase({ ...phase, stepIndex: phase.stepIndex + 1 });
    } else {
      const score = computeScore(phase.answers, QUESTIONS);
      const band = getBand(score);
      setPhase({ phase: "result", answers: phase.answers, score, band });
    }
  }

  function handleBack() {
    if (phase.phase !== "step" || phase.stepIndex === 0) return;
    setStepError(null);
    setPhase({ ...phase, stepIndex: phase.stepIndex - 1 });
  }

  if (phase.phase === "idle") {
    return (
      <div className="mx-auto max-w-xl space-y-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">{t("title")}</h1>
        <button
          onClick={start}
          className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {t("startButton")}
        </button>
      </div>
    );
  }

  if (phase.phase === "step") {
    const question = QUESTIONS[phase.stepIndex];
    const isLast = phase.stepIndex === QUESTIONS.length - 1;
    const progress = Math.round(((phase.stepIndex + 1) / QUESTIONS.length) * 100);

    return (
      <div className="mx-auto max-w-xl space-y-6 py-8">
        <div className="h-1.5 w-full rounded-full bg-gray-200">
          <div
            className="h-1.5 rounded-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400">
          {phase.stepIndex + 1} / {QUESTIONS.length}
        </p>

        <CalculatorStep
          question={question}
          value={phase.answers[question.id]}
          onChange={(val) => handleAnswer(question.id, val)}
          error={stepError}
        />

        <div className="flex gap-3">
          {phase.stepIndex > 0 && (
            <button
              onClick={handleBack}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {t("backButton")}
            </button>
          )}
          <button
            onClick={handleNext}
            className="ml-auto rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {isLast ? t("submitButton") : t("nextButton")}
          </button>
        </div>
      </div>
    );
  }

  if (phase.phase === "result") {
    return (
      <div className="mx-auto max-w-xl py-8">
        <CalculatorResult
          locale={locale}
          score={phase.score}
          band={phase.band}
          emailCaptured={false}
          onEmailCapture={() => setPhase({ phase: "submitted" })}
          onSkip={() => setPhase({ phase: "skipped" })}
        />
      </div>
    );
  }

  if (phase.phase === "submitted" || phase.phase === "skipped") {
    return (
      <div className="mx-auto max-w-xl py-8">
        <p className="text-sm text-gray-500">{t("emailCaptureSuccess")}</p>
      </div>
    );
  }

  return null;
}
