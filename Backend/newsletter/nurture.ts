import { Resend } from "resend";
import { requireEnv } from "@backend/shared/env";
import { esc } from "@backend/shared/utils";
import { getChecklistUrl, getUnsubscribeUrl } from "./checklists";
import type { NewsletterLocale } from "./schema";

// ── Localized article URLs ────────────────────────────────────────────────────
// Derived from foundationalArticles slugs + globalRouteSlugs in routeMap.ts

const SITE = () => process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";

const ARTICLE_SLUGS: Record<"bleach" | "health" | "portugal", Record<NewsletterLocale, string>> = {
  bleach: {
    pt: "por-que-lixivia-nao-resolve-bolor",
    en: "why-bleach-doesnt-fix-mold",
    fr: "pourquoi-javel-ne-resout-pas-moisissures",
    de: "warum-bleichmittel-schimmel-nicht-beseitigt",
    nl: "waarom-bleekwater-schimmel-niet-oplost",
    it: "perche-candeggina-non-risolve-muffa",
    es: "por-que-la-lejia-no-soluciona-el-moho",
  },
  health: {
    pt: "casa-afetar-saude-bolores-doencas-respiratorias",
    en: "is-your-home-making-you-ill",
    fr: "votre-logement-affecte-t-il-votre-sante",
    de: "macht-ihre-wohnung-sie-krank",
    nl: "heeft-uw-woning-invloed-op-uw-gezondheid",
    it: "la-tua-casa-ti-sta-facendo-ammalare",
    es: "esta-afectando-tu-vivienda-a-tu-salud",
  },
  portugal: {
    pt: "segundo-pior-problema-bolor-europa",
    en: "europes-second-worst-mold-problem",
    fr: "deuxieme-pire-probleme-moisissures",
    de: "zweitschlimmstes-schimmelproblem-europa",
    nl: "op-een-na-ergste-schimmelprobleem",
    it: "secondo-peggior-problema-muffa-europa",
    es: "segundo-peor-problema-moho-europa",
  },
};

const ARTICLES_SECTION: Record<NewsletterLocale, string> = {
  pt: "artigos", en: "articles", fr: "articles", de: "artikel",
  nl: "artikelen", it: "articoli", es: "articulos",
};

const SERVICES_SECTION: Record<NewsletterLocale, string> = {
  pt: "servicos", en: "services", fr: "services", de: "dienste",
  nl: "diensten", it: "servizi", es: "servicios",
};

const PRIVACY_SECTION: Record<NewsletterLocale, string> = {
  pt: "privacidade", en: "privacy-policy", fr: "politique-confidentialite",
  de: "datenschutz", nl: "privacybeleid", it: "informativa-privacy",
  es: "politica-privacidad",
};

function articleUrl(locale: NewsletterLocale, key: "bleach" | "health" | "portugal"): string {
  return `${SITE()}/${locale}/${ARTICLES_SECTION[locale]}/${ARTICLE_SLUGS[key][locale]}`;
}
function servicesUrl(locale: NewsletterLocale): string {
  return `${SITE()}/${locale}/${SERVICES_SECTION[locale]}`;
}
function privacyUrl(locale: NewsletterLocale): string {
  return `${SITE()}/${locale}/${PRIVACY_SECTION[locale]}`;
}

// ── Delay schedule (days after previous send) ─────────────────────────────────
export const NURTURE_DELAYS_DAYS = [0, 3, 5, 5, 7, 7] as const; // index = step 1..6, step 1 is immediate

// ── Email content ─────────────────────────────────────────────────────────────

interface NurtureEmail {
  subject: string;
  previewText: string;
  html: (opts: { checklistUrl: string; unsubscribeUrl: string; privacyUrl: string; articleUrl?: string; servicesUrl?: string }) => string;
}

type NurtureSequence = [NurtureEmail, NurtureEmail, NurtureEmail, NurtureEmail, NurtureEmail, NurtureEmail];

// ── HTML template ─────────────────────────────────────────────────────────────

function tpl(opts: {
  previewText: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  footerExtra?: string;
  unsubscribeUrl: string;
  privacyUrl: string;
  unsubscribeLabel: string;
  privacyLabel: string;
  footerLine: string;
}): string {
  const cta = opts.ctaLabel && opts.ctaHref
    ? `<table cellpadding="0" cellspacing="0" style="margin:24px 0;">
        <tr><td style="background:#2a7a75;border-radius:5px;">
          <a href="${opts.ctaHref}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">${esc(opts.ctaLabel)}</a>
        </td></tr>
      </table>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(opts.previewText)}</title></head>
<body style="margin:0;padding:0;background:#f7fafa;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(opts.previewText)}</div>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7fafa;padding:40px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border:1px solid #d8e8e7;border-radius:6px;overflow:hidden;">
      <tr><td style="background:#1b4d4a;padding:22px 32px;">
        <p style="margin:0;font-family:'Palatino Linotype',Palatino,Georgia,serif;font-size:20px;color:#ffffff;letter-spacing:-0.01em;">MoldCheck.pt</p>
      </td></tr>
      <tr><td style="padding:32px 32px 24px;">
        ${opts.body}
        ${cta}
        ${opts.footerExtra ?? ""}
      </td></tr>
      <tr><td style="background:#f7fafa;border-top:1px solid #d8e8e7;padding:14px 32px;">
        <p style="margin:0;font-size:11px;color:#9ab5b4;line-height:1.6;">
          ${esc(opts.footerLine)}<br>
          <a href="${opts.unsubscribeUrl}" style="color:#9ab5b4;text-decoration:underline;">${esc(opts.unsubscribeLabel)}</a>
          &nbsp;·&nbsp;
          <a href="${opts.privacyUrl}" style="color:#9ab5b4;text-decoration:underline;">${esc(opts.privacyLabel)}</a>
          &nbsp;·&nbsp;moldcheck.pt
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function p(text: string): string {
  return `<p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:#1a2e2d;">${esc(text)}</p>`;
}
function h(text: string): string {
  return `<p style="margin:20px 0 8px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#2a7a75;">${esc(text)}</p>`;
}
function ul(items: string[]): string {
  return `<ul style="margin:0 0 14px;padding-left:20px;">${items.map((i) => `<li style="font-size:15px;line-height:1.75;color:#1a2e2d;margin-bottom:4px;">${esc(i)}</li>`).join("")}</ul>`;
}
function link(label: string, href: string): string {
  return `<a href="${href}" style="color:#2a7a75;font-weight:600;text-decoration:none;">${esc(label)}</a>`;
}

// ── EN sequence ───────────────────────────────────────────────────────────────

