(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/locales.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/routeMap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-client] (ecmascript)");
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
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
            locale,
            parent ? "/".concat(parent[locale], "/").concat(slugs[locale]) : "/".concat(slugs[locale])
        ]));
}
function localizeNested(parent) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
            locale,
            "/".concat(parent[locale], "/[slug]")
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
    if (route === "home") return "/".concat(locale);
    if (route === "shopThankYou") return "/".concat(locale, "/").concat(globalRouteSlugs.shop[locale], "/").concat(thankYouSlugs[locale]);
    return "/".concat(locale, "/").concat(globalRouteSlugs[route][locale]);
}
function getLocalizedSectionPath(locale, section, slug) {
    const base = "/".concat(locale, "/").concat(sectionBaseSlugs[section][locale]);
    return slug ? "".concat(base, "/").concat(slug) : base;
}
function getLocalizedMunicipalityPath(locale, slug) {
    return "/".concat(locale, "/").concat(sectionBaseSlugs.municipalities[locale], "/").concat(slug);
}
function getLocalizedArticlePath(locale, slug) {
    return "/".concat(locale, "/").concat(globalRouteSlugs.articles[locale], "/").concat(slug);
}
const routeMap = {
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLocale"],
    globalRouteSlugs,
    thankYouSlugs,
    sectionBaseSlugs,
    localizedPathnames
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/routing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-client] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeLocales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLocale"],
    localePrefix: "always",
    pathnames: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizedPathnames"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "getPathname",
    ()=>getPathname,
    "redirect",
    ()=>redirect,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/content/data/articles/a4-portugal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a4PortugalContent",
    ()=>a4PortugalContent,
    "a4PortugalSlugs",
    ()=>a4PortugalSlugs
]);
const a4PortugalSlugs = {
    pt: "segundo-pior-problema-bolor-europa",
    en: "europes-second-worst-mold-problem",
    fr: "deuxieme-pire-probleme-moisissures",
    de: "zweitschlimmstes-schimmelproblem-europa",
    nl: "op-een-na-ergste-schimmelprobleem",
    it: "secondo-peggior-problema-muffa-europa",
    es: "segundo-peor-problema-moho-europa"
};
const a4PortugalContent = {
    pt: {
        seoTitle: "Portugal Tem o Segundo Pior Problema de Bolor da Europa MoldCheck.pt",
        seoDescription: "Portugal tem o segundo pior problema de bolor da Europa. Dados Eurostat, causas estruturais e o défice de diagnóstico independente explicados.",
        focusKeyword: "bolor Portugal Europa",
        title: "Portugal Tem o Segundo Pior Problema de Bolor da Europa. Porque é que Ninguém Fala Nisso?",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Cresci na Holanda. Em quarenta anos, nunca vi bolor numa casa.",
            "Não porque as casas holandesas sejam perfeitas não são. Mas porque a construção neerlandesa assume que vai chover, sempre, e que a humidade precisa de ser gerida activamente: isolamento adequado, ventilação mecânica, materiais que resistem à humidade. O problema é incorporado no processo de construção antes de existir.",
            "Quando me mudei para Portugal há vários anos, aprendi que a relação com a humidade nas habitações é completamente diferente. A humidade nas paredes é mencionada com uma espécie de resignação, como se fosse uma característica do clima que simplesmente se aceita. O bolor atrás dos roupeiros é descoberto por acaso, tratado com lixívia, e esquecido até voltar. As alergias e a tosse persistente do inverno são atribuídas ao frio, ao ar, a tudo excepto às paredes onde se passa a maior parte da vida.",
            "Fui curioso. Comecei a procurar os dados.",
            "## O que os números dizem",
            "O inquérito EU-SILC do Eurostat o maior estudo sistemático de condições de vida na União Europeia pergunta regularmente aos respondentes se vivem em habitação com humidade ou bolor. Os resultados para Portugal são consistentes ao longo dos anos: entre 24 e 26 por cento da população portuguesa vive em habitação afectada por humidade ou bolor.",
            "É o segundo valor mais alto da União Europeia. Só o Chipre está pior.",
            "A média europeia é de cerca de 14 por cento. Portugal tem quase o dobro.",
            "Os Censos 2021 do INE completam o quadro: 82 por cento dos edifícios portugueses foram construídos antes do ano 2000, antes de qualquer requisito significativo de eficiência energética ou isolamento. Mais de um terço dos edifícios precisam de obras. Não obras de remodelação obras de reparação básica.",
            "E depois de perceber a escala do problema, fui perceber o que existia para ajudar as pessoas a lidar com ele.",
            "## O que encontrei no mercado",
            "Portugal tem várias empresas no mercado do tratamento de humidade e bolor. Algumas são grandes, com décadas de actividade e milhares de intervenções por ano. Oferecem diagnósticos gratuitos. Chegam a casa, avaliam o problema, e propõem soluções sistemas de ventilação, injecções de resina, produtos de encapsulamento por valores que podem chegar a vários milhares de euros.",
            "Estas empresas podem ter soluções legítimas para problemas reais. Isso não é o ponto.",
            "O ponto é este: em Portugal, o diagnóstico é feito pela empresa que vende o tratamento. Não existe, em Portugal, nenhuma entidade independente sem ligação a empresas de tratamento, sem interesse comercial no resultado do diagnóstico que avalie o problema de bolor na sua casa e lhe diga honestamente o que tem e o que precisa.",
            "É como se, no sector da saúde, o único serviço de diagnóstico disponível fosse gerido pela empresa farmacêutica que vende a medicação que o diagnóstico vai recomendar. Ninguém aceitaria isso na medicina. Aceitamos na habitação porque nunca tivemos alternativa.",
            "## A ligação com a saúde que raramente é feita",
            "Há mais uma camada nisto que me parece importante dizer claramente.",
            "A Organização Mundial de Saúde estimou, nas suas diretrizes de 2009 sobre qualidade do ar interior, que 13 por cento dos casos de asma infantil na Região Europeia da OMS são atribuíveis à humidade residencial. A investigação de Taborda-Barata e colegas, publicada em 2023 na revista científica Pulmonology, descreve uma \"ausência generalizada de consciencialização na população\" em Portugal sobre a ligação entre qualidade do ar interior e saúde respiratória.",
            "Um em cada quatro portugueses vive em habitação com humidade ou bolor. Treze por cento dos casos de asma infantil são potencialmente atribuíveis a esta condição. E a ligação entre as paredes onde se vive e os sintomas com que se lida no inverno raramente entra na consulta médica, raramente entra na conversa com o senhorio, raramente entra em nenhuma conversa.",
            "Isto não é um problema menor de qualidade de vida. É um problema de saúde pública sub-reconhecido à escala de um quarto da população.",
            "## O que este site é e o que não é",
            "O MoldCheck.pt não é uma empresa de tratamentos. Não vende sistemas de ventilação, produtos de impermeabilização, nem qualquer outro serviço de intervenção em habitações.",
            "É um recurso de informação independente. Publicamos o que a ciência diz sobre bolor sobre as espécies, sobre os riscos para a saúde, sobre os métodos de detecção e remediação que têm base científica. Quando um método não funciona, dizemos que não funciona. Quando a informação disponível é incerta, dizemos que é incerta.",
            "Somos transparentes sobre quem somos: o MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS plataforma de inspecção independente de imóveis em Portugal. A nossa ligação comercial é com a inspecção e o diagnóstico independentes. Não temos interesse no tratamento que se segue ao diagnóstico. Quando recomendamos uma avaliação profissional, é porque acreditamos que precisa de uma não porque ganhamos dinheiro com o que acontece depois.",
            "A distinção importa. O conflito de interesse que existe no mercado actual não é entre educação e diagnóstico. É entre diagnóstico e tratamento. Um inspector independente que cobra pelo seu tempo e não tem participação nos lucros da remediação é a solução para o problema que este site descreve não parte dele.",
            "## Para o um em cada quatro",
            "Se está a ler isto e vive em Portugal, há uma probabilidade de um em quatro de que a sua habitação tenha humidade ou bolor. Pode saber disso talvez tenha uma mancha que aparece todos os invernos, ou um cheiro que não consegue eliminar, ou um roupeiro que nunca encosta bem à parede. Ou pode não saber porque o bolor mais problemático cresce em lugares que nunca vê, e os sintomas que provoca são fáceis de atribuir a outras causas.",
            "Este site foi construído para si. Para que tenha acesso à informação que existe, sem a mediação de quem tem interesse no diagnóstico que lhe vai apresentar.",
            "O problema de bolor em Portugal não é inevitável. Não é uma característica do clima que se aceita. É um problema com causas identificáveis, com soluções com base científica, e com um défice claro de informação independente que este site tenta, em parte, colmatar.",
            "Começamos aqui."
        ],
        disclosure: "Pieter Paul Castelein trabalha no FAIRBANK Group, a empresa por detrás da InspectOS plataforma de inspeção independente de imóveis em Portugal. O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspeção ou análise laboratorial, é porque acreditamos que precisa de uma não porque lucramos com o tratamento que se segue.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020 2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Taborda-Barata et al., \"Indoor air pollution and respiratory diseases: A Portuguese perspective,\" Pulmonology (2023)"
            },
            {
                label: "EPBD Directiva 2024/1275 relativa ao desempenho energético dos edifícios"
            }
        ],
        faq: [
            {
                question: "Portugal tem mesmo um dos piores problemas de bolor da Europa?",
                answer: "Sim. Segundo os dados do EU-SILC do Eurostat, Portugal surge consistentemente entre os países com maior percentagem de população a viver em habitação com humidade ou bolor, acima da média europeia."
            },
            {
                question: "Porque é que o problema é tão frequente em Portugal?",
                answer: "Porque vários factores se combinam: parque habitacional envelhecido, muitos edifícios sem isolamento adequado, elevada prevalência de humidade e pouca consciencialização pública sobre a ligação entre habitação e saúde."
            },
            {
                question: "Porque é problemático que o diagnóstico seja feito por quem vende o tratamento?",
                answer: "Porque existe um conflito de interesse estrutural. Quando a mesma empresa diagnostica e vende a solução, o consumidor não tem uma segunda opinião independente antes de tomar decisões potencialmente caras."
            },
            {
                question: "O MoldCheck.pt vende tratamentos de humidade?",
                answer: "Não. O MoldCheck.pt não vende tratamentos de humidade nem serviços de remediação. O objetivo do site é fornecer informação independente, clara e baseada em evidência científica."
            },
            {
                question: "Qual é a diferença entre diagnóstico independente e tratamento?",
                answer: "O diagnóstico independente serve para identificar a causa e a natureza do problema sem interesse comercial no tratamento que se segue. O tratamento é a fase posterior, que pode ou não ser necessária, dependendo do diagnóstico real."
            }
        ]
    },
    en: {
        seoTitle: "Portugal Has Europe's Second-Worst Mold Problem MoldCheck.pt",
        seoDescription: "Portugal has Europe's second-worst mold problem. Eurostat data, structural causes, and the absence of independent diagnosis explained.",
        focusKeyword: "mold Portugal Europe",
        title: "Portugal Has Europe's Second-Worst Mold Problem. Why Is Nobody Talking About It?",
        byline: "By Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "When I moved from the Netherlands to Portugal, I brought with me a particular blindness.",
            "In the Netherlands, mold is not something people discuss. It's not something you discover behind a wardrobe and resign yourself to. It's not part of the standard conversation when you rent an apartment or buy a house. Dutch buildings are built cold and tight double-glazed, insulated, ventilated. The idea that a home could make your family chronically ill through something growing in its walls wasn't something that had ever occurred to me. Not once.",
            "Then I lived in Lisbon. And the blindness started to lift.",
            "I saw it in properties I visited professionally on bathroom ceilings, blooming in bedroom corners, climbing up north-facing walls in dark patches that tenants had clearly learned to ignore. I saw it described in property listings as \"some humidity\" the way someone might mention a slightly noisy neighbour unfortunate but manageable. I heard Portuguese friends talk about it with a shrug: é o clima, it's the climate, what can you do.",
            "What I didn't see, for longer than I should have, was the connection between what was growing in our walls and what was happening to my health.",
            "I suffered from severe allergies for years. The kind that wear you down persistent, exhausting, always there, always requiring management. I tried everything a person tries. And then we moved. We moved to a well-built house, properly insulated, properly ventilated, without a trace of mold anywhere. And something shifted. Not immediately. But over months, the whole family's health changed. The allergies that had defined my daily life didn't disappear overnight, but they retreated in a way that nothing else had ever produced.",
            "I am not a doctor. I cannot tell you with medical certainty that our old house was making us sick. What I can tell you is that I know the difference between how we felt then and how we feel now. And I know that when I started looking into the science seriously looking, past the hardware store advice and the treatment company brochures what I found was not reassuring.",
            "What I found was that this is not normal. That the level of mold in Portuguese housing is not an unavoidable consequence of living near the Atlantic. That it is a public health problem, documented by European statistics, confirmed by respiratory medicine research, and almost entirely unaddressed.",
            "## The number that stopped me",
            "Here it is: 24 to 26 percent.",
            "That is the share of Portugal's population living in housing affected by dampness or mold, according to Eurostat's EU-SILC survey data. One in four Portuguese people. In a country of ten million, that is roughly two and a half million people waking up every morning in homes where something is growing in the walls that shouldn't be.",
            "The EU average is around 14 percent. Portugal's figure is nearly double that. Among all 27 EU member states, only Cyprus has a higher rate of mold-affected housing. This is not a minor statistical footnote. This is a structural public health failure.",
            "The World Health Organization's 2009 guidelines on dampness and mold still the international benchmark are direct about what this means medically. There is sufficient scientific evidence of a causal relationship between living in damp, moldy housing and upper respiratory tract symptoms, asthma exacerbation, allergic rhinitis, and hypersensitivity pneumonitis. The WHO estimates that 13 percent of childhood asthma in the European Region is attributable to residential dampness. Not caused by genetics. Not by outdoor air. By the homes where children sleep.",
            "Thirteen percent. In Portugal's case, given our mold prevalence, that number may be higher.",
            "I want to be careful here, because this site will always be careful. We do not traffic in panic. Not every damp patch is a health emergency. Not every household with visible mold is facing a medical crisis. Individual risk depends on species, exposure duration, ventilation, and personal susceptibility. But the aggregate picture across millions of Portuguese homes is one that deserves serious, honest attention. And it is getting almost none.",
            "## Why Portuguese buildings are different",
            "This is not Portugal's fault in the way that a policy failure is a fault. Portuguese buildings were built the way they were built because of decades of construction practice, energy economics, and regulation or its absence.",
            "Walk through any Lisbon neighbourhood and you are looking at buildings from three distinct eras of construction, each with its own vulnerability profile.",
            "Pre-1960 buildings are stone and brick, often beautiful, often without any damp-proof course separating the walls from the ground. Capillary rise moisture from the earth wicking upward through masonry is endemic in this stock. The ground floor apartments of the Mouraria, the Alfama, parts of Bairro Alto many of them are in permanent conversation with the moisture below them.",
            "The 1960s through 1990s brought Portugal's rapid urbanisation reinforced concrete frames with hollow brick infill, metal window frames conducting cold directly from the exterior to the interior, no insulation to speak of, single-glazed windows. These buildings were designed for a time when energy was cheap and indoor comfort standards were different. The metal frames are thermal bridges: they conduct cold so efficiently that in a Lisbon winter, the surface temperature around a window frame can drop below the dew point of the indoor air. The moisture in the air from cooking, breathing, showering condenses on that cold surface and runs down the wall. Behind the wardrobe placed against that wall, where no one looks, mold finds its substrate.",
            "Porto's annual average relative humidity is 77 percent. Lisbon's in winter is 78 to 84 percent. The Azores, Madeira, and the northern coastal regions can be higher still. When you have old buildings, minimal insulation, and sustained humidity you have the conditions for mold. Not as an anomaly. As a certainty.",
            "According to the INE Censos 2021, 82 percent of Portugal's buildings were constructed before the year 2000. 35.8 percent over 1.27 million buildings are classified as needing repair. More than one in three buildings in this country is deteriorating faster than it is being maintained or renovated.",
            "This is the physical reality that the statistics sit on top of. The 24 to 26 percent mold prevalence figure is not a mystery. It is the entirely predictable outcome of the building stock Portugal has, in the climate Portugal has, with the renovation investment Portugal has made.",
            "## The response that isn't",
            "What I find harder to explain and harder to accept is the absence of a serious response to this.",
            "Portugal has no residential indoor air quality standard. The last attempt Decreto-Lei 79/2006 was revoked in 2013 and never replaced. A homeowner in Portugal has no legally defined right to mold-free housing, no national standard against which to measure their home's air quality, no regulatory framework that compels a landlord to address a documented mold problem.",
            "The European Union's new Energy Performance of Buildings Directive (EPBD 2024/1275), which Portugal must transpose into national law by May 2026, introduces for the first time a legal concept of Indoor Environmental Quality. It requires IEQ monitoring in renovated non-residential zero-emission buildings. This is progress. But it is commercial buildings. Residential properties where 24 to 26 percent of people are already affected remain outside the scope.",
            "Meanwhile, the dominant \"solution\" available to Portuguese consumers is a free diagnosis from a company that profits from selling you a treatment. This model has become so normalized that consumers don't question it. Of course the assessment is free. Of course the same technician who finds your problem will quote you for solving it. You would not accept this from a doctor. You would not accept a free medical diagnosis from a pharmaceutical company that profits when you buy their drug. But in the mold treatment market in Portugal, this is simply how things work.",
            "I understand why it works this way. Mold treatment is not a simple product. It requires site visits, skilled labour, proprietary systems. Someone has to pay for the initial assessment, and if the consumer won't, the treatment company will because they recoup it downstream. The business logic is coherent.",
            "The problem is what it does to the information available to consumers. When the only accessible diagnosis comes from a company motivated to find a problem and sell a solution, the information produced by that diagnosis is not neutral. The consumer has no independent check. No second opinion. No way to know whether the treatment recommended is the right one, the minimal necessary one, or the most profitable one.",
            "There is, as of the time I'm writing this, no independent residential mold inspection service with laboratory diagnostic capability operating in Portugal. No certified mold inspectors in the sense that the US or UK would recognise no equivalent of the ACAC's Council-certified Microbial Investigator qualification on the Iberian Peninsula. No Portuguese laboratory offering the DNA-based mold testing that has been standard in American residential diagnostics for twenty years.",
            "This is a gap so large it is almost difficult to see. It has the quality of the invisible present everywhere, noticed almost nowhere.",
            "## What happened after we moved",
            "I want to come back to the personal for a moment, because the personal is why this site exists.",
            "After we moved to a properly built house well-insulated, properly ventilated, without the cold spots and condensation problems of the previous property my allergies began to improve. My family's health improved. The constant low-level respiratory irritation that had become so normal I had stopped noticing it as unusual it wasn't there anymore.",
            "I cannot give you a controlled clinical study. I can tell you that the correlation was stark enough that I started asking questions I should have asked years earlier. What was growing in our old home? What species? What concentrations? What was it producing? What were we breathing every night while we slept?",
            "I started reading the science. The WHO guidelines. The research on Stachybotrys chartarum the species behind the \"toxic black mold\" you may have heard of and its production of trichothecene mycotoxins that inhibit protein synthesis at the cellular level. The work of researchers like Górny et al., showing that fungal fragments too small to see carry immunological activity many times more potent than the spores themselves. The 2023 paper by Taborda-Barata and colleagues in the journal Pulmonology, specifically reviewing indoor air pollution and respiratory disease from a Portuguese perspective, describing the \"generalised absence of awareness among the population\" about the link between indoor air quality and respiratory health.",
            "I am a Dutch entrepreneur who has lived in Portugal for years, built companies in the Portuguese real estate and PropTech space, and become through personal experience and professional immersion genuinely angry about the gap between what the science says about mold and what Portuguese consumers are being told.",
            "That anger is why this site exists.",
            "## What MoldCheck.pt is and what it isn't",
            "MoldCheck.pt is an independent public health resource. It is published by FAIRBANK Group, which also operates InspectOS a professional property inspection platform. We disclose this completely and without apology.",
            "What MoldCheck.pt will never do: sell you a treatment. Accept undisclosed sponsorship from mold treatment companies. Recommend products for commission. Generate fear to drive conversions. Write about mold health risks in ways that go beyond what the evidence actually supports.",
            "What it will do: publish the science accurately, in plain Portuguese and plain English, without sanitising the parts that are uncomfortable. Explain what is known, what is emerging, and what is still uncertain. Give you the information you need to ask better questions of your landlord, your doctor, your contractor, and any company offering to fix your mold problem.",
            "Portugal is changing. The EPBD transposition in 2026 will begin to shift the regulatory baseline. Storm Kristin in January 2026 which caused billions of euros in damage across Portugal and left tens of thousands of buildings with water ingress has created a new cohort of properties entering the window where mold colonisation begins within 24 to 48 hours of flooding. The conversation about building quality and health is slowly beginning.",
            "We want to be part of accelerating that conversation. Not by selling anything. By being honest about a problem that has been normalised for too long.",
            "## A note for the one in four",
            "If you are reading this and you recognise something in it the mold on the bedroom wall, the persistent cough, the allergy that doesn't respond to treatment, the symptoms that somehow improve when you spend time away from home I want to say something directly.",
            "You are not imagining it. You are not overreacting. The connection between your home environment and your health is real, it is scientifically documented, and it is under-recognised by most of the systems that should be addressing it.",
            "This site is for you. The information here is free. We have no interest in making your problem seem larger than it is, or smaller. We just want you to have what I didn't have when I first started asking these questions: honest, independent information, grounded in evidence, with no commercial agenda attached.",
            "That's a simple thing. It shouldn't be unusual.",
            "In Portugal, for now, it is."
        ],
        disclosure: "Pieter Paul Castelein works at FAIRBANK Group, the company behind InspectOS an independent property inspection platform operating in Portugal. MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK does not sell damp treatments. FAIRBANK does not take commissions from remediation companies. When we recommend an inspection or lab test, it is because we believe you need one not because we profit from whatever treatment follows.\n\nThe information on this site is educational and does not constitute medical advice. If you are experiencing health symptoms, please consult a qualified healthcare professional.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020 2023"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            },
            {
                label: "Taborda-Barata et al., \"Indoor air pollution and respiratory diseases: A general update and a Portuguese perspective,\" Pulmonology (2023)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            },
            {
                label: "EPBD Directive 2024/1275 Energy Performance of Buildings"
            },
            {
                label: "Cotality/CoreLogic, Storm Kristin Impact Report, Portugal (January 2026)"
            },
            {
                label: "European Environment Agency, \"Beating Chronic Respiratory Disease: The Role of Europe's Environment\" (2024)"
            }
        ],
        faq: [
            {
                question: "Does Portugal really have one of the worst mold problems in Europe?",
                answer: "Yes. According to Eurostat EU-SILC data, Portugal consistently appears among the countries with the highest share of people living in housing affected by damp or mold, above the European average."
            },
            {
                question: "Why is the problem so common in Portugal?",
                answer: "Because several factors overlap: an ageing housing stock, many buildings without adequate insulation, a high prevalence of damp, and low public awareness of the link between housing and health."
            },
            {
                question: "Why is it a problem when the company selling the treatment also makes the diagnosis?",
                answer: "Because that creates a structural conflict of interest. When the same company diagnoses the problem and sells the solution, the consumer has no independent second opinion before making potentially expensive decisions."
            },
            {
                question: "Does MoldCheck.pt sell damp or mold treatments?",
                answer: "No. MoldCheck.pt does not sell damp treatments or remediation services. Its purpose is to provide independent, clear, evidence-based information."
            },
            {
                question: "What is the difference between independent diagnosis and treatment?",
                answer: "Independent diagnosis exists to identify the cause and nature of the problem without a commercial interest in the treatment that may follow. Treatment is the later stage, which may or may not be necessary depending on the real diagnosis."
            }
        ]
    },
    fr: {
        seoTitle: "Le Portugal a le Deuxième Plus Grave Problème de Moisissures en Europe MoldCheck.pt",
        seoDescription: "Le Portugal a le deuxième pire problème de moisissures d'Europe. Données Eurostat, causes structurelles et absence de diagnostic indépendant expliqués.",
        focusKeyword: "moisissures Portugal Europe",
        title: "Le Portugal a le Deuxième Plus Grave Problème de Moisissures en Europe. Pourquoi Personne n'en Parle ?",
        byline: "Par Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "J'ai grandi aux Pays-Bas. En quarante ans, je n'ai jamais vu de moisissures dans une maison.",
            "Pas parce que les maisons néerlandaises sont parfaites elles ne le sont pas. Mais parce que la construction hollandaise part du principe qu'il va pleuvoir, toujours, et que l'humidité doit être gérée activement : isolation suffisante, ventilation mécanique, matériaux résistants à l'humidité. Le problème est intégré dans le processus de construction avant même d'exister.",
            "Quand je me suis installé au Portugal il y a plusieurs années, j'ai découvert une relation à l'humidité dans les logements qui est fondamentalement différente. L'humidité dans les murs est mentionnée avec une sorte de résignation, comme si c'était une caractéristique du climat qu'on accepte simplement. Les moisissures derrière les armoires sont découvertes par hasard, traitées à l'eau de Javel, oubliées jusqu'à ce qu'elles reviennent. Les allergies et la toux persistante de l'hiver sont attribuées au froid, à l'air, à tout sauf aux murs dans lesquels on passe la majorité de sa vie.",
            "J'ai voulu comprendre. J'ai cherché les données.",
            "## Ce que les chiffres révèlent",
            "L'enquête EU-SILC d'Eurostat la plus grande étude systématique sur les conditions de vie dans l'Union européenne interroge régulièrement les personnes sur leur logement pour savoir s'il est affecté par l'humidité ou les moisissures. Les résultats pour le Portugal sont constants d'une année sur l'autre : entre 24 et 26 pour cent de la population portugaise vit dans un logement affecté par l'humidité ou les moisissures.",
            "C'est le deuxième chiffre le plus élevé de l'Union européenne. Seul Chypre fait pire.",
            "La moyenne européenne est d'environ 14 pour cent. Le Portugal a presque le double.",
            "Le recensement INE de 2021 complète ce tableau : 82 pour cent des bâtiments portugais ont été construits avant l'an 2000, avant toute exigence significative d'efficacité énergétique ou d'isolation. Plus d'un tiers des bâtiments ont besoin de travaux. Pas de rénovation de réparations de base.",
            "Pour les résidents français au Portugal et vous êtes nombreux, la communauté française représente l'une des plus importantes parmi les résidents européens cette réalité est particulièrement importante à connaître. Que vous soyez propriétaire d'une résidence principale à Lisbonne, d'une maison secondaire en Algarve, ou locataire dans le Grand Porto, les bâtiments dans lesquels vous vivez ont été construits dans un contexte réglementaire très différent de ce que vous connaissez en France.",
            "## Ce que j'ai trouvé sur le marché",
            "Le Portugal dispose de plusieurs entreprises sur le marché du traitement de l'humidité et des moisissures. Certaines sont importantes, avec des décennies d'activité et des milliers d'interventions par an. Elles proposent des diagnostics gratuits. Elles viennent chez vous, évaluent le problème, et proposent des solutions systèmes de ventilation, injections de résine, produits d'encapsulation pour des montants qui peuvent atteindre plusieurs milliers d'euros.",
            "Ces entreprises peuvent proposer des solutions légitimes pour des problèmes réels. Ce n'est pas le sujet.",
            "Le sujet est celui-ci : au Portugal, le diagnostic est effectué par l'entreprise qui vend le traitement. Il n'existe au Portugal aucune entité indépendante sans lien avec les entreprises de traitement, sans intérêt commercial dans le résultat du diagnostic qui évalue le problème de moisissures dans votre logement et vous dit honnêtement ce que vous avez et ce dont vous avez besoin.",
            "C'est comme si, dans le domaine de la santé, le seul service de diagnostic disponible était géré par la société pharmaceutique qui vend le médicament que le diagnostic va recommander. Personne n'accepterait cela en médecine. Nous l'acceptons dans le logement parce que nous n'avons jamais eu d'alternative.",
            "En France, le Diagnostiqueur Immobilier est une profession réglementée et certifiée, indépendante des entreprises de travaux. Cette infrastructure de diagnostic indépendant n'existe pas encore pour les moisissures résidentielles au Portugal.",
            "## Le lien avec la santé que personne ne fait",
            "Il y a une autre dimension de ce problème qui mérite d'être dite clairement.",
            "L'Organisation mondiale de la santé a estimé, dans ses directives de 2009 sur la qualité de l'air intérieur, que 13 pour cent des cas d'asthme infantile dans la région européenne de l'OMS sont attribuables à l'humidité résidentielle. Des recherches de Taborda-Barata et collègues, publiées en 2023 dans la revue scientifique Pulmonology, décrivent une « absence généralisée de sensibilisation » au Portugal concernant le lien entre la qualité de l'air intérieur et la santé respiratoire.",
            "Un Portugais sur quatre vit dans un logement humide ou avec des moisissures. Treize pour cent des cas d'asthme infantile sont potentiellement attribuables à cette condition. Et le lien entre les murs dans lesquels on vit et les symptômes dont on souffre en hiver entre rarement dans la consultation médicale ni en France, ni au Portugal.",
            "Ce n'est pas un problème mineur de qualité de vie. C'est un problème de santé publique sous-reconnu à l'échelle d'un quart de la population.",
            "## Ce qu'est ce site et ce qu'il n'est pas",
            "MoldCheck.pt n'est pas une entreprise de traitement. Nous ne vendons pas de systèmes de ventilation, de produits d'imperméabilisation, ni aucun autre service d'intervention dans les logements.",
            "C'est une ressource d'information indépendante. Nous publions ce que la science dit sur les moisissures sur les espèces, sur les risques pour la santé, sur les méthodes de détection et de remédiation qui ont une base scientifique. Quand une méthode ne fonctionne pas, nous disons qu'elle ne fonctionne pas. Quand les informations disponibles sont incertaines, nous disons qu'elles sont incertaines.",
            "Nous sommes transparents sur notre identité : MoldCheck.pt est une initiative du FAIRBANK Group, la société à l'origine d'InspectOS plateforme d'inspection indépendante de biens immobiliers au Portugal. Notre lien commercial est avec l'inspection et le diagnostic indépendants. Nous n'avons aucun intérêt dans le traitement qui suit le diagnostic. Quand nous recommandons une évaluation professionnelle, c'est parce que nous pensons que vous en avez besoin pas parce que nous gagnons de l'argent sur ce qui se passe ensuite.",
            "## Pour celui ou celle qui reconnaît sa situation",
            "Si vous vivez au Portugal et que vous lisez ceci, il y a une probabilité sur quatre que votre logement soit affecté par l'humidité ou les moisissures. Vous le savez peut-être déjà une tache qui réapparaît chaque hiver, une odeur que vous n'arrivez pas à éliminer, une pièce qui ne sèche jamais vraiment. Ou vous ne le savez peut-être pas parce que les moisissures les plus problématiques poussent dans des endroits que vous ne voyez jamais, et les symptômes qu'elles provoquent sont faciles à attribuer à d'autres causes.",
            "Ce site a été construit pour vous. Pour que vous ayez accès à l'information qui existe, sans la médiation de ceux qui ont un intérêt dans le diagnostic qu'ils vont vous présenter.",
            "Le problème des moisissures au Portugal n'est pas inévitable. Ce n'est pas une caractéristique du climat qu'on accepte. C'est un problème avec des causes identifiables, des solutions fondées sur la science, et un manque évident d'information indépendante que ce site cherche, en partie, à combler.",
            "Nous commençons ici."
        ],
        disclosure: "Pieter Paul Castelein travaille au sein du FAIRBANK Group, la société à l'origine d'InspectOS plateforme d'inspection indépendante de biens immobiliers au Portugal. MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c'est parce que nous pensons que vous en avez besoin pas parce que nous tirons profit du traitement qui suit.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020 2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "OMS Lignes directrices relatives à la qualité de l'air intérieur : humidité et moisissures (2009)"
            },
            {
                label: "Taborda-Barata et al., Pulmonology (2023)"
            },
            {
                label: "EPBD Directive 2024/1275"
            }
        ],
        faq: [
            {
                question: "Le Portugal a-t-il vraiment l'un des pires problèmes de moisissures en Europe ?",
                answer: "Oui. Selon les données EU-SILC d'Eurostat, le Portugal figure régulièrement parmi les pays où la proportion de personnes vivant dans des logements touchés par l'humidité ou les moisissures est la plus élevée, au-dessus de la moyenne européenne."
            },
            {
                question: "Pourquoi ce problème est-il si fréquent au Portugal ?",
                answer: "Parce que plusieurs facteurs se combinent : un parc immobilier vieillissant, de nombreux bâtiments sans isolation adéquate, une forte prévalence de l'humidité et un faible niveau de sensibilisation au lien entre logement et santé."
            },
            {
                question: "Pourquoi est-ce problématique que le diagnostic soit fait par l'entreprise qui vend le traitement ?",
                answer: "Parce qu'il existe un conflit d'intérêt structurel. Quand la même entreprise établit le diagnostic et vend la solution, le consommateur ne dispose pas d'un second avis indépendant avant de prendre des décisions potentiellement coûteuses."
            },
            {
                question: "MoldCheck.pt vend-il des traitements contre l'humidité ?",
                answer: "Non. MoldCheck.pt ne vend pas de traitements contre l'humidité ni de services de remédiation. Le site a pour objectif de fournir une information indépendante, claire et fondée sur des preuves scientifiques."
            },
            {
                question: "Quelle est la différence entre diagnostic indépendant et traitement ?",
                answer: "Le diagnostic indépendant sert à identifier la cause et la nature du problème sans intérêt commercial dans le traitement qui peut suivre. Le traitement est l'étape ultérieure, qui peut être nécessaire ou non selon le diagnostic réel."
            }
        ]
    },
    de: {
        seoTitle: "Portugal Hat das Zweitschlimmste Schimmelproblem Europas MoldCheck.pt",
        seoDescription: "Portugal hat das zweitschlimmste Schimmelproblem Europas. Eurostat-Daten, strukturelle Ursachen und das Fehlen unabhängiger Diagnose erklärt.",
        focusKeyword: "Schimmel Portugal Europa",
        title: "Portugal Hat das Zweitschlimmste Schimmelproblem Europas. Warum Spricht Niemand Darüber?",
        byline: "Von Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Ich bin in den Niederlanden aufgewachsen. In vierzig Jahren habe ich in keinem einzigen Haus Schimmel gesehen.",
            "Nicht weil niederländische Häuser perfekt sind das sind sie nicht. Sondern weil der niederländische Baustil davon ausgeht, dass es regnen wird immer und dass Feuchtigkeit aktiv gemanagt werden muss: ausreichende Dämmung, mechanische Lüftung, feuchtigkeitsresistente Materialien. Das Problem wird in den Bauprozess integriert, bevor es entstehen kann.",
            "Als ich vor einigen Jahren nach Portugal zog, lernte ich, dass die Beziehung zur Feuchtigkeit in Wohngebäuden hier grundlegend anders ist. Feuchte Wände werden mit einer Art Resignation erwähnt, als ob es sich um eine Eigenschaft des Klimas handele, die man einfach akzeptiert. Schimmel hinter Schränken wird zufällig entdeckt, mit Bleiche behandelt, vergessen bis er wiederkommt. Allergien und hartnäckiger Winterhusten werden der Kälte, der Luft, allem Möglichen zugeschrieben nur nicht den Wänden, in denen man die meiste Zeit seines Lebens verbringt.",
            "Ich wurde neugierig. Ich suchte die Daten.",
            "## Was die Zahlen zeigen",
            "Die EU-SILC-Erhebung von Eurostat die größte systematische Studie zu Lebensbedingungen in der Europäischen Union befragt die Bevölkerung regelmäßig, ob sie in feuchten oder schimmelbelasteten Wohnungen lebt. Die Ergebnisse für Portugal sind über die Jahre konstant: Zwischen 24 und 26 Prozent der portugiesischen Bevölkerung lebt in Wohnungen, die von Feuchtigkeit oder Schimmel betroffen sind.",
            "Das ist der zweithöchste Wert in der Europäischen Union. Nur Zypern ist schlechter.",
            "Der EU-Durchschnitt liegt bei etwa 14 Prozent. Portugal hat fast das Doppelte.",
            "Die INE-Volkszählung 2021 vervollständigt das Bild: 82 Prozent der portugiesischen Gebäude wurden vor dem Jahr 2000 gebaut vor jeglichen nennenswerten Energieeffizienz- oder Dämmanforderungen. Mehr als ein Drittel der Gebäude sind reparaturbedürftig. Nicht Renovierung grundlegende Instandhaltung.",
            "Für deutsche Bewohner in Portugal und es werden immer mehr, die Community wächst stetig ist diese Realität besonders wichtig zu kennen. Ob Sie eine Hauptresidenz in Lissabon, ein Ferienhaus an der Algarve oder eine Mietwohnung im Großraum Porto haben: Die Gebäude, in denen Sie leben, wurden unter völlig anderen regulatorischen Bedingungen gebaut als das, was Sie aus Deutschland kennen.",
            "## Was ich auf dem Markt fand",
            "Portugal hat mehrere Unternehmen auf dem Markt für Feuchtigkeits- und Schimmelbehandlung. Einige sind groß, mit jahrzehntelanger Tätigkeit und Tausenden von Interventionen pro Jahr. Sie bieten kostenlose Diagnosen an. Sie kommen zu Ihnen nach Hause, bewerten das Problem und schlagen Lösungen vor Lüftungssysteme, Harzinjektionen, Verkapselungsprodukte für Beträge, die mehrere Tausend Euro erreichen können.",
            "Diese Unternehmen können für spezifische Probleme legitime Lösungen anbieten. Das ist nicht der Punkt.",
            "Der Punkt ist folgender: In Portugal wird die Diagnose von demselben Unternehmen gestellt, das die Behandlung verkauft. Es gibt in Portugal keine unabhängige Einrichtung ohne Verbindung zu Behandlungsunternehmen, ohne kommerzielles Interesse am Diagnoseergebnis die das Schimmelproblem in Ihrer Wohnung bewertet und Ihnen ehrlich sagt, was Sie haben und was Sie brauchen.",
            "Das ist so, als ob im Gesundheitswesen der einzige verfügbare Diagnosedienst vom Pharmaunternehmen betrieben würde, das das Medikament verkauft, das die Diagnose empfehlen wird. In der Medizin würde das niemand akzeptieren. Im Wohnbereich akzeptieren wir es, weil wir nie eine Alternative hatten.",
            "In Deutschland gibt es den zertifizierten Sachverständigen für Schimmel eine Instanz, die unabhängig von Sanierungsunternehmen arbeitet. Diese Infrastruktur existiert für Wohnimmobilien in Portugal noch nicht.",
            "## Die Verbindung zur Gesundheit, die niemand herstellt",
            "Die Weltgesundheitsorganisation schätzte in ihren Leitlinien von 2009 zur Innenraumluftqualität, dass 13 Prozent der Kindheitsfälle von Asthma in der europäischen WHO-Region auf Wohnraumfeuchtigkeit zurückzuführen sind. Forschungen von Taborda-Barata und Kollegen, veröffentlicht 2023 in der wissenschaftlichen Zeitschrift Pulmonology, beschreiben ein „weitverbreitetes Mangel an Bewusstsein in Portugal über den Zusammenhang zwischen Innenraumluftqualität und Atemwegsgesundheit.",
            "Jeder vierte Portugiese lebt in feuchten oder schimmelbelasteten Wohnungen. Dreizehn Prozent der Kindheitsasthma-Fälle sind potenziell darauf zurückzuführen. Und die Verbindung zwischen den Wänden, in denen man lebt, und den Symptomen, mit denen man im Winter kämpft, taucht selten in der ärztlichen Konsultation auf.",
            "Das ist kein geringes Lebensqualitätsproblem. Es ist ein im Ausmaß eines Viertels der Bevölkerung unterschätztes öffentliches Gesundheitsproblem.",
            "## Was diese Website ist und was sie nicht ist",
            "MoldCheck.pt ist kein Behandlungsunternehmen. Wir verkaufen keine Lüftungssysteme, keine Abdichtungsprodukte und keine anderen Eingriffsdienste für Wohngebäude.",
            "Es ist eine unabhängige Informationsressource. Wir veröffentlichen, was die Wissenschaft über Schimmel sagt über Arten, Gesundheitsrisiken, Erkennungs- und Sanierungsmethoden mit wissenschaftlicher Grundlage. Wenn eine Methode nicht funktioniert, sagen wir das. Wenn Informationen unsicher sind, sagen wir das.",
            "Wir sind transparent über unsere Identität: MoldCheck.pt ist eine Initiative der FAIRBANK Group, dem Unternehmen hinter InspectOS einer unabhängigen Immobilieninspektionsplattform in Portugal. Unsere kommerzielle Verbindung liegt bei der unabhängigen Inspektion und Diagnose. Wir haben kein Interesse an der Behandlung, die auf die Diagnose folgt. Wenn wir eine professionelle Bewertung empfehlen, dann weil wir glauben, dass Sie eine brauchen nicht weil wir an dem verdienen, was danach kommt.",
            "## Für jeden Vierten",
            "Wenn Sie das lesen und in Portugal leben, gibt es eine Wahrscheinlichkeit von eins zu vier, dass Ihre Wohnung von Feuchtigkeit oder Schimmel betroffen ist. Vielleicht wissen Sie das bereits ein Fleck, der jeden Winter wiederkommt, ein Geruch, den Sie nicht loswerden. Oder Sie wissen es nicht weil der problematischste Schimmel an Orten wächst, die Sie nie sehen, und die Symptome, die er verursacht, leicht anderen Ursachen zugeschrieben werden können.",
            "Diese Website wurde für Sie gebaut. Damit Sie Zugang zu den vorhandenen Informationen haben ohne die Vermittlung derer, die ein Interesse an der Diagnose haben, die sie Ihnen präsentieren werden.",
            "Das Schimmelproblem in Portugal ist nicht unvermeidlich. Es ist kein Klimamerkmal, das man einfach akzeptiert. Es ist ein Problem mit identifizierbaren Ursachen, wissenschaftlich fundierten Lösungen und einem klaren Mangel an unabhängigen Informationen, den diese Website versucht, zumindest teilweise zu beheben.",
            "Wir beginnen hier."
        ],
        disclosure: "Pieter Paul Castelein arbeitet bei der FAIRBANK Group, dem Unternehmen hinter InspectOS einer unabhängigen Immobilieninspektionsplattform in Portugal. MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie eine brauchen nicht weil wir von der nachfolgenden Behandlung profitieren.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020 2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "WHO Leitlinien für die Innenraumluftqualität: Feuchtigkeit und Schimmel (2009)"
            },
            {
                label: "Taborda-Barata et al., Pulmonology (2023)"
            },
            {
                label: "EPBD-Richtlinie 2024/1275"
            }
        ],
        faq: [
            {
                question: "Hat Portugal wirklich eines der schlimmsten Schimmelprobleme in Europa?",
                answer: "Ja. Nach den EU-SILC-Daten von Eurostat gehört Portugal regelmäßig zu den Ländern mit dem höchsten Anteil an Menschen, die in von Feuchtigkeit oder Schimmel betroffenen Wohnungen leben, deutlich über dem europäischen Durchschnitt."
            },
            {
                question: "Warum ist das Problem in Portugal so verbreitet?",
                answer: "Weil mehrere Faktoren zusammenkommen: ein alter Wohnungsbestand, viele Gebäude ohne ausreichende Dämmung, eine hohe Feuchtigkeitsbelastung und ein geringes öffentliches Bewusstsein für den Zusammenhang zwischen Wohnen und Gesundheit."
            },
            {
                question: "Warum ist es problematisch, wenn die behandelnde Firma auch die Diagnose stellt?",
                answer: "Weil dadurch ein struktureller Interessenkonflikt entsteht. Wenn dieselbe Firma das Problem diagnostiziert und die Lösung verkauft, hat der Verbraucher vor möglicherweise teuren Entscheidungen keine unabhängige Zweitmeinung."
            },
            {
                question: "Verkauft MoldCheck.pt Feuchtigkeits- oder Schimmelbehandlungen?",
                answer: "Nein. MoldCheck.pt verkauft weder Feuchtigkeitsbehandlungen noch Sanierungsleistungen. Ziel der Website ist es, unabhängige, klare und evidenzbasierte Informationen bereitzustellen."
            },
            {
                question: "Was ist der Unterschied zwischen unabhängiger Diagnose und Behandlung?",
                answer: "Die unabhängige Diagnose dient dazu, Ursache und Art des Problems festzustellen, ohne kommerzielles Interesse an der späteren Behandlung. Die Behandlung ist der nachgelagerte Schritt und kann je nach tatsächlicher Diagnose notwendig sein oder nicht."
            }
        ]
    },
    nl: {
        seoTitle: "Portugal Heeft het Op Één Na Ergste Schimmelprobleem van Europa MoldCheck.pt",
        seoDescription: "Portugal heeft het op één na ergste schimmelprobleem van Europa. Eurostat-cijfers, structurele oorzaken en het ontbreken van onafhankelijke diagnose uitgelegd.",
        focusKeyword: "schimmel Portugal Europa",
        title: "Portugal Heeft het Op Één Na Ergste Schimmelprobleem van Europa. Waarom Heeft Niemand Het Erover?",
        byline: "Door Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Ik ben opgegroeid in Nederland. In veertig jaar heb ik nooit schimmel in een huis gezien.",
            "Niet omdat Nederlandse huizen perfect zijn dat zijn ze niet. Maar omdat de Nederlandse bouw ervan uitgaat dat het gaat regenen, altijd, en dat vocht actief beheerd moet worden: voldoende isolatie, mechanische ventilatie, vochtbestendige materialen. Het probleem wordt in het bouwproces geïntegreerd voordat het kan ontstaan.",
            "Toen ik een aantal jaren geleden naar Portugal verhuisde, ontdekte ik dat de relatie met vocht in woningen hier fundamenteel anders is. Vochtige muren worden vermeld met een soort berusting, alsof het een eigenschap van het klimaat is die je gewoon accepteert. Schimmel achter kasten wordt toevallig ontdekt, behandeld met bleekwater, vergeten totdat het terugkomt. Allergieën en hardnekkige winterhoest worden toegeschreven aan de kou, de lucht, aan alles behalve de muren waarin je het grootste deel van je leven doorbrengt.",
            "Ik werd nieuwsgierig. Ik zocht de cijfers op.",
            "## Wat de cijfers zeggen",
            "Het EU-SILC-onderzoek van Eurostat de grootste systematische studie naar levensomstandigheden in de Europese Unie vraagt bewoners regelmatig of ze in een woning leven die door vocht of schimmel is aangetast. De resultaten voor Portugal zijn jaar na jaar consistent: tussen de 24 en 26 procent van de Portugese bevolking leeft in een woning die door vocht of schimmel is aangetast.",
            "Dat is het op één na hoogste cijfer in de Europese Unie. Alleen Cyprus scoort slechter.",
            "Het EU-gemiddelde ligt op ongeveer 14 procent. Portugal heeft bijna het dubbele.",
            "De INE-volkstelling van 2021 completeert het beeld: 82 procent van de Portugese gebouwen is vóór het jaar 2000 gebouwd vóór enige betekenisvolle eis voor energie-efficiëntie of isolatie. Meer dan een derde van alle gebouwen heeft reparaties nodig. Geen renovatie basisonderhoud.",
            "Als Nederlander herken ik dit patroon direct. We zijn gewend aan vochtig klimaat én aan woningen die daartegen bestand zijn. Portugal heeft het vochtige klimaat Porto heeft een gemiddelde luchtvochtigheid van 77 procent, Lissabon in de winter 78 tot 84 procent maar de bouw gaat er niet systematisch mee om. Dat is geen klimaatprobleem. Dat is een bouwkundig en informatieprobleem.",
            "## Wat ik op de markt aantrof",
            "Portugal heeft meerdere bedrijven op de markt voor vocht- en schimmelbehandeling. Sommige zijn groot, met tientallen jaren ervaring en duizenden interventies per jaar. Ze bieden gratis diagnoses aan. Ze komen bij je thuis, beoordelen het probleem en stellen oplossingen voor ventilatiesystemen, harzinjecties, inkapselingsproducten voor bedragen die kunnen oplopen tot duizenden euro's.",
            "Deze bedrijven kunnen voor specifieke problemen legitieme oplossingen bieden. Dat is niet het punt.",
            "Het punt is dit: in Portugal wordt de diagnose gesteld door hetzelfde bedrijf dat de behandeling verkoopt. Er bestaat in Portugal geen onafhankelijke instantie zonder band met behandelingsbedrijven, zonder commercieel belang bij de uitkomst van de diagnose die het schimmelprobleem in jouw woning beoordeelt en je eerlijk vertelt wat je hebt en wat je nodig hebt.",
            "Het is alsof de enige beschikbare diagnostische dienst in de gezondheidszorg wordt gerund door het farmaceutisch bedrijf dat het medicijn verkoopt dat de diagnose gaat aanbevelen. In de geneeskunde zou niemand dat accepteren. In de woningmarkt accepteren we het, omdat we nooit een alternatief hebben gehad.",
            "In Nederland kennen we de gecertificeerde schimmelinspecteur een professional die onafhankelijk van saneringsbedrijven opereert. Die infrastructuur bestaat voor residentieel vastgoed in Portugal nog niet.",
            "## De link met gezondheid die niemand legt",
            "De Wereldgezondheidsorganisatie schatte in haar richtlijnen van 2009 voor binnenluchtkwaliteit dat 13 procent van de gevallen van astma bij kinderen in de Europese WHO-regio toe te schrijven is aan vochtige woonomstandigheden. Onderzoek van Taborda-Barata en collega's, gepubliceerd in 2023 in het wetenschappelijk tijdschrift Pulmonology, beschrijft een \"wijdverspreide afwezigheid van bewustzijn\" in Portugal over het verband tussen binnenluchtkwaliteit en luchtwegaandoeningen.",
            "Eén op de vier Portugezen leeft in een woning met vocht of schimmel. Dertien procent van de gevallen van kindastma is hier mogelijk aan toe te schrijven. En de link tussen de muren waarin je leeft en de symptomen waarmee je elke winter kampt, komt zelden aan bod bij de huisarts.",
            "Dit is geen klein leefkwaliteitsprobleem. Het is een onderkend volksgezondheidsprobleem op de schaal van een kwart van de bevolking.",
            "## Wat deze website is en wat ze niet is",
            "MoldCheck.pt is geen behandelingsbedrijf. We verkopen geen ventilatiesystemen, geen waterdichtingsproducten, en geen andere interventiediensten voor woningen.",
            "Het is een onafhankelijke informatiebron. We publiceren wat de wetenschap zegt over schimmel over soorten, gezondheidsrisico's, detectie- en saneringsmethoden met wetenschappelijke basis. Als een methode niet werkt, zeggen we dat. Als informatie onzeker is, zeggen we dat.",
            "We zijn transparant over wie we zijn: MoldCheck.pt is een initiatief van de FAIRBANK Group, het bedrijf achter InspectOS een onafhankelijk vastgoedinspectieplatform in Portugal. Onze commerciële verbinding ligt bij onafhankelijke inspectie en diagnose. We hebben geen belang bij de behandeling die op de diagnose volgt. Als we een professionele beoordeling aanbevelen, is dat omdat we denken dat je die nodig hebt niet omdat we verdienen aan wat daarna komt.",
            "## Voor iedereen die zich herkent",
            "Als je dit leest en in Portugal woont of een woning bezit in Portugal is er een kans van één op vier dat jouw woning door vocht of schimmel is aangetast. Misschien weet je dat al. Of misschien niet want de meest problematische schimmel groeit op plekken die je nooit ziet, en de symptomen die het veroorzaakt zijn makkelijk aan andere oorzaken toe te schrijven.",
            "Als Nederlander in Portugal weet ik hoe verrassend dit kan zijn. We zijn niet gewend aan dit probleem. Maar juist daarom is het belangrijk om er open de ogen voor te hebben.",
            "Deze website is gebouwd voor iedereen die toegang wil tot de beschikbare informatie zonder de tussenkomst van partijen die belang hebben bij de diagnose die ze je gaan presenteren.",
            "Het schimmelprobleem in Portugal is niet onvermijdelijk. Het is een probleem met identificeerbare oorzaken, wetenschappelijk onderbouwde oplossingen, en een duidelijk gebrek aan onafhankelijke informatie dat deze website deels probeert te vullen.",
            "We beginnen hier."
        ],
        disclosure: "Pieter Paul Castelein werkt bij de FAIRBANK Group, het bedrijf achter InspectOS een onafhankelijk vastgoedinspectieplatform in Portugal. MoldCheck.pt is een initiatief van de FAIRBANK Group. We verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijven. Als we een inspectie of laboratoriumanalyse aanbevelen, is dat omdat we denken dat je die nodig hebt niet omdat we verdienen aan de behandeling die daarop volgt.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020 2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "WHO Richtlijnen voor binnenluchtkwaliteit: vocht en schimmel (2009)"
            },
            {
                label: "Taborda-Barata et al., Pulmonology (2023)"
            },
            {
                label: "EPBD Richtlijn 2024/1275"
            }
        ],
        faq: [
            {
                question: "Heeft Portugal echt een van de ernstigste schimmelproblemen van Europa?",
                answer: "Ja. Volgens de EU-SILC-gegevens van Eurostat behoort Portugal consequent tot de landen met het hoogste aandeel mensen dat woont in huizen met vocht- of schimmelproblemen, boven het Europese gemiddelde."
            },
            {
                question: "Waarom komt dit probleem zo vaak voor in Portugal?",
                answer: "Omdat verschillende factoren samenkomen: een verouderd woningbestand, veel gebouwen zonder goede isolatie, een hoge prevalentie van vochtproblemen en weinig bewustzijn van het verband tussen woning en gezondheid."
            },
            {
                question: "Waarom is het problematisch als degene die de behandeling verkoopt ook de diagnose stelt?",
                answer: "Omdat er dan een structureel belangenconflict bestaat. Wanneer hetzelfde bedrijf zowel het probleem vaststelt als de oplossing verkoopt, krijgt de consument geen onafhankelijke tweede mening vóór mogelijk dure beslissingen."
            },
            {
                question: "Verkoopt MoldCheck.pt behandelingen tegen vocht of schimmel?",
                answer: "Nee. MoldCheck.pt verkoopt geen vochtbehandelingen en geen saneringsdiensten. Het doel van de site is onafhankelijke, duidelijke en wetenschappelijk onderbouwde informatie te bieden."
            },
            {
                question: "Wat is het verschil tussen onafhankelijke diagnose en behandeling?",
                answer: "Een onafhankelijke diagnose is bedoeld om de oorzaak en aard van het probleem vast te stellen zonder commercieel belang bij de behandeling die daarna eventueel volgt. De behandeling is de volgende stap, die wel of niet nodig kan zijn afhankelijk van de echte diagnose."
            }
        ]
    },
    es: {
        seoTitle: "Portugal tiene el segundo peor problema de moho de Europa MoldCheck.pt",
        seoDescription: "Portugal tiene el segundo peor problema de moho de Europa. Datos Eurostat, causas estructurales y ausencia de diagnóstico independiente explicados.",
        focusKeyword: "moho Portugal Europa",
        title: "Portugal tiene el segundo peor problema de moho de Europa. Casi nadie habla de ello.",
        byline: "de MoldCheck.pt",
        body: [
            "El 24 26% de los hogares portugueses declaran tener problemas de humedad o moho. Este es el dato de Eurostat EU-SILC público, no controvertido, raramente citado.",
            "Solo Chipre lo hace peor dentro de la Unión Europea. La media europea se sitúa en torno al 13 15%. Portugal casi duplica esa cifra.",
            "## Por qué ocurre esto",
            "No es una cuestión de negligencia. Es física e historia.",
            "El 82% de los edificios residenciales portugueses se construyó antes del año 2000 antes de cualquier requisito significativo de aislamiento térmico o eficiencia energética. Estos edificios tienen puentes térmicos severos: marcos de ventanas de aluminio sin rotura de puente térmico, paredes exteriores delgadas, forjados sin aislar.",
            "Cuando el aire interior húmedo entra en contacto con estas superficies frías en invierno, condensa. Oporto tiene una humedad relativa media anual del 77%. Lisboa alcanza el 84% en las semanas más húmedas del invierno. Estos valores no son excepcionales en Portugal: son normales. Un edificio no diseñado para gestionar estas condiciones produce condensación estructural, no accidental.",
            "A esto se suma el hábito cultural de no calentar las casas en invierno, lo que mantiene las superficies de las paredes frías incluso en los días más húmedos.",
            "## El mercado de diagnóstico no es independiente",
            "En Portugal existe un mercado estructurado de empresas de tratamiento contra la humedad. Las principales ofrecen diagnósticos gratuitos a domicilio.",
            "Esta oferta es comercialmente inteligente: la empresa que diagnostica el problema es la misma que venderá la solución. No existe un conflicto de intereses declarado pero existe estructuralmente.",
            "No se trata de acusar a estas empresas de incompetencia o mala fe. Se trata de señalar que en Portugal no existe ninguna entidad que evalúe el moho en una vivienda sin obtener beneficio del tratamiento que le sigue.",
            "## Lo que falta: un sistema de inspección independiente",
            "En España existe el técnico de prevención de riesgos laborales con competencia en calidad del aire, y los peritos de edificación. En Francia existe el diagnostiqueur immobilier certificado e independiente. En el Reino Unido existen los damp surveyors acreditados.",
            "En Portugal no existe nada equivalente para el diagnóstico residencial de humedad y moho. No hay un registro, no hay una certificación reconocida, no hay un marco normativo que separe quien diagnostica de quien trata.",
            "MoldCheck.pt e InspectOS existen para comenzar a llenar este vacío con inspectores que cobran por su tiempo, sin comisiones sobre las soluciones que siguen.",
            "## Por qué esto también afecta a los españoles en Portugal",
            "La comunidad española en Portugal ha crecido significativamente en los últimos años. Muchos llegan sin conocer el mercado inmobiliario local, sin la red de contactos que ayuda a los portugueses a gestionar los problemas de vivienda, y a menudo con expectativas de calidad constructiva calibradas en España que, con todos sus problemas, tiene estándares de construcción mediamente superiores a los de Portugal en lo que respecta al aislamiento.",
            "Comprar o alquilar una vivienda en Portugal sin una evaluación independiente de la humedad es un riesgo real. No porque los vendedores o propietarios sean necesariamente deshonestos, sino porque los problemas de humedad son con frecuencia invisibles en verano la estación en que se realiza la mayoría de las compras y porque no existe una obligación de información equivalente a la vigente en muchos otros países europeos."
        ],
        disclosure: "MoldCheck.pt es una iniciativa del FAIRBANK Group, la empresa que opera InspectOS plataforma de inspección inmobiliaria independiente en Portugal. No vendemos tratamientos contra la humedad. No recibimos comisiones de empresas de saneamiento.",
        sources: [
            {
                label: "Eurostat EU-SILC, Housing conditions data (2023)"
            },
            {
                label: "INE, Censos 2021 Caracterização do parque habitacional"
            },
            {
                label: "EPBD Directiva 2024/1275/UE"
            },
            {
                label: "Taborda-Barata et al., Pulmonology (2023)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            }
        ],
        faq: [
            {
                question: "¿Portugal tiene realmente uno de los peores problemas de moho de Europa?",
                answer: "Sí. Según los datos EU-SILC de Eurostat, Portugal aparece de forma constante entre los países con mayor porcentaje de población viviendo en viviendas afectadas por humedad o moho, por encima de la media europea."
            },
            {
                question: "¿Por qué el problema es tan frecuente en Portugal?",
                answer: "Porque se combinan varios factores: parque habitacional envejecido, muchos edificios sin aislamiento adecuado, alta prevalencia de humedad y poca conciencia pública sobre la relación entre vivienda y salud."
            },
            {
                question: "¿Por qué es problemático que el diagnóstico lo haga quien vende el tratamiento?",
                answer: "Porque existe un conflicto de interés estructural. Cuando la misma empresa diagnostica el problema y vende la solución, el consumidor no dispone de una segunda opinión independiente antes de tomar decisiones potencialmente costosas."
            },
            {
                question: "¿MoldCheck.pt vende tratamientos contra la humedad o el moho?",
                answer: "No. MoldCheck.pt no vende tratamientos contra la humedad ni servicios de remediación. El objetivo del sitio es ofrecer información independiente, clara y basada en evidencia científica."
            },
            {
                question: "¿Cuál es la diferencia entre diagnóstico independiente y tratamiento?",
                answer: "El diagnóstico independiente sirve para identificar la causa y la naturaleza del problema sin interés comercial en el tratamiento que pueda venir después. El tratamiento es la fase posterior, que puede ser necesaria o no según el diagnóstico real."
            }
        ]
    },
    it: {
        seoTitle: "Il Portogallo ha il secondo peggior problema di muffa in Europa MoldCheck.pt",
        seoDescription: "Il Portogallo ha il secondo peggior problema di muffa in Europa. Dati Eurostat, cause strutturali e assenza di diagnosi indipendente spiegati.",
        focusKeyword: "muffa Portogallo Europa",
        title: "Il Portogallo ha il secondo peggior problema di muffa in Europa. Quasi nessuno ne parla.",
        byline: "di MoldCheck.pt",
        body: [
            "Ho scoperto il problema della muffa in Portogallo nel modo in cui la maggior parte delle persone scopre qualcosa di scomodo: di persona.",
            "Vengo dall'Olanda. Ho vissuto in case costruite con criteri di isolamento che in Portogallo sarebbero considerati di lusso. Quando mi sono trasferito a Lisbona, ho iniziato ad accusare sintomi che non avevo mai avuto: naso chiuso cronico, tosse secca, stanchezza. Ho attribuito tutto all'\"adattamento\" al clima diverso, alla nuova città.",
            "Poi ho comprato un misuratore di umidità. Settantotto percento di umidità relativa in camera da letto, nel mese di novembre. Ho iniziato a guardare gli angoli. Ho trovato quello che stavo cercando.",
            "## I numeri che nessuno pubblica in evidenza",
            "Il programma EU-SILC di Eurostat pubblica ogni anno dati sull'abitazione in Europa. Tra le variabili rilevate c'è la percentuale di famiglie che segnalano problemi di umidità o muffa nelle proprie abitazioni.",
            "Il dato più recente disponibile per il Portogallo: 24-26% delle famiglie.",
            "Soltanto Cipro fa peggio tra i paesi dell'Unione Europea.",
            "Per confronto, la media europea è circa il 13-15%. Il Portogallo è quasi il doppio.",
            "Questi dati esistono. Sono pubblici. Non sono controversi. Ma sono assenti dal dibattito pubblico portoghese, dalle campagne di salute pubblica, e dalla conversazione sui problemi dell'abitazione che in Portogallo si concentra quasi esclusivamente sul costo degli affitti.",
            "## Le ragioni strutturali del problema",
            "Il problema della muffa in Portogallo non è casuale. È il risultato prevedibile di tre fattori che si sommano:",
            "Il parco edilizio. L'82% degli edifici residenziali portoghesi è stato costruito prima del 2000 prima di qualsiasi requisito significativo di isolamento termico o efficienza energetica. Questi edifici hanno ponti termici massicci: telai di finestre in alluminio senza taglio termico, pareti esterne sottili, solai non isolati. Quando l'aria interna umida entra in contatto con queste superfici fredde in inverno, condensa.",
            "Il clima. Porto ha un'umidità relativa media annua del 77%. Lisbona, nelle settimane più umide dell'inverno, raggiunge l'84%. Questi valori non sono eccezionali per il Portogallo sono normali. Un edificio non progettato per gestire queste condizioni produce condensa strutturale, non accidentale.",
            "La cultura del riscaldamento. La tradizione portoghese di non riscaldare le case d'inverno per ragioni economiche e storiche mantiene le superfici delle pareti fredde anche nelle giornate più umide. Questo amplifica la condensa su ogni superficie che non raggiunge la temperatura del punto di rugiada.",
            "Il risultato è che circa un portoghese su quattro vive in una casa con problemi di umidità o muffa non perché non si curi della propria abitazione, ma perché vive in un edificio strutturalmente inadeguato al proprio clima.",
            "## Il mercato della diagnosi non è indipendente",
            "In Portogallo esiste un mercato strutturato delle aziende di trattamento contro l'umidità. Le principali offrono diagnosi gratuite a domicilio.",
            "Questa offerta è intelligente dal punto di vista commerciale: l'azienda che diagnostica il problema è la stessa che venderà la soluzione. Non esiste un conflitto di interessi dichiarato ma esiste strutturalmente.",
            "Non si tratta di accusare queste aziende di incompetenza o malafede. Si tratta di notare che non esiste in Portogallo nessuna entità che valuti la muffa in un'abitazione senza guadagnare dal trattamento che ne consegue.",
            "Per gli italiani residenti in Portogallo o per chiunque stia valutando un acquisto immobiliare o un contratto di locazione questa asimmetria è importante da comprendere.",
            "## Quello che manca: un sistema di ispezione indipendente",
            "In Francia esiste il diagnostiqueur immobilier un professionista certificato e indipendente che valuta le condizioni di un immobile senza interesse nelle soluzioni che propone. In Germania esiste il Sachverständiger für Schimmelpilze. Nel Regno Unito esistono i damp surveyors accreditati.",
            "In Portogallo non esiste nulla di equivalente per la diagnostica residenziale dell'umidità e della muffa. Non esiste un registro, non esiste una certificazione riconosciuta, non esiste un quadro normativo che separi chi diagnostica da chi tratta.",
            "Il MoldCheck.pt e la InspectOS esistono per cominciare a colmare questo vuoto con ispettori che fatturano il proprio tempo, senza commissioni sulle soluzioni che seguono.",
            "Non è la soluzione sistemica che il Portogallo necessita. Ma è la soluzione disponibile ora, per le persone che hanno bisogno di sapere con che cosa hanno a che fare prima di decidere cosa fare.",
            "## Perché questo riguarda anche gli italiani in Portogallo",
            "La comunità italiana in Portogallo è cresciuta significativamente negli ultimi anni. Molti arrivano senza conoscere il mercato immobiliare locale, senza la rete di contatti che aiuta i portoghesi a navigare i problemi dell'abitazione, e spesso con aspettative di qualità costruttiva calibrate sull'Italia che, nonostante i suoi problemi, ha standard edilizi mediamente superiori al Portogallo.",
            "Comprare o affittare casa in Portogallo senza una valutazione indipendente dell'umidità è un rischio reale. Non perché i venditori o i proprietari siano necessariamente disonesti, ma perché i problemi di umidità sono spesso non visibili in estate la stagione in cui la maggior parte degli acquisti viene effettuata e perché non esiste un obbligo di disclosure equivalente a quello vigente in molti altri paesi europei.",
            "## Quello che speriamo cambi",
            "Una parte della risposta è normativa: la trasposizione della direttiva EPBD 2024/1275 che dovrà avvenire entro maggio 2026 porterà nuovi requisiti sulle prestazioni energetiche degli edifici, inclusi quelli legati all'umidità. Questo creerà pressione strutturale verso un'edilizia più sana.",
            "Un'altra parte è culturale: la muffa nelle abitazioni viene ancora trattata come un problema estetico o di manutenzione ordinaria, non come un problema di salute pubblica. Finché questa percezione non cambia, il problema sistemico rimane invisibile.",
            "Il MoldCheck.pt non può cambiare il mercato immobiliare portoghese. Può però offrire informazioni oneste alle persone che ne hanno bisogno in tutte le lingue di chi vive in Portogallo."
        ],
        disclosure: "MoldCheck.pt è un'iniziativa del FAIRBANK Group, la società che gestisce InspectOS piattaforma di ispezione immobiliare indipendente in Portogallo. Non vendiamo trattamenti contro l'umidità. Non riceviamo commissioni da aziende di risanamento. Quando raccomandiamo un'ispezione o un'analisi di laboratorio, è perché riteniamo che ne abbiate bisogno non perché guadagniamo dal trattamento che ne consegue.",
        sources: [
            {
                label: "Eurostat EU-SILC, Housing conditions data (2023)"
            },
            {
                label: "INE, Censos 2021 Caracterização do parque habitacional"
            },
            {
                label: "EPBD Direttiva 2024/1275/UE"
            },
            {
                label: "Taborda-Barata et al., Pulmonology (2023)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            }
        ],
        faq: [
            {
                question: "Il Portogallo ha davvero uno dei peggiori problemi di muffa in Europa?",
                answer: "Sì. Secondo i dati EU-SILC di Eurostat, il Portogallo compare regolarmente tra i paesi con la più alta percentuale di persone che vivono in abitazioni colpite da umidità o muffa, al di sopra della media europea."
            },
            {
                question: "Perché il problema è così frequente in Portogallo?",
                answer: "Perché si combinano più fattori: un patrimonio abitativo invecchiato, molti edifici senza isolamento adeguato, un'alta prevalenza di umidità e una scarsa consapevolezza pubblica del legame tra casa e salute."
            },
            {
                question: "Perché è problematico che la diagnosi venga fatta da chi vende il trattamento?",
                answer: "Perché esiste un conflitto di interesse strutturale. Quando la stessa azienda diagnostica il problema e vende la soluzione, il consumatore non ha un secondo parere indipendente prima di prendere decisioni potenzialmente costose."
            },
            {
                question: "MoldCheck.pt vende trattamenti contro umidità o muffa?",
                answer: "No. MoldCheck.pt non vende trattamenti contro l'umidità né servizi di bonifica. Lo scopo del sito è offrire informazioni indipendenti, chiare e basate su evidenze scientifiche."
            },
            {
                question: "Qual è la differenza tra diagnosi indipendente e trattamento?",
                answer: "La diagnosi indipendente serve a identificare la causa e la natura del problema senza interesse commerciale"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a5MoldRiskContent",
    ()=>a5MoldRiskContent,
    "a5MoldRiskSlugs",
    ()=>a5MoldRiskSlugs
]);
const a5MoldRiskSlugs = {
    pt: "guia-completo-avaliar-risco-bolor-casa",
    en: "assess-mold-risk-home-room-by-room-guide",
    fr: "evaluer-risque-moisissures-logement-guide-piece-par-piece",
    de: "schimmelrisiko-wohnung-selbst-beurteilen-leitfaden",
    nl: "schimmelrisico-woning-beoordelen-kamer-voor-kamer-gids",
    it: "valutare-rischio-muffa-casa-guida-stanza-per-stanza",
    es: "evaluar-riesgo-moho-vivienda-guia-habitacion-por-habitacion"
};
const a5MoldRiskContent = {
    pt: {
        seoTitle: "Guia Completo: Avaliar o Risco de Bolor em Casa MoldCheck.pt",
        seoDescription: "Guia de inspecção divisão a divisão para avaliar o risco de bolor em casa. Checklist de 20 pontos, tabela localização → causa, e quando pedir ajuda profissional.",
        focusKeyword: "avaliar risco bolor casa",
        title: "Guia Completo: Como Avaliar o Risco de Bolor em Casa, Divisão a Divisão",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "A maioria das pessoas descobre que tem bolor quando já é tarde demais quando a mancha é grande, quando os sintomas de saúde já estão instalados, ou quando um técnico de tratamento lhes diz que o problema é grave e caro de resolver.",
            "Este guia existe para que isso não aconteça. Para que possa fazer uma avaliação sistemática da sua casa antes de precisar de ajuda externa e para que, se precisar, chegue a essa conversa com informação suficiente para fazer as perguntas certas.",
            "## O que este guia cobre",
            "Este guia cobre quatro áreas principais: os sinais de alerta que a maioria das pessoas ignora; uma inspecção divisão a divisão com os pontos críticos de cada espaço; uma checklist de 20 pontos para documentar o que encontrou; e uma tabela de localização → causa provável para interpretar o que viu.",
            "Não é um substituto para uma inspecção profissional com equipamento de medição. É o que deve fazer antes e o que lhe permite perceber se precisa de uma.",
            "## Sinais de alerta que a maioria das pessoas ignora",
            "O bolor visível é o sinal mais óbvio, mas raramente é o primeiro. Antes de aparecer, há outros indicadores que merecem atenção.",
            "Cheiro a mofo sem fonte visível. Um cheiro persistente a húmido ou a terra, especialmente em quartos fechados ou após períodos de chuva, é frequentemente o primeiro sinal de bolor oculto. O bolor produz compostos orgânicos voláteis (COVs) que têm cheiro característico mesmo quando a colónia ainda não é visível.",
            "Condensação recorrente nas janelas. Gotas de água no interior dos vidros, especialmente de manhã, indicam que a humidade relativa do ar interior está alta. Isso não causa bolor directamente, mas cria as condições para ele.",
            "Manchas de humidade nas paredes ou tectos. Manchas amareladas, acastanhadas ou com contornos irregulares indicam que a água está a penetrar ou a acumular-se. O bolor segue-se tipicamente em semanas a meses.",
            "Tinta a descascar ou a emborcar. A tinta perde aderência quando a parede por baixo está húmida. É um sinal de humidade activa, não apenas de má qualidade da tinta.",
            "Sintomas de saúde que melhoram fora de casa. Tosse persistente, congestão nasal, olhos irritados, ou fadiga que melhora quando passa tempo fora de casa são sinais que merecem investigação séria.",
            "## Inspecção divisão a divisão",
            "Casa de banho: A casa de banho é o espaço de maior risco em qualquer habitação. Humidade elevada, superfícies frias, e ventilação frequentemente inadequada criam condições quase ideais para o bolor. Verificar: juntas de silicone entre a banheira/base de duche e as paredes; canto superior das paredes, especialmente nos cantos opostos à janela ou extractor; parte inferior das paredes atrás da sanita e do lavatório; tecto, especialmente se não houver extractor ou se o extractor não funcionar correctamente; parte inferior de tapetes de casa de banho.",
            "Cozinha: A cozinha produz grandes quantidades de vapor cozinhar, lavar louça, e o próprio frigorífico contribuem para a humidade do ar. Verificar: parede atrás do frigorífico; parte inferior dos armários sob o lava-loiça; juntas de silicone entre a bancada e a parede; tecto acima do fogão; interior dos armários de canto.",
            "Quartos: Os quartos são frequentemente subestimados como fonte de bolor, mas são espaços onde se passa muito tempo e onde o bolor tem impacto directo na saúde. Verificar: parede exterior, especialmente nos cantos; parede atrás dos roupeiros encostados a paredes exteriores; janelas e peitoris; parte inferior das paredes em pisos térreos ou caves. Acção preventiva: afastar os roupeiros das paredes exteriores pelo menos 5 cm.",
            "Sala de estar: Verificar paredes exteriores orientadas a norte ou noroeste; zona em torno de pontes térmicas visíveis pilares de betão, vigas, e molduras de janelas metálicas; rodapés e parte inferior das paredes em pisos térreos; atrás de móveis encostados a paredes exteriores.",
            "Cave e garagem: Verificar paredes e pavimento em contacto com o solo; sinais de infiltração de água manchas de calcário (eflorescências brancas) nas paredes; cheiro a mofo; estado do isolamento de tubagens.",
            "## Checklist de 20 pontos",
            "Exterior e estrutura: (1) Há sinais de infiltração de água na cobertura ou nas caleiras? (2) As paredes exteriores têm fissuras ou zonas de humidade visível? (3) O terreno em torno do edifício drena a água para longe das fundações? (4) As janelas têm vedação adequada?",
            "Casa de banho: (5) As juntas de silicone estão intactas e sem escurecimento? (6) O extractor funciona e evacua para o exterior? (7) Há bolor visível no tecto ou nos cantos superiores? (8) A base do duche ou banheira está sem fissuras ou juntas abertas?",
            "Cozinha: (9) Há sinais de fuga sob o lava-loiça? (10) A parede atrás do frigorífico está seca e sem manchas? (11) O exaustor evacua para o exterior? (12) Os armários de canto têm circulação de ar adequada?",
            "Quartos e sala: (13) Há condensação recorrente nas janelas de manhã? (14) Os cantos das paredes exteriores estão secos e sem manchas? (15) Os roupeiros estão afastados das paredes exteriores? (16) Há cheiro a mofo em algum quarto?",
            "Cave, garagem e espaços técnicos: (17) Há eflorescências nas paredes da cave ou garagem? (18) O pavimento da cave está seco após períodos de chuva intensa? (19) As tubagens de água fria têm sinais de condensação? (20) Há bolor visível em qualquer superfície da cave ou garagem?",
            "## Tabela: localização → causa provável",
            "Canto superior de parede exterior → Ponte térmica por isolamento insuficiente. O canto perde calor mais rapidamente e atinge o ponto de orvalho primeiro.",
            "Parede atrás de roupeiro → Falta de circulação de ar combinada com parede fria. Solução: afastar o roupeiro e melhorar a ventilação do quarto.",
            "Tecto da casa de banho → Ventilação insuficiente. O vapor de água sobe e condensa no tecto.",
            "Base das paredes (piso térreo) → Humidade ascensional por capilaridade. Comum em edifícios sem barreira de impermeabilização horizontal.",
            "Zona em torno de janelas metálicas → Ponte térmica pela caixilharia. O metal conduz o frio do exterior para o interior.",
            "Parede interior (não exterior) → Fuga de água de canalização. Verificar tubagens na parede ou no piso acima.",
            "Tecto com mancha irregular → Infiltração pela cobertura ou pela habitação acima.",
            "Toda a superfície de uma parede exterior → Humidade de condensação generalizada por ventilação insuficiente.",
            "## Quando pedir ajuda profissional",
            "Esta inspecção visual tem limites. Pedir ajuda profissional quando: o bolor cobre uma área superior a 1 m²; há bolor recorrente no mesmo local após limpeza; há sintomas de saúde persistentes que melhoram fora de casa; a origem da humidade não é clara após a inspecção visual; há suspeita de bolor oculto (cheiro sem fonte visível); o imóvel é arrendado e precisa de documentação.",
            "Uma inspecção com medidor de humidade e câmara termográfica permite identificar zonas húmidas ocultas, pontes térmicas, e a extensão real do problema sem o conflito de interesse de quem vende o tratamento que se segue.",
            "## Uma nota sobre o que este guia não substitui",
            "Este guia foi concebido para dar-lhe informação suficiente para fazer uma avaliação inicial informada. Não substitui uma inspecção profissional com equipamento de medição, nem aconselhamento médico se tiver sintomas de saúde."
        ],
        disclosure: "Pieter Paul Castelein trabalha no FAIRBANK Group, a empresa por detrás da InspectOS plataforma de inspeção independente de imóveis em Portugal. O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Posso fazer esta inspecção eu próprio ou preciso de um profissional?",
                answer: "Pode e deve fazer uma inspecção visual inicial você próprio. Este guia dá-lhe as ferramentas para isso. Para problemas acima de 1 m², bolor recorrente, ou sintomas de saúde, uma inspecção profissional com equipamento de medição é recomendada."
            },
            {
                question: "O que faço se encontrar bolor durante a inspecção?",
                answer: "Documente com fotografias e notas sobre a localização e extensão. Não limpe imediatamente a localização e o padrão do bolor são informação diagnóstica importante."
            },
            {
                question: "Com que frequência devo fazer esta inspecção?",
                answer: "Uma vez por ano, idealmente no final do inverno (março/abril), quando os efeitos da estação húmida são mais visíveis."
            },
            {
                question: "O cheiro a mofo sem bolor visível é preocupante?",
                answer: "Sim. O cheiro a mofo indica a presença de bolor activo, mesmo que não seja visível. O bolor oculto é frequentemente mais problemático do que o visível porque não é tratado."
            },
            {
                question: "A minha casa é nova. Posso ter bolor na mesma?",
                answer: "Sim. Casas novas podem ter bolor por humidade de construção, por problemas de ventilação, ou por defeitos de construção."
            }
        ]
    },
    en: {
        seoTitle: "Complete Guide: Assessing Mold Risk at Home, Room by Room MoldCheck.pt",
        seoDescription: "A room-by-room inspection guide for assessing mold risk at home. 20-point checklist, location-to-cause table, and when to call a professional.",
        focusKeyword: "assess mold risk home",
        title: "Complete Guide: How to Assess Mold Risk at Home, Room by Room",
        byline: "By Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Most people discover they have mold when it is already too late when the patch is large, when health symptoms are already established, or when a treatment technician tells them the problem is serious and expensive to fix.",
            "This guide exists so that does not happen. So you can make a systematic assessment of your home before needing outside help and so that, if you do need it, you arrive at that conversation with enough information to ask the right questions.",
            "## What this guide covers",
            "This guide covers four main areas: the warning signs most people ignore; a room-by-room inspection with the critical points for each space; a 20-point checklist to document what you found; and a location-to-probable-cause table to interpret what you saw.",
            "It is not a substitute for a professional inspection with measurement equipment. It is what you should do first and what allows you to understand whether you need one.",
            "## Warning signs most people ignore",
            "Visible mold is the most obvious sign, but it is rarely the first. Before it appears, there are other indicators worth attention.",
            "Musty smell without a visible source. A persistent damp or earthy smell, especially in closed rooms or after periods of rain, is often the first sign of hidden mold. Mold produces volatile organic compounds (VOCs) that have a characteristic smell even when the colony is not yet visible.",
            "Recurring condensation on windows. Water droplets on the inside of glass, especially in the morning, indicate that the indoor relative humidity is high. This does not directly cause mold, but it creates the conditions for it.",
            "Damp stains on walls or ceilings. Yellowish, brownish, or irregularly outlined stains indicate that water is penetrating or accumulating. Mold typically follows within weeks to months.",
            "Peeling or bubbling paint. Paint loses adhesion when the wall beneath is damp. It is a sign of active moisture, not just poor paint quality.",
            "Health symptoms that improve away from home. Persistent cough, nasal congestion, irritated eyes, or fatigue that improves when you spend time away from home are signs that deserve serious investigation.",
            "## Room-by-room inspection",
            "Bathroom: The bathroom is the highest-risk space in any home. High humidity, cold surfaces, and frequently inadequate ventilation create near-ideal conditions for mold. Check: silicone joints between the bath/shower base and walls; upper corners of walls, especially those opposite the window or extractor; lower walls behind the toilet and basin; ceiling, especially if there is no extractor or if it does not work correctly; underside of bathroom mats.",
            "Kitchen: The kitchen produces large amounts of steam cooking, washing dishes, and the refrigerator itself all contribute to indoor humidity. Check: wall behind the refrigerator; underside of cabinets under the sink; silicone joints between the worktop and wall; ceiling above the hob; interior of corner cabinets.",
            "Bedrooms: Bedrooms are often underestimated as a source of mold, but they are spaces where you spend a lot of time and where mold has a direct health impact. Check: exterior wall, especially in corners; wall behind wardrobes pushed against exterior walls; windows and sills; lower walls in ground-floor or basement units. Preventive action: move wardrobes at least 5 cm from exterior walls.",
            "Living room: Check exterior walls facing north or northwest; areas around visible thermal bridges concrete pillars, beams, and metal window frames; skirting boards and lower walls on ground floors; behind furniture pushed against exterior walls.",
            "Basement and garage: Check walls and floors in contact with the ground; signs of water infiltration white mineral deposits (efflorescence) on walls; musty smell; condition of cold-water pipe insulation.",
            "## 20-point checklist",
            "Exterior and structure: (1) Are there signs of water infiltration in the roof or gutters? (2) Do exterior walls have cracks or visible damp patches? (3) Does the ground around the building drain water away from the foundations? (4) Do windows have adequate sealing?",
            "Bathroom: (5) Are silicone joints intact and without darkening? (6) Does the extractor work and vent to the outside? (7) Is there visible mold on the ceiling or upper corners? (8) Is the shower or bath base free of cracks or open joints?",
            "Kitchen: (9) Are there signs of leaks under the sink? (10) Is the wall behind the refrigerator dry and stain-free? (11) Does the extractor vent to the outside? (12) Do corner cabinets have adequate air circulation?",
            "Bedrooms and living room: (13) Is there recurring condensation on windows in the morning? (14) Are the corners of exterior walls dry and stain-free? (15) Are wardrobes moved away from exterior walls? (16) Is there a musty smell in any room?",
            "Basement, garage and technical spaces: (17) Is there efflorescence on basement or garage walls? (18) Is the basement floor dry after heavy rain? (19) Do cold-water pipes show signs of condensation? (20) Is there visible mold on any surface in the basement or garage?",
            "## Location-to-probable-cause table",
            "Upper corner of exterior wall Thermal bridge from insufficient insulation. The corner loses heat faster and reaches the dew point first.",
            "Wall behind wardrobe Lack of air circulation combined with cold wall. Solution: move the wardrobe and improve room ventilation.",
            "Bathroom ceiling Insufficient ventilation. Water vapour rises and condenses on the ceiling.",
            "Base of walls (ground floor) Rising damp by capillarity. Common in buildings without a horizontal damp-proof course.",
            "Area around metal window frames Thermal bridge through the frame. Metal conducts cold from outside to inside.",
            "Interior wall (not exterior) Water leak from plumbing. Check pipes in the wall or the floor above.",
            "Ceiling with irregular stain Infiltration through the roof or from the unit above.",
            "Entire surface of an exterior wall Generalised condensation damp from insufficient ventilation.",
            "## When to call a professional",
            "This visual inspection has limits. Call a professional when: mold covers an area larger than 1 m²; mold recurs in the same location after cleaning; there are persistent health symptoms that improve away from home; the source of moisture is unclear after the visual inspection; hidden mold is suspected (smell without visible source); the property is rented and documentation is needed.",
            "An inspection with a moisture meter and thermal imaging camera can identify hidden damp zones, thermal bridges, and the real extent of the problem without the conflict of interest of someone who sells the treatment that follows.",
            "## A note on what this guide does not replace",
            "This guide is designed to give you enough information to make an informed initial assessment. It does not replace a professional inspection with measurement equipment, or medical advice if you have health symptoms."
        ],
        disclosure: "Pieter Paul Castelein works at FAIRBANK Group, the company behind InspectOS an independent property inspection platform in Portugal. MoldCheck.pt is a FAIRBANK Group initiative. We do not sell damp treatments. We do not take commissions from remediation companies.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Can I do this inspection myself or do I need a professional?",
                answer: "You can and should do an initial visual inspection yourself. This guide gives you the tools for that. For problems larger than 1 m², recurring mold, or health symptoms, a professional inspection with measurement equipment is recommended."
            },
            {
                question: "What do I do if I find mold during the inspection?",
                answer: "Document with photographs and notes on location and extent. Do not clean immediately the location and pattern of the mold is important diagnostic information."
            },
            {
                question: "How often should I do this inspection?",
                answer: "Once a year, ideally at the end of winter (March/April), when the effects of the wet season are most visible."
            },
            {
                question: "Is a musty smell without visible mold a concern?",
                answer: "Yes. A musty smell indicates the presence of active mold, even if not visible. Hidden mold is often more problematic than visible mold because it is not treated."
            },
            {
                question: "My home is new. Can I still have mold?",
                answer: "Yes. New homes can have mold from construction moisture, ventilation problems, or construction defects."
            }
        ]
    },
    fr: {
        seoTitle: "Guide Complet : Évaluer le Risque de Moisissures chez Soi, Pièce par Pièce MoldCheck.pt",
        seoDescription: "Guide d'inspection pièce par pièce pour évaluer le risque de moisissures. Checklist de 20 points, tableau localisation → cause, et quand appeler un professionnel.",
        focusKeyword: "évaluer risque moisissures logement",
        title: "Guide Complet : Comment Évaluer le Risque de Moisissures chez Soi, Pièce par Pièce",
        byline: "Par Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La plupart des gens découvrent qu'ils ont des moisissures quand il est déjà trop tard quand la tache est grande, quand les symptômes de santé sont déjà installés, ou quand un technicien de traitement leur dit que le problème est grave et coûteux à résoudre.",
            "Ce guide existe pour que cela n'arrive pas. Pour que vous puissiez faire une évaluation systématique de votre logement avant d'avoir besoin d'aide extérieure et pour que, si vous en avez besoin, vous arriviez à cette conversation avec suffisamment d'informations pour poser les bonnes questions.",
            "## Ce que ce guide couvre",
            "Ce guide couvre quatre domaines principaux : les signaux d'alerte que la plupart des gens ignorent ; une inspection pièce par pièce avec les points critiques de chaque espace ; une checklist de 20 points pour documenter ce que vous avez trouvé ; et un tableau localisation → cause probable pour interpréter ce que vous avez vu.",
            "Ce n'est pas un substitut à une inspection professionnelle avec équipement de mesure. C'est ce que vous devez faire en premier et ce qui vous permet de comprendre si vous en avez besoin.",
            "## Signaux d'alerte que la plupart des gens ignorent",
            "Les moisissures visibles sont le signe le plus évident, mais rarement le premier. Avant qu'elles apparaissent, d'autres indicateurs méritent attention.",
            "Odeur de moisi sans source visible. Une odeur persistante d'humidité ou de terre, surtout dans des pièces fermées ou après des périodes de pluie, est souvent le premier signe de moisissures cachées.",
            "Condensation récurrente sur les fenêtres. Des gouttes d'eau à l'intérieur des vitres, surtout le matin, indiquent que l'humidité relative de l'air intérieur est élevée.",
            "Taches d'humidité sur les murs ou les plafonds. Des taches jaunâtres, brunâtres ou aux contours irréguliers indiquent que l'eau pénètre ou s'accumule.",
            "Peinture qui s'écaille ou se boursoufle. La peinture perd son adhérence quand le mur en dessous est humide.",
            "Symptômes de santé qui s'améliorent hors du logement. Toux persistante, congestion nasale, yeux irrités, ou fatigue qui s'améliore quand vous passez du temps hors de chez vous.",
            "## Inspection pièce par pièce",
            "Salle de bain : La salle de bain est l'espace le plus à risque dans tout logement. Vérifier : joints en silicone entre la baignoire/base de douche et les murs ; coins supérieurs des murs, surtout ceux opposés à la fenêtre ou à l'extracteur ; partie inférieure des murs derrière les toilettes et le lavabo ; plafond ; dessous des tapis de bain.",
            "Cuisine : La cuisine produit de grandes quantités de vapeur. Vérifier : mur derrière le réfrigérateur ; dessous des placards sous l'évier ; joints en silicone entre le plan de travail et le mur ; plafond au-dessus de la cuisinière ; intérieur des placards d'angle.",
            "Chambres : Les chambres sont souvent sous-estimées comme source de moisissures. Vérifier : mur extérieur, surtout dans les coins ; mur derrière les armoires poussées contre les murs extérieurs ; fenêtres et rebords ; partie inférieure des murs en rez-de-chaussée. Action préventive : éloigner les armoires des murs extérieurs d'au moins 5 cm.",
            "Salon : Vérifier les murs extérieurs orientés au nord ou au nord-ouest ; zones autour des ponts thermiques visibles ; plinthes et partie inférieure des murs en rez-de-chaussée ; derrière les meubles poussés contre les murs extérieurs.",
            "Cave et garage : Vérifier les murs et sols en contact avec le sol ; signes d'infiltration d'eau dépôts minéraux blancs (efflorescences) sur les murs ; odeur de moisi ; état de l'isolation des tuyaux d'eau froide.",
            "## Checklist de 20 points",
            "Extérieur et structure : (1) Y a-t-il des signes d'infiltration d'eau dans la toiture ou les gouttières ? (2) Les murs extérieurs ont-ils des fissures ou des zones d'humidité visibles ? (3) Le terrain autour du bâtiment draine-t-il l'eau loin des fondations ? (4) Les fenêtres ont-elles une étanchéité adéquate ?",
            "Salle de bain : (5) Les joints en silicone sont-ils intacts et sans noircissement ? (6) L'extracteur fonctionne-t-il et évacue-t-il vers l'extérieur ? (7) Y a-t-il des moisissures visibles au plafond ou dans les coins supérieurs ? (8) La base de la douche ou de la baignoire est-elle sans fissures ni joints ouverts ?",
            "Cuisine : (9) Y a-t-il des signes de fuite sous l'évier ? (10) Le mur derrière le réfrigérateur est-il sec et sans taches ? (11) L'extracteur évacue-t-il vers l'extérieur ? (12) Les placards d'angle ont-ils une circulation d'air adéquate ?",
            "Chambres et salon : (13) Y a-t-il une condensation récurrente sur les fenêtres le matin ? (14) Les coins des murs extérieurs sont-ils secs et sans taches ? (15) Les armoires sont-elles éloignées des murs extérieurs ? (16) Y a-t-il une odeur de moisi dans une pièce ?",
            "Cave, garage et espaces techniques : (17) Y a-t-il des efflorescences sur les murs de la cave ou du garage ? (18) Le sol de la cave est-il sec après de fortes pluies ? (19) Les tuyaux d'eau froide montrent-ils des signes de condensation ? (20) Y a-t-il des moisissures visibles sur une surface de la cave ou du garage ?",
            "## Tableau : localisation → cause probable",
            "Coin supérieur d'un mur extérieur Pont thermique par isolation insuffisante. Le coin perd de la chaleur plus rapidement et atteint le point de rosée en premier.",
            "Mur derrière une armoire Manque de circulation d'air combiné à un mur froid. Solution : éloigner l'armoire et améliorer la ventilation de la pièce.",
            "Plafond de la salle de bain Ventilation insuffisante. La vapeur d'eau monte et se condense au plafond.",
            "Base des murs (rez-de-chaussée) Humidité ascensionnelle par capillarité. Fréquent dans les bâtiments sans barrière d'imperméabilisation horizontale.",
            "Zone autour des fenêtres métalliques Pont thermique par la menuiserie. Le métal conduit le froid de l'extérieur vers l'intérieur.",
            "Mur intérieur (non extérieur) Fuite d'eau de plomberie. Vérifier les tuyaux dans le mur ou le sol au-dessus.",
            "Plafond avec tache irrégulière Infiltration par la toiture ou depuis le logement au-dessus.",
            "Toute la surface d'un mur extérieur Humidité de condensation généralisée par ventilation insuffisante.",
            "## Quand appeler un professionnel",
            "Cette inspection visuelle a des limites. Appeler un professionnel quand : les moisissures couvrent une surface supérieure à 1 m² ; les moisissures réapparaissent au même endroit après nettoyage ; il y a des symptômes de santé persistants qui s'améliorent hors du logement ; l'origine de l'humidité n'est pas claire après l'inspection visuelle ; des moisissures cachées sont suspectées ; le bien est loué et une documentation est nécessaire.",
            "Une inspection avec un humidimètre et une caméra thermique permet d'identifier les zones humides cachées, les ponts thermiques, et l'étendue réelle du problème sans le conflit d'intérêts de celui qui vend le traitement qui suit.",
            "## Une note sur ce que ce guide ne remplace pas",
            "Ce guide est conçu pour vous donner suffisamment d'informations pour faire une évaluation initiale éclairée. Il ne remplace pas une inspection professionnelle avec équipement de mesure, ni un avis médical si vous avez des symptômes de santé."
        ],
        disclosure: "Pieter Paul Castelein travaille au sein du FAIRBANK Group, la société à l'origine d'InspectOS plateforme d'inspection indépendante de biens immobiliers au Portugal. MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Puis-je faire cette inspection moi-même ou ai-je besoin d'un professionnel ?",
                answer: "Vous pouvez et devez faire une inspection visuelle initiale vous-même. Ce guide vous en donne les outils. Pour les problèmes de plus de 1 m², les moisissures récurrentes, ou les symptômes de santé, une inspection professionnelle avec équipement de mesure est recommandée."
            },
            {
                question: "Que faire si je trouve des moisissures pendant l'inspection ?",
                answer: "Documentez avec des photos et des notes sur la localisation et l'étendue. Ne nettoyez pas immédiatement la localisation et le motif des moisissures sont des informations diagnostiques importantes."
            },
            {
                question: "À quelle fréquence dois-je faire cette inspection ?",
                answer: "Une fois par an, idéalement à la fin de l'hiver (mars/avril), quand les effets de la saison humide sont les plus visibles."
            },
            {
                question: "Une odeur de moisi sans moisissures visibles est-elle préoccupante ?",
                answer: "Oui. Une odeur de moisi indique la présence de moisissures actives, même si elles ne sont pas visibles. Les moisissures cachées sont souvent plus problématiques que les moisissures visibles car elles ne sont pas traitées."
            },
            {
                question: "Mon logement est neuf. Puis-je quand même avoir des moisissures ?",
                answer: "Oui. Les logements neufs peuvent avoir des moisissures dues à l'humidité de construction, à des problèmes de ventilation, ou à des défauts de construction."
            }
        ]
    },
    de: {
        seoTitle: "Vollständiger Leitfaden: Schimmelrisiko in der Wohnung selbst beurteilen MoldCheck.pt",
        seoDescription: "Zimmer-für-Zimmer-Inspektionsleitfaden zur Beurteilung des Schimmelrisikos. 20-Punkte-Checkliste, Standort-Ursache-Tabelle und wann ein Fachmann gerufen werden sollte.",
        focusKeyword: "Schimmelrisiko Wohnung beurteilen",
        title: "Vollständiger Leitfaden: Wie Sie das Schimmelrisiko in Ihrer Wohnung selbst beurteilen, Zimmer für Zimmer",
        byline: "Von Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Die meisten Menschen entdecken Schimmel erst, wenn es bereits zu spät ist wenn der Fleck groß ist, wenn Gesundheitssymptome bereits aufgetreten sind oder wenn ein Behandlungstechniker ihnen sagt, dass das Problem ernst und teuer zu beheben ist.",
            "Dieser Leitfaden soll verhindern, dass das passiert. Damit Sie eine systematische Beurteilung Ihrer Wohnung vornehmen können, bevor Sie externe Hilfe benötigen und damit Sie, falls Sie diese benötigen, mit genügend Informationen in dieses Gespräch gehen, um die richtigen Fragen zu stellen.",
            "## Was dieser Leitfaden abdeckt",
            "Dieser Leitfaden behandelt vier Hauptbereiche: die Warnsignale, die die meisten Menschen ignorieren; eine Zimmer-für-Zimmer-Inspektion mit den kritischen Punkten jedes Raums; eine 20-Punkte-Checkliste zur Dokumentation Ihrer Befunde; und eine Standort-Ursache-Tabelle zur Interpretation des Gesehenen.",
            "Er ist kein Ersatz für eine professionelle Inspektion mit Messgeräten. Er ist das, was Sie zuerst tun sollten und was Ihnen ermöglicht zu verstehen, ob Sie eine solche benötigen.",
            "## Warnsignale, die die meisten Menschen ignorieren",
            "Sichtbarer Schimmel ist das offensichtlichste Zeichen, aber selten das erste. Bevor er erscheint, gibt es andere Indikatoren, die Aufmerksamkeit verdienen.",
            "Muffiger Geruch ohne sichtbare Quelle. Ein anhaltender feuchter oder erdiger Geruch, besonders in geschlossenen Räumen oder nach Regenperioden, ist oft das erste Zeichen für versteckten Schimmel.",
            "Wiederkehrende Kondensation an Fenstern. Wassertropfen auf der Innenseite der Scheiben, besonders morgens, zeigen an, dass die relative Luftfeuchtigkeit im Innenraum hoch ist.",
            "Feuchtigkeitsflecken an Wänden oder Decken. Gelbliche, bräunliche oder unregelmäßig umrandete Flecken zeigen an, dass Wasser eindringt oder sich ansammelt.",
            "Abblätternde oder blasenwerfende Farbe. Farbe verliert ihre Haftung, wenn die darunter liegende Wand feucht ist.",
            "Gesundheitssymptome, die sich außerhalb der Wohnung verbessern. Anhaltender Husten, Nasenverstopfung, gereizte Augen oder Müdigkeit, die sich verbessern, wenn Sie Zeit außerhalb verbringen.",
            "## Zimmer-für-Zimmer-Inspektion",
            "Badezimmer: Das Badezimmer ist der risikoreichste Raum in jeder Wohnung. Prüfen: Silikonfugen zwischen Badewanne/Duschwanne und Wänden; obere Ecken der Wände, besonders gegenüber dem Fenster oder Lüfter; untere Wandbereiche hinter Toilette und Waschbecken; Decke; Unterseite von Badematten.",
            "Küche: Die Küche produziert große Mengen Dampf. Prüfen: Wand hinter dem Kühlschrank; Unterseite der Schränke unter der Spüle; Silikonfugen zwischen Arbeitsplatte und Wand; Decke über dem Herd; Inneres von Eckschränken.",
            "Schlafzimmer: Schlafzimmer werden oft als Schimmelquelle unterschätzt. Prüfen: Außenwand, besonders in Ecken; Wand hinter Schränken, die an Außenwände gestellt sind; Fenster und Fensterbänke; untere Wandbereiche in Erdgeschoss- oder Kellerwohnungen. Vorbeugung: Schränke mindestens 5 cm von Außenwänden abrücken.",
            "Wohnzimmer: Außenwände nach Norden oder Nordwesten prüfen; Bereiche um sichtbare Wärmebrücken Betonpfeiler, Balken und Metallfensterrahmen; Sockelleisten und untere Wandbereiche im Erdgeschoss; hinter Möbeln, die an Außenwände gestellt sind.",
            "Keller und Garage: Wände und Böden in Kontakt mit dem Erdreich prüfen; Zeichen von Wasserinfiltration weiße Mineralablagerungen (Ausblühungen) an Wänden; muffiger Geruch; Zustand der Dämmung von Kaltwasserleitungen.",
            "## 20-Punkte-Checkliste",
            "Außenbereich und Struktur: (1) Gibt es Zeichen von Wasserinfiltration im Dach oder in den Dachrinnen? (2) Haben Außenwände Risse oder sichtbare Feuchtigkeitsflecken? (3) Entwässert das Gelände um das Gebäude das Wasser von den Fundamenten weg? (4) Haben Fenster eine ausreichende Abdichtung?",
            "Badezimmer: (5) Sind Silikonfugen intakt und ohne Verfärbung? (6) Funktioniert der Lüfter und entlüftet er nach außen? (7) Gibt es sichtbaren Schimmel an der Decke oder in den oberen Ecken? (8) Ist die Dusch- oder Badewannenbasis frei von Rissen oder offenen Fugen?",
            "Küche: (9) Gibt es Zeichen von Lecks unter der Spüle? (10) Ist die Wand hinter dem Kühlschrank trocken und fleckenfrei? (11) Entlüftet der Abzug nach außen? (12) Haben Eckschränke ausreichende Luftzirkulation?",
            "Schlafzimmer und Wohnzimmer: (13) Gibt es morgens wiederkehrende Kondensation an Fenstern? (14) Sind die Ecken der Außenwände trocken und fleckenfrei? (15) Sind Schränke von Außenwänden abgerückt? (16) Gibt es in einem Zimmer einen muffigen Geruch?",
            "Keller, Garage und technische Räume: (17) Gibt es Ausblühungen an Keller- oder Garagenwänden? (18) Ist der Kellerboden nach starkem Regen trocken? (19) Zeigen Kaltwasserleitungen Kondensationszeichen? (20) Gibt es sichtbaren Schimmel auf einer Oberfläche im Keller oder in der Garage?",
            "## Standort-Ursache-Tabelle",
            "Obere Ecke einer Außenwand Wärmebrücke durch unzureichende Dämmung. Die Ecke verliert Wärme schneller und erreicht den Taupunkt zuerst.",
            "Wand hinter einem Schrank Mangelnde Luftzirkulation kombiniert mit kalter Wand. Lösung: Schrank abrücken und Raumbelüftung verbessern.",
            "Badezimmerdecke Unzureichende Belüftung. Wasserdampf steigt auf und kondensiert an der Decke.",
            "Wandfuß (Erdgeschoss) Aufsteigende Feuchtigkeit durch Kapillarwirkung. Häufig in Gebäuden ohne horizontale Feuchtigkeitssperre.",
            "Bereich um Metallfensterrahmen Wärmebrücke durch den Rahmen. Metall leitet Kälte von außen nach innen.",
            "Innenwand (nicht Außenwand) Wasserleck aus der Rohrleitung. Rohre in der Wand oder im Boden darüber prüfen.",
            "Decke mit unregelmäßigem Fleck Infiltration durch das Dach oder aus der Wohnung darüber.",
            "Gesamte Oberfläche einer Außenwand Verbreitete Kondensationsfeuchtigkeit durch unzureichende Belüftung.",
            "## Wann ein Fachmann gerufen werden sollte",
            "Diese Sichtinspektion hat Grenzen. Einen Fachmann rufen, wenn: Schimmel eine Fläche von mehr als 1 m² bedeckt; Schimmel nach der Reinigung an derselben Stelle wiederkehrt; anhaltende Gesundheitssymptome vorhanden sind, die sich außerhalb der Wohnung verbessern; die Feuchtigkeitsquelle nach der Sichtinspektion unklar ist; versteckter Schimmel vermutet wird; die Immobilie vermietet ist und eine Dokumentation benötigt wird.",
            "Eine Inspektion mit einem Feuchtigkeitsmessgerät und einer Wärmebildkamera kann versteckte Feuchtigkeitszonen, Wärmebrücken und das tatsächliche Ausmaß des Problems identifizieren ohne den Interessenkonflikt desjenigen, der die anschließende Behandlung verkauft.",
            "## Ein Hinweis darauf, was dieser Leitfaden nicht ersetzt",
            "Dieser Leitfaden soll Ihnen genügend Informationen geben, um eine fundierte erste Beurteilung vorzunehmen. Er ersetzt keine professionelle Inspektion mit Messgeräten und keinen ärztlichen Rat bei Gesundheitssymptomen."
        ],
        disclosure: "Pieter Paul Castelein arbeitet bei der FAIRBANK Group, dem Unternehmen hinter InspectOS einer unabhängigen Immobilieninspektionsplattform in Portugal. MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Kann ich diese Inspektion selbst durchführen oder brauche ich einen Fachmann?",
                answer: "Sie können und sollten eine erste Sichtinspektion selbst durchführen. Dieser Leitfaden gibt Ihnen die Werkzeuge dafür. Bei Problemen über 1 m², wiederkehrendem Schimmel oder Gesundheitssymptomen wird eine professionelle Inspektion mit Messgeräten empfohlen."
            },
            {
                question: "Was tue ich, wenn ich bei der Inspektion Schimmel finde?",
                answer: "Dokumentieren Sie mit Fotos und Notizen zu Standort und Ausmaß. Reinigen Sie nicht sofort Standort und Muster des Schimmels sind wichtige diagnostische Informationen."
            },
            {
                question: "Wie oft sollte ich diese Inspektion durchführen?",
                answer: "Einmal im Jahr, idealerweise am Ende des Winters (März/April), wenn die Auswirkungen der feuchten Jahreszeit am sichtbarsten sind."
            },
            {
                question: "Ist ein muffiger Geruch ohne sichtbaren Schimmel besorgniserregend?",
                answer: "Ja. Ein muffiger Geruch weist auf das Vorhandensein von aktivem Schimmel hin, auch wenn er nicht sichtbar ist. Versteckter Schimmel ist oft problematischer als sichtbarer Schimmel, weil er nicht behandelt wird."
            },
            {
                question: "Meine Wohnung ist neu. Kann ich trotzdem Schimmel haben?",
                answer: "Ja. Neue Wohnungen können Schimmel durch Baufeuchte, Belüftungsprobleme oder Baumängel haben."
            }
        ]
    },
    nl: {
        seoTitle: "Volledige Gids: Schimmelrisico in Uw Woning Beoordelen, Kamer voor Kamer MoldCheck.pt",
        seoDescription: "Kamer-voor-kamer inspectiegids voor het beoordelen van schimmelrisico. 20-punten checklist, locatie-oorzaak tabel en wanneer een professional te bellen.",
        focusKeyword: "schimmelrisico woning beoordelen",
        title: "Volledige Gids: Hoe U het Schimmelrisico in Uw Woning Beoordeelt, Kamer voor Kamer",
        byline: "Door Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "De meeste mensen ontdekken dat ze schimmel hebben als het al te laat is als de vlek groot is, als gezondheidsklachten al aanwezig zijn, of als een behandelingstechnicus hen vertelt dat het probleem ernstig en duur te verhelpen is.",
            "Deze gids bestaat zodat dat niet gebeurt. Zodat u een systematische beoordeling van uw woning kunt maken voordat u externe hulp nodig heeft en zodat u, als u die nodig heeft, dat gesprek ingaat met voldoende informatie om de juiste vragen te stellen.",
            "## Wat deze gids behandelt",
            "Deze gids behandelt vier hoofdgebieden: de waarschuwingssignalen die de meeste mensen negeren; een kamer-voor-kamer inspectie met de kritieke punten van elke ruimte; een 20-punten checklist om te documenteren wat u vond; en een locatie-naar-waarschijnlijke-oorzaak tabel om te interpreteren wat u zag.",
            "Het is geen vervanging voor een professionele inspectie met meetapparatuur. Het is wat u eerst moet doen en wat u in staat stelt te begrijpen of u er een nodig heeft.",
            "## Waarschuwingssignalen die de meeste mensen negeren",
            "Zichtbare schimmel is het meest voor de hand liggende teken, maar zelden het eerste. Voordat het verschijnt, zijn er andere indicatoren die aandacht verdienen.",
            "Muffe geur zonder zichtbare bron. Een aanhoudende vochtige of aardse geur, vooral in gesloten kamers of na regenperioden, is vaak het eerste teken van verborgen schimmel.",
            "Terugkerende condensatie op ramen. Waterdruppels aan de binnenkant van glas, vooral 's ochtends, geven aan dat de relatieve luchtvochtigheid binnenshuis hoog is.",
            "Vochtplekken op muren of plafonds. Geelachtige, bruinachtige of onregelmatig omrande vlekken geven aan dat water binnendringt of zich ophoopt.",
            "Afbladderende of opbollende verf. Verf verliest zijn hechting als de muur eronder vochtig is.",
            "Gezondheidsklachten die verbeteren buiten de woning. Aanhoudende hoest, neusverstopping, geïrriteerde ogen of vermoeidheid die verbetert als u tijd buiten doorbrengt.",
            "## Kamer-voor-kamer inspectie",
            "Badkamer: De badkamer is de ruimte met het hoogste risico in elke woning. Controleer: siliconenvoegen tussen bad/douchebak en muren; bovenste hoeken van muren, vooral die tegenover het raam of de ventilator; onderste muurgedeelten achter toilet en wastafel; plafond; onderkant van badmatten.",
            "Keuken: De keuken produceert grote hoeveelheden stoom. Controleer: muur achter de koelkast; onderkant van kasten onder de gootsteen; siliconenvoegen tussen aanrecht en muur; plafond boven het fornuis; binnenkant van hoekkasten.",
            "Slaapkamers: Slaapkamers worden vaak onderschat als bron van schimmel. Controleer: buitenmuur, vooral in hoeken; muur achter kasten die tegen buitenmuren staan; ramen en vensterbanken; onderste muurgedeelten in begane grond- of kelderwoningen. Preventieve actie: kasten minimaal 5 cm van buitenmuren plaatsen.",
            "Woonkamer: Buitenmuren op het noorden of noordwesten controleren; gebieden rond zichtbare koudebruggen betonnen pilaren, balken en metalen raamkozijnen; plinten en onderste muurgedeelten op de begane grond; achter meubels die tegen buitenmuren staan.",
            "Kelder en garage: Muren en vloeren in contact met de grond controleren; tekenen van waterinfiltratie witte mineraalafzettingen (uitbloeiingen) op muren; muffe geur; staat van isolatie van koudwaterleidingen.",
            "## 20-punten checklist",
            "Buitenkant en structuur: (1) Zijn er tekenen van waterinfiltratie in het dak of de dakgoten? (2) Hebben buitenmuren scheuren of zichtbare vochtplekken? (3) Draint het terrein rondom het gebouw water weg van de fundering? (4) Hebben ramen adequate afdichting?",
            "Badkamer: (5) Zijn siliconenvoegen intact en zonder verkleuring? (6) Werkt de ventilator en ventileert hij naar buiten? (7) Is er zichtbare schimmel op het plafond of in de bovenste hoeken? (8) Is de douche- of badkuipbodem vrij van scheuren of open voegen?",
            "Keuken: (9) Zijn er tekenen van lekkages onder de gootsteen? (10) Is de muur achter de koelkast droog en vlekvrij? (11) Ventileert de afzuigkap naar buiten? (12) Hebben hoekkasten voldoende luchtcirculatie?",
            "Slaapkamers en woonkamer: (13) Is er 's ochtends terugkerende condensatie op ramen? (14) Zijn de hoeken van buitenmuren droog en vlekvrij? (15) Staan kasten weg van buitenmuren? (16) Is er een muffe geur in een kamer?",
            "Kelder, garage en technische ruimten: (17) Zijn er uitbloeiingen op kelder- of garagemuren? (18) Is de keldervloer droog na hevige regen? (19) Tonen koudwaterleidingen tekenen van condensatie? (20) Is er zichtbare schimmel op een oppervlak in de kelder of garage?",
            "## Locatie-naar-oorzaak tabel",
            "Bovenste hoek van een buitenmuur Koudebrug door onvoldoende isolatie. De hoek verliest sneller warmte en bereikt het dauwpunt als eerste.",
            "Muur achter een kast Gebrek aan luchtcirculatie gecombineerd met koude muur. Oplossing: kast verplaatsen en ventilatie van de kamer verbeteren.",
            "Badkamerplafond Onvoldoende ventilatie. Waterdamp stijgt op en condenseert op het plafond.",
            "Voet van muren (begane grond) Opstijgend vocht door capillaire werking. Veel voorkomend in gebouwen zonder horizontale vochtbarrière.",
            "Gebied rond metalen raamkozijnen Koudebrug door het kozijn. Metaal geleidt kou van buiten naar binnen.",
            "Binnenmuur (niet buitenmuur) Waterlek uit leidingwerk. Leidingen in de muur of de vloer erboven controleren.",
            "Plafond met onregelmatige vlek Infiltratie door het dak of vanuit de woning erboven.",
            "Geheel oppervlak van een buitenmuur Gegeneraliseerd condensatievocht door onvoldoende ventilatie.",
            "## Wanneer een professional te bellen",
            "Deze visuele inspectie heeft beperkingen. Een professional bellen wanneer: schimmel een oppervlak van meer dan 1 m² bedekt; schimmel na reiniging op dezelfde plek terugkeert; er aanhoudende gezondheidsklachten zijn die buiten de woning verbeteren; de vochtbron na de visuele inspectie onduidelijk is; verborgen schimmel vermoed wordt; de woning verhuurd is en documentatie nodig is.",
            "Een inspectie met een vochtmeter en warmtebeeldcamera kan verborgen vochtgebieden, koudebruggen en de werkelijke omvang van het probleem identificeren zonder het belangenconflict van iemand die de behandeling verkoopt die volgt.",
            "## Een noot over wat deze gids niet vervangt",
            "Deze gids is ontworpen om u voldoende informatie te geven voor een geïnformeerde eerste beoordeling. Het vervangt geen professionele inspectie met meetapparatuur, noch medisch advies als u gezondheidsklachten heeft."
        ],
        disclosure: "Pieter Paul Castelein werkt bij FAIRBANK Group, het bedrijf achter InspectOS een onafhankelijk vastgoedinspectieplatform in Portugal. MoldCheck.pt is een initiatief van FAIRBANK Group. Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsondernemingen.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Kan ik deze inspectie zelf doen of heb ik een professional nodig?",
                answer: "U kunt en moet een eerste visuele inspectie zelf uitvoeren. Deze gids geeft u de tools daarvoor. Voor problemen groter dan 1 m², terugkerende schimmel of gezondheidsklachten wordt een professionele inspectie met meetapparatuur aanbevolen."
            },
            {
                question: "Wat doe ik als ik schimmel vind tijdens de inspectie?",
                answer: "Documenteer met foto's en notities over locatie en omvang. Reinig niet onmiddellijk de locatie en het patroon van de schimmel zijn belangrijke diagnostische informatie."
            },
            {
                question: "Hoe vaak moet ik deze inspectie uitvoeren?",
                answer: "Eén keer per jaar, bij voorkeur aan het einde van de winter (maart/april), wanneer de effecten van het natte seizoen het meest zichtbaar zijn."
            },
            {
                question: "Is een muffe geur zonder zichtbare schimmel zorgwekkend?",
                answer: "Ja. Een muffe geur duidt op de aanwezigheid van actieve schimmel, ook als die niet zichtbaar is. Verborgen schimmel is vaak problematischer dan zichtbare schimmel omdat het niet behandeld wordt."
            },
            {
                question: "Mijn woning is nieuw. Kan ik toch schimmel hebben?",
                answer: "Ja. Nieuwe woningen kunnen schimmel hebben door bouwvocht, ventilatieproblemen of bouwgebreken."
            }
        ]
    },
    it: {
        seoTitle: "Guida Completa: Valutare il Rischio di Muffa in Casa, Stanza per Stanza MoldCheck.pt",
        seoDescription: "Guida di ispezione stanza per stanza per valutare il rischio di muffa in casa. Checklist di 20 punti, tabella posizione-causa e quando chiamare un professionista.",
        focusKeyword: "valutare rischio muffa casa",
        title: "Guida Completa: Come Valutare il Rischio di Muffa in Casa, Stanza per Stanza",
        byline: "Di Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La maggior parte delle persone scopre di avere la muffa quando è già troppo tardi quando la macchia è grande, quando i sintomi di salute sono già presenti, o quando un tecnico di trattamento dice loro che il problema è grave e costoso da risolvere.",
            "Questa guida esiste affinché ciò non accada. Affinché possiate fare una valutazione sistematica della vostra casa prima di aver bisogno di aiuto esterno e affinché, se ne avete bisogno, arriviate a quella conversazione con informazioni sufficienti per fare le domande giuste.",
            "## Cosa copre questa guida",
            "Questa guida copre quattro aree principali: i segnali di allarme che la maggior parte delle persone ignora; un'ispezione stanza per stanza con i punti critici di ogni spazio; una checklist di 20 punti per documentare ciò che avete trovato; e una tabella posizione-causa probabile per interpretare ciò che avete visto.",
            "Non è un sostituto per un'ispezione professionale con attrezzatura di misurazione. È ciò che dovreste fare prima e ciò che vi permette di capire se ne avete bisogno.",
            "## Segnali di allarme che la maggior parte delle persone ignora",
            "La muffa visibile è il segnale più ovvio, ma raramente il primo. Prima che appaia, ci sono altri indicatori che meritano attenzione.",
            "Odore di muffa senza fonte visibile. Un odore persistente di umidità o di terra, specialmente in stanze chiuse o dopo periodi di pioggia, è spesso il primo segnale di muffa nascosta.",
            "Condensa ricorrente sulle finestre. Gocce d'acqua all'interno dei vetri, specialmente al mattino, indicano che l'umidità relativa dell'aria interna è alta.",
            "Macchie di umidità su pareti o soffitti. Macchie giallastre, brunastre o dai contorni irregolari indicano che l'acqua sta penetrando o accumulandosi.",
            "Vernice che si screpola o si gonfia. La vernice perde aderenza quando il muro sottostante è umido.",
            "Sintomi di salute che migliorano fuori casa. Tosse persistente, congestione nasale, occhi irritati o stanchezza che migliorano quando si trascorre tempo fuori casa.",
            "## Ispezione stanza per stanza",
            "Bagno: Il bagno è lo spazio a più alto rischio in qualsiasi abitazione. Controllare: giunti in silicone tra vasca/piatto doccia e pareti; angoli superiori delle pareti, specialmente quelli opposti alla finestra o all'estrattore; parte inferiore delle pareti dietro il water e il lavandino; soffitto; parte inferiore dei tappetini da bagno.",
            "Cucina: La cucina produce grandi quantità di vapore. Controllare: parete dietro il frigorifero; parte inferiore degli armadi sotto il lavello; giunti in silicone tra il piano di lavoro e la parete; soffitto sopra i fornelli; interno degli armadi angolari.",
            "Camere da letto: Le camere da letto sono spesso sottovalutate come fonte di muffa. Controllare: parete esterna, specialmente negli angoli; parete dietro gli armadi appoggiati alle pareti esterne; finestre e davanzali; parte inferiore delle pareti nei piani terra o seminterrati. Azione preventiva: allontanare gli armadi dalle pareti esterne di almeno 5 cm.",
            "Soggiorno: Controllare le pareti esterne orientate a nord o nord-ovest; zone intorno ai ponti termici visibili pilastri in cemento, travi e telai di finestre in metallo; battiscopa e parte inferiore delle pareti ai piani terra; dietro i mobili appoggiati alle pareti esterne.",
            "Cantina e garage: Controllare pareti e pavimenti a contatto con il suolo; segni di infiltrazione d'acqua depositi minerali bianchi (efflorescenze) sulle pareti; odore di muffa; stato dell'isolamento delle tubature dell'acqua fredda.",
            "## Checklist di 20 punti",
            "Esterno e struttura: (1) Ci sono segni di infiltrazione d'acqua nel tetto o nelle grondaie? (2) Le pareti esterne hanno crepe o zone di umidità visibili? (3) Il terreno intorno all'edificio drena l'acqua lontano dalle fondamenta? (4) Le finestre hanno una sigillatura adeguata?",
            "Bagno: (5) I giunti in silicone sono intatti e senza annerimento? (6) L'estrattore funziona e ventila verso l'esterno? (7) C'è muffa visibile sul soffitto o negli angoli superiori? (8) La base della doccia o della vasca è priva di crepe o giunti aperti?",
            "Cucina: (9) Ci sono segni di perdite sotto il lavello? (10) La parete dietro il frigorifero è asciutta e senza macchie? (11) L'estrattore ventila verso l'esterno? (12) Gli armadi angolari hanno una circolazione d'aria adeguata?",
            "Camere da letto e soggiorno: (13) C'è condensa ricorrente sulle finestre al mattino? (14) Gli angoli delle pareti esterne sono asciutti e senza macchie? (15) Gli armadi sono allontanati dalle pareti esterne? (16) C'è odore di muffa in qualche stanza?",
            "Cantina, garage e spazi tecnici: (17) Ci sono efflorescenze sulle pareti della cantina o del garage? (18) Il pavimento della cantina è asciutto dopo forti piogge? (19) Le tubature dell'acqua fredda mostrano segni di condensa? (20) C'è muffa visibile su qualche superficie nella cantina o nel garage?",
            "## Tabella: posizione → causa probabile",
            "Angolo superiore di una parete esterna Ponte termico per isolamento insufficiente. L'angolo perde calore più rapidamente e raggiunge il punto di rugiada per primo.",
            "Parete dietro un armadio Mancanza di circolazione d'aria combinata con parete fredda. Soluzione: allontanare l'armadio e migliorare la ventilazione della stanza.",
            "Soffitto del bagno Ventilazione insufficiente. Il vapore acqueo sale e condensa sul soffitto.",
            "Base delle pareti (piano terra) Umidità ascendente per capillarità. Comune negli edifici senza barriera impermeabilizzante orizzontale.",
            "Zona intorno ai telai di finestre in metallo Ponte termico attraverso il telaio. Il metallo conduce il freddo dall'esterno all'interno.",
            "Parete interna (non esterna) Perdita d'acqua dall'impianto idraulico. Controllare le tubature nella parete o nel pavimento sopra.",
            "Soffitto con macchia irregolare Infiltrazione attraverso il tetto o dall'unità sopra.",
            "Intera superficie di una parete esterna Umidità da condensa generalizzata per ventilazione insufficiente.",
            "## Quando chiamare un professionista",
            "Questa ispezione visiva ha dei limiti. Chiamare un professionista quando: la muffa copre un'area superiore a 1 m²; la muffa si ripresenta nello stesso punto dopo la pulizia; ci sono sintomi di salute persistenti che migliorano fuori casa; la fonte di umidità non è chiara dopo l'ispezione visiva; si sospetta muffa nascosta; l'immobile è in affitto e serve documentazione.",
            "Un'ispezione con un misuratore di umidità e una telecamera termografica può identificare zone umide nascoste, ponti termici e la reale entità del problema senza il conflitto di interessi di chi vende il trattamento che segue.",
            "## Una nota su ciò che questa guida non sostituisce",
            "Questa guida è progettata per darvi informazioni sufficienti per fare una valutazione iniziale informata. Non sostituisce un'ispezione professionale con attrezzatura di misurazione, né un consiglio medico se avete sintomi di salute."
        ],
        disclosure: "Pieter Paul Castelein lavora presso FAIRBANK Group, l'azienda dietro InspectOS una piattaforma di ispezione immobiliare indipendente in Portogallo. MoldCheck.pt è un'iniziativa di FAIRBANK Group. Non vendiamo trattamenti per l'umidità. Non riceviamo commissioni da aziende di bonifica.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Posso fare questa ispezione da solo o ho bisogno di un professionista?",
                answer: "Potete e dovreste fare un'ispezione visiva iniziale da soli. Questa guida vi fornisce gli strumenti per farlo. Per problemi superiori a 1 m², muffa ricorrente o sintomi di salute, è raccomandata un'ispezione professionale con attrezzatura di misurazione."
            },
            {
                question: "Cosa faccio se trovo muffa durante l'ispezione?",
                answer: "Documentate con fotografie e note su posizione ed estensione. Non pulite immediatamente la posizione e il pattern della muffa sono informazioni diagnostiche importanti."
            },
            {
                question: "Con quale frequenza dovrei fare questa ispezione?",
                answer: "Una volta all'anno, idealmente alla fine dell'inverno (marzo/aprile), quando gli effetti della stagione umida sono più visibili."
            },
            {
                question: "Un odore di muffa senza muffa visibile è preoccupante?",
                answer: "Sì. Un odore di muffa indica la presenza di muffa attiva, anche se non visibile. La muffa nascosta è spesso più problematica di quella visibile perché non viene trattata."
            },
            {
                question: "La mia casa è nuova. Posso comunque avere la muffa?",
                answer: "Sì. Le case nuove possono avere muffa a causa dell'umidità di costruzione, problemi di ventilazione o difetti costruttivi."
            }
        ]
    },
    es: {
        seoTitle: "Guía Completa: Evaluar el Riesgo de Moho en Casa, Habitación por Habitación MoldCheck.pt",
        seoDescription: "Guía de inspección habitación por habitación para evaluar el riesgo de moho en casa. Lista de verificación de 20 puntos, tabla ubicación-causa y cuándo llamar a un profesional.",
        focusKeyword: "evaluar riesgo moho vivienda",
        title: "Guía Completa: Cómo Evaluar el Riesgo de Moho en Casa, Habitación por Habitación",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La mayoría de las personas descubren que tienen moho cuando ya es demasiado tarde cuando la mancha es grande, cuando los síntomas de salud ya están presentes, o cuando un técnico de tratamiento les dice que el problema es grave y costoso de resolver.",
            "Esta guía existe para que eso no ocurra. Para que pueda hacer una evaluación sistemática de su vivienda antes de necesitar ayuda externa y para que, si la necesita, llegue a esa conversación con información suficiente para hacer las preguntas correctas.",
            "## Qué cubre esta guía",
            "Esta guía cubre cuatro áreas principales: las señales de advertencia que la mayoría de las personas ignora; una inspección habitación por habitación con los puntos críticos de cada espacio; una lista de verificación de 20 puntos para documentar lo que encontró; y una tabla ubicación-causa probable para interpretar lo que vio.",
            "No es un sustituto de una inspección profesional con equipos de medición. Es lo que debe hacer primero y lo que le permite entender si necesita una.",
            "## Señales de advertencia que la mayoría de las personas ignora",
            "El moho visible es la señal más obvia, pero raramente la primera. Antes de que aparezca, hay otros indicadores que merecen atención.",
            "Olor a humedad sin fuente visible. Un olor persistente a húmedo o a tierra, especialmente en habitaciones cerradas o después de períodos de lluvia, es a menudo la primera señal de moho oculto.",
            "Condensación recurrente en las ventanas. Gotas de agua en el interior de los cristales, especialmente por la mañana, indican que la humedad relativa del aire interior es alta.",
            "Manchas de humedad en paredes o techos. Manchas amarillentas, parduscas o de contornos irregulares indican que el agua está penetrando o acumulándose.",
            "Pintura que se descascarilla o se abomba. La pintura pierde adherencia cuando la pared de debajo está húmeda.",
            "Síntomas de salud que mejoran fuera de casa. Tos persistente, congestión nasal, ojos irritados o fatiga que mejoran cuando pasa tiempo fuera de casa.",
            "## Inspección habitación por habitación",
            "Baño: El baño es el espacio de mayor riesgo en cualquier vivienda. Comprobar: juntas de silicona entre la bañera/plato de ducha y las paredes; esquinas superiores de las paredes, especialmente las opuestas a la ventana o al extractor; parte inferior de las paredes detrás del inodoro y el lavabo; techo; parte inferior de las alfombrillas de baño.",
            "Cocina: La cocina produce grandes cantidades de vapor. Comprobar: pared detrás del frigorífico; parte inferior de los armarios bajo el fregadero; juntas de silicona entre la encimera y la pared; techo sobre los fogones; interior de los armarios de esquina.",
            "Dormitorios: Los dormitorios a menudo se subestiman como fuente de moho. Comprobar: pared exterior, especialmente en las esquinas; pared detrás de los armarios apoyados en paredes exteriores; ventanas y alféizares; parte inferior de las paredes en plantas bajas o sótanos. Acción preventiva: alejar los armarios de las paredes exteriores al menos 5 cm.",
            "Salón: Comprobar paredes exteriores orientadas al norte o noroeste; zonas alrededor de puentes térmicos visibles pilares de hormigón, vigas y marcos de ventanas metálicos; rodapiés y parte inferior de las paredes en plantas bajas; detrás de muebles apoyados en paredes exteriores.",
            "Sótano y garaje: Comprobar paredes y suelos en contacto con el terreno; señales de infiltración de agua depósitos minerales blancos (eflorescencias) en las paredes; olor a humedad; estado del aislamiento de las tuberías de agua fría.",
            "## Lista de verificación de 20 puntos",
            "Exterior y estructura: (1) ¿Hay señales de infiltración de agua en el tejado o en los canalones? (2) ¿Las paredes exteriores tienen grietas o zonas de humedad visibles? (3) ¿El terreno alrededor del edificio drena el agua lejos de los cimientos? (4) ¿Las ventanas tienen un sellado adecuado?",
            "Baño: (5) ¿Las juntas de silicona están intactas y sin oscurecimiento? (6) ¿El extractor funciona y ventila hacia el exterior? (7) ¿Hay moho visible en el techo o en las esquinas superiores? (8) ¿La base de la ducha o bañera está libre de grietas o juntas abiertas?",
            "Cocina: (9) ¿Hay señales de fugas bajo el fregadero? (10) ¿La pared detrás del frigorífico está seca y sin manchas? (11) ¿El extractor ventila hacia el exterior? (12) ¿Los armarios de esquina tienen circulación de aire adecuada?",
            "Dormitorios y salón: (13) ¿Hay condensación recurrente en las ventanas por la mañana? (14) ¿Las esquinas de las paredes exteriores están secas y sin manchas? (15) ¿Los armarios están alejados de las paredes exteriores? (16) ¿Hay olor a humedad en alguna habitación?",
            "Sótano, garaje y espacios técnicos: (17) ¿Hay eflorescencias en las paredes del sótano o del garaje? (18) ¿El suelo del sótano está seco después de lluvias intensas? (19) ¿Las tuberías de agua fría muestran señales de condensación? (20) ¿Hay moho visible en alguna superficie del sótano o del garaje?",
            "## Tabla: ubicación → causa probable",
            "Esquina superior de una pared exterior Puente térmico por aislamiento insuficiente. La esquina pierde calor más rápidamente y alcanza el punto de rocío primero.",
            "Pared detrás de un armario Falta de circulación de aire combinada con pared fría. Solución: alejar el armario y mejorar la ventilación de la habitación.",
            "Techo del baño Ventilación insuficiente. El vapor de agua sube y se condensa en el techo.",
            "Base de las paredes (planta baja) Humedad ascendente por capilaridad. Común en edificios sin barrera impermeabilizante horizontal.",
            "Zona alrededor de marcos de ventanas metálicos Puente térmico a través del marco. El metal conduce el frío del exterior al interior.",
            "Pared interior (no exterior) Fuga de agua de la fontanería. Comprobar tuberías en la pared o en el suelo de arriba.",
            "Techo con mancha irregular Infiltración a través del tejado o desde la vivienda de arriba.",
            "Toda la superficie de una pared exterior Humedad de condensación generalizada por ventilación insuficiente.",
            "## Cuándo llamar a un profesional",
            "Esta inspección visual tiene límites. Llamar a un profesional cuando: el moho cubre un área superior a 1 m²; el moho reaparece en el mismo lugar después de la limpieza; hay síntomas de salud persistentes que mejoran fuera de casa; el origen de la humedad no está claro después de la inspección visual; se sospecha moho oculto; la propiedad está alquilada y se necesita documentación.",
            "Una inspección con un medidor de humedad y una cámara termográfica puede identificar zonas húmedas ocultas, puentes térmicos y la extensión real del problema sin el conflicto de intereses de quien vende el tratamiento que sigue.",
            "## Una nota sobre lo que esta guía no sustituye",
            "Esta guía está diseñada para darle información suficiente para hacer una evaluación inicial informada. No sustituye una inspección profesional con equipos de medición, ni asesoramiento médico si tiene síntomas de salud."
        ],
        disclosure: "Pieter Paul Castelein trabaja en FAIRBANK Group, la empresa detrás de InspectOS una plataforma de inspección inmobiliaria independiente en Portugal. MoldCheck.pt es una iniciativa de FAIRBANK Group. No vendemos tratamientos de humedad. No recibimos comisiones de empresas de remediación.",
        sources: [
            {
                label: "OMS Directrices para la calidad del aire interior: humedad y moho (2009)"
            },
            {
                label: "EPA Guía breve sobre el moho, la humedad y su hogar (2012)"
            },
            {
                label: "IICRC S520 Norma para la remediación profesional del moho (2015)"
            },
            {
                label: "INE Censos 2021 Datos sobre el estado del parque edificatorio"
            }
        ],
        faq: [
            {
                question: "¿Puedo hacer esta inspección yo mismo o necesito un profesional?",
                answer: "Puede y debe hacer una inspección visual inicial usted mismo. Esta guía le proporciona las herramientas para ello. Para problemas mayores de 1 m², moho recurrente o síntomas de salud, se recomienda una inspección profesional con equipos de medición."
            },
            {
                question: "¿Qué hago si encuentro moho durante la inspección?",
                answer: "Documente con fotografías y notas sobre la ubicación y extensión. No limpie inmediatamente la ubicación y el patrón del moho son información diagnóstica importante."
            },
            {
                question: "¿Con qué frecuencia debo hacer esta inspección?",
                answer: "Una vez al año, idealmente a finales del invierno (marzo/abril), cuando los efectos de la temporada húmeda son más visibles."
            },
            {
                question: "¿Es preocupante un olor a humedad sin moho visible?",
                answer: "Sí. Un olor a humedad indica la presencia de moho activo, aunque no sea visible. El moho oculto es a menudo más problemático que el visible porque no se trata."
            },
            {
                question: "Mi vivienda es nueva. ¿Puedo tener moho de todas formas?",
                answer: "Sí. Las viviendas nuevas pueden tener moho por humedad de construcción, problemas de ventilación o defectos constructivos."
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/content/data/articles/a2-bleach.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a2BleachContent",
    ()=>a2BleachContent,
    "a2BleachSlugs",
    ()=>a2BleachSlugs
]);
const a2BleachSlugs = {
    pt: "por-que-lixivia-nao-resolve-bolor",
    en: "why-bleach-doesnt-fix-mold",
    fr: "pourquoi-javel-ne-resout-pas-moisissures",
    de: "warum-bleichmittel-schimmel-nicht-beseitigt",
    nl: "waarom-bleekwater-schimmel-niet-oplost",
    it: "perche-candeggina-non-risolve-muffa",
    es: "por-que-la-lejia-no-soluciona-el-moho"
};
const a2BleachContent = {
    pt: {
        seoTitle: "Por Que a Lixívia Não Resolve o Bolor | MoldCheck.pt",
        seoDescription: "A lixívia não resolve bolor em superfícies porosas. Descubra por que o bolor volta, o que dizem EPA e IICRC, e o que realmente funciona.",
        focusKeyword: "lixívia bolor",
        title: "Por Que a Lixívia Não Resolve o Bolor  E o Que Realmente Funciona",
        byline: "By Pieter Paul Castelein, Co-founder & CEO, FAIRBANK Group",
        body: [
            "Há uma cena que se repete em casas por todo o Portugal.",
            "Alguém descobre bolor num canto da casa de banho, ou atrás do roupeiro do quarto, ou a subir pela parede da cozinha. Vai ao Leroy Merlin ou ao Continente. Compra uma garrafa de lixívia. Esfrega. O bolor desaparece. A parede fica limpa e branca. A pessoa sente-se aliviada  problema resolvido.",
            "Três semanas depois, o bolor está de volta. Exatamente no mesmo sítio. Às vezes maior.",
            "Isso não é azar. Não é porque usou lixívia a pouca concentração, ou não esfregou o suficiente, ou não esperou tempo suficiente. É porque a lixívia não trata bolor em superfícies porosas. Nunca tratou. E a razão pela qual ninguém explica isto claramente tem muito a ver com quem beneficia quando continuamos a acreditar que sim.",
            "## O que a lixívia realmente faz",
            "A lixívia  hipoclorito de sódio  é um oxidante poderoso. Desnatura proteínas de superfície e quebra os pigmentos que dão cor ao bolor. Quando esfrega uma superfície com bolor usando lixívia, o bolor fica visualmente incolor. A mancha desaparece. Isso é real.",
            "O problema está no que acontece a seguir, e a seguir, e dentro da parede.",
            "O bolor não vive apenas na superfície. As hifas  os filamentos microscópicos que constituem a estrutura do fungo  penetram materiais porosos. Numa parede de reboco pintada típica de um apartamento português, as hifas estendem-se 2 a 5 milímetros para dentro do substrato. Numa parede de tijolo mais antiga, podem ir mais fundo.",
            "A lixívia em solução aquosa é aproximadamente 95% água. Quando a aplica numa parede, a água penetra. O hipoclorito não penetra  é consumido ao reagir com a matéria orgânica na camada superficial antes de chegar às hifas no interior. As hifas ficam intactas. O fungo, tecnicamente, está vivo e funcional por baixo da superfície que acabou de limpar.",
            "E mais: a água que penetrou aumentou o teor de humidade do substrato. Criou condições ligeiramente melhores para o recrescimento. Não muito. Mas o suficiente para ajudar a explicar porque o bolor volta  e muitas vezes volta mais depressa do que a primeira vez.",
            "## O que dizem os organismos internacionais",
            "Isto não é uma teoria alternativa. É a posição oficial dos principais organismos de saúde e segurança do ambiente a nível mundial.",
            "A Agência de Proteção Ambiental dos Estados Unidos (EPA) é explícita: o uso de biocidas que matam organismos como o bolor  incluindo a lixívia  não é recomendado como prática de rotina na limpeza de bolor. A razão: o bolor morto continua a ser alergénico. As micotoxinas  moléculas tóxicas produzidas por certas espécies de bolor  são compostos químicos estáveis que persistem indefinidamente no material, independentemente de o organismo que as produziu estar vivo ou morto. Matar o bolor não remove as micotoxinas. Não remove as hifas. Não remove os beta-glucanos que ativam o sistema imunitário.",
            "O IICRC S520  a norma internacional de referência para a remediação profissional de bolor, agora na sua 4ª edição de 2024  é ainda mais direto. O princípio fundamental é este: a remoção física da fonte de contaminação é o único método primário de remediação aceitável. Materiais porosos contaminados  placas de gesso, isolamento, tapetes, teto falso  devem ser fisicamente removidos da estrutura. A razão: as hifas penetram a matriz do material tornando a remoção completa por limpeza impossível.",
            "A mesma norma afirma explicitamente que a nebulização, o tratamento com ozono, a encapsulação e a aplicação de biocidas por si só não são métodos aceitáveis de remediação. Não são atalhos. Não são alternativas mais baratas. São simplesmente ineficazes como solução primária.",
            "## Bolor morto ainda faz mal",
            "Este ponto merece atenção especial porque é contra-intuitivo e raramente explicado.",
            "Quando se mata bolor com lixívia ou outro produto biocida, o que fica na parede não é neutro. O bolor morto continua a conter:",
            "Beta-glucanos  componentes da parede celular dos fungos que ativam respostas inflamatórias no sistema imunitário humano independentemente de o fungo estar vivo. A atividade biológica dos beta-glucanos não é afetada pela morte do organismo.",
            "Micotoxinas  se a espécie presente produzia toxinas, essas toxinas continuam no material. O satratoxin G e H do Stachybotrys chartarum, a ocratoxina A do Aspergillus, as tricotecenas de várias espécies  são moléculas quimicamente estáveis que requerem temperaturas de 260°C ou mais para se decomporem. A lixívia não as afeta.",
            "Esporos  esporos mortos ainda são alergénicos. Ainda contêm proteínas que desencadeiam respostas imunitárias em pessoas sensibilizadas.",
            "A EPA é clara quanto a isto: não chega matar o bolor  tem de ser removido. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## O padrão que a localização revela",
            "Aqui está algo que raramente é explicado claramente e que é extraordinariamente útil: onde aparece o bolor diz-lhe porque apareceu. E essa causa determina completamente o que precisa de fazer.",
            "Bolor nos cantos superiores das paredes, especialmente em quartos e salas  Causa: condensação. O ar quente e húmido do interior da divisão estratifica-se junto ao tecto e encontra superfícies mais frias nos cantos. Condensa. O bolor coloniza. Isto é um problema de ventilação inadequada combinado com pontes térmicas  não há produto de limpeza que resolva isto.",
            "Bolor à volta dos caixilhos das janelas  Causa: ponte térmica no perfil da janela. Os caixilhos de alumínio e ferro  standard nos edifícios portugueses construídos entre os anos 1960 e 1990  são condutores térmicos excelentes. Em pleno inverno, a superfície do caixilho pode estar a 8 ou 10 graus, bem abaixo do ponto de orvalho do ar interior. A humidade condensa directamente no caixilho e na parede adjacente. Resolução: melhorar o isolamento da zona ou substituir os caixilhos por perfis com corte térmico.",
            "Bolor a subir a partir do rodapé, especialmente no rés-do-chão ou cave  Causa: ascensão capilar. A humidade do solo sobe por capilaridade através das paredes de alvenaria sem impermeabilização horizontal  standard nos edifícios anteriores a 1950 em Portugal. O bolor é apenas o sinal visível de um problema estrutural de humidade. Requer diagnóstico e intervenção específica.",
            "Bolor numa mancha isolada numa parede interior, especialmente após chuva intensa  Causa: infiltração  fissura, junta de dilatação, caleira entupida, impermeabilização deficiente na cobertura ou terraço. A localização é relativamente precisa. Requer encontrar e selar a entrada de água.",
            "Bolor no interior de um armário encostado a uma parede exterior  Esta é a localização mais comum e mais ignorada em apartamentos portugueses. O armário cria um espaço não ventilado onde o ar húmido fica estagnado contra uma superfície fria. O bolor cresce no lado interior do painel traseiro do armário e na parede. As pessoas raramente vêem isto até ser extenso. A resolução passa por afastar o mobiliário da parede exterior, garantir circulação de ar, e investigar se há isolamento adequado nessa parede.",
            "## O que realmente funciona  por nível de gravidade",
            "Bolor superficial em superfícies não porosas (azulejo, vidro, metal pintado)  Remoção física com detergente comum e água, escovagem mecânica, enxaguamento e secagem completa. Lixívia pode ser útil aqui  nas superfícies não porosas, onde não há substrato para as hifas penetrarem, a capacidade oxidante da lixívia é adequada. Mas o passo mais importante é garantir melhor ventilação para que a situação não se repita.",
            "Bolor em superfícies semi-porosas de pequena dimensão (reboco pintado, área inferior a 0,1 m²)  Remoção física do material afectado até chegar a substrato limpo. Não limpar por cima  remover. Secar completamente antes de qualquer reparação. Corrigir a fonte de humidade antes de qualquer outra acção  sem isso, o bolor recorre com absoluta certeza.",
            "Bolor recorrente em qualquer superfície  O regresso do bolor é diagnóstico: a fonte de humidade não foi identificada nem corrigida. A pergunta não é \"que produto uso?\". A pergunta é \"de onde vem a água?\" Isto requer, na maioria dos casos, uma avaliação profissional com medidor de humidade e câmara termográfica para localizar a origem  que pode estar numa parede adjacente, numa tubagem, ou no comportamento térmico da envolvente do edifício.",
            "Bolor em materiais de construção porosos (placas de gesso, isolamento, madeira estrutural afetada)  Remoção física do material. Não há produto de limpeza adequado. Estes materiais, uma vez colonizados por hifas que penetraram a estrutura, não podem ser eficazmente descontaminados  precisam de ser retirados e substituídos, com contenção adequada para evitar dispersão de esporos durante a remoção.",
            "Bolor em sistemas de HVAC, condutas de ar condicionado ou ventilação mecânica  Não tente resolver isto sozinho. Os sistemas de climatização são os principais vectores de dispersão de esporos, fragmentos fúngicos e micotoxinas por toda a habitação. Bolor num sistema de ar condicionado significa que potencialmente cada divisão da casa está a receber contaminação. Requer avaliação e intervenção profissional.",
            "## A pergunta que toda a gente deve fazer",
            "Há uma questão que raramente é colocada quando alguém descobre bolor em casa, mas que determina completamente se o problema vai ser resolvido ou vai continuar a reaparecer indefinidamente:",
            "De onde vem a água?",
            "O bolor não aparece por acaso. Precisa de humidade sustentada  uma actividade de água superior a 0,80 na superfície de crescimento  durante 24 a 48 horas para começar a colonizar, e de condições que se repitam regularmente para continuar a crescer. Se as condições persistem, o bolor persiste. Não existe produto, serviço, ou tratamento que altere isto.",
            "A resposta pode ser simples  uma janela que não veda bem, uma casa de banho sem extractor, um hábito de estender roupa a secar no interior. Pode ser complexa  uma ponte térmica estrutural num edifício mal isolado, uma impermeabilização da cobertura com décadas de degradação, um sistema de drenagem que falhou. Mas a pergunta tem sempre de ser feita antes de qualquer outra acção.",
            "A lixívia não faz esta pergunta. Cobre o sintoma durante algumas semanas. E por isso, para a maioria das pessoas, não resolve nada.",
            "## Uma nota sobre \"tratamentos profissionais\"",
            "Portugal tem um mercado de tratamentos de humidade e bolor dominado por empresas que oferecem diagnósticos gratuitos seguidos de soluções proprietárias  sistemas de ventilação, injecções de resina, produtos de encapsulamento  por valores que podem chegar a vários milhares de euros, com garantias de 10 ou 30 anos.",
            "Algumas destas soluções têm base técnica legítima para problemas específicos. Um sistema de ventilação mecânica controlada adequado pode resolver definitivamente um problema de condensação num apartamento mal ventilado. Uma injecção de silicone em profundidade pode criar uma barreira contra a ascensão capilar.",
            "O problema não é que estas soluções não existam. É que o diagnóstico que as precede é feito pela mesma empresa que as vende. Não existe, em Portugal, nenhuma infraestrutura de diagnóstico independente que permita a um consumidor obter uma segunda opinião antes de gastar milhares de euros. Nenhum inspetor certificado sem ligação a empresas de tratamento. Nenhum laboratório de análise microbiológica de ar interior para habitação residencial.",
            "Dito de outra forma: no mercado português, a informação disponível ao consumidor sobre o seu problema de bolor é quase inteiramente produzida por entidades que têm interesse comercial no diagnóstico que apresentam.",
            "Este é um problema de assimetria de informação. E é, em parte, a razão pela qual este site existe.",
            "## O que fazer esta semana",
            "Se tem bolor em casa, aqui está uma sequência honesta:",
            "1. Identifique a localização exacta e extensão. Use uma lanterna. Verifique atrás de mobiliário encostado a paredes exteriores. Verifique sob tapetes em divisões no rés-do-chão. Meça a área aproximada.",
            "2. Compre um higrómetro. Custam entre €15 e €40 em qualquer loja de bricolage. Coloque-o na divisão afectada a 1,5 metros do chão, longe de janelas. Leia de manhã durante uma semana. Humidade relativa consistentemente acima de 70% em inverno indica problema de ventilação ou isolamento que o bolor está apenas a tornar visível.",
            "3. Ventile activamente. Abra janelas em divisões opostas durante 10 minutos de manhã para criar corrente de ar. Use extractores na casa de banho e cozinha durante e após actividades que geram humidade. Afaste mobiliário de paredes exteriores pelo menos 5 cm.",
            "4. Não aplique lixívia em paredes de reboco ou tijolo. Se precisar de remover bolor visível temporariamente, use remoção física com detergente e água, e saiba que está a gerir o sintoma, não a causa.",
            "5. Se o bolor regressar em menos de 6 semanas, ou se cobrir mais de 0,1 m², ou se algum membro da família tiver sintomas respiratórios que melhoram fora de casa  está perante um problema que requer avaliação profissional independente. Não o diagnóstico gratuito de uma empresa de tratamentos. Uma avaliação independente, com medidor de humidade e câmara termográfica, que identifique a origem do problema antes de qualquer solução ser proposta.",
            "O bolor em casa é tratável. Mas só quando se começa pela pergunta certa."
        ],
        disclosure: "Pieter Paul Castelein trabalha no FAIRBANK Group, a empresa por detrás da InspectOS  plataforma de inspeção independente de imóveis em Portugal. O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspeção ou análise laboratorial, é porque acreditamos que precisa de uma  não porque lucramos com o tratamento que se segue.\n\nA informação neste artigo é educativa e não substitui aconselhamento técnico ou médico profissional.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "A lixívia mata o bolor?",
                answer: "Em algumas superfícies não porosas, a lixívia pode descolorar e danificar o bolor à superfície. Mas em materiais porosos não remove as hifas no interior nem resolve a causa da humidade, por isso não é uma solução real."
            },
            {
                question: "Porque é que o bolor volta depois de usar lixívia?",
                answer: "Porque a lixívia actua sobretudo na superfície. Em paredes, reboco, madeira, gesso ou outros materiais porosos, o fungo pode continuar activo no interior. Além disso, a água da solução pode favorecer o recrescimento."
            },
            {
                question: "A lixívia remove micotoxinas e alergénios?",
                answer: "Não. Matar ou descolorar o bolor não remove automaticamente micotoxinas, beta-glucanos, fragmentos fúngicos ou esporos alergénicos. Por isso, o material contaminado pode continuar problemático."
            },
            {
                question: "Quando é que a lixívia pode ser útil?",
                answer: "Pode ser útil em superfícies não porosas, como vidro, azulejo ou metal pintado, sobretudo como parte de uma limpeza física. Mesmo nesses casos, se a ventilação e a humidade não forem corrigidas, o bolor pode voltar."
            },
            {
                question: "Qual é a pergunta mais importante quando aparece bolor?",
                answer: "A pergunta certa é: \"de onde vem a água?\" Sem identificar e corrigir a fonte de humidade  condensação, infiltração, ascensão capilar ou fuga  qualquer limpeza será temporária."
            }
        ]
    },
    en: {
        seoTitle: "Why Bleach Doesn't Fix Mold | MoldCheck.pt",
        seoDescription: "Bleach doesn't fix mold on porous surfaces. Learn why mold comes back, what EPA and IICRC say, and what actually works.",
        focusKeyword: "bleach mold",
        title: "Why Bleach Doesn't Fix Mold  And What Actually Works",
        byline: "By Pieter Paul Castelein, Co-founder & CEO, FAIRBANK Group",
        body: [
            "There is a scene that repeats itself in homes across Portugal, the UK, the US, and most of the world.",
            "Someone discovers mold in a bathroom corner, behind a bedroom wardrobe, or climbing up a kitchen wall. They go to the hardware store. They buy a bottle of bleach. They scrub. The mold disappears. The wall looks clean and white. They feel relieved  problem solved.",
            "Three weeks later, the mold is back. Exactly in the same spot. Sometimes larger.",
            "That is not bad luck. It is not because the bleach was too diluted, or they didn't scrub hard enough, or didn't wait long enough. It is because bleach does not treat mold on porous surfaces. It never did. And the reason nobody explains this clearly has a lot to do with who benefits when we keep believing it does.",
            "## What bleach actually does",
            "Bleach  sodium hypochlorite  is a powerful oxidiser. It denatures surface proteins and breaks down the pigments that give mold its colour. When you scrub a moldy surface with bleach, the mold becomes visually colourless. The stain disappears. That part is real.",
            "The problem is what happens next, and next, and inside the wall.",
            "Mold does not live only on the surface. Hyphae  the microscopic filaments that make up the fungal structure  penetrate porous materials. In a typical painted plaster wall in a Portuguese or British apartment, hyphae extend 2 to 5 millimetres into the substrate. In older brick walls, they can go deeper.",
            "Bleach solution is approximately 95% water. When you apply it to a wall, the water penetrates. The hypochlorite does not  it is consumed reacting with organic matter in the surface layer before it reaches the hyphae inside. The hyphae remain intact. The fungus is technically alive and functional beneath the surface you just cleaned.",
            "And more: the water that penetrated has increased the moisture content of the substrate. It has created slightly better conditions for regrowth. Not much. But enough to help explain why mold comes back  and often comes back faster than the first time.",
            "## What international bodies say",
            "This is not an alternative theory. It is the official position of the world's leading environmental health and safety bodies.",
            "The US Environmental Protection Agency (EPA) is explicit: the use of biocides that kill organisms like mold  including bleach  is not recommended as a routine practice in mold cleanup. The reason: dead mold is still allergenic. Mycotoxins  toxic molecules produced by certain mold species  are chemically stable compounds that persist indefinitely in the material, regardless of whether the organism that produced them is alive or dead. Killing the mold does not remove the mycotoxins. It does not remove the hyphae. It does not remove the beta-glucans that activate the immune system.",
            "The IICRC S520  the international reference standard for professional mold remediation, now in its 4th edition (2024)  is even more direct. The fundamental principle is this: physical removal of the contamination source is the only acceptable primary remediation method. Porous contaminated materials  drywall, insulation, carpet, drop ceiling  must be physically removed from the structure. The reason: hyphae penetrate the material matrix making complete removal by cleaning impossible.",
            "The same standard explicitly states that fogging, ozone treatment, encapsulation, and biocide application alone are not acceptable remediation methods. They are not shortcuts. They are not cheaper alternatives. They are simply ineffective as primary solutions.",
            "## Dead mold still causes harm",
            "This point deserves special attention because it is counterintuitive and rarely explained.",
            "When you kill mold with bleach or another biocide, what remains on the wall is not neutral. Dead mold still contains:",
            "Beta-glucans  components of fungal cell walls that activate inflammatory responses in the human immune system regardless of whether the fungus is alive. The biological activity of beta-glucans is not affected by the death of the organism.",
            "Mycotoxins  if the species present was producing toxins, those toxins remain in the material. Satratoxin G and H from Stachybotrys chartarum, ochratoxin A from Aspergillus, trichothecenes from various species  these are chemically stable molecules that require temperatures of 260°C or more to decompose. Bleach does not affect them.",
            "Spores  dead spores are still allergenic. They still contain proteins that trigger immune responses in sensitised individuals.",
            "The EPA is clear on this: killing the mold is not enough  it must be removed. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## The pattern that location reveals",
            "Here is something that is rarely explained clearly and is extraordinarily useful: where mold appears tells you why it appeared. And that cause completely determines what you need to do.",
            "Mold in upper wall corners, especially in bedrooms and living rooms  Cause: condensation. Warm, humid indoor air stratifies near the ceiling and meets cooler surfaces in corners. It condenses. Mold colonises. This is a problem of inadequate ventilation combined with thermal bridging  no cleaning product resolves this.",
            "Mold around window frames  Cause: thermal bridge in the window profile. Aluminium and iron frames  standard in buildings constructed between the 1960s and 1990s  are excellent thermal conductors. In winter, the frame surface can be at 8 or 10 degrees, well below the dew point of indoor air. Moisture condenses directly on the frame and adjacent wall. Resolution: improve insulation in the zone or replace frames with thermally broken profiles.",
            "Mold rising from the skirting board, especially on ground floors or basements  Cause: capillary rise. Moisture from the ground rises by capillarity through masonry walls without horizontal damp-proofing  standard in buildings before 1950. The mold is only the visible sign of a structural moisture problem. Requires specific diagnosis and intervention.",
            "Mold in an isolated patch on an interior wall, especially after heavy rain  Cause: infiltration  crack, expansion joint, blocked gutter, deficient waterproofing on the roof or terrace. The location is relatively precise. Requires finding and sealing the water entry point.",
            "Mold inside a wardrobe pushed against an exterior wall  This is the most common and most overlooked location in apartments. The wardrobe creates an unventilated space where humid air stagnates against a cold surface. Mold grows on the inside of the wardrobe's back panel and on the wall. People rarely see this until it is extensive. Resolution: move furniture away from exterior walls, ensure air circulation, and investigate whether there is adequate insulation in that wall.",
            "## What actually works  by severity level",
            "Superficial mold on non-porous surfaces (tile, glass, painted metal)  Physical removal with common detergent and water, mechanical scrubbing, rinsing and complete drying. Bleach can be useful here  on non-porous surfaces, where there is no substrate for hyphae to penetrate, bleach's oxidising capacity is adequate. But the most important step is ensuring better ventilation so the situation does not repeat.",
            "Mold on small semi-porous surfaces (painted plaster, area under 0.1 m²)  Physical removal of the affected material down to clean substrate. Do not clean over it  remove it. Dry completely before any repair. Correct the moisture source before any other action  without that, mold will recur with absolute certainty.",
            "Recurring mold on any surface  The return of mold is diagnostic: the moisture source was not identified or corrected. The question is not \"what product do I use?\". The question is \"where is the water coming from?\" This requires, in most cases, a professional assessment with a moisture meter and thermographic camera to locate the origin  which may be in an adjacent wall, a pipe, or the thermal behaviour of the building envelope.",
            "Mold in porous building materials (drywall, insulation, affected structural timber)  Physical removal of the material. There is no adequate cleaning product. These materials, once colonised by hyphae that have penetrated the structure, cannot be effectively decontaminated  they need to be removed and replaced, with adequate containment to prevent spore dispersal during removal.",
            "Mold in HVAC systems, air conditioning ducts or mechanical ventilation  Do not attempt to resolve this yourself. Climate systems are the primary vectors for dispersing spores, fungal fragments and mycotoxins throughout the home. Mold in an air conditioning system means potentially every room in the house is receiving contamination. Requires professional assessment and intervention.",
            "## The question everyone should ask",
            "There is a question that is rarely asked when someone discovers mold at home, but which completely determines whether the problem will be solved or will keep reappearing indefinitely:",
            "Where is the water coming from?",
            "Mold does not appear by chance. It needs sustained moisture  a water activity above 0.80 on the growth surface  for 24 to 48 hours to begin colonising, and conditions that repeat regularly to keep growing. If the conditions persist, the mold persists. There is no product, service, or treatment that changes this.",
            "The answer may be simple  a window that doesn't seal well, a bathroom without an extractor fan, a habit of drying laundry indoors. It may be complex  a structural thermal bridge in a poorly insulated building, a roof waterproofing with decades of degradation, a drainage system that has failed. But the question must always be asked before any other action.",
            "Bleach does not ask this question. It covers the symptom for a few weeks. And that is why, for most people, it resolves nothing.",
            "## A note on 'professional treatments'",
            "Many markets have a damp and mold treatment sector dominated by companies offering free diagnoses followed by proprietary solutions  ventilation systems, resin injections, encapsulation products  for amounts that can reach several thousand euros, with 10 or 30-year guarantees.",
            "Some of these solutions have legitimate technical basis for specific problems. An adequate controlled mechanical ventilation system can definitively resolve a condensation problem in a poorly ventilated apartment. A deep silicone injection can create a barrier against capillary rise.",
            "The problem is not that these solutions don't exist. It is that the diagnosis preceding them is made by the same company that sells them. There is, in most countries, no infrastructure of independent diagnosis that allows a consumer to get a second opinion before spending thousands of euros. No certified inspector without ties to treatment companies. No microbiological air analysis laboratory for residential housing.",
            "In other words: in most markets, the information available to consumers about their mold problem is almost entirely produced by entities with a commercial interest in the diagnosis they present.",
            "This is a problem of information asymmetry. And it is, in part, the reason this site exists.",
            "## What to do this week",
            "If you have mold at home, here is an honest sequence:",
            "1. Identify the exact location and extent. Use a torch. Check behind furniture pushed against exterior walls. Check under carpets in ground-floor rooms. Measure the approximate area.",
            "2. Buy a hygrometer. They cost between €15 and €40 at any DIY store. Place it in the affected room at 1.5 metres from the floor, away from windows. Read it in the morning for a week. Relative humidity consistently above 70% in winter indicates a ventilation or insulation problem that the mold is only making visible.",
            "3. Ventilate actively. Open windows in opposite rooms for 10 minutes in the morning to create a draught. Use extractors in the bathroom and kitchen during and after activities that generate moisture. Move furniture away from exterior walls by at least 5 cm.",
            "4. Do not apply bleach to plaster or brick walls. If you need to temporarily remove visible mold, use physical removal with detergent and water, and know that you are managing the symptom, not the cause.",
            "5. If mold returns in less than 6 weeks, or covers more than 0.1 m², or if any family member has respiratory symptoms that improve outside the home  you are facing a problem that requires independent professional assessment. Not the free diagnosis from a treatment company. An independent assessment, with a moisture meter and thermographic camera, that identifies the origin of the problem before any solution is proposed.",
            "Mold at home is treatable. But only when you start with the right question."
        ],
        disclosure: "Pieter Paul Castelein works at FAIRBANK Group, the company behind InspectOS  an independent property inspection platform operating in Portugal. MoldCheck.pt is a FAIRBANK Group initiative. We do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or lab test, it is because we believe you need one  not because we profit from whatever treatment follows.\n\nThe information in this article is educational and does not substitute professional technical or medical advice.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "Does bleach kill mold?",
                answer: "On some non-porous surfaces, bleach can discolour and damage surface mold. But on porous materials it does not remove the hyphae inside or resolve the moisture cause, so it is not a real solution."
            },
            {
                question: "Why does mold come back after using bleach?",
                answer: "Because bleach acts mainly on the surface. On walls, plaster, wood, drywall or other porous materials, the fungus can remain active inside. Additionally, the water in the solution can encourage regrowth."
            },
            {
                question: "Does bleach remove mycotoxins and allergens?",
                answer: "No. Killing or discolouring mold does not automatically remove mycotoxins, beta-glucans, fungal fragments or allergenic spores. The contaminated material can therefore remain problematic."
            },
            {
                question: "When can bleach be useful?",
                answer: "It can be useful on non-porous surfaces, such as glass, tile or painted metal, especially as part of physical cleaning. Even then, if ventilation and humidity are not corrected, mold can return."
            },
            {
                question: "What is the most important question when mold appears?",
                answer: "The right question is: \"where is the water coming from?\" Without identifying and correcting the moisture source  condensation, infiltration, capillary rise or a leak  any cleaning will be temporary."
            }
        ]
    },
    fr: {
        seoTitle: "Pourquoi la Javel ne Résout pas les Moisissures | MoldCheck.pt",
        seoDescription: "La javel ne résout pas les moisissures sur les surfaces poreuses. Découvrez pourquoi elles reviennent, ce que disent l'EPA et l'IICRC, et ce qui fonctionne vraiment.",
        focusKeyword: "javel moisissures",
        title: "Pourquoi la Javel ne Résout pas les Moisissures  Et ce qui Fonctionne Vraiment",
        byline: "Par Pieter Paul Castelein, Co-fondateur & PDG, FAIRBANK Group",
        body: [
            "Il y a une scène qui se répète dans les maisons du monde entier.",
            "Quelqu'un découvre des moisissures dans un coin de salle de bain, derrière l'armoire de la chambre, ou qui montent le long d'un mur de cuisine. Il va au magasin de bricolage. Il achète une bouteille d'eau de Javel. Il frotte. Les moisissures disparaissent. Le mur est propre et blanc. La personne se sent soulagée  problème résolu.",
            "Trois semaines plus tard, les moisissures sont de retour. Exactement au même endroit. Parfois plus grandes.",
            "Ce n'est pas de la malchance. Ce n'est pas parce que la javel était trop diluée, ou qu'on n'a pas assez frotté, ou qu'on n'a pas attendu assez longtemps. C'est parce que la javel ne traite pas les moisissures sur les surfaces poreuses. Elle ne l'a jamais fait. Et la raison pour laquelle personne ne l'explique clairement a beaucoup à voir avec qui bénéficie du fait que nous continuons à croire que si.",
            "## Ce que la javel fait réellement",
            "La javel  hypochlorite de sodium  est un oxydant puissant. Elle dénature les protéines de surface et décompose les pigments qui donnent leur couleur aux moisissures. Quand vous frottez une surface moisie avec de la javel, les moisissures deviennent visuellement incolores. La tache disparaît. C'est réel.",
            "Le problème est ce qui se passe ensuite, et ensuite, et à l'intérieur du mur.",
            "Les moisissures ne vivent pas seulement en surface. Les hyphes  les filaments microscopiques qui constituent la structure du champignon  pénètrent les matériaux poreux. Dans un mur en plâtre peint typique d'un appartement, les hyphes s'étendent de 2 à 5 millimètres dans le substrat. Dans les murs en brique plus anciens, elles peuvent aller plus profond.",
            "La solution de javel est composée à environ 95% d'eau. Quand vous l'appliquez sur un mur, l'eau pénètre. L'hypochlorite ne pénètre pas  il est consommé en réagissant avec la matière organique dans la couche superficielle avant d'atteindre les hyphes à l'intérieur. Les hyphes restent intactes. Le champignon est techniquement vivant et fonctionnel sous la surface que vous venez de nettoyer.",
            "Et de plus : l'eau qui a pénétré a augmenté la teneur en humidité du substrat. Elle a créé des conditions légèrement meilleures pour la repousse. Pas beaucoup. Mais suffisamment pour expliquer pourquoi les moisissures reviennent  et reviennent souvent plus vite que la première fois.",
            "## Ce que disent les organismes internationaux",
            "Ce n'est pas une théorie alternative. C'est la position officielle des principaux organismes mondiaux de santé et de sécurité environnementale.",
            "L'Agence de protection de l'environnement américaine (EPA) est explicite : l'utilisation de biocides qui tuent des organismes comme les moisissures  y compris la javel  n'est pas recommandée comme pratique courante dans le nettoyage des moisissures. La raison : les moisissures mortes restent allergènes. Les mycotoxines  molécules toxiques produites par certaines espèces de moisissures  sont des composés chimiquement stables qui persistent indéfiniment dans le matériau, que l'organisme qui les a produites soit vivant ou mort. Tuer les moisissures ne supprime pas les mycotoxines. Cela ne supprime pas les hyphes. Cela ne supprime pas les bêta-glucanes qui activent le système immunitaire.",
            "L'IICRC S520  la norme internationale de référence pour la remédiation professionnelle des moisissures, maintenant dans sa 4e édition (2024)  est encore plus direct. Le principe fondamental est le suivant : l'élimination physique de la source de contamination est la seule méthode de remédiation primaire acceptable. Les matériaux poreux contaminés  plaques de plâtre, isolation, moquettes, faux plafonds  doivent être physiquement retirés de la structure. La raison : les hyphes pénètrent la matrice du matériau rendant l'élimination complète par nettoyage impossible.",
            "La même norme stipule explicitement que la nébulisation, le traitement à l'ozone, l'encapsulation et l'application de biocides seuls ne sont pas des méthodes de remédiation acceptables. Ce ne sont pas des raccourcis. Ce ne sont pas des alternatives moins chères. Ils sont simplement inefficaces comme solution primaire.",
            "## Les moisissures mortes causent encore des dommages",
            "Ce point mérite une attention particulière car il est contre-intuitif et rarement expliqué.",
            "Quand vous tuez des moisissures avec de la javel ou un autre biocide, ce qui reste sur le mur n'est pas neutre. Les moisissures mortes contiennent encore :",
            "Des bêta-glucanes  composants des parois cellulaires des champignons qui activent des réponses inflammatoires dans le système immunitaire humain, que le champignon soit vivant ou non. L'activité biologique des bêta-glucanes n'est pas affectée par la mort de l'organisme.",
            "Des mycotoxines  si l'espèce présente produisait des toxines, ces toxines restent dans le matériau. La satratoxine G et H du Stachybotrys chartarum, l'ochratoxine A de l'Aspergillus, les trichothécènes de diverses espèces  ce sont des molécules chimiquement stables qui nécessitent des températures de 260°C ou plus pour se décomposer. La javel ne les affecte pas.",
            "Des spores  les spores mortes sont encore allergènes. Elles contiennent encore des protéines qui déclenchent des réponses immunitaires chez les personnes sensibilisées.",
            "L'EPA est claire à ce sujet : tuer les moisissures ne suffit pas  elles doivent être éliminées. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## Le schéma que révèle la localisation",
            "Voici quelque chose qui est rarement expliqué clairement et qui est extraordinairement utile : l'endroit où apparaissent les moisissures vous dit pourquoi elles sont apparues. Et cette cause détermine complètement ce que vous devez faire.",
            "Moisissures dans les coins supérieurs des murs, surtout dans les chambres et les salons  Cause : condensation. L'air chaud et humide de l'intérieur se stratifie près du plafond et rencontre des surfaces plus froides dans les coins. Il condense. Les moisissures colonisent. C'est un problème de ventilation inadéquate combiné à des ponts thermiques  aucun produit de nettoyage ne résout cela.",
            "Moisissures autour des cadres de fenêtres  Cause : pont thermique dans le profil de la fenêtre. Les cadres en aluminium et en fer  standard dans les bâtiments construits entre les années 1960 et 1990  sont d'excellents conducteurs thermiques. En hiver, la surface du cadre peut être à 8 ou 10 degrés, bien en dessous du point de rosée de l'air intérieur. L'humidité condense directement sur le cadre et le mur adjacent. Résolution : améliorer l'isolation de la zone ou remplacer les cadres par des profils à rupture de pont thermique.",
            "Moisissures montant depuis la plinthe, surtout au rez-de-chaussée ou en cave  Cause : remontée capillaire. L'humidité du sol monte par capillarité à travers les murs en maçonnerie sans barrière d'étanchéité horizontale  standard dans les bâtiments antérieurs à 1950. Les moisissures ne sont que le signe visible d'un problème structurel d'humidité. Nécessite un diagnostic et une intervention spécifiques.",
            "Moisissures dans une tache isolée sur un mur intérieur, surtout après de fortes pluies  Cause : infiltration  fissure, joint de dilatation, gouttière bouchée, imperméabilisation déficiente sur le toit ou la terrasse. La localisation est relativement précise. Nécessite de trouver et de colmater l'entrée d'eau.",
            "Moisissures à l'intérieur d'une armoire poussée contre un mur extérieur  C'est la localisation la plus courante et la plus négligée dans les appartements. L'armoire crée un espace non ventilé où l'air humide stagne contre une surface froide. Les moisissures poussent sur l'intérieur du panneau arrière de l'armoire et sur le mur. Les gens le voient rarement avant que ce soit étendu. La résolution passe par éloigner les meubles des murs extérieurs, assurer la circulation de l'air, et vérifier s'il y a une isolation adéquate dans ce mur.",
            "## Ce qui fonctionne vraiment  par niveau de gravité",
            "Moisissures superficielles sur des surfaces non poreuses (carrelage, verre, métal peint)  Élimination physique avec du détergent ordinaire et de l'eau, brossage mécanique, rinçage et séchage complet. La javel peut être utile ici  sur les surfaces non poreuses, où il n'y a pas de substrat pour que les hyphes pénètrent, la capacité oxydante de la javel est adéquate. Mais l'étape la plus importante est d'assurer une meilleure ventilation pour que la situation ne se reproduise pas.",
            "Moisissures sur de petites surfaces semi-poreuses (plâtre peint, surface inférieure à 0,1 m²)  Élimination physique du matériau affecté jusqu'au substrat propre. Ne pas nettoyer par-dessus  retirer. Sécher complètement avant toute réparation. Corriger la source d'humidité avant toute autre action  sans cela, les moisissures réapparaîtront avec une certitude absolue.",
            "Moisissures récurrentes sur n'importe quelle surface  Le retour des moisissures est diagnostique : la source d'humidité n'a pas été identifiée ni corrigée. La question n'est pas \"quel produit j'utilise ?\". La question est \"d'où vient l'eau ?\" Cela nécessite, dans la plupart des cas, une évaluation professionnelle avec un hygromètre et une caméra thermographique pour localiser l'origine  qui peut se trouver dans un mur adjacent, une canalisation, ou le comportement thermique de l'enveloppe du bâtiment.",
            "Moisissures dans des matériaux de construction poreux (plaques de plâtre, isolation, bois de structure affecté)  Élimination physique du matériau. Il n'existe pas de produit de nettoyage adéquat. Ces matériaux, une fois colonisés par des hyphes qui ont pénétré la structure, ne peuvent pas être efficacement décontaminés  ils doivent être retirés et remplacés, avec un confinement adéquat pour éviter la dispersion des spores lors du retrait.",
            "Moisissures dans les systèmes CVC, les conduits de climatisation ou la ventilation mécanique  N'essayez pas de résoudre cela vous-même. Les systèmes de climatisation sont les principaux vecteurs de dispersion des spores, des fragments fongiques et des mycotoxines dans tout le logement. Des moisissures dans un système de climatisation signifient que potentiellement chaque pièce de la maison reçoit une contamination. Nécessite une évaluation et une intervention professionnelles.",
            "## La question que tout le monde devrait poser",
            "Il y a une question qui est rarement posée quand quelqu'un découvre des moisissures chez lui, mais qui détermine complètement si le problème sera résolu ou continuera à réapparaître indéfiniment :",
            "D'où vient l'eau ?",
            "Les moisissures n'apparaissent pas par hasard. Elles ont besoin d'une humidité soutenue  une activité de l'eau supérieure à 0,80 sur la surface de croissance  pendant 24 à 48 heures pour commencer à coloniser, et de conditions qui se répètent régulièrement pour continuer à croître. Si les conditions persistent, les moisissures persistent. Il n'existe aucun produit, service ou traitement qui change cela.",
            "La réponse peut être simple  une fenêtre qui ne ferme pas bien, une salle de bain sans extracteur, une habitude d'étendre le linge à l'intérieur. Elle peut être complexe  un pont thermique structurel dans un bâtiment mal isolé, une imperméabilisation de toiture avec des décennies de dégradation, un système de drainage qui a failli. Mais la question doit toujours être posée avant toute autre action.",
            "La javel ne pose pas cette question. Elle couvre le symptôme pendant quelques semaines. Et c'est pourquoi, pour la plupart des gens, elle ne résout rien.",
            "## Une note sur les 'traitements professionnels'",
            "De nombreux marchés ont un secteur de traitement de l'humidité et des moisissures dominé par des entreprises offrant des diagnostics gratuits suivis de solutions propriétaires  systèmes de ventilation, injections de résine, produits d'encapsulation  pour des montants pouvant atteindre plusieurs milliers d'euros, avec des garanties de 10 ou 30 ans.",
            "Certaines de ces solutions ont une base technique légitime pour des problèmes spécifiques. Un système de ventilation mécanique contrôlée adéquat peut résoudre définitivement un problème de condensation dans un appartement mal ventilé. Une injection de silicone en profondeur peut créer une barrière contre la remontée capillaire.",
            "Le problème n'est pas que ces solutions n'existent pas. C'est que le diagnostic qui les précède est fait par la même entreprise qui les vend. Il n'existe, dans la plupart des pays, aucune infrastructure de diagnostic indépendant permettant à un consommateur d'obtenir un deuxième avis avant de dépenser des milliers d'euros. Aucun inspecteur certifié sans lien avec des entreprises de traitement. Aucun laboratoire d'analyse microbiologique de l'air intérieur pour les logements résidentiels.",
            "En d'autres termes : dans la plupart des marchés, l'information disponible pour les consommateurs sur leur problème de moisissures est presque entièrement produite par des entités ayant un intérêt commercial dans le diagnostic qu'elles présentent.",
            "C'est un problème d'asymétrie d'information. Et c'est, en partie, la raison pour laquelle ce site existe.",
            "## Que faire cette semaine",
            "Si vous avez des moisissures chez vous, voici une séquence honnête :",
            "1. Identifiez l'emplacement exact et l'étendue. Utilisez une lampe de poche. Vérifiez derrière les meubles poussés contre les murs extérieurs. Vérifiez sous les tapis dans les pièces au rez-de-chaussée. Mesurez la surface approximative.",
            "2. Achetez un hygromètre. Ils coûtent entre 15 et 40 euros dans n'importe quel magasin de bricolage. Placez-le dans la pièce affectée à 1,5 mètre du sol, loin des fenêtres. Lisez-le le matin pendant une semaine. Une humidité relative constamment supérieure à 70% en hiver indique un problème de ventilation ou d'isolation que les moisissures ne font que rendre visible.",
            "3. Ventilez activement. Ouvrez les fenêtres dans des pièces opposées pendant 10 minutes le matin pour créer un courant d'air. Utilisez les extracteurs dans la salle de bain et la cuisine pendant et après les activités qui génèrent de l'humidité. Éloignez les meubles des murs extérieurs d'au moins 5 cm.",
            "4. N'appliquez pas de javel sur les murs en plâtre ou en brique. Si vous devez retirer temporairement les moisissures visibles, utilisez l'élimination physique avec du détergent et de l'eau, et sachez que vous gérez le symptôme, pas la cause.",
            "5. Si les moisissures reviennent en moins de 6 semaines, ou couvrent plus de 0,1 m², ou si un membre de la famille a des symptômes respiratoires qui s'améliorent en dehors du domicile  vous êtes face à un problème qui nécessite une évaluation professionnelle indépendante. Pas le diagnostic gratuit d'une entreprise de traitement. Une évaluation indépendante, avec un hygromètre et une caméra thermographique, qui identifie l'origine du problème avant qu'une solution soit proposée.",
            "Les moisissures à la maison sont traitables. Mais seulement quand on commence par la bonne question."
        ],
        disclosure: "Pieter Paul Castelein travaille au FAIRBANK Group, la société derrière InspectOS  une plateforme d'inspection immobilière indépendante opérant au Portugal. MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation. Quand nous recommandons une inspection ou une analyse en laboratoire, c'est parce que nous pensons que vous en avez besoin  pas parce que nous profitons du traitement qui suit.\n\nLes informations dans cet article sont éducatives et ne remplacent pas les conseils techniques ou médicaux professionnels.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "La javel tue-t-elle les moisissures ?",
                answer: "Sur certaines surfaces non poreuses, la javel peut décolorer et endommager les moisissures en surface. Mais sur les matériaux poreux, elle ne supprime pas les hyphes à l'intérieur ni ne résout la cause de l'humidité, donc ce n'est pas une vraie solution."
            },
            {
                question: "Pourquoi les moisissures reviennent-elles après avoir utilisé de la javel ?",
                answer: "Parce que la javel agit principalement en surface. Sur les murs, le plâtre, le bois, le placo ou d'autres matériaux poreux, le champignon peut rester actif à l'intérieur. De plus, l'eau de la solution peut favoriser la repousse."
            },
            {
                question: "La javel supprime-t-elle les mycotoxines et les allergènes ?",
                answer: "Non. Tuer ou décolorer les moisissures ne supprime pas automatiquement les mycotoxines, les bêta-glucanes, les fragments fongiques ou les spores allergènes. Le matériau contaminé peut donc rester problématique."
            },
            {
                question: "Quand la javel peut-elle être utile ?",
                answer: "Elle peut être utile sur les surfaces non poreuses, comme le verre, le carrelage ou le métal peint, surtout dans le cadre d'un nettoyage physique. Même dans ces cas, si la ventilation et l'humidité ne sont pas corrigées, les moisissures peuvent revenir."
            },
            {
                question: "Quelle est la question la plus importante quand des moisissures apparaissent ?",
                answer: "La bonne question est : \"d'où vient l'eau ?\" Sans identifier et corriger la source d'humidité  condensation, infiltration, remontée capillaire ou fuite  tout nettoyage sera temporaire."
            }
        ]
    },
    de: {
        seoTitle: "Warum Bleichmittel Schimmel nicht Beseitigt | MoldCheck.pt",
        seoDescription: "Bleichmittel beseitigt Schimmel auf porösen Oberflächen nicht. Erfahren Sie, warum Schimmel zurückkommt, was EPA und IICRC sagen, und was wirklich hilft.",
        focusKeyword: "Bleichmittel Schimmel",
        title: "Warum Bleichmittel Schimmel nicht Beseitigt  Und Was Wirklich Hilft",
        byline: "Von Pieter Paul Castelein, Mitgründer & CEO, FAIRBANK Group",
        body: [
            "Es gibt eine Szene, die sich in Häusern auf der ganzen Welt wiederholt.",
            "Jemand entdeckt Schimmel in einer Badezimmerecke, hinter dem Schlafzimmerschrank oder an einer Küchenwand. Er geht in den Baumarkt. Er kauft eine Flasche Bleichmittel. Er schrubbt. Der Schimmel verschwindet. Die Wand sieht sauber und weiß aus. Die Person fühlt sich erleichtert  Problem gelöst.",
            "Drei Wochen später ist der Schimmel zurück. Genau an derselben Stelle. Manchmal größer.",
            "Das ist kein Pech. Es liegt nicht daran, dass das Bleichmittel zu verdünnt war, oder dass nicht genug geschrubbt wurde, oder dass nicht lange genug gewartet wurde. Es liegt daran, dass Bleichmittel Schimmel auf porösen Oberflächen nicht behandelt. Das hat es nie getan. Und der Grund, warum niemand das klar erklärt, hat viel damit zu tun, wer davon profitiert, wenn wir weiterhin glauben, dass es das tut.",
            "## Was Bleichmittel wirklich tut",
            "Bleichmittel  Natriumhypochlorit  ist ein starkes Oxidationsmittel. Es denaturiert Oberflächenproteine und zersetzt die Pigmente, die Schimmel seine Farbe geben. Wenn Sie eine schimmelige Oberfläche mit Bleichmittel schrubben, wird der Schimmel visuell farblos. Der Fleck verschwindet. Das ist real.",
            "Das Problem liegt darin, was als nächstes passiert, und danach, und innerhalb der Wand.",
            "Schimmel lebt nicht nur an der Oberfläche. Hyphen  die mikroskopischen Fäden, die die Pilzstruktur bilden  dringen in poröse Materialien ein. In einer typisch gestrichenen Putzwand eines Apartments erstrecken sich die Hyphen 2 bis 5 Millimeter in das Substrat. In älteren Ziegelwänden können sie tiefer gehen.",
            "Bleichmittellösung besteht zu etwa 95% aus Wasser. Wenn Sie es auf eine Wand auftragen, dringt das Wasser ein. Das Hypochlorit dringt nicht ein  es wird verbraucht, indem es mit organischer Materie in der Oberflächenschicht reagiert, bevor es die Hyphen im Inneren erreicht. Die Hyphen bleiben intakt. Der Pilz ist technisch gesehen lebendig und funktionsfähig unter der Oberfläche, die Sie gerade gereinigt haben.",
            "Und mehr noch: Das eingedrungene Wasser hat den Feuchtigkeitsgehalt des Substrats erhöht. Es hat leicht bessere Bedingungen für das Nachwachsen geschaffen. Nicht viel. Aber genug, um zu erklären, warum Schimmel zurückkommt  und oft schneller zurückkommt als beim ersten Mal.",
            "## Was internationale Organisationen sagen",
            "Das ist keine alternative Theorie. Es ist die offizielle Position der weltweit führenden Umweltgesundheits- und Sicherheitsbehörden.",
            "Die US-Umweltschutzbehörde (EPA) ist eindeutig: Die Verwendung von Bioziden, die Organismen wie Schimmel abtöten  einschließlich Bleichmittel  wird nicht als Routinepraxis bei der Schimmelbeseitigung empfohlen. Der Grund: Toter Schimmel ist immer noch allergen. Mykotoxine  toxische Moleküle, die von bestimmten Schimmelarten produziert werden  sind chemisch stabile Verbindungen, die im Material auf unbestimmte Zeit bestehen bleiben, unabhängig davon, ob der Organismus, der sie produziert hat, lebendig oder tot ist. Das Abtöten des Schimmels entfernt die Mykotoxine nicht. Es entfernt die Hyphen nicht. Es entfernt die Beta-Glucane nicht, die das Immunsystem aktivieren.",
            "Der IICRC S520  der internationale Referenzstandard für professionelle Schimmelbeseitigung, jetzt in seiner 4. Ausgabe (2024)  ist noch direkter. Das Grundprinzip lautet: Die physische Entfernung der Kontaminationsquelle ist die einzige akzeptable primäre Sanierungsmethode. Poröse kontaminierte Materialien  Gipskartonplatten, Dämmung, Teppiche, Unterdecken  müssen physisch aus der Struktur entfernt werden. Der Grund: Hyphen dringen in die Materialmatrix ein, was eine vollständige Entfernung durch Reinigung unmöglich macht.",
            "Derselbe Standard besagt ausdrücklich, dass Vernebelung, Ozonbehandlung, Verkapselung und alleinige Biozidanwendung keine akzeptablen Sanierungsmethoden sind. Sie sind keine Abkürzungen. Sie sind keine günstigeren Alternativen. Sie sind als primäre Lösungen einfach unwirksam.",
            "## Toter Schimmel verursacht immer noch Schäden",
            "Dieser Punkt verdient besondere Aufmerksamkeit, weil er kontraintuitiv ist und selten erklärt wird.",
            "Wenn Sie Schimmel mit Bleichmittel oder einem anderen Biozid abtöten, ist das, was an der Wand verbleibt, nicht neutral. Toter Schimmel enthält immer noch:",
            "Beta-Glucane  Bestandteile der Pilzzellwände, die Entzündungsreaktionen im menschlichen Immunsystem auslösen, unabhängig davon, ob der Pilz lebendig ist. Die biologische Aktivität von Beta-Glucanen wird durch den Tod des Organismus nicht beeinflusst.",
            "Mykotoxine  wenn die vorhandene Art Toxine produzierte, verbleiben diese Toxine im Material. Satratoxin G und H von Stachybotrys chartarum, Ochratoxin A von Aspergillus, Trichothecene von verschiedenen Arten  das sind chemisch stabile Moleküle, die Temperaturen von 260°C oder mehr benötigen, um sich zu zersetzen. Bleichmittel beeinflusst sie nicht.",
            "Sporen  tote Sporen sind immer noch allergen. Sie enthalten immer noch Proteine, die Immunreaktionen bei sensibilisierten Personen auslösen.",
            "Die EPA ist diesbezüglich klar: Das Abtöten des Schimmels reicht nicht aus  er muss entfernt werden. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## Das Muster, das der Standort offenbart",
            "Hier ist etwas, das selten klar erklärt wird und außerordentlich nützlich ist: Wo Schimmel erscheint, sagt Ihnen, warum er erschienen ist. Und diese Ursache bestimmt vollständig, was Sie tun müssen.",
            "Schimmel in oberen Wandecken, besonders in Schlafzimmern und Wohnzimmern  Ursache: Kondensation. Warme, feuchte Innenluft schichtet sich nahe der Decke und trifft auf kältere Oberflächen in den Ecken. Sie kondensiert. Schimmel besiedelt. Das ist ein Problem unzureichender Belüftung kombiniert mit Wärmebrücken  kein Reinigungsprodukt löst das.",
            "Schimmel um Fensterrahmen  Ursache: Wärmebrücke im Fensterprofil. Aluminium- und Eisenrahmen  Standard in Gebäuden aus den 1960er bis 1990er Jahren  sind ausgezeichnete Wärmeleiter. Im Winter kann die Rahmenoberfläche bei 8 oder 10 Grad liegen, weit unter dem Taupunkt der Innenluft. Feuchtigkeit kondensiert direkt am Rahmen und der angrenzenden Wand. Lösung: Isolierung der Zone verbessern oder Rahmen durch thermisch getrennte Profile ersetzen.",
            "Schimmel, der von der Fußleiste aufsteigt, besonders im Erdgeschoss oder Keller  Ursache: Kapillaraufstieg. Feuchtigkeit aus dem Boden steigt durch Kapillarwirkung durch Mauerwerk ohne horizontale Feuchtigkeitssperre auf  Standard in Gebäuden vor 1950. Der Schimmel ist nur das sichtbare Zeichen eines strukturellen Feuchtigkeitsproblems. Erfordert spezifische Diagnose und Intervention.",
            "Schimmel in einem isolierten Fleck an einer Innenwand, besonders nach starkem Regen  Ursache: Infiltration  Riss, Dehnungsfuge, verstopfte Regenrinne, mangelhafte Abdichtung auf dem Dach oder der Terrasse. Die Lage ist relativ präzise. Erfordert das Auffinden und Abdichten des Wassereintritts.",
            "Schimmel im Inneren eines Schrankes, der an eine Außenwand geschoben ist  Das ist die häufigste und am meisten übersehene Lage in Wohnungen. Der Schrank schafft einen unbelüfteten Raum, in dem feuchte Luft gegen eine kalte Oberfläche stagniert. Schimmel wächst auf der Innenseite der Rückwand des Schrankes und an der Wand. Menschen sehen das selten, bis es ausgedehnt ist. Die Lösung besteht darin, Möbel von Außenwänden wegzurücken, Luftzirkulation zu gewährleisten und zu untersuchen, ob in dieser Wand eine angemessene Dämmung vorhanden ist.",
            "## Was wirklich hilft  nach Schweregrad",
            "Oberflächlicher Schimmel auf nicht porösen Oberflächen (Fliesen, Glas, lackiertes Metall)  Physische Entfernung mit gewöhnlichem Reinigungsmittel und Wasser, mechanisches Schrubben, Spülen und vollständiges Trocknen. Bleichmittel kann hier nützlich sein  auf nicht porösen Oberflächen, wo kein Substrat für das Eindringen von Hyphen vorhanden ist, ist die Oxidationskapazität von Bleichmittel ausreichend. Aber der wichtigste Schritt ist die Sicherstellung einer besseren Belüftung, damit sich die Situation nicht wiederholt.",
            "Schimmel auf kleinen halbporösen Oberflächen (gestrichener Putz, Fläche unter 0,1 m²)  Physische Entfernung des betroffenen Materials bis zum sauberen Substrat. Nicht darüber reinigen  entfernen. Vor jeder Reparatur vollständig trocknen. Die Feuchtigkeitsquelle vor jeder anderen Maßnahme korrigieren  ohne das wird Schimmel mit absoluter Sicherheit wiederkehren.",
            "Wiederkehrender Schimmel auf jeder Oberfläche  Die Rückkehr von Schimmel ist diagnostisch: Die Feuchtigkeitsquelle wurde nicht identifiziert oder korrigiert. Die Frage ist nicht \"welches Produkt verwende ich?\". Die Frage ist \"woher kommt das Wasser?\" Dies erfordert in den meisten Fällen eine professionelle Beurteilung mit einem Feuchtigkeitsmessgerät und einer Thermografiekamera, um den Ursprung zu lokalisieren  der sich in einer angrenzenden Wand, einer Rohrleitung oder dem thermischen Verhalten der Gebäudehülle befinden kann.",
            "Schimmel in porösen Baumaterialien (Gipskartonplatten, Dämmung, betroffenes Strukturholz)  Physische Entfernung des Materials. Es gibt kein geeignetes Reinigungsprodukt. Diese Materialien können, einmal von Hyphen besiedelt, die in die Struktur eingedrungen sind, nicht effektiv dekontaminiert werden  sie müssen entfernt und ersetzt werden, mit angemessener Eindämmung, um die Sporenverteilung während der Entfernung zu verhindern.",
            "Schimmel in HLK-Systemen, Klimaanlagenkanälen oder mechanischer Belüftung  Versuchen Sie nicht, das selbst zu lösen. Klimasysteme sind die primären Vektoren für die Verteilung von Sporen, Pilzfragmenten und Mykotoxinen im gesamten Haus. Schimmel in einer Klimaanlage bedeutet, dass potenziell jedes Zimmer im Haus Kontamination erhält. Erfordert professionelle Beurteilung und Intervention.",
            "## Die Frage, die jeder stellen sollte",
            "Es gibt eine Frage, die selten gestellt wird, wenn jemand Schimmel zu Hause entdeckt, die aber vollständig bestimmt, ob das Problem gelöst wird oder immer wieder auftaucht:",
            "Woher kommt das Wasser?",
            "Schimmel erscheint nicht zufällig. Er braucht anhaltende Feuchtigkeit  eine Wasseraktivität über 0,80 auf der Wachstumsoberfläche  für 24 bis 48 Stunden, um mit der Besiedlung zu beginnen, und Bedingungen, die sich regelmäßig wiederholen, um weiter zu wachsen. Wenn die Bedingungen anhalten, hält der Schimmel an. Es gibt kein Produkt, keine Dienstleistung oder Behandlung, die das ändert.",
            "Die Antwort kann einfach sein  ein Fenster, das nicht gut abdichtet, ein Badezimmer ohne Abzugsventilator, eine Gewohnheit, Wäsche drinnen zu trocknen. Sie kann komplex sein  eine strukturelle Wärmebrücke in einem schlecht isolierten Gebäude, eine Dachabdichtung mit jahrzehntelanger Degradation, ein Entwässerungssystem, das versagt hat. Aber die Frage muss immer vor jeder anderen Maßnahme gestellt werden.",
            "Bleichmittel stellt diese Frage nicht. Es deckt das Symptom für ein paar Wochen ab. Und deshalb löst es für die meisten Menschen nichts.",
            "## Eine Anmerkung zu 'professionellen Behandlungen'",
            "Viele Märkte haben einen Feuchtigkeits- und Schimmelbehandlungssektor, der von Unternehmen dominiert wird, die kostenlose Diagnosen gefolgt von proprietären Lösungen anbieten  Belüftungssysteme, Harzinjektionen, Verkapselungsprodukte  für Beträge, die mehrere tausend Euro erreichen können, mit 10- oder 30-jährigen Garantien.",
            "Einige dieser Lösungen haben eine legitime technische Grundlage für spezifische Probleme. Ein geeignetes kontrolliertes mechanisches Belüftungssystem kann ein Kondensationsproblem in einer schlecht belüfteten Wohnung definitiv lösen. Eine tiefe Silikoninjektion kann eine Barriere gegen Kapillaraufstieg schaffen.",
            "Das Problem ist nicht, dass diese Lösungen nicht existieren. Es ist, dass die Diagnose, die ihnen vorausgeht, von demselben Unternehmen gestellt wird, das sie verkauft. Es gibt in den meisten Ländern keine Infrastruktur für unabhängige Diagnosen, die es einem Verbraucher ermöglicht, eine zweite Meinung einzuholen, bevor er Tausende von Euro ausgibt. Kein zertifizierter Inspektor ohne Verbindungen zu Behandlungsunternehmen. Kein mikrobiologisches Luftanalyselabor für Wohngebäude.",
            "Mit anderen Worten: In den meisten Märkten werden die dem Verbraucher verfügbaren Informationen über sein Schimmelproblem fast ausschließlich von Einrichtungen produziert, die ein kommerzielles Interesse an der Diagnose haben, die sie präsentieren.",
            "Das ist ein Problem der Informationsasymmetrie. Und es ist zum Teil der Grund, warum diese Website existiert.",
            "## Was diese Woche zu tun ist",
            "Wenn Sie Schimmel zu Hause haben, hier ist eine ehrliche Abfolge:",
            "1. Identifizieren Sie den genauen Standort und die Ausdehnung. Verwenden Sie eine Taschenlampe. Überprüfen Sie hinter Möbeln, die an Außenwände geschoben sind. Überprüfen Sie unter Teppichen in Erdgeschossräumen. Messen Sie die ungefähre Fläche.",
            "2. Kaufen Sie ein Hygrometer. Sie kosten zwischen 15 und 40 Euro in jedem Baumarkt. Stellen Sie es im betroffenen Raum 1,5 Meter vom Boden entfernt auf, weg von Fenstern. Lesen Sie es morgens eine Woche lang ab. Eine relative Luftfeuchtigkeit, die im Winter konstant über 70% liegt, weist auf ein Belüftungs- oder Isolierungsproblem hin, das der Schimmel nur sichtbar macht.",
            "3. Lüften Sie aktiv. Öffnen Sie Fenster in gegenüberliegenden Räumen 10 Minuten lang morgens, um einen Luftzug zu erzeugen. Verwenden Sie Abzugsventilatoren im Badezimmer und in der Küche während und nach Aktivitäten, die Feuchtigkeit erzeugen. Rücken Sie Möbel mindestens 5 cm von Außenwänden weg.",
            "4. Tragen Sie kein Bleichmittel auf Putz- oder Ziegelwände auf. Wenn Sie sichtbaren Schimmel vorübergehend entfernen müssen, verwenden Sie physische Entfernung mit Reinigungsmittel und Wasser, und wissen Sie, dass Sie das Symptom behandeln, nicht die Ursache.",
            "5. Wenn Schimmel in weniger als 6 Wochen zurückkommt, oder mehr als 0,1 m² bedeckt, oder wenn ein Familienmitglied Atemwegssymptome hat, die sich außerhalb des Hauses verbessern  stehen Sie vor einem Problem, das eine unabhängige professionelle Beurteilung erfordert. Nicht die kostenlose Diagnose eines Behandlungsunternehmens. Eine unabhängige Beurteilung mit einem Feuchtigkeitsmessgerät und einer Thermografiekamera, die den Ursprung des Problems identifiziert, bevor eine Lösung vorgeschlagen wird.",
            "Schimmel zu Hause ist behandelbar. Aber nur, wenn man mit der richtigen Frage beginnt."
        ],
        disclosure: "Pieter Paul Castelein arbeitet bei der FAIRBANK Group, dem Unternehmen hinter InspectOS  einer unabhängigen Immobilieninspektionsplattform in Portugal. MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie eine brauchen  nicht weil wir von der folgenden Behandlung profitieren.\n\nDie Informationen in diesem Artikel sind pädagogischer Natur und ersetzen keine professionelle technische oder medizinische Beratung.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "Tötet Bleichmittel Schimmel?",
                answer: "Auf einigen nicht porösen Oberflächen kann Bleichmittel Oberflächenschimmel entfärben und beschädigen. Aber auf porösen Materialien entfernt es die Hyphen im Inneren nicht und löst die Feuchtigkeitsursache nicht, daher ist es keine echte Lösung."
            },
            {
                question: "Warum kommt Schimmel nach der Verwendung von Bleichmittel zurück?",
                answer: "Weil Bleichmittel hauptsächlich an der Oberfläche wirkt. Auf Wänden, Putz, Holz, Gipskarton oder anderen porösen Materialien kann der Pilz im Inneren aktiv bleiben. Außerdem kann das Wasser in der Lösung das Nachwachsen begünstigen."
            },
            {
                question: "Entfernt Bleichmittel Mykotoxine und Allergene?",
                answer: "Nein. Das Abtöten oder Entfärben von Schimmel entfernt nicht automatisch Mykotoxine, Beta-Glucane, Pilzfragmente oder allergene Sporen. Das kontaminierte Material kann daher weiterhin problematisch sein."
            },
            {
                question: "Wann kann Bleichmittel nützlich sein?",
                answer: "Es kann auf nicht porösen Oberflächen wie Glas, Fliesen oder lackiertem Metall nützlich sein, besonders als Teil einer physischen Reinigung. Selbst dann kann Schimmel zurückkehren, wenn Belüftung und Feuchtigkeit nicht korrigiert werden."
            },
            {
                question: "Was ist die wichtigste Frage, wenn Schimmel erscheint?",
                answer: "Die richtige Frage ist: \"Woher kommt das Wasser?\" Ohne die Feuchtigkeitsquelle zu identifizieren und zu korrigieren  Kondensation, Infiltration, Kapillaraufstieg oder ein Leck  wird jede Reinigung vorübergehend sein."
            }
        ]
    },
    nl: {
        seoTitle: "Waarom Bleekwater Schimmel niet Oplost | MoldCheck.pt",
        seoDescription: "Bleekwater lost schimmel op poreuze oppervlakken niet op. Ontdek waarom schimmel terugkomt, wat EPA en IICRC zeggen, en wat echt werkt.",
        focusKeyword: "bleekwater schimmel",
        title: "Waarom Bleekwater Schimmel niet Oplost  En Wat Echt Werkt",
        byline: "Door Pieter Paul Castelein, Medeoprichter & CEO, FAIRBANK Group",
        body: [
            "Er is een scène die zich herhaalt in huizen over de hele wereld.",
            "Iemand ontdekt schimmel in een badkamerhoek, achter de slaapkamerkast, of langs een keukenmuur. Ze gaan naar de bouwmarkt. Ze kopen een fles bleekwater. Ze schrobben. De schimmel verdwijnt. De muur ziet er schoon en wit uit. De persoon voelt zich opgelucht  probleem opgelost.",
            "Drie weken later is de schimmel terug. Precies op dezelfde plek. Soms groter.",
            "Dat is geen pech. Het is niet omdat het bleekwater te verdund was, of er niet hard genoeg geschrobd werd, of er niet lang genoeg gewacht werd. Het is omdat bleekwater schimmel op poreuze oppervlakken niet behandelt. Dat heeft het nooit gedaan. En de reden waarom niemand dit duidelijk uitlegt heeft veel te maken met wie er baat bij heeft als we blijven geloven dat het dat wel doet.",
            "## Wat bleekwater echt doet",
            "Bleekwater  natriumhypochloriet  is een krachtig oxidatiemiddel. Het denatureert oppervlakteproteïnen en breekt de pigmenten af die schimmel zijn kleur geven. Wanneer u een schimmeloppervlak met bleekwater schrobt, wordt de schimmel visueel kleurloos. De vlek verdwijnt. Dat deel is echt.",
            "Het probleem zit in wat er daarna gebeurt, en daarna, en binnen de muur.",
            "Schimmel leeft niet alleen aan de oppervlakte. Hyfen  de microscopische draden die de schimmelstructuur vormen  dringen door in poreuze materialen. In een typische geschilderde pleisterwand van een appartement strekken de hyfen zich 2 tot 5 millimeter uit in het substraat. In oudere bakstenen muren kunnen ze dieper gaan.",
            "Bleekwateroplossing bestaat voor ongeveer 95% uit water. Wanneer u het op een muur aanbrengt, dringt het water door. Het hypochloriet dringt niet door  het wordt verbruikt door te reageren met organisch materiaal in de oppervlaktelaag voordat het de hyfen binnenin bereikt. De hyfen blijven intact. De schimmel is technisch gezien levend en functioneel onder het oppervlak dat u net hebt schoongemaakt.",
            "En meer nog: het water dat is doorgedrongen heeft het vochtgehalte van het substraat verhoogd. Het heeft iets betere omstandigheden gecreëerd voor hergroei. Niet veel. Maar genoeg om te helpen verklaren waarom schimmel terugkomt  en vaak sneller terugkomt dan de eerste keer.",
            "## Wat internationale organisaties zeggen",
            "Dit is geen alternatieve theorie. Het is het officiële standpunt van 's werelds toonaangevende milieugezondheids- en veiligheidsinstanties.",
            "Het Amerikaanse Milieubeschermingsagentschap (EPA) is expliciet: het gebruik van biociden die organismen zoals schimmel doden  inclusief bleekwater  wordt niet aanbevolen als routinepraktijk bij schimmelverwijdering. De reden: dode schimmel is nog steeds allergeen. Mycotoxinen  giftige moleculen die door bepaalde schimmelsoorten worden geproduceerd  zijn chemisch stabiele verbindingen die voor onbepaalde tijd in het materiaal blijven bestaan, ongeacht of het organisme dat ze heeft geproduceerd levend of dood is. Het doden van de schimmel verwijdert de mycotoxinen niet. Het verwijdert de hyfen niet. Het verwijdert de bèta-glucanen niet die het immuunsysteem activeren.",
            "De IICRC S520  de internationale referentienorm voor professionele schimmelremediatie, nu in zijn 4e editie (2024)  is nog directer. Het fundamentele principe is dit: fysieke verwijdering van de contaminatiebron is de enige aanvaardbare primaire remediatiemethod. Poreuze besmette materialen  gipsplaten, isolatie, tapijt, verlaagd plafond  moeten fysiek uit de structuur worden verwijderd. De reden: hyfen dringen door in de materiaalmatrix waardoor volledige verwijdering door reiniging onmogelijk is.",
            "Dezelfde norm stelt expliciet dat vernevelaars, ozonbehandeling, inkapseling en biocidetoepassing alleen geen aanvaardbare remediatiemethoden zijn. Het zijn geen snelkoppelingen. Het zijn geen goedkopere alternatieven. Ze zijn simpelweg ineffectief als primaire oplossingen.",
            "## Dode schimmel veroorzaakt nog steeds schade",
            "Dit punt verdient speciale aandacht omdat het contra-intuïtief is en zelden wordt uitgelegd.",
            "Wanneer u schimmel doodt met bleekwater of een ander biocide, is wat er op de muur achterblijft niet neutraal. Dode schimmel bevat nog steeds:",
            "Bèta-glucanen  componenten van schimmelcelwanden die ontstekingsreacties in het menselijk immuunsysteem activeren, ongeacht of de schimmel levend is. De biologische activiteit van bèta-glucanen wordt niet beïnvloed door de dood van het organisme.",
            "Mycotoxinen  als de aanwezige soort toxinen produceerde, blijven die toxinen in het materiaal. Satratoxine G en H van Stachybotrys chartarum, ochratoxine A van Aspergillus, trichothecenen van verschillende soorten  dit zijn chemisch stabiele moleculen die temperaturen van 260°C of meer nodig hebben om te ontleden. Bleekwater heeft er geen invloed op.",
            "Sporen  dode sporen zijn nog steeds allergeen. Ze bevatten nog steeds eiwitten die immuunreacties veroorzaken bij gesensibiliseerde personen.",
            "De EPA is hierover duidelijk: het doden van de schimmel is niet genoeg  het moet worden verwijderd. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## Het patroon dat de locatie onthult",
            "Hier is iets dat zelden duidelijk wordt uitgelegd en buitengewoon nuttig is: waar schimmel verschijnt vertelt u waarom het is verschenen. En die oorzaak bepaalt volledig wat u moet doen.",
            "Schimmel in bovenste muurhoeken, vooral in slaapkamers en woonkamers  Oorzaak: condensatie. Warme, vochtige binnenlucht stratificeert nabij het plafond en ontmoet koelere oppervlakken in de hoeken. Het condenseert. Schimmel koloniseert. Dit is een probleem van onvoldoende ventilatie gecombineerd met koudebruggen  geen reinigingsproduct lost dit op.",
            "Schimmel rond vensterframes  Oorzaak: koudebrug in het vensterprofiel. Aluminium en ijzeren frames  standaard in gebouwen gebouwd tussen de jaren 1960 en 1990  zijn uitstekende warmtegeleiders. In de winter kan het frameoppervlak op 8 of 10 graden liggen, ruim onder het dauwpunt van de binnenlucht. Vocht condenseert direct op het frame en de aangrenzende muur. Oplossing: isolatie van de zone verbeteren of frames vervangen door thermisch onderbroken profielen.",
            "Schimmel die opstijgt vanaf de plint, vooral op begane grond of in kelders  Oorzaak: capillaire opstijging. Vocht uit de grond stijgt door capillariteit door metselwerk zonder horizontale vochtbarrière  standaard in gebouwen van voor 1950. De schimmel is slechts het zichtbare teken van een structureel vochtprobleem. Vereist specifieke diagnose en interventie.",
            "Schimmel in een geïsoleerde vlek op een binnenmuur, vooral na hevige regen  Oorzaak: infiltratie  scheur, dilatatievoeg, verstopte goot, gebrekkige waterdichting op het dak of terras. De locatie is relatief precies. Vereist het vinden en afdichten van de wateringang.",
            "Schimmel in een kast die tegen een buitenmuur is geplaatst  Dit is de meest voorkomende en meest over het hoofd geziene locatie in appartementen. De kast creëert een ongeventileerde ruimte waar vochtige lucht stagneert tegen een koud oppervlak. Schimmel groeit op de binnenkant van de achterwand van de kast en op de muur. Mensen zien dit zelden totdat het uitgebreid is. De oplossing is meubels van buitenmuren weg te plaatsen, luchtcirculatie te garanderen en te onderzoeken of er voldoende isolatie in die muur aanwezig is.",
            "## Wat echt werkt  per ernstniveau",
            "Oppervlakkige schimmel op niet-poreuze oppervlakken (tegels, glas, gelakt metaal)  Fysieke verwijdering met gewoon reinigingsmiddel en water, mechanisch schrobben, spoelen en volledig drogen. Bleekwater kan hier nuttig zijn  op niet-poreuze oppervlakken, waar geen substraat is voor hyfen om door te dringen, is de oxiderende capaciteit van bleekwater voldoende. Maar de belangrijkste stap is het zorgen voor betere ventilatie zodat de situatie zich niet herhaalt.",
            "Schimmel op kleine semi-poreuze oppervlakken (geschilderd pleisterwerk, oppervlak onder 0,1 m²)  Fysieke verwijdering van het aangetaste materiaal tot aan schoon substraat. Niet erover heen reinigen  verwijderen. Volledig drogen voor elke reparatie. De vochtbron corrigeren voor elke andere actie  zonder dat zal schimmel met absolute zekerheid terugkeren.",
            "Terugkerende schimmel op elk oppervlak  De terugkeer van schimmel is diagnostisch: de vochtbron is niet geïdentificeerd of gecorrigeerd. De vraag is niet \"welk product gebruik ik?\". De vraag is \"waar komt het water vandaan?\" Dit vereist in de meeste gevallen een professionele beoordeling met een vochtmeter en thermografische camera om de oorsprong te lokaliseren  die zich in een aangrenzende muur, een leiding of het thermisch gedrag van de gebouwschil kan bevinden.",
            "Schimmel in poreuze bouwmaterialen (gipsplaten, isolatie, aangetast constructiehout)  Fysieke verwijdering van het materiaal. Er is geen geschikt reinigingsproduct. Deze materialen kunnen, eenmaal gekoloniseerd door hyfen die in de structuur zijn doorgedrongen, niet effectief worden gedecontamineerd  ze moeten worden verwijderd en vervangen, met adequate insluiting om verspreiding van sporen tijdens verwijdering te voorkomen.",
            "Schimmel in HVAC-systemen, airconditioningkanalen of mechanische ventilatie  Probeer dit niet zelf op te lossen. Klimaatsystemen zijn de primaire vectoren voor het verspreiden van sporen, schimmelfragmenten en mycotoxinen door het hele huis. Schimmel in een airconditioningsysteem betekent dat potentieel elke kamer in het huis besmetting ontvangt. Vereist professionele beoordeling en interventie.",
            "## De vraag die iedereen zou moeten stellen",
            "Er is een vraag die zelden wordt gesteld wanneer iemand schimmel thuis ontdekt, maar die volledig bepaalt of het probleem wordt opgelost of steeds opnieuw zal verschijnen:",
            "Waar komt het water vandaan?",
            "Schimmel verschijnt niet toevallig. Het heeft aanhoudend vocht nodig  een wateractiviteit boven 0,80 op het groeioppervlak  gedurende 24 tot 48 uur om te beginnen koloniseren, en omstandigheden die regelmatig terugkeren om te blijven groeien. Als de omstandigheden aanhouden, houdt de schimmel aan. Er is geen product, dienst of behandeling die dit verandert.",
            "Het antwoord kan eenvoudig zijn  een raam dat niet goed afsluit, een badkamer zonder afzuigventilator, een gewoonte om was binnenshuis te drogen. Het kan complex zijn  een structurele koudebrug in een slecht geïsoleerd gebouw, een dakwaterdichting met decennia van degradatie, een drainagesysteem dat heeft gefaald. Maar de vraag moet altijd worden gesteld voor elke andere actie.",
            "Bleekwater stelt deze vraag niet. Het bedekt het symptoom voor een paar weken. En daarom lost het voor de meeste mensen niets op.",
            "## Een noot over 'professionele behandelingen'",
            "Veel markten hebben een vocht- en schimmelbehandelingssector die wordt gedomineerd door bedrijven die gratis diagnoses aanbieden gevolgd door propriëtaire oplossingen  ventilatiesystemen, harsinjekties, inkapselingsproducten  voor bedragen die kunnen oplopen tot enkele duizenden euro's, met garanties van 10 of 30 jaar.",
            "Sommige van deze oplossingen hebben een legitieme technische basis voor specifieke problemen. Een adequaat gecontroleerd mechanisch ventilatiesysteem kan een condensatieprobleem in een slecht geventileerd appartement definitief oplossen. Een diepe siliconeninjektie kan een barrière creëren tegen capillaire opstijging.",
            "Het probleem is niet dat deze oplossingen niet bestaan. Het is dat de diagnose die eraan voorafgaat wordt gesteld door hetzelfde bedrijf dat ze verkoopt. Er is in de meeste landen geen infrastructuur voor onafhankelijke diagnose die een consument in staat stelt een tweede mening te krijgen voordat hij duizenden euro's uitgeeft. Geen gecertificeerde inspecteur zonder banden met behandelingsbedrijven. Geen microbiologisch luchtanalyselaboratorium voor woningen.",
            "Met andere woorden: in de meeste markten wordt de informatie die beschikbaar is voor consumenten over hun schimmelprobleem bijna uitsluitend geproduceerd door entiteiten met een commercieel belang bij de diagnose die ze presenteren.",
            "Dit is een probleem van informatieasymmetrie. En het is, deels, de reden waarom deze website bestaat.",
            "## Wat deze week te doen",
            "Als u schimmel thuis heeft, hier is een eerlijke volgorde:",
            "1. Identificeer de exacte locatie en omvang. Gebruik een zaklamp. Controleer achter meubels die tegen buitenmuren zijn geplaatst. Controleer onder tapijten in begane grond kamers. Meet de geschatte oppervlakte.",
            "2. Koop een hygrometer. Ze kosten tussen de 15 en 40 euro bij elke bouwmarkt. Plaats het in de aangetaste kamer op 1,5 meter van de vloer, weg van ramen. Lees het 's ochtends een week lang af. Een relatieve luchtvochtigheid die in de winter consistent boven de 70% ligt, wijst op een ventilatie- of isolatieprobleem dat de schimmel alleen maar zichtbaar maakt.",
            "3. Ventileer actief. Open ramen in tegenoverliggende kamers gedurende 10 minuten 's ochtends om een tocht te creëren. Gebruik afzuigventilatoren in de badkamer en keuken tijdens en na activiteiten die vocht genereren. Verplaats meubels minstens 5 cm van buitenmuren.",
            "4. Breng geen bleekwater aan op pleister- of bakstenen muren. Als u zichtbare schimmel tijdelijk moet verwijderen, gebruik dan fysieke verwijdering met reinigingsmiddel en water, en weet dat u het symptoom beheert, niet de oorzaak.",
            "5. Als schimmel in minder dan 6 weken terugkeert, of meer dan 0,1 m² bedekt, of als een gezinslid luchtwegklachten heeft die buiten het huis verbeteren  staat u voor een probleem dat een onafhankelijke professionele beoordeling vereist. Niet de gratis diagnose van een behandelingsbedrijf. Een onafhankelijke beoordeling, met een vochtmeter en thermografische camera, die de oorsprong van het probleem identificeert voordat een oplossing wordt voorgesteld.",
            "Schimmel thuis is behandelbaar. Maar alleen als u begint met de juiste vraag."
        ],
        disclosure: "Pieter Paul Castelein werkt bij FAIRBANK Group, het bedrijf achter InspectOS  een onafhankelijk vastgoedinspectieplatform actief in Portugal. MoldCheck.pt is een initiatief van FAIRBANK Group. We verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijen. Wanneer we een inspectie of laboratoriumtest aanbevelen, is dat omdat we geloven dat u er een nodig heeft  niet omdat we profiteren van de behandeling die volgt.\n\nDe informatie in dit artikel is educatief en vervangt geen professioneel technisch of medisch advies.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "Doodt bleekwater schimmel?",
                answer: "Op sommige niet-poreuze oppervlakken kan bleekwater oppervlakteschimmel ontkleuren en beschadigen. Maar op poreuze materialen verwijdert het de hyfen binnenin niet en lost het de vochtoorza niet op, dus het is geen echte oplossing."
            },
            {
                question: "Waarom komt schimmel terug na gebruik van bleekwater?",
                answer: "Omdat bleekwater voornamelijk aan de oppervlakte werkt. Op muren, pleisterwerk, hout, gipsplaat of andere poreuze materialen kan de schimmel binnenin actief blijven. Bovendien kan het water in de oplossing hergroei bevorderen."
            },
            {
                question: "Verwijdert bleekwater mycotoxinen en allergenen?",
                answer: "Nee. Het doden of ontkleuren van schimmel verwijdert niet automatisch mycotoxinen, bèta-glucanen, schimmelfragmenten of allergene sporen. Het besmette materiaal kan daarom problematisch blijven."
            },
            {
                question: "Wanneer kan bleekwater nuttig zijn?",
                answer: "Het kan nuttig zijn op niet-poreuze oppervlakken, zoals glas, tegels of gelakt metaal, vooral als onderdeel van fysieke reiniging. Zelfs dan kan schimmel terugkeren als ventilatie en vochtigheid niet worden gecorrigeerd."
            },
            {
                question: "Wat is de belangrijkste vraag als schimmel verschijnt?",
                answer: "De juiste vraag is: \"waar komt het water vandaan?\" Zonder de vochtbron te identificeren en te corrigeren  condensatie, infiltratie, capillaire opstijging of een lek  zal elke reiniging tijdelijk zijn."
            }
        ]
    },
    it: {
        seoTitle: "Perché la Candeggina non Risolve la Muffa | MoldCheck.pt",
        seoDescription: "La candeggina non risolve la muffa sulle superfici porose. Scopri perché la muffa torna, cosa dicono EPA e IICRC, e cosa funziona davvero.",
        focusKeyword: "candeggina muffa",
        title: "Perché la Candeggina non Risolve la Muffa  E Cosa Funziona Davvero",
        byline: "Di Pieter Paul Castelein, Co-fondatore & CEO, FAIRBANK Group",
        body: [
            "C'è una scena che si ripete nelle case di tutto il mondo.",
            "Qualcuno scopre della muffa in un angolo del bagno, dietro l'armadio della camera da letto, o che sale lungo una parete della cucina. Va al negozio di bricolage. Compra una bottiglia di candeggina. Strofina. La muffa scompare. La parete sembra pulita e bianca. La persona si sente sollevata  problema risolto.",
            "Tre settimane dopo, la muffa è tornata. Esattamente nello stesso posto. A volte più grande.",
            "Non è sfortuna. Non è perché la candeggina era troppo diluita, o non si è strofinato abbastanza, o non si è aspettato abbastanza. È perché la candeggina non tratta la muffa sulle superfici porose. Non l'ha mai fatto. E il motivo per cui nessuno lo spiega chiaramente ha molto a che fare con chi beneficia del fatto che continuiamo a crederlo.",
            "## Cosa fa davvero la candeggina",
            "La candeggina  ipoclorito di sodio  è un potente ossidante. Denatura le proteine superficiali e scompone i pigmenti che danno colore alla muffa. Quando si strofina una superficie ammuffita con la candeggina, la muffa diventa visivamente incolore. La macchia scompare. Questa parte è reale.",
            "Il problema sta in ciò che accade dopo, e dopo ancora, e all'interno della parete.",
            "La muffa non vive solo in superficie. Le ife  i filamenti microscopici che costituiscono la struttura del fungo  penetrano nei materiali porosi. In una tipica parete intonacata e verniciata di un appartamento, le ife si estendono da 2 a 5 millimetri nel substrato. Nelle pareti di mattoni più vecchie, possono andare più in profondità.",
            "La soluzione di candeggina è composta per circa il 95% da acqua. Quando la si applica su una parete, l'acqua penetra. L'ipoclorito non penetra  viene consumato reagendo con la materia organica nello strato superficiale prima di raggiungere le ife all'interno. Le ife rimangono intatte. Il fungo è tecnicamente vivo e funzionale sotto la superficie che si è appena pulita.",
            "E inoltre: l'acqua penetrata ha aumentato il contenuto di umidità del substrato. Ha creato condizioni leggermente migliori per la ricrescita. Non molto. Ma abbastanza per spiegare perché la muffa torna  e spesso torna più velocemente della prima volta.",
            "## Cosa dicono gli organismi internazionali",
            "Questa non è una teoria alternativa. È la posizione ufficiale dei principali organismi mondiali di salute ambientale e sicurezza.",
            "L'Agenzia per la Protezione Ambientale degli Stati Uniti (EPA) è esplicita: l'uso di biocidi che uccidono organismi come la muffa  inclusa la candeggina  non è raccomandato come pratica di routine nella pulizia della muffa. Il motivo: la muffa morta è ancora allergenica. Le micotossine  molecole tossiche prodotte da alcune specie di muffa  sono composti chimicamente stabili che persistono indefinitamente nel materiale, indipendentemente dal fatto che l'organismo che le ha prodotte sia vivo o morto. Uccidere la muffa non rimuove le micotossine. Non rimuove le ife. Non rimuove i beta-glucani che attivano il sistema immunitario.",
            "L'IICRC S520  lo standard internazionale di riferimento per la bonifica professionale della muffa, ora nella sua 4a edizione (2024)  è ancora più diretto. Il principio fondamentale è questo: la rimozione fisica della fonte di contaminazione è l'unico metodo di bonifica primaria accettabile. I materiali porosi contaminati  lastre di cartongesso, isolamento, moquette, controsoffitti  devono essere fisicamente rimossi dalla struttura. Il motivo: le ife penetrano nella matrice del materiale rendendo impossibile la rimozione completa mediante pulizia.",
            "Lo stesso standard afferma esplicitamente che la nebulizzazione, il trattamento all'ozono, l'incapsulamento e l'applicazione di biocidi da soli non sono metodi di bonifica accettabili. Non sono scorciatoie. Non sono alternative più economiche. Sono semplicemente inefficaci come soluzioni primarie.",
            "## La muffa morta causa ancora danni",
            "Questo punto merita un'attenzione speciale perché è controintuitivo e raramente spiegato.",
            "Quando si uccide la muffa con la candeggina o un altro biocida, ciò che rimane sulla parete non è neutro. La muffa morta contiene ancora:",
            "Beta-glucani  componenti delle pareti cellulari dei funghi che attivano risposte infiammatorie nel sistema immunitario umano indipendentemente dal fatto che il fungo sia vivo. L'attività biologica dei beta-glucani non è influenzata dalla morte dell'organismo.",
            "Micotossine  se la specie presente produceva tossine, quelle tossine rimangono nel materiale. La satratossina G e H di Stachybotrys chartarum, l'ocratossina A di Aspergillus, le tricotecene di varie specie  sono molecole chimicamente stabili che richiedono temperature di 260°C o più per decomporsi. La candeggina non le influenza.",
            "Spore  le spore morte sono ancora allergeniche. Contengono ancora proteine che scatenano risposte immunitarie nelle persone sensibilizzate.",
            "L'EPA è chiara su questo: uccidere la muffa non è sufficiente  deve essere rimossa. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## Il modello che la posizione rivela",
            "Ecco qualcosa che raramente viene spiegato chiaramente ed è straordinariamente utile: dove appare la muffa vi dice perché è apparsa. E quella causa determina completamente cosa è necessario fare.",
            "Muffa negli angoli superiori delle pareti, specialmente in camere da letto e soggiorni  Causa: condensazione. L'aria calda e umida dell'interno si stratifica vicino al soffitto e incontra superfici più fredde negli angoli. Condensa. La muffa colonizza. Questo è un problema di ventilazione inadeguata combinata con ponti termici  nessun prodotto per la pulizia risolve questo.",
            "Muffa intorno ai telai delle finestre  Causa: ponte termico nel profilo della finestra. I telai in alluminio e ferro  standard negli edifici costruiti tra gli anni '60 e '90  sono eccellenti conduttori termici. In inverno, la superficie del telaio può essere a 8 o 10 gradi, ben al di sotto del punto di rugiada dell'aria interna. L'umidità condensa direttamente sul telaio e sulla parete adiacente. Soluzione: migliorare l'isolamento della zona o sostituire i telai con profili a taglio termico.",
            "Muffa che sale dal battiscopa, specialmente al piano terra o in cantina  Causa: risalita capillare. L'umidità del suolo sale per capillarità attraverso le pareti in muratura senza barriera impermeabilizzante orizzontale  standard negli edifici precedenti al 1950. La muffa è solo il segno visibile di un problema strutturale di umidità. Richiede diagnosi e intervento specifici.",
            "Muffa in una macchia isolata su una parete interna, specialmente dopo forti piogge  Causa: infiltrazione  crepa, giunto di dilatazione, grondaia ostruita, impermeabilizzazione difettosa sul tetto o terrazza. La posizione è relativamente precisa. Richiede di trovare e sigillare l'ingresso dell'acqua.",
            "Muffa all'interno di un armadio spinto contro una parete esterna  Questa è la posizione più comune e più trascurata negli appartamenti. L'armadio crea uno spazio non ventilato dove l'aria umida ristagna contro una superficie fredda. La muffa cresce sull'interno del pannello posteriore dell'armadio e sulla parete. Le persone raramente lo vedono finché non è esteso. La soluzione consiste nell'allontanare i mobili dalle pareti esterne, garantire la circolazione dell'aria e verificare se c'è un isolamento adeguato in quella parete.",
            "## Cosa funziona davvero  per livello di gravità",
            "Muffa superficiale su superfici non porose (piastrelle, vetro, metallo verniciato)  Rimozione fisica con detergente comune e acqua, spazzolatura meccanica, risciacquo e asciugatura completa. La candeggina può essere utile qui  sulle superfici non porose, dove non c'è substrato per le ife da penetrare, la capacità ossidante della candeggina è adeguata. Ma il passo più importante è garantire una migliore ventilazione in modo che la situazione non si ripeta.",
            "Muffa su piccole superfici semi-porose (intonaco verniciato, area inferiore a 0,1 m²)  Rimozione fisica del materiale interessato fino al substrato pulito. Non pulire sopra  rimuovere. Asciugare completamente prima di qualsiasi riparazione. Correggere la fonte di umidità prima di qualsiasi altra azione  senza di ciò, la muffa tornerà con assoluta certezza.",
            "Muffa ricorrente su qualsiasi superficie  Il ritorno della muffa è diagnostico: la fonte di umidità non è stata identificata o corretta. La domanda non è \"quale prodotto uso?\". La domanda è \"da dove viene l'acqua?\" Questo richiede, nella maggior parte dei casi, una valutazione professionale con un misuratore di umidità e una telecamera termografica per localizzare l'origine  che può trovarsi in una parete adiacente, in una tubazione o nel comportamento termico dell'involucro dell'edificio.",
            "Muffa in materiali da costruzione porosi (lastre di cartongesso, isolamento, legno strutturale interessato)  Rimozione fisica del materiale. Non esiste un prodotto per la pulizia adeguato. Questi materiali, una volta colonizzati da ife che hanno penetrato la struttura, non possono essere efficacemente decontaminati  devono essere rimossi e sostituiti, con un adeguato contenimento per prevenire la dispersione delle spore durante la rimozione.",
            "Muffa nei sistemi HVAC, nei condotti dell'aria condizionata o nella ventilazione meccanica  Non cercare di risolvere questo da soli. I sistemi di climatizzazione sono i principali vettori per la dispersione di spore, frammenti fungini e micotossine in tutta l'abitazione. La muffa in un sistema di aria condizionata significa che potenzialmente ogni stanza della casa riceve contaminazione. Richiede valutazione e intervento professionale.",
            "## La domanda che tutti dovrebbero fare",
            "C'è una domanda che viene raramente posta quando qualcuno scopre la muffa in casa, ma che determina completamente se il problema verrà risolto o continuerà a ripresentarsi indefinitamente:",
            "Da dove viene l'acqua?",
            "La muffa non appare per caso. Ha bisogno di umidità sostenuta  un'attività dell'acqua superiore a 0,80 sulla superficie di crescita  per 24-48 ore per iniziare a colonizzare, e di condizioni che si ripetano regolarmente per continuare a crescere. Se le condizioni persistono, la muffa persiste. Non esiste prodotto, servizio o trattamento che cambi questo.",
            "La risposta può essere semplice  una finestra che non sigilla bene, un bagno senza estrattore, un'abitudine di stendere il bucato all'interno. Può essere complessa  un ponte termico strutturale in un edificio mal isolato, un'impermeabilizzazione del tetto con decenni di degrado, un sistema di drenaggio che ha ceduto. Ma la domanda deve sempre essere posta prima di qualsiasi altra azione.",
            "La candeggina non fa questa domanda. Copre il sintomo per qualche settimana. Ed è per questo che, per la maggior parte delle persone, non risolve nulla.",
            "## Una nota sui 'trattamenti professionali'",
            "Molti mercati hanno un settore di trattamento dell'umidità e della muffa dominato da aziende che offrono diagnosi gratuite seguite da soluzioni proprietarie  sistemi di ventilazione, iniezioni di resina, prodotti di incapsulamento  per importi che possono raggiungere diverse migliaia di euro, con garanzie di 10 o 30 anni.",
            "Alcune di queste soluzioni hanno una base tecnica legittima per problemi specifici. Un adeguato sistema di ventilazione meccanica controllata può risolvere definitivamente un problema di condensazione in un appartamento mal ventilato. Un'iniezione profonda di silicone può creare una barriera contro la risalita capillare.",
            "Il problema non è che queste soluzioni non esistano. È che la diagnosi che le precede viene fatta dalla stessa azienda che le vende. Non esiste, nella maggior parte dei paesi, nessuna infrastruttura di diagnosi indipendente che permetta a un consumatore di ottenere un secondo parere prima di spendere migliaia di euro. Nessun ispettore certificato senza legami con aziende di trattamento. Nessun laboratorio di analisi microbiologica dell'aria interna per abitazioni residenziali.",
            "In altre parole: nella maggior parte dei mercati, le informazioni disponibili ai consumatori sul loro problema di muffa sono quasi interamente prodotte da entità con un interesse commerciale nella diagnosi che presentano.",
            "Questo è un problema di asimmetria informativa. Ed è, in parte, il motivo per cui questo sito esiste.",
            "## Cosa fare questa settimana",
            "Se hai della muffa in casa, ecco una sequenza onesta:",
            "1. Identifica la posizione esatta e l'estensione. Usa una torcia. Controlla dietro i mobili spinti contro le pareti esterne. Controlla sotto i tappeti nelle stanze al piano terra. Misura l'area approssimativa.",
            "2. Compra un igrometro. Costano tra i 15 e i 40 euro in qualsiasi negozio di bricolage. Posizionalo nella stanza interessata a 1,5 metri dal pavimento, lontano dalle finestre. Leggilo al mattino per una settimana. Un'umidità relativa costantemente superiore al 70% in inverno indica un problema di ventilazione o isolamento che la muffa sta solo rendendo visibile.",
            "3. Ventila attivamente. Apri le finestre in stanze opposte per 10 minuti al mattino per creare una corrente d'aria. Usa gli estrattori in bagno e in cucina durante e dopo le attività che generano umidità. Allontana i mobili dalle pareti esterne di almeno 5 cm.",
            "4. Non applicare candeggina su pareti di intonaco o mattoni. Se devi rimuovere temporaneamente la muffa visibile, usa la rimozione fisica con detergente e acqua, e sappi che stai gestendo il sintomo, non la causa.",
            "5. Se la muffa torna in meno di 6 settimane, o copre più di 0,1 m², o se un membro della famiglia ha sintomi respiratori che migliorano fuori casa  sei di fronte a un problema che richiede una valutazione professionale indipendente. Non la diagnosi gratuita di un'azienda di trattamento. Una valutazione indipendente, con un misuratore di umidità e una telecamera termografica, che identifichi l'origine del problema prima che venga proposta qualsiasi soluzione.",
            "La muffa in casa è trattabile. Ma solo quando si inizia con la domanda giusta."
        ],
        disclosure: "Pieter Paul Castelein lavora presso FAIRBANK Group, la società dietro InspectOS  una piattaforma di ispezione immobiliare indipendente operante in Portogallo. MoldCheck.pt è un'iniziativa di FAIRBANK Group. Non vendiamo trattamenti per l'umidità. Non riceviamo commissioni da aziende di bonifica. Quando raccomandiamo un'ispezione o un'analisi di laboratorio, è perché crediamo che ne abbiate bisogno  non perché traiamo profitto dal trattamento che segue.\n\nLe informazioni in questo articolo sono educative e non sostituiscono la consulenza tecnica o medica professionale.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "La candeggina uccide la muffa?",
                answer: "Su alcune superfici non porose, la candeggina può scolorire e danneggiare la muffa superficiale. Ma sui materiali porosi non rimuove le ife all'interno né risolve la causa dell'umidità, quindi non è una vera soluzione."
            },
            {
                question: "Perché la muffa torna dopo aver usato la candeggina?",
                answer: "Perché la candeggina agisce principalmente in superficie. Su pareti, intonaco, legno, cartongesso o altri materiali porosi, il fungo può rimanere attivo all'interno. Inoltre, l'acqua nella soluzione può favorire la ricrescita."
            },
            {
                question: "La candeggina rimuove micotossine e allergeni?",
                answer: "No. Uccidere o scolorire la muffa non rimuove automaticamente micotossine, beta-glucani, frammenti fungini o spore allergeniche. Il materiale contaminato può quindi rimanere problematico."
            },
            {
                question: "Quando può essere utile la candeggina?",
                answer: "Può essere utile su superfici non porose, come vetro, piastrelle o metallo verniciato, soprattutto come parte di una pulizia fisica. Anche in questi casi, se la ventilazione e l'umidità non vengono corrette, la muffa può tornare."
            },
            {
                question: "Qual è la domanda più importante quando appare la muffa?",
                answer: "La domanda giusta è: \"da dove viene l'acqua?\" Senza identificare e correggere la fonte di umidità  condensazione, infiltrazione, risalita capillare o una perdita  qualsiasi pulizia sarà temporanea."
            }
        ]
    },
    es: {
        seoTitle: "Por Qué la Lejía no Soluciona el Moho | MoldCheck.pt",
        seoDescription: "La lejía no soluciona el moho en superficies porosas. Descubre por qué el moho vuelve, qué dicen la EPA y el IICRC, y qué funciona de verdad.",
        focusKeyword: "lejía moho",
        title: "Por Qué la Lejía no Soluciona el Moho  Y Qué Funciona de Verdad",
        byline: "Por Pieter Paul Castelein, Cofundador y CEO, FAIRBANK Group",
        body: [
            "Hay una escena que se repite en casas de todo el mundo.",
            "Alguien descubre moho en un rincón del baño, detrás del armario del dormitorio, o subiendo por una pared de la cocina. Va a la ferretería. Compra una botella de lejía. Friega. El moho desaparece. La pared queda limpia y blanca. La persona se siente aliviada  problema resuelto.",
            "Tres semanas después, el moho ha vuelto. Exactamente en el mismo sitio. A veces más grande.",
            "Eso no es mala suerte. No es porque la lejía estuviera demasiado diluida, o no se fregara suficiente, o no se esperara el tiempo necesario. Es porque la lejía no trata el moho en superficies porosas. Nunca lo ha hecho. Y la razón por la que nadie lo explica claramente tiene mucho que ver con quién se beneficia cuando seguimos creyendo que sí lo hace.",
            "## Lo que la lejía hace realmente",
            "La lejía  hipoclorito de sodio  es un oxidante potente. Desnaturaliza las proteínas superficiales y descompone los pigmentos que dan color al moho. Cuando se friega una superficie con moho usando lejía, el moho se vuelve visualmente incoloro. La mancha desaparece. Eso es real.",
            "El problema está en lo que ocurre después, y después, y dentro de la pared.",
            "El moho no vive solo en la superficie. Las hifas  los filamentos microscópicos que constituyen la estructura del hongo  penetran en los materiales porosos. En una pared de yeso pintada típica de un apartamento, las hifas se extienden de 2 a 5 milímetros dentro del sustrato. En paredes de ladrillo más antiguas, pueden ir más profundo.",
            "La solución de lejía es aproximadamente un 95% agua. Cuando se aplica en una pared, el agua penetra. El hipoclorito no penetra  se consume al reaccionar con la materia orgánica en la capa superficial antes de llegar a las hifas en el interior. Las hifas permanecen intactas. El hongo está técnicamente vivo y funcional bajo la superficie que acaba de limpiar.",
            "Y además: el agua que penetró ha aumentado el contenido de humedad del sustrato. Ha creado condiciones ligeramente mejores para el recrecimiento. No mucho. Pero suficiente para explicar por qué el moho vuelve  y a menudo vuelve más rápido que la primera vez.",
            "## Lo que dicen los organismos internacionales",
            "Esto no es una teoría alternativa. Es la posición oficial de los principales organismos mundiales de salud ambiental y seguridad.",
            "La Agencia de Protección Ambiental de Estados Unidos (EPA) es explícita: el uso de biocidas que matan organismos como el moho  incluida la lejía  no se recomienda como práctica habitual en la limpieza del moho. La razón: el moho muerto sigue siendo alergénico. Las micotoxinas  moléculas tóxicas producidas por ciertas especies de moho  son compuestos químicamente estables que persisten indefinidamente en el material, independientemente de si el organismo que las produjo está vivo o muerto. Matar el moho no elimina las micotoxinas. No elimina las hifas. No elimina los beta-glucanos que activan el sistema inmunitario.",
            "El IICRC S520  la norma internacional de referencia para la remediación profesional del moho, ahora en su 4ª edición (2024)  es aún más directo. El principio fundamental es este: la eliminación física de la fuente de contaminación es el único método de remediación primaria aceptable. Los materiales porosos contaminados  placas de yeso, aislamiento, alfombras, falsos techos  deben ser físicamente retirados de la estructura. La razón: las hifas penetran en la matriz del material haciendo imposible la eliminación completa mediante limpieza.",
            "La misma norma establece explícitamente que la nebulización, el tratamiento con ozono, la encapsulación y la aplicación de biocidas por sí solos no son métodos de remediación aceptables. No son atajos. No son alternativas más baratas. Son simplemente ineficaces como solución primaria.",
            "## El moho muerto sigue causando daño",
            "Este punto merece atención especial porque es contraintuitivo y raramente se explica.",
            "Cuando se mata el moho con lejía u otro biocida, lo que queda en la pared no es neutro. El moho muerto sigue conteniendo:",
            "Beta-glucanos  componentes de las paredes celulares de los hongos que activan respuestas inflamatorias en el sistema inmunitario humano independientemente de si el hongo está vivo. La actividad biológica de los beta-glucanos no se ve afectada por la muerte del organismo.",
            "Micotoxinas  si la especie presente producía toxinas, esas toxinas permanecen en el material. La satratoxina G y H del Stachybotrys chartarum, la ocratoxina A del Aspergillus, las tricotecenas de varias especies  son moléculas químicamente estables que requieren temperaturas de 260°C o más para descomponerse. La lejía no las afecta.",
            "Esporas  las esporas muertas siguen siendo alergénicas. Siguen conteniendo proteínas que desencadenan respuestas inmunitarias en personas sensibilizadas.",
            "La EPA es clara al respecto: matar el moho no es suficiente  debe eliminarse. \"Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill the mold, it must also be removed.\"",
            "## El patrón que revela la ubicación",
            "Aquí hay algo que raramente se explica claramente y que es extraordinariamente útil: dónde aparece el moho le dice por qué apareció. Y esa causa determina completamente lo que hay que hacer.",
            "Moho en las esquinas superiores de las paredes, especialmente en dormitorios y salones  Causa: condensación. El aire cálido y húmedo del interior se estratifica cerca del techo y encuentra superficies más frías en las esquinas. Condensa. El moho coloniza. Este es un problema de ventilación inadecuada combinada con puentes térmicos  ningún producto de limpieza resuelve esto.",
            "Moho alrededor de los marcos de las ventanas  Causa: puente térmico en el perfil de la ventana. Los marcos de aluminio y hierro  estándar en edificios construidos entre los años 60 y 90  son excelentes conductores térmicos. En invierno, la superficie del marco puede estar a 8 o 10 grados, muy por debajo del punto de rocío del aire interior. La humedad condensa directamente en el marco y la pared adyacente. Solución: mejorar el aislamiento de la zona o sustituir los marcos por perfiles con rotura de puente térmico.",
            "Moho que sube desde el rodapié, especialmente en planta baja o sótano  Causa: ascensión capilar. La humedad del suelo sube por capilaridad a través de las paredes de mampostería sin barrera impermeabilizante horizontal  estándar en edificios anteriores a 1950. El moho es solo el signo visible de un problema estructural de humedad. Requiere diagnóstico e intervención específicos.",
            "Moho en una mancha aislada en una pared interior, especialmente tras lluvias intensas  Causa: infiltración  grieta, junta de dilatación, canalón obstruido, impermeabilización deficiente en el tejado o terraza. La ubicación es relativamente precisa. Requiere encontrar y sellar la entrada de agua.",
            "Moho en el interior de un armario pegado a una pared exterior  Esta es la ubicación más común y más ignorada en los apartamentos. El armario crea un espacio no ventilado donde el aire húmedo se estanca contra una superficie fría. El moho crece en el interior del panel trasero del armario y en la pared. Las personas raramente lo ven hasta que es extenso. La solución pasa por alejar los muebles de las paredes exteriores, garantizar la circulación de aire, e investigar si hay aislamiento adecuado en esa pared.",
            "## Lo que realmente funciona  por nivel de gravedad",
            "Moho superficial en superficies no porosas (azulejo, vidrio, metal pintado)  Eliminación física con detergente común y agua, cepillado mecánico, aclarado y secado completo. La lejía puede ser útil aquí  en superficies no porosas, donde no hay sustrato para que las hifas penetren, la capacidad oxidante de la lejía es adecuada. Pero el paso más importante es garantizar una mejor ventilación para que la situación no se repita.",
            "Moho en superficies semiporo sas pequeñas (yeso pintado, área inferior a 0,1 m²)  Eliminación física del material afectado hasta llegar al sustrato limpio. No limpiar por encima  eliminar. Secar completamente antes de cualquier reparación. Corregir la fuente de humedad antes de cualquier otra acción  sin eso, el moho volverá con absoluta certeza.",
            "Moho recurrente en cualquier superficie  El regreso del moho es diagnóstico: la fuente de humedad no se ha identificado ni corregido. La pregunta no es \"¿qué producto uso?\". La pregunta es \"¿de dónde viene el agua?\" Esto requiere, en la mayoría de los casos, una evaluación profesional con un medidor de humedad y cámara termográfica para localizar el origen  que puede estar en una pared adyacente, una tubería, o el comportamiento térmico de la envolvente del edificio.",
            "Moho en materiales de construcción porosos (placas de yeso, aislamiento, madera estructural afectada)  Eliminación física del material. No existe un producto de limpieza adecuado. Estos materiales, una vez colonizados por hifas que han penetrado la estructura, no pueden descontaminarse eficazmente  deben retirarse y sustituirse, con un confinamiento adecuado para evitar la dispersión de esporas durante la retirada.",
            "Moho en sistemas de climatización, conductos de aire acondicionado o ventilación mecánica  No intente resolver esto usted mismo. Los sistemas de climatización son los principales vectores de dispersión de esporas, fragmentos fúngicos y micotoxinas por toda la vivienda. Moho en un sistema de aire acondicionado significa que potencialmente cada habitación de la casa está recibiendo contaminación. Requiere evaluación e intervención profesional.",
            "## La pregunta que todo el mundo debería hacer",
            "Hay una pregunta que raramente se hace cuando alguien descubre moho en casa, pero que determina completamente si el problema se va a resolver o va a seguir reapareciendo indefinidamente:",
            "¿De dónde viene el agua?",
            "El moho no aparece por casualidad. Necesita humedad sostenida  una actividad del agua superior a 0,80 en la superficie de crecimiento  durante 24 a 48 horas para empezar a colonizar, y condiciones que se repitan regularmente para seguir creciendo. Si las condiciones persisten, el moho persiste. No existe producto, servicio o tratamiento que cambie esto.",
            "La respuesta puede ser simple  una ventana que no sella bien, un baño sin extractor, un hábito de tender la ropa en el interior. Puede ser compleja  un puente térmico estructural en un edificio mal aislado, una impermeabilización del tejado con décadas de degradación, un sistema de drenaje que ha fallado. Pero la pregunta siempre debe hacerse antes de cualquier otra acción.",
            "La lejía no hace esta pregunta. Cubre el síntoma durante unas semanas. Y por eso, para la mayoría de las personas, no resuelve nada.",
            "## Una nota sobre los 'tratamientos profesionales'",
            "Muchos mercados tienen un sector de tratamiento de humedad y moho dominado por empresas que ofrecen diagnósticos gratuitos seguidos de soluciones propietarias  sistemas de ventilación, inyecciones de resina, productos de encapsulamiento  por importes que pueden alcanzar varios miles de euros, con garantías de 10 o 30 años.",
            "Algunas de estas soluciones tienen base técnica legítima para problemas específicos. Un sistema de ventilación mecánica controlada adecuado puede resolver definitivamente un problema de condensación en un apartamento mal ventilado. Una inyección profunda de silicona puede crear una barrera contra la ascensión capilar.",
            "El problema no es que estas soluciones no existan. Es que el diagnóstico que las precede lo hace la misma empresa que las vende. No existe, en la mayoría de los países, ninguna infraestructura de diagnóstico independiente que permita a un consumidor obtener una segunda opinión antes de gastar miles de euros. Ningún inspector certificado sin vínculos con empresas de tratamiento. Ningún laboratorio de análisis microbiológico del aire interior para viviendas residenciales.",
            "Dicho de otro modo: en la mayoría de los mercados, la información disponible para los consumidores sobre su problema de moho es producida casi en su totalidad por entidades con un interés comercial en el diagnóstico que presentan.",
            "Este es un problema de asimetría de información. Y es, en parte, la razón por la que existe este sitio.",
            "## Qué hacer esta semana",
            "Si tiene moho en casa, aquí hay una secuencia honesta:",
            "1. Identifique la ubicación exacta y la extensión. Use una linterna. Compruebe detrás de los muebles pegados a paredes exteriores. Compruebe bajo las alfombras en habitaciones de planta baja. Mida el área aproximada.",
            "2. Compre un higrómetro. Cuestan entre 15 y 40 euros en cualquier ferretería. Colóquelo en la habitación afectada a 1,5 metros del suelo, lejos de las ventanas. Léalo por la mañana durante una semana. Una humedad relativa consistentemente superior al 70% en invierno indica un problema de ventilación o aislamiento que el moho solo está haciendo visible.",
            "3. Ventile activamente. Abra ventanas en habitaciones opuestas durante 10 minutos por la mañana para crear corriente de aire. Use extractores en el baño y la cocina durante y después de actividades que generan humedad. Aleje los muebles de las paredes exteriores al menos 5 cm.",
            "4. No aplique lejía en paredes de yeso o ladrillo. Si necesita eliminar temporalmente el moho visible, use eliminación física con detergente y agua, y sepa que está gestionando el síntoma, no la causa.",
            "5. Si el moho vuelve en menos de 6 semanas, o cubre más de 0,1 m², o si algún miembro de la familia tiene síntomas respiratorios que mejoran fuera de casa  se enfrenta a un problema que requiere una evaluación profesional independiente. No el diagnóstico gratuito de una empresa de tratamientos. Una evaluación independiente, con medidor de humedad y cámara termográfica, que identifique el origen del problema antes de que se proponga cualquier solución.",
            "El moho en casa tiene solución. Pero solo cuando se empieza por la pregunta correcta."
        ],
        disclosure: "Pieter Paul Castelein trabaja en FAIRBANK Group, la empresa detrás de InspectOS  una plataforma de inspección inmobiliaria independiente que opera en Portugal. MoldCheck.pt es una iniciativa de FAIRBANK Group. No vendemos tratamientos de humedad. No recibimos comisiones de empresas de remediación. Cuando recomendamos una inspección o análisis de laboratorio, es porque creemos que lo necesita  no porque nos beneficiemos del tratamiento que sigue.\n\nLa información en este artículo es educativa y no sustituye el asesoramiento técnico o médico profesional.",
        sources: [
            {
                label: "EPA  Mold Remediation in Schools and Commercial Buildings (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation, 4th Edition (2024)"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "Building Science Corporation  J. Lstiburek, \"Moisture Control for Buildings\" (2002)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            }
        ],
        faq: [
            {
                question: "¿La lejía mata el moho?",
                answer: "En algunas superficies no porosas, la lejía puede decolorar y dañar el moho superficial. Pero en materiales porosos no elimina las hifas del interior ni resuelve la causa de la humedad, por lo que no es una solución real."
            },
            {
                question: "¿Por qué vuelve el moho después de usar lejía?",
                answer: "Porque la lejía actúa principalmente en la superficie. En paredes, yeso, madera, pladur u otros materiales porosos, el hongo puede seguir activo en el interior. Además, el agua de la solución puede favorecer el recrecimiento."
            },
            {
                question: "¿La lejía elimina micotoxinas y alérgenos?",
                answer: "No. Matar o decolorar el moho no elimina automáticamente micotoxinas, beta-glucanos, fragmentos fúngicos o esporas alergénicas. El material contaminado puede por tanto seguir siendo problemático."
            },
            {
                question: "¿Cuándo puede ser útil la lejía?",
                answer: "Puede ser útil en superficies no porosas, como vidrio, azulejo o metal pintado, especialmente como parte de una limpieza física. Incluso en esos casos, si la ventilación y la humedad no se corrigen, el moho puede volver."
            },
            {
                question: "¿Cuál es la pregunta más importante cuando aparece el moho?",
                answer: "La pregunta correcta es: \"¿de dónde viene el agua?\" Sin identificar y corregir la fuente de humedad  condensación, infiltración, ascensión capilar o una fuga  cualquier limpieza será temporal."
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a4-portugal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a2$2d$bleach$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a2-bleach.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// All known article slug maps — add new articles here as they are published
const articleSlugMaps = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4PortugalSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a5MoldRiskSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a2$2d$bleach$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a2BleachSlugs"]
];
function findArticleSlugMap(currentLocale, currentSlug) {
    for (const map of articleSlugMaps){
        if (map[currentLocale] === currentSlug) return map;
    }
    return null;
}
function GlobeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "language-switcher__globe",
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "8",
                cy: "8",
                rx: "3",
                ry: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "8",
                x2: "15",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "4.5",
                x2: "13.5",
                y2: "4.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "11.5",
                x2: "13.5",
                y2: "11.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GlobeIcon;
function LanguageSwitcher(param) {
    let { currentLocale } = param;
    _s();
    // next-intl pathname: strips locale prefix → e.g. "/articles/[slug]" or "/articulos/segundo-peor..."
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // next/navigation pathname: full path → e.g. "/es/articulos/segundo-peor-problema-moho-europa"
    const fullPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const isDynamicPath = pathname.includes("[");
    // params.slug is the raw URL slug value — reliable regardless of locale
    const currentSlug = typeof (params === null || params === void 0 ? void 0 : params.slug) === "string" ? params.slug : null;
    const slugMap = currentSlug ? findArticleSlugMap(currentLocale, currentSlug) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "language-switcher",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "language-switcher__trigger",
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "language-switcher__code",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeMarkers"][currentLocale]
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "language-switcher__chevron",
                        "aria-hidden": "true",
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "language-switcher__menu",
                role: "listbox",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>{
                    // Article page: build the translated URL directly from the slug map
                    if (slugMap) {
                        const targetSlug = slugMap[locale];
                        const href = targetSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(locale, targetSlug) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(locale, "articles");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: "language-switcher__option".concat(locale === currentLocale ? " is-active" : ""),
                                role: "option",
                                "aria-selected": locale === currentLocale,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        }, locale, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this);
                    }
                    // All other pages: use next-intl Link
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: isDynamicPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            className: "language-switcher__option".concat(locale === currentLocale ? " is-active" : ""),
                            href: {
                                pathname,
                                params
                            },
                            locale: locale,
                            role: "option",
                            "aria-selected": locale === currentLocale,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            className: "language-switcher__option".concat(locale === currentLocale ? " is-active" : ""),
                            href: pathname,
                            locale: locale,
                            role: "option",
                            "aria-selected": locale === currentLocale,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this)
                    }, locale, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "d71C2lExds4pIOCP5gwLcbFLawc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = LanguageSwitcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlobeIcon");
