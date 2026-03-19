module.exports = [
"[project]/.next-internal/server/app/api/newsletter/subscribe/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/brevo/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrevoError",
    ()=>BrevoError
]);
class BrevoError extends Error {
    statusCode;
    body;
    constructor(message, statusCode, body){
        super(message), this.statusCode = statusCode, this.body = body;
        this.name = "BrevoError";
    }
}
}),
"[project]/src/lib/brevo/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTag",
    ()=>applyTag,
    "upsertContact",
    ()=>upsertContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brevo/types.ts [app-route] (ecmascript)");
;
const BREVO_API_BASE = "https://api.brevo.com/v3";
function getApiKey() {
    const key = process.env.BREVO_API_KEY;
    if (!key) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]("BREVO_API_KEY is not set", 500);
    return key;
}
async function brevoFetch(path, body) {
    const res = await fetch(`${BREVO_API_BASE}${path}`, {
        method: "POST",
        headers: {
            "api-key": getApiKey(),
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        let responseBody;
        try {
            responseBody = await res.json();
        } catch  {
            responseBody = null;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"](`Brevo API error: ${res.status}`, res.status, responseBody);
    }
}
async function upsertContact(contact) {
    const attributes = {
        LOCALE: contact.locale
    };
    if (contact.riskScore !== undefined) {
        attributes.RISK_SCORE = contact.riskScore;
    }
    try {
        await brevoFetch("/contacts", {
            email: contact.email,
            attributes,
            updateEnabled: true
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]) throw err;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]("Unexpected error calling Brevo upsertContact", 500, err);
    }
}
async function applyTag(email, tag) {
    const listIdEnvKey = `BREVO_LIST_ID_${tag.toUpperCase()}`;
    const listIdRaw = process.env[listIdEnvKey];
    // If no list ID configured, fall back to using contact attributes as tags
    if (!listIdRaw) {
        try {
            await brevoFetch("/contacts", {
                email,
                attributes: {
                    [tag.toUpperCase()]: true
                },
                updateEnabled: true
            });
        } catch (err) {
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]) throw err;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]("Unexpected error applying tag via attribute", 500, err);
        }
        return;
    }
    const listId = parseInt(listIdRaw, 10);
    try {
        await brevoFetch("/contacts/lists/addContactsToList", {
            emails: [
                email
            ],
            listId
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]) throw err;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"]("Unexpected error calling Brevo applyTag", 500, err);
    }
}
}),
"[project]/src/lib/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** RFC 5322-compliant email regex (simplified but robust for production use) */ __turbopack_context__.s([
    "isValidEmail",
    ()=>isValidEmail,
    "verifyHcaptcha",
    ()=>verifyHcaptcha
]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email) {
    return typeof email === "string" && EMAIL_REGEX.test(email.trim());
}
async function verifyHcaptcha(token) {
    const secret = process.env.HCAPTCHA_SECRET_KEY;
    if (!secret) return false;
    const res = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            secret,
            response: token
        })
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true;
}
}),
"[project]/src/config/locales.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeLocales",
    ()=>activeLocales,
    "cmsLocales",
    ()=>cmsLocales,
    "defaultLocale",
    ()=>defaultLocale,
    "isActiveLocale",
    ()=>isActiveLocale,
    "localeLabels",
    ()=>localeLabels,
    "localeMarkers",
    ()=>localeMarkers
]);
const activeLocales = [
    "pt",
    "en",
    "fr",
    "de",
    "nl",
    "it",
    "es"
];
const cmsLocales = [
    "pt",
    "en",
    "fr",
    "de",
    "nl",
    "it",
    "es"
];
const defaultLocale = "pt";
const localeLabels = {
    pt: "Portuguese",
    en: "English",
    fr: "Français",
    de: "Deutsch",
    nl: "Nederlands",
    it: "Italiano",
    es: "Español"
};
const localeMarkers = {
    pt: "PT",
    en: "EN",
    fr: "FR",
    de: "DE",
    nl: "NL",
    it: "IT",
    es: "ES"
};
function isActiveLocale(value) {
    return activeLocales.includes(value);
}
}),
"[project]/src/app/api/newsletter/subscribe/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brevo/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brevo/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validation.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(req) {
    let body;
    try {
        body = await req.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid JSON",
            code: "VALIDATION_ERROR"
        }, {
            status: 422
        });
    }
    const { email, locale, gdprConsent, hcaptchaToken } = body;
    // Validate email
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidEmail"])(email)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid email",
            code: "VALIDATION_ERROR"
        }, {
            status: 422
        });
    }
    // Validate GDPR consent
    if (gdprConsent !== true) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Consent required",
            code: "VALIDATION_ERROR"
        }, {
            status: 422
        });
    }
    // Validate locale
    const safeLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isActiveLocale"])(String(locale)) ? locale : "pt";
    // Verify hCaptcha if configured
    if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY) {
        if (!hcaptchaToken || typeof hcaptchaToken !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Captcha verification failed",
                code: "CAPTCHA_ERROR"
            }, {
                status: 422
            });
        }
        const valid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyHcaptcha"])(hcaptchaToken);
        if (!valid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Captcha verification failed",
                code: "CAPTCHA_ERROR"
            }, {
                status: 422
            });
        }
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertContact"])({
            email: email.trim(),
            locale: safeLocale
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyTag"])(email.trim(), "checklist_download");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrevoError"] && err.statusCode === 409) {
            // Duplicate contact — idempotent success
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                duplicate: true
            });
        }
        console.error("[subscribe] Brevo error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "ESP error",
            code: "ESP_ERROR"
        }, {
            status: 500
        });
    }
}
function GET() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 405,
        headers: {
            Allow: "POST"
        }
    });
}
function PUT() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 405,
        headers: {
            Allow: "POST"
        }
    });
}
function DELETE() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 405,
        headers: {
            Allow: "POST"
        }
    });
}
function PATCH() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 405,
        headers: {
            Allow: "POST"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cbad7a79._.js.map