const EN: NurtureSequence = [
  {
    subject: "Your mold checklist + one thing to do today",
    previewText: "30 minutes, a torch, and a hygrometer.",
    html: ({ checklistUrl, unsubscribeUrl, privacyUrl: pUrl }) => tpl({
      previewText: "30 minutes, a torch, and a hygrometer.",
      body: [
        p("Here is your checklist:"),
        `<table cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#2a7a75;border-radius:5px;"><a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Download checklist (PDF)</a></td></tr></table>`,
        p("It works best with a hygrometer — a humidity meter. If you don't have one yet, they cost €15–40 at any hardware or DIY store. One reading on a cold morning will tell you more about your home than any visual inspection."),
        h("One thing to do today"),
        p("Place the hygrometer in your bedroom. Leave it there for five days and note the minimum and maximum readings. What you're looking for: anything consistently above 65% relative humidity in winter is a signal."),
        p("That single number will tell you whether you need to investigate further — or whether you can stop worrying."),
        h("What MoldCheck.pt is"),
        p("We're a FAIRBANK Group initiative. FAIRBANK also operates InspectOS, Portugal's independent property inspection platform."),
        p("We do not sell damp treatments. We do not take commissions from remediation companies. This newsletter will never try to sell you a product you don't need."),
        p("What we will do: send you accurate, source-referenced information about mold and damp in Portuguese buildings — in plain language, at a useful pace."),
        p("You can unsubscribe at any time."),
        p("— The MoldCheck.pt team"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt · FAIRBANK Group",
    }),
  },
  {
    subject: "The thing you should NOT do if you find mold",
    previewText: "It makes the stain disappear. The mold stays.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "It makes the stain disappear. The mold stays.",
      body: [
        p("If you've ever found mold and reached for the bleach, you're in excellent company."),
        p("You're also — almost certainly — wasting your time."),
        h("Why bleach doesn't work on mold"),
        p("Bleach (sodium hypochlorite) kills fungi on non-porous surfaces like tile or glass. On porous surfaces — plaster, drywall, grout, old silicone — the water component of the solution soaks in. The active chlorine stays on the surface."),
        p("Result: the visible stain disappears. The fungal root structure, which has penetrated the material, remains alive."),
        p("Within four to eight weeks — sometimes less — the colony is back. Sometimes larger than before, because you've added water (a nutrient) and removed surface competition."),
        h("What the IICRC S520 standard says"),
        p("The IICRC S520 (2024 edition) — the international professional standard for mold remediation — explicitly does not recommend bleach as a primary biocide for mold treatment in buildings. The reasons: ineffectiveness on porous substrates, potential material damage, and toxic by-products in enclosed spaces."),
        h("What actually works"),
        p("The short answer: remove the moisture source first. The mold is a symptom. Chronic humidity is the cause. Fix the cause, and mold cannot grow back — regardless of what you put on the surface."),
        p(`We've written the full explanation here: ${link("Why Bleach Doesn't Fix Mold →", aUrl ?? "#")}`),
        h("The rule of thumb"),
        p("If mold returns within six weeks of cleaning, you have not addressed the source. The source is almost always a moisture problem — condensation, infiltration, rising damp, or a plumbing leak."),
        p("Next email: how to know if your home's air quality is affecting your health."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Is your home making you ill? (The question most doctors don't ask)",
    previewText: "Symptoms that improve when you leave the house.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Symptoms that improve when you leave the house.",
      body: [
        p("There is a question that rarely gets asked in a medical consultation: where do you live?"),
        p("Not \"what do you eat\" or \"how much do you exercise.\" Where do you sleep, and what is the air quality of that space?"),
        h("The signal most people miss"),
        p("Symptoms from chronic indoor mold exposure are often gradual and vague — easy to attribute to other causes. They include:"),
        ul(["Persistent dry cough, worse at night or in the morning", "Nasal congestion without obvious seasonal pattern", "Fatigue that doesn't improve with rest", "Frequent headaches on waking", "Eyes that itch or water indoors"]),
        p("These are also the symptoms of a dozen other conditions. The differentiating factor: do your symptoms improve when you spend time away from home?"),
        p("If they systematically get better on holiday, at work, or anywhere outside your home — and return when you come back — your environment is worth investigating before you investigate anything else."),
        h("What the WHO established"),
        p("The WHO's 2009 Guidelines for Indoor Air Quality: Dampness and Mould established a causal link between residential damp/mold exposure and asthma (including triggering in people who already have it), allergic rhinitis, chronic cough, and wheeze."),
        p("This isn't speculative. It's one of the most robust associations in environmental medicine."),
        h("Who is most at risk"),
        p("Children under five. People with existing asthma. Elderly adults. Anyone on immunosuppressive medication. These groups deserve particular attention if there are moisture problems in the home."),
        p(`The full article: ${link("Is Your Home Making You Ill? →", aUrl ?? "#")}`),
        p("If you have persistent unexplained symptoms and a home with known moisture problems, the most efficient sequence is: environmental assessment first, then bring the results to your doctor. Treating asthma without addressing the home is like treating a flood without turning off the tap."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Why Portugal has Europe's second-worst mold problem",
    previewText: "One in four households. Almost nobody talks about it.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "One in four households. Almost nobody talks about it.",
      body: [
        p("24 to 26 percent of Portuguese households report problems with damp or mold. That's Eurostat's EU-SILC data — public, uncontested, rarely discussed."),
        p("Only Cyprus is worse in the European Union. The EU average is around 13–15%. Portugal is almost double."),
        h("Why this happens"),
        p("It's not negligence. It's physics and history."),
        p("82% of Portuguese residential buildings were constructed before 2000 — before any meaningful insulation or energy efficiency requirements existed. These buildings have severe thermal bridges: aluminium window frames with no thermal break, thin exterior walls, uninsulated roof slabs."),
        p("When humid indoor air meets these cold surfaces in winter, condensation forms. Porto's annual average relative humidity is 77%. Lisbon reaches 84% on the coldest, wettest weeks. A building not designed for these conditions produces structural condensation — not accidental, structural."),
        p("Add the cultural habit of not heating homes in winter and you have surfaces that stay cold enough to condense for months at a time."),
        h("The diagnostic gap"),
        p("In France there is a certified independent diagnostiqueur immobilier. In Germany, a Sachverständiger für Schimmelpilze. In the UK, accredited damp surveyors."),
        p("In Portugal, no equivalent exists for residential mold diagnostics. The companies that assess mold are the same companies that sell the treatment. This is not a scandal — it is simply how the market is structured. But it means independent information is almost entirely absent."),
        p("MoldCheck.pt and InspectOS exist to begin filling that gap — inspectors who charge for their time and receive no commission on what follows."),
        h("If you're buying or renting in Portugal"),
        p("Most property purchases happen in summer — when humidity is low and mold is not visible. This is structural, not accidental. An independent inspection before signing the promissory contract (CPCV) is the only way to know what you're actually buying."),
        p(`Full article: ${link("Portugal's Mold Problem: What the Data Says →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "What people find when they actually look",
    previewText: "The things that were there before the stain appeared.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "The things that were there before the stain appeared.",
      body: [
        p("Most mold problems have a period — often months — when they are detectable by instrument but not visible to the eye."),
        p("A moisture meter reading of 22% on a wall that looks completely dry is a problem. A relative humidity of 78% recorded consistently at 7am in a bedroom with no visible condensation is a problem. Neither of these shows up in a visual walk-around."),
        h("The pattern we see repeatedly"),
        p("People contact us after the visible mold appears. The inspection finds:"),
        ul([
          "A moisture reading in the wall that has been elevated for at least one full winter season",
          "A thermal bridge — typically an aluminium window frame or a balcony slab junction — that the building has had since it was built",
          "A room layout that has placed a wardrobe against the coldest wall in the house",
          "Ventilation that was technically installed but has been blocked, broken, or turned off",
        ]),
        p("None of these caused the mold suddenly. They created the conditions that made it inevitable."),
        h("Why this matters for inspection timing"),
        p("The best time to inspect is before the visible mold appears — or immediately after discovering it, before any cleaning or treatment. Treatment removes the evidence. What remains is a surface that may or may not have an active moisture problem."),
        p("An inspection after treatment is still valuable: moisture meters read through paint and plaster. But it's harder to interpret without the baseline."),
        h("If any of this sounds familiar"),
        p("If you've used the checklist, registered humidity readings above 65%, or found visible mold anywhere in your home, an independent inspection is the next logical step."),
        p("Not because we want to sell you an inspection. Because it's the most efficient way to understand what you have — before spending money on a treatment that may or may not address the actual cause."),
        p("— MoldCheck.pt"),
      ].join(""),
      ctaLabel: "See our inspection services →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "One offer, no pressure, then we'll stop",
    previewText: "An independent inspection. Charged by the hour. Nothing on the other end.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "An independent inspection. Charged by the hour. Nothing on the other end.",
      body: [
        p("This is the last email in this sequence. After this, you'll only hear from us when we publish something new — which is a few times a month at most."),
        h("What an independent inspection actually looks like"),
        p("An InspectOS inspector arrives with three instruments:"),
        ul([
          "A precision digital hygrometer",
          "A non-invasive materials moisture meter (reads through walls without drilling)",
          "A thermal imaging camera (shows hidden condensation zones invisible to the naked eye)",
        ]),
        p("They spend 60–90 minutes in the property. They write a report, usually within 48 hours. The report describes what they found, where the moisture is coming from, and what would address it."),
        p("They receive no commission from any contractor, ventilation company, or product supplier. Their fee is the inspection. That's the end of the commercial relationship."),
        h("What it costs"),
        ul([
          "Standard inspection: from €250",
          "Pre-purchase inspection (before CPCV): from €350",
          "Post-flood emergency (24–48h response): from €300",
          "Post-remediation verification: from €200",
        ]),
        p("Deposits via Stripe. Remainder on day of inspection."),
        h("If you're not ready yet"),
        p("That's completely fine. The checklist, the articles, and everything on MoldCheck.pt are free and always will be. We're not going anywhere."),
        p("If you do want to book, or want to ask a question before deciding, the quickest way is:"),
        p("— The MoldCheck.pt team / InspectOS"),
      ].join(""),
      ctaLabel: "Book via InspectOS →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Unsubscribe", privacyLabel: "Privacy Policy",
      footerLine: "MoldCheck.pt is a FAIRBANK Group initiative. We do not sell damp treatments. We do not take commissions from remediation companies.",
    }),
  },
];

// ── PT sequence ───────────────────────────────────────────────────────────────

const PT: NurtureSequence = [
  {
    subject: "O seu checklist de bolor + uma coisa a fazer hoje",
    previewText: "30 minutos, uma lanterna e um higrómetro.",
    html: ({ checklistUrl, unsubscribeUrl, privacyUrl: pUrl }) => tpl({
      previewText: "30 minutos, uma lanterna e um higrómetro.",
      body: [
        p("Aqui está o seu checklist:"),
        `<table cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#2a7a75;border-radius:5px;"><a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Descarregar checklist (PDF)</a></td></tr></table>`,
        p("Funciona melhor com um higrómetro — um medidor de humidade. Se ainda não tem um, custam entre €15 e €40 em qualquer loja de bricolage. Uma leitura numa manhã fria diz-lhe mais sobre a sua casa do que qualquer inspeção visual."),
        h("Uma coisa a fazer hoje"),
        p("Coloque o higrómetro no quarto. Deixe-o lá durante cinco dias e registe as leituras mínima e máxima. O que procura: qualquer valor consistentemente acima de 65% de humidade relativa no inverno é um sinal."),
        p("Esse número único dir-lhe-á se precisa de investigar mais — ou se pode parar de se preocupar."),
        h("O que é o MoldCheck.pt"),
        p("Somos uma iniciativa do FAIRBANK Group. O FAIRBANK também opera a InspectOS, a plataforma de inspeção independente de imóveis em Portugal."),
        p("Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Esta newsletter nunca tentará vender-lhe um produto de que não precisa."),
        p("O que faremos: enviar-lhe informação rigorosa e referenciada sobre bolor e humidade em edifícios portugueses — em linguagem clara, a um ritmo útil."),
        p("Pode cancelar a subscrição a qualquer momento."),
        p("— A equipa MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt · FAIRBANK Group",
    }),
  },
  {
    subject: "O que NÃO deve fazer se encontrar bolor",
    previewText: "Faz desaparecer a mancha. O bolor fica.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Faz desaparecer a mancha. O bolor fica.",
      body: [
        p("Se alguma vez encontrou bolor e foi buscar a lixívia, está em excelente companhia."),
        p("Também está — quase certamente — a perder o seu tempo."),
        h("Porque é que a lixívia não funciona no bolor"),
        p("A lixívia (hipoclorito de sódio) mata fungos em superfícies não porosas como azulejo ou vidro. Em superfícies porosas — reboco, gesso cartonado, juntas, silicone antigo — o componente aquoso da solução penetra. O cloro activo fica na superfície."),
        p("Resultado: a mancha visível desaparece. A estrutura radicular do fungo, que penetrou o material, continua viva."),
        p("Em quatro a oito semanas — às vezes menos — a colónia está de volta. Por vezes maior do que antes, porque adicionou água (um nutriente) e removeu a competição superficial."),
        h("O que diz a norma IICRC S520"),
        p("O IICRC S520 (edição de 2024) — a norma profissional internacional para remediação de bolor — não recomenda explicitamente a lixívia como biocida primário no tratamento de bolor em edifícios. As razões: ineficácia em substratos porosos, potencial dano nos materiais e subprodutos tóxicos em espaços fechados."),
        h("O que realmente funciona"),
        p("A resposta curta: remova primeiro a fonte de humidade. O bolor é um sintoma. A humidade crónica é a causa. Corrija a causa e o bolor não pode voltar — independentemente do que aplicar na superfície."),
        p(`Escrevemos a explicação completa aqui: ${link("Por Que a Lixívia Não Resolve o Bolor →", aUrl ?? "#")}`),
        h("A regra prática"),
        p("Se o bolor regressar em menos de seis semanas após a limpeza, não tratou a origem. A origem é quase sempre um problema de humidade — condensação, infiltração, ascensão capilar ou uma fuga."),
        p("Próximo email: como saber se a qualidade do ar da sua casa está a afetar a sua saúde."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "A sua casa está a deixá-lo doente? (A pergunta que a maioria dos médicos não faz)",
    previewText: "Sintomas que melhoram quando sai de casa.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Sintomas que melhoram quando sai de casa.",
      body: [
        p("Há uma pergunta que raramente é feita numa consulta médica: onde vive?"),
        p("Não \"o que come\" ou \"quanto exercício faz\". Onde dorme, e qual é a qualidade do ar desse espaço?"),
        h("O sinal que a maioria das pessoas ignora"),
        p("Os sintomas de exposição crónica ao bolor doméstico são frequentemente graduais e vagos — fáceis de atribuir a outras causas. Incluem:"),
        ul(["Tosse seca persistente, pior à noite ou de manhã", "Congestão nasal sem padrão sazonal óbvio", "Fadiga que não melhora com o descanso", "Dores de cabeça frequentes ao acordar", "Olhos que coçam ou lacrimejam em casa"]),
        p("Estes são também os sintomas de uma dúzia de outras condições. O factor diferenciador: os seus sintomas melhoram quando passa tempo fora de casa?"),
        p("Se melhoram sistematicamente nas férias, no trabalho, ou em qualquer lugar fora de casa — e regressam quando volta — o seu ambiente merece ser investigado antes de qualquer outra coisa."),
        h("O que a OMS estabeleceu"),
        p("As Diretrizes da OMS de 2009 para a Qualidade do Ar Interior: Humidade e Bolor estabeleceram uma relação causal entre a exposição residencial a humidade/bolor e asma, rinite alérgica, tosse crónica e pieira."),
        p("Não é especulativo. É uma das associações mais robustas em medicina ambiental."),
        h("Quem tem maior risco"),
        p("Crianças com menos de cinco anos. Pessoas com asma existente. Adultos idosos. Qualquer pessoa com medicação imunossupressora. Estes grupos merecem atenção especial se houver problemas de humidade em casa."),
        p(`O artigo completo: ${link("A Sua Casa Está a Afetar a Sua Saúde? →", aUrl ?? "#")}`),
        p("Se tem sintomas persistentes inexplicados e uma casa com problemas de humidade conhecidos, a sequência mais eficiente é: avaliação ambiental primeiro, depois leve os resultados ao médico."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Porque é que Portugal tem o segundo pior problema de bolor da Europa",
    previewText: "Um em cada quatro agregados. Quase ninguém fala nisso.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Um em cada quatro agregados. Quase ninguém fala nisso.",
      body: [
        p("24 a 26 por cento dos agregados portugueses reportam problemas de humidade ou bolor. São dados do EU-SILC do Eurostat — públicos, incontestados, raramente discutidos."),
        p("Só o Chipre está pior na União Europeia. A média europeia é de cerca de 13–15%. Portugal tem quase o dobro."),
        h("Porque é que acontece"),
        p("Não é negligência. É física e história."),
        p("82% dos edifícios residenciais portugueses foram construídos antes de 2000 — antes de qualquer requisito significativo de isolamento ou eficiência energética. Estes edifícios têm pontes térmicas graves: caixilhos de alumínio sem corte térmico, paredes exteriores finas, lajes de cobertura sem isolamento."),
        p("Quando o ar interior húmido encontra estas superfícies frias no inverno, forma-se condensação. A humidade relativa média anual do Porto é de 77%. Lisboa atinge 84% nas semanas mais frias e húmidas. Um edifício não concebido para estas condições produz condensação estrutural — não acidental, estrutural."),
        p("Acrescente o hábito cultural de não aquecer as casas no inverno e tem superfícies que ficam frias o suficiente para condensar durante meses seguidos."),
        h("O défice de diagnóstico"),
        p("Em França existe um diagnostiqueur immobilier certificado e independente. Na Alemanha, um Sachverständiger für Schimmelpilze. No Reino Unido, inspetores de humidade acreditados."),
        p("Em Portugal, não existe equivalente para diagnóstico residencial de bolor. As empresas que avaliam o bolor são as mesmas que vendem o tratamento. Não é um escândalo — é simplesmente como o mercado está estruturado. Mas significa que a informação independente está quase inteiramente ausente."),
        p("O MoldCheck.pt e a InspectOS existem para começar a preencher essa lacuna — inspetores que cobram pelo seu tempo e não recebem comissão pelo que se segue."),
        h("Se está a comprar ou arrendar em Portugal"),
        p("A maioria das compras de imóveis acontece no verão — quando a humidade é baixa e o bolor não é visível. Uma inspeção independente antes de assinar o CPCV é a única forma de saber o que está realmente a comprar."),
        p(`Artigo completo: ${link("Portugal Tem o Segundo Pior Problema de Bolor da Europa →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "O que as pessoas encontram quando realmente investigam",
    previewText: "As coisas que já lá estavam antes de a mancha aparecer.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "As coisas que já lá estavam antes de a mancha aparecer.",
      body: [
        p("A maioria dos problemas de bolor tem um período — frequentemente meses — em que são detetáveis por instrumento mas não visíveis a olho nu."),
        p("Uma leitura de 22% de humidade numa parede que parece completamente seca é um problema. Uma humidade relativa de 78% registada consistentemente às 7h num quarto sem condensação visível é um problema. Nenhum destes aparece numa inspeção visual."),
        h("O padrão que vemos repetidamente"),
        p("As pessoas contactam-nos depois de o bolor visível aparecer. A inspeção encontra:"),
        ul([
          "Uma leitura de humidade na parede que está elevada há pelo menos uma estação de inverno completa",
          "Uma ponte térmica — tipicamente um caixilho de alumínio ou uma junta de laje de varanda — que o edifício tem desde que foi construído",
          "Uma disposição de quarto que colocou um roupeiro contra a parede mais fria da casa",
          "Ventilação que foi tecnicamente instalada mas está bloqueada, avariada ou desligada",
        ]),
        p("Nenhum destes causou o bolor de repente. Criaram as condições que o tornaram inevitável."),
        h("Porque é que isto importa para o momento da inspeção"),
        p("O melhor momento para inspecionar é antes de o bolor visível aparecer — ou imediatamente após descobri-lo, antes de qualquer limpeza ou tratamento. O tratamento remove as evidências."),
        p("Uma inspeção após o tratamento ainda tem valor: os medidores de humidade leem através de tinta e reboco. Mas é mais difícil de interpretar sem a linha de base."),
        h("Se algo disto lhe soa familiar"),
        p("Se usou o checklist, registou leituras de humidade acima de 65%, ou encontrou bolor visível em qualquer parte da sua casa, uma inspeção independente é o próximo passo lógico."),
        p("Não porque queremos vender-lhe uma inspeção. Porque é a forma mais eficiente de perceber o que tem — antes de gastar dinheiro num tratamento que pode ou não resolver a causa real."),
        p("— MoldCheck.pt"),
      ].join(""),
      ctaLabel: "Ver os nossos serviços de inspeção →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Uma proposta, sem pressão, e depois paramos",
    previewText: "Uma inspeção independente. Cobrada à hora. Sem mais nada.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Uma inspeção independente. Cobrada à hora. Sem mais nada.",
      body: [
        p("Este é o último email desta sequência. Depois deste, só terá notícias nossas quando publicarmos algo novo — o que acontece algumas vezes por mês no máximo."),
        h("Como é uma inspeção independente"),
        p("Um inspetor InspectOS chega com três instrumentos:"),
        ul([
          "Um higrómetro digital de precisão",
          "Um medidor de humidade de materiais não invasivo (lê através das paredes sem perfurar)",
          "Uma câmara termográfica (mostra zonas de condensação ocultas invisíveis a olho nu)",
        ]),
        p("Passam 60–90 minutos na propriedade. Escrevem um relatório, normalmente em 48 horas. O relatório descreve o que encontraram, de onde vem a humidade e o que a resolveria."),
        p("Não recebem comissão de nenhum empreiteiro, empresa de ventilação ou fornecedor de produtos. Os honorários são a inspeção. É o fim da relação comercial."),
        h("O que custa"),
        ul([
          "Inspeção standard: a partir de €250",
          "Inspeção pré-compra (antes do CPCV): a partir de €350",
          "Emergência pós-inundação (resposta 24–48h): a partir de €300",
          "Verificação pós-remediação: a partir de €200",
        ]),
        p("Depósitos via Stripe. Restante no dia da inspeção."),
        h("Se ainda não está pronto"),
        p("Está completamente bem. O checklist, os artigos e tudo no MoldCheck.pt são gratuitos e sempre serão. Não vamos a lado nenhum."),
        p("Se quiser marcar, ou quiser fazer uma pergunta antes de decidir, a forma mais rápida é:"),
        p("— A equipa MoldCheck.pt / InspectOS"),
      ].join(""),
      ctaLabel: "Marcar via InspectOS →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Cancelar subscrição", privacyLabel: "Política de Privacidade",
      footerLine: "MoldCheck.pt é uma iniciativa do FAIRBANK Group. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação.",
    }),
  },
];

// ── FR sequence ───────────────────────────────────────────────────────────────

const FR: NurtureSequence = [
  {
    subject: "Votre checklist moisissures + une chose à faire aujourd'hui",
    previewText: "30 minutes, une lampe de poche et un hygromètre.",
    html: ({ checklistUrl, unsubscribeUrl, privacyUrl: pUrl }) => tpl({
      previewText: "30 minutes, une lampe de poche et un hygromètre.",
      body: [
        p("Voici votre checklist :"),
        `<table cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#2a7a75;border-radius:5px;"><a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Télécharger la checklist (PDF)</a></td></tr></table>`,
        p("Elle fonctionne mieux avec un hygromètre — un mesureur d'humidité. Si vous n'en avez pas encore, ils coûtent entre 15 et 40 € dans n'importe quelle quincaillerie. Une seule lecture par un matin froid vous en dira plus sur votre logement que n'importe quelle inspection visuelle."),
        h("Une chose à faire aujourd'hui"),
        p("Placez l'hygromètre dans votre chambre. Laissez-le là pendant cinq jours et notez les lectures minimale et maximale. Ce que vous cherchez : tout ce qui dépasse régulièrement 65 % d'humidité relative en hiver est un signal."),
        p("Ce seul chiffre vous dira si vous devez approfondir l'investigation — ou si vous pouvez arrêter de vous inquiéter."),
        h("Ce qu'est MoldCheck.pt"),
        p("Nous sommes une initiative du FAIRBANK Group. FAIRBANK opère également InspectOS, la plateforme d'inspection immobilière indépendante au Portugal."),
        p("Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation. Cette newsletter n'essaiera jamais de vous vendre un produit dont vous n'avez pas besoin."),
        p("Ce que nous ferons : vous envoyer des informations précises et référencées sur les moisissures et l'humidité dans les bâtiments portugais — en langage clair, à un rythme utile."),
        p("Vous pouvez vous désabonner à tout moment."),
        p("— L'équipe MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt · FAIRBANK Group",
    }),
  },
  {
    subject: "Ce que vous ne devez PAS faire si vous trouvez des moisissures",
    previewText: "Ça fait disparaître la tache. Les moisissures restent.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Ça fait disparaître la tache. Les moisissures restent.",
      body: [
        p("Si vous avez déjà trouvé des moisissures et attrapé l'eau de Javel, vous êtes en excellente compagnie."),
        p("Vous perdez aussi — presque certainement — votre temps."),
        h("Pourquoi l'eau de Javel ne fonctionne pas sur les moisissures"),
        p("L'eau de Javel (hypochlorite de sodium) tue les champignons sur les surfaces non poreuses comme le carrelage ou le verre. Sur les surfaces poreuses — plâtre, placo, joints, vieux silicone — le composant aqueux de la solution s'infiltre. Le chlore actif reste en surface."),
        p("Résultat : la tache visible disparaît. La structure racinaire du champignon, qui a pénétré le matériau, reste vivante."),
        p("En quatre à huit semaines — parfois moins — la colonie est de retour. Parfois plus grande qu'avant, car vous avez ajouté de l'eau (un nutriment) et supprimé la compétition de surface."),
        h("Ce que dit la norme IICRC S520"),
        p("L'IICRC S520 (édition 2024) — la norme professionnelle internationale pour la remédiation des moisissures — ne recommande pas explicitement l'eau de Javel comme biocide primaire dans le traitement des moisissures dans les bâtiments."),
        h("Ce qui fonctionne vraiment"),
        p("La réponse courte : supprimez d'abord la source d'humidité. Les moisissures sont un symptôme. L'humidité chronique est la cause. Corrigez la cause, et les moisissures ne peuvent pas revenir."),
        p(`Nous avons écrit l'explication complète ici : ${link("Pourquoi la Javel ne Résout pas les Moisissures →", aUrl ?? "#")}`),
        h("La règle pratique"),
        p("Si les moisissures reviennent dans les six semaines suivant le nettoyage, vous n'avez pas traité la source. La source est presque toujours un problème d'humidité."),
        p("Prochain email : comment savoir si la qualité de l'air de votre logement affecte votre santé."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Votre logement vous rend-il malade ? (La question que la plupart des médecins ne posent pas)",
    previewText: "Des symptômes qui s'améliorent quand vous quittez la maison.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Des symptômes qui s'améliorent quand vous quittez la maison.",
      body: [
        p("Il y a une question qui est rarement posée lors d'une consultation médicale : où habitez-vous ?"),
        p("Pas « que mangez-vous » ou « combien faites-vous d'exercice ». Où dormez-vous, et quelle est la qualité de l'air de cet espace ?"),
        h("Le signal que la plupart des gens manquent"),
        p("Les symptômes d'une exposition chronique aux moisissures intérieures sont souvent progressifs et vagues. Ils comprennent :"),
        ul(["Toux sèche persistante, pire la nuit ou le matin", "Congestion nasale sans schéma saisonnier évident", "Fatigue qui ne s'améliore pas avec le repos", "Maux de tête fréquents au réveil", "Yeux qui démangent ou larmoient à l'intérieur"]),
        p("Ce sont aussi les symptômes d'une douzaine d'autres affections. Le facteur différenciateur : vos symptômes s'améliorent-ils quand vous passez du temps loin de chez vous ?"),
        p("S'ils s'améliorent systématiquement en vacances, au travail, ou n'importe où hors de chez vous — et reviennent quand vous rentrez — votre environnement mérite d'être investigué avant tout le reste."),
        h("Ce que l'OMS a établi"),
        p("Les Lignes directrices de l'OMS de 2009 pour la qualité de l'air intérieur : humidité et moisissures ont établi un lien causal entre l'exposition résidentielle à l'humidité/moisissures et l'asthme, la rhinite allergique, la toux chronique et les sifflements."),
        h("Qui est le plus à risque"),
        p("Les enfants de moins de cinq ans. Les personnes asthmatiques. Les personnes âgées. Toute personne sous médication immunosuppressive."),
        p(`L'article complet : ${link("Votre Logement Affecte-t-il Votre Santé ? →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Pourquoi le Portugal a le deuxième pire problème de moisissures d'Europe",
    previewText: "Un foyer sur quatre. Presque personne n'en parle.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Un foyer sur quatre. Presque personne n'en parle.",
      body: [
        p("24 à 26 % des ménages portugais signalent des problèmes d'humidité ou de moisissures. Ce sont les données EU-SILC d'Eurostat — publiques, incontestées, rarement discutées."),
        p("Seul Chypre fait pire dans l'Union européenne. La moyenne européenne est d'environ 13–15 %. Le Portugal a presque le double."),
        h("Pourquoi cela se produit"),
        p("Ce n'est pas de la négligence. C'est de la physique et de l'histoire."),
        p("82 % des bâtiments résidentiels portugais ont été construits avant 2000 — avant toute exigence significative d'isolation ou d'efficacité énergétique. Ces bâtiments ont de graves ponts thermiques : cadres de fenêtres en aluminium sans rupture thermique, murs extérieurs minces, dalles de toiture non isolées."),
        p("Quand l'air intérieur humide rencontre ces surfaces froides en hiver, la condensation se forme. L'humidité relative annuelle moyenne de Porto est de 77 %. Lisbonne atteint 84 % lors des semaines les plus froides et humides."),
        h("Le déficit de diagnostic"),
        p("En France, il existe un diagnostiqueur immobilier certifié et indépendant. En Allemagne, un Sachverständiger für Schimmelpilze. Au Royaume-Uni, des experts en humidité accrédités."),
        p("Au Portugal, aucun équivalent n'existe pour le diagnostic résidentiel des moisissures. Les entreprises qui évaluent les moisissures sont les mêmes qui vendent le traitement."),
        p("MoldCheck.pt et InspectOS existent pour commencer à combler ce manque."),
        p(`Article complet : ${link("Le Portugal a le Deuxième Plus Grave Problème de Moisissures en Europe →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Ce que les gens trouvent quand ils regardent vraiment",
    previewText: "Les choses qui étaient là avant que la tache apparaisse.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Les choses qui étaient là avant que la tache apparaisse.",
      body: [
        p("La plupart des problèmes de moisissures ont une période — souvent des mois — où ils sont détectables par instrument mais pas visibles à l'œil nu."),
        p("Une lecture d'humidimètre de 22 % sur un mur qui semble complètement sec est un problème. Une humidité relative de 78 % enregistrée régulièrement à 7h dans une chambre sans condensation visible est un problème."),
        h("Le schéma que nous observons régulièrement"),
        p("Les gens nous contactent après l'apparition des moisissures visibles. L'inspection trouve :"),
        ul([
          "Une lecture d'humidité dans le mur élevée depuis au moins une saison hivernale complète",
          "Un pont thermique — typiquement un cadre de fenêtre en aluminium ou une jonction de dalle de balcon",
          "Une disposition de pièce qui a placé une armoire contre le mur le plus froid",
          "Une ventilation techniquement installée mais bloquée, cassée ou éteinte",
        ]),
        p("Aucun de ces éléments n'a causé les moisissures soudainement. Ils ont créé les conditions qui les ont rendues inévitables."),
        h("Si tout cela vous semble familier"),
        p("Si vous avez utilisé la checklist, enregistré des lectures d'humidité supérieures à 65 %, ou trouvé des moisissures visibles dans votre logement, une inspection indépendante est la prochaine étape logique."),
        p("— MoldCheck.pt"),
      ].join(""),
      ctaLabel: "Voir nos services d'inspection →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Une proposition, sans pression, puis nous nous arrêtons",
    previewText: "Une inspection indépendante. Facturée à l'heure. Rien d'autre.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Une inspection indépendante. Facturée à l'heure. Rien d'autre.",
      body: [
        p("C'est le dernier email de cette séquence. Après celui-ci, vous n'aurez de nos nouvelles que lorsque nous publierons quelque chose de nouveau — ce qui arrive quelques fois par mois au maximum."),
        h("À quoi ressemble vraiment une inspection indépendante"),
        p("Un inspecteur InspectOS arrive avec trois instruments :"),
        ul([
          "Un hygromètre numérique de précision",
          "Un humidimètre de matériaux non invasif (lit à travers les murs sans percer)",
          "Une caméra thermique (montre les zones de condensation cachées invisibles à l'œil nu)",
        ]),
        p("Ils passent 60 à 90 minutes dans la propriété. Ils rédigent un rapport, généralement dans les 48 heures. Le rapport décrit ce qu'ils ont trouvé, d'où vient l'humidité et ce qui y remédierait."),
        p("Ils ne reçoivent aucune commission d'aucun entrepreneur, entreprise de ventilation ou fournisseur de produits. Leurs honoraires, c'est l'inspection. C'est la fin de la relation commerciale."),
        h("Ce que ça coûte"),
        ul([
          "Inspection standard : à partir de 250 €",
          "Inspection pré-achat : à partir de 350 €",
          "Urgence post-inondation (réponse 24–48h) : à partir de 300 €",
          "Vérification post-remédiation : à partir de 200 €",
        ]),
        p("Acomptes via Stripe. Solde le jour de l'inspection."),
        h("Si vous n'êtes pas encore prêt"),
        p("C'est tout à fait normal. La checklist, les articles et tout sur MoldCheck.pt sont gratuits et le resteront toujours."),
        p("— L'équipe MoldCheck.pt / InspectOS"),
      ].join(""),
      ctaLabel: "Réserver via InspectOS →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Se désabonner", privacyLabel: "Politique de confidentialité",
      footerLine: "MoldCheck.pt est une initiative du FAIRBANK Group. Nous ne vendons pas de traitements contre l'humidité. Nous ne percevons pas de commissions des entreprises de remédiation.",
    }),
  },
];

// ── DE sequence ───────────────────────────────────────────────────────────────

const DE: NurtureSequence = [
  {
    subject: "Ihre Schimmel-Checkliste + eine Sache für heute",
    previewText: "30 Minuten, eine Taschenlampe und ein Hygrometer.",
    html: ({ checklistUrl, unsubscribeUrl, privacyUrl: pUrl }) => tpl({
      previewText: "30 Minuten, eine Taschenlampe und ein Hygrometer.",
      body: [
        p("Hier ist Ihre Checkliste:"),
        `<table cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#2a7a75;border-radius:5px;"><a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Checkliste herunterladen (PDF)</a></td></tr></table>`,
        p("Sie funktioniert am besten mit einem Hygrometer — einem Feuchtigkeitsmessgerät. Falls Sie noch keines haben: sie kosten 15–40 € in jedem Baumarkt. Eine einzige Messung an einem kalten Morgen sagt Ihnen mehr über Ihr Zuhause als jede visuelle Inspektion."),
        h("Eine Sache für heute"),
        p("Stellen Sie das Hygrometer in Ihr Schlafzimmer. Lassen Sie es fünf Tage dort und notieren Sie die Minimal- und Maximalwerte. Was Sie suchen: alles, was im Winter konstant über 65 % relativer Luftfeuchtigkeit liegt, ist ein Signal."),
        p("Diese eine Zahl sagt Ihnen, ob Sie weiter untersuchen müssen — oder ob Sie aufhören können, sich Sorgen zu machen."),
        h("Was MoldCheck.pt ist"),
        p("Wir sind eine Initiative der FAIRBANK Group. FAIRBANK betreibt auch InspectOS, Portugals unabhängige Immobilieninspektionsplattform."),
        p("Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Dieser Newsletter wird niemals versuchen, Ihnen ein Produkt zu verkaufen, das Sie nicht brauchen."),
        p("Was wir tun werden: Ihnen genaue, quellenbasierte Informationen über Schimmel und Feuchtigkeit in portugiesischen Gebäuden senden — in klarer Sprache, in einem nützlichen Tempo."),
        p("Sie können sich jederzeit abmelden."),
        p("— Das MoldCheck.pt-Team"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt · FAIRBANK Group",
    }),
  },
  {
    subject: "Was Sie NICHT tun sollten, wenn Sie Schimmel finden",
    previewText: "Der Fleck verschwindet. Der Schimmel bleibt.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Der Fleck verschwindet. Der Schimmel bleibt.",
      body: [
        p("Wenn Sie jemals Schimmel gefunden und zum Bleichmittel gegriffen haben, sind Sie in bester Gesellschaft."),
        p("Sie verschwenden damit — fast sicher — Ihre Zeit."),
        h("Warum Bleichmittel bei Schimmel nicht funktioniert"),
        p("Bleichmittel (Natriumhypochlorit) tötet Pilze auf nicht porösen Oberflächen wie Fliesen oder Glas. Auf porösen Oberflächen — Putz, Gipskarton, Fugen, altes Silikon — dringt der Wasseranteil der Lösung ein. Das aktive Chlor bleibt an der Oberfläche."),
        p("Ergebnis: Der sichtbare Fleck verschwindet. Die Pilzwurzelstruktur, die in das Material eingedrungen ist, bleibt lebendig."),
        p("In vier bis acht Wochen — manchmal früher — ist die Kolonie zurück. Manchmal größer als zuvor."),
        h("Was die IICRC S520-Norm sagt"),
        p("Die IICRC S520 (Ausgabe 2024) — die internationale Berufsnorm für Schimmelbeseitigung — empfiehlt Bleichmittel ausdrücklich nicht als primäres Biozid bei der Schimmelbehandlung in Gebäuden."),
        h("Was wirklich funktioniert"),
        p("Die kurze Antwort: Entfernen Sie zuerst die Feuchtigkeitsquelle. Schimmel ist ein Symptom. Chronische Feuchtigkeit ist die Ursache."),
        p(`Die vollständige Erklärung haben wir hier geschrieben: ${link("Warum Bleichmittel Schimmel nicht Beseitigt →", aUrl ?? "#")}`),
        p("Nächste E-Mail: Wie Sie wissen, ob die Luftqualität Ihrer Wohnung Ihre Gesundheit beeinträchtigt."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Macht Ihre Wohnung Sie krank? (Die Frage, die die meisten Ärzte nicht stellen)",
    previewText: "Symptome, die sich verbessern, wenn Sie das Haus verlassen.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Symptome, die sich verbessern, wenn Sie das Haus verlassen.",
      body: [
        p("Es gibt eine Frage, die in einer Arztpraxis selten gestellt wird: Wo wohnen Sie?"),
        p("Nicht \"was essen Sie\" oder \"wie viel Sport treiben Sie\". Wo schlafen Sie, und wie ist die Luftqualität in diesem Raum?"),
        h("Das Signal, das die meisten Menschen übersehen"),
        p("Symptome einer chronischen Schimmelexposition in Innenräumen sind oft schleichend und vage. Sie umfassen:"),
        ul(["Anhaltender trockener Husten, schlimmer nachts oder morgens", "Nasenverstopfung ohne offensichtliches saisonales Muster", "Erschöpfung, die sich mit Ruhe nicht bessert", "Häufige Kopfschmerzen beim Aufwachen", "Augen, die in Innenräumen jucken oder tränen"]),
        p("Das sind auch die Symptome von einem Dutzend anderer Erkrankungen. Der Unterschied: Verbessern sich Ihre Symptome, wenn Sie Zeit außerhalb Ihrer Wohnung verbringen?"),
        p("Wenn sie sich im Urlaub, bei der Arbeit oder irgendwo außerhalb systematisch bessern — und zurückkehren, wenn Sie nach Hause kommen — ist Ihre Umgebung es wert, untersucht zu werden."),
        h("Was die WHO festgestellt hat"),
        p("Die WHO-Leitlinien 2009 für die Innenraumluftqualität: Feuchtigkeit und Schimmel haben einen kausalen Zusammenhang zwischen Wohnraumfeuchtigkeit/-schimmel und Asthma, allergischer Rhinitis, chronischem Husten und Keuchen hergestellt."),
        h("Wer am stärksten gefährdet ist"),
        p("Kinder unter fünf Jahren. Menschen mit bestehendem Asthma. Ältere Erwachsene. Jeder mit immunsuppressiver Medikation."),
        p(`Der vollständige Artikel: ${link("Macht Ihre Wohnung Sie Krank? →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Warum Portugal das zweitschlimmste Schimmelproblem Europas hat",
    previewText: "Jeder vierte Haushalt. Fast niemand spricht darüber.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Jeder vierte Haushalt. Fast niemand spricht darüber.",
      body: [
        p("24 bis 26 Prozent der portugiesischen Haushalte berichten von Feuchtigkeits- oder Schimmelproblemen. Das sind Eurostat EU-SILC-Daten — öffentlich, unbestritten, selten diskutiert."),
        p("Nur Zypern ist in der Europäischen Union schlechter. Der EU-Durchschnitt liegt bei etwa 13–15 %. Portugal hat fast das Doppelte."),
        h("Warum das passiert"),
        p("Es ist keine Nachlässigkeit. Es ist Physik und Geschichte."),
        p("82 % der portugiesischen Wohngebäude wurden vor 2000 gebaut — vor jeglichen bedeutsamen Anforderungen an Isolierung oder Energieeffizienz. Diese Gebäude haben schwere Wärmebrücken: Aluminiumfensterrahmen ohne Wärmedämmung, dünne Außenwände, nicht isolierte Dachplatten."),
        p("Wenn feuchte Innenluft im Winter auf diese kalten Oberflächen trifft, bildet sich Kondensation. Die durchschnittliche jährliche relative Luftfeuchtigkeit in Porto beträgt 77 %. Lissabon erreicht 84 % in den kältesten, feuchtesten Wochen."),
        h("Die Diagnoselücke"),
        p("In Frankreich gibt es einen zertifizierten unabhängigen Diagnostiqueur immobilier. In Deutschland einen Sachverständigen für Schimmelpilze. Im Vereinigten Königreich akkreditierte Feuchtigkeitsgutachter."),
        p("In Portugal gibt es kein Äquivalent für die Wohnraumdiagnose von Schimmel. MoldCheck.pt und InspectOS existieren, um diese Lücke zu schließen."),
        p(`Vollständiger Artikel: ${link("Portugal Hat das Zweitschlimmste Schimmelproblem Europas →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Was Menschen finden, wenn sie wirklich nachschauen",
    previewText: "Die Dinge, die schon da waren, bevor der Fleck erschien.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Die Dinge, die schon da waren, bevor der Fleck erschien.",
      body: [
        p("Die meisten Schimmelprobleme haben eine Phase — oft Monate — in der sie mit Instrumenten erkennbar, aber für das Auge nicht sichtbar sind."),
        p("Eine Feuchtigkeitsmessung von 22 % an einer Wand, die völlig trocken aussieht, ist ein Problem. Eine relative Luftfeuchtigkeit von 78 %, die morgens um 7 Uhr in einem Schlafzimmer ohne sichtbare Kondensation konstant gemessen wird, ist ein Problem."),
        h("Das Muster, das wir immer wieder sehen"),
        p("Menschen kontaktieren uns, nachdem der sichtbare Schimmel erscheint. Die Inspektion findet:"),
        ul([
          "Eine Feuchtigkeitsmessung in der Wand, die seit mindestens einer vollen Wintersaison erhöht ist",
          "Eine Wärmebrücke — typischerweise ein Aluminiumfensterrahmen oder eine Balkonplattenverbindung",
          "Eine Zimmeranordnung, die einen Schrank gegen die kälteste Wand gestellt hat",
          "Eine Lüftung, die technisch installiert wurde, aber blockiert, defekt oder ausgeschaltet ist",
        ]),
        p("Keines davon hat den Schimmel plötzlich verursacht. Sie haben die Bedingungen geschaffen, die ihn unvermeidlich machten."),
        h("Wenn Ihnen das bekannt vorkommt"),
        p("Wenn Sie die Checkliste verwendet, Feuchtigkeitswerte über 65 % gemessen oder sichtbaren Schimmel in Ihrer Wohnung gefunden haben, ist eine unabhängige Inspektion der nächste logische Schritt."),
        p("— MoldCheck.pt"),
      ].join(""),
      ctaLabel: "Unsere Inspektionsleistungen ansehen →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Ein Angebot, kein Druck, dann hören wir auf",
    previewText: "Eine unabhängige Inspektion. Stundenweise abgerechnet. Nichts danach.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Eine unabhängige Inspektion. Stundenweise abgerechnet. Nichts danach.",
      body: [
        p("Dies ist die letzte E-Mail in dieser Sequenz. Danach hören Sie nur noch von uns, wenn wir etwas Neues veröffentlichen — was höchstens ein paar Mal im Monat vorkommt."),
        h("Wie eine unabhängige Inspektion wirklich aussieht"),
        p("Ein InspectOS-Inspektor kommt mit drei Instrumenten:"),
        ul([
          "Ein präzises digitales Hygrometer",
          "Ein nicht-invasives Materialfeuchtigkeitsmessgerät (liest durch Wände ohne Bohren)",
          "Eine Wärmebildkamera (zeigt versteckte Kondensationszonen, die für das Auge unsichtbar sind)",
        ]),
        p("Sie verbringen 60–90 Minuten in der Immobilie. Sie schreiben einen Bericht, normalerweise innerhalb von 48 Stunden. Der Bericht beschreibt, was sie gefunden haben, woher die Feuchtigkeit kommt und was dagegen helfen würde."),
        p("Sie erhalten keine Provision von Auftragnehmern, Lüftungsunternehmen oder Produktlieferanten. Ihr Honorar ist die Inspektion. Das ist das Ende der Geschäftsbeziehung."),
        h("Was es kostet"),
        ul([
          "Standardinspektion: ab 250 €",
          "Vorkaufsinspektion: ab 350 €",
          "Notfall nach Überschwemmung (24–48h Reaktion): ab 300 €",
          "Verifizierung nach Sanierung: ab 200 €",
        ]),
        p("Anzahlungen über Stripe. Rest am Tag der Inspektion."),
        h("Wenn Sie noch nicht bereit sind"),
        p("Das ist völlig in Ordnung. Die Checkliste, die Artikel und alles auf MoldCheck.pt sind kostenlos und werden es immer sein."),
        p("— Das MoldCheck.pt-Team / InspectOS"),
      ].join(""),
      ctaLabel: "Über InspectOS buchen →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Abmelden", privacyLabel: "Datenschutzrichtlinie",
      footerLine: "MoldCheck.pt ist eine Initiative der FAIRBANK Group. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen.",
    }),
  },
];

// ── NL sequence ───────────────────────────────────────────────────────────────

const NL: NurtureSequence = [
  {
    subject: "Uw schimmelchecklist + één ding om vandaag te doen",
    previewText: "30 minuten, een zaklamp en een hygrometer.",
    html: ({ checklistUrl, unsubscribeUrl, privacyUrl: pUrl }) => tpl({
      previewText: "30 minuten, een zaklamp en een hygrometer.",
      body: [
        p("Hier is uw checklist:"),
        `<table cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#2a7a75;border-radius:5px;"><a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Checklist downloaden (PDF)</a></td></tr></table>`,
        p("Het werkt het beste met een hygrometer — een vochtmeter. Als u er nog geen heeft: ze kosten €15–40 bij elke bouwmarkt. Één meting op een koude ochtend vertelt u meer over uw woning dan welke visuele inspectie dan ook."),
        h("Één ding om vandaag te doen"),
        p("Plaats de hygrometer in uw slaapkamer. Laat hem daar vijf dagen staan en noteer de minimum- en maximumwaarden. Wat u zoekt: alles wat in de winter consistent boven de 65% relatieve luchtvochtigheid ligt, is een signaal."),
        p("Dat ene getal vertelt u of u verder moet onderzoeken — of dat u kunt stoppen met zorgen maken."),
        h("Wat MoldCheck.pt is"),
        p("Wij zijn een initiatief van de FAIRBANK Group. FAIRBANK beheert ook InspectOS, het onafhankelijke vastgoedinspectieplatform van Portugal."),
        p("Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsbedrijven. Deze nieuwsbrief zal nooit proberen u een product te verkopen dat u niet nodig heeft."),
        p("Wat wij zullen doen: u nauwkeurige, bronvermeldende informatie sturen over schimmel en vocht in Portugese gebouwen — in duidelijke taal, op een nuttig tempo."),
        p("U kunt zich op elk moment afmelden."),
        p("— Het MoldCheck.pt-team"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt · FAIRBANK Group",
    }),
  },
  {
    subject: "Wat u NIET moet doen als u schimmel vindt",
    previewText: "De vlek verdwijnt. De schimmel blijft.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "De vlek verdwijnt. De schimmel blijft.",
      body: [
        p("Als u ooit schimmel heeft gevonden en naar het bleekwater heeft gegrepen, bent u in uitstekend gezelschap."),
        p("U verspilt ook — bijna zeker — uw tijd."),
        h("Waarom bleekwater niet werkt bij schimmel"),
        p("Bleekwater (natriumhypochloriet) doodt schimmels op niet-poreuze oppervlakken zoals tegels of glas. Op poreuze oppervlakken — pleisterwerk, gipsplaat, voegen, oud siliconen — dringt het watergedeelte van de oplossing door. Het actieve chloor blijft aan de oppervlakte."),
        p("Resultaat: de zichtbare vlek verdwijnt. De schimmelwortelstructuur, die in het materiaal is doorgedrongen, blijft levend."),
        p("Binnen vier tot acht weken — soms eerder — is de kolonie terug. Soms groter dan voorheen."),
        h("Wat de IICRC S520-norm zegt"),
        p("De IICRC S520 (editie 2024) — de internationale professionele norm voor schimmelverwijdering — beveelt bleekwater uitdrukkelijk niet aan als primair biocide bij de behandeling van schimmel in gebouwen."),
        h("Wat echt werkt"),
        p("Het korte antwoord: verwijder eerst de vochtbron. Schimmel is een symptoom. Chronisch vocht is de oorzaak."),
        p(`De volledige uitleg hebben we hier geschreven: ${link("Waarom Bleekwater Schimmel niet Oplost →", aUrl ?? "#")}`),
        p("Volgende e-mail: hoe u weet of de luchtkwaliteit van uw woning uw gezondheid beïnvloedt."),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Maakt uw woning u ziek? (De vraag die de meeste artsen niet stellen)",
    previewText: "Klachten die verbeteren als u het huis verlaat.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Klachten die verbeteren als u het huis verlaat.",
      body: [
        p("Er is een vraag die zelden wordt gesteld in een medisch consult: waar woont u?"),
        p("Niet \"wat eet u\" of \"hoeveel sport u\". Waar slaapt u, en wat is de luchtkwaliteit van die ruimte?"),
        h("Het signaal dat de meeste mensen missen"),
        p("Klachten door chronische blootstelling aan schimmel binnenshuis zijn vaak geleidelijk en vaag. Ze omvatten:"),
        ul(["Aanhoudende droge hoest, erger 's nachts of 's ochtends", "Neusverstopping zonder duidelijk seizoenspatroon", "Vermoeidheid die niet verbetert met rust", "Frequente hoofdpijn bij het wakker worden", "Ogen die jeuken of tranen binnenshuis"]),
        p("Dit zijn ook de klachten van een dozijn andere aandoeningen. Het onderscheidende kenmerk: verbeteren uw klachten als u tijd buiten uw woning doorbrengt?"),
        p("Als ze systematisch verbeteren op vakantie, op het werk, of ergens buiten uw woning — en terugkomen als u thuiskomt — is uw omgeving het onderzoeken waard."),
        h("Wat de WHO heeft vastgesteld"),
        p("De WHO-richtlijnen 2009 voor binnenluchtkwaliteit: vocht en schimmel hebben een causaal verband vastgesteld tussen residentiële blootstelling aan vocht/schimmel en astma, allergische rhinitis, chronische hoest en piepen."),
        h("Wie het meeste risico loopt"),
        p("Kinderen onder de vijf jaar. Mensen met bestaand astma. Oudere volwassenen. Iedereen met immunosuppressieve medicatie."),
        p(`Het volledige artikel: ${link("Heeft uw woning invloed op uw gezondheid? →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Waarom Portugal het op één na ergste schimmelprobleem van Europa heeft",
    previewText: "Één op de vier huishoudens. Bijna niemand praat erover.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, articleUrl: aUrl }) => tpl({
      previewText: "Één op de vier huishoudens. Bijna niemand praat erover.",
      body: [
        p("24 tot 26 procent van de Portugese huishoudens meldt problemen met vocht of schimmel. Dat zijn Eurostat EU-SILC-gegevens — openbaar, onbetwist, zelden besproken."),
        p("Alleen Cyprus doet het slechter in de Europese Unie. Het EU-gemiddelde ligt rond de 13–15%. Portugal heeft bijna het dubbele."),
        h("Waarom dit gebeurt"),
        p("Het is geen nalatigheid. Het is fysica en geschiedenis."),
        p("82% van de Portugese woongebouwen werd gebouwd vóór 2000 — vóór enige betekenisvolle isolatie- of energie-efficiëntievereisten. Deze gebouwen hebben ernstige koudebruggen: aluminium kozijnen zonder thermische onderbreking, dunne buitenmuren, niet-geïsoleerde dakplaten."),
        p("Wanneer vochtige binnenlucht in de winter deze koude oppervlakken ontmoet, vormt zich condensatie. De gemiddelde jaarlijkse relatieve luchtvochtigheid in Porto is 77%. Lissabon bereikt 84% in de koudste, natste weken."),
        h("De diagnostische kloof"),
        p("In Frankrijk is er een gecertificeerde onafhankelijke diagnostiqueur immobilier. In Duitsland een Sachverständiger für Schimmelpilze. In het VK geaccrediteerde vochtexperts."),
        p("In Portugal bestaat geen equivalent voor residentiële schimmeldiagnostiek. MoldCheck.pt en InspectOS bestaan om deze kloof te beginnen dichten."),
        p(`Volledig artikel: ${link("Portugal Heeft het Op Één Na Ergste Schimmelprobleem van Europa →", aUrl ?? "#")}`),
        p("— MoldCheck.pt"),
      ].join(""),
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Wat mensen vinden als ze echt kijken",
    previewText: "De dingen die er al waren voordat de vlek verscheen.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "De dingen die er al waren voordat de vlek verscheen.",
      body: [
        p("De meeste schimmelproblemen hebben een periode — vaak maanden — waarin ze detecteerbaar zijn met instrumenten maar niet zichtbaar voor het oog."),
        p("Een vochtmeterwaarde van 22% op een muur die er volkomen droog uitziet, is een probleem. Een relatieve luchtvochtigheid van 78% die consistent om 7 uur 's ochtends in een slaapkamer zonder zichtbare condensatie wordt gemeten, is een probleem."),
        h("Het patroon dat we herhaaldelijk zien"),
        p("Mensen nemen contact met ons op nadat de zichtbare schimmel verschijnt. De inspectie vindt:"),
        ul([
          "Een vochtmeting in de muur die al minstens één volledig winterseizoen verhoogd is",
          "Een koudebrug — typisch een aluminium kozijn of een balkonplaatvoeging",
          "Een kameropstelling waarbij een kast tegen de koudste muur is geplaatst",
          "Ventilatie die technisch is geïnstalleerd maar geblokkeerd, kapot of uitgeschakeld is",
        ]),
        p("Geen van deze heeft de schimmel plotseling veroorzaakt. Ze creëerden de omstandigheden die het onvermijdelijk maakten."),
        h("Als dit u bekend klinkt"),
        p("Als u de checklist heeft gebruikt, vochtwaarden boven 65% heeft gemeten, of zichtbare schimmel ergens in uw woning heeft gevonden, is een onafhankelijke inspectie de volgende logische stap."),
        p("— MoldCheck.pt"),
      ].join(""),
      ctaLabel: "Onze inspectiediensten bekijken →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt",
    }),
  },
  {
    subject: "Één aanbod, geen druk, dan stoppen we",
    previewText: "Een onafhankelijke inspectie. Per uur gefactureerd. Niets daarna.",
    html: ({ unsubscribeUrl, privacyUrl: pUrl, servicesUrl: sUrl }) => tpl({
      previewText: "Een onafhankelijke inspectie. Per uur gefactureerd. Niets daarna.",
      body: [
        p("Dit is de laatste e-mail in deze reeks. Daarna hoort u alleen nog van ons als we iets nieuws publiceren — wat hooguit een paar keer per maand is."),
        h("Hoe een onafhankelijke inspectie er echt uitziet"),
        p("Een InspectOS-inspecteur arriveert met drie instrumenten:"),
        ul([
          "Een nauwkeurige digitale hygrometer",
          "Een niet-invasieve materiaalsvochtmeter (leest door muren zonder boren)",
          "Een warmtebeeldcamera (toont verborgen condensatiezones die onzichtbaar zijn voor het oog)",
        ]),
        p("Ze brengen 60–90 minuten door in het pand. Ze schrijven een rapport, meestal binnen 48 uur. Het rapport beschrijft wat ze hebben gevonden, waar het vocht vandaan komt en wat het zou aanpakken."),
        p("Ze ontvangen geen commissie van aannemers, ventilatiebedrijen of productleveranciers. Hun vergoeding is de inspectie. Dat is het einde van de commerciële relatie."),
        h("Wat het kost"),
        ul([
          "Standaardinspectie: vanaf €250",
          "Pre-aankoopinspectie: vanaf €350",
          "Noodgeval na overstroming (24–48u reactie): vanaf €300",
          "Verificatie na sanering: vanaf €200",
        ]),
        p("Aanbetalingen via Stripe. Rest op de dag van de inspectie."),
        h("Als u er nog niet klaar voor bent"),
        p("Dat is volkomen begrijpelijk. De checklist, de artikelen en alles op MoldCheck.pt zijn gratis en zullen dat altijd blijven."),
        p("— Het MoldCheck.pt-team / InspectOS"),
      ].join(""),
      ctaLabel: "Boeken via InspectOS →",
      ctaHref: sUrl,
      unsubscribeUrl, privacyUrl: pUrl,
      unsubscribeLabel: "Afmelden", privacyLabel: "Privacybeleid",
      footerLine: "MoldCheck.pt is een initiatief van de FAIRBANK Group. Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsbedrijven.",
    }),
  },
];

// ── Sequence registry ─────────────────────────────────────────────────────────

// Supported nurture locales (es/it fall back to EN)
const SEQUENCES: Partial<Record<NewsletterLocale, NurtureSequence>> = {
  en: EN, pt: PT, fr: FR, de: DE, nl: NL,
};

function getSequence(locale: NewsletterLocale): NurtureSequence {
  return SEQUENCES[locale] ?? EN;
}

// ── Send a single nurture email ───────────────────────────────────────────────

function getResend() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

export interface SendNurtureResult {
  messageId: string | null;
  subject: string;
}

/**
 * Send nurture email `step` (1-indexed) to the given subscriber.
 * Returns the subject and provider message ID for logging.
 */
export async function sendNurtureEmail(opts: {
  email: string;
  locale: NewsletterLocale;
  step: number; // 1..6
  unsubscribeToken: string | null;
}): Promise<SendNurtureResult> {
  const { email, locale, step, unsubscribeToken } = opts;
  const seq = getSequence(locale);
  const emailDef = seq[step - 1];
  if (!emailDef) throw new Error(`No nurture email defined for step ${step}`);

  const siteBase = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moldcheck.pt";
  const unsubUrl = unsubscribeToken ? getUnsubscribeUrl(locale, unsubscribeToken) : `${siteBase}/${locale}/newsletter/unsubscribe`;
  const pUrl = privacyUrl(locale);

  // Build context-specific URLs
  const articleUrlForStep: Record<number, string | undefined> = {
    2: articleUrl(locale, "bleach"),
    3: articleUrl(locale, "health"),
    4: articleUrl(locale, "portugal"),
  };
  const sUrl = servicesUrl(locale);

  const html = emailDef.html({
    checklistUrl: getChecklistUrl(locale),
    unsubscribeUrl: unsubUrl,
    privacyUrl: pUrl,
    articleUrl: articleUrlForStep[step],
    servicesUrl: sUrl,
  });

  const resend = getResend();
  const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck <no-reply@moldcheck.pt>";

  const { data, error } = await resend.emails.send({
    from,
    to: email,
    subject: emailDef.subject,
    html,
    headers: unsubscribeToken
      ? { "List-Unsubscribe": `<${unsubUrl}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" }
      : undefined,
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
  return { messageId: data?.id ?? null, subject: emailDef.subject };
}

// ── Delay helpers ─────────────────────────────────────────────────────────────

/** Days to add after sending step N to schedule step N+1 */
const STEP_DELAYS: Record<number, number> = { 1: 3, 2: 5, 3: 5, 4: 7, 5: 7 };

export function nextSendDate(currentStep: number): Date | null {
  const days = STEP_DELAYS[currentStep];
  if (!days) return null; // step 6 = completed
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}
