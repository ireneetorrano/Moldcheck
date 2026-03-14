(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__91fdcacd._.js",
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
"[project]/src/lib/i18n/routing.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [middleware-edge] (ecmascript)");
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["activeLocales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"],
    localePrefix: "always"
});
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/routing.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
const config = {
    matcher: [
        "/",
        "/(pt|en|fr|de|nl|it|es)/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__91fdcacd._.js.map