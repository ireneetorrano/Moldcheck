import type { ActiveLocale } from "@/config/locales";
import { foundationalArticles } from "@/config/foundationalArticles";
import { getGlobalPath, getSectionPath, getArticlePath } from "@/lib/routing/paths";
import type { GlobalPageContent, GlobalPageSection } from "@/types/content";

interface HomeLocaleContent {
  eyebrow?: string;
  description: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCtaLabel: string;
  heroSecondaryCtaLabel: string;
  trustBarText: string;
  problemTitle: string;
  problemBody: string;
  problemLink: string;
  conflictTitle: string;
  conflictBody: string;
  conflictLink: string;
  featuredTitle: string;
  featuredDescription: string;
  nextStepsTitle: string;
  aboutTitle: string;
  aboutCardEyebrow: string;
  aboutCardTitle: string;
  aboutBody: string;
  aboutLink: string;
  footerNote: string;
  featuredCards: { title: string; body: string; ctaLabel: string }[];
  nextStepCards: { title: string; body: string; ctaLabel: string }[];
  faqTitle?: string;
  faqCards?: { title: string; body: string }[];
}

const homeContentByLocale: Record<ActiveLocale, HomeLocaleContent> = {
  pt: {
    eyebrow: "RECURSO EDITORIAL INDEPENDENTE SOBRE BOLOR, HUMIDADE E QUALIDADE DO AR INTERIOR",
    description:
      "Um em cada quatro portugueses vive em casa afetada por humidade ou bolor. MoldCheck.pt é o único recurso independente em Portugal dedicado a explicar o que isso significa  para a sua saúde, para a sua casa, e para o que pode fazer a seguir.",
    heroTitle: "Portugal tem o segundo pior problema de bolor da Europa. A maioria das pessoas não sabe.",
    heroBody:
      "Um em cada quatro portugueses vive em casa afetada por humidade ou bolor. MoldCheck.pt é o único recurso independente em Portugal dedicado a explicar o que isso significa  para a sua saúde, para a sua casa, e para o que pode fazer a seguir.",
    heroPrimaryCtaLabel: "Fazer a avaliação gratuita",
    heroSecondaryCtaLabel: "Ler o guia de inspecção",
    trustBarText:
      "Baseado em investigação científica da OMS · Independente de empresas de tratamento · Sem publicidade · Iniciativa do FAIRBANK Group",
    problemTitle: "Porque é que Portugal tem tanto bolor?",
    problemBody:
      "82% dos edifícios em Portugal foram construídos antes do ano 2000  antes de qualquer requisito de isolamento ou eficiência energética. Porto tem uma humidade relativa média de 77%. Lisboa, no inverno, atinge os 84%.\n\nO resultado: condensação crónica, pontes térmicas, e paredes que retêm humidade durante décadas.\n\nO bolor não é azar. É o resultado previsível de edifícios mal equipados para o clima em que existem.",
    problemLink: "Saber mais sobre por que Portugal é vulnerável",
    conflictTitle: "Porque é que o diagnóstico gratuito não é neutro",
    conflictBody:
      "As principais empresas de tratamento de bolor em Portugal oferecem diagnósticos gratuitos. É uma estratégia comercial inteligente: a empresa que diagnostica o problema também vende a solução.\n\nNão existe em Portugal nenhuma entidade que avalie o bolor na sua casa e lhe diga o que tem  sem ganhar dinheiro com o que se segue.\n\nO MoldCheck.pt é essa alternativa. Não vendemos tratamentos. Não recebemos comissões. Publicamos o que a ciência diz.",
    conflictLink: "Ler a nossa política editorial →",
    featuredTitle: "Comece aqui",
    featuredDescription: "",
    nextStepsTitle: "Os próximos passos  consoante a sua situação",
    aboutTitle: "Quem está por detrás disto  e porquê",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Quem está por detrás disto  e porquê",
    aboutBody:
      "O MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS  plataforma de inspecção independente de imóveis em Portugal.\n\nNão vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspecção ou análise laboratorial, é porque acreditamos que precisa de uma  não porque lucramos com o tratamento que se segue.\n\nTodo o conteúdo deste site é baseado em investigação científica revisada por pares, incluindo as diretrizes da OMS de 2009 e o padrão IICRC S520. Quando a ciência é incerta, dizemos que é incerta.",
    aboutLink: "Ler a política editorial completa →",
    footerNote:
      "© MoldCheck.pt  Uma iniciativa do FAIRBANK Group\nInspectOS · PropCheck.pt · Política de Privacidade · Política Editorial · Contacto\nEste site não substitui aconselhamento médico ou técnico profissional.",
    featuredCards: [
      {
        title: "Portugal tem o 2.º pior bolor da Europa mas ninguém fala nisso",
        body:
          "O ensaio fundador do MoldCheck.pt. Porquê este problema existe, porque é ignorado, e o que pode mudar.",
        ctaLabel: "Ler artigo →",
      },
      {
        title: "Porque é que a lixívia não resolve o bolor",
        body:
          "A solução mais usada em Portugal não funciona. Aqui está o porquê  e o que realmente resulta.",
        ctaLabel: "Ler artigo →",
      },
      {
        title: "A sua casa está a afetar a sua saúde?",
        body:
          "O que a OMS estabeleceu sobre bolor e doenças respiratórias  e os sintomas que a maioria das pessoas não associa à habitação.",
        ctaLabel: "Ler artigo →",
      },
      {
        title: "Guia completo: avaliar o risco de bolor em casa",
        body:
          "Inspecção divisão a divisão, com checklist de 20 pontos e tabela de localização → causa.",
        ctaLabel: "Ler guia →",
      },
    ],
    nextStepCards: [
      {
        title: "“Tenho bolor visível”",
        body:
          "Comece pelo guia de avaliação visual. Identifique a localização, a extensão, e o padrão  essa informação determina tudo o que se segue.",
        ctaLabel: "Guia de avaliação →",
      },
      {
        title: "“Tenho sintomas de saúde que melhoram fora de casa”",
        body:
          "Este é o sinal mais importante a levar a sério. Leia o artigo sobre saúde e bolor antes de qualquer outra acção.",
        ctaLabel: "Artigo de saúde →",
      },
      {
        title: "“Não sei se tenho bolor”",
        body:
          "Muitas das localizações mais problemáticas são invisíveis. O guia de inspecção diz-lhe onde procurar  e o que a ausência de bolor visível ainda não exclui.",
        ctaLabel: "Começar a inspecção →",
      },
      {
        title: "“Preciso de ajuda profissional”",
        body:
          "Uma inspecção independente com medidor de humidade e câmara termográfica identifica a origem do problema sem vender o tratamento que se segue.",
        ctaLabel: "Saber mais sobre inspecção independente →",
      },
    ],
  },
  en: {
    eyebrow: "Independent editorial resource on mold, damp and indoor air quality",
    description:
      "One in four people in Portugal lives in housing affected by dampness or mold. MoldCheck.pt is Portugal’s only independent resource dedicated to explaining what that means  for your health, your home, and what to do next.",
    heroTitle: "Portugal has Europe’s second-worst mold problem. Most people don’t know it.",
    heroBody:
      "One in four people in Portugal lives in housing affected by dampness or mold. MoldCheck.pt is Portugal’s only independent resource dedicated to explaining what that means  for your health, your home, and what to do next.",
    heroPrimaryCtaLabel: "Assess my home for free",
    heroSecondaryCtaLabel: "Read the inspection guide",
    trustBarText:
      "Based on WHO scientific research · Independent of treatment companies · No advertising · A FAIRBANK Group initiative",
    problemTitle: "Why does Portugal have so much mold?",
    problemBody:
      "82% of buildings in Portugal were built before the year 2000  before any meaningful insulation or energy-efficiency requirements. Porto has an average relative humidity of 77%. Lisbon in winter reaches 84%.\n\nThe result: chronic condensation, thermal bridges, and walls that retain moisture for decades.\n\nMold is not bad luck. It is the predictable result of buildings that were never properly equipped for the climate they exist in.",
    problemLink: "Learn more about why Portuguese buildings are vulnerable",
    conflictTitle: "Why the free diagnosis isn’t neutral",
    conflictBody:
      "Portugal’s major mold treatment companies offer free home diagnoses. It is a smart commercial strategy: the company that diagnoses the problem also sells the solution.\n\nThere is no independent entity in Portugal that will assess the mold in your home and tell you what you have  without making money from what comes next.\n\nMoldCheck.pt is that alternative. We do not sell treatments. We do not take commissions. We publish what the science says.",
    conflictLink: "Read our editorial policy →",
    featuredTitle: "Start here",
    featuredDescription: "",
    nextStepsTitle: "Next steps  depending on your situation",
    aboutTitle: "Who is behind this  and why",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Who is behind this  and why",
    aboutBody:
      "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK operates InspectOS, an independent property inspection platform in Portugal.\n\nWe do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or a lab test, it is because we believe you need one  not because we profit from whatever treatment comes next.\n\nAll content on this site is based on peer-reviewed scientific research, including the 2009 WHO guidelines and the IICRC S520 standard. When the science is uncertain, we say so.",
    aboutLink: "Read the full editorial policy →",
    footerNote:
      "© MoldCheck.pt  A FAIRBANK Group initiative\nInspectOS · PropCheck.pt · Privacy Policy · Editorial Policy · Contact\nThis website does not replace professional medical or technical advice.",
    featuredCards: [
      {
        title: "Portugal has Europe’s second-worst mold problem  and nobody talks about it",
        body:
          "The founding essay. Why this problem exists, why it is ignored, and what could change.",
        ctaLabel: "Read article →",
      },
      {
        title: "Why bleach doesn’t fix mold",
        body:
          "Portugal’s most common solution doesn’t work. Here is why  and what actually does.",
        ctaLabel: "Read article →",
      },
      {
        title: "Is your home affecting your health?",
        body:
          "What the WHO established about mold and respiratory disease  and the symptoms most people do not connect to their housing.",
        ctaLabel: "Read article →",
      },
      {
        title: "Complete guide: assessing mold risk at home",
        body:
          "A room-by-room inspection guide with a 20-point checklist and a location-to-cause table.",
        ctaLabel: "Read guide →",
      },
    ],
    nextStepCards: [
      {
        title: "“I have visible mold”",
        body:
          "Start with the visual assessment guide. Identify the location, extent, and pattern  that information shapes everything that follows.",
        ctaLabel: "Assessment guide →",
      },
      {
        title: "“I have health symptoms that improve away from home”",
        body:
          "This is the most important signal to take seriously. Read the health article before taking any other step.",
        ctaLabel: "Health article →",
      },
      {
        title: "“I’m not sure whether I have mold”",
        body:
          "Many of the most problematic locations are invisible. The inspection guide shows you where to look  and what the absence of visible mold still does not rule out.",
        ctaLabel: "Start the inspection →",
      },
      {
        title: "“I need professional help”",
        body:
          "An independent inspection using a moisture meter and thermal imaging can identify the origin of the problem without selling the treatment that follows.",
        ctaLabel: "Learn about independent inspection →",
      },
    ],
  },
  fr: {
    eyebrow: "Ressource éditoriale indépendante sur les moisissures, l’humidité et la qualité de l’air intérieur",
    description:
      "Une personne sur quatre au Portugal vit dans un logement affecté par l’humidité ou les moisissures. MoldCheck.pt est la seule ressource indépendante au Portugal dédiée à expliquer ce que cela signifie  pour votre santé, votre logement, et ce que vous pouvez faire ensuite.",
    heroTitle:
      "Le Portugal a le deuxième pire problème de moisissures en Europe. La plupart des gens ne le savent pas.",
    heroBody:
      "Une personne sur quatre au Portugal vit dans un logement affecté par l’humidité ou les moisissures. MoldCheck.pt est la seule ressource indépendante au Portugal dédiée à expliquer ce que cela signifie  pour votre santé, votre logement, et ce que vous pouvez faire ensuite.",
    heroPrimaryCtaLabel: "Évaluer mon logement gratuitement",
    heroSecondaryCtaLabel: "Lire le guide d’inspection",
    trustBarText:
      "Basé sur la recherche scientifique de l’OMS · Indépendant des entreprises de traitement · Sans publicité · Une initiative du FAIRBANK Group",
    problemTitle: "Pourquoi le Portugal a-t-il autant de moisissures ?",
    problemBody:
      "82 % des bâtiments au Portugal ont été construits avant l’an 2000  avant toute exigence réelle en matière d’isolation ou d’efficacité énergétique. Porto a une humidité relative moyenne de 77 %. Lisbonne atteint 84 % en hiver.\n\nLe résultat : condensation chronique, ponts thermiques, et murs qui retiennent l’humidité pendant des décennies.\n\nLes moisissures ne sont pas une fatalité. C’est le résultat prévisible de bâtiments qui n’ont jamais été correctement adaptés au climat dans lequel ils se trouvent.",
    problemLink: "En savoir plus sur la vulnérabilité des bâtiments portugais",
    conflictTitle: "Pourquoi le diagnostic gratuit n’est pas neutre",
    conflictBody:
      "Les principales entreprises de traitement des moisissures au Portugal proposent des diagnostics gratuits à domicile. C’est une stratégie commerciale efficace : l’entreprise qui diagnostique le problème vend aussi la solution.\n\nIl n’existe au Portugal aucune entité indépendante qui évaluera les moisissures dans votre logement et vous dira ce que vous avez  sans gagner d’argent sur ce qui suit.\n\nMoldCheck.pt est cette alternative. Nous ne vendons pas de traitements. Nous ne percevons pas de commissions. Nous publions ce que dit la science.",
    conflictLink: "Lire notre politique éditoriale →",
    featuredTitle: "Commencez ici",
    featuredDescription: "",
    nextStepsTitle: "Les prochaines étapes  selon votre situation",
    aboutTitle: "Qui est derrière cela  et pourquoi",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Qui est derrière cela  et pourquoi",
    aboutBody:
      "MoldCheck.pt est une initiative du FAIRBANK Group. FAIRBANK exploite InspectOS, une plateforme indépendante d’inspection immobilière au Portugal.\n\nNous ne vendons pas de traitements contre l’humidité. Nous ne percevons pas de commissions de la part d’entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c’est parce que nous pensons que vous en avez besoin  pas parce que nous profitons du traitement qui suit.\n\nTout le contenu de ce site repose sur des recherches scientifiques évaluées par les pairs, notamment les recommandations de l’OMS de 2009 et la norme IICRC S520. Lorsque la science est incertaine, nous le disons.",
    aboutLink: "Lire la politique éditoriale complète →",
    footerNote:
      "© MoldCheck.pt  Une initiative du FAIRBANK Group\nInspectOS · PropCheck.pt · Politique de confidentialité · Politique éditoriale · Contact\nCe site ne remplace pas un avis médical ou technique professionnel.",
    featuredCards: [
      {
        title: "Le Portugal a le 2e pire problème de moisissures en Europe  et personne n’en parle",
        body:
          "L’essai fondateur. Pourquoi ce problème existe, pourquoi il est ignoré, et ce qui pourrait changer.",
        ctaLabel: "Lire l’article →",
      },
      {
        title: "Pourquoi l’eau de Javel ne résout pas les moisissures",
        body:
          "La solution la plus utilisée au Portugal ne fonctionne pas. Voici pourquoi  et ce qui fonctionne vraiment.",
        ctaLabel: "Lire l’article →",
      },
      {
        title: "Votre logement affecte-t-il votre santé ?",
        body:
          "Ce que l’OMS a établi sur les moisissures et les maladies respiratoires  et les symptômes que la plupart des gens ne relient pas à leur logement.",
        ctaLabel: "Lire l’article →",
      },
      {
        title: "Guide complet : évaluer le risque de moisissures chez soi",
        body: "Un guide d’inspection pièce par pièce avec une checklist de 20 points.",
        ctaLabel: "Lire le guide →",
      },
    ],
    nextStepCards: [
      {
        title: "« J’ai des moisissures visibles »",
        body:
          "Commencez par le guide d’évaluation visuelle. Identifiez l’emplacement, l’étendue et le motif  ces informations déterminent tout ce qui suit.",
        ctaLabel: "Guide d’évaluation →",
      },
      {
        title: "« J’ai des symptômes qui s’améliorent quand je quitte mon logement »",
        body:
          "C’est le signal le plus important à prendre au sérieux. Lisez d’abord l’article sur la santé et les moisissures.",
        ctaLabel: "Article santé →",
      },
      {
        title: "« Je ne sais pas si j’ai des moisissures »",
        body:
          "Beaucoup des zones les plus problématiques sont invisibles. Le guide d’inspection vous dit où regarder  et ce que l’absence de moisissures visibles n’exclut toujours pas.",
        ctaLabel: "Commencer l’inspection →",
      },
      {
        title: "« J’ai besoin d’une aide professionnelle »",
        body:
          "Une inspection indépendante avec humidimètre et caméra thermique permet d’identifier l’origine du problème sans vous vendre ensuite le traitement.",
        ctaLabel: "En savoir plus sur l’inspection indépendante →",
      },
    ],
  },
  de: {
    eyebrow: "Unabhängige redaktionelle Quelle zu Schimmel, Feuchtigkeit und Innenraumluftqualität",
    description:
      "Jede vierte Person in Portugal lebt in Wohnraum, der von Feuchtigkeit oder Schimmel betroffen ist. MoldCheck.pt ist Portugals einzige unabhängige Quelle, die erklärt, was das bedeutet  für Ihre Gesundheit, Ihre Wohnung und was Sie als Nächstes tun können.",
    heroTitle:
      "Portugal hat Europas zweitschlimmstes Schimmelproblem. Die meisten Menschen wissen das nicht.",
    heroBody:
      "Jede vierte Person in Portugal lebt in Wohnraum, der von Feuchtigkeit oder Schimmel betroffen ist. MoldCheck.pt ist Portugals einzige unabhängige Quelle, die erklärt, was das bedeutet  für Ihre Gesundheit, Ihre Wohnung und was Sie als Nächstes tun können.",
    heroPrimaryCtaLabel: "Meine Wohnung kostenlos beurteilen",
    heroSecondaryCtaLabel: "Den Inspektionsleitfaden lesen",
    trustBarText:
      "Basierend auf WHO-Forschung · Unabhängig von Behandlungsunternehmen · Keine Werbung · Eine Initiative der FAIRBANK Group",
    problemTitle: "Warum hat Portugal so viel Schimmel?",
    problemBody:
      "82 % der Gebäude in Portugal wurden vor dem Jahr 2000 gebaut  bevor es nennenswerte Anforderungen an Dämmung oder Energieeffizienz gab. Porto hat eine durchschnittliche relative Luftfeuchtigkeit von 77 %. Lissabon erreicht im Winter 84 %.\n\nDas Ergebnis: chronische Kondensation, Wärmebrücken und Wände, die über Jahrzehnte Feuchtigkeit speichern.\n\nSchimmel ist kein Pech. Er ist das vorhersehbare Ergebnis von Gebäuden, die nie richtig für das Klima ausgelegt wurden, in dem sie stehen.",
    problemLink: "Mehr über die Anfälligkeit portugiesischer Gebäude erfahren",
    conflictTitle: "Warum die kostenlose Diagnose nicht neutral ist",
    conflictBody:
      "Portugals große Unternehmen für Schimmelbehandlung bieten kostenlose Hausdiagnosen an. Das ist eine kluge Geschäftsstrategie: Das Unternehmen, das das Problem diagnostiziert, verkauft auch die Lösung.\n\nEs gibt in Portugal keine unabhängige Stelle, die den Schimmel in Ihrer Wohnung bewertet und Ihnen sagt, was Sie haben  ohne an dem zu verdienen, was danach kommt.\n\nMoldCheck.pt ist diese Alternative. Wir verkaufen keine Behandlungen. Wir nehmen keine Provisionen. Wir veröffentlichen, was die Wissenschaft sagt.",
    conflictLink: "Unsere Redaktionsrichtlinie lesen →",
    featuredTitle: "Beginnen Sie hier",
    featuredDescription: "",
    nextStepsTitle: "Die nächsten Schritte  je nach Ihrer Situation",
    aboutTitle: "Wer dahintersteht  und warum",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Wer dahintersteht  und warum",
    aboutBody:
      "MoldCheck.pt ist eine Initiative der FAIRBANK Group. FAIRBANK betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.\n\nWir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie sie brauchen  nicht weil wir an der anschließenden Behandlung verdienen.\n\nAlle Inhalte auf dieser Website basieren auf begutachteter wissenschaftlicher Forschung, einschließlich der WHO-Leitlinien von 2009 und des IICRC-S520-Standards. Wenn die Wissenschaft unsicher ist, sagen wir das offen.",
    aboutLink: "Die vollständige Redaktionsrichtlinie lesen →",
    footerNote:
      "© MoldCheck.pt  Eine Initiative der FAIRBANK Group\nInspectOS · PropCheck.pt · Datenschutzerklärung · Redaktionsrichtlinie · Kontakt\nDiese Website ersetzt keine professionelle medizinische oder technische Beratung.",
    featuredCards: [
      {
        title: "Portugal hat Europas zweitschlimmstes Schimmelproblem  und niemand spricht darüber",
        body:
          "Der Gründungsessay. Warum dieses Problem besteht, warum es ignoriert wird und was sich ändern könnte.",
        ctaLabel: "Artikel lesen →",
      },
      {
        title: "Warum Bleichmittel Schimmel nicht beseitigt",
        body:
          "Die am häufigsten genutzte Lösung in Portugal funktioniert nicht. Hier ist der Grund  und was tatsächlich hilft.",
        ctaLabel: "Artikel lesen →",
      },
      {
        title: "Beeinflusst Ihre Wohnung Ihre Gesundheit?",
        body:
          "Was die WHO über Schimmel und Atemwegserkrankungen festgestellt hat  und welche Symptome die meisten Menschen nicht mit ihrer Wohnung verbinden.",
        ctaLabel: "Artikel lesen →",
      },
      {
        title: "Vollständiger Leitfaden zur Einschätzung des Schimmelrisikos zu Hause",
        body: "Ein Raum-für-Raum-Inspektionsleitfaden mit einer 20-Punkte-Checkliste.",
        ctaLabel: "Leitfaden lesen →",
      },
    ],
    nextStepCards: [
      {
        title: "„Ich habe sichtbaren Schimmel“",
        body:
          "Beginnen Sie mit dem Leitfaden zur visuellen Einschätzung. Ort, Ausmaß und Muster bestimmen, was als Nächstes zu tun ist.",
        ctaLabel: "Bewertungsleitfaden →",
      },
      {
        title: "„Ich habe gesundheitliche Symptome, die außerhalb der Wohnung besser werden“",
        body: "Das ist das wichtigste Warnsignal. Lesen Sie zuerst den Gesundheitsartikel.",
        ctaLabel: "Gesundheitsartikel →",
      },
      {
        title: "„Ich weiß nicht, ob ich Schimmel habe“",
        body:
          "Viele der problematischsten Stellen sind unsichtbar. Der Inspektionsleitfaden zeigt Ihnen, wo Sie suchen müssen  und was das Fehlen von sichtbarem Schimmel dennoch nicht ausschließt.",
        ctaLabel: "Inspektion starten →",
      },
      {
        title: "„Ich brauche professionelle Hilfe“",
        body:
          "Eine unabhängige Inspektion mit Feuchtigkeitsmesser und Wärmebildkamera kann die Ursache des Problems ermitteln, ohne Ihnen anschließend eine Behandlung zu verkaufen.",
        ctaLabel: "Mehr über unabhängige Inspektion →",
      },
    ],
  },
  nl: {
    eyebrow: "Onafhankelijke redactionele bron over schimmel, vocht en binnenluchtkwaliteit",
    description:
      "Eén op de vier mensen in Portugal woont in een huis met vocht- of schimmelproblemen. MoldCheck.pt is de enige onafhankelijke bron in Portugal die uitlegt wat dat betekent  voor je gezondheid, je woning en wat je daarna kunt doen.",
    heroTitle:
      "Portugal heeft het op één na ergste schimmelprobleem van Europa. De meeste mensen weten dat niet.",
    heroBody:
      "Eén op de vier mensen in Portugal woont in een huis met vocht- of schimmelproblemen. MoldCheck.pt is de enige onafhankelijke bron in Portugal die uitlegt wat dat betekent  voor je gezondheid, je woning en wat je daarna kunt doen.",
    heroPrimaryCtaLabel: "Mijn woning gratis beoordelen",
    heroSecondaryCtaLabel: "De inspectiegids lezen",
    trustBarText:
      "Gebaseerd op WHO-wetenschappelijk onderzoek · Onafhankelijk van behandelingsbedrijven · Geen reclame · Een initiatief van de FAIRBANK Group",
    problemTitle: "Waarom heeft Portugal zoveel schimmel?",
    problemBody:
      "82% van de gebouwen in Portugal is gebouwd vóór het jaar 2000  vóór er betekenisvolle eisen bestonden voor isolatie of energie-efficiëntie. Porto heeft een gemiddelde relatieve luchtvochtigheid van 77%. Lissabon bereikt in de winter 84%.\n\nHet resultaat: chronische condensatie, koudebruggen en muren die tientallen jaren vocht vasthouden.\n\nSchimmel is geen pech. Het is het voorspelbare gevolg van gebouwen die nooit goed zijn aangepast aan het klimaat waarin ze bestaan.",
    problemLink: "Meer over de kwetsbaarheid van Portugese gebouwen",
    conflictTitle: "Waarom een gratis diagnose niet neutraal is",
    conflictBody:
      "De grote schimmelbehandelingsbedrijven in Portugal bieden gratis huisdiagnoses aan. Dat is een slimme commerciële strategie: het bedrijf dat het probleem diagnosticeert, verkoopt ook de oplossing.\n\nEr bestaat in Portugal geen onafhankelijke partij die de schimmel in jouw woning beoordeelt en je vertelt wat er aan de hand is  zonder geld te verdienen aan wat daarna komt.\n\nMoldCheck.pt is dat alternatief. We verkopen geen behandelingen. We ontvangen geen commissies. We publiceren wat de wetenschap zegt.",
    conflictLink: "Lees ons redactioneel beleid →",
    featuredTitle: "Begin hier",
    featuredDescription: "",
    nextStepsTitle: "Volgende stappen  afhankelijk van jouw situatie",
    aboutTitle: "Wie hierachter zit  en waarom",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Wie hierachter zit  en waarom",
    aboutBody:
      "MoldCheck.pt is een initiatief van de FAIRBANK Group. FAIRBANK beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.\n\nWe verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijven. Als we een inspectie of laboratoriumanalyse aanbevelen, is dat omdat we denken dat je die nodig hebt  niet omdat we verdienen aan de behandeling die daarop volgt.\n\nAlle inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijk onderzoek, waaronder de WHO-richtlijnen uit 2009 en de IICRC S520-standaard. Wanneer de wetenschap onzeker is, zeggen we dat ook.",
    aboutLink: "Lees het volledige redactioneel beleid →",
    footerNote:
      "© MoldCheck.pt  Een initiatief van de FAIRBANK Group\nInspectOS · PropCheck.pt · Privacybeleid · Redactioneel beleid · Contact\nDeze website vervangt geen professioneel medisch of technisch advies.",
    featuredCards: [
      {
        title: "Portugal heeft het op één na ergste schimmelprobleem van Europa  en niemand heeft het erover",
        body:
          "Het oprichtingsessay. Waarom dit probleem bestaat, waarom het wordt genegeerd en wat er kan veranderen.",
        ctaLabel: "Artikel lezen →",
      },
      {
        title: "Waarom bleekwater schimmel niet oplost",
        body:
          "De meest gebruikte oplossing in Portugal werkt niet. Dit is waarom  en wat wél werkt.",
        ctaLabel: "Artikel lezen →",
      },
      {
        title: "Heeft jouw woning invloed op je gezondheid?",
        body:
          "Wat de WHO heeft vastgesteld over schimmel en luchtwegaandoeningen  en de symptomen die de meeste mensen niet met hun woning verbinden.",
        ctaLabel: "Artikel lezen →",
      },
      {
        title: "Volledige gids: schimmelrisico in huis beoordelen",
        body: "Een kamer-voor-kamer inspectiegids met een checklist van 20 punten.",
        ctaLabel: "Gids lezen →",
      },
    ],
    nextStepCards: [
      {
        title: "“Ik heb zichtbare schimmel”",
        body:
          "Begin met de visuele beoordelingsgids. Bepaal de locatie, omvang en het patroon  die informatie bepaalt alles wat daarna komt.",
        ctaLabel: "Beoordelingsgids →",
      },
      {
        title: "“Mijn gezondheidsklachten verbeteren buitenshuis”",
        body: "Dit is het belangrijkste signaal om serieus te nemen. Lees eerst het gezondheidsartikel.",
        ctaLabel: "Gezondheidsartikel →",
      },
      {
        title: "“Ik weet niet of ik schimmel heb”",
        body:
          "Veel van de meest problematische plekken zijn onzichtbaar. De inspectiegids laat zien waar je moet kijken  en wat de afwezigheid van zichtbare schimmel nog steeds niet uitsluit.",
        ctaLabel: "Inspectie starten →",
      },
      {
        title: "“Ik heb professionele hulp nodig”",
        body:
          "Een onafhankelijke inspectie met een vochtmeter en warmtebeeldcamera kan de oorzaak van het probleem vaststellen zonder de behandeling die daarna volgt aan je te verkopen.",
        ctaLabel: "Meer over onafhankelijke inspectie →",
      },
    ],
  },
  it: {
    eyebrow: "Risorsa editoriale indipendente su muffa, umidità e qualità dell’aria interna",
    description:
      "Una persona su quattro in Portogallo vive in una casa colpita da umidità o muffa. MoldCheck.pt è l’unica risorsa indipendente in Portogallo dedicata a spiegare che cosa significa questo  per la tua salute, per la tua casa e per ciò che puoi fare dopo.",
    heroTitle:
      "Il Portogallo ha il secondo peggior problema di muffa in Europa. La maggior parte delle persone che ci vivono non lo sa.",
    heroBody:
      "Una persona su quattro in Portogallo vive in una casa colpita da umidità o muffa. MoldCheck.pt è l’unica risorsa indipendente in Portogallo dedicata a spiegare che cosa significa questo  per la tua salute, per la tua casa e per ciò che puoi fare dopo.",
    heroPrimaryCtaLabel: "Valuta gratuitamente la mia casa",
    heroSecondaryCtaLabel: "Leggi la guida all’ispezione",
    trustBarText:
      "Basato sulla ricerca scientifica dell’OMS · Indipendente dalle aziende di trattamento · Nessuna pubblicità · Un’iniziativa del FAIRBANK Group",
    problemTitle: "Perché in Portogallo c’è così tanta muffa?",
    problemBody:
      "L’82% degli edifici in Portogallo è stato costruito prima dell’anno 2000  prima di qualsiasi requisito significativo in materia di isolamento o efficienza energetica. Porto ha un’umidità relativa media del 77%. Lisbona, in inverno, raggiunge l’84%.\n\nIl risultato: condensa cronica, ponti termici e pareti che trattengono l’umidità per decenni.\n\nLa muffa non è sfortuna. È il risultato prevedibile di edifici che non sono mai stati attrezzati per il clima in cui si trovano.",
    problemLink: "Scopri di più sul perché gli edifici portoghesi sono vulnerabili",
    conflictTitle: "Perché una diagnosi gratuita non è neutrale",
    conflictBody:
      "Le principali aziende di trattamento della muffa in Portogallo offrono diagnosi gratuite a domicilio. È una strategia commerciale intelligente: l’azienda che diagnostica il problema è anche quella che vende la soluzione.\n\nIn Portogallo non esiste alcuna entità indipendente che valuti la muffa nella tua casa e ti dica che cosa hai  senza guadagnare da ciò che viene dopo.\n\nMoldCheck.pt è quell’alternativa. Non vendiamo trattamenti. Non riceviamo commissioni. Pubblichiamo ciò che dice la scienza.",
    conflictLink: "Leggi la nostra politica editoriale →",
    featuredTitle: "Inizia da qui",
    featuredDescription: "",
    nextStepsTitle: "I prossimi passi  in base alla tua situazione",
    aboutTitle: "Chi c’è dietro tutto questo  e perché",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "Chi c’è dietro tutto questo  e perché",
    aboutBody:
      "MoldCheck.pt è un’iniziativa del FAIRBANK Group. FAIRBANK gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.\n\nNon vendiamo trattamenti contro l’umidità. Non riceviamo commissioni da aziende di risanamento. Quando consigliamo un’ispezione o un’analisi di laboratorio, è perché riteniamo che tu ne abbia bisogno  non perché guadagniamo dal trattamento che segue.\n\nTutti i contenuti di questo sito si basano su ricerca scientifica peer-reviewed, comprese le linee guida OMS del 2009 e lo standard IICRC S520. Quando la scienza è incerta, lo diciamo chiaramente.",
    aboutLink: "Leggi la politica editoriale completa →",
    footerNote:
      "© MoldCheck.pt  Un’iniziativa del FAIRBANK Group\nInspectOS · PropCheck.pt · Informativa sulla Privacy · Politica Editoriale · Contatti\nQuesto sito non sostituisce un parere medico o tecnico professionale.",
    featuredCards: [
      {
        title: "Il Portogallo ha il 2º peggior problema di muffa in Europa  e nessuno ne parla",
        body:
          "Il saggio fondativo di MoldCheck.pt. Perché questo problema esiste, perché viene ignorato e che cosa può cambiare.",
        ctaLabel: "Leggi l’articolo →",
      },
      {
        title: "Perché la candeggina non risolve la muffa",
        body:
          "La soluzione più usata in Portogallo non funziona. Ecco perché  e che cosa funziona davvero.",
        ctaLabel: "Leggi l’articolo →",
      },
      {
        title: "La tua casa sta influenzando la tua salute?",
        body:
          "Che cosa ha stabilito l’OMS sulla muffa e sulle malattie respiratorie  e quali sintomi la maggior parte delle persone non collega alla propria abitazione.",
        ctaLabel: "Leggi l’articolo →",
      },
      {
        title: "Come valutare il rischio di muffa nella tua casa",
        body:
          "Guida d’ispezione stanza per stanza con checklist di 20 punti e tabella diagnostica posizione → causa.",
        ctaLabel: "Leggi la guida →",
      },
    ],
    nextStepCards: [
      {
        title: "“Ho muffa visibile”",
        body:
          "Inizia dalla guida di valutazione visiva. Identifica posizione, estensione e schema del problema  queste informazioni determinano tutto ciò che viene dopo.",
        ctaLabel: "Guida di valutazione →",
      },
      {
        title: "“Ho sintomi di salute che migliorano quando sono fuori casa”",
        body:
          "Questo è il segnale più importante da prendere sul serio. Leggi l’articolo su salute e muffa prima di qualsiasi altra azione.",
        ctaLabel: "Articolo sulla salute →",
      },
      {
        title: "“Non so se ho muffa”",
        body:
          "Molti dei punti più problematici sono invisibili. La guida all’ispezione ti dice dove guardare  e che cosa l’assenza di muffa visibile non esclude ancora.",
        ctaLabel: "Inizia l’ispezione →",
      },
      {
        title: "“Ho bisogno di aiuto professionale”",
        body:
          "Un’ispezione indipendente con igrometro e termocamera individua l’origine del problema senza venderti il trattamento successivo.",
        ctaLabel: "Scopri di più sull’ispezione indipendente →",
      },
    ],
  },
  es: {
    eyebrow: "Recurso editorial independiente sobre moho, humedad y calidad del aire interior",
    description:
      "Una de cada cuatro personas en Portugal vive en una vivienda afectada por humedad o moho. MoldCheck.pt es el único recurso independiente en Portugal dedicado a explicar qué significa eso  para tu salud, para tu vivienda y para lo que puedes hacer después.",
    heroTitle:
      "Portugal tiene el segundo peor problema de moho de Europa. La mayoría de la gente que vive aquí no lo sabe.",
    heroBody:
      "Una de cada cuatro personas en Portugal vive en una vivienda afectada por humedad o moho. MoldCheck.pt es el único recurso independiente en Portugal dedicado a explicar qué significa eso  para tu salud, para tu vivienda y para lo que puedes hacer después.",
    heroPrimaryCtaLabel: "Evalúa tu vivienda gratis",
    heroSecondaryCtaLabel: "Leer la guía de inspección",
    trustBarText:
      "Basado en investigación científica de la OMS · Independiente de empresas de tratamiento · Sin publicidad · Una iniciativa del FAIRBANK Group",
    problemTitle: "¿Por qué hay tanto moho en Portugal?",
    problemBody:
      "El 82% de los edificios en Portugal se construyeron antes del año 2000 antes de cualquier requisito significativo de aislamiento o eficiencia energética. Oporto tiene una humedad relativa media del 77%. Lisboa, en invierno, alcanza el 84%.\n\nEl resultado: condensación crónica, puentes térmicos y paredes que retienen humedad durante décadas.\n\nEl moho no es mala suerte. Es el resultado previsible de edificios que nunca fueron preparados para el clima en el que existen.",
    problemLink: "Descubre por qué los edificios portugueses son tan vulnerables ",
    conflictTitle: "¿Por qué un diagnóstico gratuito no es neutral?",
    conflictBody:
      "Las principales empresas de tratamiento de moho en Portugal ofrecen diagnósticos gratuitos en la vivienda. Es una estrategia comercial inteligente: la empresa que diagnostica el problema también vende la solución.\n\nNo existe en Portugal ninguna entidad independiente que evalúe el moho de tu vivienda y te diga qué tienes  sin ganar dinero con lo que viene después.\n\nMoldCheck.pt es esa alternativa. No vendemos tratamientos. No cobramos comisiones. Publicamos lo que dice la ciencia.",
    conflictLink: "Leer nuestra política editorial →",
    featuredTitle: "Empieza aquí",
    featuredDescription: "",
    nextStepsTitle: "Siguientes pasos según tu situación",
    aboutTitle: "¿Quién está detrás de esto y por qué?",
    aboutCardEyebrow: "MoldCheck.pt",
    aboutCardTitle: "¿Quién está detrás de esto y por qué?",
    aboutBody:
      "MoldCheck.pt es una iniciativa del FAIRBANK Group. FAIRBANK gestiona InspectOS, una plataforma independiente de inspección inmobiliaria en Portugal.\n\nNo vendemos tratamientos contra la humedad. No cobramos comisiones de empresas de remediación. Cuando recomendamos una inspección o un análisis de laboratorio, es porque creemos que lo necesitas  no porque ganemos dinero con el tratamiento posterior.\n\nTodo el contenido de este sitio se basa en investigación científica revisada por pares, incluidas las directrices de la OMS de 2009 y el estándar IICRC S520. Cuando la ciencia es incierta, lo decimos claramente.",
    aboutLink: "Leer la política editorial completa →",
    footerNote:
      "© MoldCheck.pt  Una iniciativa del FAIRBANK Group\nInspectOS · PropCheck.pt · Política de Privacidad · Política Editorial · Contacto\nEste sitio web no sustituye el asesoramiento médico o técnico profesional.",
    featuredCards: [
      {
        title: "Portugal tiene el segundo peor problema de moho de Europa  y nadie habla de ello",
        body:
          "El ensayo fundacional de MoldCheck.pt. Por qué existe este problema, por qué se ignora y qué puede cambiar.",
        ctaLabel: "Leer artículo →",
      },
      {
        title: "Por qué la lejía no resuelve el moho",
        body:
          "La solución más utilizada en Portugal no funciona. Aquí está el porqué  y lo que realmente funciona.",
        ctaLabel: "Leer artículo →",
      },
      {
        title: "¿Tu vivienda está afectando a tu salud?",
        body:
          "Lo que la OMS estableció sobre moho y enfermedades respiratorias  y los síntomas que la mayoría de la gente no relaciona con su vivienda.",
        ctaLabel: "Leer artículo →",
      },
      {
        title: "Cómo evaluar el riesgo de moho en tu vivienda",
        body:
          "Guía de inspección habitación por habitación con checklist de 20 puntos y tabla diagnóstica ubicación → causa.",
        ctaLabel: "Leer guía →",
      },
    ],
    nextStepCards: [
      {
        title: "“Tengo moho visible”",
        body:
          "Empieza por la guía de evaluación visual. Identifica la ubicación, la extensión y el patrón  esa información determina todo lo que viene después.",
        ctaLabel: "Guía de evaluación →",
      },
      {
        title: "“Tengo síntomas de salud que mejoran fuera de casa”",
        body:
          "Esta es la señal más importante que debes tomarte en serio. Lee el artículo sobre salud y moho antes de cualquier otra acción.",
        ctaLabel: "Artículo sobre salud →",
      },
      {
        title: "“No sé si tengo moho”",
        body:
          "Muchas de las zonas más problemáticas son invisibles. La guía de inspección te dice dónde mirar  y qué cosas sigue sin descartar la ausencia de moho visible.",
        ctaLabel: "Empezar la inspección →",
      },
      {
        title: "“Necesito ayuda profesional”",
        body:
          "Una inspección independiente con higrómetro y cámara termográfica identifica el origen del problema sin venderte el tratamiento que viene después.",
        ctaLabel: "Saber más sobre la inspección independiente →",
      },
    ],
  },
};

