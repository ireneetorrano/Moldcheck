module.exports = [
"[project]/src/config/locales.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/config/routeMap.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-ssr] (ecmascript)");
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
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
            locale,
            parent ? `/${parent[locale]}/${slugs[locale]}` : `/${slugs[locale]}`
        ]));
}
function localizeNested(parent) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>[
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
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"],
    globalRouteSlugs,
    thankYouSlugs,
    sectionBaseSlugs,
    localizedPathnames
};
}),
"[project]/src/lib/i18n/routing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-ssr] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeLocales"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"],
    localePrefix: "always",
    pathnames: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localizedPathnames"]
});
}),
"[project]/src/lib/i18n/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/routing.ts [app-ssr] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"]);
}),
"[project]/src/features/content/data/articles/a4-portugal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        seoTitle: "Portugal Tem o Segundo Pior Problema de Bolor da Europa — MoldCheck.pt",
        seoDescription: "Portugal tem o segundo pior problema de bolor da Europa. Dados Eurostat, causas estruturais e o défice de diagnóstico independente explicados.",
        focusKeyword: "bolor Portugal Europa",
        title: "Portugal Tem o Segundo Pior Problema de Bolor da Europa. Porque é que Ninguém Fala Nisso?",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Cresci na Holanda. Em quarenta anos, nunca vi bolor numa casa.",
            "Não porque as casas holandesas sejam perfeitas — não são. Mas porque a construção neerlandesa assume que vai chover, sempre, e que a humidade precisa de ser gerida activamente: isolamento adequado, ventilação mecânica, materiais que resistem à humidade. O problema é incorporado no processo de construção antes de existir.",
            "Quando me mudei para Portugal há vários anos, aprendi que a relação com a humidade nas habitações é completamente diferente. A humidade nas paredes é mencionada com uma espécie de resignação, como se fosse uma característica do clima que simplesmente se aceita. O bolor atrás dos roupeiros é descoberto por acaso, tratado com lixívia, e esquecido até voltar. As alergias e a tosse persistente do inverno são atribuídas ao frio, ao ar, a tudo excepto às paredes onde se passa a maior parte da vida.",
            "Fui curioso. Comecei a procurar os dados.",
            "## O que os números dizem",
            "O inquérito EU-SILC do Eurostat — o maior estudo sistemático de condições de vida na União Europeia — pergunta regularmente aos respondentes se vivem em habitação com humidade ou bolor. Os resultados para Portugal são consistentes ao longo dos anos: entre 24 e 26 por cento da população portuguesa vive em habitação afectada por humidade ou bolor.",
            "É o segundo valor mais alto da União Europeia. Só o Chipre está pior.",
            "A média europeia é de cerca de 14 por cento. Portugal tem quase o dobro.",
            "Os Censos 2021 do INE completam o quadro: 82 por cento dos edifícios portugueses foram construídos antes do ano 2000, antes de qualquer requisito significativo de eficiência energética ou isolamento. Mais de um terço dos edifícios precisam de obras. Não obras de remodelação — obras de reparação básica.",
            "E depois de perceber a escala do problema, fui perceber o que existia para ajudar as pessoas a lidar com ele.",
            "## O que encontrei no mercado",
            "Portugal tem várias empresas no mercado do tratamento de humidade e bolor. Algumas são grandes, com décadas de actividade e milhares de intervenções por ano. Oferecem diagnósticos gratuitos. Chegam a casa, avaliam o problema, e propõem soluções — sistemas de ventilação, injecções de resina, produtos de encapsulamento — por valores que podem chegar a vários milhares de euros.",
            "Estas empresas podem ter soluções legítimas para problemas reais. Isso não é o ponto.",
            "O ponto é este: em Portugal, o diagnóstico é feito pela empresa que vende o tratamento. Não existe, em Portugal, nenhuma entidade independente — sem ligação a empresas de tratamento, sem interesse comercial no resultado do diagnóstico — que avalie o problema de bolor na sua casa e lhe diga honestamente o que tem e o que precisa.",
            "É como se, no sector da saúde, o único serviço de diagnóstico disponível fosse gerido pela empresa farmacêutica que vende a medicação que o diagnóstico vai recomendar. Ninguém aceitaria isso na medicina. Aceitamos na habitação porque nunca tivemos alternativa.",
            "## A ligação com a saúde que raramente é feita",
            "Há mais uma camada nisto que me parece importante dizer claramente.",
            "A Organização Mundial de Saúde estimou, nas suas diretrizes de 2009 sobre qualidade do ar interior, que 13 por cento dos casos de asma infantil na Região Europeia da OMS são atribuíveis à humidade residencial. A investigação de Taborda-Barata e colegas, publicada em 2023 na revista científica Pulmonology, descreve uma \"ausência generalizada de consciencialização na população\" em Portugal sobre a ligação entre qualidade do ar interior e saúde respiratória.",
            "Um em cada quatro portugueses vive em habitação com humidade ou bolor. Treze por cento dos casos de asma infantil são potencialmente atribuíveis a esta condição. E a ligação entre as paredes onde se vive e os sintomas com que se lida no inverno raramente entra na consulta médica, raramente entra na conversa com o senhorio, raramente entra em nenhuma conversa.",
            "Isto não é um problema menor de qualidade de vida. É um problema de saúde pública sub-reconhecido à escala de um quarto da população.",
            "## O que este site é — e o que não é",
            "O MoldCheck.pt não é uma empresa de tratamentos. Não vende sistemas de ventilação, produtos de impermeabilização, nem qualquer outro serviço de intervenção em habitações.",
            "É um recurso de informação independente. Publicamos o que a ciência diz sobre bolor — sobre as espécies, sobre os riscos para a saúde, sobre os métodos de detecção e remediação que têm base científica. Quando um método não funciona, dizemos que não funciona. Quando a informação disponível é incerta, dizemos que é incerta.",
            "Somos transparentes sobre quem somos: o MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS — plataforma de inspecção independente de imóveis em Portugal. A nossa ligação comercial é com a inspecção e o diagnóstico independentes. Não temos interesse no tratamento que se segue ao diagnóstico. Quando recomendamos uma avaliação profissional, é porque acreditamos que precisa de uma — não porque ganhamos dinheiro com o que acontece depois.",
            "A distinção importa. O conflito de interesse que existe no mercado actual não é entre educação e diagnóstico. É entre diagnóstico e tratamento. Um inspector independente que cobra pelo seu tempo e não tem participação nos lucros da remediação é a solução para o problema que este site descreve — não parte dele.",
            "## Para o um em cada quatro",
            "Se está a ler isto e vive em Portugal, há uma probabilidade de um em quatro de que a sua habitação tenha humidade ou bolor. Pode saber disso — talvez tenha uma mancha que aparece todos os invernos, ou um cheiro que não consegue eliminar, ou um roupeiro que nunca encosta bem à parede. Ou pode não saber — porque o bolor mais problemático cresce em lugares que nunca vê, e os sintomas que provoca são fáceis de atribuir a outras causas.",
            "Este site foi construído para si. Para que tenha acesso à informação que existe, sem a mediação de quem tem interesse no diagnóstico que lhe vai apresentar.",
            "O problema de bolor em Portugal não é inevitável. Não é uma característica do clima que se aceita. É um problema com causas identificáveis, com soluções com base científica, e com um défice claro de informação independente que este site tenta, em parte, colmatar.",
            "Começamos aqui."
        ],
        disclosure: "Pieter Paul Castelein trabalha no FAIRBANK Group, a empresa por detrás da InspectOS — plataforma de inspeção independente de imóveis em Portugal. O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspeção ou análise laboratorial, é porque acreditamos que precisa de uma — não porque lucramos com o tratamento que se segue.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020–2023"
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
        seoTitle: "Portugal Has Europe's Second-Worst Mold Problem — MoldCheck.pt",
        seoDescription: "Portugal has Europe's second-worst mold problem. Eurostat data, structural causes, and the absence of independent diagnosis explained.",
        focusKeyword: "mold Portugal Europe",
        title: "Portugal Has Europe's Second-Worst Mold Problem. Why Is Nobody Talking About It?",
        byline: "By Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "When I moved from the Netherlands to Portugal, I brought with me a particular blindness.",
            "In the Netherlands, mold is not something people discuss. It's not something you discover behind a wardrobe and resign yourself to. It's not part of the standard conversation when you rent an apartment or buy a house. Dutch buildings are built cold and tight — double-glazed, insulated, ventilated. The idea that a home could make your family chronically ill through something growing in its walls wasn't something that had ever occurred to me. Not once.",
            "Then I lived in Lisbon. And the blindness started to lift.",
            "I saw it in properties I visited professionally — on bathroom ceilings, blooming in bedroom corners, climbing up north-facing walls in dark patches that tenants had clearly learned to ignore. I saw it described in property listings as \"some humidity\" the way someone might mention a slightly noisy neighbour — unfortunate but manageable. I heard Portuguese friends talk about it with a shrug: é o clima, it's the climate, what can you do.",
            "What I didn't see, for longer than I should have, was the connection between what was growing in our walls and what was happening to my health.",
            "I suffered from severe allergies for years. The kind that wear you down — persistent, exhausting, always there, always requiring management. I tried everything a person tries. And then we moved. We moved to a well-built house, properly insulated, properly ventilated, without a trace of mold anywhere. And something shifted. Not immediately. But over months, the whole family's health changed. The allergies that had defined my daily life didn't disappear overnight, but they retreated in a way that nothing else had ever produced.",
            "I am not a doctor. I cannot tell you with medical certainty that our old house was making us sick. What I can tell you is that I know the difference between how we felt then and how we feel now. And I know that when I started looking into the science — seriously looking, past the hardware store advice and the treatment company brochures — what I found was not reassuring.",
            "What I found was that this is not normal. That the level of mold in Portuguese housing is not an unavoidable consequence of living near the Atlantic. That it is a public health problem, documented by European statistics, confirmed by respiratory medicine research, and almost entirely unaddressed.",
            "## The number that stopped me",
            "Here it is: 24 to 26 percent.",
            "That is the share of Portugal's population living in housing affected by dampness or mold, according to Eurostat's EU-SILC survey data. One in four Portuguese people. In a country of ten million, that is roughly two and a half million people waking up every morning in homes where something is growing in the walls that shouldn't be.",
            "The EU average is around 14 percent. Portugal's figure is nearly double that. Among all 27 EU member states, only Cyprus has a higher rate of mold-affected housing. This is not a minor statistical footnote. This is a structural public health failure.",
            "The World Health Organization's 2009 guidelines on dampness and mold — still the international benchmark — are direct about what this means medically. There is sufficient scientific evidence of a causal relationship between living in damp, moldy housing and upper respiratory tract symptoms, asthma exacerbation, allergic rhinitis, and hypersensitivity pneumonitis. The WHO estimates that 13 percent of childhood asthma in the European Region is attributable to residential dampness. Not caused by genetics. Not by outdoor air. By the homes where children sleep.",
            "Thirteen percent. In Portugal's case, given our mold prevalence, that number may be higher.",
            "I want to be careful here, because this site will always be careful. We do not traffic in panic. Not every damp patch is a health emergency. Not every household with visible mold is facing a medical crisis. Individual risk depends on species, exposure duration, ventilation, and personal susceptibility. But the aggregate picture — across millions of Portuguese homes — is one that deserves serious, honest attention. And it is getting almost none.",
            "## Why Portuguese buildings are different",
            "This is not Portugal's fault in the way that a policy failure is a fault. Portuguese buildings were built the way they were built because of decades of construction practice, energy economics, and regulation — or its absence.",
            "Walk through any Lisbon neighbourhood and you are looking at buildings from three distinct eras of construction, each with its own vulnerability profile.",
            "Pre-1960 buildings are stone and brick, often beautiful, often without any damp-proof course separating the walls from the ground. Capillary rise — moisture from the earth wicking upward through masonry — is endemic in this stock. The ground floor apartments of the Mouraria, the Alfama, parts of Bairro Alto — many of them are in permanent conversation with the moisture below them.",
            "The 1960s through 1990s brought Portugal's rapid urbanisation — reinforced concrete frames with hollow brick infill, metal window frames conducting cold directly from the exterior to the interior, no insulation to speak of, single-glazed windows. These buildings were designed for a time when energy was cheap and indoor comfort standards were different. The metal frames are thermal bridges: they conduct cold so efficiently that in a Lisbon winter, the surface temperature around a window frame can drop below the dew point of the indoor air. The moisture in the air — from cooking, breathing, showering — condenses on that cold surface and runs down the wall. Behind the wardrobe placed against that wall, where no one looks, mold finds its substrate.",
            "Porto's annual average relative humidity is 77 percent. Lisbon's in winter is 78 to 84 percent. The Azores, Madeira, and the northern coastal regions can be higher still. When you have old buildings, minimal insulation, and sustained humidity — you have the conditions for mold. Not as an anomaly. As a certainty.",
            "According to the INE Censos 2021, 82 percent of Portugal's buildings were constructed before the year 2000. 35.8 percent — over 1.27 million buildings — are classified as needing repair. More than one in three buildings in this country is deteriorating faster than it is being maintained or renovated.",
            "This is the physical reality that the statistics sit on top of. The 24 to 26 percent mold prevalence figure is not a mystery. It is the entirely predictable outcome of the building stock Portugal has, in the climate Portugal has, with the renovation investment Portugal has made.",
            "## The response that isn't",
            "What I find harder to explain — and harder to accept — is the absence of a serious response to this.",
            "Portugal has no residential indoor air quality standard. The last attempt — Decreto-Lei 79/2006 — was revoked in 2013 and never replaced. A homeowner in Portugal has no legally defined right to mold-free housing, no national standard against which to measure their home's air quality, no regulatory framework that compels a landlord to address a documented mold problem.",
            "The European Union's new Energy Performance of Buildings Directive (EPBD 2024/1275), which Portugal must transpose into national law by May 2026, introduces for the first time a legal concept of Indoor Environmental Quality. It requires IEQ monitoring in renovated non-residential zero-emission buildings. This is progress. But it is commercial buildings. Residential properties — where 24 to 26 percent of people are already affected — remain outside the scope.",
            "Meanwhile, the dominant \"solution\" available to Portuguese consumers is a free diagnosis from a company that profits from selling you a treatment. This model has become so normalized that consumers don't question it. Of course the assessment is free. Of course the same technician who finds your problem will quote you for solving it. You would not accept this from a doctor. You would not accept a free medical diagnosis from a pharmaceutical company that profits when you buy their drug. But in the mold treatment market in Portugal, this is simply how things work.",
            "I understand why it works this way. Mold treatment is not a simple product. It requires site visits, skilled labour, proprietary systems. Someone has to pay for the initial assessment, and if the consumer won't, the treatment company will — because they recoup it downstream. The business logic is coherent.",
            "The problem is what it does to the information available to consumers. When the only accessible diagnosis comes from a company motivated to find a problem and sell a solution, the information produced by that diagnosis is not neutral. The consumer has no independent check. No second opinion. No way to know whether the treatment recommended is the right one, the minimal necessary one, or the most profitable one.",
            "There is, as of the time I'm writing this, no independent residential mold inspection service with laboratory diagnostic capability operating in Portugal. No certified mold inspectors in the sense that the US or UK would recognise — no equivalent of the ACAC's Council-certified Microbial Investigator qualification on the Iberian Peninsula. No Portuguese laboratory offering the DNA-based mold testing that has been standard in American residential diagnostics for twenty years.",
            "This is a gap so large it is almost difficult to see. It has the quality of the invisible — present everywhere, noticed almost nowhere.",
            "## What happened after we moved",
            "I want to come back to the personal for a moment, because the personal is why this site exists.",
            "After we moved to a properly built house — well-insulated, properly ventilated, without the cold spots and condensation problems of the previous property — my allergies began to improve. My family's health improved. The constant low-level respiratory irritation that had become so normal I had stopped noticing it as unusual — it wasn't there anymore.",
            "I cannot give you a controlled clinical study. I can tell you that the correlation was stark enough that I started asking questions I should have asked years earlier. What was growing in our old home? What species? What concentrations? What was it producing? What were we breathing every night while we slept?",
            "I started reading the science. The WHO guidelines. The research on Stachybotrys chartarum — the species behind the \"toxic black mold\" you may have heard of — and its production of trichothecene mycotoxins that inhibit protein synthesis at the cellular level. The work of researchers like Górny et al., showing that fungal fragments too small to see carry immunological activity many times more potent than the spores themselves. The 2023 paper by Taborda-Barata and colleagues in the journal Pulmonology, specifically reviewing indoor air pollution and respiratory disease from a Portuguese perspective, describing the \"generalised absence of awareness among the population\" about the link between indoor air quality and respiratory health.",
            "I am a Dutch entrepreneur who has lived in Portugal for years, built companies in the Portuguese real estate and PropTech space, and become — through personal experience and professional immersion — genuinely angry about the gap between what the science says about mold and what Portuguese consumers are being told.",
            "That anger is why this site exists.",
            "## What MoldCheck.pt is — and what it isn't",
            "MoldCheck.pt is an independent public health resource. It is published by FAIRBANK Group, which also operates InspectOS — a professional property inspection platform. We disclose this completely and without apology.",
            "What MoldCheck.pt will never do: sell you a treatment. Accept undisclosed sponsorship from mold treatment companies. Recommend products for commission. Generate fear to drive conversions. Write about mold health risks in ways that go beyond what the evidence actually supports.",
            "What it will do: publish the science accurately, in plain Portuguese and plain English, without sanitising the parts that are uncomfortable. Explain what is known, what is emerging, and what is still uncertain. Give you the information you need to ask better questions — of your landlord, your doctor, your contractor, and any company offering to fix your mold problem.",
            "Portugal is changing. The EPBD transposition in 2026 will begin to shift the regulatory baseline. Storm Kristin in January 2026 — which caused billions of euros in damage across Portugal and left tens of thousands of buildings with water ingress — has created a new cohort of properties entering the window where mold colonisation begins within 24 to 48 hours of flooding. The conversation about building quality and health is slowly beginning.",
            "We want to be part of accelerating that conversation. Not by selling anything. By being honest about a problem that has been normalised for too long.",
            "## A note for the one in four",
            "If you are reading this and you recognise something in it — the mold on the bedroom wall, the persistent cough, the allergy that doesn't respond to treatment, the symptoms that somehow improve when you spend time away from home — I want to say something directly.",
            "You are not imagining it. You are not overreacting. The connection between your home environment and your health is real, it is scientifically documented, and it is under-recognised by most of the systems that should be addressing it.",
            "This site is for you. The information here is free. We have no interest in making your problem seem larger than it is, or smaller. We just want you to have what I didn't have when I first started asking these questions: honest, independent information, grounded in evidence, with no commercial agenda attached.",
            "That's a simple thing. It shouldn't be unusual.",
            "In Portugal, for now, it is."
        ],
        disclosure: "Pieter Paul Castelein works at FAIRBANK Group, the company behind InspectOS — an independent property inspection platform operating in Portugal. MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK does not sell damp treatments. FAIRBANK does not take commissions from remediation companies. When we recommend an inspection or lab test, it is because we believe you need one — not because we profit from whatever treatment follows.\n\nThe information on this site is educational and does not constitute medical advice. If you are experiencing health symptoms, please consult a qualified healthcare professional.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020–2023"
            },
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            },
            {
                label: "Taborda-Barata et al., \"Indoor air pollution and respiratory diseases: A general update and a Portuguese perspective,\" Pulmonology (2023)"
            },
            {
                label: "Górny et al., \"Fungal fragments as respiratory tract hazards,\" Environmental Health Perspectives (2002)"
            },
            {
                label: "EPBD Directive 2024/1275 — Energy Performance of Buildings"
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
        seoTitle: "Le Portugal a le Deuxième Plus Grave Problème de Moisissures en Europe — MoldCheck.pt",
        seoDescription: "Le Portugal a le deuxième pire problème de moisissures d'Europe. Données Eurostat, causes structurelles et absence de diagnostic indépendant expliqués.",
        focusKeyword: "moisissures Portugal Europe",
        title: "Le Portugal a le Deuxième Plus Grave Problème de Moisissures en Europe. Pourquoi Personne n'en Parle ?",
        byline: "Par Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "J'ai grandi aux Pays-Bas. En quarante ans, je n'ai jamais vu de moisissures dans une maison.",
            "Pas parce que les maisons néerlandaises sont parfaites — elles ne le sont pas. Mais parce que la construction hollandaise part du principe qu'il va pleuvoir, toujours, et que l'humidité doit être gérée activement : isolation suffisante, ventilation mécanique, matériaux résistants à l'humidité. Le problème est intégré dans le processus de construction avant même d'exister.",
            "Quand je me suis installé au Portugal il y a plusieurs années, j'ai découvert une relation à l'humidité dans les logements qui est fondamentalement différente. L'humidité dans les murs est mentionnée avec une sorte de résignation, comme si c'était une caractéristique du climat qu'on accepte simplement. Les moisissures derrière les armoires sont découvertes par hasard, traitées à l'eau de Javel, oubliées jusqu'à ce qu'elles reviennent. Les allergies et la toux persistante de l'hiver sont attribuées au froid, à l'air, à tout sauf aux murs dans lesquels on passe la majorité de sa vie.",
            "J'ai voulu comprendre. J'ai cherché les données.",
            "## Ce que les chiffres révèlent",
            "L'enquête EU-SILC d'Eurostat — la plus grande étude systématique sur les conditions de vie dans l'Union européenne — interroge régulièrement les personnes sur leur logement pour savoir s'il est affecté par l'humidité ou les moisissures. Les résultats pour le Portugal sont constants d'une année sur l'autre : entre 24 et 26 pour cent de la population portugaise vit dans un logement affecté par l'humidité ou les moisissures.",
            "C'est le deuxième chiffre le plus élevé de l'Union européenne. Seul Chypre fait pire.",
            "La moyenne européenne est d'environ 14 pour cent. Le Portugal a presque le double.",
            "Le recensement INE de 2021 complète ce tableau : 82 pour cent des bâtiments portugais ont été construits avant l'an 2000, avant toute exigence significative d'efficacité énergétique ou d'isolation. Plus d'un tiers des bâtiments ont besoin de travaux. Pas de rénovation — de réparations de base.",
            "Pour les résidents français au Portugal — et vous êtes nombreux, la communauté française représente l'une des plus importantes parmi les résidents européens — cette réalité est particulièrement importante à connaître. Que vous soyez propriétaire d'une résidence principale à Lisbonne, d'une maison secondaire en Algarve, ou locataire dans le Grand Porto, les bâtiments dans lesquels vous vivez ont été construits dans un contexte réglementaire très différent de ce que vous connaissez en France.",
            "## Ce que j'ai trouvé sur le marché",
            "Le Portugal dispose de plusieurs entreprises sur le marché du traitement de l'humidité et des moisissures. Certaines sont importantes, avec des décennies d'activité et des milliers d'interventions par an. Elles proposent des diagnostics gratuits. Elles viennent chez vous, évaluent le problème, et proposent des solutions — systèmes de ventilation, injections de résine, produits d'encapsulation — pour des montants qui peuvent atteindre plusieurs milliers d'euros.",
            "Ces entreprises peuvent proposer des solutions légitimes pour des problèmes réels. Ce n'est pas le sujet.",
            "Le sujet est celui-ci : au Portugal, le diagnostic est effectué par l'entreprise qui vend le traitement. Il n'existe au Portugal aucune entité indépendante — sans lien avec les entreprises de traitement, sans intérêt commercial dans le résultat du diagnostic — qui évalue le problème de moisissures dans votre logement et vous dit honnêtement ce que vous avez et ce dont vous avez besoin.",
            "C'est comme si, dans le domaine de la santé, le seul service de diagnostic disponible était géré par la société pharmaceutique qui vend le médicament que le diagnostic va recommander. Personne n'accepterait cela en médecine. Nous l'acceptons dans le logement parce que nous n'avons jamais eu d'alternative.",
            "En France, le Diagnostiqueur Immobilier est une profession réglementée et certifiée, indépendante des entreprises de travaux. Cette infrastructure de diagnostic indépendant n'existe pas encore pour les moisissures résidentielles au Portugal.",
            "## Le lien avec la santé que personne ne fait",
            "Il y a une autre dimension de ce problème qui mérite d'être dite clairement.",
            "L'Organisation mondiale de la santé a estimé, dans ses directives de 2009 sur la qualité de l'air intérieur, que 13 pour cent des cas d'asthme infantile dans la région européenne de l'OMS sont attribuables à l'humidité résidentielle. Des recherches de Taborda-Barata et collègues, publiées en 2023 dans la revue scientifique Pulmonology, décrivent une « absence généralisée de sensibilisation » au Portugal concernant le lien entre la qualité de l'air intérieur et la santé respiratoire.",
            "Un Portugais sur quatre vit dans un logement humide ou avec des moisissures. Treize pour cent des cas d'asthme infantile sont potentiellement attribuables à cette condition. Et le lien entre les murs dans lesquels on vit et les symptômes dont on souffre en hiver entre rarement dans la consultation médicale — ni en France, ni au Portugal.",
            "Ce n'est pas un problème mineur de qualité de vie. C'est un problème de santé publique sous-reconnu à l'échelle d'un quart de la population.",
            "## Ce qu'est ce site — et ce qu'il n'est pas",
            "MoldCheck.pt n'est pas une entreprise de traitement. Nous ne vendons pas de systèmes de ventilation, de produits d'imperméabilisation, ni aucun autre service d'intervention dans les logements.",
            "C'est une ressource d'information indépendante. Nous publions ce que la science dit sur les moisissures — sur les espèces, sur les risques pour la santé, sur les méthodes de détection et de remédiation qui ont une base scientifique. Quand une méthode ne fonctionne pas, nous disons qu'elle ne fonctionne pas. Quand les informations disponibles sont incertaines, nous disons qu'elles sont incertaines.",
            "Nous sommes transparents sur notre identité : MoldCheck.pt est une initiative du FAIRBANK Group, la société à l'origine d'InspectOS — plateforme d'inspection indépendante de biens immobiliers au Portugal. Notre lien commercial est avec l'inspection et le diagnostic indépendants. Nous n'avons aucun intérêt dans le traitement qui suit le diagnostic. Quand nous recommandons une évaluation professionnelle, c'est parce que nous pensons que vous en avez besoin — pas parce que nous gagnons de l'argent sur ce qui se passe ensuite.",
            "## Pour celui ou celle qui reconnaît sa situation",
            "Si vous vivez au Portugal et que vous lisez ceci, il y a une probabilité sur quatre que votre logement soit affecté par l'humidité ou les moisissures. Vous le savez peut-être déjà — une tache qui réapparaît chaque hiver, une odeur que vous n'arrivez pas à éliminer, une pièce qui ne sèche jamais vraiment. Ou vous ne le savez peut-être pas — parce que les moisissures les plus problématiques poussent dans des endroits que vous ne voyez jamais, et les symptômes qu'elles provoquent sont faciles à attribuer à d'autres causes.",
            "Ce site a été construit pour vous. Pour que vous ayez accès à l'information qui existe, sans la médiation de ceux qui ont un intérêt dans le diagnostic qu'ils vont vous présenter.",
            "Le problème des moisissures au Portugal n'est pas inévitable. Ce n'est pas une caractéristique du climat qu'on accepte. C'est un problème avec des causes identifiables, des solutions fondées sur la science, et un manque évident d'information indépendante que ce site cherche, en partie, à combler.",
            "Nous commençons ici."
        ],
        disclosure: "Pieter Paul Castelein travaille au sein du FAIRBANK Group, la société à l'origine d'InspectOS — plateforme d'inspection indépendante de biens immobiliers au Portugal. MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c'est parce que nous pensons que vous en avez besoin — pas parce que nous tirons profit du traitement qui suit.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020–2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "OMS — Lignes directrices relatives à la qualité de l'air intérieur : humidité et moisissures (2009)"
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
        seoTitle: "Portugal Hat das Zweitschlimmste Schimmelproblem Europas — MoldCheck.pt",
        seoDescription: "Portugal hat das zweitschlimmste Schimmelproblem Europas. Eurostat-Daten, strukturelle Ursachen und das Fehlen unabhängiger Diagnose erklärt.",
        focusKeyword: "Schimmel Portugal Europa",
        title: "Portugal Hat das Zweitschlimmste Schimmelproblem Europas. Warum Spricht Niemand Darüber?",
        byline: "Von Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Ich bin in den Niederlanden aufgewachsen. In vierzig Jahren habe ich in keinem einzigen Haus Schimmel gesehen.",
            "Nicht weil niederländische Häuser perfekt sind — das sind sie nicht. Sondern weil der niederländische Baustil davon ausgeht, dass es regnen wird — immer — und dass Feuchtigkeit aktiv gemanagt werden muss: ausreichende Dämmung, mechanische Lüftung, feuchtigkeitsresistente Materialien. Das Problem wird in den Bauprozess integriert, bevor es entstehen kann.",
            "Als ich vor einigen Jahren nach Portugal zog, lernte ich, dass die Beziehung zur Feuchtigkeit in Wohngebäuden hier grundlegend anders ist. Feuchte Wände werden mit einer Art Resignation erwähnt, als ob es sich um eine Eigenschaft des Klimas handele, die man einfach akzeptiert. Schimmel hinter Schränken wird zufällig entdeckt, mit Bleiche behandelt, vergessen — bis er wiederkommt. Allergien und hartnäckiger Winterhusten werden der Kälte, der Luft, allem Möglichen zugeschrieben — nur nicht den Wänden, in denen man die meiste Zeit seines Lebens verbringt.",
            "Ich wurde neugierig. Ich suchte die Daten.",
            "## Was die Zahlen zeigen",
            "Die EU-SILC-Erhebung von Eurostat — die größte systematische Studie zu Lebensbedingungen in der Europäischen Union — befragt die Bevölkerung regelmäßig, ob sie in feuchten oder schimmelbelasteten Wohnungen lebt. Die Ergebnisse für Portugal sind über die Jahre konstant: Zwischen 24 und 26 Prozent der portugiesischen Bevölkerung lebt in Wohnungen, die von Feuchtigkeit oder Schimmel betroffen sind.",
            "Das ist der zweithöchste Wert in der Europäischen Union. Nur Zypern ist schlechter.",
            "Der EU-Durchschnitt liegt bei etwa 14 Prozent. Portugal hat fast das Doppelte.",
            "Die INE-Volkszählung 2021 vervollständigt das Bild: 82 Prozent der portugiesischen Gebäude wurden vor dem Jahr 2000 gebaut — vor jeglichen nennenswerten Energieeffizienz- oder Dämmanforderungen. Mehr als ein Drittel der Gebäude sind reparaturbedürftig. Nicht Renovierung — grundlegende Instandhaltung.",
            "Für deutsche Bewohner in Portugal — und es werden immer mehr, die Community wächst stetig — ist diese Realität besonders wichtig zu kennen. Ob Sie eine Hauptresidenz in Lissabon, ein Ferienhaus an der Algarve oder eine Mietwohnung im Großraum Porto haben: Die Gebäude, in denen Sie leben, wurden unter völlig anderen regulatorischen Bedingungen gebaut als das, was Sie aus Deutschland kennen.",
            "## Was ich auf dem Markt fand",
            "Portugal hat mehrere Unternehmen auf dem Markt für Feuchtigkeits- und Schimmelbehandlung. Einige sind groß, mit jahrzehntelanger Tätigkeit und Tausenden von Interventionen pro Jahr. Sie bieten kostenlose Diagnosen an. Sie kommen zu Ihnen nach Hause, bewerten das Problem und schlagen Lösungen vor — Lüftungssysteme, Harzinjektionen, Verkapselungsprodukte — für Beträge, die mehrere Tausend Euro erreichen können.",
            "Diese Unternehmen können für spezifische Probleme legitime Lösungen anbieten. Das ist nicht der Punkt.",
            "Der Punkt ist folgender: In Portugal wird die Diagnose von demselben Unternehmen gestellt, das die Behandlung verkauft. Es gibt in Portugal keine unabhängige Einrichtung — ohne Verbindung zu Behandlungsunternehmen, ohne kommerzielles Interesse am Diagnoseergebnis — die das Schimmelproblem in Ihrer Wohnung bewertet und Ihnen ehrlich sagt, was Sie haben und was Sie brauchen.",
            "Das ist so, als ob im Gesundheitswesen der einzige verfügbare Diagnosedienst vom Pharmaunternehmen betrieben würde, das das Medikament verkauft, das die Diagnose empfehlen wird. In der Medizin würde das niemand akzeptieren. Im Wohnbereich akzeptieren wir es, weil wir nie eine Alternative hatten.",
            "In Deutschland gibt es den zertifizierten Sachverständigen für Schimmel — eine Instanz, die unabhängig von Sanierungsunternehmen arbeitet. Diese Infrastruktur existiert für Wohnimmobilien in Portugal noch nicht.",
            "## Die Verbindung zur Gesundheit, die niemand herstellt",
            "Die Weltgesundheitsorganisation schätzte in ihren Leitlinien von 2009 zur Innenraumluftqualität, dass 13 Prozent der Kindheitsfälle von Asthma in der europäischen WHO-Region auf Wohnraumfeuchtigkeit zurückzuführen sind. Forschungen von Taborda-Barata und Kollegen, veröffentlicht 2023 in der wissenschaftlichen Zeitschrift Pulmonology, beschreiben ein „weitverbreitetes Mangel an Bewusstsein in Portugal über den Zusammenhang zwischen Innenraumluftqualität und Atemwegsgesundheit.",
            "Jeder vierte Portugiese lebt in feuchten oder schimmelbelasteten Wohnungen. Dreizehn Prozent der Kindheitsasthma-Fälle sind potenziell darauf zurückzuführen. Und die Verbindung zwischen den Wänden, in denen man lebt, und den Symptomen, mit denen man im Winter kämpft, taucht selten in der ärztlichen Konsultation auf.",
            "Das ist kein geringes Lebensqualitätsproblem. Es ist ein im Ausmaß eines Viertels der Bevölkerung unterschätztes öffentliches Gesundheitsproblem.",
            "## Was diese Website ist — und was sie nicht ist",
            "MoldCheck.pt ist kein Behandlungsunternehmen. Wir verkaufen keine Lüftungssysteme, keine Abdichtungsprodukte und keine anderen Eingriffsdienste für Wohngebäude.",
            "Es ist eine unabhängige Informationsressource. Wir veröffentlichen, was die Wissenschaft über Schimmel sagt — über Arten, Gesundheitsrisiken, Erkennungs- und Sanierungsmethoden mit wissenschaftlicher Grundlage. Wenn eine Methode nicht funktioniert, sagen wir das. Wenn Informationen unsicher sind, sagen wir das.",
            "Wir sind transparent über unsere Identität: MoldCheck.pt ist eine Initiative der FAIRBANK Group, dem Unternehmen hinter InspectOS — einer unabhängigen Immobilieninspektionsplattform in Portugal. Unsere kommerzielle Verbindung liegt bei der unabhängigen Inspektion und Diagnose. Wir haben kein Interesse an der Behandlung, die auf die Diagnose folgt. Wenn wir eine professionelle Bewertung empfehlen, dann weil wir glauben, dass Sie eine brauchen — nicht weil wir an dem verdienen, was danach kommt.",
            "## Für jeden Vierten",
            "Wenn Sie das lesen und in Portugal leben, gibt es eine Wahrscheinlichkeit von eins zu vier, dass Ihre Wohnung von Feuchtigkeit oder Schimmel betroffen ist. Vielleicht wissen Sie das bereits — ein Fleck, der jeden Winter wiederkommt, ein Geruch, den Sie nicht loswerden. Oder Sie wissen es nicht — weil der problematischste Schimmel an Orten wächst, die Sie nie sehen, und die Symptome, die er verursacht, leicht anderen Ursachen zugeschrieben werden können.",
            "Diese Website wurde für Sie gebaut. Damit Sie Zugang zu den vorhandenen Informationen haben — ohne die Vermittlung derer, die ein Interesse an der Diagnose haben, die sie Ihnen präsentieren werden.",
            "Das Schimmelproblem in Portugal ist nicht unvermeidlich. Es ist kein Klimamerkmal, das man einfach akzeptiert. Es ist ein Problem mit identifizierbaren Ursachen, wissenschaftlich fundierten Lösungen und einem klaren Mangel an unabhängigen Informationen, den diese Website versucht, zumindest teilweise zu beheben.",
            "Wir beginnen hier."
        ],
        disclosure: "Pieter Paul Castelein arbeitet bei der FAIRBANK Group, dem Unternehmen hinter InspectOS — einer unabhängigen Immobilieninspektionsplattform in Portugal. MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie eine brauchen — nicht weil wir von der nachfolgenden Behandlung profitieren.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020–2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "WHO — Leitlinien für die Innenraumluftqualität: Feuchtigkeit und Schimmel (2009)"
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
        seoTitle: "Portugal Heeft het Op Één Na Ergste Schimmelprobleem van Europa — MoldCheck.pt",
        seoDescription: "Portugal heeft het op één na ergste schimmelprobleem van Europa. Eurostat-cijfers, structurele oorzaken en het ontbreken van onafhankelijke diagnose uitgelegd.",
        focusKeyword: "schimmel Portugal Europa",
        title: "Portugal Heeft het Op Één Na Ergste Schimmelprobleem van Europa. Waarom Heeft Niemand Het Erover?",
        byline: "Door Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Ik ben opgegroeid in Nederland. In veertig jaar heb ik nooit schimmel in een huis gezien.",
            "Niet omdat Nederlandse huizen perfect zijn — dat zijn ze niet. Maar omdat de Nederlandse bouw ervan uitgaat dat het gaat regenen, altijd, en dat vocht actief beheerd moet worden: voldoende isolatie, mechanische ventilatie, vochtbestendige materialen. Het probleem wordt in het bouwproces geïntegreerd voordat het kan ontstaan.",
            "Toen ik een aantal jaren geleden naar Portugal verhuisde, ontdekte ik dat de relatie met vocht in woningen hier fundamenteel anders is. Vochtige muren worden vermeld met een soort berusting, alsof het een eigenschap van het klimaat is die je gewoon accepteert. Schimmel achter kasten wordt toevallig ontdekt, behandeld met bleekwater, vergeten — totdat het terugkomt. Allergieën en hardnekkige winterhoest worden toegeschreven aan de kou, de lucht, aan alles behalve de muren waarin je het grootste deel van je leven doorbrengt.",
            "Ik werd nieuwsgierig. Ik zocht de cijfers op.",
            "## Wat de cijfers zeggen",
            "Het EU-SILC-onderzoek van Eurostat — de grootste systematische studie naar levensomstandigheden in de Europese Unie — vraagt bewoners regelmatig of ze in een woning leven die door vocht of schimmel is aangetast. De resultaten voor Portugal zijn jaar na jaar consistent: tussen de 24 en 26 procent van de Portugese bevolking leeft in een woning die door vocht of schimmel is aangetast.",
            "Dat is het op één na hoogste cijfer in de Europese Unie. Alleen Cyprus scoort slechter.",
            "Het EU-gemiddelde ligt op ongeveer 14 procent. Portugal heeft bijna het dubbele.",
            "De INE-volkstelling van 2021 completeert het beeld: 82 procent van de Portugese gebouwen is vóór het jaar 2000 gebouwd — vóór enige betekenisvolle eis voor energie-efficiëntie of isolatie. Meer dan een derde van alle gebouwen heeft reparaties nodig. Geen renovatie — basisonderhoud.",
            "Als Nederlander herken ik dit patroon direct. We zijn gewend aan vochtig klimaat én aan woningen die daartegen bestand zijn. Portugal heeft het vochtige klimaat — Porto heeft een gemiddelde luchtvochtigheid van 77 procent, Lissabon in de winter 78 tot 84 procent — maar de bouw gaat er niet systematisch mee om. Dat is geen klimaatprobleem. Dat is een bouwkundig en informatieprobleem.",
            "## Wat ik op de markt aantrof",
            "Portugal heeft meerdere bedrijven op de markt voor vocht- en schimmelbehandeling. Sommige zijn groot, met tientallen jaren ervaring en duizenden interventies per jaar. Ze bieden gratis diagnoses aan. Ze komen bij je thuis, beoordelen het probleem en stellen oplossingen voor — ventilatiesystemen, harzinjecties, inkapselingsproducten — voor bedragen die kunnen oplopen tot duizenden euro's.",
            "Deze bedrijven kunnen voor specifieke problemen legitieme oplossingen bieden. Dat is niet het punt.",
            "Het punt is dit: in Portugal wordt de diagnose gesteld door hetzelfde bedrijf dat de behandeling verkoopt. Er bestaat in Portugal geen onafhankelijke instantie — zonder band met behandelingsbedrijven, zonder commercieel belang bij de uitkomst van de diagnose — die het schimmelprobleem in jouw woning beoordeelt en je eerlijk vertelt wat je hebt en wat je nodig hebt.",
            "Het is alsof de enige beschikbare diagnostische dienst in de gezondheidszorg wordt gerund door het farmaceutisch bedrijf dat het medicijn verkoopt dat de diagnose gaat aanbevelen. In de geneeskunde zou niemand dat accepteren. In de woningmarkt accepteren we het, omdat we nooit een alternatief hebben gehad.",
            "In Nederland kennen we de gecertificeerde schimmelinspecteur — een professional die onafhankelijk van saneringsbedrijven opereert. Die infrastructuur bestaat voor residentieel vastgoed in Portugal nog niet.",
            "## De link met gezondheid die niemand legt",
            "De Wereldgezondheidsorganisatie schatte in haar richtlijnen van 2009 voor binnenluchtkwaliteit dat 13 procent van de gevallen van astma bij kinderen in de Europese WHO-regio toe te schrijven is aan vochtige woonomstandigheden. Onderzoek van Taborda-Barata en collega's, gepubliceerd in 2023 in het wetenschappelijk tijdschrift Pulmonology, beschrijft een \"wijdverspreide afwezigheid van bewustzijn\" in Portugal over het verband tussen binnenluchtkwaliteit en luchtwegaandoeningen.",
            "Eén op de vier Portugezen leeft in een woning met vocht of schimmel. Dertien procent van de gevallen van kindastma is hier mogelijk aan toe te schrijven. En de link tussen de muren waarin je leeft en de symptomen waarmee je elke winter kampt, komt zelden aan bod bij de huisarts.",
            "Dit is geen klein leefkwaliteitsprobleem. Het is een onderkend volksgezondheidsprobleem op de schaal van een kwart van de bevolking.",
            "## Wat deze website is — en wat ze niet is",
            "MoldCheck.pt is geen behandelingsbedrijf. We verkopen geen ventilatiesystemen, geen waterdichtingsproducten, en geen andere interventiediensten voor woningen.",
            "Het is een onafhankelijke informatiebron. We publiceren wat de wetenschap zegt over schimmel — over soorten, gezondheidsrisico's, detectie- en saneringsmethoden met wetenschappelijke basis. Als een methode niet werkt, zeggen we dat. Als informatie onzeker is, zeggen we dat.",
            "We zijn transparant over wie we zijn: MoldCheck.pt is een initiatief van de FAIRBANK Group, het bedrijf achter InspectOS — een onafhankelijk vastgoedinspectieplatform in Portugal. Onze commerciële verbinding ligt bij onafhankelijke inspectie en diagnose. We hebben geen belang bij de behandeling die op de diagnose volgt. Als we een professionele beoordeling aanbevelen, is dat omdat we denken dat je die nodig hebt — niet omdat we verdienen aan wat daarna komt.",
            "## Voor iedereen die zich herkent",
            "Als je dit leest en in Portugal woont — of een woning bezit in Portugal — is er een kans van één op vier dat jouw woning door vocht of schimmel is aangetast. Misschien weet je dat al. Of misschien niet — want de meest problematische schimmel groeit op plekken die je nooit ziet, en de symptomen die het veroorzaakt zijn makkelijk aan andere oorzaken toe te schrijven.",
            "Als Nederlander in Portugal weet ik hoe verrassend dit kan zijn. We zijn niet gewend aan dit probleem. Maar juist daarom is het belangrijk om er open de ogen voor te hebben.",
            "Deze website is gebouwd voor iedereen die toegang wil tot de beschikbare informatie — zonder de tussenkomst van partijen die belang hebben bij de diagnose die ze je gaan presenteren.",
            "Het schimmelprobleem in Portugal is niet onvermijdelijk. Het is een probleem met identificeerbare oorzaken, wetenschappelijk onderbouwde oplossingen, en een duidelijk gebrek aan onafhankelijke informatie dat deze website deels probeert te vullen.",
            "We beginnen hier."
        ],
        disclosure: "Pieter Paul Castelein werkt bij de FAIRBANK Group, het bedrijf achter InspectOS — een onafhankelijk vastgoedinspectieplatform in Portugal. MoldCheck.pt is een initiatief van de FAIRBANK Group. We verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijven. Als we een inspectie of laboratoriumanalyse aanbevelen, is dat omdat we denken dat je die nodig hebt — niet omdat we verdienen aan de behandeling die daarop volgt.",
        sources: [
            {
                label: "Eurostat EU-SILC Housing Quality Survey 2020–2023"
            },
            {
                label: "INE Censos 2021"
            },
            {
                label: "WHO — Richtlijnen voor binnenluchtkwaliteit: vocht en schimmel (2009)"
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
        seoTitle: "Portugal tiene el segundo peor problema de moho de Europa — MoldCheck.pt",
        seoDescription: "Portugal tiene el segundo peor problema de moho de Europa. Datos Eurostat, causas estructurales y ausencia de diagnóstico independiente explicados.",
        focusKeyword: "moho Portugal Europa",
        title: "Portugal tiene el segundo peor problema de moho de Europa. Casi nadie habla de ello.",
        byline: "De Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "El 24–26% de los hogares portugueses declaran tener problemas de humedad o moho. Este es el dato de Eurostat EU-SILC — público, no controvertido, raramente citado.",
            "Solo Chipre lo hace peor dentro de la Unión Europea. La media europea se sitúa en torno al 13–15%. Portugal casi duplica esa cifra.",
            "## ¿Por qué ocurre esto?",
            "No es una cuestión de negligencia. Es física e historia.",
            "El 82% de los edificios residenciales portugueses se construyó antes del año 2000 — antes de cualquier requisito significativo de aislamiento térmico o eficiencia energética. Estos edificios tienen puentes térmicos severos: marcos de ventanas de aluminio sin rotura de puente térmico, paredes exteriores delgadas, forjados sin aislar.",
            "Cuando el aire interior húmedo entra en contacto con estas superficies frías en invierno, condensa. Oporto tiene una humedad relativa media anual del 77%. Lisboa alcanza el 84% en las semanas más húmedas del invierno. Estos valores no son excepcionales en Portugal: son normales. Un edificio no diseñado para gestionar estas condiciones produce condensación estructural, no accidental.",
            "A esto se suma el hábito cultural de no calentar las casas en invierno, lo que mantiene las superficies de las paredes frías incluso en los días más húmedos.",
            "## El mercado de diagnóstico no es independiente",
            "En Portugal existe un mercado estructurado de empresas de tratamiento contra la humedad. Las principales ofrecen diagnósticos gratuitos a domicilio.",
            "Esta oferta es comercialmente inteligente: la empresa que diagnostica el problema es la misma que venderá la solución. No existe un conflicto de intereses declarado — pero existe estructuralmente.",
            "No se trata de acusar a estas empresas de incompetencia o mala fe. Se trata de señalar que en Portugal no existe ninguna entidad que evalúe el moho en una vivienda sin obtener beneficio del tratamiento que le sigue.",
            "## Lo que falta: un sistema de inspección independiente",
            "En España existe el técnico de prevención de riesgos laborales con competencia en calidad del aire, y los peritos de edificación. En Francia existe el diagnostiqueur immobilier certificado e independiente. En el Reino Unido existen los damp surveyors acreditados.",
            "En Portugal no existe nada equivalente para el diagnóstico residencial de humedad y moho. No hay un registro, no hay una certificación reconocida, no hay un marco normativo que separe quien diagnostica de quien trata.",
            "MoldCheck.pt e InspectOS existen para comenzar a llenar este vacío — con inspectores que cobran por su tiempo, sin comisiones sobre las soluciones que siguen.",
            "## ¿Por qué esto también afecta a los españoles en Portugal?",
            "La comunidad española en Portugal ha crecido significativamente en los últimos años. Muchos llegan sin conocer el mercado inmobiliario local, sin la red de contactos que ayuda a los portugueses a gestionar los problemas de vivienda, y a menudo con expectativas de calidad constructiva calibradas en España — que, con todos sus problemas, tiene estándares de construcción mediamente superiores a los de Portugal en lo que respecta al aislamiento.",
            "Comprar o alquilar una vivienda en Portugal sin una evaluación independiente de la humedad es un riesgo real. No porque los vendedores o propietarios sean necesariamente deshonestos, sino porque los problemas de humedad son con frecuencia invisibles en verano — la estación en que se realiza la mayoría de las compras — y porque no existe una obligación de información equivalente a la vigente en muchos otros países europeos."
        ],
        disclosure: "MoldCheck.pt es una iniciativa del FAIRBANK Group, la empresa que opera InspectOS — plataforma de inspección inmobiliaria independiente en Portugal. No vendemos tratamientos contra la humedad. No recibimos comisiones de empresas de saneamiento.",
        sources: [
            {
                label: "Eurostat EU-SILC, Housing conditions data (2023)"
            },
            {
                label: "INE, Censos 2021 — Caracterização do parque habitacional"
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
        seoTitle: "Il Portogallo ha il secondo peggior problema di muffa in Europa — MoldCheck.pt",
        seoDescription: "Il Portogallo ha il secondo peggior problema di muffa in Europa. Dati Eurostat, cause strutturali e assenza di diagnosi indipendente spiegati.",
        focusKeyword: "muffa Portogallo Europa",
        title: "Il Portogallo ha il secondo peggior problema di muffa in Europa. Quasi nessuno ne parla.",
        byline: "di MoldCheck.pt",
        body: [
            "Ho scoperto il problema della muffa in Portogallo nel modo in cui la maggior parte delle persone scopre qualcosa di scomodo: di persona.",
            "Vengo dall'Olanda. Ho vissuto in case costruite con criteri di isolamento che in Portogallo sarebbero considerati di lusso. Quando mi sono trasferito a Lisbona, ho iniziato ad accusare sintomi che non avevo mai avuto: naso chiuso cronico, tosse secca, stanchezza. Ho attribuito tutto all'\"adattamento\" — al clima diverso, alla nuova città.",
            "Poi ho comprato un misuratore di umidità. Settantotto percento di umidità relativa in camera da letto, nel mese di novembre. Ho iniziato a guardare gli angoli. Ho trovato quello che stavo cercando.",
            "## I numeri che nessuno pubblica in evidenza",
            "Il programma EU-SILC di Eurostat pubblica ogni anno dati sull'abitazione in Europa. Tra le variabili rilevate c'è la percentuale di famiglie che segnalano problemi di umidità o muffa nelle proprie abitazioni.",
            "Il dato più recente disponibile per il Portogallo: 24-26% delle famiglie.",
            "Soltanto Cipro fa peggio tra i paesi dell'Unione Europea.",
            "Per confronto, la media europea è circa il 13-15%. Il Portogallo è quasi il doppio.",
            "Questi dati esistono. Sono pubblici. Non sono controversi. Ma sono assenti dal dibattito pubblico portoghese, dalle campagne di salute pubblica, e dalla conversazione sui problemi dell'abitazione — che in Portogallo si concentra quasi esclusivamente sul costo degli affitti.",
            "## Le ragioni strutturali del problema",
            "Il problema della muffa in Portogallo non è casuale. È il risultato prevedibile di tre fattori che si sommano:",
            "Il parco edilizio. L'82% degli edifici residenziali portoghesi è stato costruito prima del 2000 — prima di qualsiasi requisito significativo di isolamento termico o efficienza energetica. Questi edifici hanno ponti termici massicci: telai di finestre in alluminio senza taglio termico, pareti esterne sottili, solai non isolati. Quando l'aria interna umida entra in contatto con queste superfici fredde in inverno, condensa.",
            "Il clima. Porto ha un'umidità relativa media annua del 77%. Lisbona, nelle settimane più umide dell'inverno, raggiunge l'84%. Questi valori non sono eccezionali per il Portogallo — sono normali. Un edificio non progettato per gestire queste condizioni produce condensa strutturale, non accidentale.",
            "La cultura del riscaldamento. La tradizione portoghese di non riscaldare le case d'inverno — per ragioni economiche e storiche — mantiene le superfici delle pareti fredde anche nelle giornate più umide. Questo amplifica la condensa su ogni superficie che non raggiunge la temperatura del punto di rugiada.",
            "Il risultato è che circa un portoghese su quattro vive in una casa con problemi di umidità o muffa — non perché non si curi della propria abitazione, ma perché vive in un edificio strutturalmente inadeguato al proprio clima.",
            "## Il mercato della diagnosi non è indipendente",
            "In Portogallo esiste un mercato strutturato delle aziende di trattamento contro l'umidità. Le principali offrono diagnosi gratuite a domicilio.",
            "Questa offerta è intelligente dal punto di vista commerciale: l'azienda che diagnostica il problema è la stessa che venderà la soluzione. Non esiste un conflitto di interessi dichiarato — ma esiste strutturalmente.",
            "Non si tratta di accusare queste aziende di incompetenza o malafede. Si tratta di notare che non esiste in Portogallo nessuna entità che valuti la muffa in un'abitazione senza guadagnare dal trattamento che ne consegue.",
            "Per gli italiani residenti in Portogallo — o per chiunque stia valutando un acquisto immobiliare o un contratto di locazione — questa asimmetria è importante da comprendere.",
            "## Quello che manca: un sistema di ispezione indipendente",
            "In Francia esiste il diagnostiqueur immobilier — un professionista certificato e indipendente che valuta le condizioni di un immobile senza interesse nelle soluzioni che propone. In Germania esiste il Sachverständiger für Schimmelpilze. Nel Regno Unito esistono i damp surveyors accreditati.",
            "In Portogallo non esiste nulla di equivalente per la diagnostica residenziale dell'umidità e della muffa. Non esiste un registro, non esiste una certificazione riconosciuta, non esiste un quadro normativo che separi chi diagnostica da chi tratta.",
            "Il MoldCheck.pt e la InspectOS esistono per cominciare a colmare questo vuoto — con ispettori che fatturano il proprio tempo, senza commissioni sulle soluzioni che seguono.",
            "Non è la soluzione sistemica che il Portogallo necessita. Ma è la soluzione disponibile ora, per le persone che hanno bisogno di sapere con che cosa hanno a che fare prima di decidere cosa fare.",
            "## Perché questo riguarda anche gli italiani in Portogallo",
            "La comunità italiana in Portogallo è cresciuta significativamente negli ultimi anni. Molti arrivano senza conoscere il mercato immobiliare locale, senza la rete di contatti che aiuta i portoghesi a navigare i problemi dell'abitazione, e spesso con aspettative di qualità costruttiva calibrate sull'Italia — che, nonostante i suoi problemi, ha standard edilizi mediamente superiori al Portogallo.",
            "Comprare o affittare casa in Portogallo senza una valutazione indipendente dell'umidità è un rischio reale. Non perché i venditori o i proprietari siano necessariamente disonesti, ma perché i problemi di umidità sono spesso non visibili in estate — la stagione in cui la maggior parte degli acquisti viene effettuata — e perché non esiste un obbligo di disclosure equivalente a quello vigente in molti altri paesi europei.",
            "## Quello che speriamo cambi",
            "Una parte della risposta è normativa: la trasposizione della direttiva EPBD 2024/1275 — che dovrà avvenire entro maggio 2026 — porterà nuovi requisiti sulle prestazioni energetiche degli edifici, inclusi quelli legati all'umidità. Questo creerà pressione strutturale verso un'edilizia più sana.",
            "Un'altra parte è culturale: la muffa nelle abitazioni viene ancora trattata come un problema estetico o di manutenzione ordinaria, non come un problema di salute pubblica. Finché questa percezione non cambia, il problema sistemico rimane invisibile.",
            "Il MoldCheck.pt non può cambiare il mercato immobiliare portoghese. Può però offrire informazioni oneste alle persone che ne hanno bisogno — in tutte le lingue di chi vive in Portogallo."
        ],
        disclosure: "MoldCheck.pt è un'iniziativa del FAIRBANK Group, la società che gestisce InspectOS — piattaforma di ispezione immobiliare indipendente in Portogallo. Non vendiamo trattamenti contro l'umidità. Non riceviamo commissioni da aziende di risanamento. Quando raccomandiamo un'ispezione o un'analisi di laboratorio, è perché riteniamo che ne abbiate bisogno — non perché guadagniamo dal trattamento che ne consegue.",
        sources: [
            {
                label: "Eurostat EU-SILC, Housing conditions data (2023)"
            },
            {
                label: "INE, Censos 2021 — Caracterização do parque habitacional"
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
}),
"[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        seoTitle: "Guia Completo: Avaliar o Risco de Bolor em Casa — MoldCheck.pt",
        seoDescription: "Guia de inspecção divisão a divisão para avaliar o risco de bolor em casa. Checklist de 20 pontos, tabela localização → causa, e quando pedir ajuda profissional.",
        focusKeyword: "avaliar risco bolor casa",
        title: "Guia Completo: Como Avaliar o Risco de Bolor em Casa, Divisão a Divisão",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "A maioria das pessoas descobre que tem bolor quando já é tarde demais — quando a mancha é grande, quando os sintomas de saúde já estão instalados, ou quando um técnico de tratamento lhes diz que o problema é grave e caro de resolver.",
            "Este guia existe para que isso não aconteça. Para que possa fazer uma avaliação sistemática da sua casa antes de precisar de ajuda externa — e para que, se precisar, chegue a essa conversa com informação suficiente para fazer as perguntas certas.",
            "## O que este guia cobre",
            "Este guia cobre quatro áreas principais: os sinais de alerta que a maioria das pessoas ignora; uma inspecção divisão a divisão com os pontos críticos de cada espaço; uma checklist de 20 pontos para documentar o que encontrou; e uma tabela de localização → causa provável para interpretar o que viu.",
            "Não é um substituto para uma inspecção profissional com equipamento de medição. É o que deve fazer antes — e o que lhe permite perceber se precisa de uma.",
            "## Sinais de alerta que a maioria das pessoas ignora",
            "O bolor visível é o sinal mais óbvio, mas raramente é o primeiro. Antes de aparecer, há outros indicadores que merecem atenção.",
            "Cheiro a mofo sem fonte visível. Um cheiro persistente a húmido ou a terra, especialmente em quartos fechados ou após períodos de chuva, é frequentemente o primeiro sinal de bolor oculto. O bolor produz compostos orgânicos voláteis (COVs) que têm cheiro característico mesmo quando a colónia ainda não é visível.",
            "Condensação recorrente nas janelas. Gotas de água no interior dos vidros, especialmente de manhã, indicam que a humidade relativa do ar interior está alta. Isso não causa bolor directamente, mas cria as condições para ele.",
            "Manchas de humidade nas paredes ou tectos. Manchas amareladas, acastanhadas ou com contornos irregulares indicam que a água está a penetrar ou a acumular-se. O bolor segue-se tipicamente em semanas a meses.",
            "Tinta a descascar ou a emborcar. A tinta perde aderência quando a parede por baixo está húmida. É um sinal de humidade activa, não apenas de má qualidade da tinta.",
            "Sintomas de saúde que melhoram fora de casa. Tosse persistente, congestão nasal, olhos irritados, ou fadiga que melhora quando passa tempo fora de casa são sinais que merecem investigação séria.",
            "## Inspecção divisão a divisão",
            "Casa de banho: A casa de banho é o espaço de maior risco em qualquer habitação. Humidade elevada, superfícies frias, e ventilação frequentemente inadequada criam condições quase ideais para o bolor. Verificar: juntas de silicone entre a banheira/base de duche e as paredes; canto superior das paredes, especialmente nos cantos opostos à janela ou extractor; parte inferior das paredes atrás da sanita e do lavatório; tecto, especialmente se não houver extractor ou se o extractor não funcionar correctamente; parte inferior de tapetes de casa de banho.",
            "Cozinha: A cozinha produz grandes quantidades de vapor — cozinhar, lavar louça, e o próprio frigorífico contribuem para a humidade do ar. Verificar: parede atrás do frigorífico; parte inferior dos armários sob o lava-loiça; juntas de silicone entre a bancada e a parede; tecto acima do fogão; interior dos armários de canto.",
            "Quartos: Os quartos são frequentemente subestimados como fonte de bolor, mas são espaços onde se passa muito tempo e onde o bolor tem impacto directo na saúde. Verificar: parede exterior, especialmente nos cantos; parede atrás dos roupeiros encostados a paredes exteriores; janelas e peitoris; parte inferior das paredes em pisos térreos ou caves. Acção preventiva: afastar os roupeiros das paredes exteriores pelo menos 5 cm.",
            "Sala de estar: Verificar paredes exteriores orientadas a norte ou noroeste; zona em torno de pontes térmicas visíveis — pilares de betão, vigas, e molduras de janelas metálicas; rodapés e parte inferior das paredes em pisos térreos; atrás de móveis encostados a paredes exteriores.",
            "Cave e garagem: Verificar paredes e pavimento em contacto com o solo; sinais de infiltração de água — manchas de calcário (eflorescências brancas) nas paredes; cheiro a mofo; estado do isolamento de tubagens.",
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
            "Uma inspecção com medidor de humidade e câmara termográfica permite identificar zonas húmidas ocultas, pontes térmicas, e a extensão real do problema — sem o conflito de interesse de quem vende o tratamento que se segue.",
            "## Uma nota sobre o que este guia não substitui",
            "Este guia foi concebido para dar-lhe informação suficiente para fazer uma avaliação inicial informada. Não substitui uma inspecção profissional com equipamento de medição, nem aconselhamento médico se tiver sintomas de saúde."
        ],
        disclosure: "Pieter Paul Castelein trabalha no FAIRBANK Group, a empresa por detrás da InspectOS — plataforma de inspeção independente de imóveis em Portugal. O MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Posso fazer esta inspecção eu próprio ou preciso de um profissional?",
                answer: "Pode e deve fazer uma inspecção visual inicial você próprio. Este guia dá-lhe as ferramentas para isso. Para problemas acima de 1 m², bolor recorrente, ou sintomas de saúde, uma inspecção profissional com equipamento de medição é recomendada."
            },
            {
                question: "O que faço se encontrar bolor durante a inspecção?",
                answer: "Documente com fotografias e notas sobre a localização e extensão. Não limpe imediatamente — a localização e o padrão do bolor são informação diagnóstica importante."
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
        seoTitle: "Complete Guide: Assessing Mold Risk at Home, Room by Room — MoldCheck.pt",
        seoDescription: "A room-by-room inspection guide for assessing mold risk at home. 20-point checklist, location-to-cause table, and when to call a professional.",
        focusKeyword: "assess mold risk home",
        title: "Complete Guide: How to Assess Mold Risk at Home, Room by Room",
        byline: "By Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Most people discover they have mold when it is already too late — when the patch is large, when health symptoms are already established, or when a treatment technician tells them the problem is serious and expensive to fix.",
            "This guide exists so that does not happen. So you can make a systematic assessment of your home before needing outside help — and so that, if you do need it, you arrive at that conversation with enough information to ask the right questions.",
            "## What this guide covers",
            "This guide covers four main areas: the warning signs most people ignore; a room-by-room inspection with the critical points for each space; a 20-point checklist to document what you found; and a location-to-probable-cause table to interpret what you saw.",
            "It is not a substitute for a professional inspection with measurement equipment. It is what you should do first — and what allows you to understand whether you need one.",
            "## Warning signs most people ignore",
            "Visible mold is the most obvious sign, but it is rarely the first. Before it appears, there are other indicators worth attention.",
            "Musty smell without a visible source. A persistent damp or earthy smell, especially in closed rooms or after periods of rain, is often the first sign of hidden mold. Mold produces volatile organic compounds (VOCs) that have a characteristic smell even when the colony is not yet visible.",
            "Recurring condensation on windows. Water droplets on the inside of glass, especially in the morning, indicate that the indoor relative humidity is high. This does not directly cause mold, but it creates the conditions for it.",
            "Damp stains on walls or ceilings. Yellowish, brownish, or irregularly outlined stains indicate that water is penetrating or accumulating. Mold typically follows within weeks to months.",
            "Peeling or bubbling paint. Paint loses adhesion when the wall beneath is damp. It is a sign of active moisture, not just poor paint quality.",
            "Health symptoms that improve away from home. Persistent cough, nasal congestion, irritated eyes, or fatigue that improves when you spend time away from home are signs that deserve serious investigation.",
            "## Room-by-room inspection",
            "Bathroom: The bathroom is the highest-risk space in any home. High humidity, cold surfaces, and frequently inadequate ventilation create near-ideal conditions for mold. Check: silicone joints between the bath/shower base and walls; upper corners of walls, especially those opposite the window or extractor; lower walls behind the toilet and basin; ceiling, especially if there is no extractor or if it does not work correctly; underside of bathroom mats.",
            "Kitchen: The kitchen produces large amounts of steam — cooking, washing dishes, and the refrigerator itself all contribute to indoor humidity. Check: wall behind the refrigerator; underside of cabinets under the sink; silicone joints between the worktop and wall; ceiling above the hob; interior of corner cabinets.",
            "Bedrooms: Bedrooms are often underestimated as a source of mold, but they are spaces where you spend a lot of time and where mold has a direct health impact. Check: exterior wall, especially in corners; wall behind wardrobes pushed against exterior walls; windows and sills; lower walls in ground-floor or basement units. Preventive action: move wardrobes at least 5 cm from exterior walls.",
            "Living room: Check exterior walls facing north or northwest; areas around visible thermal bridges — concrete pillars, beams, and metal window frames; skirting boards and lower walls on ground floors; behind furniture pushed against exterior walls.",
            "Basement and garage: Check walls and floors in contact with the ground; signs of water infiltration — white mineral deposits (efflorescence) on walls; musty smell; condition of cold-water pipe insulation.",
            "## 20-point checklist",
            "Exterior and structure: (1) Are there signs of water infiltration in the roof or gutters? (2) Do exterior walls have cracks or visible damp patches? (3) Does the ground around the building drain water away from the foundations? (4) Do windows have adequate sealing?",
            "Bathroom: (5) Are silicone joints intact and without darkening? (6) Does the extractor work and vent to the outside? (7) Is there visible mold on the ceiling or upper corners? (8) Is the shower or bath base free of cracks or open joints?",
            "Kitchen: (9) Are there signs of leaks under the sink? (10) Is the wall behind the refrigerator dry and stain-free? (11) Does the extractor vent to the outside? (12) Do corner cabinets have adequate air circulation?",
            "Bedrooms and living room: (13) Is there recurring condensation on windows in the morning? (14) Are the corners of exterior walls dry and stain-free? (15) Are wardrobes moved away from exterior walls? (16) Is there a musty smell in any room?",
            "Basement, garage and technical spaces: (17) Is there efflorescence on basement or garage walls? (18) Is the basement floor dry after heavy rain? (19) Do cold-water pipes show signs of condensation? (20) Is there visible mold on any surface in the basement or garage?",
            "## Location-to-probable-cause table",
            "Upper corner of exterior wall — Thermal bridge from insufficient insulation. The corner loses heat faster and reaches the dew point first.",
            "Wall behind wardrobe — Lack of air circulation combined with cold wall. Solution: move the wardrobe and improve room ventilation.",
            "Bathroom ceiling — Insufficient ventilation. Water vapour rises and condenses on the ceiling.",
            "Base of walls (ground floor) — Rising damp by capillarity. Common in buildings without a horizontal damp-proof course.",
            "Area around metal window frames — Thermal bridge through the frame. Metal conducts cold from outside to inside.",
            "Interior wall (not exterior) — Water leak from plumbing. Check pipes in the wall or the floor above.",
            "Ceiling with irregular stain — Infiltration through the roof or from the unit above.",
            "Entire surface of an exterior wall — Generalised condensation damp from insufficient ventilation.",
            "## When to call a professional",
            "This visual inspection has limits. Call a professional when: mold covers an area larger than 1 m²; mold recurs in the same location after cleaning; there are persistent health symptoms that improve away from home; the source of moisture is unclear after the visual inspection; hidden mold is suspected (smell without visible source); the property is rented and documentation is needed.",
            "An inspection with a moisture meter and thermal imaging camera can identify hidden damp zones, thermal bridges, and the real extent of the problem — without the conflict of interest of someone who sells the treatment that follows.",
            "## A note on what this guide does not replace",
            "This guide is designed to give you enough information to make an informed initial assessment. It does not replace a professional inspection with measurement equipment, or medical advice if you have health symptoms."
        ],
        disclosure: "Pieter Paul Castelein works at FAIRBANK Group, the company behind InspectOS — an independent property inspection platform in Portugal. MoldCheck.pt is a FAIRBANK Group initiative. We do not sell damp treatments. We do not take commissions from remediation companies.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Can I do this inspection myself or do I need a professional?",
                answer: "You can and should do an initial visual inspection yourself. This guide gives you the tools for that. For problems larger than 1 m², recurring mold, or health symptoms, a professional inspection with measurement equipment is recommended."
            },
            {
                question: "What do I do if I find mold during the inspection?",
                answer: "Document with photographs and notes on location and extent. Do not clean immediately — the location and pattern of the mold is important diagnostic information."
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
        seoTitle: "Guide Complet : Évaluer le Risque de Moisissures chez Soi, Pièce par Pièce — MoldCheck.pt",
        seoDescription: "Guide d'inspection pièce par pièce pour évaluer le risque de moisissures. Checklist de 20 points, tableau localisation → cause, et quand appeler un professionnel.",
        focusKeyword: "évaluer risque moisissures logement",
        title: "Guide Complet : Comment Évaluer le Risque de Moisissures chez Soi, Pièce par Pièce",
        byline: "Par Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La plupart des gens découvrent qu'ils ont des moisissures quand il est déjà trop tard — quand la tache est grande, quand les symptômes de santé sont déjà installés, ou quand un technicien de traitement leur dit que le problème est grave et coûteux à résoudre.",
            "Ce guide existe pour que cela n'arrive pas. Pour que vous puissiez faire une évaluation systématique de votre logement avant d'avoir besoin d'aide extérieure — et pour que, si vous en avez besoin, vous arriviez à cette conversation avec suffisamment d'informations pour poser les bonnes questions.",
            "## Ce que ce guide couvre",
            "Ce guide couvre quatre domaines principaux : les signaux d'alerte que la plupart des gens ignorent ; une inspection pièce par pièce avec les points critiques de chaque espace ; une checklist de 20 points pour documenter ce que vous avez trouvé ; et un tableau localisation → cause probable pour interpréter ce que vous avez vu.",
            "Ce n'est pas un substitut à une inspection professionnelle avec équipement de mesure. C'est ce que vous devez faire en premier — et ce qui vous permet de comprendre si vous en avez besoin.",
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
            "Cave et garage : Vérifier les murs et sols en contact avec le sol ; signes d'infiltration d'eau — dépôts minéraux blancs (efflorescences) sur les murs ; odeur de moisi ; état de l'isolation des tuyaux d'eau froide.",
            "## Checklist de 20 points",
            "Extérieur et structure : (1) Y a-t-il des signes d'infiltration d'eau dans la toiture ou les gouttières ? (2) Les murs extérieurs ont-ils des fissures ou des zones d'humidité visibles ? (3) Le terrain autour du bâtiment draine-t-il l'eau loin des fondations ? (4) Les fenêtres ont-elles une étanchéité adéquate ?",
            "Salle de bain : (5) Les joints en silicone sont-ils intacts et sans noircissement ? (6) L'extracteur fonctionne-t-il et évacue-t-il vers l'extérieur ? (7) Y a-t-il des moisissures visibles au plafond ou dans les coins supérieurs ? (8) La base de la douche ou de la baignoire est-elle sans fissures ni joints ouverts ?",
            "Cuisine : (9) Y a-t-il des signes de fuite sous l'évier ? (10) Le mur derrière le réfrigérateur est-il sec et sans taches ? (11) L'extracteur évacue-t-il vers l'extérieur ? (12) Les placards d'angle ont-ils une circulation d'air adéquate ?",
            "Chambres et salon : (13) Y a-t-il une condensation récurrente sur les fenêtres le matin ? (14) Les coins des murs extérieurs sont-ils secs et sans taches ? (15) Les armoires sont-elles éloignées des murs extérieurs ? (16) Y a-t-il une odeur de moisi dans une pièce ?",
            "Cave, garage et espaces techniques : (17) Y a-t-il des efflorescences sur les murs de la cave ou du garage ? (18) Le sol de la cave est-il sec après de fortes pluies ? (19) Les tuyaux d'eau froide montrent-ils des signes de condensation ? (20) Y a-t-il des moisissures visibles sur une surface de la cave ou du garage ?",
            "## Tableau : localisation → cause probable",
            "Coin supérieur d'un mur extérieur — Pont thermique par isolation insuffisante. Le coin perd de la chaleur plus rapidement et atteint le point de rosée en premier.",
            "Mur derrière une armoire — Manque de circulation d'air combiné à un mur froid. Solution : éloigner l'armoire et améliorer la ventilation de la pièce.",
            "Plafond de la salle de bain — Ventilation insuffisante. La vapeur d'eau monte et se condense au plafond.",
            "Base des murs (rez-de-chaussée) — Humidité ascensionnelle par capillarité. Fréquent dans les bâtiments sans barrière d'imperméabilisation horizontale.",
            "Zone autour des fenêtres métalliques — Pont thermique par la menuiserie. Le métal conduit le froid de l'extérieur vers l'intérieur.",
            "Mur intérieur (non extérieur) — Fuite d'eau de plomberie. Vérifier les tuyaux dans le mur ou le sol au-dessus.",
            "Plafond avec tache irrégulière — Infiltration par la toiture ou depuis le logement au-dessus.",
            "Toute la surface d'un mur extérieur — Humidité de condensation généralisée par ventilation insuffisante.",
            "## Quand appeler un professionnel",
            "Cette inspection visuelle a des limites. Appeler un professionnel quand : les moisissures couvrent une surface supérieure à 1 m² ; les moisissures réapparaissent au même endroit après nettoyage ; il y a des symptômes de santé persistants qui s'améliorent hors du logement ; l'origine de l'humidité n'est pas claire après l'inspection visuelle ; des moisissures cachées sont suspectées ; le bien est loué et une documentation est nécessaire.",
            "Une inspection avec un humidimètre et une caméra thermique permet d'identifier les zones humides cachées, les ponts thermiques, et l'étendue réelle du problème — sans le conflit d'intérêts de celui qui vend le traitement qui suit.",
            "## Une note sur ce que ce guide ne remplace pas",
            "Ce guide est conçu pour vous donner suffisamment d'informations pour faire une évaluation initiale éclairée. Il ne remplace pas une inspection professionnelle avec équipement de mesure, ni un avis médical si vous avez des symptômes de santé."
        ],
        disclosure: "Pieter Paul Castelein travaille au sein du FAIRBANK Group, la société à l'origine d'InspectOS — plateforme d'inspection indépendante de biens immobiliers au Portugal. MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Puis-je faire cette inspection moi-même ou ai-je besoin d'un professionnel ?",
                answer: "Vous pouvez et devez faire une inspection visuelle initiale vous-même. Ce guide vous en donne les outils. Pour les problèmes de plus de 1 m², les moisissures récurrentes, ou les symptômes de santé, une inspection professionnelle avec équipement de mesure est recommandée."
            },
            {
                question: "Que faire si je trouve des moisissures pendant l'inspection ?",
                answer: "Documentez avec des photos et des notes sur la localisation et l'étendue. Ne nettoyez pas immédiatement — la localisation et le motif des moisissures sont des informations diagnostiques importantes."
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
        seoTitle: "Vollständiger Leitfaden: Schimmelrisiko in der Wohnung selbst beurteilen — MoldCheck.pt",
        seoDescription: "Zimmer-für-Zimmer-Inspektionsleitfaden zur Beurteilung des Schimmelrisikos. 20-Punkte-Checkliste, Standort-Ursache-Tabelle und wann ein Fachmann gerufen werden sollte.",
        focusKeyword: "Schimmelrisiko Wohnung beurteilen",
        title: "Vollständiger Leitfaden: Wie Sie das Schimmelrisiko in Ihrer Wohnung selbst beurteilen, Zimmer für Zimmer",
        byline: "Von Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "Die meisten Menschen entdecken Schimmel erst, wenn es bereits zu spät ist — wenn der Fleck groß ist, wenn Gesundheitssymptome bereits aufgetreten sind oder wenn ein Behandlungstechniker ihnen sagt, dass das Problem ernst und teuer zu beheben ist.",
            "Dieser Leitfaden soll verhindern, dass das passiert. Damit Sie eine systematische Beurteilung Ihrer Wohnung vornehmen können, bevor Sie externe Hilfe benötigen — und damit Sie, falls Sie diese benötigen, mit genügend Informationen in dieses Gespräch gehen, um die richtigen Fragen zu stellen.",
            "## Was dieser Leitfaden abdeckt",
            "Dieser Leitfaden behandelt vier Hauptbereiche: die Warnsignale, die die meisten Menschen ignorieren; eine Zimmer-für-Zimmer-Inspektion mit den kritischen Punkten jedes Raums; eine 20-Punkte-Checkliste zur Dokumentation Ihrer Befunde; und eine Standort-Ursache-Tabelle zur Interpretation des Gesehenen.",
            "Er ist kein Ersatz für eine professionelle Inspektion mit Messgeräten. Er ist das, was Sie zuerst tun sollten — und was Ihnen ermöglicht zu verstehen, ob Sie eine solche benötigen.",
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
            "Wohnzimmer: Außenwände nach Norden oder Nordwesten prüfen; Bereiche um sichtbare Wärmebrücken — Betonpfeiler, Balken und Metallfensterrahmen; Sockelleisten und untere Wandbereiche im Erdgeschoss; hinter Möbeln, die an Außenwände gestellt sind.",
            "Keller und Garage: Wände und Böden in Kontakt mit dem Erdreich prüfen; Zeichen von Wasserinfiltration — weiße Mineralablagerungen (Ausblühungen) an Wänden; muffiger Geruch; Zustand der Dämmung von Kaltwasserleitungen.",
            "## 20-Punkte-Checkliste",
            "Außenbereich und Struktur: (1) Gibt es Zeichen von Wasserinfiltration im Dach oder in den Dachrinnen? (2) Haben Außenwände Risse oder sichtbare Feuchtigkeitsflecken? (3) Entwässert das Gelände um das Gebäude das Wasser von den Fundamenten weg? (4) Haben Fenster eine ausreichende Abdichtung?",
            "Badezimmer: (5) Sind Silikonfugen intakt und ohne Verfärbung? (6) Funktioniert der Lüfter und entlüftet er nach außen? (7) Gibt es sichtbaren Schimmel an der Decke oder in den oberen Ecken? (8) Ist die Dusch- oder Badewannenbasis frei von Rissen oder offenen Fugen?",
            "Küche: (9) Gibt es Zeichen von Lecks unter der Spüle? (10) Ist die Wand hinter dem Kühlschrank trocken und fleckenfrei? (11) Entlüftet der Abzug nach außen? (12) Haben Eckschränke ausreichende Luftzirkulation?",
            "Schlafzimmer und Wohnzimmer: (13) Gibt es morgens wiederkehrende Kondensation an Fenstern? (14) Sind die Ecken der Außenwände trocken und fleckenfrei? (15) Sind Schränke von Außenwänden abgerückt? (16) Gibt es in einem Zimmer einen muffigen Geruch?",
            "Keller, Garage und technische Räume: (17) Gibt es Ausblühungen an Keller- oder Garagenwänden? (18) Ist der Kellerboden nach starkem Regen trocken? (19) Zeigen Kaltwasserleitungen Kondensationszeichen? (20) Gibt es sichtbaren Schimmel auf einer Oberfläche im Keller oder in der Garage?",
            "## Standort-Ursache-Tabelle",
            "Obere Ecke einer Außenwand — Wärmebrücke durch unzureichende Dämmung. Die Ecke verliert Wärme schneller und erreicht den Taupunkt zuerst.",
            "Wand hinter einem Schrank — Mangelnde Luftzirkulation kombiniert mit kalter Wand. Lösung: Schrank abrücken und Raumbelüftung verbessern.",
            "Badezimmerdecke — Unzureichende Belüftung. Wasserdampf steigt auf und kondensiert an der Decke.",
            "Wandfuß (Erdgeschoss) — Aufsteigende Feuchtigkeit durch Kapillarwirkung. Häufig in Gebäuden ohne horizontale Feuchtigkeitssperre.",
            "Bereich um Metallfensterrahmen — Wärmebrücke durch den Rahmen. Metall leitet Kälte von außen nach innen.",
            "Innenwand (nicht Außenwand) — Wasserleck aus der Rohrleitung. Rohre in der Wand oder im Boden darüber prüfen.",
            "Decke mit unregelmäßigem Fleck — Infiltration durch das Dach oder aus der Wohnung darüber.",
            "Gesamte Oberfläche einer Außenwand — Verbreitete Kondensationsfeuchtigkeit durch unzureichende Belüftung.",
            "## Wann ein Fachmann gerufen werden sollte",
            "Diese Sichtinspektion hat Grenzen. Einen Fachmann rufen, wenn: Schimmel eine Fläche von mehr als 1 m² bedeckt; Schimmel nach der Reinigung an derselben Stelle wiederkehrt; anhaltende Gesundheitssymptome vorhanden sind, die sich außerhalb der Wohnung verbessern; die Feuchtigkeitsquelle nach der Sichtinspektion unklar ist; versteckter Schimmel vermutet wird; die Immobilie vermietet ist und eine Dokumentation benötigt wird.",
            "Eine Inspektion mit einem Feuchtigkeitsmessgerät und einer Wärmebildkamera kann versteckte Feuchtigkeitszonen, Wärmebrücken und das tatsächliche Ausmaß des Problems identifizieren — ohne den Interessenkonflikt desjenigen, der die anschließende Behandlung verkauft.",
            "## Ein Hinweis darauf, was dieser Leitfaden nicht ersetzt",
            "Dieser Leitfaden soll Ihnen genügend Informationen geben, um eine fundierte erste Beurteilung vorzunehmen. Er ersetzt keine professionelle Inspektion mit Messgeräten und keinen ärztlichen Rat bei Gesundheitssymptomen."
        ],
        disclosure: "Pieter Paul Castelein arbeitet bei der FAIRBANK Group, dem Unternehmen hinter InspectOS — einer unabhängigen Immobilieninspektionsplattform in Portugal. MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Kann ich diese Inspektion selbst durchführen oder brauche ich einen Fachmann?",
                answer: "Sie können und sollten eine erste Sichtinspektion selbst durchführen. Dieser Leitfaden gibt Ihnen die Werkzeuge dafür. Bei Problemen über 1 m², wiederkehrendem Schimmel oder Gesundheitssymptomen wird eine professionelle Inspektion mit Messgeräten empfohlen."
            },
            {
                question: "Was tue ich, wenn ich bei der Inspektion Schimmel finde?",
                answer: "Dokumentieren Sie mit Fotos und Notizen zu Standort und Ausmaß. Reinigen Sie nicht sofort — Standort und Muster des Schimmels sind wichtige diagnostische Informationen."
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
        seoTitle: "Volledige Gids: Schimmelrisico in Uw Woning Beoordelen, Kamer voor Kamer — MoldCheck.pt",
        seoDescription: "Kamer-voor-kamer inspectiegids voor het beoordelen van schimmelrisico. 20-punten checklist, locatie-oorzaak tabel en wanneer een professional te bellen.",
        focusKeyword: "schimmelrisico woning beoordelen",
        title: "Volledige Gids: Hoe U het Schimmelrisico in Uw Woning Beoordeelt, Kamer voor Kamer",
        byline: "Door Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "De meeste mensen ontdekken dat ze schimmel hebben als het al te laat is — als de vlek groot is, als gezondheidsklachten al aanwezig zijn, of als een behandelingstechnicus hen vertelt dat het probleem ernstig en duur te verhelpen is.",
            "Deze gids bestaat zodat dat niet gebeurt. Zodat u een systematische beoordeling van uw woning kunt maken voordat u externe hulp nodig heeft — en zodat u, als u die nodig heeft, dat gesprek ingaat met voldoende informatie om de juiste vragen te stellen.",
            "## Wat deze gids behandelt",
            "Deze gids behandelt vier hoofdgebieden: de waarschuwingssignalen die de meeste mensen negeren; een kamer-voor-kamer inspectie met de kritieke punten van elke ruimte; een 20-punten checklist om te documenteren wat u vond; en een locatie-naar-waarschijnlijke-oorzaak tabel om te interpreteren wat u zag.",
            "Het is geen vervanging voor een professionele inspectie met meetapparatuur. Het is wat u eerst moet doen — en wat u in staat stelt te begrijpen of u er een nodig heeft.",
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
            "Woonkamer: Buitenmuren op het noorden of noordwesten controleren; gebieden rond zichtbare koudebruggen — betonnen pilaren, balken en metalen raamkozijnen; plinten en onderste muurgedeelten op de begane grond; achter meubels die tegen buitenmuren staan.",
            "Kelder en garage: Muren en vloeren in contact met de grond controleren; tekenen van waterinfiltratie — witte mineraalafzettingen (uitbloeiingen) op muren; muffe geur; staat van isolatie van koudwaterleidingen.",
            "## 20-punten checklist",
            "Buitenkant en structuur: (1) Zijn er tekenen van waterinfiltratie in het dak of de dakgoten? (2) Hebben buitenmuren scheuren of zichtbare vochtplekken? (3) Draint het terrein rondom het gebouw water weg van de fundering? (4) Hebben ramen adequate afdichting?",
            "Badkamer: (5) Zijn siliconenvoegen intact en zonder verkleuring? (6) Werkt de ventilator en ventileert hij naar buiten? (7) Is er zichtbare schimmel op het plafond of in de bovenste hoeken? (8) Is de douche- of badkuipbodem vrij van scheuren of open voegen?",
            "Keuken: (9) Zijn er tekenen van lekkages onder de gootsteen? (10) Is de muur achter de koelkast droog en vlekvrij? (11) Ventileert de afzuigkap naar buiten? (12) Hebben hoekkasten voldoende luchtcirculatie?",
            "Slaapkamers en woonkamer: (13) Is er 's ochtends terugkerende condensatie op ramen? (14) Zijn de hoeken van buitenmuren droog en vlekvrij? (15) Staan kasten weg van buitenmuren? (16) Is er een muffe geur in een kamer?",
            "Kelder, garage en technische ruimten: (17) Zijn er uitbloeiingen op kelder- of garagemuren? (18) Is de keldervloer droog na hevige regen? (19) Tonen koudwaterleidingen tekenen van condensatie? (20) Is er zichtbare schimmel op een oppervlak in de kelder of garage?",
            "## Locatie-naar-oorzaak tabel",
            "Bovenste hoek van een buitenmuur — Koudebrug door onvoldoende isolatie. De hoek verliest sneller warmte en bereikt het dauwpunt als eerste.",
            "Muur achter een kast — Gebrek aan luchtcirculatie gecombineerd met koude muur. Oplossing: kast verplaatsen en ventilatie van de kamer verbeteren.",
            "Badkamerplafond — Onvoldoende ventilatie. Waterdamp stijgt op en condenseert op het plafond.",
            "Voet van muren (begane grond) — Opstijgend vocht door capillaire werking. Veel voorkomend in gebouwen zonder horizontale vochtbarrière.",
            "Gebied rond metalen raamkozijnen — Koudebrug door het kozijn. Metaal geleidt kou van buiten naar binnen.",
            "Binnenmuur (niet buitenmuur) — Waterlek uit leidingwerk. Leidingen in de muur of de vloer erboven controleren.",
            "Plafond met onregelmatige vlek — Infiltratie door het dak of vanuit de woning erboven.",
            "Geheel oppervlak van een buitenmuur — Gegeneraliseerd condensatievocht door onvoldoende ventilatie.",
            "## Wanneer een professional te bellen",
            "Deze visuele inspectie heeft beperkingen. Een professional bellen wanneer: schimmel een oppervlak van meer dan 1 m² bedekt; schimmel na reiniging op dezelfde plek terugkeert; er aanhoudende gezondheidsklachten zijn die buiten de woning verbeteren; de vochtbron na de visuele inspectie onduidelijk is; verborgen schimmel vermoed wordt; de woning verhuurd is en documentatie nodig is.",
            "Een inspectie met een vochtmeter en warmtebeeldcamera kan verborgen vochtgebieden, koudebruggen en de werkelijke omvang van het probleem identificeren — zonder het belangenconflict van iemand die de behandeling verkoopt die volgt.",
            "## Een noot over wat deze gids niet vervangt",
            "Deze gids is ontworpen om u voldoende informatie te geven voor een geïnformeerde eerste beoordeling. Het vervangt geen professionele inspectie met meetapparatuur, noch medisch advies als u gezondheidsklachten heeft."
        ],
        disclosure: "Pieter Paul Castelein werkt bij FAIRBANK Group, het bedrijf achter InspectOS — een onafhankelijk vastgoedinspectieplatform in Portugal. MoldCheck.pt is een initiatief van FAIRBANK Group. Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsondernemingen.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Kan ik deze inspectie zelf doen of heb ik een professional nodig?",
                answer: "U kunt en moet een eerste visuele inspectie zelf uitvoeren. Deze gids geeft u de tools daarvoor. Voor problemen groter dan 1 m², terugkerende schimmel of gezondheidsklachten wordt een professionele inspectie met meetapparatuur aanbevolen."
            },
            {
                question: "Wat doe ik als ik schimmel vind tijdens de inspectie?",
                answer: "Documenteer met foto's en notities over locatie en omvang. Reinig niet onmiddellijk — de locatie en het patroon van de schimmel zijn belangrijke diagnostische informatie."
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
        seoTitle: "Guida Completa: Valutare il Rischio di Muffa in Casa, Stanza per Stanza — MoldCheck.pt",
        seoDescription: "Guida di ispezione stanza per stanza per valutare il rischio di muffa in casa. Checklist di 20 punti, tabella posizione-causa e quando chiamare un professionista.",
        focusKeyword: "valutare rischio muffa casa",
        title: "Guida Completa: Come Valutare il Rischio di Muffa in Casa, Stanza per Stanza",
        byline: "Di Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La maggior parte delle persone scopre di avere la muffa quando è già troppo tardi — quando la macchia è grande, quando i sintomi di salute sono già presenti, o quando un tecnico di trattamento dice loro che il problema è grave e costoso da risolvere.",
            "Questa guida esiste affinché ciò non accada. Affinché possiate fare una valutazione sistematica della vostra casa prima di aver bisogno di aiuto esterno — e affinché, se ne avete bisogno, arriviate a quella conversazione con informazioni sufficienti per fare le domande giuste.",
            "## Cosa copre questa guida",
            "Questa guida copre quattro aree principali: i segnali di allarme che la maggior parte delle persone ignora; un'ispezione stanza per stanza con i punti critici di ogni spazio; una checklist di 20 punti per documentare ciò che avete trovato; e una tabella posizione-causa probabile per interpretare ciò che avete visto.",
            "Non è un sostituto per un'ispezione professionale con attrezzatura di misurazione. È ciò che dovreste fare prima — e ciò che vi permette di capire se ne avete bisogno.",
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
            "Soggiorno: Controllare le pareti esterne orientate a nord o nord-ovest; zone intorno ai ponti termici visibili — pilastri in cemento, travi e telai di finestre in metallo; battiscopa e parte inferiore delle pareti ai piani terra; dietro i mobili appoggiati alle pareti esterne.",
            "Cantina e garage: Controllare pareti e pavimenti a contatto con il suolo; segni di infiltrazione d'acqua — depositi minerali bianchi (efflorescenze) sulle pareti; odore di muffa; stato dell'isolamento delle tubature dell'acqua fredda.",
            "## Checklist di 20 punti",
            "Esterno e struttura: (1) Ci sono segni di infiltrazione d'acqua nel tetto o nelle grondaie? (2) Le pareti esterne hanno crepe o zone di umidità visibili? (3) Il terreno intorno all'edificio drena l'acqua lontano dalle fondamenta? (4) Le finestre hanno una sigillatura adeguata?",
            "Bagno: (5) I giunti in silicone sono intatti e senza annerimento? (6) L'estrattore funziona e ventila verso l'esterno? (7) C'è muffa visibile sul soffitto o negli angoli superiori? (8) La base della doccia o della vasca è priva di crepe o giunti aperti?",
            "Cucina: (9) Ci sono segni di perdite sotto il lavello? (10) La parete dietro il frigorifero è asciutta e senza macchie? (11) L'estrattore ventila verso l'esterno? (12) Gli armadi angolari hanno una circolazione d'aria adeguata?",
            "Camere da letto e soggiorno: (13) C'è condensa ricorrente sulle finestre al mattino? (14) Gli angoli delle pareti esterne sono asciutti e senza macchie? (15) Gli armadi sono allontanati dalle pareti esterne? (16) C'è odore di muffa in qualche stanza?",
            "Cantina, garage e spazi tecnici: (17) Ci sono efflorescenze sulle pareti della cantina o del garage? (18) Il pavimento della cantina è asciutto dopo forti piogge? (19) Le tubature dell'acqua fredda mostrano segni di condensa? (20) C'è muffa visibile su qualche superficie nella cantina o nel garage?",
            "## Tabella: posizione → causa probabile",
            "Angolo superiore di una parete esterna — Ponte termico per isolamento insufficiente. L'angolo perde calore più rapidamente e raggiunge il punto di rugiada per primo.",
            "Parete dietro un armadio — Mancanza di circolazione d'aria combinata con parete fredda. Soluzione: allontanare l'armadio e migliorare la ventilazione della stanza.",
            "Soffitto del bagno — Ventilazione insufficiente. Il vapore acqueo sale e condensa sul soffitto.",
            "Base delle pareti (piano terra) — Umidità ascendente per capillarità. Comune negli edifici senza barriera impermeabilizzante orizzontale.",
            "Zona intorno ai telai di finestre in metallo — Ponte termico attraverso il telaio. Il metallo conduce il freddo dall'esterno all'interno.",
            "Parete interna (non esterna) — Perdita d'acqua dall'impianto idraulico. Controllare le tubature nella parete o nel pavimento sopra.",
            "Soffitto con macchia irregolare — Infiltrazione attraverso il tetto o dall'unità sopra.",
            "Intera superficie di una parete esterna — Umidità da condensa generalizzata per ventilazione insufficiente.",
            "## Quando chiamare un professionista",
            "Questa ispezione visiva ha dei limiti. Chiamare un professionista quando: la muffa copre un'area superiore a 1 m²; la muffa si ripresenta nello stesso punto dopo la pulizia; ci sono sintomi di salute persistenti che migliorano fuori casa; la fonte di umidità non è chiara dopo l'ispezione visiva; si sospetta muffa nascosta; l'immobile è in affitto e serve documentazione.",
            "Un'ispezione con un misuratore di umidità e una telecamera termografica può identificare zone umide nascoste, ponti termici e la reale entità del problema — senza il conflitto di interessi di chi vende il trattamento che segue.",
            "## Una nota su ciò che questa guida non sostituisce",
            "Questa guida è progettata per darvi informazioni sufficienti per fare una valutazione iniziale informata. Non sostituisce un'ispezione professionale con attrezzatura di misurazione, né un consiglio medico se avete sintomi di salute."
        ],
        disclosure: "Pieter Paul Castelein lavora presso FAIRBANK Group, l'azienda dietro InspectOS — una piattaforma di ispezione immobiliare indipendente in Portogallo. MoldCheck.pt è un'iniziativa di FAIRBANK Group. Non vendiamo trattamenti per l'umidità. Non riceviamo commissioni da aziende di bonifica.",
        sources: [
            {
                label: "WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)"
            },
            {
                label: "EPA — A Brief Guide to Mold, Moisture, and Your Home (2012)"
            },
            {
                label: "IICRC S520 Standard for Professional Mold Remediation (2015)"
            },
            {
                label: "INE Censos 2021 — Building Stock Condition Data"
            }
        ],
        faq: [
            {
                question: "Posso fare questa ispezione da solo o ho bisogno di un professionista?",
                answer: "Potete e dovreste fare un'ispezione visiva iniziale da soli. Questa guida vi fornisce gli strumenti per farlo. Per problemi superiori a 1 m², muffa ricorrente o sintomi di salute, è raccomandata un'ispezione professionale con attrezzatura di misurazione."
            },
            {
                question: "Cosa faccio se trovo muffa durante l'ispezione?",
                answer: "Documentate con fotografie e note su posizione ed estensione. Non pulite immediatamente — la posizione e il pattern della muffa sono informazioni diagnostiche importanti."
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
        seoTitle: "Guía Completa: Evaluar el Riesgo de Moho en Casa, Habitación por Habitación — MoldCheck.pt",
        seoDescription: "Guía de inspección habitación por habitación para evaluar el riesgo de moho en casa. Lista de verificación de 20 puntos, tabla ubicación-causa y cuándo llamar a un profesional.",
        focusKeyword: "evaluar riesgo moho vivienda",
        title: "Guía Completa: Cómo Evaluar el Riesgo de Moho en Casa, Habitación por Habitación",
        byline: "Por Pieter Paul Castelein, FAIRBANK Group",
        body: [
            "La mayoría de las personas descubren que tienen moho cuando ya es demasiado tarde — cuando la mancha es grande, cuando los síntomas de salud ya están presentes, o cuando un técnico de tratamiento les dice que el problema es grave y costoso de resolver.",
            "Esta guía existe para que eso no ocurra. Para que pueda hacer una evaluación sistemática de su vivienda antes de necesitar ayuda externa — y para que, si la necesita, llegue a esa conversación con información suficiente para hacer las preguntas correctas.",
            "## Qué cubre esta guía",
            "Esta guía cubre cuatro áreas principales: las señales de advertencia que la mayoría de las personas ignora; una inspección habitación por habitación con los puntos críticos de cada espacio; una lista de verificación de 20 puntos para documentar lo que encontró; y una tabla ubicación-causa probable para interpretar lo que vio.",
            "No es un sustituto de una inspección profesional con equipos de medición. Es lo que debe hacer primero — y lo que le permite entender si necesita una.",
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
            "Salón: Comprobar paredes exteriores orientadas al norte o noroeste; zonas alrededor de puentes térmicos visibles — pilares de hormigón, vigas y marcos de ventanas metálicos; rodapiés y parte inferior de las paredes en plantas bajas; detrás de muebles apoyados en paredes exteriores.",
            "Sótano y garaje: Comprobar paredes y suelos en contacto con el terreno; señales de infiltración de agua — depósitos minerales blancos (eflorescencias) en las paredes; olor a humedad; estado del aislamiento de las tuberías de agua fría.",
            "## Lista de verificación de 20 puntos",
            "Exterior y estructura: (1) ¿Hay señales de infiltración de agua en el tejado o en los canalones? (2) ¿Las paredes exteriores tienen grietas o zonas de humedad visibles? (3) ¿El terreno alrededor del edificio drena el agua lejos de los cimientos? (4) ¿Las ventanas tienen un sellado adecuado?",
            "Baño: (5) ¿Las juntas de silicona están intactas y sin oscurecimiento? (6) ¿El extractor funciona y ventila hacia el exterior? (7) ¿Hay moho visible en el techo o en las esquinas superiores? (8) ¿La base de la ducha o bañera está libre de grietas o juntas abiertas?",
            "Cocina: (9) ¿Hay señales de fugas bajo el fregadero? (10) ¿La pared detrás del frigorífico está seca y sin manchas? (11) ¿El extractor ventila hacia el exterior? (12) ¿Los armarios de esquina tienen circulación de aire adecuada?",
            "Dormitorios y salón: (13) ¿Hay condensación recurrente en las ventanas por la mañana? (14) ¿Las esquinas de las paredes exteriores están secas y sin manchas? (15) ¿Los armarios están alejados de las paredes exteriores? (16) ¿Hay olor a humedad en alguna habitación?",
            "Sótano, garaje y espacios técnicos: (17) ¿Hay eflorescencias en las paredes del sótano o del garaje? (18) ¿El suelo del sótano está seco después de lluvias intensas? (19) ¿Las tuberías de agua fría muestran señales de condensación? (20) ¿Hay moho visible en alguna superficie del sótano o del garaje?",
            "## Tabla: ubicación → causa probable",
            "Esquina superior de una pared exterior — Puente térmico por aislamiento insuficiente. La esquina pierde calor más rápidamente y alcanza el punto de rocío primero.",
            "Pared detrás de un armario — Falta de circulación de aire combinada con pared fría. Solución: alejar el armario y mejorar la ventilación de la habitación.",
            "Techo del baño — Ventilación insuficiente. El vapor de agua sube y se condensa en el techo.",
            "Base de las paredes (planta baja) — Humedad ascendente por capilaridad. Común en edificios sin barrera impermeabilizante horizontal.",
            "Zona alrededor de marcos de ventanas metálicos — Puente térmico a través del marco. El metal conduce el frío del exterior al interior.",
            "Pared interior (no exterior) — Fuga de agua de la fontanería. Comprobar tuberías en la pared o en el suelo de arriba.",
            "Techo con mancha irregular — Infiltración a través del tejado o desde la vivienda de arriba.",
            "Toda la superficie de una pared exterior — Humedad de condensación generalizada por ventilación insuficiente.",
            "## Cuándo llamar a un profesional",
            "Esta inspección visual tiene límites. Llamar a un profesional cuando: el moho cubre un área superior a 1 m²; el moho reaparece en el mismo lugar después de la limpieza; hay síntomas de salud persistentes que mejoran fuera de casa; el origen de la humedad no está claro después de la inspección visual; se sospecha moho oculto; la propiedad está alquilada y se necesita documentación.",
            "Una inspección con un medidor de humedad y una cámara termográfica puede identificar zonas húmedas ocultas, puentes térmicos y la extensión real del problema — sin el conflicto de intereses de quien vende el tratamiento que sigue.",
            "## Una nota sobre lo que esta guía no sustituye",
            "Esta guía está diseñada para darle información suficiente para hacer una evaluación inicial informada. No sustituye una inspección profesional con equipos de medición, ni asesoramiento médico si tiene síntomas de salud."
        ],
        disclosure: "Pieter Paul Castelein trabaja en FAIRBANK Group, la empresa detrás de InspectOS — una plataforma de inspección inmobiliaria independiente en Portugal. MoldCheck.pt es una iniciativa de FAIRBANK Group. No vendemos tratamientos de humedad. No recibimos comisiones de empresas de remediación.",
        sources: [
            {
                label: "OMS — Directrices para la calidad del aire interior: humedad y moho (2009)"
            },
            {
                label: "EPA — Guía breve sobre el moho, la humedad y su hogar (2012)"
            },
            {
                label: "IICRC S520 — Norma para la remediación profesional del moho (2015)"
            },
            {
                label: "INE Censos 2021 — Datos sobre el estado del parque edificatorio"
            }
        ],
        faq: [
            {
                question: "¿Puedo hacer esta inspección yo mismo o necesito un profesional?",
                answer: "Puede y debe hacer una inspección visual inicial usted mismo. Esta guía le proporciona las herramientas para ello. Para problemas mayores de 1 m², moho recurrente o síntomas de salud, se recomienda una inspección profesional con equipos de medición."
            },
            {
                question: "¿Qué hago si encuentro moho durante la inspección?",
                answer: "Documente con fotografías y notas sobre la ubicación y extensión. No limpie inmediatamente — la ubicación y el patrón del moho son información diagnóstica importante."
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
}),
"[project]/src/components/navigation/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a4-portugal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-ssr] (ecmascript)");
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a4PortugalSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a5MoldRiskSlugs"]
];
function findArticleSlugMap(currentLocale, currentSlug) {
    for (const map of articleSlugMaps){
        if (map[currentLocale] === currentSlug) return map;
    }
    return null;
}
function GlobeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "language-switcher__globe",
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "8",
                cy: "8",
                rx: "3",
                ry: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "8",
                x2: "15",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "4.5",
                x2: "13.5",
                y2: "4.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "11.5",
                x2: "13.5",
                y2: "11.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function LanguageSwitcher({ currentLocale }) {
    // next-intl pathname: strips locale prefix → e.g. "/articles/[slug]" or "/articulos/segundo-peor..."
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // next/navigation pathname: full path → e.g. "/es/articulos/segundo-peor-problema-moho-europa"
    const fullPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const isDynamicPath = pathname.includes("[");
    // params.slug is the raw URL slug value — reliable regardless of locale
    const currentSlug = typeof params?.slug === "string" ? params.slug : null;
    const slugMap = currentSlug ? findArticleSlugMap(currentLocale, currentSlug) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "language-switcher",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "language-switcher__trigger",
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "language-switcher__code",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeMarkers"][currentLocale]
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "language-switcher__chevron",
                        "aria-hidden": "true",
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "language-switcher__menu",
                role: "listbox",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeLocales"].map((locale)=>{
                    // Article page: build the translated URL directly from the slug map
                    if (slugMap) {
                        const targetSlug = slugMap[locale];
                        const href = targetSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(locale, targetSlug) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(locale, "articles");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: `language-switcher__option${locale === currentLocale ? " is-active" : ""}`,
                                role: "option",
                                "aria-selected": locale === currentLocale,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this)
                        }, locale, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this);
                    }
                    // All other pages: use next-intl Link
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: isDynamicPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: `language-switcher__option${locale === currentLocale ? " is-active" : ""}`,
                            href: {
                                pathname,
                                params
                            },
                            locale: locale,
                            role: "option",
                            "aria-selected": locale === currentLocale,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            className: `language-switcher__option${locale === currentLocale ? " is-active" : ""}`,
                            href: pathname,
                            locale: locale,
                            role: "option",
                            "aria-selected": locale === currentLocale,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][locale]
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                            lineNumber: 97,
                            columnNumber: 17
                        }, this)
                    }, locale, false, {
                        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/LanguageSwitcher.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/routing/paths.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-ssr] (ecmascript)");
