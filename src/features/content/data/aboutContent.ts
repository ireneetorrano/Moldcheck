﻿import type { ActiveLocale } from "@/config/locales";
import type { GlobalPageContent, PortableTextBlock } from "@/types/content";

interface AboutLocaleContent {
  eyebrow: string;
  title: string;
  description: string;
  introParagraphs: string[];
  introEyebrow: string;
  behindEyebrow: string;
  behindTitle: string;
  behindBody: string;
}

function paragraphsToBlocks(paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, index) => ({
    _type: "block",
    _key: `paragraph-${index + 1}`,
    style: "normal",
    children: [{ _type: "span", _key: `span-${index + 1}`, text }],
  }));
}

const aboutContentByLocale: Record<ActiveLocale, AboutLocaleContent> = {
  pt: {
    eyebrow: "Sobre o MoldCheck",
    title: "O que é o MoldCheck  e porque existe",
    description:
      "MoldCheck existe para explicar bolor, humidade e risco em Portugal com independência editorial e base científica.",
    introParagraphs: [
      "O MoldCheck nasceu de uma observação simples: Portugal tem o segundo pior problema de bolor da Europa, e não existe nenhuma fonte de informação independente para as pessoas que vivem com essa realidade.",
      "O mercado disponível oferece diagnósticos gratuitos de empresas que ganham dinheiro com os tratamentos que recomendam. Os motores de busca devolvem sobretudo conteúdo produzido por essas mesmas empresas. Os médicos raramente têm formação em medicina ambiental doméstica. E os padrões internacionais de referência  as diretrizes da OMS de 2009, a norma IICRC S520  existem em inglês, em linguagem técnica, inacessíveis ao consumidor comum.",
      "Este site existe para preencher esse espaço.",
    ],
    introEyebrow: "O MoldCheck nasceu de uma observação simples:",
    behindEyebrow: "TRANSPARÊNCIA",
    behindTitle: "Quem está por detrás disto?",
    behindBody:
      "O MoldCheck é uma iniciativa do FAIRBANK Group. O FAIRBANK Group opera a InspectOS, uma plataforma de inspecção independente de imóveis em Portugal.\n\nA nossa ligação comercial é com o diagnóstico independente  não com o tratamento. Um inspector independente que cobra pelo seu tempo e não recebe comissão do saneador que vai executar a obra é exactamente o modelo que este site defende. É também o modelo que a InspectOS representa.\n\nPieter Paul Castelein, fundador do FAIRBANK Group, escreveu o ensaio fundador deste site depois de descobrir a escala do problema em Portugal e perceber que não havia nenhum recurso de informação que o abordasse com honestidade.",
  },
  en: {
    eyebrow: "About MoldCheck",
    title: "What MoldCheck is  and why it exists",
    description:
      "MoldCheck exists to explain mold, damp and indoor risk in Portugal with editorial independence and scientific discipline.",
    introParagraphs: [
      "MoldCheck was born from a simple observation: Portugal has Europe's second-worst mold problem, and there is no independent source of information for the people living with that reality.",
      "The market offers free diagnoses from companies that make money from the treatments they recommend. Search engines largely return content produced by those same companies. Doctors rarely have training in domestic environmental medicine. And the main international reference standards  the 2009 WHO guidelines, the IICRC S520 standard  exist in English, in technical language, and remain inaccessible to the average resident.",
      "This site exists to fill that gap.",
    ],
    introEyebrow: "MoldCheck was born from a simple observation:",
    behindEyebrow: "TRANSPARENCY",
    behindTitle: "Who is behind this?",
    behindBody:
      "MoldCheck is a FAIRBANK Group initiative. FAIRBANK Group operates InspectOS, an independent property inspection platform in Portugal.\n\nOur commercial connection is with independent diagnosis  not with treatment. An independent inspector who charges for their time and receives no commission from the remediation contractor is exactly the model this site defends. It is also the model InspectOS represents.\n\nPieter Paul Castelein, founder of FAIRBANK Group, wrote the founding essay for this site after discovering the scale of Portugal's mold problem and finding no honest information resource that addressed it directly.",
  },
  fr: {
    eyebrow: "À propos de MoldCheck",
    title: "Ce qu'est MoldCheck  et pourquoi il existe",
    description:
      "MoldCheck existe pour expliquer les moisissures, l'humidité et le risque intérieur au Portugal avec indépendance éditoriale et base scientifique.",
    introParagraphs: [
      "MoldCheck est né d'une observation simple : le Portugal a le deuxième pire problème de moisissures en Europe, et il n'existe aucune source d'information indépendante pour les personnes qui vivent avec cette réalité.",
      "Le marché propose des diagnostics gratuits d'entreprises qui gagnent de l'argent grâce aux traitements qu'elles recommandent. Les moteurs de recherche renvoient principalement des contenus produits par ces mêmes entreprises. Les médecins ont rarement une formation en médecine environnementale domestique. Et les principales normes de référence internationales  les lignes directrices de l'OMS de 2009, la norme IICRC S520  existent en anglais, dans un langage technique, inaccessible au résident ordinaire.",
      "Ce site existe pour combler ce manque.",
    ],
    introEyebrow: "MoldCheck est né d'une observation simple :",
    behindEyebrow: "TRANSPARENCE",
    behindTitle: "Qui est derrière cela",
    behindBody:
      "MoldCheck est une initiative du FAIRBANK Group. FAIRBANK Group exploite InspectOS, une plateforme indépendante d'inspection immobilière au Portugal.\n\nNotre lien commercial est avec le diagnostic indépendant  pas avec le traitement. Un inspecteur indépendant qui facture son temps et ne perçoit aucune commission de l'entreprise de remédiation est exactement le modèle que ce site défend. C'est aussi le modèle qu'InspectOS représente.\n\nPieter Paul Castelein, fondateur du FAIRBANK Group, a rédigé l'essai fondateur de ce site après avoir découvert l'ampleur du problème au Portugal et constaté l'absence d'une ressource honnête pour l'expliquer.",
  },
  de: {
    eyebrow: "Über MoldCheck",
    title: "Was MoldCheck ist  und warum es existiert",
    description:
      "MoldCheck erklärt Schimmel, Feuchtigkeit und Innenraumrisiken in Portugal mit redaktioneller Unabhängigkeit und wissenschaftlicher Grundlage.",
    introParagraphs: [
      "MoldCheck entstand aus einer einfachen Beobachtung: Portugal hat Europas zweitschlimmstes Schimmelproblem, und es gibt keine unabhängige Informationsquelle für die Menschen, die mit dieser Realität leben.",
      "Der Markt bietet kostenlose Diagnosen von Unternehmen an, die mit den von ihnen empfohlenen Behandlungen Geld verdienen. Suchmaschinen liefern überwiegend Inhalte, die genau von diesen Unternehmen produziert wurden. Ärztinnen und Ärzte haben nur selten eine Ausbildung in häuslicher Umweltmedizin. Und die wichtigsten internationalen Referenzstandards  die WHO-Leitlinien von 2009 und der IICRC S520  liegen auf Englisch und in technischer Sprache vor und sind für die meisten Bewohner kaum zugänglich.",
      "Diese Website existiert, um diese Lücke zu schließen.",
    ],
    introEyebrow: "MoldCheck entstand aus einer einfachen Beobachtung:",
    behindEyebrow: "TRANSPARENZ",
    behindTitle: "Wer dahintersteht",
    behindBody:
      "MoldCheck ist eine Initiative der FAIRBANK Group. Die FAIRBANK Group betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.\n\nUnsere kommerzielle Verbindung liegt im unabhängigen Diagnosedienst  nicht in der Behandlung. Ein unabhängiger Inspektor, der seine Zeit berechnet und keine Provision vom Sanierungsunternehmen erhält, ist genau das Modell, für das diese Website eintritt. Genau dieses Modell verkörpert auch InspectOS.\n\nPieter Paul Castelein, Gründer der FAIRBANK Group, schrieb den Gründungsessay dieser Website, nachdem er das Ausmaß des Problems in Portugal erkannt und festgestellt hatte, dass es keine ehrliche Informationsquelle dazu gab.",
  },
  nl: {
    eyebrow: "Over MoldCheck",
    title: "Wat MoldCheck is  en waarom het bestaat",
    description:
      "MoldCheck bestaat om schimmel, vocht en binnenrisico in Portugal uit te leggen met redactionele onafhankelijkheid en wetenschappelijke basis.",
    introParagraphs: [
      "MoldCheck ontstond vanuit een eenvoudige observatie: Portugal heeft het op één na ergste schimmelprobleem van Europa, en er bestaat geen onafhankelijke informatiebron voor de mensen die met die realiteit leven.",
      "De markt biedt gratis diagnoses aan van bedrijven die geld verdienen met de behandelingen die ze aanbevelen. Zoekmachines tonen vooral content die door diezelfde bedrijven is geproduceerd. Artsen hebben zelden opleiding in huiselijke milieugeneeskunde. En de belangrijkste internationale referentienormen  de WHO-richtlijnen uit 2009 en de IICRC S520  bestaan in het Engels, in technische taal, en zijn voor de gemiddelde bewoner moeilijk toegankelijk.",
      "Deze website bestaat om dat gat te vullen.",
    ],
    introEyebrow: "MoldCheck ontstond vanuit een eenvoudige observatie:",
    behindEyebrow: "TRANSPARANTIE",
    behindTitle: "Wie hierachter zit",
    behindBody:
      "MoldCheck is een initiatief van de FAIRBANK Group. De FAIRBANK Group beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.\n\nOnze commerciële band ligt bij onafhankelijke diagnose  niet bij behandeling. Een onafhankelijke inspecteur die betaald wordt voor zijn tijd en geen commissie ontvangt van het saneringsbedrijf is precies het model dat deze site verdedigt. Dat is ook het model dat InspectOS vertegenwoordigt.\n\nPieter Paul Castelein, oprichter van de FAIRBANK Group, schreef het oprichtingsessay van deze site nadat hij de omvang van het Portugese schimmelprobleem had ontdekt en merkte dat er geen eerlijke informatiebron bestond die dit rechtstreeks behandelde.",
  },
  it: {
    eyebrow: "Chi siamo  MoldCheck",
    title: "Cos'è MoldCheck  e perché esiste",
    description:
      "MoldCheck esiste per spiegare muffa, umidità e rischi per la qualità dell'aria interna in Portogallo con indipendenza editoriale e base scientifica.",
    introParagraphs: [
      "MoldCheck è nato da una semplice osservazione: il Portogallo ha il secondo peggior problema di muffa in Europa, e non esiste alcuna fonte di informazione indipendente per le persone che vivono con questa realtà.",
      "Il mercato offre diagnosi gratuite da parte di aziende che guadagnano con i trattamenti che raccomandano. I motori di ricerca restituiscono principalmente contenuti prodotti da quelle stesse aziende. I medici raramente hanno una formazione in medicina ambientale domestica. E i principali standard di riferimento internazionali  le linee guida OMS del 2009 e la norma IICRC S520  esistono in inglese, in linguaggio tecnico, inaccessibili al consumatore comune.",
      "Questo sito esiste per colmare quel vuoto.",
    ],
    introEyebrow: "MoldCheck è nato da una semplice osservazione:",
    behindEyebrow: "TRASPARENZA",
    behindTitle: "Chi c'è dietro",
    behindBody:
      "MoldCheck è un'iniziativa del FAIRBANK Group. Il FAIRBANK Group gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.\n\nIl nostro legame commerciale è con la diagnosi indipendente  non con il trattamento. Un ispettore indipendente che addebita il proprio tempo e non riceve commissioni dall'impresa di risanamento è esattamente il modello che questo sito difende. È anche il modello che InspectOS rappresenta.\n\nPieter Paul Castelein, fondatore del FAIRBANK Group, ha scritto il saggio fondatore di questo sito dopo aver scoperto la portata del problema in Portogallo e aver constatato l'assenza di una risorsa informativa onesta che lo affrontasse direttamente.",
  },
  es: {
    eyebrow: "Sobre MoldCheck",
    title: "Qué es MoldCheck  y por qué existe",
    description:
      "MoldCheck existe para explicar el moho, la humedad y el riesgo interior en Portugal con independencia editorial y base científica.",
    introParagraphs: [
      "MoldCheck nació de una observación simple: Portugal tiene el segundo peor problema de moho de Europa, y no existe ninguna fuente de información independiente para las personas que viven con esa realidad.",
      "El mercado ofrece diagnósticos gratuitos de empresas que ganan dinero con los tratamientos que recomiendan. Los motores de búsqueda devuelven principalmente contenido producido por esas mismas empresas. Los médicos raramente tienen formación en medicina ambiental doméstica. Y los principales estándares de referencia internacionales  las directrices de la OMS de 2009 y la norma IICRC S520  existen en inglés, en lenguaje técnico, inaccesibles para el consumidor común.",
      "Este sitio existe para llenar ese espacio.",
    ],
    introEyebrow: "MoldCheck nació de una observación simple:",
    behindEyebrow: "TRANSPARENCIA",
    behindTitle: "¿Quién está detrás de esto?",
    behindBody:
      "MoldCheck es una iniciativa del FAIRBANK Group. El FAIRBANK Group opera InspectOS, una plataforma de inspección independiente de inmuebles en Portugal.\n\nNuestra conexión comercial es con el diagnóstico independiente  no con el tratamiento. Un inspector independiente que cobra por su tiempo y no recibe comisión del saneador que va a ejecutar la obra es exactamente el modelo que este sitio defiende. Es también el modelo que InspectOS representa.\n\nPieter Paul Castelein, fundador del FAIRBANK Group, escribió el ensayo fundador de este sitio después de descubrir la escala del problema en Portugal y darse cuenta de que no había ningún recurso de información que lo abordara con honestidad.",
  },
};

export function getAboutContent(locale: ActiveLocale): AboutLocaleContent {
  return aboutContentByLocale[locale] ?? aboutContentByLocale.en;
}

export function getAboutFallbackContent(locale: ActiveLocale): GlobalPageContent {
  const content = aboutContentByLocale[locale];

  if (!content) {
    throw new Error(`Missing about fallback content for locale: ${locale}`);
  }

  return {
    pageKey: "about",
    language: locale,
    translationGroup: "about",
    title: content.title,
    eyebrow: content.eyebrow,
    description: content.description,
    body: paragraphsToBlocks(content.introParagraphs),
    introLayout: "grid",
    introCards: [
      {
        eyebrow:
          locale === "pt"
            ? "Quem está por detrás disto"
            : locale === "en"
              ? "Who is behind this"
              : locale === "fr"
                ? "Qui est derrière cela"
                : locale === "de"
                  ? "Wer dahintersteht"
                  : locale === "nl"
                    ? "Wie hierachter zit"
                    : locale === "it"
                      ? "Chi c’è dietro"
                      : "Quién está detrás",
        title: content.behindTitle,
        body: content.behindBody,
        tone: "featured",
      },
    ],
    sections: [],
  };
}
