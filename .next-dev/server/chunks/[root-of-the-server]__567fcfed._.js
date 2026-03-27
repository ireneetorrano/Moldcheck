module.exports = [
"[project]/.next-internal/server/app/api/contact/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Backend/contact/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Contact form validation schema — used on both client and server */ __turbopack_context__.s([
    "hasErrors",
    ()=>hasErrors,
    "validateContactForm",
    ()=>validateContactForm
]);
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
function validateContactForm(data, msgs = DEFAULT_MESSAGES) {
    const errors = {};
    const fullName = data.fullName?.trim() ?? "";
    if (!fullName) errors.fullName = msgs.errFullNameRequired;
    else if (fullName.length > 50) errors.fullName = msgs.errFullNameMax;
    const email = data.email?.trim() ?? "";
    if (!email) errors.email = msgs.errEmailRequired;
    else if (!EMAIL_RE.test(email)) errors.email = msgs.errEmailInvalid;
    if (!data.countryPrefix?.trim()) errors.countryPrefix = msgs.errPrefixRequired;
    const phone = (data.phoneNumber ?? "").replace(/\s+/g, "");
    if (!phone) errors.phoneNumber = msgs.errPhoneRequired;
    else if (!DIGITS_RE.test(phone)) errors.phoneNumber = msgs.errPhoneDigits;
    else if (phone.length < 6 || phone.length > 15) errors.phoneNumber = msgs.errPhoneLength;
    const municipality = data.municipality?.trim() ?? "";
    if (!municipality) errors.municipality = msgs.errMunicipalityRequired;
    else if (municipality.length > 100) errors.municipality = msgs.errMunicipalityMax;
    const message = data.message?.trim() ?? "";
    if (!message) errors.message = msgs.errMessageRequired;
    else if (message.length > 500) errors.message = msgs.errMessageMax;
    if (!data.consentAccepted) errors.consentAccepted = msgs.errConsentRequired;
    return errors;
}
function hasErrors(errors) {
    return Object.keys(errors).length > 0;
}
}),
"[project]/Backend/shared/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Centralised env-var helpers for all backend modules */ __turbopack_context__.s([
    "checkEnvPresence",
    ()=>checkEnvPresence,
    "requireEnv",
    ()=>requireEnv
]);
function requireEnv(name) {
    const value = process.env[name];
    if (!value) throw new Error(`Missing required env var: ${name}`);
    return value;
}
function checkEnvPresence(keys) {
    const missing = keys.filter((k)=>!process.env[k]);
    return {
        ok: missing.length === 0,
        missing
    };
}
}),
"[project]/Backend/contact/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertContactSubmission",
    ()=>insertContactSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/shared/env.ts [app-route] (ecmascript)");
;
;
function getServiceClient() {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireEnv"])("NEXT_PUBLIC_SUPABASE_URL");
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireEnv"])("SUPABASE_SERVICE_ROLE_KEY");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key, {
        auth: {
            persistSession: false
        }
    });
}
async function insertContactSubmission(data) {
    const supabase = getServiceClient();
    const { error } = await supabase.from("contact_submissions").insert(data);
    if (error) throw new Error(`Supabase insert failed: ${error.message}`);
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Backend/shared/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Shared utility helpers */ /** HTML-escape a string for safe use in email templates */ __turbopack_context__.s([
    "esc",
    ()=>esc
]);
function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
}),
"[project]/Backend/contact/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/shared/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/shared/utils.ts [app-route] (ecmascript)");
;
;
;
function getResend() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireEnv"])("RESEND_API_KEY"));
}
async function sendContactEmail(data) {
    const resend = getResend();
    const to = process.env.CONTACT_TO_EMAIL ?? "info@moldcheck.pt";
    const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck Contact <no-reply@moldcheck.pt>";
    const html = `
    <h2>Nueva consulta de contacto — MoldCheck.pt</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="font-weight:600;padding-right:16px;">Nombre</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.full_name)}</td></tr>
      <tr><td style="font-weight:600;">Email</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.email)}</td></tr>
      <tr><td style="font-weight:600;">Teléfono</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.country_prefix)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.phone_number)}</td></tr>
      <tr><td style="font-weight:600;">Municipio</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.municipality)}</td></tr>
      <tr><td style="font-weight:600;">Página</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.source_page)}</td></tr>
      <tr><td style="font-weight:600;">Fecha</td><td>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.created_at)}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Mensaje</h3>
    <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$shared$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["esc"])(data.message)}</p>
  `;
    const { error } = await resend.emails.send({
        from,
        to,
        subject: `Nuevo contacto: ${data.full_name} — MoldCheck.pt`,
        html
    });
    if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}
}),
"[project]/Backend/contact/service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleContactSubmission",
    ()=>handleContactSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/contact/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/contact/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/contact/email.ts [app-route] (ecmascript)");
;
;
;
async function handleContactSubmission(raw) {
    // Honeypot — silent discard
    if (raw.honeypot) return {
        ok: true
    };
    const data = {
        fullName: String(raw.fullName ?? ""),
        email: String(raw.email ?? ""),
        countryPrefix: String(raw.countryPrefix ?? ""),
        phoneNumber: String(raw.phoneNumber ?? ""),
        municipality: String(raw.municipality ?? ""),
        message: String(raw.message ?? ""),
        consentAccepted: raw.consentAccepted === true
    };
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateContactForm"])(data);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasErrors"])(errors)) {
        return {
            ok: false,
            status: 422,
            error: "Validation failed",
            fields: errors
        };
    }
    const now = new Date().toISOString();
    const sourcePage = typeof raw.sourcePage === "string" ? raw.sourcePage : "/contact";
    const submission = {
        full_name: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        country_prefix: data.countryPrefix.trim(),
        phone_number: data.phoneNumber.replace(/\s+/g, ""),
        municipality: data.municipality.trim(),
        message: data.message.trim(),
        consent_accepted: true,
        source_page: sourcePage,
        created_at: now
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertContactSubmission"])(submission);
    } catch (err) {
        console.error("[contact] Supabase error:", err);
        return {
            ok: false,
            status: 500,
            error: "Database error"
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendContactEmail"])(submission);
    } catch (err) {
        // Email failure is non-fatal — submission is already stored
        console.error("[contact] Resend error:", err);
    }
    return {
        ok: true
    };
}
}),
"[project]/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Backend/contact/service.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    let body;
    try {
        body = await req.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid JSON"
        }, {
            status: 400
        });
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Backend$2f$contact$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleContactSubmission"])(body);
    if (!result.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: result.error,
            ...result.fields ? {
                fields: result.fields
            } : {}
        }, {
            status: result.status
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
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

//# sourceMappingURL=%5Broot-of-the-server%5D__567fcfed._.js.map