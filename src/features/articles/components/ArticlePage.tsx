import type { ArticleLocaleContent } from "@/features/content/data/articles/a4-portugal";
import type { ActiveLocale } from "@/config/locales";
import { ArticlePageClient, type TocItem } from "./ArticlePageClient";

interface ArticlePageProps {
  locale: ActiveLocale;
  content: ArticleLocaleContent;
  articleKey: string;
  slugsByLocale: Record<ActiveLocale, string>;
  section: string;
}

// ── Localized TOC title ───────────────────────────────────────────────────
const tocTitles: Record<ActiveLocale, string> = {
  pt: "Índice",
  en: "Contents",
  fr: "Sommaire",
  de: "Inhalt",
  nl: "Inhoud",
  it: "Indice",
  es: "Índice",
};

// ── Per-article TOC items (A4 portugal) ───────────────────────────────────
// IDs are derived from the ## heading text in the body:
//   text.toLowerCase().replace(/[^a-z0-9\s]/g,"").trim().replace(/\s+/g,"-")
// "sources" and "faq" are fixed IDs on those sections.
const a4TocItems: Record<ActiveLocale, TocItem[]> = {
  pt: [
    { id: "o-que-os-nmeros-dizem",    label: "Os números" },
    { id: "o-que-encontrei-no-mercado", label: "O mercado" },
    { id: "a-ligao-com-a-sade-que-raramente--feita", label: "Saúde" },
    { id: "o-que-este-site--e-o-que-no-", label: "Este site" },
    { id: "para-o-um-em-cada-quatro",  label: "Um em cada quatro" },
    { id: "sources",                   label: "Fontes" },
    { id: "faq",                       label: "FAQ" },
  ],
  en: [
    { id: "the-number-that-stopped-me",       label: "The number" },
    { id: "why-portuguese-buildings-are-different", label: "Buildings" },
    { id: "the-response-that-isnt",           label: "The response" },
    { id: "what-happened-after-we-moved",     label: "Personal" },
    { id: "what-moldcheckpt-is--and-what-it-isnt", label: "About us" },
    { id: "a-note-for-the-one-in-four",       label: "One in four" },
    { id: "sources",                          label: "Sources" },
    { id: "faq",                              label: "FAQ" },
  ],
  fr: [
    { id: "ce-que-les-chiffres-rvlent",       label: "Les chiffres" },
    { id: "ce-que-jai-trouv-sur-le-march",    label: "Le marché" },
    { id: "le-lien-avec-la-sant-que-personne-ne-fait", label: "Santé" },
    { id: "ce-quest-ce-site--et-ce-quil-nest-pas", label: "Ce site" },
    { id: "pour-celui-ou-celle-qui-reconnat-sa-situation", label: "Pour vous" },
    { id: "sources",                          label: "Sources" },
    { id: "faq",                              label: "FAQ" },
  ],
  de: [
    { id: "was-die-zahlen-zeigen",            label: "Die Zahlen" },
    { id: "was-ich-auf-dem-markt-fand",       label: "Der Markt" },
    { id: "die-verbindung-zur-gesundheit-die-niemand-herstellt", label: "Gesundheit" },
    { id: "was-diese-website-ist--und-was-sie-nicht-ist", label: "Diese Website" },
    { id: "fr-jeden-vierten",                 label: "Jeden Vierten" },
    { id: "sources",                          label: "Quellen" },
    { id: "faq",                              label: "FAQ" },
  ],
  nl: [
    { id: "wat-de-cijfers-zeggen",            label: "De cijfers" },
    { id: "wat-ik-op-de-markt-aantrof",       label: "De markt" },
    { id: "de-link-met-gezondheid-die-niemand-legt", label: "Gezondheid" },
    { id: "wat-deze-website-is--en-wat-ze-niet-is", label: "Deze site" },
    { id: "voor-iedereen-die-zich-herkent",   label: "Voor u" },
    { id: "sources",                          label: "Bronnen" },
    { id: "faq",                              label: "FAQ" },
  ],
  it: [
    { id: "i-numeri-che-nessuno-pubblica-in-evidenza", label: "I numeri" },
    { id: "le-ragioni-strutturali-del-problema", label: "Le cause" },
    { id: "il-mercato-della-diagnosi-non--indipendente", label: "Il mercato" },
    { id: "quello-che-manca-un-sistema-di-ispezione-indipendente", label: "Cosa manca" },
    { id: "quello-che-speriamo-cambi",        label: "Il futuro" },
    { id: "sources",                          label: "Fonti" },
    { id: "faq",                              label: "FAQ" },
  ],
  es: [
    { id: "por-qu-ocurre-esto",               label: "¿Por qué?" },
    { id: "el-mercado-de-diagnstico-no-es-independiente", label: "El mercado" },
    { id: "lo-que-falta-un-sistema-de-inspeccin-independiente", label: "Lo que falta" },
    { id: "por-qu-esto-tambin-afecta-a-los-espaoles-en-portugal", label: "¿Nos afecta?" },
    { id: "sources",                          label: "Fuentes" },
    { id: "faq",                              label: "FAQ" },
  ],
};

