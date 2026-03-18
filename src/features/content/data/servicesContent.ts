import type { ActiveLocale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import type { GlobalPageCard, GlobalPageContent, PortableTextBlock } from "@/types/content";

interface ServicesLocaleContent {
  eyebrow: string;
  title: string;
  description: string;
  independentTitle: string;
  independentParagraphs: string[];
  howItWorksTitle: string;
  howItWorksBody: string;
  servicesTitle: string;
  tier1Cards: GlobalPageCard[];
  tier2Cards: GlobalPageCard[];
  tier3Cards: GlobalPageCard[];
  tier4Cards: GlobalPageCard[];
  bookingTitle: string;
  bookingCards: GlobalPageCard[];
  coverageTitle: string;
  coverageBody: string;
  pricingTitle: string;
  pricingBody: string;
  disclosureText: string;
}

function paragraphsToBlocks(paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, index) => ({
    _type: "block",
    _key: `services-paragraph-${index + 1}`,
    style: "normal",
    children: [{ _type: "span", _key: `services-span-${index + 1}`, text }],
  }));
}

const servicesContentByLocale: Record<ActiveLocale, ServicesLocaleContent> = {
  pt: {
    eyebrow: "Inspecção independente",
    title: "Inspecção Independente de Humidade e Bolor em Portugal",
    description:
      "Diagnóstico independente, análise laboratorial e monitorização apresentados com clareza, sem o enquadramento comercial do tratamento.",
    independentTitle: "O que significa \"independente\"?",
    independentParagraphs: [
      "Em Portugal, o diagnóstico de problemas de humidade e bolor é quase sempre realizado pela empresa que vai vender o tratamento. O diagnóstico gratuito é o início de um funil comercial — não um serviço de informação imparcial.",
      "Uma inspecção independente funciona de forma diferente. O inspector cobra pelo seu tempo. Não recebe comissão do saneador, do fabricante do sistema de ventilação, nem de nenhuma outra empresa que possa beneficiar do resultado do diagnóstico. O seu único interesse é dizer-lhe com precisão o que tem.",
      "Este é o modelo que a InspectOS representa — e o único modelo que o MoldCheck.pt recomenda.",
    ],
    howItWorksTitle: "Como funciona",
    howItWorksBody:
      "As inspecções são realizadas por inspectores certificados da InspectOS equipados com:\n\nHigrómetro digital de precisão — medição de humidade relativa do ar e temperatura\n\nMedidor de humidade de materiais — medição não invasiva do teor de humidade em paredes, pavimentos e tetos\n\nCâmara termográfica — detecção de pontes térmicas, infiltrações ocultas e zonas de condensação invisíveis a olho nu\n\nCapacidade de colheita de amostras — superfícies, materiais e ar, para análise laboratorial quando indicado\n\nApós a inspecção, recebe um relatório escrito com: localização e extensão do problema, causa provável, recomendações baseadas em evidência científica, e indicação clara de quando uma análise laboratorial é ou não necessária.\n\nO relatório não inclui um orçamento de tratamento. Não recomendamos empresas específicas de saneamento. Não temos acordo comercial com nenhuma empresa de remediação.",
    servicesTitle: "Serviços disponíveis",
    tier1Cards: [
      {
        eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
        title: "Inspecção Padrão",
        body:
          "Inspecção completa da habitação com higrómetro, medidor de humidade e câmara termográfica. Inclui relatório escrito.\n\nPreço indicativo: €250–€400 (habitação até 100 m²) · €400–€800 (habitação até 250 m²)",
      },
      {
        eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
        title: "Inspecção Pré-Compra",
        body:
          "Para quem está a considerar comprar uma habitação e quer saber exactamente o que tem antes de assinar. Inclui relatório utilizável em negociação ou eventual rescisão de promessa.\n\nPreço indicativo: €350–€600",
      },
      {
        eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
        title: "Inspecção Pós-Inundação / Emergência",
        body:
          "Para habitações afectadas por inundação, rotura de canalização, ou infiltração súbita. Foco na avaliação de danos por água e risco de contaminação fúngica. Resposta rápida disponível.\n\nPreço indicativo: €300–€500",
      },
      {
        eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
        title: "Verificação Pós-Remediação",
        body:
          "Para confirmar, de forma independente, que uma obra de saneamento foi bem executada e que o problema está efectivamente resolvido — antes de pagar o valor final ao saneador.\n\nPreço indicativo: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "NÍVEL 2 — Análise Laboratorial",
        title: "Amostragem de Ar + Análise Micológica",
        body:
          "Quando a inspecção visual e instrumental não é suficiente para identificar as espécies presentes ou quantificar o risco com precisão, recomendamos análise laboratorial.\n\nColheita de amostras de ar em interiores e exteriores com análise em laboratório certificado (ISO 17025). Identifica espécies fúngicas presentes e compara concentrações interior/exterior.\n\nPreço indicativo: €500–€900 (inclui inspecção, colheita e análise)",
      },
      {
        eyebrow: "NÍVEL 2 — Análise Laboratorial",
        title: "Amostragem de Superfície e Material",
        body:
          "Colheita de amostras de superfícies visíveis e, quando indicado, de materiais de construção. Adequado para identificação de espécies em pontos específicos.\n\nPreço indicativo: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Para situações que requerem diagnóstico de precisão — nomeadamente suspeita de Stachybotrys, histórico de danos graves por água, ou casos com sintomas de saúde persistentes.\n\nAnálise de poeira acumulada por MSqPCR — o método mais sensível disponível para detectar história de contaminação fúngica, incluindo espécies de difícil detecção por amostragem de ar. Enviado para laboratório parceiro nos EUA.\n\nPreço indicativo: €600–€900",
      },
      {
        eyebrow: "NÍVEL 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Versão simplificada do ERMI focada nas 5 espécies mais relevantes clinicamente: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Desenvolvido especificamente para avaliação clínica em contexto de CIRS/doenças relacionadas com edifícios.\n\nPreço indicativo: €450–€700\n\nNota importante: O MoldCheck.pt / InspectOS é o único prestador de serviços HERTSMI-2 na Península Ibérica e, tanto quanto sabemos, em toda a Europa. O laboratório de referência para este teste é o Mycometrics (EUA).",
        tone: "warning",
      },
      {
        eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
        title: "Painel de Micotoxinas em Superfícies",
        body:
          "Análise química de micotoxinas em amostras de superfície. Relevante quando há suspeita de produção de toxinas e impacto na saúde.\n\nPreço indicativo: €700–€1.200",
      },
      {
        eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
        title: "Microbioma Completo do Edifício (NGS)",
        body:
          "Sequenciação genómica de nova geração — identificação abrangente de todos os fungos e bactérias presentes. O diagnóstico mais completo disponível para edifícios com historial complexo de danos por água.\n\nPreço indicativo: €1.000–€1.500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "NÍVEL 4 — Monitorização Contínua",
        title: "Sensor de Qualidade do Ar Interior + Acompanhamento",
        body:
          "Instalação de sensor de monitorização contínua (CO₂, TVOC, temperatura, humidade relativa). Relatório mensal com análise de tendências. Adequado para habitações com problemas recorrentes ou para monitorização pós-remediação.\n\nPreço indicativo: €150–€300 (instalação) + €25–€60/mês",
      },
      {
        eyebrow: "NÍVEL 4 — Monitorização Contínua",
        title: "Reinspecção Anual",
        body:
          "Para habitações com historial de problemas de humidade. Visita anual para avaliação de condições e detecção precoce de recidivas.\n\nPreço indicativo: €180–€280/ano",
      },
    ],
    bookingTitle: "Como agendar",
    bookingCards: [
      {
        eyebrow: "Reserva",
        title: "Agendar através da InspectOS",
        body:
          "As inspecções são realizadas através da InspectOS — plataforma independente de inspecção de imóveis em Portugal.",
        ctaLabel: "→ Agendar inspecção em InspectOS.pt",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Dúvidas",
        title: "Contacte-nos antes de reservar",
        body: `Para dúvidas sobre qual serviço é adequado à sua situação, pode contactar-nos primeiro: ${siteConfig.contactEmail}`,
        ctaLabel: `Escrever para ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Cobertura geográfica",
    coverageBody:
      "Actualmente com cobertura disponível em Lisboa, Porto, Setúbal, Cascais, Sintra, Braga e Algarve (Faro, Lagos, Albufeira). Cobertura em expansão — consulte disponibilidade para a sua área.",
    pricingTitle: "Nota sobre preços",
    pricingBody:
      "Os preços indicados são intervalos aproximados baseados na dimensão e complexidade da habitação. O preço final é confirmado após contacto inicial e antes de qualquer compromisso. Não existe taxa de diagnóstico: o custo total da inspecção é o preço do serviço.",
    disclosureText:
      "MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspecção ou análise laboratorial, é porque acreditamos que precisa de uma — não porque lucramos com o tratamento que se segue.",
  },
  en: {
    eyebrow: "Independent inspection services",
    title: "Independent Mold and Damp Inspection in Portugal",
    description:
      "Independent diagnosis, laboratory analysis and monitoring explained clearly, without the commercial framing of treatment sales.",
    independentTitle: "What does \"independent\" mean?",
    independentParagraphs: [
      "In Portugal, damp and mold problems are almost always diagnosed by the same company that will later sell the treatment. A free diagnosis is the beginning of a sales funnel — not an impartial information service.",
      "An independent inspection works differently. The inspector charges for their time. They receive no commission from the remediation contractor, the ventilation system manufacturer, or any other company that might benefit from the diagnostic outcome. Their only interest is telling you precisely what you have.",
      "This is the model InspectOS represents — and the only model MoldCheck.pt recommends.",
    ],
    howItWorksTitle: "How it works",
    howItWorksBody:
      "Inspections are carried out by certified InspectOS inspectors equipped with:\n\nPrecision digital hygrometer — measures relative humidity and air temperature\n\nMaterials moisture meter — non-invasive measurement of moisture content in walls, floors, and ceilings\n\nThermal imaging camera — detects thermal bridges, hidden water ingress, and condensation zones invisible to the naked eye\n\nSample collection capability — surfaces, materials, and air, for laboratory analysis when indicated\n\nAfter the inspection, you receive a written report covering: the location and extent of the problem, the probable cause, evidence-based recommendations, and a clear indication of when laboratory analysis is — or is not — necessary.\n\nThe report does not include a treatment quote. We do not recommend specific remediation companies. We have no commercial agreements with remediation firms.",
    servicesTitle: "Available services",
    tier1Cards: [
      {
        eyebrow: "TIER 1 — Visual and Instrumental Inspection",
        title: "Standard Inspection",
        body:
          "Full property inspection with hygrometer, moisture meter, and thermal imaging camera. Includes written report.\n\nIndicative price: €250–€400 (up to 100 m²) · €400–€800 (up to 250 m²)",
      },
      {
        eyebrow: "TIER 1 — Visual and Instrumental Inspection",
        title: "Pre-Purchase Inspection",
        body:
          "For anyone considering buying a property and wanting to know exactly what they are buying before signing. Includes a report suitable for negotiation or contract withdrawal discussions.\n\nIndicative price: €350–€600",
      },
      {
        eyebrow: "TIER 1 — Visual and Instrumental Inspection",
        title: "Post-Flood / Emergency Inspection",
        body:
          "For properties affected by flooding, burst pipes, or sudden water ingress. Focused on water damage assessment and fungal contamination risk. Rapid response available.\n\nIndicative price: €300–€500",
      },
      {
        eyebrow: "TIER 1 — Visual and Instrumental Inspection",
        title: "Post-Remediation Verification",
        body:
          "Independent confirmation that remediation work was properly carried out and that the problem has genuinely been resolved — before making final payment to the contractor.\n\nIndicative price: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "TIER 2 — Laboratory Analysis",
        title: "Air Sampling + Mycological Analysis",
        body:
          "When visual and instrumental inspection is not enough to identify the species present or quantify risk precisely, we recommend laboratory analysis.\n\nIndoor and outdoor air sample collection with analysis at an ISO 17025 certified laboratory. Identifies fungal species present and compares indoor and outdoor concentrations.\n\nIndicative price: €500–€900 (includes inspection, collection, and analysis)",
      },
      {
        eyebrow: "TIER 2 — Laboratory Analysis",
        title: "Surface and Material Sampling",
        body:
          "Sample collection from visible surfaces and, when indicated, building materials. Suitable for species identification at specific points of concern.\n\nIndicative price: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "TIER 3 — Specialist International Analysis",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "For situations requiring precision diagnosis — especially suspected Stachybotrys, a history of serious water damage, or persistent health-related concerns.\n\nAccumulated dust analysis by MSqPCR — the most sensitive method currently available for detecting a history of fungal contamination, including species that air sampling often misses. Sent to a partner laboratory in the United States.\n\nIndicative price: €600–€900",
      },
      {
        eyebrow: "TIER 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "A simplified ERMI focused on the five species considered most clinically relevant: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, and Wallemia sebi. Developed specifically for clinical assessment in the context of CIRS and building-related illness.\n\nIndicative price: €450–€700\n\nImportant note: MoldCheck.pt / InspectOS is the only HERTSMI-2 service provider on the Iberian Peninsula and, to our knowledge, in Europe. The reference laboratory for this test is Mycometrics (USA).",
        tone: "warning",
      },
      {
        eyebrow: "TIER 3 — Specialist International Analysis",
        title: "Surface Mycotoxin Panel",
        body:
          "Chemical analysis of mycotoxins in surface samples. Relevant where toxin production and health effects are suspected.\n\nIndicative price: €700–€1,200",
      },
      {
        eyebrow: "TIER 3 — Specialist International Analysis",
        title: "Full Building Microbiome (NGS)",
        body:
          "Next-generation genomic sequencing — comprehensive identification of all fungi and bacteria present. The most complete diagnostic currently available for buildings with a complex history of water damage.\n\nIndicative price: €1,000–€1,500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "TIER 4 — Continuous Monitoring",
        title: "Indoor Air Quality Sensor + Monitoring",
        body:
          "Installation of a continuous monitoring sensor (CO₂, TVOC, temperature, relative humidity). Monthly reporting with trend analysis. Suitable for properties with recurring issues or for post-remediation monitoring.\n\nIndicative price: €150–€300 (installation) + €25–€60/month",
      },
      {
        eyebrow: "TIER 4 — Continuous Monitoring",
        title: "Annual Re-Inspection",
        body:
          "For properties with a history of damp-related problems. Annual visit for condition assessment and early detection of recurrence.\n\nIndicative price: €180–€280/year",
      },
    ],
    bookingTitle: "How to book",
    bookingCards: [
      {
        eyebrow: "Booking",
        title: "Book through InspectOS",
        body:
          "Inspections are booked through InspectOS — Portugal’s independent property inspection platform.",
        ctaLabel: "→ Book an inspection at InspectOS.pt",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Questions",
        title: "Contact us before booking",
        body: `If you are unsure which service fits your situation, contact us first: ${siteConfig.contactEmail}`,
        ctaLabel: `Email ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Geographic coverage",
    coverageBody:
      "Currently available in Lisbon, Porto, Setúbal, Cascais, Sintra, Braga, and the Algarve (Faro, Lagos, Albufeira). Coverage is expanding — check availability for your area.",
    pricingTitle: "A note on pricing",
    pricingBody:
      "The prices shown are indicative ranges based on property size and complexity. Final pricing is confirmed after initial contact and before any commitment. There is no separate diagnostic fee: the inspection price is the full service price.",
    disclosureText:
      "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK operates InspectOS, an independent property inspection platform in Portugal. We do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or laboratory analysis, it is because we believe you need one — not because we profit from whatever treatment may follow.",
  },
  fr: {
    eyebrow: "Inspection indépendante",
    title: "Inspection indépendante de l’humidité et des moisissures au Portugal",
    description:
      "Diagnostic indépendant, analyse en laboratoire et suivi présentés avec clarté, sans cadrage commercial orienté vers le traitement.",
    independentTitle: "Que signifie \u00ab\u00a0ind\u00e9pendant\u00a0\u00bb ?",
    independentParagraphs: [
      "Au Portugal, le diagnostic des problèmes d’humidité et de moisissures est presque toujours réalisé par l’entreprise qui va ensuite vendre le traitement. Le diagnostic gratuit est le début d’un entonnoir commercial — pas un service d’information impartial.",
      "Une inspection indépendante fonctionne différemment. L’inspecteur facture son temps. Il ne reçoit aucune commission de l’entreprise de remédiation, du fabricant du système de ventilation, ni d’aucune autre entreprise susceptible de bénéficier du résultat du diagnostic. Son seul intérêt est de vous dire avec précision ce que vous avez.",
      "C’est le modèle qu’InspectOS représente — et le seul modèle que MoldCheck.pt recommande.",
    ],
    howItWorksTitle: "Comment cela fonctionne",
    howItWorksBody:
      "Les inspections sont réalisées par des inspecteurs certifiés InspectOS équipés de :\n\nHygromètre numérique de précision — mesure de l’humidité relative et de la température de l’air\n\nHumidimètre pour matériaux — mesure non invasive de la teneur en humidité des murs, sols et plafonds\n\nCaméra thermographique — détection des ponts thermiques, infiltrations cachées et zones de condensation invisibles à l’œil nu\n\nCapacité de prélèvement — surfaces, matériaux et air, pour analyse en laboratoire lorsque cela est indiqué\n\nAprès l’inspection, vous recevez un rapport écrit couvrant : la localisation et l’étendue du problème, la cause probable, des recommandations fondées sur des preuves scientifiques, et une indication claire sur la nécessité — ou non — d’une analyse en laboratoire.\n\nLe rapport n’inclut pas de devis de traitement. Nous ne recommandons pas d’entreprises de remédiation spécifiques. Nous n’avons aucun accord commercial avec des entreprises de remédiation.",
    servicesTitle: "Services disponibles",
    tier1Cards: [
      {
        eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
        title: "Inspection standard",
        body:
          "Inspection complète du logement avec hygromètre, humidimètre et caméra thermographique. Inclut un rapport écrit.\n\nPrix indicatif : €250–€400 (jusqu’à 100 m²) · €400–€800 (jusqu’à 250 m²)",
      },
      {
        eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
        title: "Inspection pré-achat",
        body:
          "Pour les personnes qui envisagent d’acheter un bien et souhaitent savoir exactement ce qu’elles achètent avant de signer. Inclut un rapport utilisable pour la négociation ou dans le cadre d’un désistement.\n\nPrix indicatif : €350–€600",
      },
      {
        eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
        title: "Inspection post-inondation / urgence",
        body:
          "Pour les logements touchés par une inondation, une rupture de canalisation ou une infiltration soudaine. Axée sur l’évaluation des dégâts des eaux et du risque de contamination fongique. Réponse rapide disponible.\n\nPrix indicatif : €300–€500",
      },
      {
        eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
        title: "Vérification post-remédiation",
        body:
          "Confirmation indépendante que les travaux de remédiation ont été correctement effectués et que le problème est réellement résolu — avant le paiement final au prestataire.\n\nPrix indicatif : €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "NIVEAU 2 — Analyse en laboratoire",
        title: "Prélèvement d’air + analyse mycologique",
        body:
          "Lorsque l’inspection visuelle et instrumentale ne suffit pas à identifier les espèces présentes ou à quantifier précisément le risque, nous recommandons une analyse en laboratoire.\n\nPrélèvement d’échantillons d’air intérieur et extérieur avec analyse dans un laboratoire certifié ISO 17025. Identifie les espèces fongiques présentes et compare les concentrations intérieures et extérieures.\n\nPrix indicatif : €500–€900 (inclut inspection, prélèvement et analyse)",
      },
      {
        eyebrow: "NIVEAU 2 — Analyse en laboratoire",
        title: "Prélèvement de surface et de matériaux",
        body:
          "Prélèvement d’échantillons sur des surfaces visibles et, si nécessaire, sur des matériaux de construction. Adapté à l’identification d’espèces sur des zones spécifiques.\n\nPrix indicatif : €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Pour les situations nécessitant un diagnostic de précision — notamment en cas de suspicion de Stachybotrys, d’antécédents de dégâts des eaux importants, ou de symptômes persistants.\n\nAnalyse de poussières accumulées par MSqPCR — la méthode la plus sensible disponible pour détecter un historique de contamination fongique, y compris des espèces souvent invisibles à l’échantillonnage de l’air. Envoyé à un laboratoire partenaire aux États-Unis.\n\nPrix indicatif : €600–€900",
      },
      {
        eyebrow: "NIVEAU 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Version simplifiée de l’ERMI, centrée sur les cinq espèces les plus pertinentes sur le plan clinique : Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum et Wallemia sebi. Développé spécifiquement pour l’évaluation clinique dans le contexte du CIRS et des maladies liées aux bâtiments.\n\nPrix indicatif : €450–€700\n\nNote importante : MoldCheck.pt / InspectOS est le seul prestataire HERTSMI-2 dans la péninsule Ibérique et, à notre connaissance, en Europe. Le laboratoire de référence pour ce test est Mycometrics (États-Unis).",
        tone: "warning",
      },
      {
        eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
        title: "Panneau de mycotoxines de surface",
        body:
          "Analyse chimique des mycotoxines dans des échantillons de surface. Pertinente lorsqu’une production de toxines et un impact sur la santé sont suspectés.\n\nPrix indicatif : €700–€1 200",
      },
      {
        eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
        title: "Microbiome complet du bâtiment (NGS)",
        body:
          "Séquençage génomique de nouvelle génération — identification complète de tous les champignons et bactéries présents. Le diagnostic le plus complet actuellement disponible pour les bâtiments ayant un historique complexe de dégâts des eaux.\n\nPrix indicatif : €1 000–€1 500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "NIVEAU 4 — Surveillance continue",
        title: "Capteur de qualité de l’air intérieur + suivi",
        body:
          "Installation d’un capteur de surveillance continue (CO₂, TVOC, température, humidité relative). Rapport mensuel avec analyse des tendances. Adapté aux logements avec problèmes récurrents ou au suivi post-remédiation.\n\nPrix indicatif : €150–€300 (installation) + €25–€60/mois",
      },
      {
        eyebrow: "NIVEAU 4 — Surveillance continue",
        title: "Réinspection annuelle",
        body:
          "Pour les logements ayant un historique de problèmes d’humidité. Visite annuelle pour évaluer les conditions et détecter précocement une récidive.\n\nPrix indicatif : €180–€280/an",
      },
    ],
    bookingTitle: "Comment réserver",
    bookingCards: [
      {
        eyebrow: "Réservation",
        title: "Réserver via InspectOS",
        body:
          "Les inspections sont réservées via InspectOS — la plateforme indépendante d’inspection immobilière au Portugal.",
        ctaLabel: "→ Réserver une inspection sur InspectOS.pt",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Questions",
        title: "Contactez-nous avant de réserver",
        body: `Si vous avez un doute sur le service adapté à votre situation, contactez-nous d’abord : ${siteConfig.contactEmail}`,
        ctaLabel: `Écrire à ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Couverture géographique",
    coverageBody:
      "Couverture actuellement disponible à Lisbonne, Porto, Setúbal, Cascais, Sintra, Braga et en Algarve (Faro, Lagos, Albufeira). Couverture en expansion — vérifiez la disponibilité pour votre zone.",
    pricingTitle: "Note sur les prix",
    pricingBody:
      "Les prix indiqués sont des fourchettes approximatives basées sur la taille et la complexité du logement. Le prix final est confirmé après un premier contact et avant tout engagement. Il n’existe pas de frais séparés de diagnostic : le coût total de l’inspection correspond au prix du service.",
    disclosureText:
      "MoldCheck.pt est une initiative du FAIRBANK Group, l’entreprise à l’origine d’InspectOS. Nous ne vendons pas de traitements contre l’humidité. Nous ne recevons aucune commission de la part d’entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c’est parce que nous pensons qu’elle est nécessaire — pas parce que nous profitons du traitement qui pourrait suivre.",
  },
  de: {
    eyebrow: "Unabhängige Inspektion",
    title: "Unabhängige Schimmel- und Feuchtigkeitsinspektion in Portugal",
    description:
      "Unabhängige Diagnose, Laboranalyse und Monitoring klar erklärt, ohne die kommerzielle Logik des Behandlungsverkaufs.",
    independentTitle: "Was bedeutet \u201eunabh\u00e4ngig\u201c?",
    independentParagraphs: [
      "In Portugal wird die Diagnose von Feuchtigkeits- und Schimmelproblemen fast immer von dem Unternehmen durchgeführt, das später auch die Behandlung verkauft. Die kostenlose Diagnose ist der Beginn eines Verkaufstrichters — kein unparteiischer Informationsdienst.",
      "Eine unabhängige Inspektion funktioniert anders. Der Inspektor berechnet seine Zeit. Er erhält keine Provision vom Sanierungsunternehmen, vom Hersteller eines Lüftungssystems oder von einem anderen Unternehmen, das vom Ergebnis der Diagnose profitieren könnte. Sein einziges Interesse ist es, Ihnen präzise zu sagen, was Sie tatsächlich haben.",
      "Das ist das Modell, das InspectOS repräsentiert — und das einzige Modell, das MoldCheck.pt empfiehlt.",
    ],
    howItWorksTitle: "Wie es funktioniert",
    howItWorksBody:
      "Inspektionen werden von zertifizierten InspectOS-Inspektoren durchgeführt, ausgestattet mit:\n\nPräzisions-Digitalhygrometer — Messung der relativen Luftfeuchtigkeit und Temperatur\n\nMaterialfeuchtemessgerät — zerstörungsfreie Messung des Feuchtegehalts in Wänden, Böden und Decken\n\nWärmebildkamera — Erkennung von Wärmebrücken, verborgenen Wassereintritten und Kondensationszonen\n\nProbenahmemöglichkeit — Oberflächen, Materialien und Luft für Laboranalysen, wenn dies angezeigt ist\n\nNach der Inspektion erhalten Sie einen schriftlichen Bericht mit: Ort und Ausmaß des Problems, wahrscheinlicher Ursache, wissenschaftlich fundierten Empfehlungen und einer klaren Einschätzung, ob eine Laboranalyse erforderlich ist oder nicht.\n\nDer Bericht enthält kein Angebot für Behandlungsmaßnahmen. Wir empfehlen keine bestimmten Sanierungsunternehmen. Wir haben keine geschäftlichen Vereinbarungen mit Sanierungsfirmen.",
    servicesTitle: "Verfügbare Leistungen",
    tier1Cards: [
      {
        eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
        title: "Standard-Inspektion",
        body:
          "Vollständige Inspektion der Immobilie mit Hygrometer, Feuchtemessgerät und Wärmebildkamera. Einschließlich schriftlichem Bericht.\n\nRichtpreis: €250–€400 (bis 100 m²) · €400–€800 (bis 250 m²)",
      },
      {
        eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
        title: "Vor-Kauf-Inspektion",
        body:
          "Für Personen, die den Kauf einer Immobilie erwägen und vor der Unterzeichnung genau wissen möchten, was sie kaufen. Einschließlich Bericht, der für Preisverhandlungen oder Rücktrittsentscheidungen verwendet werden kann.\n\nRichtpreis: €350–€600",
      },
      {
        eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
        title: "Nach-Überflutung / Notfall-Inspektion",
        body:
          "Für Immobilien, die von Überschwemmung, Rohrbruch oder plötzlichem Wassereintritt betroffen sind. Fokus auf Wasserschadensbewertung und Risiko einer Pilzkontamination. Schnelle Reaktion möglich.\n\nRichtpreis: €300–€500",
      },
      {
        eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
        title: "Nach-Sanierungs-Verifizierung",
        body:
          "Unabhängige Bestätigung, dass Sanierungsarbeiten korrekt durchgeführt wurden und das Problem tatsächlich behoben ist — bevor die Schlusszahlung an den Auftragnehmer erfolgt.\n\nRichtpreis: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "STUFE 2 — Laboranalyse",
        title: "Luftprobenahme + mykologische Analyse",
        body:
          "Wenn die visuelle und instrumentelle Inspektion nicht ausreicht, um vorhandene Arten zu identifizieren oder das Risiko präzise einzuschätzen, empfehlen wir eine Laboranalyse.\n\nEntnahme von Innen- und Außenluftproben mit Analyse in einem ISO-17025-zertifizierten Labor. Identifiziert vorhandene Pilzarten und vergleicht Innen- und Außenkonzentrationen.\n\nRichtpreis: €500–€900 (einschließlich Inspektion, Probenahme und Analyse)",
      },
      {
        eyebrow: "STUFE 2 — Laboranalyse",
        title: "Oberflächen- und Materialprobenahme",
        body:
          "Entnahme von Proben von sichtbaren Oberflächen und, wenn erforderlich, von Baumaterialien. Geeignet zur Identifikation von Arten an konkreten Problemstellen.\n\nRichtpreis: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Für Situationen, die eine hochpräzise Diagnose erfordern — insbesondere bei Verdacht auf Stachybotrys, bei einer Vorgeschichte schwerer Wasserschäden oder bei anhaltenden gesundheitlichen Beschwerden.\n\nAnalyse von angesammeltem Staub mittels MSqPCR — die empfindlichste Methode, um eine Vorgeschichte von Pilzkontamination nachzuweisen, einschließlich Arten, die bei Luftprobenahmen häufig übersehen werden. Versand an ein Partnerlabor in den USA.\n\nRichtpreis: €600–€900",
      },
      {
        eyebrow: "STUFE 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Vereinfachte ERMI-Version mit Fokus auf die fünf klinisch relevantesten Arten: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum und Wallemia sebi. Speziell entwickelt für die klinische Bewertung im Kontext von CIRS und gebäudebedingten Erkrankungen.\n\nRichtpreis: €450–€700\n\nWichtiger Hinweis: MoldCheck.pt / InspectOS ist der einzige HERTSMI-2-Anbieter auf der Iberischen Halbinsel und nach unserem Kenntnisstand in Europa. Das Referenzlabor für diesen Test ist Mycometrics (USA).",
        tone: "warning",
      },
      {
        eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
        title: "Mykotoxin-Oberflächenpanel",
        body:
          "Chemische Analyse von Mykotoxinen in Oberflächenproben. Relevant, wenn der Verdacht auf Toxinbildung und gesundheitliche Auswirkungen besteht.\n\nRichtpreis: €700–€1.200",
      },
      {
        eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
        title: "Vollständiges Gebäudemikrobiom (NGS)",
        body:
          "Genomische Sequenzierung der nächsten Generation — umfassende Identifikation aller vorhandenen Pilze und Bakterien. Die vollständigste derzeit verfügbare Diagnostik für Gebäude mit komplexer Vorgeschichte von Wasserschäden.\n\nRichtpreis: €1.000–€1.500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "STUFE 4 — Kontinuierliche Überwachung",
        title: "Sensor für Innenraumluftqualität + Monitoring",
        body:
          "Installation eines Sensors zur kontinuierlichen Überwachung (CO₂, TVOC, Temperatur, relative Luftfeuchtigkeit). Monatlicher Bericht mit Trendanalyse. Geeignet für Immobilien mit wiederkehrenden Problemen oder zur Nachkontrolle nach einer Sanierung.\n\nRichtpreis: €150–€300 (Installation) + €25–€60/Monat",
      },
      {
        eyebrow: "STUFE 4 — Kontinuierliche Überwachung",
        title: "Jährliche Nachinspektion",
        body:
          "Für Immobilien mit einer Vorgeschichte von Feuchtigkeitsproblemen. Jährlicher Besuch zur Zustandsbewertung und frühen Erkennung möglicher Rückfälle.\n\nRichtpreis: €180–€280/Jahr",
      },
    ],
    bookingTitle: "Buchung",
    bookingCards: [
      {
        eyebrow: "Reservierung",
        title: "Inspektion über InspectOS buchen",
        body:
          "Inspektionen werden über InspectOS gebucht — Portugals unabhängige Plattform für Immobilieninspektionen.",
        ctaLabel: "→ Inspektion auf InspectOS.pt buchen",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Fragen",
        title: "Kontaktieren Sie uns vor der Buchung",
        body: `Wenn Sie unsicher sind, welche Leistung zu Ihrer Situation passt, kontaktieren Sie uns zunächst: ${siteConfig.contactEmail}`,
        ctaLabel: `An ${siteConfig.contactEmail} schreiben`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Geografische Abdeckung",
    coverageBody:
      "Derzeit verfügbar in Lissabon, Porto, Setúbal, Cascais, Sintra, Braga und an der Algarve (Faro, Lagos, Albufeira). Das Angebot wird erweitert — bitte Verfügbarkeit für Ihre Region prüfen.",
    pricingTitle: "Hinweis zu den Preisen",
    pricingBody:
      "Die angegebenen Preise sind Richtwerte auf Basis von Größe und Komplexität der Immobilie. Der Endpreis wird nach dem Erstkontakt und vor jeder verbindlichen Zusage bestätigt. Es gibt keine separate Diagnosegebühr: Die Gesamtkosten der Inspektion entsprechen dem Preis der Leistung.",
    disclosureText:
      "MoldCheck.pt ist eine Initiative der FAIRBANK Group, dem Unternehmen hinter InspectOS. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass sie notwendig ist — nicht weil wir an einer nachfolgenden Behandlung verdienen.",
  },
  nl: {
    eyebrow: "Onafhankelijke inspectie",
    title: "Onafhankelijke schimmel- en vochtinspectie in Portugal",
    description:
      "Onafhankelijke diagnose, laboratoriumanalyse en monitoring helder uitgelegd, zonder commerciële behandellogica.",
    independentTitle: "Wat betekent \u201eonafhankelijk\u201c?",
    independentParagraphs: [
      "In Portugal wordt de diagnose van vocht- en schimmelproblemen bijna altijd uitgevoerd door het bedrijf dat vervolgens ook de behandeling verkoopt. De gratis diagnose is het begin van een verkooptrechter — geen onpartijdige informatiedienst.",
      "Een onafhankelijke inspectie werkt anders. De inspecteur rekent zijn tijd aan. Hij ontvangt geen commissie van het saneringsbedrijf, de fabrikant van het ventilatiesysteem of enig ander bedrijf dat voordeel zou kunnen hebben bij de uitkomst van de diagnose. Zijn enige belang is om je precies te vertellen wat er aan de hand is.",
      "Dit is het model dat InspectOS vertegenwoordigt — en het enige model dat MoldCheck.pt aanbeveelt.",
    ],
    howItWorksTitle: "Hoe het werkt",
    howItWorksBody:
      "Inspecties worden uitgevoerd door gecertificeerde InspectOS-inspecteurs die beschikken over:\n\nPrecisie digitale hygrometer — meting van relatieve luchtvochtigheid en temperatuur\n\nVochtmeter voor materialen — niet-invasieve meting van het vochtgehalte in muren, vloeren en plafonds\n\nWarmtebeeldcamera — detectie van koudebruggen, verborgen waterinsijpeling en condensatiezones\n\nMogelijkheid tot monstername — oppervlakken, materialen en lucht, voor laboratoriumanalyse wanneer nodig\n\nNa de inspectie ontvang je een schriftelijk rapport met: de locatie en omvang van het probleem, de waarschijnlijke oorzaak, wetenschappelijk onderbouwde aanbevelingen, en een duidelijke indicatie of laboratoriumanalyse wel of niet nodig is.\n\nHet rapport bevat geen offerte voor behandeling. Wij bevelen geen specifieke saneringsbedrijven aan. Wij hebben geen commerciële afspraken met saneringsfirma’s.",
    servicesTitle: "Beschikbare diensten",
    tier1Cards: [
      {
        eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
        title: "Standaardinspectie",
        body:
          "Volledige woninginspectie met hygrometer, vochtmeter en warmtebeeldcamera. Inclusief schriftelijk rapport.\n\nIndicatieve prijs: €250–€400 (tot 100 m²) · €400–€800 (tot 250 m²)",
      },
      {
        eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
        title: "Pre-aankoopinspectie",
        body:
          "Voor wie overweegt een woning te kopen en vóór ondertekening exact wil weten wat er aan de hand is. Inclusief rapport bruikbaar voor prijsonderhandeling of heroverweging van de aankoop.\n\nIndicatieve prijs: €350–€600",
      },
      {
        eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
        title: "Inspectie na overstroming / noodgeval",
        body:
          "Voor woningen die getroffen zijn door overstroming, gesprongen leidingen of plotselinge waterinsijpeling. Gericht op beoordeling van waterschade en risico op schimmelbesmetting. Snelle interventie mogelijk.\n\nIndicatieve prijs: €300–€500",
      },
      {
        eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
        title: "Verificatie na sanering",
        body:
          "Onafhankelijke bevestiging dat saneringswerk correct is uitgevoerd en dat het probleem werkelijk is opgelost — vóór de eindbetaling aan de uitvoerder.\n\nIndicatieve prijs: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "NIVEAU 2 — Laboratoriumanalyse",
        title: "Luchtmonstering + mycologische analyse",
        body:
          "Wanneer visuele en instrumentele inspectie niet volstaat om aanwezige soorten te identificeren of het risico nauwkeurig te beoordelen, bevelen we laboratoriumanalyse aan.\n\nVerzameling van binnen- en buitenluchtmonsters met analyse in een ISO 17025-gecertificeerd laboratorium. Identificeert aanwezige schimmelsoorten en vergelijkt concentraties binnen en buiten.\n\nIndicatieve prijs: €500–€900 (inclusief inspectie, monstername en analyse)",
      },
      {
        eyebrow: "NIVEAU 2 — Laboratoriumanalyse",
        title: "Oppervlakte- en materiaalmonsters",
        body:
          "Monstername van zichtbare oppervlakken en, indien nodig, van bouwmaterialen. Geschikt voor soortidentificatie op specifieke probleemlocaties.\n\nIndicatieve prijs: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Voor situaties die een zeer nauwkeurige diagnose vereisen — vooral bij vermoeden van Stachybotrys, een voorgeschiedenis van ernstige waterschade of aanhoudende gezondheidsklachten.\n\nAnalyse van opgehoopt stof via MSqPCR — de gevoeligste methode die momenteel beschikbaar is om een geschiedenis van schimmelverontreiniging vast te stellen, inclusief soorten die vaak niet worden gedetecteerd via luchtmonsters. Verzonden naar een partnerlaboratorium in de VS.\n\nIndicatieve prijs: €600–€900",
      },
      {
        eyebrow: "NIVEAU 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Vereenvoudigde versie van ERMI, gericht op de vijf klinisch meest relevante soorten: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum en Wallemia sebi. Speciaal ontwikkeld voor klinische beoordeling in de context van CIRS en gebouwgerelateerde klachten.\n\nIndicatieve prijs: €450–€700\n\nBelangrijke opmerking: MoldCheck.pt / InspectOS is de enige HERTSMI-2-aanbieder op het Iberisch Schiereiland en, voor zover wij weten, in heel Europa. Het referentielaboratorium voor deze test is Mycometrics (VS).",
        tone: "warning",
      },
      {
        eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
        title: "Mycotoxine-oppervlaktepanel",
        body:
          "Chemische analyse van mycotoxinen in oppervlakte-monsters. Relevant wanneer toxineproductie en gezondheidseffecten worden vermoed.\n\nIndicatieve prijs: €700–€1.200",
      },
      {
        eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
        title: "Volledig gebouwmicrobioom (NGS)",
        body:
          "Next-generation genomische sequencing — uitgebreide identificatie van alle aanwezige schimmels en bacteriën. De meest volledige diagnostiek die momenteel beschikbaar is voor gebouwen met een complexe voorgeschiedenis van waterschade.\n\nIndicatieve prijs: €1.000–€1.500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "NIVEAU 4 — Continue monitoring",
        title: "Binnenluchtkwaliteitssensor + monitoring",
        body:
          "Installatie van een sensor voor continue monitoring (CO₂, TVOC, temperatuur, relatieve luchtvochtigheid). Maandelijks rapport met trendanalyse. Geschikt voor woningen met terugkerende problemen of voor monitoring na sanering.\n\nIndicatieve prijs: €150–€300 (installatie) + €25–€60/maand",
      },
      {
        eyebrow: "NIVEAU 4 — Continue monitoring",
        title: "Jaarlijkse herinspectie",
        body:
          "Voor woningen met een geschiedenis van vochtproblemen. Jaarlijks bezoek voor conditiebeoordeling en vroege detectie van terugkeer van het probleem.\n\nIndicatieve prijs: €180–€280/jaar",
      },
    ],
    bookingTitle: "Hoe te boeken",
    bookingCards: [
      {
        eyebrow: "Boeking",
        title: "Boek via InspectOS",
        body:
          "Inspecties worden geboekt via InspectOS — het onafhankelijke vastgoedinspectieplatform in Portugal.",
        ctaLabel: "→ Boek een inspectie op InspectOS.pt",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Vragen",
        title: "Neem eerst contact op als je twijfelt",
        body: `Als je twijfelt welke dienst geschikt is voor jouw situatie, neem dan eerst contact op: ${siteConfig.contactEmail}`,
        ctaLabel: `Mail naar ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Geografische dekking",
    coverageBody:
      "Momenteel beschikbaar in Lissabon, Porto, Setúbal, Cascais, Sintra, Braga en de Algarve (Faro, Lagos, Albufeira). Dekking wordt uitgebreid — controleer de beschikbaarheid voor jouw regio.",
    pricingTitle: "Opmerking over prijzen",
    pricingBody:
      "De vermelde prijzen zijn richtprijzen op basis van de grootte en complexiteit van de woning. De definitieve prijs wordt bevestigd na eerste contact en vóór enige verbintenis. Er is geen aparte diagnosetoeslag: de totale kost van de inspectie is de prijs van de dienst.",
    disclosureText:
      "MoldCheck.pt is een initiatief van de FAIRBANK Group, het bedrijf achter InspectOS. Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsbedrijven. Wanneer wij een inspectie of laboratoriumanalyse aanbevelen, is dat omdat wij denken dat je die nodig hebt — niet omdat wij verdienen aan de behandeling die daarop volgt.",
  },
  it: {
    eyebrow: "Ispezione indipendente",
    title: "Ispezione indipendente di umidità e muffa in Portogallo",
    description:
      "Diagnosi indipendente, analisi di laboratorio e monitoraggio spiegati con chiarezza, senza l’impostazione commerciale del trattamento.",
    independentTitle: "Cosa significa \u00abindipendente\u00bb?",
    independentParagraphs: [
      "In Portogallo, la diagnosi dei problemi di umidità e muffa è quasi sempre effettuata dall’azienda che poi venderà il trattamento. La diagnosi gratuita è l’inizio di un funnel commerciale — non un servizio informativo imparziale.",
      "Un’ispezione indipendente funziona in modo diverso. L’ispettore fa pagare il proprio tempo. Non riceve commissioni dall’impresa di bonifica, dal produttore del sistema di ventilazione né da qualsiasi altra azienda che possa beneficiare del risultato della diagnosi. Il suo unico interesse è dirti con precisione che cosa hai.",
      "Questo è il modello rappresentato da InspectOS — ed è l’unico modello che MoldCheck.pt raccomanda.",
    ],
    howItWorksTitle: "Come funziona",
    howItWorksBody:
      "Le ispezioni vengono effettuate da ispettori certificati InspectOS dotati di:\n\nigrometro digitale di precisione — misurazione dell’umidità relativa dell’aria e della temperatura\n\nmisuratore di umidità dei materiali (moisture meter) — misurazione non invasiva del contenuto di umidità in pareti, pavimenti e soffitti\n\ntermocamera — rilevazione di ponti termici, infiltrazioni nascoste e zone di condensazione invisibili a occhio nudo\n\ncapacità di prelievo di campioni — superfici, materiali e aria, per analisi di laboratorio quando necessario\n\nDopo l’ispezione ricevi un rapporto scritto con: localizzazione ed estensione del problema, causa probabile, raccomandazioni basate su evidenze scientifiche e indicazione chiara di quando sia o non sia necessaria un’analisi di laboratorio.\n\nIl rapporto non include un preventivo di trattamento. Non raccomandiamo aziende specifiche di bonifica. Non abbiamo alcun accordo commerciale con imprese di bonifica.",
    servicesTitle: "Servizi disponibili",
    tier1Cards: [
      {
        eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
        title: "Ispezione standard",
        body:
          "Ispezione completa dell’abitazione con igrometro, misuratore di umidità e termocamera. Include rapporto scritto.\n\nPrezzo indicativo: €250–€400 (abitazione fino a 100 m²) | €400–€800 (abitazione fino a 250 m²)",
      },
      {
        eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
        title: "Ispezione pre-acquisto",
        body:
          "Per chi sta valutando l’acquisto di un immobile e vuole sapere esattamente che cosa sta comprando prima di firmare. Include rapporto utilizzabile in fase di negoziazione o di recesso da una promessa di acquisto.\n\nPrezzo indicativo: €350–€600",
      },
      {
        eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
        title: "Ispezione post-alluvione / emergenza",
        body:
          "Per abitazioni colpite da allagamento, rottura di tubazioni o infiltrazione improvvisa. Focalizzata sulla valutazione dei danni da acqua e del rischio di contaminazione fungina. Disponibile risposta rapida.\n\nPrezzo indicativo: €300–€500",
      },
      {
        eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
        title: "Verifica post-bonifica",
        body:
          "Conferma indipendente che un intervento di bonifica sia stato eseguito correttamente e che il problema sia realmente risolto — prima di effettuare il pagamento finale all’impresa.\n\nPrezzo indicativo: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "LIVELLO 2 — Analisi di laboratorio",
        title: "Campionamento dell’aria + analisi micologica",
        body:
          "Quando l’ispezione visiva e strumentale non è sufficiente per identificare le specie presenti o quantificare con precisione il rischio, raccomandiamo un’analisi di laboratorio.\n\nPrelievo di campioni d’aria interni ed esterni con analisi in laboratorio certificato ISO 17025. Identifica le specie fungine presenti e confronta le concentrazioni interne/esterne.\n\nPrezzo indicativo: €500–€900 (include ispezione, prelievo e analisi)",
      },
      {
        eyebrow: "LIVELLO 2 — Analisi di laboratorio",
        title: "Campionamento di superfici e materiali",
        body:
          "Prelievo di campioni da superfici visibili e, quando indicato, da materiali da costruzione. Adatto all’identificazione delle specie in punti specifici di interesse.\n\nPrezzo indicativo: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Per situazioni che richiedono una diagnosi di precisione — in particolare sospetto di Stachybotrys, storico di gravi danni da acqua o casi con sintomi di salute persistenti.\n\nAnalisi della polvere accumulata tramite MSqPCR — il metodo più sensibile disponibile per rilevare una storia di contaminazione fungina, comprese specie difficili da individuare con il solo campionamento dell’aria. Inviato a laboratorio partner negli Stati Uniti.\n\nPrezzo indicativo: €600–€900",
      },
      {
        eyebrow: "LIVELLO 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Versione semplificata dell’ERMI focalizzata sulle 5 specie clinicamente più rilevanti: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Sviluppato specificamente per la valutazione clinica in contesto di CIRS / malattie correlate agli edifici.\n\n⚠️ Nota importante: MoldCheck.pt / InspectOS è l’unico fornitore di servizi HERTSMI-2 nella Penisola Iberica e, per quanto ne sappiamo, in tutta Europa. Il laboratorio di riferimento per questo test è Mycometrics (USA).\n\nPrezzo indicativo: €450–€700",
        tone: "warning",
      },
      {
        eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
        title: "Pannello di micotossine su superfici",
        body:
          "Analisi chimica delle micotossine in campioni di superficie. Rilevante quando si sospetta produzione di tossine e impatto sulla salute.\n\nPrezzo indicativo: €700–€1.200",
      },
      {
        eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
        title: "Microbioma completo dell’edificio (NGS)",
        body:
          "Sequenziamento genomico di nuova generazione — identificazione completa di tutti i funghi e batteri presenti. La diagnosi più completa disponibile per edifici con storia complessa di danni da acqua.\n\nPrezzo indicativo: €1.000–€1.500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "LIVELLO 4 — Monitoraggio continuo",
        title: "Sensore di qualità dell’aria interna + monitoraggio",
        body:
          "Installazione di sensore per monitoraggio continuo (CO₂, TVOC, temperatura, umidità relativa). Rapporto mensile con analisi delle tendenze. Adatto per abitazioni con problemi ricorrenti o per monitoraggio post-bonifica.\n\nPrezzo indicativo: €150–€300 (installazione) + €25–€60/mese",
      },
      {
        eyebrow: "LIVELLO 4 — Monitoraggio continuo",
        title: "Re-ispezione annuale",
        body:
          "Per abitazioni con storico di problemi di umidità. Visita annuale per valutazione delle condizioni e rilevazione precoce di eventuali recidive.\n\nPrezzo indicativo: €180–€280/anno",
      },
    ],
    bookingTitle: "Come prenotare",
    bookingCards: [
      {
        eyebrow: "Prenotazione",
        title: "Prenota tramite InspectOS",
        body:
          "Le ispezioni vengono effettuate tramite InspectOS — piattaforma indipendente di ispezione immobiliare in Portogallo.",
        ctaLabel: "→ Prenota un’ispezione su InspectOS.pt",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Dubbi",
        title: "Contattaci prima di prenotare",
        body: `Per dubbi su quale servizio sia più adatto alla tua situazione, puoi contattarci prima: ${siteConfig.contactEmail}`,
        ctaLabel: `Scrivi a ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Copertura geografica",
    coverageBody:
      "Attualmente disponibile in Lisbona, Porto, Setúbal, Cascais, Sintra, Braga e Algarve (Faro, Lagos, Albufeira). Copertura in espansione — verifica la disponibilità per la tua zona.",
    pricingTitle: "Nota sui prezzi",
    pricingBody:
      "I prezzi indicati sono intervalli orientativi basati sulla dimensione e sulla complessità dell’abitazione. Il prezzo finale viene confermato dopo il contatto iniziale e prima di qualsiasi impegno. Non esiste una tariffa di diagnosi separata: il costo totale dell’ispezione coincide con il prezzo del servizio.",
    disclosureText:
      "MoldCheck.pt è un’iniziativa del FAIRBANK Group, l’azienda dietro InspectOS. Non vendiamo trattamenti contro l’umidità. Non riceviamo commissioni da imprese di bonifica. Quando raccomandiamo un’ispezione o un’analisi di laboratorio, è perché riteniamo che tu ne abbia bisogno — non perché traiamo profitto dal trattamento successivo.",
  },
  es: {
    eyebrow: "Inspección independiente",
    title: "Inspección independiente de humedad y moho en Portugal",
    description:
      "Diagnóstico independiente, análisis de laboratorio y monitorización explicados con claridad, sin la lógica comercial del tratamiento.",
    independentTitle: "\u00bfQu\u00e9 significa \u201cindependiente\u201d?",
    independentParagraphs: [
      "En Portugal, el diagnóstico de los problemas de humedad y moho casi siempre lo realiza la empresa que después venderá el tratamiento. El diagnóstico gratuito es el inicio de un embudo comercial — no un servicio de información imparcial.",
      "Una inspección independiente funciona de forma distinta. El inspector cobra por su tiempo. No recibe comisión de la empresa de remediación, del fabricante del sistema de ventilación ni de ninguna otra empresa que pueda beneficiarse del resultado del diagnóstico. Su único interés es decirte con precisión qué tienes.",
      "Este es el modelo que representa InspectOS — y el único modelo que MoldCheck.pt recomienda.",
    ],
    howItWorksTitle: "¿Cómo funcionan?",
    howItWorksBody:
      "Las inspecciones son realizadas por inspectores certificados de InspectOS equipados con:\n\nhigrómetro digital de precisión — medición de humedad relativa del aire y temperatura\n\nmedidor de humedad de materiales (moisture meter) — medición no invasiva del contenido de humedad en paredes, suelos y techos\n\ncámara termográfica — detección de puentes térmicos, infiltraciones ocultas y zonas de condensación invisibles a simple vista\n\ncapacidad de toma de muestras — superficies, materiales y aire, para análisis de laboratorio cuando sea necesario\n\nDespués de la inspección, recibes un informe escrito con: localización y extensión del problema, causa probable, recomendaciones basadas en evidencia científica e indicación clara de cuándo un análisis de laboratorio es o no necesario.\n\nEl informe no incluye un presupuesto de tratamiento. No recomendamos empresas concretas de saneamiento. No tenemos ningún acuerdo comercial con empresas de remediación.",
    servicesTitle: "Servicios disponibles",
    tier1Cards: [
      {
        eyebrow: "NIVEL 1 — Inspección visual e instrumental",
        title: "Inspección estándar",
        body:
          "Inspección completa de la vivienda con higrómetro, medidor de humedad y cámara termográfica. Incluye informe escrito.\n\nPrecio orientativo: €250–€400 (vivienda de hasta 100 m²) | €400–€800 (vivienda de hasta 250 m²)",
      },
      {
        eyebrow: "NIVEL 1 — Inspección visual e instrumental",
        title: "Inspección precompra",
        body:
          "Para quien esté considerando comprar una vivienda y quiera saber exactamente qué tiene antes de firmar. Incluye informe utilizable para negociación o desistimiento de promesa de compra.\n\nPrecio orientativo: €350–€600",
      },
      {
        eyebrow: "NIVEL 1 — Inspección visual e instrumental",
        title: "Inspección postinundación / emergencia",
        body:
          "Para viviendas afectadas por inundación, rotura de tuberías o infiltración repentina. Enfocada en la evaluación de daños por agua y riesgo de contaminación fúngica. Respuesta rápida disponible.\n\nPrecio orientativo: €300–€500",
      },
      {
        eyebrow: "NIVEL 1 — Inspección visual e instrumental",
        title: "Verificación postremediación",
        body:
          "Confirmación independiente de que una obra de saneamiento se ha ejecutado correctamente y que el problema está realmente resuelto — antes de pagar el importe final a la empresa.\n\nPrecio orientativo: €200–€350",
      },
    ],
    tier2Cards: [
      {
        eyebrow: "NIVEL 2 — Análisis de laboratorio",
        title: "Muestreo de aire + análisis micológico",
        body:
          "Cuando la inspección visual e instrumental no es suficiente para identificar las especies presentes o cuantificar el riesgo con precisión, recomendamos análisis de laboratorio.\n\nToma de muestras de aire interior y exterior con análisis en laboratorio certificado ISO 17025. Identifica las especies fúngicas presentes y compara las concentraciones interior/exterior.\n\nPrecio orientativo: €500–€900 (incluye inspección, toma de muestras y análisis)",
      },
      {
        eyebrow: "NIVEL 2 — Análisis de laboratorio",
        title: "Muestreo de superficies y materiales",
        body:
          "Toma de muestras de superficies visibles y, cuando procede, de materiales de construcción. Adecuado para la identificación de especies en puntos específicos de interés.\n\nPrecio orientativo: €300–€600",
      },
    ],
    tier3Cards: [
      {
        eyebrow: "NIVEL 3 — Análisis especializado internacional",
        title: "ERMI (Environmental Relative Moldiness Index)",
        body:
          "Para situaciones que requieren un diagnóstico de precisión — especialmente sospecha de Stachybotrys, historial de daños graves por agua o casos con síntomas de salud persistentes.\n\nAnálisis del polvo acumulado mediante MSqPCR — el método más sensible disponible para detectar historial de contaminación fúngica, incluidas especies difíciles de detectar mediante muestreo de aire. Enviado a laboratorio colaborador en Estados Unidos.\n\nPrecio orientativo: €600–€900",
      },
      {
        eyebrow: "NIVEL 3 — HERTSMI-2",
        title: "HERTSMI-2",
        body:
          "Versión simplificada del ERMI centrada en las 5 especies clínicamente más relevantes: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Desarrollado específicamente para evaluación clínica en contexto de CIRS / enfermedades relacionadas con edificios.\n\n⚠️ Nota importante: MoldCheck.pt / InspectOS es el único proveedor de servicios HERTSMI-2 en la Península Ibérica y, hasta donde sabemos, en toda Europa. El laboratorio de referencia para esta prueba es Mycometrics (EE. UU.).\n\nPrecio orientativo: €450–€700",
        tone: "warning",
      },
      {
        eyebrow: "NIVEL 3 — Análisis especializado internacional",
        title: "Panel de micotoxinas en superficies",
        body:
          "Análisis químico de micotoxinas en muestras de superficie. Relevante cuando existe sospecha de producción de toxinas e impacto en la salud.\n\nPrecio orientativo: €700–€1.200",
      },
      {
        eyebrow: "NIVEL 3 — Análisis especializado internacional",
        title: "Microbioma completo del edificio (NGS)",
        body:
          "Secuenciación genómica de nueva generación — identificación integral de todos los hongos y bacterias presentes. El diagnóstico más completo disponible para edificios con historial complejo de daños por agua.\n\nPrecio orientativo: €1.000–€1.500",
      },
    ],
    tier4Cards: [
      {
        eyebrow: "NIVEL 4 — Monitorización continua",
        title: "Sensor de calidad del aire interior + seguimiento",
        body:
          "Instalación de sensor de monitorización continua (CO₂, TVOC, temperatura, humedad relativa). Informe mensual con análisis de tendencias. Adecuado para viviendas con problemas recurrentes o para seguimiento postremediación.\n\nPrecio orientativo: €150–€300 (instalación) + €25–€60/mes",
      },
      {
        eyebrow: "NIVEL 4 — Monitorización continua",
        title: "Reinspección anual",
        body:
          "Para viviendas con historial de problemas de humedad. Visita anual para evaluación de condiciones y detección temprana de recurrencias.\n\nPrecio orientativo: €180–€280/año",
      },
    ],
    bookingTitle: "Cómo reservar",
    bookingCards: [
      {
        eyebrow: "Reserva",
        title: "Reservar a través de InspectOS",
        body:
          "Las inspecciones se realizan a través de InspectOS plataforma independiente de inspección inmobiliaria en Portugal.",
        ctaLabel: "Reservar una inspección en InspectOS",
        ctaHref: "https://inspectos.pt",
        openInNewTab: true,
      },
      {
        eyebrow: "Dudas",
        title: "Contáctanos antes de reservar",
        body: `Si tienes dudas sobre qué servicio se adapta mejor a tu situación, puedes contactarnos primero: ${siteConfig.contactEmail}`,
        ctaLabel: `Contacta con ${siteConfig.contactEmail}`,
        ctaHref: `mailto:${siteConfig.contactEmail}`,
      },
    ],
    coverageTitle: "Cobertura geográfica",
    coverageBody:
      "Actualmente disponible en Lisboa, Oporto, Setúbal, Cascais, Sintra, Braga y Algarve (Faro, Lagos, Albufeira). Cobertura en expansión — consulta disponibilidad para tu zona.",
    pricingTitle: "Nota sobre precios",
    pricingBody:
      "Los precios indicados son rangos orientativos basados en el tamaño y la complejidad de la vivienda. El precio final se confirma tras el contacto inicial y antes de cualquier compromiso. No existe una tasa de diagnóstico separada: el coste total de la inspección es el precio del servicio.",
    disclosureText:
      "MoldCheck.pt es una iniciativa del FAIRBANK Group, la empresa detrás de InspectOS. No vendemos tratamientos contra la humedad. No recibimos comisiones de empresas de remediación. Cuando recomendamos una inspección o un análisis de laboratorio, es porque creemos que lo necesitas — no porque ganemos dinero con el tratamiento posterior.",
  },
};

export function getServicesContent(locale: ActiveLocale): ServicesLocaleContent {
  return servicesContentByLocale[locale] ?? servicesContentByLocale.en;
}

export function getServicesFallbackContent(locale: ActiveLocale): GlobalPageContent {
  const content = servicesContentByLocale[locale];

  if (!content) {
    throw new Error(`Missing services fallback content for locale: ${locale}`);
  }

  return {
    pageKey: "services",
    language: locale,
    translationGroup: "services",
    title: content.title,
    eyebrow: content.eyebrow,
    description: content.description,
    body: paragraphsToBlocks(content.independentParagraphs),
    introLayout: "grid",
    introCards: [
      {
        eyebrow:
          locale === "pt"
            ? "Como funciona"
            : locale === "en"
              ? "How it works"
              : locale === "fr"
                ? "Comment cela fonctionne"
                : locale === "de"
                  ? "Wie es funktioniert"
                  : locale === "nl"
                    ? "Hoe het werkt"
                    : locale === "it"
                      ? "Come funziona"
                      : "Cómo funciona",
        title: content.howItWorksTitle,
        body: content.howItWorksBody,
        tone: "featured",
      },
    ],
    sections: [
      {
        title: content.servicesTitle,
        tone: "band",
        layout: "utility",
        cards: content.tier1Cards,
      },
      {
        title:
          locale === "pt"
            ? "NÍVEL 2 — Análise Laboratorial (laboratório europeu)"
            : locale === "en"
              ? "TIER 2 — Laboratory Analysis (European laboratory)"
              : locale === "fr"
                ? "NIVEAU 2 — Analyse en laboratoire (laboratoire européen)"
                : locale === "de"
                  ? "STUFE 2 — Laboranalyse (europäisches Labor)"
                  : locale === "nl"
                    ? "NIVEAU 2 — Laboratoriumanalyse (Europees laboratorium)"
                    : locale === "it"
                      ? "LIVELLO 2 — Analisi di laboratorio (laboratorio europeo)"
                      : "NIVEL 2 — Análisis de laboratorio (laboratorio europeo)",
        layout: "utility",
        cards: content.tier2Cards,
      },
      {
        title:
          locale === "pt"
            ? "NÍVEL 3 — Análise Especializada Internacional"
            : locale === "en"
              ? "TIER 3 — Specialist International Analysis"
              : locale === "fr"
                ? "NIVEAU 3 — Analyse spécialisée internationale"
                : locale === "de"
                  ? "STUFE 3 — Spezialisierte internationale Analyse"
                  : locale === "nl"
                    ? "NIVEAU 3 — Gespecialiseerde internationale analyse"
                    : locale === "it"
                      ? "LIVELLO 3 — Analisi specialistica internazionale"
                      : "NIVEL 3 — Análisis especializado internacional",
        layout: "utility",
        cards: content.tier3Cards,
      },
      {
        title:
          locale === "pt"
            ? "NÍVEL 4 — Monitorização Contínua"
            : locale === "en"
              ? "TIER 4 — Continuous Monitoring"
              : locale === "fr"
                ? "NIVEAU 4 — Surveillance continue"
                : locale === "de"
                  ? "STUFE 4 — Kontinuierliche Überwachung"
                  : locale === "nl"
                    ? "NIVEAU 4 — Continue monitoring"
                    : locale === "it"
                      ? "LIVELLO 4 — Monitoraggio continuo"
                      : "NIVEL 4 — Monitorización continua",
        layout: "utility",
        cards: content.tier4Cards,
      },
      {
        title: content.bookingTitle,
        layout: "utility",
        cards: content.bookingCards,
      },
      {
        title: content.coverageTitle,
        layout: "utility",
        cards: [
          {
            title: content.coverageTitle,
            body: content.coverageBody,
          },
        ],
      },
      {
        title: content.pricingTitle,
        layout: "utility",
        cards: [
          {
            title: content.pricingTitle,
            body: content.pricingBody,
          },
        ],
      },
    ],
    disclosureTitle:
      locale === "pt"
        ? "Disclosure final"
        : locale === "en"
          ? "Final disclosure"
          : locale === "fr"
            ? "Disclosure final"
            : locale === "de"
              ? "Abschließender Disclosure-Hinweis"
              : locale === "nl"
                ? "Einddisclosure"
                : locale === "it"
                  ? "Disclosure finale"
                  : "Disclosure final",
    disclosureText: content.disclosureText,
  };
}