__turbopack_context__.k.register(_c1, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/routing/paths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArticlePath",
    ()=>getArticlePath,
    "getGlobalPath",
    ()=>getGlobalPath,
    "getMunicipalityPath",
    ()=>getMunicipalityPath,
    "getSectionPath",
    ()=>getSectionPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-client] (ecmascript)");
;
function getGlobalPath(locale, route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(locale, route);
}
function getSectionPath(locale, section, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedSectionPath"])(locale, section, slug);
}
function getMunicipalityPath(locale, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedMunicipalityPath"])(locale, slug);
}
function getArticlePath(locale, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(locale, slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation/PrimaryNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryNav",
    ()=>PrimaryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navLabels = {
    pt: {
        articles: "Artigos",
        services: "Serviços",
        about: "Sobre",
        contact: "Contacto"
    },
    en: {
        articles: "Articles",
        services: "Services",
        about: "About",
        contact: "Contact"
    },
    fr: {
        articles: "Articles",
        services: "Services",
        about: "À propos",
        contact: "Contact"
    },
    de: {
        articles: "Artikel",
        services: "Dienste",
        about: "Über",
        contact: "Kontakt"
    },
    nl: {
        articles: "Artikelen",
        services: "Diensten",
        about: "Over",
        contact: "Contact"
    },
    it: {
        articles: "Articoli",
        services: "Servizi",
        about: "Chi siamo",
        contact: "Contatti"
    },
    es: {
        articles: "Artículos",
        services: "Servicios",
        about: "Sobre nosotros",
        contact: "Contacto"
    }
};
const navKeys = [
    "articles",
    "services",
    "about",
    "contact"
];
function PrimaryNav(param) {
    let { locale } = param;
    _s();
    const labels = navLabels[locale];
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "site-nav",
        "aria-label": "Primary",
        children: navKeys.map((key)=>{
            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, key);
            var _pathname_startsWith;
            const isActive = pathname === href || ((_pathname_startsWith = pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(href + "/")) !== null && _pathname_startsWith !== void 0 ? _pathname_startsWith : false);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                className: "site-nav__link".concat(isActive ? " is-active" : ""),
                "aria-current": isActive ? "page" : undefined,
                children: labels[key]
            }, key, false, {
                fileName: "[project]/src/components/navigation/PrimaryNav.tsx",
                lineNumber: 33,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/navigation/PrimaryNav.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(PrimaryNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PrimaryNav;
var _c;
__turbopack_context__.k.register(_c, "PrimaryNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a4-portugal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a2$2d$bleach$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a2-bleach.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const articleSlugMaps = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4PortugalSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a5MoldRiskSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a2$2d$bleach$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a2BleachSlugs"]
];
function findArticleSlugMap(currentLocale, currentSlug) {
    for (const map of articleSlugMaps){
        if (map[currentLocale] === currentSlug) return map;
    }
    return null;
}
const navLabels = {
    pt: {
        articles: "Artigos",
        services: "Serviços",
        about: "Sobre",
        contact: "Contacto"
    },
    en: {
        articles: "Articles",
        services: "Services",
        about: "About",
        contact: "Contact"
    },
    fr: {
        articles: "Articles",
        services: "Services",
        about: "À propos",
        contact: "Contact"
    },
    de: {
        articles: "Artikel",
        services: "Dienste",
        about: "Über",
        contact: "Kontakt"
    },
    nl: {
        articles: "Artikelen",
        services: "Diensten",
        about: "Over",
        contact: "Contact"
    },
    it: {
        articles: "Articoli",
        services: "Servizi",
        about: "Chi siamo",
        contact: "Contatti"
    },
    es: {
        articles: "Artículos",
        services: "Servicios",
        about: "Sobre nosotros",
        contact: "Contacto"
    }
};
const navKeys = [
    "articles",
    "services",
    "about",
    "contact"
];
function GlobeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        style: {
            flexShrink: 0,
            color: "#2a7a75"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "8",
                cy: "8",
                rx: "3",
                ry: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "8",
                x2: "15",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "4.5",
                x2: "13.5",
                y2: "4.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "11.5",
                x2: "13.5",
                y2: "11.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/MobileNav.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = GlobeIcon;
function MobileNav(param) {
    let { locale } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var _usePathname;
    const pathname = (_usePathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])()) !== null && _usePathname !== void 0 ? _usePathname : "";
    const intlPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const labels = navLabels[locale];
    const isDynamicPath = intlPathname.includes("[");
    const currentSlug = typeof (params === null || params === void 0 ? void 0 : params.slug) === "string" ? params.slug : null;
    const slugMap = currentSlug ? findArticleSlugMap(locale, currentSlug) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mobile-nav__toggle",
                "aria-label": open ? "Close menu" : "Open menu",
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mobile-nav__bar".concat(open ? " is-open" : "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mobile-nav__bar".concat(open ? " is-open" : "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mobile-nav__bar".concat(open ? " is-open" : "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-nav__drawer",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Navigation menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mobile-nav__links",
                        "aria-label": "Primary",
                        children: navKeys.map((key)=>{
                            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, key);
                            const isActive = pathname === href || pathname.startsWith(href + "/");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: "mobile-nav__link".concat(isActive ? " is-active" : ""),
                                "aria-current": isActive ? "page" : undefined,
                                onClick: ()=>setOpen(false),
                                children: labels[key]
                            }, key, false, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav__lang-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-nav__lang-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeMarkers"][locale]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-nav__lang-options",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeLocales"].map((loc)=>{
                                    if (slugMap) {
                                        const targetSlug = slugMap[loc];
                                        const href = targetSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(loc, targetSlug) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(loc, "articles");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            className: "mobile-nav__lang-option".concat(loc === locale ? " is-active" : ""),
                                            onClick: ()=>setOpen(false),
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabels"][loc]
                                        }, loc, false, {
                                            fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                            lineNumber: 112,
                                            columnNumber: 21
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: isDynamicPath ? {
                                            pathname: intlPathname,
                                            params
                                        } : intlPathname,
                                        locale: loc,
                                        className: "mobile-nav__lang-option".concat(loc === locale ? " is-active" : ""),
                                        onClick: ()=>setOpen(false),
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeLabels"][loc]
                                    }, loc, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(MobileNav, "idTuzKIN5h2qgeqVYZ2XsQaqD5g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = MobileNav;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlobeIcon");
__turbopack_context__.k.register(_c1, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/newsletter/hooks/useSubscribe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubscribe",
    ()=>useSubscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSubscribe() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function submit(payload) {
        setStatus("loading");
        setError(null);
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                const data = await res.json();
                setStatus(data.status === "already_subscribed" ? "already_subscribed" : "subscribed");
                return;
            }
            let errorMsg = "Unknown error";
            try {
                const data = await res.json();
                var _data_error;
                errorMsg = (_data_error = data.error) !== null && _data_error !== void 0 ? _data_error : errorMsg;
            } catch (e) {}
            setError(errorMsg);
            setStatus("error");
        } catch (e) {
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
_s(useSubscribe, "gXSPjDoUXZiNu7BVAxOYEckcX1s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/newsletter/components/SubscriptionForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionForm",
    ()=>SubscriptionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$hooks$2f$useSubscribe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/newsletter/hooks/useSubscribe.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SubscriptionForm(param) {
    let { locale, onSuccess } = param;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Newsletter");
    const { status, error, submit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$hooks$2f$useSubscribe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscribe"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consentError, setConsentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (status === "subscribed") {
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-form__result sub-form__result--success",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "sub-form__result-title",
                    children: t("successTitle")
                }, void 0, false, {
                    fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "sub-form__result-body",
                    children: t("successBody")
                }, void 0, false, {
                    fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    if (status === "already_subscribed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-form__result sub-form__result--info",
            role: "status",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sub-form__result-body",
                children: t("successAlreadySubscribed")
            }, void 0, false, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    function validate() {
        let valid = true;
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError(t("errorInvalidEmail"));
            valid = false;
        } else {
            setEmailError(null);
        }
        if (!consent) {
            setConsentError(t("errorConsentRequired"));
            valid = false;
        } else {
            setConsentError(null);
        }
        return valid;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        await submit({
            email,
            locale,
            consentAccepted: true
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        className: "sub-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub-form__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "newsletter-email",
                        type: "email",
                        autoComplete: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: t("emailPlaceholder"),
                        className: "sub-form__input".concat(emailError ? " sub-form__input--error" : ""),
                        "aria-label": t("emailLabel"),
                        "aria-describedby": emailError ? "newsletter-email-error" : undefined,
                        "aria-invalid": !!emailError
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "newsletter-email-error",
                        className: "sub-form__field-error",
                        role: "alert",
                        children: emailError
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub-form__consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "newsletter-consent",
                        type: "checkbox",
                        checked: consent,
                        onChange: (e)=>setConsent(e.target.checked),
                        className: "sub-form__checkbox",
                        "aria-describedby": consentError ? "newsletter-consent-error" : undefined,
                        "aria-invalid": !!consentError
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "newsletter-consent",
                        className: "sub-form__consent-label",
                        children: t("consentLabel")
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            consentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: "newsletter-consent-error",
                className: "sub-form__field-error",
                role: "alert",
                children: consentError
            }, void 0, false, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sub-form__generic-error",
                role: "alert",
                children: [
                    t("errorGeneric"),
                    ("TURBOPACK compile-time value", "development") !== "production" && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            fontSize: "0.7rem",
                            opacity: 0.7,
                            marginTop: "0.25rem"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === "loading",
                className: "sub-form__submit",
                children: status === "loading" ? "…" : t("submitButton")
            }, void 0, false, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(SubscriptionForm, "eaE7/6SnK5fH2n/qXXKFBQe379Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$hooks$2f$useSubscribe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscribe"]
    ];
});
_c = SubscriptionForm;
var _c;
__turbopack_context__.k.register(_c, "SubscriptionForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/newsletter/components/NewsletterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterSection",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$components$2f$SubscriptionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/newsletter/components/SubscriptionForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NewsletterSection(param) {
    let { locale } = param;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("NewsletterSection");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "newsletter-section",
        "aria-label": t("title"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newsletter-section__row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "newsletter-section__title",
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "newsletter-section__description",
                            children: t("description")
                        }, void 0, false, {
                            fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__form",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$components$2f$SubscriptionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionForm"], {
                        locale: locale
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__action",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "newsletter-section__cta",
                        onClick: ()=>setOpen(true),
                        children: t("button")
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(NewsletterSection, "OdJ0hQWLjP4v1sdS/ZbZPywfjGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = NewsletterSection;
var _c;
__turbopack_context__.k.register(_c, "NewsletterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ScrollReset.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReset",
    ()=>ScrollReset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollReset() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReset.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Let the browser restore scroll position on back/forward.
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "auto";
            }
            // Only force scroll-to-top on a fresh navigation, not on back/forward.
            const navEntry = performance.getEntriesByType("navigation")[0];
            if ((navEntry === null || navEntry === void 0 ? void 0 : navEntry.type) === "navigate") {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
            }
        }
    }["ScrollReset.useEffect"], []);
    return null;
}
_s(ScrollReset, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollReset;
var _c;
__turbopack_context__.k.register(_c, "ScrollReset");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/BackToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BackToTop() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const onScroll = {
                "BackToTop.useEffect.onScroll": ()=>setVisible(window.scrollY > 400)
            }["BackToTop.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "BackToTop.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "back-to-top".concat(visible ? " is-visible" : ""),
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        "aria-label": "Back to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12V4M4 8l4-4 4 4",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackToTop.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/BackToTop.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/BackToTop.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(BackToTop, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = BackToTop;
var _c;
__turbopack_context__.k.register(_c, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ReloadRedirect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReloadRedirect",
    ()=>ReloadRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReloadRedirect(param) {
    let { locale } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReloadRedirect.useEffect": ()=>{
            const nav = performance.getEntriesByType("navigation")[0];
            const isReload = (nav === null || nav === void 0 ? void 0 : nav.type) === "reload";
            const path = window.location.pathname;
            const isHome = path === "/".concat(locale) || path === "/".concat(locale, "/");
            if (isReload && !isHome) {
                router.replace("/".concat(locale));
            }
        }
    }["ReloadRedirect.useEffect"], []);
    return null;
}
_s(ReloadRedirect, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReloadRedirect;
var _c;
__turbopack_context__.k.register(_c, "ReloadRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b22e59fc._.js.map