// ── Per-article TOC items (A5 mold risk guide) ────────────────────────────
const a5TocItems: Record<ActiveLocale, TocItem[]> = {
  pt: [
    { id: "o-que-este-guia-cobre",                    label: "O que cobre" },
    { id: "sinais-de-alerta-que-a-maioria-das-pessoas-ignora", label: "Sinais de alerta" },
    { id: "inspeo-diviso-a-diviso",                   label: "Inspecção" },
    { id: "checklist-de-20-pontos",                   label: "Checklist" },
    { id: "tabela-localizao--causa-provvel",           label: "Tabela" },
    { id: "quando-pedir-ajuda-profissional",           label: "Ajuda profissional" },
    { id: "sources",                                  label: "Fontes" },
    { id: "faq",                                      label: "FAQ" },
  ],
  en: [
    { id: "what-this-guide-covers",                   label: "What it covers" },
    { id: "warning-signs-most-people-ignore",         label: "Warning signs" },
    { id: "room-by-room-inspection",                  label: "Inspection" },
    { id: "20-point-checklist",                       label: "Checklist" },
    { id: "location-to-probable-cause-table",         label: "Table" },
    { id: "when-to-call-a-professional",              label: "Professional help" },
    { id: "sources",                                  label: "Sources" },
    { id: "faq",                                      label: "FAQ" },
  ],
  fr: [
    { id: "ce-que-ce-guide-couvre",                   label: "Ce que couvre" },
    { id: "signaux-dalerte-que-la-plupart-des-gens-ignorent", label: "Signaux d'alerte" },
    { id: "inspection-pice-par-pice",                 label: "Inspection" },
    { id: "checklist-de-20-points",                   label: "Checklist" },
    { id: "tableau--localisation--cause-probable",    label: "Tableau" },
    { id: "quand-appeler-un-professionnel",            label: "Professionnel" },
    { id: "sources",                                  label: "Sources" },
    { id: "faq",                                      label: "FAQ" },
  ],
  de: [
    { id: "was-dieser-leitfaden-abdeckt",             label: "Was abgedeckt" },
    { id: "warnsignale-die-die-meisten-menschen-ignorieren", label: "Warnsignale" },
    { id: "raum-fr-raum-inspektion",                  label: "Inspektion" },
    { id: "20-punkte-checkliste",                     label: "Checkliste" },
    { id: "standort-zu-wahrscheinlicher-ursache-tabelle", label: "Tabelle" },
    { id: "wann-einen-fachmann-rufen",                label: "Fachmann" },
    { id: "sources",                                  label: "Quellen" },
    { id: "faq",                                      label: "FAQ" },
  ],
  nl: [
    { id: "wat-deze-gids-behandelt",                  label: "Wat behandelt" },
    { id: "waarschuwingssignalen-die-de-meeste-mensen-negeren", label: "Waarschuwingen" },
    { id: "kamer-voor-kamer-inspectie",               label: "Inspectie" },
    { id: "20-punten-checklist",                      label: "Checklist" },
    { id: "locatie-naar-waarschijnlijke-oorzaak-tabel", label: "Tabel" },
    { id: "wanneer-een-professional-te-bellen",       label: "Professional" },
    { id: "sources",                                  label: "Bronnen" },
    { id: "faq",                                      label: "FAQ" },
  ],
  it: [
    { id: "cosa-copre-questa-guida",                  label: "Cosa copre" },
    { id: "segnali-di-allarme-che-la-maggior-parte-delle-persone-ignora", label: "Segnali" },
    { id: "ispezione-stanza-per-stanza",              label: "Ispezione" },
    { id: "checklist-di-20-punti",                    label: "Checklist" },
    { id: "tabella-posizione--causa-probabile",       label: "Tabella" },
    { id: "quando-chiamare-un-professionista",        label: "Professionista" },
    { id: "sources",                                  label: "Fonti" },
    { id: "faq",                                      label: "FAQ" },
  ],
  es: [
    { id: "qu-cubre-esta-gua",                        label: "Qué cubre" },
    { id: "seales-de-alerta-que-la-mayora-de-las-personas-ignora", label: "Señales" },
    { id: "inspeccin-habitacin-por-habitacin",        label: "Inspección" },
    { id: "lista-de-verificacin-de-20-puntos",        label: "Lista" },
    { id: "tabla-ubicacin--causa-probable",           label: "Tabla" },
    { id: "cundo-llamar-a-un-profesional",            label: "Profesional" },
    { id: "sources",                                  label: "Fuentes" },
    { id: "faq",                                      label: "FAQ" },
  ],
};

