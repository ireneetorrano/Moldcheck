(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/contact/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Contact form validation schema — used on both client and server */ __turbopack_context__.s([
    "hasErrors",
    ()=>hasErrors,
    "validateContactForm",
    ()=>validateContactForm
]);
// Fallback English messages used server-side (API route)
const DEFAULT_MESSAGES = {
    errFullNameRequired: "Name is required.",
    errFullNameMax: "Maximum 50 characters.",
    errEmailRequired: "Email is required.",
    errEmailInvalid: "Please enter a valid email.",
    errPrefixRequired: "Please select a prefix.",
    errPhoneRequired: "Phone is required.",
    errPhoneDigits: "Only digits are allowed.",
    errPhoneLength: "Invalid phone length.",
    errMunicipalityRequired: "Municipality is required.",
    errMunicipalityMax: "Maximum 100 characters.",
    errMessageRequired: "Message is required.",
    errMessageMax: "Maximum 500 characters.",
    errConsentRequired: "You must accept the privacy policy."
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_RE = /^\d+$/;
function validateContactForm(data) {
    let msgs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MESSAGES;
    var _data_fullName, _data_email, _data_countryPrefix, _data_municipality, _data_message;
    const errors = {};
    var _data_fullName_trim;
    const fullName = (_data_fullName_trim = (_data_fullName = data.fullName) === null || _data_fullName === void 0 ? void 0 : _data_fullName.trim()) !== null && _data_fullName_trim !== void 0 ? _data_fullName_trim : "";
    if (!fullName) errors.fullName = msgs.errFullNameRequired;
    else if (fullName.length > 50) errors.fullName = msgs.errFullNameMax;
    var _data_email_trim;
    const email = (_data_email_trim = (_data_email = data.email) === null || _data_email === void 0 ? void 0 : _data_email.trim()) !== null && _data_email_trim !== void 0 ? _data_email_trim : "";
    if (!email) errors.email = msgs.errEmailRequired;
    else if (!EMAIL_RE.test(email)) errors.email = msgs.errEmailInvalid;
    if (!((_data_countryPrefix = data.countryPrefix) === null || _data_countryPrefix === void 0 ? void 0 : _data_countryPrefix.trim())) errors.countryPrefix = msgs.errPrefixRequired;
    var _data_phoneNumber;
    const phone = ((_data_phoneNumber = data.phoneNumber) !== null && _data_phoneNumber !== void 0 ? _data_phoneNumber : "").replace(/\s+/g, "");
    if (!phone) errors.phoneNumber = msgs.errPhoneRequired;
    else if (!DIGITS_RE.test(phone)) errors.phoneNumber = msgs.errPhoneDigits;
    else if (phone.length < 6 || phone.length > 15) errors.phoneNumber = msgs.errPhoneLength;
    var _data_municipality_trim;
    const municipality = (_data_municipality_trim = (_data_municipality = data.municipality) === null || _data_municipality === void 0 ? void 0 : _data_municipality.trim()) !== null && _data_municipality_trim !== void 0 ? _data_municipality_trim : "";
    if (!municipality) errors.municipality = msgs.errMunicipalityRequired;
    else if (municipality.length > 100) errors.municipality = msgs.errMunicipalityMax;
    var _data_message_trim;
    const message = (_data_message_trim = (_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.trim()) !== null && _data_message_trim !== void 0 ? _data_message_trim : "";
    if (!message) errors.message = msgs.errMessageRequired;
    else if (message.length > 500) errors.message = msgs.errMessageMax;
    if (!data.consentAccepted) errors.consentAccepted = msgs.errConsentRequired;
    return errors;
}
function hasErrors(errors) {
    return Object.keys(errors).length > 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/contact/countryPrefixes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countryPrefixes",
    ()=>countryPrefixes
]);
const countryPrefixes = [
    {
        code: "PT",
        label: "Portugal",
        prefix: "+351"
    },
    {
        code: "ES",
        label: "España",
        prefix: "+34"
    },
    {
        code: "FR",
        label: "France",
        prefix: "+33"
    },
    {
        code: "DE",
        label: "Deutschland",
        prefix: "+49"
    },
    {
        code: "NL",
        label: "Nederland",
        prefix: "+31"
    },
    {
        code: "IT",
        label: "Italia",
        prefix: "+39"
    },
    {
        code: "GB",
        label: "United Kingdom",
        prefix: "+44"
    },
    {
        code: "BE",
        label: "Belgique",
        prefix: "+32"
    },
    {
        code: "CH",
        label: "Schweiz",
        prefix: "+41"
    },
    {
        code: "AT",
        label: "Österreich",
        prefix: "+43"
    },
    {
        code: "BR",
        label: "Brasil",
        prefix: "+55"
    },
    {
        code: "US",
        label: "United States",
        prefix: "+1"
    },
    {
        code: "CA",
        label: "Canada",
        prefix: "+1"
    },
    {
        code: "MX",
        label: "México",
        prefix: "+52"
    },
    {
        code: "AR",
        label: "Argentina",
        prefix: "+54"
    },
    {
        code: "LU",
        label: "Luxembourg",
        prefix: "+352"
    },
    {
        code: "OTHER",
        label: "Otro",
        prefix: ""
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact/schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$countryPrefixes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/contact/countryPrefixes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EMPTY = {
    fullName: "",
    email: "",
    countryPrefix: "+351",
    phoneNumber: "",
    municipality: "",
    message: "",
    consentAccepted: false
};
function ContactForm(param) {
    let { sourcePage, content, privacyHref } = param;
    _s();
    const [fields, setFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [honeypot, setHoneypot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    function set(key, value) {
        setFields((prev)=>({
                ...prev,
                [key]: value
            }));
        if (errors[key]) {
            setErrors((prev)=>{
                const next = {
                    ...prev
                };
                delete next[key];
                return next;
            });
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const errs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateContactForm"])(fields, content);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasErrors"])(errs)) {
            setErrors(errs);
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...fields,
                    honeypot,
                    sourcePage
                })
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>({}));
                if (data.fields) setErrors(data.fields);
                setStatus("error");
                return;
            }
            setStatus("success");
            setFields(EMPTY);
            setErrors({});
        } catch (e) {
            setStatus("error");
        }
    }
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact-form__success",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-form__success-icon",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "20 6 9 17 4 12"
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/ContactForm.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/contact/ContactForm.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "contact-form__success-title",
                    children: content.successTitle
                }, void 0, false, {
                    fileName: "[project]/src/features/contact/ContactForm.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "contact-form__success-body",
                    children: content.successBody
                }, void 0, false, {
                    fileName: "[project]/src/features/contact/ContactForm.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/contact/ContactForm.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "contact-form",
        onSubmit: handleSubmit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "website",
                value: honeypot,
                onChange: (e)=>setHoneypot(e.target.value),
                tabIndex: -1,
                "aria-hidden": "true",
                autoComplete: "off",
                style: {
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-form__row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: content.labelFullName,
                        error: errors.fullName,
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "contact-form__input".concat(errors.fullName ? " is-error" : ""),
                            value: fields.fullName,
                            onChange: (e)=>set("fullName", e.target.value),
                            maxLength: 50,
                            autoComplete: "name",
                            placeholder: content.placeholderFullName
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/ContactForm.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: content.labelEmail,
                        error: errors.email,
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            className: "contact-form__input".concat(errors.email ? " is-error" : ""),
                            value: fields.email,
                            onChange: (e)=>set("email", e.target.value),
                            autoComplete: "email",
                            placeholder: content.placeholderEmail
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/ContactForm.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-form__row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: content.labelPrefix,
                        error: errors.countryPrefix,
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "contact-form__select".concat(errors.countryPrefix ? " is-error" : ""),
                            value: fields.countryPrefix,
                            onChange: (e)=>set("countryPrefix", e.target.value),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contact$2f$countryPrefixes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryPrefixes"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: c.prefix || c.code,
                                    children: c.prefix ? "".concat(c.prefix, " ").concat(c.label) : c.label
                                }, c.code, false, {
                                    fileName: "[project]/src/features/contact/ContactForm.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/ContactForm.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: content.labelPhone,
                        error: errors.phoneNumber,
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            className: "contact-form__input".concat(errors.phoneNumber ? " is-error" : ""),
                            value: fields.phoneNumber,
                            onChange: (e)=>set("phoneNumber", e.target.value),
                            autoComplete: "tel-national",
                            placeholder: content.placeholderPhone
                        }, void 0, false, {
                            fileName: "[project]/src/features/contact/ContactForm.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: content.labelMunicipality,
                error: errors.municipality,
                required: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "contact-form__input".concat(errors.municipality ? " is-error" : ""),
                    value: fields.municipality,
                    onChange: (e)=>set("municipality", e.target.value),
                    maxLength: 100,
                    placeholder: content.placeholderMunicipality
                }, void 0, false, {
                    fileName: "[project]/src/features/contact/ContactForm.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: content.labelMessage,
                error: errors.message,
                required: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "contact-form__textarea".concat(errors.message ? " is-error" : ""),
                        value: fields.message,
                        onChange: (e)=>set("message", e.target.value),
                        maxLength: 500,
                        rows: 5,
                        placeholder: content.placeholderMessage
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "contact-form__char-count",
                        children: [
                            fields.message.length,
                            "/500"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-form__consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "contact-form__consent-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "contact-form__checkbox",
                                checked: fields.consentAccepted,
                                onChange: (e)=>set("consentAccepted", e.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/src/features/contact/ContactForm.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    content.consentText,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: privacyHref,
                                        className: "contact-form__consent-link",
                                        children: content.consentLinkText
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/contact/ContactForm.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    errors.consentAccepted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "contact-form__error",
                        children: errors.consentAccepted
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 186,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "contact-form__submit-error",
                children: content.submitError
            }, void 0, false, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "contact-form__submit",
                disabled: status === "sending",
                children: status === "sending" ? content.sendingLabel : content.submitLabel
            }, void 0, false, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/contact/ContactForm.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "Ol/jlqc+0nVdlbO/+UxkeD4v0gA=");
_c = ContactForm;
function Field(param) {
    let { label, error, required, children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "contact-form__field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "contact-form__label",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "contact-form__required",
                        "aria-hidden": "true",
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/src/features/contact/ContactForm.tsx",
                        lineNumber: 219,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "contact-form__error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/features/contact/ContactForm.tsx",
                lineNumber: 222,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/contact/ContactForm.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContactForm");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7b78c235._.js.map