function getProblemEyebrow(locale: ActiveLocale) {
  const labels: Record<ActiveLocale, string> = {
    pt: "O problema",
    en: "The problem",
    fr: "Le problème",
    de: "Das Problem",
    nl: "Het probleem",
    it: "Il problema",
    es: "El problema",
  };

  return labels[locale];
}

function getConflictEyebrow(locale: ActiveLocale) {
  const labels: Record<ActiveLocale, string> = {
    pt: "O conflito de interesse",
    en: "The conflict of interest",
    fr: "Le conflit d’intérêts",
    de: "Der Interessenkonflikt",
    nl: "Het belangenconflict",
    it: "Il conflitto di interessi",
    es: "El conflicto de interés",
  };

  return labels[locale];
}

function getArticleHref(
  locale: ActiveLocale,
  section: "portugal" | "remediation" | "health" | "inspection",
) {
  const articleKey =
    section === "remediation"
      ? "bleach"
      : section === "inspection"
        ? "inspection-guide"
        : section;
  const slug = foundationalArticles.find((article) => article.key === articleKey)?.slugs[locale];
  // The portugal article lives in the /articles/ route, not /portugal/
  if (section === "portugal") {
    return getArticlePath(locale, slug ?? "");
  }
  return getSectionPath(locale, section, slug);
}