// ── Per-article TOC items (A2 bleach) ────────────────────────────────────
const a2TocItems: Record<ActiveLocale, TocItem[]> = {
  pt: [
    { id: "o-que-a-lixvia-realmente-faz",              label: "O que faz" },
    { id: "o-que-dizem-os-organismos-internacionais",  label: "Organismos" },
    { id: "bolor-morto-ainda-faz-mal",                 label: "Bolor morto" },
    { id: "o-padro-que-a-localizao-revela",            label: "Localização" },
    { id: "o-que-realmente-funciona--por-nvel-de-gravidade", label: "O que funciona" },
    { id: "a-pergunta-que-toda-a-gente-deve-fazer",    label: "A pergunta" },
    { id: "o-que-fazer-esta-semana",                   label: "Esta semana" },
    { id: "sources",                                   label: "Fontes" },
    { id: "faq",                                       label: "FAQ" },
  ],
  en: [
    { id: "what-bleach-actually-does",                 label: "What it does" },
    { id: "what-international-bodies-say",             label: "Bodies say" },
    { id: "dead-mold-still-causes-harm",               label: "Dead mold" },
    { id: "the-pattern-that-location-reveals",         label: "Location" },
    { id: "what-actually-works--by-severity-level",   label: "What works" },
    { id: "the-question-everyone-should-ask",          label: "The question" },
    { id: "what-to-do-this-week",                      label: "This week" },
    { id: "sources",                                   label: "Sources" },
    { id: "faq",                                       label: "FAQ" },
  ],
  fr: [
    { id: "ce-que-la-javel-fait-rellement",            label: "Ce qu'elle fait" },
    { id: "ce-que-disent-les-organismes-internationaux", label: "Organismes" },
    { id: "les-moisissures-mortes-causent-encore-des-dommages", label: "Moisissures mortes" },
    { id: "le-schma-que-rvle-la-localisation",         label: "Localisation" },
    { id: "ce-qui-fonctionne-vraiment--par-niveau-de-gravit", label: "Ce qui marche" },
    { id: "la-question-que-tout-le-monde-devrait-poser", label: "La question" },
    { id: "que-faire-cette-semaine",                   label: "Cette semaine" },
    { id: "sources",                                   label: "Sources" },
    { id: "faq",                                       label: "FAQ" },
  ],
  de: [
    { id: "was-bleichmittel-wirklich-tut",             label: "Was es tut" },
    { id: "was-internationale-organisationen-sagen",   label: "Organisationen" },
    { id: "toter-schimmel-verursacht-immer-noch-schden", label: "Toter Schimmel" },
    { id: "das-muster-das-der-standort-offenbart",     label: "Standort" },
    { id: "was-wirklich-hilft--nach-schweregrad",      label: "Was hilft" },
    { id: "die-frage-die-jeder-stellen-sollte",        label: "Die Frage" },
    { id: "was-diese-woche-zu-tun-ist",                label: "Diese Woche" },
    { id: "sources",                                   label: "Quellen" },
    { id: "faq",                                       label: "FAQ" },
  ],
  nl: [
    { id: "wat-bleekwater-echt-doet",                  label: "Wat het doet" },
    { id: "wat-internationale-organisaties-zeggen",    label: "Organisaties" },
    { id: "dode-schimmel-veroorzaakt-nog-steeds-schade", label: "Dode schimmel" },
    { id: "het-patroon-dat-de-locatie-onthult",        label: "Locatie" },
    { id: "wat-echt-werkt--per-ernstniveau",           label: "Wat werkt" },
    { id: "de-vraag-die-iedereen-zou-moeten-stellen",  label: "De vraag" },
    { id: "wat-deze-week-te-doen",                     label: "Deze week" },
    { id: "sources",                                   label: "Bronnen" },
    { id: "faq",                                       label: "FAQ" },
  ],
  it: [
    { id: "cosa-fa-davvero-la-candeggina",             label: "Cosa fa" },
    { id: "cosa-dicono-gli-organismi-internazionali",  label: "Organismi" },
    { id: "la-muffa-morta-causa-ancora-danni",         label: "Muffa morta" },
    { id: "il-modello-che-la-posizione-rivela",        label: "Posizione" },
    { id: "cosa-funziona-davvero--per-livello-di-gravit", label: "Cosa funziona" },
    { id: "la-domanda-che-tutti-dovrebbero-fare",      label: "La domanda" },
    { id: "cosa-fare-questa-settimana",                label: "Questa settimana" },
    { id: "sources",                                   label: "Fonti" },
    { id: "faq",                                       label: "FAQ" },
  ],
  es: [
    { id: "lo-que-la-leja-hace-realmente",             label: "Lo que hace" },
    { id: "lo-que-dicen-los-organismos-internacionales", label: "Organismos" },
    { id: "el-moho-muerto-sigue-causando-dao",         label: "Moho muerto" },
    { id: "el-patrn-que-revela-la-ubicacin",           label: "Ubicación" },
    { id: "lo-que-realmente-funciona--por-nivel-de-gravedad", label: "Lo que funciona" },
    { id: "la-pregunta-que-todo-el-mundo-debera-hacer", label: "La pregunta" },
    { id: "qu-hacer-esta-semana",                      label: "Esta semana" },
    { id: "sources",                                   label: "Fuentes" },
    { id: "faq",                                       label: "FAQ" },
  ],
};

