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
"[project]/src/lib/newsletter/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_LOCALES",
    ()=>ACTIVE_LOCALES,
    "validateNewsletterPayload",
    ()=>validateNewsletterPayload
]);
const ACTIVE_LOCALES = [
    "es",
    "pt",
    "en",
    "fr",
    "de",
    "nl",
    "it"
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateNewsletterPayload(raw) {
    // Honeypot — must be empty
    if (raw.hp && raw.hp.trim() !== "") {
        return {
            ok: false,
            error: {
                field: "honeypot",
                message: "Bot detected."
            }
        };
    }
    // Email
    const email = (raw.email ?? "").trim();
    if (!email) {
        return {
            ok: false,
            error: {
                field: "email",
                message: "Email is required."
            }
        };
    }
    if (!EMAIL_RE.test(email)) {
        return {
            ok: false,
            error: {
                field: "email",
                message: "Invalid email address."
            }
        };
    }
    const emailNorm = email.toLowerCase();
    // Locale
    const locale = (raw.locale ?? "").trim();
    if (!ACTIVE_LOCALES.includes(locale)) {
        return {
            ok: false,
            error: {
                field: "locale",
                message: "Invalid locale."
            }
        };
    }
    // Consent
    if (raw.consentAccepted !== true) {
        return {
            ok: false,
            error: {
                field: "consent",
                message: "Consent is required."
            }
        };
    }
    return {
        ok: true,
        data: {
            email,
            emailNorm,
            locale,
            consentAccepted: true,
            sourcePage: (raw.sourcePage ?? "").trim() || "/"
        }
    };
}
}),
"[project]/src/lib/newsletter/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markChecklistSent",
    ()=>markChecklistSent,
    "upsertNewsletterSubscriber",
    ()=>upsertNewsletterSubscriber
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
async function upsertNewsletterSubscriber(data) {
    const supabase = getServiceClient();
    const now = new Date().toISOString();
    // Check for existing subscriber by normalised email
    const { data: existing, error: selectError } = await supabase.from("newsletter_subscribers").select("id, locale_preference").eq("email_norm", data.emailNorm).maybeSingle();
    if (selectError) {
        throw new Error(`Supabase select failed: ${selectError.message}`);
    }
    if (existing) {
        // Already subscribed — update last_submission_at and optionally locale
        const { error: updateError } = await supabase.from("newsletter_subscribers").update({
            last_submission_at: now,
            locale_preference: data.locale,
            updated_at: now
        }).eq("id", existing.id);
        if (updateError) {
            throw new Error(`Supabase update failed: ${updateError.message}`);
        }
        return {
            status: "already_subscribed"
        };
    }
    // New subscriber — insert row
    const { error: insertError } = await supabase.from("newsletter_subscribers").insert({
        email: data.email,
        email_norm: data.emailNorm,
        locale_preference: data.locale,
        checklist_locale: data.locale,
        source_page: data.sourcePage,
        consent_accepted: true,
        subscribed_at: now,
        updated_at: now,
        last_submission_at: now
    });
    if (insertError) {
        throw new Error(`Supabase insert failed: ${insertError.message}`);
    }
    return {
        status: "subscribed"
    };
}
async function markChecklistSent(emailNorm) {
    const supabase = getServiceClient();
    const now = new Date().toISOString();
    const { error } = await supabase.from("newsletter_subscribers").update({
        checklist_sent_at: now,
        updated_at: now
    }).eq("email_norm", emailNorm);
    if (error) {
        throw new Error(`Supabase markChecklistSent failed: ${error.message}`);
    }
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/lib/newsletter/checklists.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCalculatorUrl",
    ()=>getCalculatorUrl,
    "getChecklistUrl",
    ()=>getChecklistUrl
]);
/** Public URL path for each locale's checklist PDF */ const CHECKLIST_PATHS = {
    es: "/checklists/moldcheck-checklist-es.pdf",
    pt: "/checklists/moldcheck-checklist-pt.pdf",
    en: "/checklists/moldcheck-checklist-en.pdf",
    fr: "/checklists/moldcheck-checklist-fr.pdf",
    de: "/checklists/moldcheck-checklist-de.pdf",
    nl: "/checklists/moldcheck-checklist-nl.pdf",
    it: "/checklists/moldcheck-checklist-it.pdf"
};
/** Localized calculator path */ const CALCULATOR_PATHS = {
    es: "/es/tools/humidity-risk-calculator",
    pt: "/pt/tools/humidity-risk-calculator",
    en: "/en/tools/humidity-risk-calculator",
    fr: "/fr/tools/humidity-risk-calculator",
    de: "/de/tools/humidity-risk-calculator",
    nl: "/nl/tools/humidity-risk-calculator",
    it: "/it/tools/humidity-risk-calculator"
};
function getChecklistUrl(locale) {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
    return `${base}${CHECKLIST_PATHS[locale]}`;
}
function getCalculatorUrl(locale) {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
    return `${base}${CALCULATOR_PATHS[locale]}`;
}
}),
"[project]/src/lib/newsletter/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendChecklistEmail",
    ()=>sendChecklistEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$checklists$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter/checklists.ts [app-route] (ecmascript)");