function buildHomeSections(locale: ActiveLocale, content: HomeLocaleContent): GlobalPageSection[] {
  const aboutHref = getGlobalPath(locale, "about");
  const servicesHref = getGlobalPath(locale, "services");
  const articleHrefs = {
    portugal: getArticleHref(locale, "portugal"),
    remediation: getArticleHref(locale, "remediation"),
    health: getArticleHref(locale, "health"),
    inspection: getArticleHref(locale, "inspection"),
  };

  const sections: GlobalPageSection[] = [];

  if (content.faqTitle && content.faqCards?.length) {
    sections.push({
      title: content.faqTitle,
      layout: "utility",
      cards: content.faqCards.map((card) => ({
        title: card.title,
        body: card.body,
      })),
    });
  }

  return sections;
}

export function getHomeFallbackContent(locale: ActiveLocale): GlobalPageContent {
  const content = homeContentByLocale[locale] ?? homeContentByLocale.pt;

  return {
    pageKey: "home",
    language: locale,
    translationGroup: "home",
    title: "MoldCheck.pt",
    eyebrow: content.eyebrow,
    description: content.description,
    heroTitle: content.heroTitle,
    heroBody: content.heroBody,
    heroPrimaryCtaLabel: content.heroPrimaryCtaLabel,
    heroPrimaryCtaHref: getGlobalPath(locale, "tools"),
    heroSecondaryCtaLabel: content.heroSecondaryCtaLabel,
    heroSecondaryCtaHref: getArticleHref(locale, "inspection"),
    trustBarText: content.trustBarText,
    seoTitle: ({
      pt: "MoldCheck  Informação Independente sobre Bolor em Portugal",
      en: "MoldCheck  Independent Information on Mold and Damp in Portugal",
      fr: "MoldCheck  Information Indépendante sur les Moisissures au Portugal",
      de: "MoldCheck  Unabhängige Informationen über Schimmel in Portugal",
      nl: "MoldCheck  Onafhankelijke Informatie over Schimmel in Portugal",
      it: "MoldCheck  Informazione Indipendente sulla Muffa in Portogallo",
      es: "MoldCheck  Información Independiente sobre Moho en Portugal",
    } as Record<ActiveLocale, string>)[locale],
    seoDescription: ({
      pt: "Portugal tem o 2.º pior problema de bolor da Europa. Informação científica independente sobre diagnóstico, saúde e remediação  sem vender tratamentos.",
      en: "Portugal has the 2nd worst mold problem in Europe. Independent scientific information on diagnosis, health and remediation  without selling treatments.",
      fr: "Le Portugal a le 2e pire problème de moisissures en Europe. Information scientifique indépendante sur le diagnostic, la santé et la remédiation  sans vendre de traitements.",
      de: "Portugal hat das zweitschlimmste Schimmelproblem Europas. Unabhängige wissenschaftliche Informationen zu Diagnose, Gesundheit und Sanierung  ohne Behandlungen zu verkaufen.",
      nl: "Portugal heeft het op één na grootste schimmelprobleem van Europa. Onafhankelijke wetenschappelijke informatie over diagnose, gezondheid en sanering  zonder behandelingen te verkopen.",
      it: "Il Portogallo ha il secondo peggior problema di muffa in Europa. Informazione scientifica indipendente su diagnosi, salute e bonifica  senza vendere trattamenti.",
      es: "Portugal tiene el segundo peor problema de moho de Europa. Información científica independiente sobre diagnóstico, salud y remediación  sin vender tratamientos.",
    } as Record<ActiveLocale, string>)[locale],
    sections: buildHomeSections(locale, content),
    footerNote: undefined,
  };
}