// ── Per-article TOC items (A3 health) ────────────────────────────────────
const a3TocItems: Record<ActiveLocale, TocItem[]> = {
  pt: [
    { id: "o-que-os-nmeros-dizem-sobre-portugal",     label: "Os números" },
    { id: "o-que-a-oms-estabeleceu",                  label: "A OMS" },
    { id: "como-o-bolor-afeta-o-organismo--os-mecanismos", label: "Mecanismos" },
    { id: "os-grupos-com-maior-vulnerabilidade",       label: "Grupos de risco" },
    { id: "os-sintomas-que-passam-despercebidos",      label: "Sintomas" },
    { id: "uma-nota-sobre-cirs--o-que--e-o-que-no-",  label: "CIRS" },
    { id: "o-que-fazer-se-se-reconhece-neste-artigo",  label: "O que fazer" },
    { id: "sources",                                   label: "Fontes" },
    { id: "faq",                                       label: "FAQ" },
  ],
  en: [
    { id: "what-the-numbers-say-about-portugal",       label: "The numbers" },
    { id: "what-the-who-established",                  label: "WHO" },
    { id: "how-mold-affects-the-body--the-mechanisms", label: "Mechanisms" },
    { id: "groups-with-greater-vulnerability",         label: "Vulnerable groups" },
    { id: "the-symptoms-that-go-unrecognised",         label: "Symptoms" },
    { id: "a-note-on-cirs--what-it-is-and-what-it-isnt", label: "CIRS" },
    { id: "what-to-do-if-you-recognise-yourself-in-this-article", label: "What to do" },
    { id: "sources",                                   label: "Sources" },
    { id: "faq",                                       label: "FAQ" },
  ],
  fr: [
    { id: "ce-que-les-chiffres-disent-sur-le-portugal", label: "Les chiffres" },
    { id: "ce-que-loms-a-tabli",                       label: "L'OMS" },
    { id: "comment-les-moisissures-affectent-lorganisme", label: "Mécanismes" },
    { id: "les-groupes-les-plus-vulnrables",            label: "Groupes à risque" },
    { id: "les-symptmes-qui-passent-inaperус",          label: "Symptômes" },
    { id: "une-note-sur-le-cirs",                      label: "CIRS" },
    { id: "que-faire-si-vous-vous-reconnaissez-dans-cet-article", label: "Que faire" },
    { id: "sources",                                   label: "Sources" },
    { id: "faq",                                       label: "FAQ" },
  ],
  de: [
    { id: "was-die-zahlen-ber-portugal-sagen",         label: "Die Zahlen" },
    { id: "was-die-who-festgestellt-hat",              label: "WHO" },
    { id: "wie-schimmel-den-krper-beeinflusst",        label: "Mechanismen" },
    { id: "besonders-gefhrdete-gruppen",               label: "Risikogruppen" },
    { id: "symptome-die-unbemerkt-bleiben",            label: "Symptome" },
    { id: "eine-anmerkung-zu-cirs",                    label: "CIRS" },
    { id: "was-zu-tun-ist-wenn-sie-sich-in-diesem-artikel-wiedererkennen", label: "Was tun" },
    { id: "sources",                                   label: "Quellen" },
    { id: "faq",                                       label: "FAQ" },
  ],
  nl: [
    { id: "wat-de-cijfers-over-portugal-zeggen",       label: "De cijfers" },
    { id: "wat-de-who-heeft-vastgesteld",              label: "WHO" },
    { id: "hoe-schimmel-het-lichaam-benvloedt",        label: "Mechanismen" },
    { id: "groepen-met-groter-risico",                 label: "Risicogroepen" },
    { id: "de-klachten-die-onopgemerkt-blijven",       label: "Klachten" },
    { id: "een-noot-over-cirs",                        label: "CIRS" },
    { id: "wat-te-doen-als-je-jezelf-herkent-in-dit-artikel", label: "Wat doen" },
    { id: "sources",                                   label: "Bronnen" },
    { id: "faq",                                       label: "FAQ" },
  ],
  it: [
    { id: "quello-che-loms-ha-stabilito",              label: "L'OMS" },
    { id: "i-sintomi-che-la-maggior-parte-delle-persone-non-collega-allabitazione", label: "Sintomi" },
    { id: "i-gruppi-pi-vulnerabili",                   label: "Gruppi a rischio" },
    { id: "la-qualit-dellaria-interna-in-italia-e-in-portogallo", label: "Italia e Portogallo" },
    { id: "quando-agire",                              label: "Quando agire" },
    { id: "una-nota-sul-percorso-diagnostico",         label: "Percorso diagnostico" },
    { id: "sources",                                   label: "Fonti" },
    { id: "faq",                                       label: "FAQ" },
  ],
  es: [
    { id: "lo-que-la-oms-estableci",                   label: "La OMS" },
    { id: "los-sntomas-que-la-mayora-de-las-personas-no-relacionan-con-la-vivienda", label: "Síntomas" },
    { id: "los-grupos-ms-vulnerables",                 label: "Grupos de riesgo" },
    { id: "la-calidad-del-aire-interior-en-portugal",  label: "Portugal" },
    { id: "cundo-actuar",                              label: "Cuándo actuar" },
    { id: "sources",                                   label: "Fuentes" },
    { id: "faq",                                       label: "FAQ" },
  ],
};

