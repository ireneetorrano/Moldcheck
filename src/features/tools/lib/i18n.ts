import type { ActiveLocale } from "@/config/locales";
import type { CalcI18n, RiskBand, Answers } from "../types";
import { getLocalizedGlobalPath, getLocalizedArticlePath, globalRouteSlugs } from "@/config/routeMap";
import { foundationalArticles } from "@/config/foundationalArticles";

function checklistPdf(locale: ActiveLocale): string {
 return `/checklists/moldcheck-checklist-${locale}.pdf`;
}

function inspectionHref(locale: ActiveLocale): string {
 return getLocalizedGlobalPath(locale, "services");
}

function healthArticleHref(locale: ActiveLocale): string {
 const slug = foundationalArticles.find((a) => a.key === "health")?.slugs[locale] ?? "";
 return `/${locale}/${globalRouteSlugs.articles[locale]}/${slug}`;
}

function moldCausesHref(locale: ActiveLocale): string {
 const slug = foundationalArticles.find((a) => a.key === "bleach")?.slugs[locale] ?? "";
 return `/${locale}/${globalRouteSlugs.articles[locale]}/${slug}`;
}

// ---------------------------------------------------------------------------
// Shared question/option keys resolved per locale
// ---------------------------------------------------------------------------

type QMap = Record<string, { label: string; options: Record<string, string> }>;
type CLMap = Record<string, string>;
type RFMap = Record<string, { title: string; description: string }>;

function buildQuestions(locale: ActiveLocale): QMap {
 const m = QUESTION_STRINGS[locale];
 return m;
}

// ---------------------------------------------------------------------------
// Per-locale string tables
// ---------------------------------------------------------------------------

