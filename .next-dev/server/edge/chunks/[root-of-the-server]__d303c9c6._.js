(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__d303c9c6._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/config/locales.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/config/routeMap.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizedArticlePath",
    ()=>getLocalizedArticlePath,
    "getLocalizedGlobalPath",
    ()=>getLocalizedGlobalPath,
    "getLocalizedMunicipalityPath",
    ()=>getLocalizedMunicipalityPath,
    "getLocalizedSectionPath",
    ()=>getLocalizedSectionPath,
    "globalRouteSlugs",
    ()=>globalRouteSlugs,
    "localizedPathnames",
    ()=>localizedPathnames,
    "routeMap",
    ()=>routeMap,
    "sectionBaseSlugs",
    ()=>sectionBaseSlugs,
    "thankYouSlugs",
    ()=>thankYouSlugs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [middleware-edge] (ecmascript)");
;
const globalRouteSlugs = {
    about: {
        pt: "sobre",
        en: "about",
        fr: "a-propos",
        de: "ueber-uns",
        nl: "over-ons",
        it: "chi-siamo",
        es: "sobre"
    },
    articles: {
        pt: "artigos",
        en: "articles",
        fr: "articles",
        de: "artikel",
        nl: "artikelen",
        it: "articoli",
        es: "articulos"
    },
    services: {
        pt: "servicos",
        en: "services",
        fr: "services",
        de: "dienste",
        nl: "diensten",
        it: "servizi",
        es: "servicios"
    },
    shop: {
        pt: "loja",
        en: "shop",
        fr: "boutique",
        de: "shop",
        nl: "shop",
        it: "negozio",
        es: "tienda"
    },
    tools: {
        pt: "ferramentas",
        en: "tools",
        fr: "outils",
        de: "tools",
        nl: "tools",
        it: "strumenti",
        es: "herramientas"
    },
    privacy: {
        pt: "privacidade",
        en: "privacy-policy",
        fr: "politique-confidentialite",
        de: "datenschutz",
        nl: "privacybeleid",
        it: "informativa-privacy",
        es: "politica-privacidad"
    },
    contact: {
        pt: "contacto",
        en: "contact",
        fr: "contact",
        de: "kontakt",
        nl: "contact",
        it: "contatti",
        es: "contacto"
    },
    search: {
        pt: "pesquisa",
        en: "search",
        fr: "recherche",
        de: "suche",
        nl: "zoeken",
        it: "cerca",
        es: "buscar"
    },
    editorialPolicy: {
        pt: "politica-editorial",
        en: "editorial-policy",
        fr: "politique-editoriale",
        de: "redaktionsrichtlinie",
        nl: "redactioneel-beleid",
        it: "politica-editoriale",
        es: "politica-editorial"
    }
};
const thankYouSlugs = {
    pt: "obrigado",
    en: "thank-you",
    fr: "merci",
    de: "danke",
    nl: "bedankt",
    it: "grazie",
    es: "gracias"
};
const sectionBaseSlugs = {
    "mold-types": {
        pt: "tipos-bolor",
        en: "mold-types",
        fr: "types-moisissures",
        de: "schimmelarten",
        nl: "schimmelsoorten",
        it: "tipi-muffa",
        es: "tipos-moho"
    },
    remediation: {
        pt: "remediacao",
        en: "remediation",
        fr: "remediation",
        de: "sanierung",
        nl: "sanering",
        it: "bonifica",
        es: "remediacion"
    },
    health: {
        pt: "saude",
        en: "health",
        fr: "sante",
        de: "gesundheit",
        nl: "gezondheid",
        it: "salute",
        es: "salud"
    },
    portugal: {
        pt: "portugal",
        en: "portugal",
        fr: "portugal",
        de: "portugal",
        nl: "portugal",
        it: "portogallo",
        es: "portugal"
    },
    inspection: {
        pt: "inspecao",
        en: "inspection",
        fr: "inspection",
        de: "inspektion",
        nl: "inspectie",
        it: "ispezione",
        es: "inspeccion"
    },
    causes: {
        pt: "causas",
        en: "causes",
        fr: "causes",
        de: "ursachen",
        nl: "oorzaken",
        it: "cause",
        es: "causas"
    },
    species: {
        pt: "especies",
        en: "species",
        fr: "especes",
        de: "arten",
        nl: "soorten",
        it: "specie",
        es: "especies"
    },
    legislation: {
        pt: "legislacao",
        en: "legislation",
        fr: "legislation",
        de: "gesetzgebung",
        nl: "wetgeving",
        it: "normativa",
        es: "legislacion"
    },
    municipalities: {
        pt: "municipios",
        en: "municipalities",
        fr: "municipalites",
        de: "gemeinden",
        nl: "gemeenten",
        it: "comuni",
        es: "municipios"
    }
};
function localizeStatic(slugs, parent) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
            locale,
            parent ? `/${parent[locale]}/${slugs[locale]}` : `/${slugs[locale]}`
        ]));
}
function localizeNested(parent) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
            locale,
            `/${parent[locale]}/[slug]`
        ]));
}
const localizedPathnames = {
    "/": "/",
    "/about": localizeStatic(globalRouteSlugs.about),
    "/articles": localizeStatic(globalRouteSlugs.articles),
    "/articles/[slug]": localizeNested(globalRouteSlugs.articles),
    "/services": localizeStatic(globalRouteSlugs.services),
    "/shop": localizeStatic(globalRouteSlugs.shop),
    "/shop/thank-you": localizeStatic(thankYouSlugs, globalRouteSlugs.shop),
    "/tools": localizeStatic(globalRouteSlugs.tools),
    "/tools/[slug]": localizeNested(globalRouteSlugs.tools),
    "/privacy": localizeStatic(globalRouteSlugs.privacy),
    "/contact": localizeStatic(globalRouteSlugs.contact),
    "/search": localizeStatic(globalRouteSlugs.search),
    "/editorial-policy": localizeStatic(globalRouteSlugs.editorialPolicy),
    "/mold-types": localizeStatic(sectionBaseSlugs["mold-types"]),
    "/mold-types/[slug]": localizeNested(sectionBaseSlugs["mold-types"]),
    "/remediation": localizeStatic(sectionBaseSlugs.remediation),
    "/remediation/[slug]": localizeNested(sectionBaseSlugs.remediation),
    "/health": localizeStatic(sectionBaseSlugs.health),
    "/health/[slug]": localizeNested(sectionBaseSlugs.health),
    "/portugal": localizeStatic(sectionBaseSlugs.portugal),
    "/inspection": localizeStatic(sectionBaseSlugs.inspection),
    "/inspection/[slug]": localizeNested(sectionBaseSlugs.inspection),
    "/municipalities/[slug]": localizeNested(sectionBaseSlugs.municipalities)
};
function getLocalizedGlobalPath(locale, route) {
    if (route === "home") return `/${locale}`;
    if (route === "shopThankYou") return `/${locale}/${globalRouteSlugs.shop[locale]}/${thankYouSlugs[locale]}`;
    return `/${locale}/${globalRouteSlugs[route][locale]}`;
}
function getLocalizedSectionPath(locale, section, slug) {
    const base = `/${locale}/${sectionBaseSlugs[section][locale]}`;
    return slug ? `${base}/${slug}` : base;
}
function getLocalizedMunicipalityPath(locale, slug) {
    return `/${locale}/${sectionBaseSlugs.municipalities[locale]}/${slug}`;
}
function getLocalizedArticlePath(locale, slug) {
    return `/${locale}/${globalRouteSlugs.articles[locale]}/${slug}`;
}
const routeMap = {
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"],
    globalRouteSlugs,
    thankYouSlugs,
    sectionBaseSlugs,
    localizedPathnames
};
}),
"[project]/src/lib/i18n/routing.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [middleware-edge] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["activeLocales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"],
    localePrefix: "always",
    pathnames: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["localizedPathnames"]
});
}),
"[project]/src/lib/security/headers.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Security headers for MoldCheck.pt
 *
 * Applied via next.config.ts (static headers) and middleware (dynamic).
 * CSP is intentionally permissive for the inline styles/scripts that
 * Next.js and next-intl require — tighten further once a nonce strategy
 * is in place.
 */ __turbopack_context__.s([
    "MIDDLEWARE_SECURITY_HEADERS",
    ()=>MIDDLEWARE_SECURITY_HEADERS,
    "STATIC_SECURITY_HEADERS",
    ()=>STATIC_SECURITY_HEADERS
]);
const STATIC_SECURITY_HEADERS = [
    // Prevent MIME-type sniffing
    {
        key: "X-Content-Type-Options",
        value: "nosniff"
    },
    // Disallow framing from other origins
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN"
    },
    // Minimal referrer leakage
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin"
    },
    // Disable browser features not used by the app
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
    },
    // HSTS — only effective over HTTPS; safe to set, ignored over HTTP
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
    },
    // CSP — allows Next.js inline scripts/styles, Vercel analytics, and
    // the Sanity CDN for images.  'unsafe-inline' for styles is required
    // by Next.js CSS-in-JS; remove once a nonce strategy is implemented.
    {
        key: "Content-Security-Policy",
        value: [
            "default-src 'self'",
            // Scripts: self + Next.js inline bootstrap + Vercel analytics + Google Analytics
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",
            // Styles: self + inline (required by Next.js)
            "style-src 'self' 'unsafe-inline'",
            // Images: self + data URIs + Sanity CDN + any HTTPS source for user-uploaded images
            "img-src 'self' data: https://cdn.sanity.io https:",
            // Fonts: self
            "font-src 'self'",
            // Connections: self + Supabase + Resend + Brevo + Vercel analytics + Google Analytics
            "connect-src 'self' https://*.supabase.co https://api.resend.com https://api.brevo.com https://vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
            // Frames: none
            "frame-src 'none'",
            // Objects: none
            "object-src 'none'",
            // Base URI: self only
            "base-uri 'self'",
            // Form actions: self only
            "form-action 'self'",
            // Upgrade insecure requests in production
            "upgrade-insecure-requests"
        ].join("; ")
    }
];
const MIDDLEWARE_SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": [
        "default-src 'self'",
        // Scripts: self + Next.js inline bootstrap + Vercel analytics + Google Analytics
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",
        // Styles: self + inline (required by Next.js)
        "style-src 'self' 'unsafe-inline'",
        // Images: self + data URIs + Sanity CDN + GA pixel + GTM
        "img-src 'self' data: https://cdn.sanity.io https://www.google-analytics.com https://www.googletagmanager.com https:",
        // Fonts: self
        "font-src 'self'",
        // Connections: self + Supabase + Resend + Brevo + Vercel analytics + Google Analytics
        "connect-src 'self' https://*.supabase.co https://api.resend.com https://api.brevo.com https://vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
        // Frames: none
        "frame-src 'none'",
        // Objects: none
        "object-src 'none'",
        // Base URI: self only
        "base-uri 'self'",
        // Form actions: self only
        "form-action 'self'",
        // Upgrade insecure requests in production
        "upgrade-insecure-requests"
    ].join("; ")
};
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/routing.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2f$headers$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/security/headers.ts [middleware-edge] (ecmascript)");
;
;
;
;
// ── Bot / scanner path blocklist ──────────────────────────────────────────
// Paths that bots commonly probe and that should never reach the app.
// Matched as exact path or prefix.  Returns 404 cheaply without rendering.
const BOT_PATH_PREFIXES = [
    "/wp-admin",
    "/wp-login",
    "/wp-content",
    "/wp-includes",
    "/admin",
    "/phpmyadmin",
    "/pma",
    "/.env",
    "/.git",
    "/config",
    "/xmlrpc",
    "/cgi-bin",
    "/shell",
    "/eval",
    "/boaform",
    "/GponForm"
];
const BOT_PATH_EXACT = new Set([
    "/index.php",
    "/admin.php",
    "/login.php",
    "/setup.php",
    "/install.php",
    "/readme.html",
    "/license.txt",
    "/web.config"
]);
function isBotPath(pathname) {
    const lower = pathname.toLowerCase();
    if (BOT_PATH_EXACT.has(lower)) return true;
    return BOT_PATH_PREFIXES.some((p)=>lower.startsWith(p));
}
// ── Security header helper ────────────────────────────────────────────────
function addSecurityHeaders(res, pathname) {
    // Skip CSP and restrictive headers for Sanity Studio — it makes many
    // cross-origin requests to *.api.sanity.io, *.sanity.io, and uses iframes
    // that would all be blocked by the app's strict CSP.
    if (pathname.startsWith("/studio")) {
        return res;
    }
    for (const [key, value] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2f$headers$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MIDDLEWARE_SECURITY_HEADERS"])){
        res.headers.set(key, value);
    }
    return res;
}
// ── next-intl middleware (handles locale routing) ─────────────────────────
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
function middleware(req) {
    const { pathname } = req.nextUrl;
    // 1. Reject known bot/scanner paths cheaply — before any rendering
    if (isBotPath(pathname)) {
        console.info(`[middleware] bot path rejected: ${pathname}`);
        return addSecurityHeaders(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
            status: 404
        }), pathname);
    }
    // 2. Run next-intl locale routing
    const res = intlMiddleware(req);
    // 3. Add security headers to every response
    addSecurityHeaders(res, pathname);
    return res;
}
const config = {
    // Match all paths except Next.js internals, static files, and Sanity Studio
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|icons/|img/|flags/|checklists/|studio).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d303c9c6._.js.map