import type { ActiveLocale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import type { GlobalPageCard, GlobalPageContent, PortableTextBlock } from "@/types/content";

interface AboutLocaleContent {
  eyebrow: string;
  title: string;
  description: string;
  introParagraphs: string[];
  behindTitle: string;
  behindBody: string;
  policyTitle: string;
  policyCards: GlobalPageCard[];
  contactTitle: string;
  contactCards: GlobalPageCard[];
  disclosureTitle: string;
  disclosureText: string;
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
    eyebrow: "Sobre o MoldCheck.pt",
    title: "O que é o MoldCheck.pt — e porque existe",
    description:
      "MoldCheck.pt existe para explicar bolor, humidade e risco em Portugal com independência editorial e base científica.",
    introParagraphs: [
      "O MoldCheck.pt nasceu de uma observação simples: Portugal tem o segundo pior problema de bolor da Europa, e não existe nenhuma fonte de informação independente para as pessoas que vivem com essa realidade.",
      "O mercado disponível oferece diagnósticos gratuitos de empresas que ganham dinheiro com os tratamentos que recomendam. Os motores de busca devolvem sobretudo conteúdo produzido por essas mesmas empresas. Os médicos raramente têm formação em medicina ambiental doméstica. E os padrões internacionais de referência — as diretrizes da OMS de 2009, a norma IICRC S520 — existem em inglês, em linguagem técnica, inacessíveis ao consumidor comum.",
      "Este site existe para preencher esse espaço.",
    ],
    behindTitle: "Quem está por detrás disto",
    behindBody:
      "O MoldCheck.pt é uma iniciativa do FAIRBANK Group. O FAIRBANK Group opera a InspectOS, uma plataforma de inspecção independente de imóveis em Portugal.\n\nA nossa ligação comercial é com o diagnóstico independente — não com o tratamento. Um inspector independente que cobra pelo seu tempo e não recebe comissão do saneador que vai executar a obra é exactamente o modelo que este site defende. É também o modelo que a InspectOS representa.\n\nPieter Paul Castelein, fundador do FAIRBANK Group, escreveu o ensaio fundador deste site depois de descobrir a escala do problema em Portugal e perceber que não havia nenhum recurso de informação que o abordasse com honestidade.",
    policyTitle: "Como trabalhamos — e ao que nos comprometemos",
    policyCards: [
      {
        eyebrow: "1. Independência de tratamentos",
        title: "Sem conflito financeiro com a remediação",
        body:
          "MoldCheck.pt não recebe pagamentos, comissões ou qualquer forma de compensação de empresas que vendem tratamentos de humidade, produtos anti-bolor, sistemas de ventilação ou serviços de remediação.\n\nIsto não significa que o site não possa cobrar por serviços próprios ou relacionados com a sua actividade legítima, como inspecções independentes, análises laboratoriais, reservas ou recursos digitais. Significa, sim, que não aceitamos dinheiro de empresas cujo interesse comercial dependa de recomendar ou vender a remediação do problema.\n\nQuando recomendamos um produto, método ou serviço, fazemo-lo porque tem base científica ou utilidade real para o utilizador — não porque uma empresa de tratamento nos pagou para o recomendar.",
      },
      {
        eyebrow: "2. Base científica",
        title: "Literatura revista por pares e normas técnicas reconhecidas",
        body:
          "Todo o conteúdo clínico e técnico deste site é fundamentado em literatura científica revisada por pares ou em normas técnicas reconhecidas internacionalmente. As nossas fontes primárias incluem:\n\nDiretrizes da OMS para a Qualidade do Ar Interior: Humidade e Bolor (2009)\n\nIICRC S520 — Norma para Remediação Profissional de Bolor, 4.ª edição (2024)\n\nEPA — Manual de Remediação de Bolor\n\nInstituto de Medicina — Espaços Interiores Húmidos e Saúde (2004)\n\nInvestigação publicada em revistas científicas com revisão por pares, com citação explícita",
      },
      {
        eyebrow: "3. Honestidade sobre a incerteza",
        title: "Distinguimos o que é robusto, sugestivo e ainda desconhecido",
        body:
          "A ciência do bolor interior está em desenvolvimento activo. Há áreas onde a evidência é robusta e estabelecida — a ligação causal entre humidade e sintomas respiratórios, por exemplo. Há áreas onde a evidência é sugestiva mas não conclusiva — o CIRS, certos efeitos neurológicos dos MVOC. E há áreas onde simplesmente não sabemos.\n\nDistinguimos estas categorias explicitamente no nosso conteúdo. Não exageramos a certeza científica para criar urgência, nem minimizamos riscos documentados para evitar alarmar.",
      },
      {
        eyebrow: "4. Sem exagero de risco",
        title: "Rigor antes de medo",
        body:
          "O bolor em casa é um problema real com consequências documentadas para a saúde. Não é uma emergência mortal na maioria dos casos. Escrever sobre bolor com o objectivo de criar medo desproporcional — seja para vender tratamentos, seja para atrair tráfego — é uma prática que este site rejeita explicitamente.",
      },
      {
        eyebrow: "5. Transparência sobre limitações",
        title: "O site não substitui avaliação médica, técnica ou laboratorial",
        body:
          "Este site não substitui aconselhamento médico profissional, avaliação técnica presencial, ou diagnóstico laboratorial. Em artigos sobre saúde, este aviso é apresentado de forma proeminente.",
      },
      {
        eyebrow: "6. Actualização",
        title: "Compromisso de rever conteúdo relevante",
        body:
          "Comprometemo-nos a rever e actualizar o conteúdo quando nova evidência científica relevante for publicada. A data da última revisão é indicada em cada artigo.",
      },
      {
        eyebrow: "7. Erros e correcções",
        title: "Correcções transparentes e registadas",
        body:
          "Se identificar um erro factual no nosso conteúdo, contacte-nos. Corrigimos com transparência — o erro original, a correcção, e a data de actualização ficam registados.",
      },
    ],
    contactTitle: "Contacto",
    contactCards: [
      {
        eyebrow: "Questões editoriais",
        title: "Contacto geral",
        body: `Para questões editoriais: ${siteConfig.contactEmail}`,
        ctaLabel: `Escrever para ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Questões de inspecção",
        title: "InspectOS",
        body: "Para questões de inspecção: através da InspectOS em inspectos.pt",
        ctaLabel: "Abrir InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Independência editorial",
    disclosureText:
      "MoldCheck.pt defende diagnóstico independente e não aceita dinheiro de empresas cujo interesse comercial depende de vender a remediação do problema.",
  },
  en: {
    eyebrow: "About MoldCheck.pt",
    title: "What MoldCheck.pt is — and why it exists",
    description:
      "MoldCheck.pt exists to explain mold, damp and indoor risk in Portugal with editorial independence and scientific discipline.",
    introParagraphs: [
      "MoldCheck.pt was born from a simple observation: Portugal has Europe’s second-worst mold problem, and there is no independent source of information for the people living with that reality.",
      "The market offers free diagnoses from companies that make money from the treatments they recommend. Search engines largely return content produced by those same companies. Doctors rarely have training in domestic environmental medicine. And the main international reference standards — the 2009 WHO guidelines, the IICRC S520 standard — exist in English, in technical language, and remain inaccessible to the average resident.",
      "This site exists to fill that gap.",
    ],
    behindTitle: "Who is behind this",
    behindBody:
      "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK Group operates InspectOS, an independent property inspection platform in Portugal.\n\nOur commercial connection is with independent diagnosis — not with treatment. An independent inspector who charges for their time and receives no commission from the remediation contractor is exactly the model this site defends. It is also the model InspectOS represents.\n\nPieter Paul Castelein, founder of FAIRBANK Group, wrote the founding essay for this site after discovering the scale of Portugal’s mold problem and finding no honest information resource that addressed it directly.",
    policyTitle: "How we work — and what we are committed to",
    policyCards: [
      {
        eyebrow: "1. Independence from treatment",
        title: "No financial conflict with remediation",
        body:
          "MoldCheck.pt does not receive payments, commissions, or any form of compensation from companies that sell damp treatments, anti-mold products, ventilation systems, or remediation services.\n\nThis does not mean the site cannot charge for its own legitimate services or related activities, such as independent inspections, laboratory analysis, bookings, or digital resources. It means that we do not accept money from companies whose commercial interest depends on recommending or selling remediation.\n\nWhen we recommend a product, method, or service, we do so because it has scientific basis or real usefulness for the user — not because a remediation company paid us to recommend it.",
      },
      {
        eyebrow: "2. Scientific basis",
        title: "Peer-reviewed literature and recognised standards",
        body:
          "All clinical and technical content on this site is grounded in peer-reviewed scientific literature or internationally recognised technical standards. Our primary sources include:\n\nWHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)\n\nIICRC S520 — Standard for Professional Mold Remediation, 4th edition (2024)\n\nEPA — Mold Remediation Guide\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewed research with explicit citation",
      },
      {
        eyebrow: "3. Honesty about uncertainty",
        title: "We separate robust evidence from suggestive evidence",
        body:
          "The science of indoor mold is still actively developing. There are areas where evidence is robust and well established — the causal link between dampness and respiratory symptoms, for example. There are areas where evidence is suggestive but not conclusive — CIRS, and certain neurological effects of MVOCs. And there are areas where we simply do not know.\n\nWe distinguish these categories explicitly in our content. We do not overstate scientific certainty to create urgency, nor do we downplay documented risks to avoid alarming readers.",
      },
      {
        eyebrow: "4. No risk exaggeration",
        title: "Accuracy over fear",
        body:
          "Residential mold is a real problem with documented health consequences. It is not a fatal emergency in most cases. Writing about mold with the objective of creating disproportionate fear — whether to sell treatments or drive traffic — is a practice this site explicitly rejects.",
      },
      {
        eyebrow: "5. Transparency about limitations",
        title: "This site does not replace professional assessment",
        body:
          "This site does not replace professional medical advice, on-site technical assessment, or laboratory diagnosis. In health articles, this notice is displayed prominently.",
      },
      {
        eyebrow: "6. Updates",
        title: "We review and update when relevant evidence changes",
        body:
          "We commit to reviewing and updating content when relevant new scientific evidence is published. The date of last review is indicated on each article.",
      },
      {
        eyebrow: "7. Errors and corrections",
        title: "Corrections are logged transparently",
        body:
          "If you identify a factual error in our content, contact us. We correct transparently — the original error, the correction, and the update date are all recorded.",
      },
    ],
    contactTitle: "Contact",
    contactCards: [
      {
        eyebrow: "Editorial enquiries",
        title: "General contact",
        body: `Editorial enquiries: ${siteConfig.contactEmail}`,
        ctaLabel: `Email ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Inspection enquiries",
        title: "InspectOS",
        body: "Inspection enquiries: via InspectOS at inspectos.pt",
        ctaLabel: "Open InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Editorial independence",
    disclosureText:
      "MoldCheck.pt defends independent diagnosis and does not accept money from companies whose commercial interest depends on selling remediation.",
  },
  fr: {
    eyebrow: "À propos de MoldCheck.pt",
    title: "Ce qu’est MoldCheck.pt — et pourquoi il existe",
    description:
      "MoldCheck.pt existe pour expliquer les moisissures, l’humidité et le risque intérieur au Portugal avec indépendance éditoriale et base scientifique.",
    introParagraphs: [
      "MoldCheck.pt est né d’une observation simple : le Portugal a le deuxième pire problème de moisissures en Europe, et il n’existe aucune source d’information indépendante pour les personnes qui vivent avec cette réalité.",
      "Le marché propose des diagnostics gratuits d’entreprises qui gagnent de l’argent grâce aux traitements qu’elles recommandent. Les moteurs de recherche renvoient principalement des contenus produits par ces mêmes entreprises. Les médecins ont rarement une formation en médecine environnementale domestique. Et les principales normes de référence internationales — les lignes directrices de l’OMS de 2009, la norme IICRC S520 — existent en anglais, dans un langage technique, inaccessible au résident ordinaire.",
      "Ce site existe pour combler ce manque.",
    ],
    behindTitle: "Qui est derrière cela",
    behindBody:
      "MoldCheck.pt est une initiative du FAIRBANK Group. FAIRBANK Group exploite InspectOS, une plateforme indépendante d’inspection immobilière au Portugal.\n\nNotre lien commercial est avec le diagnostic indépendant — pas avec le traitement. Un inspecteur indépendant qui facture son temps et ne perçoit aucune commission de l’entreprise de remédiation est exactement le modèle que ce site défend. C’est aussi le modèle qu’InspectOS représente.\n\nPieter Paul Castelein, fondateur du FAIRBANK Group, a rédigé l’essai fondateur de ce site après avoir découvert l’ampleur du problème au Portugal et constaté l’absence d’une ressource honnête pour l’expliquer.",
    policyTitle: "Comment nous travaillons — et à quoi nous nous engageons",
    policyCards: [
      {
        eyebrow: "1. Indépendance vis-à-vis des traitements",
        title: "Aucun conflit financier avec la remédiation",
        body:
          "MoldCheck.pt ne reçoit aucun paiement, commission ou autre forme de compensation de la part d’entreprises qui vendent des traitements contre l’humidité, des produits anti-moisissures, des systèmes de ventilation ou des services de remédiation.\n\nCela ne signifie pas que le site ne puisse pas facturer ses propres services légitimes ou des activités liées à sa mission, comme les inspections indépendantes, les analyses de laboratoire, les réservations ou les ressources numériques. Cela signifie que nous n’acceptons pas d’argent d’entreprises dont l’intérêt commercial dépend de la recommandation ou de la vente de la remédiation.\n\nLorsque nous recommandons un produit, une méthode ou un service, nous le faisons parce qu’il repose sur une base scientifique ou présente une utilité réelle pour l’utilisateur — et non parce qu’une entreprise de remédiation nous a payés pour le recommander.",
      },
      {
        eyebrow: "2. Base scientifique",
        title: "Littérature évaluée par les pairs et normes reconnues",
        body:
          "Tout le contenu clinique et technique de ce site repose sur de la littérature scientifique évaluée par les pairs ou sur des normes techniques reconnues au niveau international. Nos sources principales incluent :\n\nLignes directrices de l’OMS pour la qualité de l’air intérieur : humidité et moisissures (2009)\n\nIICRC S520 — norme de remédiation professionnelle des moisissures, 4e édition (2024)\n\nEPA — guide de remédiation des moisissures\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nRecherches scientifiques publiées avec citations explicites",
      },
      {
        eyebrow: "3. Honnêteté face à l’incertitude",
        title: "Nous distinguons les niveaux de preuve",
        body:
          "La science des moisissures en intérieur évolue encore activement. Il existe des domaines où les preuves sont solides et bien établies — par exemple le lien causal entre l’humidité et les symptômes respiratoires. D’autres domaines reposent sur des preuves suggestives mais non concluantes — comme le CIRS ou certains effets neurologiques des MVOC. Et il y a aussi des domaines où nous ne savons tout simplement pas.\n\nNous distinguons explicitement ces catégories dans notre contenu. Nous n’exagérons pas la certitude scientifique pour créer un sentiment d’urgence, et nous ne minimisons pas les risques documentés pour éviter d’inquiéter.",
      },
      {
        eyebrow: "4. Pas d’exagération du risque",
        title: "La précision avant la peur",
        body:
          "Les moisissures dans le logement sont un problème réel, avec des conséquences sanitaires documentées. Ce n’est pas, dans la plupart des cas, une urgence mortelle. Écrire sur les moisissures dans le but de créer une peur disproportionnée — que ce soit pour vendre des traitements ou générer du trafic — est une pratique que ce site rejette explicitement.",
      },
      {
        eyebrow: "5. Transparence sur les limites",
        title: "Le site ne remplace pas une évaluation professionnelle",
        body:
          "Ce site ne remplace pas un avis médical professionnel, une évaluation technique sur place, ni un diagnostic de laboratoire. Dans les articles de santé, cet avertissement est affiché de manière visible.",
      },
      {
        eyebrow: "6. Mises à jour",
        title: "Révision et actualisation lorsque la science évolue",
        body:
          "Nous nous engageons à revoir et à actualiser le contenu lorsque de nouvelles preuves scientifiques pertinentes sont publiées. La date de dernière révision est indiquée sur chaque article.",
      },
      {
        eyebrow: "7. Erreurs et corrections",
        title: "Corrections transparentes et documentées",
        body:
          "Si vous identifiez une erreur factuelle dans notre contenu, contactez-nous. Nous corrigeons de manière transparente — l’erreur initiale, la correction et la date de mise à jour sont consignées.",
      },
    ],
    contactTitle: "Contact",
    contactCards: [
      {
        eyebrow: "Questions éditoriales",
        title: "Contact général",
        body: `Questions éditoriales : ${siteConfig.contactEmail}`,
        ctaLabel: `Écrire à ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Questions liées aux inspections",
        title: "InspectOS",
        body: "Questions liées aux inspections : via InspectOS sur inspectos.pt",
        ctaLabel: "Ouvrir InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Indépendance éditoriale",
    disclosureText:
      "MoldCheck.pt défend le diagnostic indépendant et n’accepte pas d’argent d’entreprises dont l’intérêt commercial dépend de la vente de la remédiation.",
  },
  de: {
    eyebrow: "Über MoldCheck.pt",
    title: "Was MoldCheck.pt ist — und warum es existiert",
    description:
      "MoldCheck.pt erklärt Schimmel, Feuchtigkeit und Innenraumrisiken in Portugal mit redaktioneller Unabhängigkeit und wissenschaftlicher Grundlage.",
    introParagraphs: [
      "MoldCheck.pt entstand aus einer einfachen Beobachtung: Portugal hat Europas zweitschlimmstes Schimmelproblem, und es gibt keine unabhängige Informationsquelle für die Menschen, die mit dieser Realität leben.",
      "Der Markt bietet kostenlose Diagnosen von Unternehmen an, die mit den von ihnen empfohlenen Behandlungen Geld verdienen. Suchmaschinen liefern überwiegend Inhalte, die genau von diesen Unternehmen produziert wurden. Ärztinnen und Ärzte haben nur selten eine Ausbildung in häuslicher Umweltmedizin. Und die wichtigsten internationalen Referenzstandards — die WHO-Leitlinien von 2009 und der IICRC S520 — liegen auf Englisch und in technischer Sprache vor und sind für die meisten Bewohner kaum zugänglich.",
      "Diese Website existiert, um diese Lücke zu schließen.",
    ],
    behindTitle: "Wer dahintersteht",
    behindBody:
      "MoldCheck.pt ist eine Initiative der FAIRBANK Group. Die FAIRBANK Group betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.\n\nUnsere kommerzielle Verbindung liegt im unabhängigen Diagnosedienst — nicht in der Behandlung. Ein unabhängiger Inspektor, der seine Zeit berechnet und keine Provision vom Sanierungsunternehmen erhält, ist genau das Modell, für das diese Website eintritt. Genau dieses Modell verkörpert auch InspectOS.\n\nPieter Paul Castelein, Gründer der FAIRBANK Group, schrieb den Gründungsessay dieser Website, nachdem er das Ausmaß des Problems in Portugal erkannt und festgestellt hatte, dass es keine ehrliche Informationsquelle dazu gab.",
    policyTitle: "Wie wir arbeiten — und wozu wir uns verpflichten",
    policyCards: [
      {
        eyebrow: "1. Unabhängigkeit von Behandlungen",
        title: "Kein finanzieller Interessenkonflikt mit Sanierung",
        body:
          "MoldCheck.pt erhält keine Zahlungen, Provisionen oder sonstige Vergütungen von Unternehmen, die Feuchtigkeitsbehandlungen, Anti-Schimmel-Produkte, Lüftungssysteme oder Sanierungsleistungen verkaufen.\n\nDas bedeutet nicht, dass die Website keine legitimen eigenen Leistungen oder damit zusammenhängenden Angebote abrechnen darf, etwa unabhängige Inspektionen, Laboranalysen, Buchungen oder digitale Ressourcen. Es bedeutet vielmehr, dass wir kein Geld von Unternehmen annehmen, deren kommerzielles Interesse davon abhängt, die Sanierung des Problems zu empfehlen oder zu verkaufen.\n\nWenn wir ein Produkt, eine Methode oder eine Dienstleistung empfehlen, tun wir das, weil dafür eine wissenschaftliche Grundlage oder ein echter Nutzen für den Nutzer besteht — nicht weil uns ein Sanierungsunternehmen dafür bezahlt hat.",
      },
      {
        eyebrow: "2. Wissenschaftliche Grundlage",
        title: "Peer-reviewte Literatur und anerkannte Standards",
        body:
          "Alle klinischen und technischen Inhalte dieser Website beruhen auf peer-reviewter wissenschaftlicher Literatur oder auf international anerkannten technischen Standards. Zu unseren wichtigsten Quellen gehören:\n\nWHO-Leitlinien zur Innenraumluftqualität: Feuchtigkeit und Schimmel (2009)\n\nIICRC S520 — Standard für professionelle Schimmelsanierung, 4. Ausgabe (2024)\n\nEPA — Leitfaden zur Schimmelbeseitigung\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewte Forschung mit expliziten Quellenangaben",
      },
      {
        eyebrow: "3. Ehrlichkeit im Umgang mit Unsicherheit",
        title: "Wir unterscheiden klar zwischen Evidenzgraden",
        body:
          "Die Wissenschaft zu Schimmel in Innenräumen entwickelt sich weiterhin aktiv. Es gibt Bereiche, in denen die Evidenz solide und gut belegt ist — zum Beispiel der kausale Zusammenhang zwischen Feuchtigkeit und Atemwegssymptomen. Es gibt Bereiche, in denen die Evidenz eher hinweisend als schlüssig ist — etwa CIRS oder bestimmte neurologische Wirkungen von MVOCs. Und es gibt Bereiche, in denen wir es schlicht nicht wissen.\n\nWir unterscheiden diese Kategorien ausdrücklich in unseren Inhalten. Wir übertreiben wissenschaftliche Gewissheit nicht, um Dringlichkeit zu erzeugen, und wir verharmlosen dokumentierte Risiken nicht, um Leser zu beruhigen.",
      },
      {
        eyebrow: "4. Keine Risikoübertreibung",
        title: "Genauigkeit statt Angst",
        body:
          "Schimmel in Wohnräumen ist ein reales Problem mit dokumentierten gesundheitlichen Folgen. In den meisten Fällen ist er kein lebensbedrohlicher Notfall. Über Schimmel mit dem Ziel zu schreiben, unverhältnismäßige Angst zu erzeugen — sei es, um Behandlungen zu verkaufen oder Reichweite zu generieren — ist eine Praxis, die diese Website ausdrücklich ablehnt.",
      },
      {
        eyebrow: "5. Transparenz über Grenzen",
        title: "Die Website ersetzt keine professionelle Bewertung",
        body:
          "Diese Website ersetzt keine professionelle medizinische Beratung, keine technische Vor-Ort-Bewertung und keine Labordiagnostik. In Gesundheitsartikeln wird dieser Hinweis deutlich sichtbar angezeigt.",
      },
      {
        eyebrow: "6. Aktualisierung",
        title: "Überprüfung und Aktualisierung bei neuen Erkenntnissen",
        body:
          "Wir verpflichten uns, Inhalte zu überprüfen und zu aktualisieren, wenn neue relevante wissenschaftliche Erkenntnisse veröffentlicht werden. Das Datum der letzten Überprüfung wird bei jedem Artikel angegeben.",
      },
      {
        eyebrow: "7. Fehler und Korrekturen",
        title: "Korrekturen werden transparent dokumentiert",
        body:
          "Wenn Sie einen sachlichen Fehler in unseren Inhalten feststellen, kontaktieren Sie uns. Wir korrigieren transparent — der ursprüngliche Fehler, die Korrektur und das Aktualisierungsdatum werden dokumentiert.",
      },
    ],
    contactTitle: "Kontakt",
    contactCards: [
      {
        eyebrow: "Redaktionelle Anfragen",
        title: "Allgemeiner Kontakt",
        body: `Redaktionelle Anfragen: ${siteConfig.contactEmail}`,
        ctaLabel: `An ${siteConfig.contactEmail} schreiben`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Anfragen zu Inspektionen",
        title: "InspectOS",
        body: "Anfragen zu Inspektionen: über InspectOS auf inspectos.pt",
        ctaLabel: "InspectOS öffnen",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Redaktionelle Unabhängigkeit",
    disclosureText:
      "MoldCheck.pt verteidigt unabhängige Diagnose und nimmt kein Geld von Unternehmen an, deren kommerzielles Interesse vom Verkauf der Sanierung abhängt.",
  },
  nl: {
    eyebrow: "Over MoldCheck.pt",
    title: "Wat MoldCheck.pt is — en waarom het bestaat",
    description:
      "MoldCheck.pt bestaat om schimmel, vocht en binnenrisico in Portugal uit te leggen met redactionele onafhankelijkheid en wetenschappelijke basis.",
    introParagraphs: [
      "MoldCheck.pt ontstond vanuit een eenvoudige observatie: Portugal heeft het op één na ergste schimmelprobleem van Europa, en er bestaat geen onafhankelijke informatiebron voor de mensen die met die realiteit leven.",
      "De markt biedt gratis diagnoses aan van bedrijven die geld verdienen met de behandelingen die ze aanbevelen. Zoekmachines tonen vooral content die door diezelfde bedrijven is geproduceerd. Artsen hebben zelden opleiding in huiselijke milieugeneeskunde. En de belangrijkste internationale referentienormen — de WHO-richtlijnen uit 2009 en de IICRC S520 — bestaan in het Engels, in technische taal, en zijn voor de gemiddelde bewoner moeilijk toegankelijk.",
      "Deze website bestaat om dat gat te vullen.",
    ],
    behindTitle: "Wie hierachter zit",
    behindBody:
      "MoldCheck.pt is een initiatief van de FAIRBANK Group. De FAIRBANK Group beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.\n\nOnze commerciële band ligt bij onafhankelijke diagnose — niet bij behandeling. Een onafhankelijke inspecteur die betaald wordt voor zijn tijd en geen commissie ontvangt van het saneringsbedrijf is precies het model dat deze site verdedigt. Dat is ook het model dat InspectOS vertegenwoordigt.\n\nPieter Paul Castelein, oprichter van de FAIRBANK Group, schreef het oprichtingsessay van deze site nadat hij de omvang van het Portugese schimmelprobleem had ontdekt en merkte dat er geen eerlijke informatiebron bestond die dit rechtstreeks behandelde.",
    policyTitle: "Hoe wij werken — en waar wij ons aan verbinden",
    policyCards: [
      {
        eyebrow: "1. Onafhankelijkheid van behandelingen",
        title: "Geen financieel conflict met sanering",
        body:
          "MoldCheck.pt ontvangt geen betalingen, commissies of enige andere vorm van vergoeding van bedrijven die vochtbehandelingen, antischimmelproducten, ventilatiesystemen of saneringsdiensten verkopen.\n\nDit betekent niet dat de site geen legitieme eigen diensten of verwante activiteiten in rekening kan brengen, zoals onafhankelijke inspecties, laboratoriumanalyses, boekingen of digitale middelen. Het betekent wél dat wij geen geld aannemen van bedrijven waarvan het commerciële belang afhangt van het aanbevelen of verkopen van sanering.\n\nWanneer wij een product, methode of dienst aanbevelen, doen wij dat omdat die een wetenschappelijke basis heeft of echt nuttig is voor de gebruiker — niet omdat een saneringsbedrijf ons daarvoor heeft betaald.",
      },
      {
        eyebrow: "2. Wetenschappelijke basis",
        title: "Peer-reviewed literatuur en erkende normen",
        body:
          "Alle klinische en technische inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijke literatuur of op internationaal erkende technische normen. Onze belangrijkste bronnen zijn onder meer:\n\nWHO-richtlijnen voor binnenluchtkwaliteit: vocht en schimmel (2009)\n\nIICRC S520 — standaard voor professionele schimmelsanering, 4e editie (2024)\n\nEPA — gids voor schimmelremediatie\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewed onderzoek met expliciete bronvermelding",
      },
      {
        eyebrow: "3. Eerlijkheid over onzekerheid",
        title: "We maken verschillen in bewijs expliciet",
        body:
          "De wetenschap rond schimmel binnenshuis is nog volop in ontwikkeling. Er zijn gebieden waar het bewijs sterk en goed gevestigd is — bijvoorbeeld het causale verband tussen vocht en ademhalingsklachten. Er zijn ook gebieden waar het bewijs suggestief maar niet sluitend is — zoals CIRS en bepaalde neurologische effecten van MVOC’s. En er zijn gebieden waar we het simpelweg nog niet weten.\n\nWij maken dat onderscheid expliciet in onze inhoud. We overdrijven wetenschappelijke zekerheid niet om urgentie te creëren, en we bagatelliseren gedocumenteerde risico’s niet om lezers gerust te stellen.",
      },
      {
        eyebrow: "4. Geen overdrijving van risico’s",
        title: "Nauwkeurigheid boven angst",
        body:
          "Schimmel in woningen is een reëel probleem met gedocumenteerde gevolgen voor de gezondheid. In de meeste gevallen is het geen levensbedreigende noodsituatie. Schrijven over schimmel met als doel buitensporige angst op te wekken — of dat nu is om behandelingen te verkopen of om verkeer aan te trekken — is een praktijk die deze website expliciet afwijst.",
      },
      {
        eyebrow: "5. Transparantie over beperkingen",
        title: "De site vervangt geen professionele beoordeling",
        body:
          "Deze website vervangt geen professioneel medisch advies, technische beoordeling ter plaatse of laboratoriumdiagnose. In gezondheidsartikelen wordt deze waarschuwing duidelijk weergegeven.",
      },
      {
        eyebrow: "6. Updates",
        title: "Herziening en updates bij nieuwe inzichten",
        body:
          "Wij verbinden ons ertoe de inhoud te herzien en bij te werken wanneer nieuwe relevante wetenschappelijke inzichten worden gepubliceerd. De datum van de laatste herziening wordt bij elk artikel vermeld.",
      },
      {
        eyebrow: "7. Fouten en correcties",
        title: "Correcties worden transparant vastgelegd",
        body:
          "Als je een feitelijke fout in onze inhoud vaststelt, neem dan contact met ons op. Wij corrigeren transparant — de oorspronkelijke fout, de correctie en de datum van de update worden vastgelegd.",
      },
    ],
    contactTitle: "Contact",
    contactCards: [
      {
        eyebrow: "Redactionele vragen",
        title: "Algemeen contact",
        body: `Redactionele vragen: ${siteConfig.contactEmail}`,
        ctaLabel: `Mail naar ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Vragen over inspecties",
        title: "InspectOS",
        body: "Vragen over inspecties: via InspectOS op inspectos.pt",
        ctaLabel: "Open InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Redactionele onafhankelijkheid",
    disclosureText:
      "MoldCheck.pt verdedigt onafhankelijke diagnose en accepteert geen geld van bedrijven waarvan het commerciële belang afhangt van de verkoop van sanering.",
  },
  it: {
    eyebrow: "Informazioni su MoldCheck.pt",
    title: "Che cos’è MoldCheck.pt — e perché esiste",
    description:
      "MoldCheck.pt esiste per spiegare muffa, umidità e rischio indoor in Portogallo con indipendenza editoriale e base scientifica.",
    introParagraphs: [
      "MoldCheck.pt è nato da un’osservazione semplice: il Portogallo ha il secondo peggior problema di muffa in Europa e non esiste alcuna fonte di informazione indipendente per le persone che convivono con questa realtà.",
      "Il mercato disponibile offre diagnosi gratuite da parte di aziende che guadagnano dai trattamenti che raccomandano. I motori di ricerca restituiscono soprattutto contenuti prodotti da quelle stesse aziende. I medici raramente hanno una formazione in medicina ambientale domestica. E gli standard internazionali di riferimento — le linee guida dell’OMS del 2009 e lo standard IICRC S520 — esistono in inglese, in linguaggio tecnico, poco accessibile al residente comune.",
      "Questo sito esiste per colmare quel vuoto.",
    ],
    behindTitle: "Chi c’è dietro",
    behindBody:
      "MoldCheck.pt è un’iniziativa del FAIRBANK Group. FAIRBANK Group gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.\n\nIl nostro legame commerciale è con la diagnosi indipendente — non con il trattamento. Un ispettore indipendente che fa pagare il proprio tempo e non riceve commissioni dall’impresa di risanamento è esattamente il modello che questo sito difende. È anche il modello che InspectOS rappresenta.\n\nPieter Paul Castelein, fondatore del FAIRBANK Group, ha scritto il saggio fondativo di questo sito dopo aver scoperto la reale dimensione del problema della muffa in Portogallo e aver constatato che non esisteva alcuna risorsa informativa onesta che lo affrontasse in modo diretto.",
    policyTitle: "Come lavoriamo — e a che cosa ci impegniamo",
    policyCards: [
      {
        eyebrow: "1. Indipendenza dai trattamenti",
        title: "Nessun conflitto finanziario con la bonifica",
        body:
          "MoldCheck.pt non riceve pagamenti, commissioni o alcuna forma di compensazione da aziende che vendono trattamenti contro l’umidità, prodotti antimuffa, sistemi di ventilazione o servizi di bonifica.\n\nCiò non significa che il sito non possa addebitare servizi propri o attività legittimamente collegate alla sua missione, come ispezioni indipendenti, analisi di laboratorio, prenotazioni o risorse digitali. Significa invece che non accettiamo denaro da aziende il cui interesse commerciale dipende dal raccomandare o vendere la bonifica del problema.\n\nQuando raccomandiamo un prodotto, un metodo o un servizio, lo facciamo perché ha una base scientifica o una reale utilità per l’utente — non perché un’azienda di bonifica ci ha pagato per raccomandarlo.",
      },
      {
        eyebrow: "2. Base scientifica",
        title: "Letteratura peer-reviewed e standard riconosciuti",
        body:
          "Tutti i contenuti clinici e tecnici di questo sito si basano su letteratura scientifica peer-reviewed o su standard tecnici riconosciuti a livello internazionale. Le nostre fonti principali includono:\n\nLinee guida dell’OMS per la qualità dell’aria interna: umidità e muffa (2009)\n\nIICRC S520 — Standard internazionale per la bonifica professionale della muffa, 4ª edizione (2024)\n\nEPA — Guida alla bonifica della muffa\n\nInstitute of Medicine — Ambienti interni umidi e salute (2004)\n\nRicerca scientifica peer-reviewed con citazione esplicita",
      },
      {
        eyebrow: "3. Onestà sull’incertezza",
        title: "Distinguiamo ciò che è solido, suggestivo e ancora incerto",
        body:
          "La scienza della muffa indoor è in continua evoluzione. Ci sono aree in cui le prove sono solide e consolidate — per esempio il legame causale tra umidità e sintomi respiratori. Ci sono aree in cui le prove sono suggestive ma non conclusive — come il CIRS o alcuni effetti neurologici degli MVOC. E ci sono aree in cui semplicemente non sappiamo ancora abbastanza.\n\nDistinguiamo esplicitamente queste categorie nei nostri contenuti. Non esageriamo la certezza scientifica per creare urgenza, né minimizziamo rischi documentati per evitare di allarmare.",
      },
      {
        eyebrow: "4. Nessuna esagerazione del rischio",
        title: "Rigore prima della paura",
        body:
          "La muffa in casa è un problema reale con conseguenze documentate per la salute. Nella maggior parte dei casi non è un’emergenza mortale. Scrivere di muffa con l’obiettivo di creare una paura sproporzionata — sia per vendere trattamenti sia per attirare traffico — è una pratica che questo sito rifiuta esplicitamente.",
      },
      {
        eyebrow: "5. Trasparenza sui limiti",
        title: "Il sito non sostituisce una valutazione professionale",
        body:
          "Questo sito non sostituisce il parere medico professionale, la valutazione tecnica in presenza o la diagnosi di laboratorio. Negli articoli sulla salute, questo avviso viene mostrato in modo ben visibile.",
      },
      {
        eyebrow: "6. Aggiornamenti",
        title: "Revisione e aggiornamento quando emergono nuove evidenze",
        body:
          "Ci impegniamo a rivedere e aggiornare i contenuti quando vengono pubblicate nuove evidenze scientifiche rilevanti. La data dell’ultima revisione è indicata in ogni articolo.",
      },
      {
        eyebrow: "7. Errori e correzioni",
        title: "Correzioni trasparenti e registrate",
        body:
          "Se individui un errore fattuale nei nostri contenuti, contattaci. Correggiamo in modo trasparente — l’errore originale, la correzione e la data di aggiornamento vengono registrati.",
      },
    ],
    contactTitle: "Contatto",
    contactCards: [
      {
        eyebrow: "Questioni editoriali",
        title: "Contatto generale",
        body: `Per questioni editoriali: ${siteConfig.contactEmail}`,
        ctaLabel: `Scrivi a ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Questioni relative alle ispezioni",
        title: "InspectOS",
        body: "Per questioni relative alle ispezioni: tramite InspectOS su inspectos.pt",
        ctaLabel: "Apri InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Indipendenza editoriale",
    disclosureText:
      "MoldCheck.pt difende la diagnosi indipendente e non accetta denaro da aziende il cui interesse commerciale dipende dalla vendita della bonifica del problema.",
  },
  es: {
    eyebrow: "Sobre MoldCheck.pt",
    title: "Qué es MoldCheck.pt — y por qué existe",
    description:
      "MoldCheck.pt existe para explicar moho, humedad y riesgo interior en Portugal con independencia editorial y base científica.",
    introParagraphs: [
      "MoldCheck.pt nació de una observación sencilla: Portugal tiene el segundo peor problema de moho de Europa y no existe ninguna fuente de información independiente para las personas que viven con esa realidad.",
      "El mercado disponible ofrece diagnósticos gratuitos de empresas que ganan dinero con los tratamientos que recomiendan. Los buscadores devuelven sobre todo contenido producido por esas mismas empresas. Los médicos rara vez tienen formación en medicina ambiental doméstica. Y los estándares internacionales de referencia — las directrices de la OMS de 2009 y la norma IICRC S520 — existen en inglés, en lenguaje técnico, inaccesible para el residente medio.",
      "Este sitio existe para cubrir ese vacío.",
    ],
    behindTitle: "Quién está detrás",
    behindBody:
      "MoldCheck.pt es una iniciativa del FAIRBANK Group. FAIRBANK Group opera InspectOS, una plataforma independiente de inspección inmobiliaria en Portugal.\n\nNuestra conexión comercial está con el diagnóstico independiente — no con el tratamiento. Un inspector independiente que cobra por su tiempo y no recibe comisión de la empresa de remediación es exactamente el modelo que este sitio defiende. También es el modelo que representa InspectOS.\n\nPieter Paul Castelein, fundador de FAIRBANK Group, escribió el ensayo fundacional de este sitio después de descubrir la magnitud del problema del moho en Portugal y comprobar que no existía ningún recurso informativo honesto que lo abordara de forma directa.",
    policyTitle: "Cómo trabajamos — y a qué nos comprometemos",
    policyCards: [
      {
        eyebrow: "1. Independencia frente a los tratamientos",
        title: "Sin conflicto financiero con la remediación",
        body:
          "MoldCheck.pt no recibe pagos, comisiones ni ninguna forma de compensación de empresas que venden tratamientos contra la humedad, productos antimoho, sistemas de ventilación o servicios de remediación.\n\nEsto no significa que el sitio no pueda cobrar por servicios propios o actividades legítimamente relacionadas con su misión, como inspecciones independientes, análisis de laboratorio, reservas o recursos digitales. Significa, en cambio, que no aceptamos dinero de empresas cuyo interés comercial depende de recomendar o vender la remediación del problema.\n\nCuando recomendamos un producto, método o servicio, lo hacemos porque tiene base científica o una utilidad real para el usuario — no porque una empresa de remediación nos haya pagado por recomendarlo.",
      },
      {
        eyebrow: "2. Base científica",
        title: "Literatura revisada por pares y normas reconocidas",
        body:
          "Todo el contenido clínico y técnico de este sitio se basa en literatura científica revisada por pares o en normas técnicas reconocidas internacionalmente. Nuestras fuentes principales incluyen:\n\nDirectrices de la OMS para la calidad del aire interior: humedad y moho (2009)\n\nIICRC S520 — Norma internacional para la remediación profesional del moho, 4.ª edición (2024)\n\nEPA — Guía de remediación del moho\n\nInstitute of Medicine — Espacios interiores húmedos y salud (2004)\n\nInvestigación revisada por pares con cita explícita",
      },
      {
        eyebrow: "3. Honestidad sobre la incertidumbre",
        title: "Distingimos lo sólido, lo sugestivo y lo incierto",
        body:
          "La ciencia del moho interior está en desarrollo activo. Hay áreas donde la evidencia es sólida y está consolidada — por ejemplo, la relación causal entre humedad y síntomas respiratorios. Hay áreas donde la evidencia es sugestiva pero no concluyente — como el CIRS o ciertos efectos neurológicos de los MVOC. Y hay áreas donde simplemente todavía no lo sabemos.\n\nDistinguimos estas categorías de forma explícita en nuestro contenido. No exageramos la certeza científica para crear urgencia, ni minimizamos riesgos documentados para evitar alarmar.",
      },
      {
        eyebrow: "4. Sin exageración del riesgo",
        title: "Rigor antes que miedo",
        body:
          "El moho en la vivienda es un problema real con consecuencias documentadas para la salud. En la mayoría de los casos no es una emergencia mortal. Escribir sobre moho con el objetivo de generar miedo desproporcionado — ya sea para vender tratamientos o para atraer tráfico — es una práctica que este sitio rechaza expresamente.",
      },
      {
        eyebrow: "5. Transparencia sobre las limitaciones",
        title: "El sitio no sustituye una evaluación profesional",
        body:
          "Este sitio no sustituye el consejo médico profesional, la evaluación técnica presencial ni el diagnóstico de laboratorio. En los artículos sobre salud, este aviso aparece de forma destacada.",
      },
      {
        eyebrow: "6. Actualizaciones",
        title: "Revisión y actualización cuando cambie la evidencia",
        body:
          "Nos comprometemos a revisar y actualizar el contenido cuando se publiquen nuevas evidencias científicas relevantes. La fecha de la última revisión se indica en cada artículo.",
      },
      {
        eyebrow: "7. Errores y correcciones",
        title: "Correcciones transparentes y registradas",
        body:
          "Si identificas un error factual en nuestro contenido, contáctanos. Corregimos con transparencia — el error original, la corrección y la fecha de actualización quedan registradas.",
      },
    ],
    contactTitle: "Contacto",
    contactCards: [
      {
        eyebrow: "Cuestiones editoriales",
        title: "Contacto general",
        body: `Para cuestiones editoriales: ${siteConfig.contactEmail}`,
        ctaLabel: `Escribir a ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
      {
        eyebrow: "Cuestiones de inspección",
        title: "InspectOS",
        body: "Para cuestiones de inspección: a través de InspectOS en inspectos.pt",
        ctaLabel: "Abrir InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
    ],
    disclosureTitle: "Independencia editorial",
    disclosureText:
      "MoldCheck.pt defiende el diagnóstico independiente y no acepta dinero de empresas cuyo interés comercial depende de vender la remediación del problema.",
  },
};

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
    sections: [
      {
        title: content.policyTitle,
        tone: "band",
        layout: "utility",
        cards: content.policyCards,
      },
      {
        title: content.contactTitle,
        layout: "utility",
        cards: content.contactCards,
      },
    ],
    disclosureTitle: content.disclosureTitle,
    disclosureText: content.disclosureText,
  };
}