const QUESTION_STRINGS: Record<ActiveLocale, QMap> = {
 pt: {
 q_buildingType: { label: "Tipo de edifício", options: { apartment_block: "Apartamento em bloco", detached: "Moradia isolada", semi_detached: "Moradia geminada", ground_floor_apt: "Apartamento no rés-do-chão", top_floor_apt: "Apartamento no último andar" } },
 q_constructionYear: { label: "Ano de construção", options: { before_1960: "Antes de 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Depois de 2015" } },
 q_location: { label: "Localização", options: { lisbon: "Área de Lisboa", porto: "Área do Porto", algarve: "Algarve", interior: "Interior", islands: "Ilhas (Açores/Madeira)" } },
 q_floorLevel: { label: "Piso", options: { ground: "Rés-do-chão", first_third: "1.º 3.º andar", fourth_plus: "4.º andar ou superior", top_floor: "Último andar", only_floor: "Único piso" } },
 q_windowType: { label: "Tipo de janelas", options: { single_alu: "Vidro simples, alumínio", double_no_break: "Vidro duplo, alumínio sem corte térmico", double_thermal: "Vidro duplo com corte térmico", triple: "Vidro triplo ou mais recente" } },
 q_hygrometer: { label: "Tem higrómetro?", options: { below_60: "Sim leitura abaixo de 60%", "60_70": "Sim 60 70%", "70_80": "Sim 70 80%", above_80: "Sim acima de 80%", no_hygro: "Não" } },
 q_moldHistory: { label: "Viu bolor nos últimos 12 meses?", options: { none: "Não", small_nonporous: "Sim, área pequena em superfície não porosa", large_porous: "Sim, área maior ou superfície porosa", recurrent: "Sim, voltou após limpeza" } },
 q_odour: { label: "Cheiro a mofo sem bolor visível?", options: { none: "Não", occasional: "Ocasionalmente", regular: "Sim, regularmente", strong: "Sim, forte e persistente" } },
 q_waterEvents: { label: "Eventos de água nos últimos 3 anos?", options: { none: "Nenhum", minor: "Menor fuga pequena, reparada", moderate: "Moderado inundação ou fuga significativa", major: "Grave inundação com exposição prolongada" } },
 q_bathroomVent: { label: "Ventilação da casa de banho", options: { window_only: "Só janela", extractor_out: "Extrator que expulsa para o exterior", extractor_unk: "Extrator não sei para onde expulsa", no_vent: "Sem ventilação" } },
 q_kitchenVent: { label: "Ventilação da cozinha", options: { window_only: "Só janela", recirculation: "Hotte de recirculação", extraction: "Hotte de extração (expulsa para o exterior)" } },
 q_laundryDrying: { label: "Secagem de roupa", options: { always_outside: "Sempre no exterior", mostly_outside: "Maioritariamente no exterior", sometimes_in: "Às vezes no interior", usually_in: "Habitualmente no interior" } },
 q_heating: { label: "Aquecimento no inverno", options: { always_18: "Sempre aquecido a 18°C+", most_days: "Aquecido na maioria dos dias", occasional: "Aquecido ocasionalmente", rarely: "Raramente ou nunca" } },
 q_occupants: { label: "Número de ocupantes", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 en: {
 q_buildingType: { label: "Building type", options: { apartment_block: "Apartment in a block", detached: "Detached house", semi_detached: "Semi-detached", ground_floor_apt: "Ground floor apartment", top_floor_apt: "Top floor apartment" } },
 q_constructionYear: { label: "Construction year", options: { before_1960: "Before 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "After 2015" } },
 q_location: { label: "Location", options: { lisbon: "Lisbon area", porto: "Porto area", algarve: "Algarve", interior: "Interior", islands: "Islands (Açores/Madeira)" } },
 q_floorLevel: { label: "Floor level", options: { ground: "Ground floor", first_third: "1st 3rd floor", fourth_plus: "4th floor or higher", top_floor: "Top floor", only_floor: "Only floor" } },
 q_windowType: { label: "Window type", options: { single_alu: "Single glazing, aluminium", double_no_break: "Double glazing, aluminium no thermal break", double_thermal: "Double glazing, thermal break", triple: "Triple glazing or newer" } },
 q_hygrometer: { label: "Do you have a hygrometer?", options: { below_60: "Yes reading below 60%", "60_70": "Yes 60 70%", "70_80": "Yes 70 80%", above_80: "Yes above 80%", no_hygro: "No" } },
 q_moldHistory: { label: "Have you seen mold in the past 12 months?", options: { none: "No", small_nonporous: "Yes, small area on non-porous surface", large_porous: "Yes, larger area or porous surface", recurrent: "Yes, came back after cleaning" } },
 q_odour: { label: "Musty smell without visible mold?", options: { none: "No", occasional: "Occasionally", regular: "Yes, regularly", strong: "Yes, strong and persistent" } },
 q_waterEvents: { label: "Water events in past 3 years?", options: { none: "None", minor: "Minor small leak, repaired", moderate: "Moderate flooding or significant leak", major: "Major flooding with prolonged exposure" } },
 q_bathroomVent: { label: "Bathroom ventilation", options: { window_only: "Window only", extractor_out: "Extractor fan that exhausts outside", extractor_unk: "Extractor fan not sure where it exhausts", no_vent: "No ventilation" } },
 q_kitchenVent: { label: "Kitchen ventilation", options: { window_only: "Window only", recirculation: "Recirculation hood", extraction: "Extraction hood (exhausts outside)" } },
 q_laundryDrying: { label: "Laundry drying", options: { always_outside: "Always outside", mostly_outside: "Mostly outside", sometimes_in: "Sometimes indoors", usually_in: "Usually indoors" } },
 q_heating: { label: "Heating in winter", options: { always_18: "Always heated to 18°C+", most_days: "Heated most days", occasional: "Heated occasionally", rarely: "Rarely or never heated" } },
 q_occupants: { label: "Number of occupants", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 fr: {
 q_buildingType: { label: "Type de bâtiment", options: { apartment_block: "Appartement en immeuble", detached: "Maison individuelle", semi_detached: "Maison mitoyenne", ground_floor_apt: "Appartement au rez-de-chaussée", top_floor_apt: "Appartement au dernier étage" } },
 q_constructionYear: { label: "Année de construction", options: { before_1960: "Avant 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Après 2015" } },
 q_location: { label: "Localisation", options: { lisbon: "Région de Lisbonne", porto: "Région de Porto", algarve: "Algarve", interior: "Intérieur", islands: "Îles (Açores/Madère)" } },
 q_floorLevel: { label: "Étage", options: { ground: "Rez-de-chaussée", first_third: "1er 3e étage", fourth_plus: "4e étage ou plus", top_floor: "Dernier étage", only_floor: "Seul étage" } },
 q_windowType: { label: "Type de fenêtres", options: { single_alu: "Simple vitrage, aluminium", double_no_break: "Double vitrage, aluminium sans rupture thermique", double_thermal: "Double vitrage avec rupture thermique", triple: "Triple vitrage ou plus récent" } },
 q_hygrometer: { label: "Avez-vous un hygromètre ?", options: { below_60: "Oui lecture inférieure à 60 %", "60_70": "Oui 60 70 %", "70_80": "Oui 70 80 %", above_80: "Oui supérieure à 80 %", no_hygro: "Non" } },
 q_moldHistory: { label: "Avez-vous vu des moisissures ces 12 derniers mois ?", options: { none: "Non", small_nonporous: "Oui, petite zone sur surface non poreuse", large_porous: "Oui, zone plus grande ou surface poreuse", recurrent: "Oui, réapparues après nettoyage" } },
 q_odour: { label: "Odeur de moisi sans moisissures visibles ?", options: { none: "Non", occasional: "Occasionnellement", regular: "Oui, régulièrement", strong: "Oui, forte et persistante" } },
 q_waterEvents: { label: "Événements liés à l'eau ces 3 dernières années ?", options: { none: "Aucun", minor: "Mineur petite fuite, réparée", moderate: "Modéré inondation ou fuite importante", major: "Majeur inondation avec exposition prolongée" } },
 q_bathroomVent: { label: "Ventilation de la salle de bain", options: { window_only: "Fenêtre uniquement", extractor_out: "Extracteur évacuant vers l'extérieur", extractor_unk: "Extracteur ne sais pas où il évacue", no_vent: "Pas de ventilation" } },
 q_kitchenVent: { label: "Ventilation de la cuisine", options: { window_only: "Fenêtre uniquement", recirculation: "Hotte à recirculation", extraction: "Hotte d'extraction (évacue vers l'extérieur)" } },
 q_laundryDrying: { label: "Séchage du linge", options: { always_outside: "Toujours à l'extérieur", mostly_outside: "Principalement à l'extérieur", sometimes_in: "Parfois à l'intérieur", usually_in: "Habituellement à l'intérieur" } },
 q_heating: { label: "Chauffage en hiver", options: { always_18: "Toujours chauffé à 18°C+", most_days: "Chauffé la plupart des jours", occasional: "Chauffé occasionnellement", rarely: "Rarement ou jamais" } },
 q_occupants: { label: "Nombre d'occupants", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 de: {
 q_buildingType: { label: "Gebäudetyp", options: { apartment_block: "Wohnung in einem Block", detached: "Freistehendes Haus", semi_detached: "Doppelhaushälfte", ground_floor_apt: "Erdgeschosswohnung", top_floor_apt: "Dachgeschosswohnung" } },
 q_constructionYear: { label: "Baujahr", options: { before_1960: "Vor 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Nach 2015" } },
 q_location: { label: "Standort", options: { lisbon: "Raum Lissabon", porto: "Raum Porto", algarve: "Algarve", interior: "Landesinneres", islands: "Inseln (Azoren/Madeira)" } },
 q_floorLevel: { label: "Stockwerk", options: { ground: "Erdgeschoss", first_third: "1. 3. Etage", fourth_plus: "4. Etage oder höher", top_floor: "Oberste Etage", only_floor: "Einzige Etage" } },
 q_windowType: { label: "Fenstertyp", options: { single_alu: "Einfachverglasung, Aluminium", double_no_break: "Doppelverglasung, Aluminium ohne Wärmebrückenunterbrechung", double_thermal: "Doppelverglasung mit Wärmebrückenunterbrechung", triple: "Dreifachverglasung oder neuer" } },
 q_hygrometer: { label: "Haben Sie ein Hygrometer?", options: { below_60: "Ja Messwert unter 60 %", "60_70": "Ja 60 70 %", "70_80": "Ja 70 80 %", above_80: "Ja über 80 %", no_hygro: "Nein" } },
 q_moldHistory: { label: "Haben Sie in den letzten 12 Monaten Schimmel gesehen?", options: { none: "Nein", small_nonporous: "Ja, kleine Fläche auf nicht-poröser Oberfläche", large_porous: "Ja, größere Fläche oder poröse Oberfläche", recurrent: "Ja, nach Reinigung wieder aufgetreten" } },
 q_odour: { label: "Muffiger Geruch ohne sichtbaren Schimmel?", options: { none: "Nein", occasional: "Gelegentlich", regular: "Ja, regelmäßig", strong: "Ja, stark und anhaltend" } },
 q_waterEvents: { label: "Wasserschäden in den letzten 3 Jahren?", options: { none: "Keine", minor: "Gering kleiner Leck, repariert", moderate: "Mittel Überschwemmung oder erheblicher Leck", major: "Schwer Überschwemmung mit längerer Exposition" } },
 q_bathroomVent: { label: "Badezimmerbelüftung", options: { window_only: "Nur Fenster", extractor_out: "Abluftventilator nach außen", extractor_unk: "Abluftventilator unbekanntes Ziel", no_vent: "Keine Belüftung" } },
 q_kitchenVent: { label: "Küchenbelüftung", options: { window_only: "Nur Fenster", recirculation: "Umlufthaube", extraction: "Ablufthaube (nach außen)" } },
 q_laundryDrying: { label: "Wäschetrocknung", options: { always_outside: "Immer draußen", mostly_outside: "Meistens draußen", sometimes_in: "Manchmal drinnen", usually_in: "Meistens drinnen" } },
 q_heating: { label: "Heizung im Winter", options: { always_18: "Immer auf 18°C+ geheizt", most_days: "Die meisten Tage geheizt", occasional: "Gelegentlich geheizt", rarely: "Selten oder nie geheizt" } },
 q_occupants: { label: "Anzahl der Bewohner", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 nl: {
 q_buildingType: { label: "Type gebouw", options: { apartment_block: "Appartement in een blok", detached: "Vrijstaand huis", semi_detached: "Halfvrijstaand huis", ground_floor_apt: "Begane grond appartement", top_floor_apt: "Appartement op de bovenste verdieping" } },
 q_constructionYear: { label: "Bouwjaar", options: { before_1960: "Voor 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Na 2015" } },
 q_location: { label: "Locatie", options: { lisbon: "Regio Lissabon", porto: "Regio Porto", algarve: "Algarve", interior: "Binnenland", islands: "Eilanden (Azoren/Madeira)" } },
 q_floorLevel: { label: "Verdieping", options: { ground: "Begane grond", first_third: "1e 3e verdieping", fourth_plus: "4e verdieping of hoger", top_floor: "Bovenste verdieping", only_floor: "Enige verdieping" } },
 q_windowType: { label: "Type ramen", options: { single_alu: "Enkel glas, aluminium", double_no_break: "Dubbel glas, aluminium zonder thermische onderbreking", double_thermal: "Dubbel glas met thermische onderbreking", triple: "Driedubbel glas of nieuwer" } },
 q_hygrometer: { label: "Heeft u een hygrometer?", options: { below_60: "Ja meting onder 60%", "60_70": "Ja 60 70%", "70_80": "Ja 70 80%", above_80: "Ja boven 80%", no_hygro: "Nee" } },
 q_moldHistory: { label: "Heeft u de afgelopen 12 maanden schimmel gezien?", options: { none: "Nee", small_nonporous: "Ja, klein gebied op niet-poreus oppervlak", large_porous: "Ja, groter gebied of poreus oppervlak", recurrent: "Ja, teruggekomen na schoonmaken" } },
 q_odour: { label: "Muffe geur zonder zichtbare schimmel?", options: { none: "Nee", occasional: "Af en toe", regular: "Ja, regelmatig", strong: "Ja, sterk en aanhoudend" } },
 q_waterEvents: { label: "Waterincidenten afgelopen 3 jaar?", options: { none: "Geen", minor: "Klein kleine lekkage, gerepareerd", moderate: "Matig overstroming of aanzienlijke lekkage", major: "Ernstig overstroming met langdurige blootstelling" } },
 q_bathroomVent: { label: "Badkamerventilatie", options: { window_only: "Alleen raam", extractor_out: "Afzuigventilator naar buiten", extractor_unk: "Afzuigventilator weet niet waar naartoe", no_vent: "Geen ventilatie" } },
 q_kitchenVent: { label: "Keukenventilatie", options: { window_only: "Alleen raam", recirculation: "Recirculatiekap", extraction: "Afzuigkap (naar buiten)" } },
 q_laundryDrying: { label: "Was drogen", options: { always_outside: "Altijd buiten", mostly_outside: "Meestal buiten", sometimes_in: "Soms binnen", usually_in: "Meestal binnen" } },
 q_heating: { label: "Verwarming in de winter", options: { always_18: "Altijd verwarmd tot 18°C+", most_days: "De meeste dagen verwarmd", occasional: "Af en toe verwarmd", rarely: "Zelden of nooit verwarmd" } },
 q_occupants: { label: "Aantal bewoners", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 it: {
 q_buildingType: { label: "Tipo di edificio", options: { apartment_block: "Appartamento in condominio", detached: "Casa indipendente", semi_detached: "Casa bifamiliare", ground_floor_apt: "Appartamento al piano terra", top_floor_apt: "Appartamento all'ultimo piano" } },
 q_constructionYear: { label: "Anno di costruzione", options: { before_1960: "Prima del 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Dopo il 2015" } },
 q_location: { label: "Posizione", options: { lisbon: "Area di Lisbona", porto: "Area di Porto", algarve: "Algarve", interior: "Entroterra", islands: "Isole (Azzorre/Madeira)" } },
 q_floorLevel: { label: "Piano", options: { ground: "Piano terra", first_third: "1° 3° piano", fourth_plus: "4° piano o superiore", top_floor: "Ultimo piano", only_floor: "Piano unico" } },
 q_windowType: { label: "Tipo di finestre", options: { single_alu: "Vetro singolo, alluminio", double_no_break: "Doppio vetro, alluminio senza taglio termico", double_thermal: "Doppio vetro con taglio termico", triple: "Triplo vetro o più recente" } },
 q_hygrometer: { label: "Ha un igrometro?", options: { below_60: "Sì lettura sotto il 60%", "60_70": "Sì 60 70%", "70_80": "Sì 70 80%", above_80: "Sì sopra l'80%", no_hygro: "No" } },
 q_moldHistory: { label: "Ha visto muffa negli ultimi 12 mesi?", options: { none: "No", small_nonporous: "Sì, piccola area su superficie non porosa", large_porous: "Sì, area più grande o superficie porosa", recurrent: "Sì, ricomparsa dopo la pulizia" } },
 q_odour: { label: "Odore di muffa senza muffa visibile?", options: { none: "No", occasional: "Occasionalmente", regular: "Sì, regolarmente", strong: "Sì, forte e persistente" } },
 q_waterEvents: { label: "Eventi d'acqua negli ultimi 3 anni?", options: { none: "Nessuno", minor: "Minore piccola perdita, riparata", moderate: "Moderato allagamento o perdita significativa", major: "Grave allagamento con esposizione prolungata" } },
 q_bathroomVent: { label: "Ventilazione del bagno", options: { window_only: "Solo finestra", extractor_out: "Estrattore che espelle all'esterno", extractor_unk: "Estrattore non so dove espelle", no_vent: "Nessuna ventilazione" } },
 q_kitchenVent: { label: "Ventilazione della cucina", options: { window_only: "Solo finestra", recirculation: "Cappa a ricircolo", extraction: "Cappa aspirante (espelle all'esterno)" } },
 q_laundryDrying: { label: "Asciugatura del bucato", options: { always_outside: "Sempre all'esterno", mostly_outside: "Principalmente all'esterno", sometimes_in: "A volte all'interno", usually_in: "Di solito all'interno" } },
 q_heating: { label: "Riscaldamento in inverno", options: { always_18: "Sempre riscaldato a 18°C+", most_days: "Riscaldato la maggior parte dei giorni", occasional: "Riscaldato occasionalmente", rarely: "Raramente o mai" } },
 q_occupants: { label: "Numero di occupanti", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
 es: {
 q_buildingType: { label: "Tipo de edificio", options: { apartment_block: "Apartamento en bloque", detached: "Casa independiente", semi_detached: "Casa adosada", ground_floor_apt: "Apartamento en planta baja", top_floor_apt: "Apartamento en el último piso" } },
 q_constructionYear: { label: "Año de construcción", options: { before_1960: "Antes de 1960", "1960_1980": "1960 1980", "1980_2000": "1980 2000", "2000_2015": "2000 2015", after_2015: "Después de 2015" } },
 q_location: { label: "Ubicación", options: { lisbon: "Área de Lisboa", porto: "Área de Oporto", algarve: "Algarve", interior: "Interior", islands: "Islas (Azores/Madeira)" } },
 q_floorLevel: { label: "Planta", options: { ground: "Planta baja", first_third: "1.ª 3.ª planta", fourth_plus: "4.ª planta o superior", top_floor: "Último piso", only_floor: "Planta única" } },
 q_windowType: { label: "Tipo de ventanas", options: { single_alu: "Vidrio simple, aluminio", double_no_break: "Doble vidrio, aluminio sin rotura de puente térmico", double_thermal: "Doble vidrio con rotura de puente térmico", triple: "Triple vidrio o más reciente" } },
 q_hygrometer: { label: "¿Tiene higrómetro?", options: { below_60: "Sí lectura por debajo del 60%", "60_70": "Sí 60 70%", "70_80": "Sí 70 80%", above_80: "Sí por encima del 80%", no_hygro: "No" } },
 q_moldHistory: { label: "¿Ha visto moho en los últimos 12 meses?", options: { none: "No", small_nonporous: "Sí, área pequeña en superficie no porosa", large_porous: "Sí, área mayor o superficie porosa", recurrent: "Sí, volvió después de limpiar" } },
 q_odour: { label: "¿Olor a humedad sin moho visible?", options: { none: "No", occasional: "Ocasionalmente", regular: "Sí, regularmente", strong: "Sí, fuerte y persistente" } },
 q_waterEvents: { label: "¿Incidentes de agua en los últimos 3 años?", options: { none: "Ninguno", minor: "Menor pequeña fuga, reparada", moderate: "Moderado inundación o fuga significativa", major: "Grave inundación con exposición prolongada" } },
 q_bathroomVent: { label: "Ventilación del baño", options: { window_only: "Solo ventana", extractor_out: "Extractor que expulsa al exterior", extractor_unk: "Extractor no sé adónde expulsa", no_vent: "Sin ventilación" } },
 q_kitchenVent: { label: "Ventilación de la cocina", options: { window_only: "Solo ventana", recirculation: "Campana de recirculación", extraction: "Campana extractora (expulsa al exterior)" } },
 q_laundryDrying: { label: "Secado de ropa", options: { always_outside: "Siempre en el exterior", mostly_outside: "Principalmente en el exterior", sometimes_in: "A veces en el interior", usually_in: "Habitualmente en el interior" } },
 q_heating: { label: "Calefacción en invierno", options: { always_18: "Siempre calefaccionado a 18°C+", most_days: "Calefaccionado la mayoría de los días", occasional: "Calefaccionado ocasionalmente", rarely: "Raramente o nunca" } },
 q_occupants: { label: "Número de ocupantes", options: { one: "1", two: "2", three_four: "3 4", five_plus: "5+" } },
 },
};

// ---------------------------------------------------------------------------
// Checklist item strings per locale
// ---------------------------------------------------------------------------

const CHECKLIST_STRINGS: Record<ActiveLocale, CLMap> = {
 pt: {
 cl_skirting: "Verificar rodapés e paredes inferiores quanto a manchas de humidade",
 cl_lower_walls: "Inspecionar paredes abaixo de 50 cm quanto a eflorescências ou descoloração",
 cl_ceiling: "Verificar teto e cantos superiores quanto a manchas de humidade",
 cl_behind_furniture: "Mover móveis encostados a paredes exteriores e verificar atrás",
 cl_window_frames: "Inspecionar caixilhos de janelas e peitoris quanto a condensação e bolor",
 cl_bathroom_ceiling: "Verificar teto da casa de banho e cantos quanto a bolor",
 cl_grout: "Inspecionar juntas de azulejos e silicone quanto a bolor negro",
 cl_extractor: "Testar extrator da casa de banho verificar se expulsa para o exterior",
 cl_kitchen_ceiling: "Verificar teto da cozinha e área acima do fogão",
 cl_condensation_windows: "Registar condensação nas janelas de manhã durante o inverno",
 cl_hidden_water: "Verificar sob lavatórios, atrás de eletrodomésticos e em tectos falsos",
 cl_porous_materials: "Inspecionar materiais porosos (gesso, madeira, tecidos) quanto a manchas",
 cl_moisture_meter: "Usar medidor de humidade em paredes suspeitas",
 cl_ventilation_check: "Avaliar fluxo de ar em todas as divisões verificar entradas e saídas",
 cl_thermal_bridge: "Identificar pontes térmicas cantos frios, paredes exteriores",
 cl_roof_terrace: "Inspecionar terraço ou telhado quanto a drenagem e impermeabilização",
 cl_basement_floor: "Verificar pavimento e paredes da cave quanto a humidade ascendente",
 cl_wardrobe_back: "Verificar interior e fundo de armários encostados a paredes exteriores",
 cl_professional_assessment: "Considerar avaliação profissional independente com medidor de humidade",
 cl_monitoring: "Instalar higrómetro e monitorizar humidade semanalmente",
 },
 en: {
 cl_skirting: "Check skirting boards and lower walls for damp staining",
 cl_lower_walls: "Inspect walls below 50 cm for efflorescence or discolouration",
 cl_ceiling: "Check ceiling and upper corners for moisture staining",
 cl_behind_furniture: "Move furniture away from external walls and check behind",
 cl_window_frames: "Inspect window frames and sills for condensation and mold",
 cl_bathroom_ceiling: "Check bathroom ceiling and corners for mold",
 cl_grout: "Inspect tile grout and silicone sealant for black mold",
 cl_extractor: "Test bathroom extractor verify it exhausts outside",
 cl_kitchen_ceiling: "Check kitchen ceiling and area above the hob",
 cl_condensation_windows: "Record window condensation in the morning during winter",
 cl_hidden_water: "Check under sinks, behind appliances and in false ceilings",
 cl_porous_materials: "Inspect porous materials (plaster, wood, fabrics) for staining",
 cl_moisture_meter: "Use a moisture meter on suspect walls",
 cl_ventilation_check: "Assess airflow in all rooms check inlets and outlets",
 cl_thermal_bridge: "Identify thermal bridges cold corners, external walls",
 cl_roof_terrace: "Inspect roof or terrace for drainage and waterproofing",
 cl_basement_floor: "Check basement floor and walls for rising damp",
 cl_wardrobe_back: "Check inside and back of wardrobes against external walls",
 cl_professional_assessment: "Consider independent professional assessment with moisture meter",
 cl_monitoring: "Install a hygrometer and monitor humidity weekly",
 },
 fr: {
 cl_skirting: "Vérifier les plinthes et les murs inférieurs pour des taches d'humidité",
 cl_lower_walls: "Inspecter les murs en dessous de 50 cm pour des efflorescences ou décolorations",
 cl_ceiling: "Vérifier le plafond et les coins supérieurs pour des taches d'humidité",
 cl_behind_furniture: "Déplacer les meubles des murs extérieurs et vérifier derrière",
 cl_window_frames: "Inspecter les cadres de fenêtres et les rebords pour condensation et moisissures",
 cl_bathroom_ceiling: "Vérifier le plafond et les coins de la salle de bain pour des moisissures",
 cl_grout: "Inspecter les joints de carrelage et le silicone pour des moisissures noires",
 cl_extractor: "Tester l'extracteur de la salle de bain vérifier qu'il évacue vers l'extérieur",
 cl_kitchen_ceiling: "Vérifier le plafond de la cuisine et la zone au-dessus de la cuisinière",
 cl_condensation_windows: "Noter la condensation sur les fenêtres le matin en hiver",
 cl_hidden_water: "Vérifier sous les éviers, derrière les appareils et dans les faux plafonds",
 cl_porous_materials: "Inspecter les matériaux poreux (plâtre, bois, tissus) pour des taches",
 cl_moisture_meter: "Utiliser un hygromètre sur les murs suspects",
 cl_ventilation_check: "Évaluer la circulation d'air dans toutes les pièces",
 cl_thermal_bridge: "Identifier les ponts thermiques coins froids, murs extérieurs",
 cl_roof_terrace: "Inspecter le toit ou la terrasse pour le drainage et l'étanchéité",
 cl_basement_floor: "Vérifier le sol et les murs du sous-sol pour l'humidité ascendante",
 cl_wardrobe_back: "Vérifier l'intérieur et le fond des armoires contre les murs extérieurs",
 cl_professional_assessment: "Envisager une évaluation professionnelle indépendante",
 cl_monitoring: "Installer un hygromètre et surveiller l'humidité chaque semaine",
 },
 de: {
 cl_skirting: "Sockelleisten und untere Wände auf Feuchtigkeitsflecken prüfen",
 cl_lower_walls: "Wände unter 50 cm auf Ausblühungen oder Verfärbungen untersuchen",
 cl_ceiling: "Decke und obere Ecken auf Feuchtigkeitsflecken prüfen",
 cl_behind_furniture: "Möbel von Außenwänden wegbewegen und dahinter prüfen",
 cl_window_frames: "Fensterrahmen und -bänke auf Kondensation und Schimmel untersuchen",
 cl_bathroom_ceiling: "Badezimmerdecke und -ecken auf Schimmel prüfen",
 cl_grout: "Fliesenfugen und Silikondichtungen auf schwarzen Schimmel untersuchen",
 cl_extractor: "Badezimmerventilator testen prüfen ob er nach außen entlüftet",
 cl_kitchen_ceiling: "Küchendecke und Bereich über dem Herd prüfen",
 cl_condensation_windows: "Fensterkondensation morgens im Winter notieren",
 cl_hidden_water: "Unter Waschbecken, hinter Geräten und in Zwischendecken prüfen",
 cl_porous_materials: "Poröse Materialien (Putz, Holz, Stoffe) auf Flecken untersuchen",
 cl_moisture_meter: "Feuchtigkeitsmesser an verdächtigen Wänden einsetzen",
 cl_ventilation_check: "Luftzirkulation in allen Räumen bewerten",
 cl_thermal_bridge: "Wärmebrücken identifizieren kalte Ecken, Außenwände",
 cl_roof_terrace: "Dach oder Terrasse auf Entwässerung und Abdichtung prüfen",
 cl_basement_floor: "Kellerboden und -wände auf aufsteigende Feuchtigkeit prüfen",
 cl_wardrobe_back: "Innenseite und Rückwand von Schränken an Außenwänden prüfen",
 cl_professional_assessment: "Unabhängige professionelle Begutachtung in Betracht ziehen",
 cl_monitoring: "Hygrometer installieren und Luftfeuchtigkeit wöchentlich überwachen",
 },
 nl: {
 cl_skirting: "Controleer plinten en onderste muren op vochtplekken",
 cl_lower_walls: "Inspecteer muren onder 50 cm op uitbloeiingen of verkleuring",
 cl_ceiling: "Controleer plafond en bovenste hoeken op vochtplekken",
 cl_behind_furniture: "Verplaats meubels van buitenmuren en controleer erachter",
 cl_window_frames: "Inspecteer raamkozijnen en vensterbanken op condensatie en schimmel",
 cl_bathroom_ceiling: "Controleer badkamerplafond en -hoeken op schimmel",
 cl_grout: "Inspecteer tegelvoegen en siliconenkit op zwarte schimmel",
 cl_extractor: "Test badkamerventilator controleer of hij naar buiten afvoert",
 cl_kitchen_ceiling: "Controleer keukenplafond en gebied boven het fornuis",
 cl_condensation_windows: "Noteer raamcondensatie 's ochtends in de winter",
 cl_hidden_water: "Controleer onder gootstenen, achter apparaten en in verlaagde plafonds",
 cl_porous_materials: "Inspecteer poreuze materialen (pleister, hout, stoffen) op vlekken",
 cl_moisture_meter: "Gebruik een vochtmeter op verdachte muren",
 cl_ventilation_check: "Beoordeel luchtcirculatie in alle kamers",
 cl_thermal_bridge: "Identificeer koudebruggen koude hoeken, buitenmuren",
 cl_roof_terrace: "Inspecteer dak of terras op afwatering en waterdichting",
 cl_basement_floor: "Controleer keldervloer en -muren op opstijgend vocht",
 cl_wardrobe_back: "Controleer binnenkant en achterkant van kasten tegen buitenmuren",
 cl_professional_assessment: "Overweeg een onafhankelijke professionele beoordeling",
 cl_monitoring: "Installeer een hygrometer en monitor de luchtvochtigheid wekelijks",
 },
 it: {
 cl_skirting: "Controllare battiscopa e pareti inferiori per macchie di umidità",
 cl_lower_walls: "Ispezionare le pareti sotto i 50 cm per efflorescenze o scolorimenti",
 cl_ceiling: "Controllare soffitto e angoli superiori per macchie di umidità",
 cl_behind_furniture: "Spostare i mobili dalle pareti esterne e controllare dietro",
 cl_window_frames: "Ispezionare telai e davanzali delle finestre per condensa e muffa",
 cl_bathroom_ceiling: "Controllare soffitto e angoli del bagno per la muffa",
 cl_grout: "Ispezionare le fughe delle piastrelle e il silicone per muffa nera",
 cl_extractor: "Testare l'estrattore del bagno verificare che espella all'esterno",
 cl_kitchen_ceiling: "Controllare il soffitto della cucina e l'area sopra i fornelli",
 cl_condensation_windows: "Registrare la condensa sulle finestre al mattino in inverno",
 cl_hidden_water: "Controllare sotto i lavandini, dietro gli elettrodomestici e nei controsoffitti",
 cl_porous_materials: "Ispezionare i materiali porosi (intonaco, legno, tessuti) per macchie",
 cl_moisture_meter: "Usare un misuratore di umidità sulle pareti sospette",
 cl_ventilation_check: "Valutare il flusso d'aria in tutti i locali",
 cl_thermal_bridge: "Identificare i ponti termici angoli freddi, pareti esterne",
 cl_roof_terrace: "Ispezionare il tetto o la terrazza per drenaggio e impermeabilizzazione",
 cl_basement_floor: "Controllare pavimento e pareti del seminterrato per umidità di risalita",
 cl_wardrobe_back: "Controllare l'interno e il retro degli armadi contro le pareti esterne",
 cl_professional_assessment: "Considerare una valutazione professionale indipendente",
 cl_monitoring: "Installare un igrometro e monitorare l'umidità settimanalmente",
 },
 es: {
 cl_skirting: "Revisar rodapiés y paredes inferiores en busca de manchas de humedad",
 cl_lower_walls: "Inspeccionar paredes por debajo de 50 cm en busca de eflorescencias o decoloración",
 cl_ceiling: "Revisar el techo y las esquinas superiores en busca de manchas de humedad",
 cl_behind_furniture: "Mover muebles de las paredes exteriores y revisar detrás",
 cl_window_frames: "Inspeccionar marcos de ventanas y alféizares en busca de condensación y moho",
 cl_bathroom_ceiling: "Revisar el techo y las esquinas del baño en busca de moho",
 cl_grout: "Inspeccionar las juntas de azulejos y el sellador de silicona en busca de moho negro",
 cl_extractor: "Probar el extractor del baño verificar que expulsa al exterior",
 cl_kitchen_ceiling: "Revisar el techo de la cocina y el área sobre los fogones",
 cl_condensation_windows: "Registrar la condensación en las ventanas por la mañana en invierno",
 cl_hidden_water: "Revisar bajo los fregaderos, detrás de los electrodomésticos y en los falsos techos",
 cl_porous_materials: "Inspeccionar materiales porosos (yeso, madera, telas) en busca de manchas",
 cl_moisture_meter: "Usar un medidor de humedad en paredes sospechosas",
 cl_ventilation_check: "Evaluar el flujo de aire en todas las habitaciones",
 cl_thermal_bridge: "Identificar puentes térmicos esquinas frías, paredes exteriores",
 cl_roof_terrace: "Inspeccionar el tejado o la terraza en busca de drenaje e impermeabilización",
 cl_basement_floor: "Revisar el suelo y las paredes del sótano en busca de humedad ascendente",
 cl_wardrobe_back: "Revisar el interior y la parte trasera de los armarios contra las paredes exteriores",
 cl_professional_assessment: "Considerar una evaluación profesional independiente",
 cl_monitoring: "Instalar un higrómetro y monitorizar la humedad semanalmente",
 },
};

// ---------------------------------------------------------------------------
// Risk factor strings per locale
// ---------------------------------------------------------------------------

const RISK_FACTOR_STRINGS: Record<ActiveLocale, RFMap> = {
 pt: {
 high_humidity: { title: "Humidade interior elevada", description: "Leitura do higrómetro acima de 70% zona de risco ativo para bolor." },
 recurrent_mold: { title: "Bolor recorrente após limpeza", description: "O bolor que regressa indica uma fonte de humidade não resolvida." },
 water_event: { title: "Evento de água significativo", description: "Inundação ou fuga grave aumenta o risco de danos ocultos." },
 no_bathroom_vent: { title: "Sem ventilação na casa de banho", description: "A humidade do banho fica retida sem extração adequada." },
 thermal_bridge_windows: { title: "Risco de ponte térmica nas janelas", description: "Vidro simples em alumínio cria superfícies frias onde condensa." },
 old_building: { title: "Edifício antigo sem isolamento", description: "Construção anterior a 1980 raramente tem isolamento adequado." },
 musty_odour: { title: "Cheiro a mofo persistente", description: "Odor forte sem bolor visível pode indicar crescimento oculto." },
 indoor_laundry: { title: "Secagem de roupa no interior", description: "Adiciona humidade significativa ao ar interior." },
 poor_heating: { title: "Aquecimento insuficiente", description: "Espaços frios favorecem a condensação nas superfícies." },
 ground_floor: { title: "Rés-do-chão ou cave", description: "Maior exposição à humidade ascendente do solo." },
 },
 en: {
 high_humidity: { title: "High indoor humidity", description: "Hygrometer reading above 70% active mold risk zone." },
 recurrent_mold: { title: "Recurrent mold after cleaning", description: "Mold that returns indicates an unresolved moisture source." },
 water_event: { title: "Significant water event", description: "Flooding or major leak increases risk of hidden damage." },
 no_bathroom_vent: { title: "No bathroom ventilation", description: "Shower humidity is trapped without adequate extraction." },
 thermal_bridge_windows: { title: "Thermal bridge window risk", description: "Single aluminium glazing creates cold surfaces where condensation forms." },
 old_building: { title: "Older building without insulation", description: "Pre-1980 construction rarely has adequate insulation." },
 musty_odour: { title: "Persistent musty odour", description: "Strong smell without visible mold may indicate hidden growth." },
 indoor_laundry: { title: "Indoor laundry drying", description: "Adds significant moisture to indoor air." },
 poor_heating: { title: "Insufficient heating", description: "Cold spaces encourage condensation on surfaces." },
 ground_floor: { title: "Ground floor or basement", description: "Greater exposure to rising damp from the ground." },
 },
 fr: {
 high_humidity: { title: "Humidité intérieure élevée", description: "Lecture de l'hygromètre supérieure à 70 % zone de risque actif." },
 recurrent_mold: { title: "Moisissures récurrentes après nettoyage", description: "Des moisissures qui reviennent indiquent une source d'humidité non résolue." },
 water_event: { title: "Événement hydrique significatif", description: "Une inondation ou une fuite majeure augmente le risque de dommages cachés." },
 no_bathroom_vent: { title: "Pas de ventilation dans la salle de bain", description: "L'humidité de la douche reste piégée sans extraction adéquate." },
 thermal_bridge_windows: { title: "Risque de pont thermique aux fenêtres", description: "Le simple vitrage en aluminium crée des surfaces froides où la condensation se forme." },
 old_building: { title: "Bâtiment ancien sans isolation", description: "Les constructions antérieures à 1980 ont rarement une isolation adéquate." },
 musty_odour: { title: "Odeur de moisi persistante", description: "Une forte odeur sans moisissures visibles peut indiquer une croissance cachée." },
 indoor_laundry: { title: "Séchage du linge à l'intérieur", description: "Ajoute une humidité significative à l'air intérieur." },
 poor_heating: { title: "Chauffage insuffisant", description: "Les espaces froids favorisent la condensation sur les surfaces." },
 ground_floor: { title: "Rez-de-chaussée ou sous-sol", description: "Plus grande exposition à l'humidité ascendante du sol." },
 },
 de: {
 high_humidity: { title: "Hohe Innenraumfeuchtigkeit", description: "Hygrometerwert über 70 % aktive Schimmelrisikozone." },
 recurrent_mold: { title: "Wiederkehrender Schimmel nach Reinigung", description: "Schimmel, der zurückkommt, weist auf eine ungelöste Feuchtigkeitsquelle hin." },
 water_event: { title: "Erheblicher Wasserschaden", description: "Überschwemmung oder größerer Leck erhöht das Risiko versteckter Schäden." },
 no_bathroom_vent: { title: "Keine Badezimmerbelüftung", description: "Duschfeuchtigkeit bleibt ohne ausreichende Absaugung eingeschlossen." },
 thermal_bridge_windows: { title: "Wärmebrückenrisiko bei Fenstern", description: "Einfachverglasung aus Aluminium erzeugt kalte Oberflächen, auf denen Kondensation entsteht." },
 old_building: { title: "Älteres Gebäude ohne Dämmung", description: "Gebäude vor 1980 haben selten eine ausreichende Dämmung." },
 musty_odour: { title: "Anhaltender muffiger Geruch", description: "Starker Geruch ohne sichtbaren Schimmel kann auf verstecktes Wachstum hinweisen." },
 indoor_laundry: { title: "Wäschetrocknung im Innenraum", description: "Fügt der Innenraumluft erhebliche Feuchtigkeit hinzu." },
 poor_heating: { title: "Unzureichende Heizung", description: "Kalte Räume begünstigen Kondensation auf Oberflächen." },
 ground_floor: { title: "Erdgeschoss oder Keller", description: "Größere Exposition gegenüber aufsteigender Feuchtigkeit aus dem Boden." },
 },
 nl: {
 high_humidity: { title: "Hoge binnenluchtvochtigkeit", description: "Hygrometerlectuur boven 70% actieve schimmelrisicozone." },
 recurrent_mold: { title: "Terugkerende schimmel na schoonmaken", description: "Schimmel die terugkomt wijst op een onopgeloste vochtbron." },
 water_event: { title: "Significant waterincident", description: "Overstroming of grote lekkage vergroot het risico op verborgen schade." },
 no_bathroom_vent: { title: "Geen badkamerventilatie", description: "Douchelucht blijft gevangen zonder adequate afzuiging." },
 thermal_bridge_windows: { title: "Koudebrug risicovensters", description: "Enkel aluminium glas creëert koude oppervlakken waar condensatie ontstaat." },
 old_building: { title: "Ouder gebouw zonder isolatie", description: "Gebouwen van voor 1980 hebben zelden adequate isolatie." },
 musty_odour: { title: "Aanhoudende muffe geur", description: "Sterke geur zonder zichtbare schimmel kan wijzen op verborgen groei." },
 indoor_laundry: { title: "Was binnenshuis drogen", description: "Voegt aanzienlijk vocht toe aan de binnenlucht." },
 poor_heating: { title: "Onvoldoende verwarming", description: "Koude ruimtes bevorderen condensatie op oppervlakken." },
 ground_floor: { title: "Begane grond of kelder", description: "Grotere blootstelling aan opstijgend vocht uit de grond." },
 },
 it: {
 high_humidity: { title: "Umidità interna elevata", description: "Lettura dell'igrometro superiore al 70% zona di rischio attivo per la muffa." },
 recurrent_mold: { title: "Muffa ricorrente dopo la pulizia", description: "La muffa che ritorna indica una fonte di umidità non risolta." },
 water_event: { title: "Evento idrico significativo", description: "Un'inondazione o una perdita grave aumenta il rischio di danni nascosti." },
 no_bathroom_vent: { title: "Nessuna ventilazione nel bagno", description: "L'umidità della doccia rimane intrappolata senza un'estrazione adeguata." },
 thermal_bridge_windows: { title: "Rischio di ponte termico alle finestre", description: "Il vetro singolo in alluminio crea superfici fredde dove si forma la condensa." },
 old_building: { title: "Edificio vecchio senza isolamento", description: "Le costruzioni precedenti al 1980 raramente hanno un isolamento adeguato." },
 musty_odour: { title: "Odore di muffa persistente", description: "Un odore forte senza muffa visibile può indicare una crescita nascosta." },
 indoor_laundry: { title: "Asciugatura del bucato all'interno", description: "Aggiunge umidità significativa all'aria interna." },
 poor_heating: { title: "Riscaldamento insufficiente", description: "Gli spazi freddi favoriscono la condensa sulle superfici." },
 ground_floor: { title: "Piano terra o seminterrato", description: "Maggiore esposizione all'umidità di risalita dal suolo." },
 },
 es: {
 high_humidity: { title: "Humedad interior elevada", description: "Lectura del higrómetro por encima del 70% zona de riesgo activo de moho." },
 recurrent_mold: { title: "Moho recurrente después de limpiar", description: "El moho que vuelve indica una fuente de humedad no resuelta." },
 water_event: { title: "Incidente de agua significativo", description: "Una inundación o fuga grave aumenta el riesgo de daños ocultos." },
 no_bathroom_vent: { title: "Sin ventilación en el baño", description: "La humedad de la ducha queda atrapada sin extracción adecuada." },
 thermal_bridge_windows: { title: "Riesgo de puente térmico en ventanas", description: "El vidrio simple de aluminio crea superficies frías donde se forma condensación." },
 old_building: { title: "Edificio antiguo sin aislamiento", description: "Las construcciones anteriores a 1980 raramente tienen aislamiento adecuado." },
 musty_odour: { title: "Olor a humedad persistente", description: "Un olor fuerte sin moho visible puede indicar crecimiento oculto." },
 indoor_laundry: { title: "Secado de ropa en el interior", description: "Añade humedad significativa al aire interior." },
 poor_heating: { title: "Calefacción insuficiente", description: "Los espacios fríos favorecen la condensación en las superficies." },
 ground_floor: { title: "Planta baja o sótano", description: "Mayor exposición a la humedad ascendente del suelo." },
 },
};

// ---------------------------------------------------------------------------
// UI strings per locale
// ---------------------------------------------------------------------------

interface UIStrings {
 pageEyebrow: string;
 pageTitle: string;
 pageIntro: string;
 pageMeta: string;
 startCta: string;
 section1Title: string;
 section2Title: string;
 section3Title: string;
 calculateButton: string;
 resetButton: string;
 resultTitle: string;
 scoreLabel: string;
 bandLabels: Record<RiskBand, string>;
 profileLabel: string;
 factorsLabel: string;
 nextStepsLabel: string;
 checklistLabel: string;
 ctaPrimary: Record<RiskBand, { label: string }>;
 ctaSecondary: Record<RiskBand, { label: string }>;
 shareLabel: string;
 shareCopied: string;
 previousResultLabel: string;
 previousResultCta: string;
 previousResultDismiss: string;
 validationError: string;
}

const UI_STRINGS: Record<ActiveLocale, UIStrings> = {
 pt: {
 pageEyebrow: "FERRAMENTA GRATUITA",
 pageTitle: "Calculadora de Risco de Humidade",
 pageIntro: "Responda a 14 perguntas sobre o seu edifício, condições atuais e estilo de vida. Obtenha uma pontuação de risco personalizada, os fatores-chave identificados e uma lista de verificação prioritária sem registo, sem email.",
 pageMeta: "Avalie o risco de humidade e bolor na sua casa com esta calculadora gratuita. Resultado imediato, sem registo.",
 startCta: "Iniciar avaliação gratuita",
 section1Title: "Secção 1: O edifício",
 section2Title: "Secção 2: Condições atuais",
 section3Title: "Secção 3: Estilo de vida",
 calculateButton: "Ver o meu resultado",
 resetButton: "Recomeçar",
 resultTitle: "O seu resultado",
 scoreLabel: "Pontuação de risco",
 bandLabels: { low: "Risco baixo", moderate: "Risco moderado", high: "Risco elevado", critical: "Risco crítico" },
 profileLabel: "O seu perfil de risco",
 factorsLabel: "Fatores de risco identificados",
 nextStepsLabel: "O que fazer a seguir",
 checklistLabel: "Prioridades da sua lista de verificação",
 ctaPrimary: { low: { label: "Descarregar a lista de verificação gratuita de 20 pontos" }, moderate: { label: "Descarregar lista de verificação + ler: o que causa bolor" }, high: { label: "Agendar uma inspecção independente" }, critical: { label: "Agendar uma inspecção recomendamos o mais cedo possível" } },
 ctaSecondary: { low: { label: "Ler: a sua casa está a afetar a sua saúde?" }, moderate: { label: "Considerar uma inspecção independente" }, high: { label: "Descarregar lista de verificação" }, critical: { label: "Descarregar lista de verificação" } },
 shareLabel: "Partilhar resultado",
 shareCopied: "Ligação copiada!",
 previousResultLabel: "Tem um resultado anterior guardado.",
 previousResultCta: "Restaurar",
 previousResultDismiss: "Ignorar",
 validationError: "Por favor, responda a todas as perguntas antes de continuar.",
 },
 en: {
 pageEyebrow: "FREE TOOL",
 pageTitle: "Humidity Risk Calculator",
 pageIntro: "Answer 14 questions about your building, current conditions and lifestyle. Get a personalised risk score, key factors identified and a priority checklist no registration, no email required.",
 pageMeta: "Assess the humidity and mold risk in your home with this free calculator. Instant result, no registration.",
 startCta: "Start free assessment",
 section1Title: "Section 1: The building",
 section2Title: "Section 2: Current conditions",
 section3Title: "Section 3: Lifestyle",
 calculateButton: "See my result",
 resetButton: "Start again",
 resultTitle: "Your result",
 scoreLabel: "Risk score",
 bandLabels: { low: "Low risk", moderate: "Moderate risk", high: "High risk", critical: "Critical risk" },
 profileLabel: "Your risk profile",
 factorsLabel: "Risk factors identified",
 nextStepsLabel: "What to do next",
 checklistLabel: "Your checklist priorities",
 ctaPrimary: { low: { label: "Download the free 20-point checklist" }, moderate: { label: "Download checklist + read: what causes mold" }, high: { label: "Book an independent inspection" }, critical: { label: "Book an inspection we recommend sooner rather than later" } },
 ctaSecondary: { low: { label: "Read: is your home affecting your health?" }, moderate: { label: "Consider an independent inspection" }, high: { label: "Download checklist" }, critical: { label: "Download checklist" } },
 shareLabel: "Share result",
 shareCopied: "Link copied!",
 previousResultLabel: "You have a saved result from a previous session.",
 previousResultCta: "Restore",
 previousResultDismiss: "Dismiss",
 validationError: "Please answer all questions before continuing.",
 },
 fr: {
 pageEyebrow: "OUTIL GRATUIT",
 pageTitle: "Calculateur de risque d'humidité",
 pageIntro: "Répondez à 14 questions sur votre bâtiment, les conditions actuelles et votre mode de vie. Obtenez un score de risque personnalisé, les facteurs clés identifiés et une liste de contrôle prioritaire sans inscription, sans email.",
 pageMeta: "Évaluez le risque d'humidité et de moisissures dans votre logement avec ce calculateur gratuit. Résultat immédiat, sans inscription.",
 startCta: "Commencer l'évaluation gratuite",
 section1Title: "Section 1 : Le bâtiment",
 section2Title: "Section 2 : Conditions actuelles",
 section3Title: "Section 3 : Mode de vie",
 calculateButton: "Voir mon résultat",
 resetButton: "Recommencer",
 resultTitle: "Votre résultat",
 scoreLabel: "Score de risque",
 bandLabels: { low: "Risque faible", moderate: "Risque modéré", high: "Risque élevé", critical: "Risque critique" },
 profileLabel: "Votre profil de risque",
 factorsLabel: "Facteurs de risque identifiés",
 nextStepsLabel: "Que faire ensuite",
 checklistLabel: "Vos priorités de liste de contrôle",
 ctaPrimary: { low: { label: "Télécharger la liste de contrôle gratuite de 20 points" }, moderate: { label: "Télécharger la liste + lire : ce qui cause les moisissures" }, high: { label: "Réserver une inspection indépendante" }, critical: { label: "Réserver une inspection nous recommandons le plus tôt possible" } },
 ctaSecondary: { low: { label: "Lire : votre logement affecte-t-il votre santé ?" }, moderate: { label: "Envisager une inspection indépendante" }, high: { label: "Télécharger la liste de contrôle" }, critical: { label: "Télécharger la liste de contrôle" } },
 shareLabel: "Partager le résultat",
 shareCopied: "Lien copié !",
 previousResultLabel: "Vous avez un résultat enregistré d'une session précédente.",
 previousResultCta: "Restaurer",
 previousResultDismiss: "Ignorer",
 validationError: "Veuillez répondre à toutes les questions avant de continuer.",
 },
 de: {
 pageEyebrow: "KOSTENLOSES TOOL",
 pageTitle: "Feuchtigkeitsrisiko-Rechner",
 pageIntro: "Beantworten Sie 14 Fragen zu Ihrem Gebäude, den aktuellen Bedingungen und Ihrem Lebensstil. Erhalten Sie eine personalisierte Risikobewertung, identifizierte Schlüsselfaktoren und eine priorisierte Checkliste ohne Registrierung, ohne E-Mail.",
 pageMeta: "Bewerten Sie das Feuchtigkeits- und Schimmelrisiko in Ihrer Wohnung mit diesem kostenlosen Rechner. Sofortiges Ergebnis, keine Registrierung.",
 startCta: "Kostenlose Bewertung starten",
 section1Title: "Abschnitt 1: Das Gebäude",
 section2Title: "Abschnitt 2: Aktuelle Bedingungen",
 section3Title: "Abschnitt 3: Lebensstil",
 calculateButton: "Mein Ergebnis anzeigen",
 resetButton: "Neu starten",
 resultTitle: "Ihr Ergebnis",
 scoreLabel: "Risikobewertung",
 bandLabels: { low: "Geringes Risiko", moderate: "Mittleres Risiko", high: "Hohes Risiko", critical: "Kritisches Risiko" },
 profileLabel: "Ihr Risikoprofil",
 factorsLabel: "Identifizierte Risikofaktoren",
 nextStepsLabel: "Was als Nächstes zu tun ist",
 checklistLabel: "Ihre Checklisten-Prioritäten",
 ctaPrimary: { low: { label: "Kostenlose 20-Punkte-Checkliste herunterladen" }, moderate: { label: "Checkliste herunterladen + lesen: Was verursacht Schimmel" }, high: { label: "Unabhängige Inspektion buchen" }, critical: { label: "Inspektion buchen wir empfehlen so bald wie möglich" } },
 ctaSecondary: { low: { label: "Lesen: Beeinflusst Ihre Wohnung Ihre Gesundheit?" }, moderate: { label: "Unabhängige Inspektion in Betracht ziehen" }, high: { label: "Checkliste herunterladen" }, critical: { label: "Checkliste herunterladen" } },
 shareLabel: "Ergebnis teilen",
 shareCopied: "Link kopiert!",
 previousResultLabel: "Sie haben ein gespeichertes Ergebnis aus einer früheren Sitzung.",
 previousResultCta: "Wiederherstellen",
 previousResultDismiss: "Verwerfen",
 validationError: "Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.",
 },
 nl: {
 pageEyebrow: "GRATIS TOOL",
 pageTitle: "Vochtrisico Calculator",
 pageIntro: "Beantwoord 14 vragen over uw gebouw, huidige omstandigheden en levensstijl. Ontvang een gepersonaliseerde risicoscore, geïdentificeerde sleutelfactoren en een prioriteitslijst geen registratie, geen e-mail vereist.",
 pageMeta: "Beoordeel het vocht- en schimmelrisico in uw woning met deze gratis calculator. Direct resultaat, geen registratie.",
 startCta: "Gratis beoordeling starten",
 section1Title: "Sectie 1: Het gebouw",
 section2Title: "Sectie 2: Huidige omstandigheden",
 section3Title: "Sectie 3: Levensstijl",
 calculateButton: "Mijn resultaat bekijken",
 resetButton: "Opnieuw beginnen",
 resultTitle: "Uw resultaat",
 scoreLabel: "Risicoscore",
 bandLabels: { low: "Laag risico", moderate: "Matig risico", high: "Hoog risico", critical: "Kritiek risico" },
 profileLabel: "Uw risicoprofiel",
 factorsLabel: "Geïdentificeerde risicofactoren",
 nextStepsLabel: "Wat te doen",
 checklistLabel: "Uw checklistprioriteiten",
 ctaPrimary: { low: { label: "Download de gratis 20-punten checklist" }, moderate: { label: "Download checklist + lees: wat veroorzaakt schimmel" }, high: { label: "Boek een onafhankelijke inspectie" }, critical: { label: "Boek een inspectie wij raden zo snel mogelijk aan" } },
 ctaSecondary: { low: { label: "Lees: beïnvloedt uw woning uw gezondheid?" }, moderate: { label: "Overweeg een onafhankelijke inspectie" }, high: { label: "Download checklist" }, critical: { label: "Download checklist" } },
 shareLabel: "Resultaat delen",
 shareCopied: "Link gekopieerd!",
 previousResultLabel: "U heeft een opgeslagen resultaat van een vorige sessie.",
 previousResultCta: "Herstellen",
 previousResultDismiss: "Negeren",
 validationError: "Beantwoord alle vragen voordat u verdergaat.",
 },
 it: {
 pageEyebrow: "STRUMENTO GRATUITO",
 pageTitle: "Calcolatore del rischio di umidità",
 pageIntro: "Rispondi a 14 domande sul tuo edificio, le condizioni attuali e il tuo stile di vita. Ottieni un punteggio di rischio personalizzato, i fattori chiave identificati e una lista di controllo prioritaria senza registrazione, senza email.",
 pageMeta: "Valuta il rischio di umidità e muffa nella tua casa con questo calcolatore gratuito. Risultato immediato, senza registrazione.",
 startCta: "Inizia la valutazione gratuita",
 section1Title: "Sezione 1: L'edificio",
 section2Title: "Sezione 2: Condizioni attuali",
 section3Title: "Sezione 3: Stile di vita",
 calculateButton: "Vedi il mio risultato",
 resetButton: "Ricomincia",
 resultTitle: "Il tuo risultato",
 scoreLabel: "Punteggio di rischio",
 bandLabels: { low: "Rischio basso", moderate: "Rischio moderato", high: "Rischio elevato", critical: "Rischio critico" },
 profileLabel: "Il tuo profilo di rischio",
 factorsLabel: "Fattori di rischio identificati",
 nextStepsLabel: "Cosa fare dopo",
 checklistLabel: "Le tue priorità della lista di controllo",
 ctaPrimary: { low: { label: "Scarica la lista di controllo gratuita di 20 punti" }, moderate: { label: "Scarica la lista + leggi: cosa causa la muffa" }, high: { label: "Prenota un'ispezione indipendente" }, critical: { label: "Prenota un'ispezione raccomandiamo prima possibile" } },
 ctaSecondary: { low: { label: "Leggi: la tua casa influisce sulla tua salute?" }, moderate: { label: "Considera un'ispezione indipendente" }, high: { label: "Scarica la lista di controllo" }, critical: { label: "Scarica la lista di controllo" } },
 shareLabel: "Condividi risultato",
 shareCopied: "Link copiato!",
 previousResultLabel: "Hai un risultato salvato da una sessione precedente.",
 previousResultCta: "Ripristina",
 previousResultDismiss: "Ignora",
 validationError: "Rispondi a tutte le domande prima di continuare.",
 },
 es: {
 pageEyebrow: "HERRAMIENTA GRATUITA",
 pageTitle: "Calculadora de riesgo de humedad",
 pageIntro: "Responde 14 preguntas sobre tu edificio, las condiciones actuales y tu estilo de vida. Obtén una puntuación de riesgo personalizada, los factores clave identificados y una lista de verificación prioritaria sin registro, sin email.",
 pageMeta: "Evalúa el riesgo de humedad y moho en tu vivienda con esta calculadora gratuita. Resultado inmediato, sin registro.",
 startCta: "Iniciar evaluación gratuita",
 section1Title: "Sección 1: El edificio",
 section2Title: "Sección 2: Condiciones actuales",
 section3Title: "Sección 3: Estilo de vida",
 calculateButton: "Ver mi resultado",
 resetButton: "Empezar de nuevo",
 resultTitle: "Tu resultado",
 scoreLabel: "Puntuación de riesgo",
 bandLabels: { low: "Riesgo bajo", moderate: "Riesgo moderado", high: "Riesgo alto", critical: "Riesgo crítico" },
 profileLabel: "Tu perfil de riesgo",
 factorsLabel: "Factores de riesgo identificados",
 nextStepsLabel: "Qué hacer a continuación",
 checklistLabel: "Tus prioridades de lista de verificación",
 ctaPrimary: { low: { label: "Descargar la lista de verificación gratuita de 20 puntos" }, moderate: { label: "Descargar lista + leer: qué causa el moho" }, high: { label: "Reservar una inspección independiente" }, critical: { label: "Reservar una inspección recomendamos cuanto antes" } },
 ctaSecondary: { low: { label: "Leer: ¿tu vivienda afecta tu salud?" }, moderate: { label: "Considerar una inspección independiente" }, high: { label: "Descargar lista de verificación" }, critical: { label: "Descargar lista de verificación" } },
 shareLabel: "Compartir resultado",
 shareCopied: "¡Enlace copiado!",
 previousResultLabel: "Tienes un resultado guardado de una sesión anterior.",
 previousResultCta: "Restaurar",
 previousResultDismiss: "Ignorar",
 validationError: "Por favor, responde todas las preguntas antes de continuar.",
 },
};

// ---------------------------------------------------------------------------
// Profile text generation
// ---------------------------------------------------------------------------

function buildProfileText(locale: ActiveLocale, answers: Answers): string {
 const q = QUESTION_STRINGS[locale];
 const buildingOpt = q.q_buildingType?.options[answers.buildingType] ?? "";
 const yearOpt = q.q_constructionYear?.options[answers.constructionYear] ?? "";
 const locationOpt = q.q_location?.options[answers.location] ?? "";
 const hygroOpt = q.q_hygrometer?.options[answers.hygrometer] ?? "";
 const moldOpt = q.q_moldHistory?.options[answers.moldHistory] ?? "";

 const templates: Record<ActiveLocale, string> = {
 pt: `${buildingOpt} construído ${yearOpt.toLowerCase()}, na ${locationOpt}${hygroOpt ? `, com humidade ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` e histórico de bolor (${moldOpt.toLowerCase()})` : ""} este perfil combina características estruturais com sinais de alerta que merecem atenção.`,
 en: `A ${buildingOpt.toLowerCase()} built ${yearOpt.toLowerCase()}, in the ${locationOpt}${hygroOpt ? `, with humidity ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` and a mold history (${moldOpt.toLowerCase()})` : ""} this profile combines structural characteristics with warning signals that deserve attention.`,
 fr: `Un ${buildingOpt.toLowerCase()} construit ${yearOpt.toLowerCase()}, dans la ${locationOpt}${hygroOpt ? `, avec une humidité ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` et un historique de moisissures (${moldOpt.toLowerCase()})` : ""} ce profil combine des caractéristiques structurelles avec des signaux d'alerte qui méritent attention.`,
 de: `Ein ${buildingOpt.toLowerCase()}, gebaut ${yearOpt.toLowerCase()}, in der ${locationOpt}${hygroOpt ? `, mit Luftfeuchtigkeit ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` und einer Schimmelgeschichte (${moldOpt.toLowerCase()})` : ""} dieses Profil kombiniert strukturelle Merkmale mit Warnsignalen, die Aufmerksamkeit verdienen.`,
 nl: `Een ${buildingOpt.toLowerCase()} gebouwd ${yearOpt.toLowerCase()}, in de ${locationOpt}${hygroOpt ? `, met luchtvochtigheid ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` en een schimmelgeschiedenis (${moldOpt.toLowerCase()})` : ""} dit profiel combineert structurele kenmerken met waarschuwingssignalen die aandacht verdienen.`,
 it: `Un ${buildingOpt.toLowerCase()} costruito ${yearOpt.toLowerCase()}, nella ${locationOpt}${hygroOpt ? `, con umidità ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` e una storia di muffa (${moldOpt.toLowerCase()})` : ""} questo profilo combina caratteristiche strutturali con segnali di allerta che meritano attenzione.`,
 es: `Un ${buildingOpt.toLowerCase()} construido ${yearOpt.toLowerCase()}, en la ${locationOpt}${hygroOpt ? `, con humedad ${hygroOpt.toLowerCase()}` : ""}${moldOpt && answers.moldHistory !== "none" ? ` e historial de moho (${moldOpt.toLowerCase()})` : ""} este perfil combina características estructurales con señales de alerta que merecen atención.`,
 };

 return templates[locale] ?? templates.en;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function getCalcI18n(locale: ActiveLocale): CalcI18n {
 const ui = UI_STRINGS[locale];
 const questions = buildQuestions(locale);
 const checklistItems = CHECKLIST_STRINGS[locale];
 const riskFactorLabels = RISK_FACTOR_STRINGS[locale];

 return {
 locale,
 pageEyebrow: ui.pageEyebrow,
 pageTitle: ui.pageTitle,
 pageIntro: ui.pageIntro,
 pageMeta: ui.pageMeta,
 startCta: ui.startCta,
 section1Title: ui.section1Title,
 section2Title: ui.section2Title,
 section3Title: ui.section3Title,
 calculateButton: ui.calculateButton,
 resetButton: ui.resetButton,
 resultTitle: ui.resultTitle,
 scoreLabel: ui.scoreLabel,
 bandLabels: ui.bandLabels,
 profileLabel: ui.profileLabel,
 factorsLabel: ui.factorsLabel,
 nextStepsLabel: ui.nextStepsLabel,
 checklistLabel: ui.checklistLabel,
 ctaPrimary: {
 low: { label: ui.ctaPrimary.low.label, href: checklistPdf(locale) },
 moderate: { label: ui.ctaPrimary.moderate.label, href: checklistPdf(locale) },
 high: { label: ui.ctaPrimary.high.label, href: inspectionHref(locale) },
 critical: { label: ui.ctaPrimary.critical.label, href: inspectionHref(locale) },
 },
 ctaSecondary: {
 low: { label: ui.ctaSecondary.low.label, href: healthArticleHref(locale) },
 moderate: { label: ui.ctaSecondary.moderate.label, href: inspectionHref(locale) },
 high: { label: ui.ctaSecondary.high.label, href: checklistPdf(locale) },
 critical: { label: ui.ctaSecondary.critical.label, href: checklistPdf(locale) },
 },
 questions,
 checklistItems,
 riskFactorLabels,
 shareLabel: ui.shareLabel,
 shareCopied: ui.shareCopied,
 previousResultLabel: ui.previousResultLabel,
 previousResultCta: ui.previousResultCta,
 previousResultDismiss: ui.previousResultDismiss,
 validationError: ui.validationError,
 profileTemplates: {
 buildingType: {},
 year: {},
 location: {},
 hygrometer: {},
 mold: {},
 connector: "",
 suffix: "",
 },
 };
}

export { buildProfileText };
export type { UIStrings };