;
;
function getResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY not configured");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](key);
}
const COPY = {
    pt: {
        subject: "O seu checklist gratuito — MoldCheck.pt",
        greeting: "Obrigado por subscrever o MoldCheck.pt.",
        intro: "Pode descarregar o seu checklist de humidade e bolor aqui:",
        checklistCta: "Descarregar checklist (PDF)",
        calculatorLabel: "Quer avaliar o risco da sua habitação?",
        calculatorCta: "Usar a calculadora gratuita de risco de humidade →",
        closing: "Publicamos informação independente sobre bolor, humidade e qualidade do ar interior em Portugal. Pode cancelar a subscrição a qualquer momento.",
        footer: "MoldCheck.pt · Uma iniciativa do FAIRBANK Group"
    },
    en: {
        subject: "Your free checklist — MoldCheck.pt",
        greeting: "Thank you for subscribing to MoldCheck.pt.",
        intro: "You can download your mold and damp checklist here:",
        checklistCta: "Download checklist (PDF)",
        calculatorLabel: "Want to assess your home's risk?",
        calculatorCta: "Use the free humidity risk calculator →",
        closing: "We publish independent information on mold, damp and indoor air quality in Portugal. You can unsubscribe at any time.",
        footer: "MoldCheck.pt · A FAIRBANK Group initiative"
    },
    es: {
        subject: "Tu checklist gratuito — MoldCheck.pt",
        greeting: "Gracias por suscribirte a MoldCheck.pt.",
        intro: "Puedes descargar tu checklist de humedad y moho aquí:",
        checklistCta: "Descargar checklist (PDF)",
        calculatorLabel: "¿Quieres evaluar el riesgo de tu vivienda?",
        calculatorCta: "Usar la calculadora gratuita de riesgo de humedad →",
        closing: "Publicamos información independiente sobre moho, humedad y calidad del aire interior en Portugal. Puedes cancelar tu suscripción en cualquier momento.",
        footer: "MoldCheck.pt · Una iniciativa del FAIRBANK Group"
    },
    fr: {
        subject: "Votre checklist gratuite — MoldCheck.pt",
        greeting: "Merci de vous être abonné à MoldCheck.pt.",
        intro: "Vous pouvez télécharger votre checklist humidité et moisissures ici :",
        checklistCta: "Télécharger la checklist (PDF)",
        calculatorLabel: "Vous souhaitez évaluer le risque de votre logement ?",
        calculatorCta: "Utiliser le calculateur gratuit de risque d'humidité →",
        closing: "Nous publions des informations indépendantes sur les moisissures, l'humidité et la qualité de l'air intérieur au Portugal. Vous pouvez vous désabonner à tout moment.",
        footer: "MoldCheck.pt · Une initiative du FAIRBANK Group"
    },
    de: {
        subject: "Ihre kostenlose Checkliste — MoldCheck.pt",
        greeting: "Vielen Dank für Ihre Anmeldung bei MoldCheck.pt.",
        intro: "Sie können Ihre Schimmel- und Feuchtigkeits-Checkliste hier herunterladen:",
        checklistCta: "Checkliste herunterladen (PDF)",
        calculatorLabel: "Möchten Sie das Risiko Ihres Hauses einschätzen?",
        calculatorCta: "Kostenlosen Feuchtigkeitsrisikorechner nutzen →",
        closing: "Wir veröffentlichen unabhängige Informationen zu Schimmel, Feuchtigkeit und Raumluftqualität in Portugal. Sie können sich jederzeit abmelden.",
        footer: "MoldCheck.pt · Eine Initiative der FAIRBANK Group"
    },
    nl: {
        subject: "Uw gratis checklist — MoldCheck.pt",
        greeting: "Bedankt voor uw aanmelding bij MoldCheck.pt.",
        intro: "U kunt uw schimmel- en vochtchecklist hier downloaden:",
        checklistCta: "Checklist downloaden (PDF)",
        calculatorLabel: "Wilt u het risico van uw woning beoordelen?",
        calculatorCta: "Gebruik de gratis vochtrisicocalculator →",
        closing: "Wij publiceren onafhankelijke informatie over schimmel, vocht en binnenluchtkwaliteit in Portugal. U kunt zich op elk moment afmelden.",
        footer: "MoldCheck.pt · Een initiatief van de FAIRBANK Group"
    },
    it: {
        subject: "La tua checklist gratuita — MoldCheck.pt",
        greeting: "Grazie per esserti iscritto a MoldCheck.pt.",
        intro: "Puoi scaricare la tua checklist su umidità e muffa qui:",
        checklistCta: "Scarica la checklist (PDF)",
        calculatorLabel: "Vuoi valutare il rischio della tua abitazione?",
        calculatorCta: "Usa il calcolatore gratuito del rischio di umidità →",
        closing: "Pubblichiamo informazioni indipendenti su muffa, umidità e qualità dell'aria interna in Portogallo. Puoi annullare l'iscrizione in qualsiasi momento.",
        footer: "MoldCheck.pt · Un'iniziativa del FAIRBANK Group"
    }
};
// ── HTML builder ──────────────────────────────────────────────────────────────
function buildHtml(copy, checklistUrl, calculatorUrl) {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7fafa;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7fafa;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #d8e8e7;border-radius:6px;overflow:hidden;">

        <!-- Header -->
        <tr><td style="background:#1b4d4a;padding:28px 32px;">
          <p style="margin:0;font-family:'Palatino Linotype',Palatino,Georgia,serif;font-size:22px;color:#ffffff;letter-spacing:-0.02em;">MoldCheck.pt</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#0f1c1b;">${esc(copy.greeting)}</p>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#2e3f3e;">${esc(copy.intro)}</p>

          <!-- Checklist CTA -->
          <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr><td style="background:#2a7a75;border-radius:5px;">
              <a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">${esc(copy.checklistCta)}</a>
            </td></tr>
          </table>

          <!-- Calculator -->
          <p style="margin:0 0 8px;font-size:14px;color:#2e3f3e;">${esc(copy.calculatorLabel)}</p>
          <p style="margin:0 0 28px;">
            <a href="${calculatorUrl}" style="font-size:14px;color:#2a7a75;font-weight:600;">${esc(copy.calculatorCta)}</a>
          </p>

          <p style="margin:0;font-size:12px;line-height:1.65;color:#6b8a89;">${esc(copy.closing)}</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f7fafa;border-top:1px solid #d8e8e7;padding:16px 32px;">
          <p style="margin:0;font-size:11px;color:#9ab5b4;">${esc(copy.footer)}</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
async function sendChecklistEmail(email, locale) {
    const resend = getResend();
    const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck <no-reply@moldcheck.pt>";
    const copy = COPY[locale];
    const checklistUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$checklists$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChecklistUrl"])(locale);
    const calculatorUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$checklists$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalculatorUrl"])(locale);
    const { error } = await resend.emails.send({
        from,
        to: email,
        subject: copy.subject,
        html: buildHtml(copy, checklistUrl, calculatorUrl)
    });
    if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}
}),
"[project]/src/app/api/newsletter/subscribe/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter/email.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(req) {
    // Parse body
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
    // Validate
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateNewsletterPayload"])(body);
    if (!result.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: result.error.message,
            field: result.error.field
        }, {
            status: 422
        });
    }
    const { data } = result;
    try {
        const upsert = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertNewsletterSubscriber"])(data);
        if (upsert.status === "already_subscribed") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: "already_subscribed"
            });
        }
        // New subscriber — send checklist email then mark sent
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendChecklistEmail"])(data.email, data.locale);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markChecklistSent"])(data.emailNorm);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "subscribed"
        });
    } catch (err) {
        console.error("[newsletter/subscribe]", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9846359c._.js.map