;
function getGlobalPath(locale, route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(locale, route);
}
function getSectionPath(locale, section, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedSectionPath"])(locale, section, slug);
}
function getMunicipalityPath(locale, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedMunicipalityPath"])(locale, slug);
}
function getArticlePath(locale, slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(locale, slug);
}
}),
"[project]/src/components/navigation/PrimaryNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryNav",
    ()=>PrimaryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-ssr] (ecmascript)");
"use client";
;
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
function PrimaryNav({ locale }) {
    const labels = navLabels[locale];
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "site-nav",
        "aria-label": "Primary",
        children: navKeys.map((key)=>{
            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, key);
            const isActive = pathname === href || (pathname?.startsWith(href + "/") ?? false);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                className: `site-nav__link${isActive ? " is-active" : ""}`,
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
}),
"[project]/src/components/navigation/MobileNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/routeMap.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a4-portugal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/articles/a5-mold-risk-guide.ts [app-ssr] (ecmascript)");
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a4$2d$portugal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a4PortugalSlugs"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$articles$2f$a5$2d$mold$2d$risk$2d$guide$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a5MoldRiskSlugs"]
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "8",
                cy: "8",
                rx: "3",
                ry: "7",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "8",
                x2: "15",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "4.5",
                x2: "13.5",
                y2: "4.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2.5",
                y1: "11.5",
                x2: "13.5",
                y2: "11.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/MobileNav.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function MobileNav({ locale }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() ?? "";
    const intlPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const labels = navLabels[locale];
    const isDynamicPath = intlPathname.includes("[");
    const currentSlug = typeof params?.slug === "string" ? params.slug : null;
    const slugMap = currentSlug ? findArticleSlugMap(locale, currentSlug) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mobile-nav__toggle",
                "aria-label": open ? "Close menu" : "Open menu",
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mobile-nav__bar${open ? " is-open" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mobile-nav__bar${open ? " is-open" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mobile-nav__bar${open ? " is-open" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-nav__drawer",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Navigation menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mobile-nav__links",
                        "aria-label": "Primary",
                        children: navKeys.map((key)=>{
                            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, key);
                            const isActive = pathname === href || pathname.startsWith(href + "/");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: `mobile-nav__link${isActive ? " is-active" : ""}`,
                                "aria-current": isActive ? "page" : undefined,
                                onClick: ()=>setOpen(false),
                                children: labels[key]
                            }, key, false, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav__lang-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-nav__lang-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeMarkers"][locale]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-nav__lang-options",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeLocales"].map((loc)=>{
                                    if (slugMap) {
                                        const targetSlug = slugMap[loc];
                                        const href = targetSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedArticlePath"])(loc, targetSlug) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$routeMap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedGlobalPath"])(loc, "articles");
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            className: `mobile-nav__lang-option${loc === locale ? " is-active" : ""}`,
                                            onClick: ()=>setOpen(false),
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][loc]
                                        }, loc, false, {
                                            fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: isDynamicPath ? {
                                            pathname: intlPathname,
                                            params
                                        } : intlPathname,
                                        locale: loc,
                                        className: `mobile-nav__lang-option${loc === locale ? " is-active" : ""}`,
                                        onClick: ()=>setOpen(false),
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][loc]
                                    }, loc, false, {
                                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navigation/MobileNav.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation/MobileNav.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/features/newsletter/hooks/useSubscribe.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubscribe",
    ()=>useSubscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useSubscribe() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
                errorMsg = data.error ?? errorMsg;
            } catch  {}
            setError(errorMsg);
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
"[project]/src/features/newsletter/components/SubscriptionForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionForm",
    ()=>SubscriptionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$hooks$2f$useSubscribe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/newsletter/hooks/useSubscribe.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SubscriptionForm({ locale, onSuccess }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("Newsletter");
    const { status, error, submit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$hooks$2f$useSubscribe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubscribe"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consentError, setConsentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (status === "subscribed") {
        onSuccess?.();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-form__result sub-form__result--success",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "sub-form__result-title",
                    children: t("successTitle")
                }, void 0, false, {
                    fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-form__result sub-form__result--info",
            role: "status",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        className: "sub-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub-form__field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "newsletter-email",
                        type: "email",
                        autoComplete: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: t("emailPlaceholder"),
                        className: `sub-form__input${emailError ? " sub-form__input--error" : ""}`,
                        "aria-label": t("emailLabel"),
                        "aria-describedby": emailError ? "newsletter-email-error" : undefined,
                        "aria-invalid": !!emailError
                    }, void 0, false, {
                        fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub-form__consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
            consentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: "newsletter-consent-error",
                className: "sub-form__field-error",
                role: "alert",
                children: consentError
            }, void 0, false, {
                fileName: "[project]/src/features/newsletter/components/SubscriptionForm.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sub-form__generic-error",
                role: "alert",
                children: [
                    t("errorGeneric"),
                    ("TURBOPACK compile-time value", "development") !== "production" && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/features/newsletter/components/NewsletterSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterSection",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$components$2f$SubscriptionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/newsletter/components/SubscriptionForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NewsletterSection({ locale }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("NewsletterSection");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "newsletter-section",
        "aria-label": t("title"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newsletter-section__row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "newsletter-section__title",
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/features/newsletter/components/NewsletterSection.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__form",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$newsletter$2f$components$2f$SubscriptionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionForm"], {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "newsletter-section__action",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/layout/ScrollReset.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReset",
    ()=>ScrollReset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function ScrollReset() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Only force scroll-to-top on a fresh navigation, not on back/forward.
        const navEntry = undefined;
    }, []);
    return null;
}
}),
"[project]/src/components/layout/BackToTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function BackToTop() {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `back-to-top${visible ? " is-visible" : ""}`,
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        "aria-label": "Back to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/src/components/layout/ReloadRedirect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReloadRedirect",
    ()=>ReloadRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function ReloadRedirect({ locale }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const nav = performance.getEntriesByType("navigation")[0];
        const isReload = nav?.type === "reload";
        const path = window.location.pathname;
        const isHome = path === `/${locale}` || path === `/${locale}/`;
        if (isReload && !isHome) {
            router.replace(`/${locale}`);
        }
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=src_2f3e70e1._.js.map