export function getHomeProblemContent(locale: ActiveLocale) {
  const c = homeContentByLocale[locale] ?? homeContentByLocale.pt;
  return {
    problemEyebrow: getProblemEyebrow(locale),
    problemTitle: c.problemTitle,
    problemBody: c.problemBody,
    problemLink: c.problemLink,
  };
}

export function getHomeConflictContent(locale: ActiveLocale) {
  const c = homeContentByLocale[locale] ?? homeContentByLocale.pt;
  return {
    conflictEyebrow: getConflictEyebrow(locale),
    conflictTitle: c.conflictTitle,
    conflictBody: c.conflictBody,
    conflictLink: c.conflictLink,
    conflictHref: getGlobalPath(locale, "about"),
  };
}

export function getHomeFeaturedContent(locale: ActiveLocale) {
  const c = homeContentByLocale[locale] ?? homeContentByLocale.pt;
  const hrefs = [
    getArticleHref(locale, "portugal"),
    getArticleHref(locale, "remediation"),
    getArticleHref(locale, "health"),
    getArticleHref(locale, "inspection"),
  ];
  return {
    featuredTitle: c.featuredTitle,
    cards: c.featuredCards.map((card, i) => ({
      title: card.title,
      body: card.body,
      ctaLabel: card.ctaLabel,
      href: hrefs[i] ?? "#",
    })),
  };
}

export function getHomeNextStepsContent(locale: ActiveLocale) {
  const c = homeContentByLocale[locale] ?? homeContentByLocale.pt;
  const hrefs = [
    getArticleHref(locale, "inspection"),
    getArticleHref(locale, "health"),
    getArticleHref(locale, "inspection"),
    getSectionPath(locale, "inspection"),
  ];
  return {
    nextStepsTitle: c.nextStepsTitle,
    cards: c.nextStepCards.map((card, i) => ({
      title: card.title,
      body: card.body,
      ctaLabel: card.ctaLabel,
      href: hrefs[i] ?? "#",
    })),
  };
}

export function getHomeAboutContent(locale: ActiveLocale) {
  const c = homeContentByLocale[locale] ?? homeContentByLocale.pt;
  return {
    aboutEyebrow: c.aboutCardEyebrow,
    aboutTitle: c.aboutCardTitle,
    aboutBody: c.aboutBody,
    aboutLink: c.aboutLink,
    aboutHref: getGlobalPath(locale, "editorialPolicy"),
  };
}
