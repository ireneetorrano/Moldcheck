module.exports = [
"[project]/src/features/tools/lib/questions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTIONS",
    ()=>QUESTIONS
]);
const QUESTIONS = [
    {
        id: "q_visible_mold",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_visible_mold_label",
        weight: 0.30,
        options: [
            {
                value: "none",
                labelKey: "Calculator.q_visible_mold_opt_none",
                scoreContribution: 0.0
            },
            {
                value: "small",
                labelKey: "Calculator.q_visible_mold_opt_small",
                scoreContribution: 0.5
            },
            {
                value: "large",
                labelKey: "Calculator.q_visible_mold_opt_large",
                scoreContribution: 1.0
            }
        ]
    },
    {
        id: "q_condensation",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_condensation_label",
        weight: 0.20,
        options: [
            {
                value: "never",
                labelKey: "Calculator.q_condensation_opt_never",
                scoreContribution: 0.0
            },
            {
                value: "sometimes",
                labelKey: "Calculator.q_condensation_opt_sometimes",
                scoreContribution: 0.33
            },
            {
                value: "often",
                labelKey: "Calculator.q_condensation_opt_often",
                scoreContribution: 0.67
            },
            {
                value: "always",
                labelKey: "Calculator.q_condensation_opt_always",
                scoreContribution: 1.0
            }
        ]
    },
    {
        id: "q_ventilation",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_ventilation_label",
        weight: 0.15,
        options: [
            {
                value: "good",
                labelKey: "Calculator.q_ventilation_opt_good",
                scoreContribution: 0.0
            },
            {
                value: "moderate",
                labelKey: "Calculator.q_ventilation_opt_moderate",
                scoreContribution: 0.5
            },
            {
                value: "poor",
                labelKey: "Calculator.q_ventilation_opt_poor",
                scoreContribution: 1.0
            }
        ]
    },
    {
        id: "q_water_damage",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_water_damage_label",
        weight: 0.20,
        options: [
            {
                value: "none",
                labelKey: "Calculator.q_water_damage_opt_none",
                scoreContribution: 0.0
            },
            {
                value: "past",
                labelKey: "Calculator.q_water_damage_opt_past",
                scoreContribution: 0.5
            },
            {
                value: "current",
                labelKey: "Calculator.q_water_damage_opt_current",
                scoreContribution: 1.0
            }
        ]
    },
    {
        id: "q_climate_zone",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_climate_zone_label",
        weight: 0.10,
        options: [
            {
                value: "dry",
                labelKey: "Calculator.q_climate_zone_opt_dry",
                scoreContribution: 0.0
            },
            {
                value: "temperate",
                labelKey: "Calculator.q_climate_zone_opt_temperate",
                scoreContribution: 0.5
            },
            {
                value: "humid",
                labelKey: "Calculator.q_climate_zone_opt_humid",
                scoreContribution: 1.0
            }
        ]
    },
    {
        id: "q_room_type",
        type: "single_choice",
        required: true,
        labelKey: "Calculator.q_room_type_label",
        weight: 0.05,
        options: [
            {
                value: "living",
                labelKey: "Calculator.q_room_type_opt_living",
                scoreContribution: 0.0
            },
            {
                value: "bedroom",
                labelKey: "Calculator.q_room_type_opt_bedroom",
                scoreContribution: 0.25
            },
            {
                value: "kitchen",
                labelKey: "Calculator.q_room_type_opt_kitchen",
                scoreContribution: 0.5
            },
            {
                value: "bathroom",
                labelKey: "Calculator.q_room_type_opt_bathroom",
                scoreContribution: 0.75
            },
            {
                value: "basement",
                labelKey: "Calculator.q_room_type_opt_basement",
                scoreContribution: 1.0
            }
        ]
    }
];
}),
"[project]/src/features/tools/lib/scoring.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeScore",
    ()=>computeScore,
    "getBand",
    ()=>getBand
]);
function computeScore(answers, questions) {
    let total = 0;
    for (const q of questions){
        const answerValue = answers[q.id];
        if (!answerValue) continue;
        const option = q.options.find((o)=>o.value === answerValue);
        if (!option) continue;
        total += q.weight * option.scoreContribution;
    }
    return Math.min(100, Math.max(0, Math.round(total * 100)));
}
function getBand(score) {
    if (score <= 33) return "low";
    if (score <= 66) return "medium";
    return "high";
}
}),
"[project]/src/features/tools/components/CalculatorStep.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorStep",
    ()=>CalculatorStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function CalculatorStep({ question, value, onChange, error }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "text-base font-semibold text-gray-900",
                children: t(question.labelKey)
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-400 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: question.id,
                                value: option.value,
                                checked: value === option.value,
                                onChange: ()=>onChange(option.value),
                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-700",
                                children: t(option.labelKey)
                            }, void 0, false, {
                                fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.value, true, {
                        fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/tools/components/CalculatorStep.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/tools/hooks/useCalculatorSubmit.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCalculatorSubmit",
    ()=>useCalculatorSubmit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useCalculatorSubmit() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function submit(payload) {
        setStatus("loading");
        setError(null);
        try {
            const res = await fetch("/api/newsletter/calculator-completed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                setStatus("success");
                return;
            }
            const data = await res.json();
            setError(data.error ?? "Unknown error");
            setStatus("error");
        } catch  {
            setError("Network error");
            setStatus("error");
        }
    }
    return {
        status,
        error,
        submit
    };
}
}),
"[project]/src/features/tools/components/EmailCaptureForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailCaptureForm",
    ()=>EmailCaptureForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$hooks$2f$useCalculatorSubmit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/hooks/useCalculatorSubmit.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function EmailCaptureForm({ locale, score, band, onSkip, onSuccess }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("Calculator");
    const { status, error, submit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$hooks$2f$useCalculatorSubmit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalculatorSubmit"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function handleSubmit(e) {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError(t("errorInvalidEmail"));
            return;
        }
        setEmailError(null);
        await submit({
            email,
            locale,
            riskScore: score
        });
        if (status !== "error") onSuccess();
    }
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-green-700",
            children: t("emailCaptureSuccess")
        }, void 0, false, {
            fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
            lineNumber: 35,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-gray-800",
                children: t("emailCaptureTitle")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-gray-500",
                children: t("emailCaptureBody")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            status === "error" && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-amber-700",
                role: "alert",
                children: t("emailCaptureError")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                noValidate: true,
                className: "mt-3 flex flex-col gap-2 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                autoComplete: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "email@example.com",
                                className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                                "aria-invalid": !!emailError
                            }, void 0, false, {
                                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-red-600",
                                role: "alert",
                                children: emailError
                            }, void 0, false, {
                                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "loading",
                        className: "rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50",
                        children: status === "loading" ? "…" : t("emailCaptureSubmit")
                    }, void 0, false, {
                        fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onSkip,
                className: "mt-3 text-xs text-gray-400 underline hover:text-gray-600",
                children: t("emailCaptureSkip")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/tools/components/EmailCaptureForm.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/tools/components/CalculatorResult.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorResult",
    ()=>CalculatorResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$EmailCaptureForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/components/EmailCaptureForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const BAND_COLORS = {
    low: "text-green-700 bg-green-50 border-green-200",
    medium: "text-amber-700 bg-amber-50 border-amber-200",
    high: "text-red-700 bg-red-50 border-red-200"
};
function CalculatorResult({ locale, score, band, onEmailCapture, onSkip, emailCaptured }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("Calculator");
    const bandLabelKey = `resultBand${band.charAt(0).toUpperCase()}${band.slice(1)}`;
    const bandDescKey = `resultBand${band.charAt(0).toUpperCase()}${band.slice(1)}Desc`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-gray-900",
                children: t("resultTitle")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-lg border p-5 ${BAND_COLORS[band]}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold",
                        children: [
                            score,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-normal",
                                children: "/ 100"
                            }, void 0, false, {
                                fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                                lineNumber: 49,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm font-semibold",
                        children: t(bandLabelKey)
                    }, void 0, false, {
                        fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm",
                        children: t(bandDescKey)
                    }, void 0, false, {
                        fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            !emailCaptured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$EmailCaptureForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailCaptureForm"], {
                locale: locale,
                score: score,
                band: band,
                onSuccess: onEmailCapture,
                onSkip: onSkip
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/tools/components/CalculatorResult.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/tools/components/HumidityCalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HumidityCalculator",
    ()=>HumidityCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/lib/questions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/lib/scoring.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$CalculatorStep$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/components/CalculatorStep.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$CalculatorResult$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/tools/components/CalculatorResult.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HumidityCalculator({ locale }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("Calculator");
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        phase: "idle"
    });
    const [stepError, setStepError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function start() {
        setPhase({
            phase: "step",
            stepIndex: 0,
            answers: {}
        });
        setStepError(null);
    }
    function handleAnswer(questionId, value) {
        if (phase.phase !== "step") return;
        setPhase({
            ...phase,
            answers: {
                ...phase.answers,
                [questionId]: value
            }
        });
        setStepError(null);
    }
    function handleNext() {
        if (phase.phase !== "step") return;
        const currentQuestion = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"][phase.stepIndex];
        if (currentQuestion.required && !phase.answers[currentQuestion.id]) {
            setStepError(t("errorRequired"));
            return;
        }
        setStepError(null);
        if (phase.stepIndex < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"].length - 1) {
            setPhase({
                ...phase,
                stepIndex: phase.stepIndex + 1
            });
        } else {
            const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeScore"])(phase.answers, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"]);
            const band = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBand"])(score);
            setPhase({
                phase: "result",
                answers: phase.answers,
                score,
                band
            });
        }
    }
    function handleBack() {
        if (phase.phase !== "step" || phase.stepIndex === 0) return;
        setStepError(null);
        setPhase({
            ...phase,
            stepIndex: phase.stepIndex - 1
        });
    }
    if (phase.phase === "idle") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl space-y-4 py-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-900",
                    children: t("title")
                }, void 0, false, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: start,
                    className: "rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700",
                    children: t("startButton")
                }, void 0, false, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    if (phase.phase === "step") {
        const question = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"][phase.stepIndex];
        const isLast = phase.stepIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"].length - 1;
        const progress = Math.round((phase.stepIndex + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"].length * 100);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl space-y-6 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full bg-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full bg-blue-500 transition-all",
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-400",
                    children: [
                        phase.stepIndex + 1,
                        " / ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTIONS"].length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$CalculatorStep$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalculatorStep"], {
                    question: question,
                    value: phase.answers[question.id],
                    onChange: (val)=>handleAnswer(question.id, val),
                    error: stepError
                }, void 0, false, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        phase.stepIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBack,
                            className: "rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                            children: t("backButton")
                        }, void 0, false, {
                            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "ml-auto rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700",
                            children: isLast ? t("submitButton") : t("nextButton")
                        }, void 0, false, {
                            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    if (phase.phase === "result") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$tools$2f$components$2f$CalculatorResult$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalculatorResult"], {
                locale: locale,
                score: phase.score,
                band: phase.band,
                emailCaptured: false,
                onEmailCapture: ()=>setPhase({
                        phase: "submitted"
                    }),
                onSkip: ()=>setPhase({
                        phase: "skipped"
                    })
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this);
    }
    if (phase.phase === "submitted" || phase.phase === "skipped") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-xl py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500",
                children: t("emailCaptureSuccess")
            }, void 0, false, {
                fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/tools/components/HumidityCalculator.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    return null;
}
}),
];

//# sourceMappingURL=src_features_tools_3fbf72cb._.js.map