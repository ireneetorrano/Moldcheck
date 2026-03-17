import type { ActiveLocale } from "@/config/locales";
import { PageShell } from "@/components/shared/PageShell";

const editorialPolicyContent: Record<
  ActiveLocale,
  { eyebrow: string; title: string; description: string; body: string }
> = {
  pt: {
    eyebrow: "Política editorial",
    title: "Como trabalhamos — e a que nos comprometemos",
    description:
      "O MoldCheck.pt é uma publicação editorial independente. Esta página explica os nossos princípios editoriais, as nossas fontes, e o que nos distingue de outros recursos sobre bolor e humidade.",
    body: `Independência editorial

O MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS — plataforma de inspecção independente de imóveis em Portugal.

Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspecção ou análise laboratorial, é porque acreditamos que precisa de uma — não porque lucramos com o tratamento que se segue.

Fontes científicas

Todo o conteúdo deste site é baseado em investigação científica revisada por pares, incluindo as diretrizes da OMS de 2009 e o padrão IICRC S520. Quando a ciência é incerta, dizemos que é incerta.

Conflito de interesse

As principais empresas de tratamento de bolor em Portugal oferecem diagnósticos gratuitos. É uma estratégia comercial inteligente: a empresa que diagnostica o problema também vende a solução.

Não existe em Portugal nenhuma entidade que avalie o bolor na sua casa e lhe diga o que tem — sem ganhar dinheiro com o que se segue. O MoldCheck.pt é essa alternativa.

Contacto editorial

Para questões editoriais, correções ou sugestões, utilize o formulário de contacto disponível no site.`,
  },
  en: {
    eyebrow: "Editorial policy",
    title: "How we work — and what we commit to",
    description:
      "MoldCheck.pt is an independent editorial publication. This page explains our editorial principles, our sources, and what distinguishes us from other mold and damp resources.",
    body: `Editorial independence

MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK operates InspectOS, an independent property inspection platform in Portugal.

We do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or a lab test, it is because we believe you need one — not because we profit from whatever treatment comes next.

Scientific sources

All content on this site is based on peer-reviewed scientific research, including the 2009 WHO guidelines and the IICRC S520 standard. When the science is uncertain, we say so.

Conflict of interest

Portugal's major mold treatment companies offer free home diagnoses. It is a smart commercial strategy: the company that diagnoses the problem also sells the solution.

There is no independent entity in Portugal that will assess the mold in your home and tell you what you have — without making money from what comes next. MoldCheck.pt is that alternative.

Editorial contact

For editorial questions, corrections or suggestions, use the contact form available on the site.`,
  },
  fr: {
    eyebrow: "Politique éditoriale",
    title: "Comment nous travaillons — et ce à quoi nous nous engageons",
    description:
      "MoldCheck.pt est une publication éditoriale indépendante. Cette page explique nos principes éditoriaux, nos sources et ce qui nous distingue des autres ressources sur les moisissures et l'humidité.",
    body: `Indépendance éditoriale

MoldCheck.pt est une initiative du FAIRBANK Group. FAIRBANK exploite InspectOS, une plateforme indépendante d'inspection immobilière au Portugal.

Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions de la part d'entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c'est parce que nous pensons que vous en avez besoin — pas parce que nous profitons du traitement qui suit.

Sources scientifiques

Tout le contenu de ce site repose sur des recherches scientifiques évaluées par les pairs, notamment les recommandations de l'OMS de 2009 et la norme IICRC S520. Lorsque la science est incertaine, nous le disons.

Conflit d'intérêts

Les principales entreprises de traitement des moisissures au Portugal proposent des diagnostics gratuits à domicile. C'est une stratégie commerciale efficace : l'entreprise qui diagnostique le problème vend aussi la solution.

Il n'existe au Portugal aucune entité indépendante qui évaluera les moisissures dans votre logement et vous dira ce que vous avez — sans gagner d'argent sur ce qui suit. MoldCheck.pt est cette alternative.

Contact éditorial

Pour toute question éditoriale, correction ou suggestion, utilisez le formulaire de contact disponible sur le site.`,
  },
  de: {
    eyebrow: "Redaktionsrichtlinie",
    title: "Wie wir arbeiten — und wozu wir uns verpflichten",
    description:
      "MoldCheck.pt ist eine unabhängige redaktionelle Publikation. Diese Seite erläutert unsere redaktionellen Grundsätze, unsere Quellen und was uns von anderen Ressourcen zu Schimmel und Feuchtigkeit unterscheidet.",
    body: `Redaktionelle Unabhängigkeit

MoldCheck.pt ist eine Initiative der FAIRBANK Group. FAIRBANK betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.

Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie sie brauchen — nicht weil wir an der anschließenden Behandlung verdienen.

Wissenschaftliche Quellen

Alle Inhalte auf dieser Website basieren auf begutachteter wissenschaftlicher Forschung, einschließlich der WHO-Leitlinien von 2009 und des IICRC-S520-Standards. Wenn die Wissenschaft unsicher ist, sagen wir das offen.

Interessenkonflikt

Portugals große Unternehmen für Schimmelbehandlung bieten kostenlose Hausdiagnosen an. Das ist eine kluge Geschäftsstrategie: Das Unternehmen, das das Problem diagnostiziert, verkauft auch die Lösung.

Es gibt in Portugal keine unabhängige Stelle, die den Schimmel in Ihrer Wohnung bewertet und Ihnen sagt, was Sie haben — ohne an dem zu verdienen, was danach kommt. MoldCheck.pt ist diese Alternative.

Redaktioneller Kontakt

Für redaktionelle Fragen, Korrekturen oder Anregungen nutzen Sie bitte das auf der Website verfügbare Kontaktformular.`,
  },
  nl: {
    eyebrow: "Redactioneel beleid",
    title: "Hoe wij werken — en waartoe wij ons verbinden",
    description:
      "MoldCheck.pt is een onafhankelijke redactionele publicatie. Deze pagina legt onze redactionele principes, onze bronnen en wat ons onderscheidt van andere bronnen over schimmel en vocht uit.",
    body: `Redactionele onafhankelijkheid

MoldCheck.pt is een initiatief van de FAIRBANK Group. FAIRBANK beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.

We verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijven. Als we een inspectie of laboratoriumanalyse aanbevelen, is dat omdat we denken dat je die nodig hebt — niet omdat we verdienen aan de behandeling die daarop volgt.

Wetenschappelijke bronnen

Alle inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijk onderzoek, waaronder de WHO-richtlijnen uit 2009 en de IICRC S520-standaard. Wanneer de wetenschap onzeker is, zeggen we dat ook.

Belangenconflict

De grote schimmelbehandelingsbedrijven in Portugal bieden gratis huisdiagnoses aan. Dat is een slimme commerciële strategie: het bedrijf dat het probleem diagnosticeert, verkoopt ook de oplossing.

Er bestaat in Portugal geen onafhankelijke partij die de schimmel in jouw woning beoordeelt en je vertelt wat er aan de hand is — zonder geld te verdienen aan wat daarna komt. MoldCheck.pt is dat alternatief.

Redactioneel contact

Voor redactionele vragen, correcties of suggesties kunt u het contactformulier op de website gebruiken.`,
  },
  it: {
    eyebrow: "Politica editoriale",
    title: "Come lavoriamo — e a cosa ci impegniamo",
    description:
      "MoldCheck.pt è una pubblicazione editoriale indipendente. Questa pagina spiega i nostri principi editoriali, le nostre fonti e ciò che ci distingue da altre risorse su muffa e umidità.",
    body: `Indipendenza editoriale

MoldCheck.pt è un'iniziativa del FAIRBANK Group. FAIRBANK gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.

Non vendiamo trattamenti contro l'umidità. Non riceviamo commissioni da aziende di risanamento. Quando consigliamo un'ispezione o un'analisi di laboratorio, è perché riteniamo che tu ne abbia bisogno — non perché guadagniamo dal trattamento che segue.

Fonti scientifiche

Tutti i contenuti di questo sito si basano su ricerca scientifica peer-reviewed, comprese le linee guida OMS del 2009 e lo standard IICRC S520. Quando la scienza è incerta, lo diciamo chiaramente.

Conflitto di interessi

Le principali aziende di trattamento della muffa in Portogallo offrono diagnosi gratuite a domicilio. È una strategia commerciale intelligente: l'azienda che diagnostica il problema è anche quella che vende la soluzione.

In Portogallo non esiste alcuna entità indipendente che valuti la muffa nella tua casa e ti dica che cosa hai — senza guadagnare da ciò che viene dopo. MoldCheck.pt è quell'alternativa.

Contatto editoriale

Per domande editoriali, correzioni o suggerimenti, utilizza il modulo di contatto disponibile sul sito.`,
  },
  es: {
    eyebrow: "Política editorial",
    title: "Cómo trabajamos — y a qué nos comprometemos",
    description:
      "MoldCheck.pt es una publicación editorial independiente. Esta página explica nuestros principios editoriales, nuestras fuentes y lo que nos distingue de otros recursos sobre moho y humedad.",
    body: `Independencia editorial

MoldCheck.pt es una iniciativa del FAIRBANK Group. FAIRBANK gestiona InspectOS, una plataforma independiente de inspección inmobiliaria en Portugal.

No vendemos tratamientos contra la humedad. No cobramos comisiones de empresas de remediación. Cuando recomendamos una inspección o un análisis de laboratorio, es porque creemos que lo necesitas — no porque ganemos dinero con el tratamiento posterior.

Fuentes científicas

Todo el contenido de este sitio se basa en investigación científica revisada por pares, incluidas las directrices de la OMS de 2009 y el estándar IICRC S520. Cuando la ciencia es incierta, lo decimos claramente.

Conflicto de interés

Las principales empresas de tratamiento de moho en Portugal ofrecen diagnósticos gratuitos en la vivienda. Es una estrategia comercial inteligente: la empresa que diagnostica el problema también vende la solución.

No existe en Portugal ninguna entidad independiente que evalúe el moho de tu vivienda y te diga qué tienes — sin ganar dinero con lo que viene después. MoldCheck.pt es esa alternativa.

Contacto editorial

Para preguntas editoriales, correcciones o sugerencias, utiliza el formulario de contacto disponible en el sitio.`,
  },
};

export default async function EditorialPolicyPage({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}) {
  const { locale } = await params;
  const content = editorialPolicyContent[locale] ?? editorialPolicyContent.pt;

  return (
    <>
      <PageShell
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      <div className="editorial-policy-body page-content-shell">
        {content.body.split("\n\n").map((block, i) => {
          const isHeading = i % 5 === 0 || block.length < 60;
          return isHeading && block.trim().split(" ").length <= 6 ? (
            <h2 key={i}>{block.trim()}</h2>
          ) : (
            <p key={i}>{block.trim()}</p>
          );
        })}
      </div>
    </>
  );
}