// ── Per-article TOC items (A1 black mold) ────────────────────────────────
const a1TocItems: Record<ActiveLocale, TocItem[]> = {
  pt: [
    { id: "primeiro-problema-bolor-negro-no--uma-espcie",  label: "Espécies" },
    { id: "stachybotrys-o-que--o-que-faz-e-o-que-no-faz", label: "Stachybotrys" },
    { id: "os-mitos-que-circulam--e-o-que-a-evidncia-diz", label: "Mitos" },
    { id: "como-identificar-o-que-tem--na-prtica",         label: "Identificar" },
    { id: "o-que-fazer-se-encontrar-bolor-negro",          label: "O que fazer" },
    { id: "sources",                                       label: "Fontes" },
    { id: "faq",                                           label: "FAQ" },
  ],
  en: [
    { id: "the-first-problem-black-mold-is-not-one-thing", label: "Species" },
    { id: "stachybotrys-what-it-is-what-it-does-and-what-it-doesnt", label: "Stachybotrys" },
    { id: "the-myths--and-what-the-evidence-actually-says", label: "Myths" },
    { id: "how-to-assess-what-you-have--in-practice",      label: "Assess" },
    { id: "what-to-do-if-you-find-dark-mold",              label: "What to do" },
    { id: "sources",                                       label: "Sources" },
    { id: "faq",                                           label: "FAQ" },
  ],
  fr: [
    { id: "premier-problme--les-moisissures-noires-ne-sont-pas-une-seule-chose", label: "Espèces" },
    { id: "stachybotrys--ce-quil-est-ce-quil-fait-ce-quil-ne-fait-pas", label: "Stachybotrys" },
    { id: "les-mythes--et-ce-que-les-preuves-disent-vraiment", label: "Mythes" },
    { id: "ce-quil-faut-faire-si-vous-trouvez-des-moisissures-sombres", label: "Que faire" },
    { id: "sources",                                       label: "Sources" },
    { id: "faq",                                           label: "FAQ" },
  ],
  de: [
    { id: "erstes-problem-schwarzer-schimmel-ist-keine-einzige-sache", label: "Arten" },
    { id: "stachybotrys-was-er-ist-was-er-tut-was-er-nicht-tut", label: "Stachybotrys" },
    { id: "die-mythen--und-was-die-evidenz-wirklich-sagt", label: "Mythen" },
    { id: "was-zu-tun-ist-wenn-sie-dunklen-schimmel-finden", label: "Was tun" },
    { id: "sources",                                       label: "Quellen" },
    { id: "faq",                                           label: "FAQ" },
  ],
  nl: [
    { id: "eerste-probleem-zwarte-schimmel-is-niet-n-ding", label: "Soorten" },
    { id: "stachybotrys-wat-het-is-wat-het-doet-wat-het-niet-doet", label: "Stachybotrys" },
    { id: "de-mythen--en-wat-het-bewijs-werkelijk-zegt",   label: "Mythen" },
    { id: "wat-te-doen-als-je-donkere-schimmel-vindt",     label: "Wat doen" },
    { id: "sources",                                       label: "Bronnen" },
    { id: "faq",                                           label: "FAQ" },
  ],
  it: [
    { id: "perch-il-colore-non-basta",                     label: "Perché il colore" },
    { id: "il-problema-reale-con-la-stachybotrys",         label: "Stachybotrys" },
    { id: "come-si-distingue-visivamente-con-i-limiti-del-caso", label: "Distinzione" },
    { id: "cosa-fare-se-trovate-una-macchia-scura",        label: "Cosa fare" },
    { id: "una-nota-sullidentificazione-professionale",    label: "Identificazione" },
    { id: "sources",                                       label: "Fonti" },
    { id: "faq",                                           label: "FAQ" },
  ],
  es: [
    { id: "por-qu-el-color-no-es-suficiente",              label: "Por qué el color" },
    { id: "el-problema-real-con-la-stachybotrys",          label: "Stachybotrys" },
    { id: "cmo-se-distingue-visualmente-con-las-limitaciones-del-caso", label: "Distinción" },
    { id: "qu-hacer-si-encuentra-una-mancha-oscura",       label: "Qué hacer" },
    { id: "una-nota-sobre-la-identificacin-profesional",   label: "Identificación" },
    { id: "sources",                                       label: "Fuentes" },
    { id: "faq",                                           label: "FAQ" },
  ],
};

