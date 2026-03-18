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
"[project]/src/lib/contact/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Contact form validation schema — used on both client and server */ __turbopack_context__.s([
    "hasErrors",
    ()=>hasErrors,
    "validateContactForm",
    ()=>validateContactForm
]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_RE = /^\d+$/;
function validateContactForm(data) {
    const errors = {};
    const fullName = data.fullName?.trim() ?? "";
    if (!fullName) errors.fullName = "El nombre es obligatorio.";
    else if (fullName.length > 50) errors.fullName = "Máximo 50 caracteres.";
    const email = data.email?.trim() ?? "";
    if (!email) errors.email = "El email es obligatorio.";
    else if (!EMAIL_RE.test(email)) errors.email = "Introduce un email válido.";
    if (!data.countryPrefix?.trim()) errors.countryPrefix = "Selecciona un prefijo.";
    const phone = (data.phoneNumber ?? "").replace(/\s+/g, "");
    if (!phone) errors.phoneNumber = "El teléfono es obligatorio.";
    else if (!DIGITS_RE.test(phone)) errors.phoneNumber = "Solo se permiten dígitos.";
    else if (phone.length < 6 || phone.length > 15) errors.phoneNumber = "Longitud de teléfono no válida.";
    const municipality = data.municipality?.trim() ?? "";
    if (!municipality) errors.municipality = "El municipio es obligatorio.";
    else if (municipality.length > 100) errors.municipality = "Máximo 100 caracteres.";
    const message = data.message?.trim() ?? "";
    if (!message) errors.message = "El mensaje es obligatorio.";
    else if (message.length > 500) errors.message = "Máximo 500 caracteres.";
    if (!data.consentAccepted) errors.consentAccepted = "Debes aceptar la política de privacidad.";
    return errors;
}
function hasErrors(errors) {
    return Object.keys(errors).length > 0;
}
}),
"[project]/src/lib/contact/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertContactSubmission",
    ()=>insertContactSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
function getServiceClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICES_ROLE_KEY;
    if (!url || !key) throw new Error("Supabase env vars not configured");
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
"[project]/src/lib/contact/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
function getResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY not configured");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](key);
}
async function sendContactEmail(data) {
    const resend = getResend();
    const to = process.env.CONTACT_TO_EMAIL ?? "info@moldcheck.pt";
    const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck Contact <no-reply@moldcheck.pt>";
    const html = `
    <h2>Nueva consulta de contacto — MoldCheck.pt</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="font-weight:600;padding-right:16px;">Nombre</td><td>${esc(data.full_name)}</td></tr>
      <tr><td style="font-weight:600;">Email</td><td>${esc(data.email)}</td></tr>
      <tr><td style="font-weight:600;">Teléfono</td><td>${esc(data.country_prefix)} ${esc(data.phone_number)}</td></tr>
      <tr><td style="font-weight:600;">Municipio</td><td>${esc(data.municipality)}</td></tr>
      <tr><td style="font-weight:600;">Página</td><td>${esc(data.source_page)}</td></tr>
      <tr><td style="font-weight:600;">Fecha</td><td>${esc(data.created_at)}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Mensaje</h3>
    <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${esc(data.message)}</p>
  `;
    const { error } = await resend.emails.send({
        from,
        to,
        subject: `Nuevo contacto: ${data.full_name} — MoldCheck.pt`,
        html
    });
    if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}
function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact/email.ts [app-route] (ecmascript)");
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
            error: "Invalid JSON"
        }, {
            status: 400
        });
    }
    const raw = body;
    // Honeypot check — bots fill this field
    if (raw.honeypot) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        }); // silent discard
    }
    const data = {
        fullName: String(raw.fullName ?? ""),
        email: String(raw.email ?? ""),
        countryPrefix: String(raw.countryPrefix ?? ""),
        phoneNumber: String(raw.phoneNumber ?? ""),
        municipality: String(raw.municipality ?? ""),
        message: String(raw.message ?? ""),
        consentAccepted: raw.consentAccepted === true
    };
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateContactForm"])(data);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasErrors"])(errors)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Validation failed",
            fields: errors
        }, {
            status: 422
        });
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertContactSubmission"])(submission);
    } catch (err) {
        console.error("[contact] Supabase error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Database error"
        }, {
            status: 500
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendContactEmail"])(submission);
    } catch (err) {
        // Email failure is non-fatal — submission is already stored
        console.error("[contact] Resend error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__9c7e1fad._.js.map