// ── Per-article TOC item registry ─────────────────────────────────────────
const tocItemsByArticle: Record<string, Record<ActiveLocale, TocItem[]>> = {
  "a4-portugal": a4TocItems,
  "a5-mold-risk-guide": a5TocItems,
  "a2-bleach": a2TocItems,
  "a3-health": a3TocItems,
  "a1-black-mold": a1TocItems,
};

// ── Section eyebrow labels ────────────────────────────────────────────────
const sectionLabels: Record<string, Record<ActiveLocale, string>> = {
  portugal: { pt: "Portugal", en: "Portugal", fr: "Portugal", de: "Portugal", nl: "Portugal", it: "Portogallo", es: "Portugal" },
  inspection: { pt: "Inspecção", en: "Inspection", fr: "Inspection", de: "Inspektion", nl: "Inspectie", it: "Ispezione", es: "Inspección" },
  articles: { pt: "Artigos", en: "Articles", fr: "Articles", de: "Artikel", nl: "Artikelen", it: "Articoli", es: "Artículos" },
};

// ── UI labels ─────────────────────────────────────────────────────────────
const uiLabels: Record<ActiveLocale, { sources: string; disclosure: string; faq: string }> = {
  pt: { sources: "Fontes",   disclosure: "Declaração de conflito de interesses", faq: "Perguntas frequentes" },
  en: { sources: "Sources",  disclosure: "Disclosure",                           faq: "Frequently asked questions" },
  fr: { sources: "Sources",  disclosure: "Déclaration d'intérêts",               faq: "Questions fréquentes" },
  de: { sources: "Quellen",  disclosure: "Interessenerklärung",                  faq: "Häufig gestellte Fragen" },
  nl: { sources: "Bronnen",  disclosure: "Belangenverklaring",                   faq: "Veelgestelde vragen" },
  it: { sources: "Fonti",    disclosure: "Dichiarazione di interessi",            faq: "Domande frequenti" },
  es: { sources: "Fuentes",  disclosure: "Declaración de intereses",             faq: "Preguntas frecuentes" },
};

export function ArticlePage({ locale, content, articleKey, slugsByLocale, section }: ArticlePageProps) {
  const tocItems = tocItemsByArticle[articleKey]?.[locale] ?? [];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ArticlePageClient
        locale={locale}
        content={content}
        sectionLabel={sectionLabels[section]?.[locale] ?? section}
        tocTitle={tocTitles[locale]}
        tocItems={tocItems}
        slugsByLocale={slugsByLocale}
        articleKey={articleKey}
        uiLabels={uiLabels[locale]}
      />
    </>
  );
}
