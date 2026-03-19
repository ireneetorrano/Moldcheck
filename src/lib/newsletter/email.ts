import { Resend } from "resend";
import type { NewsletterLocale } from "./schema";
import { getChecklistUrl, getCalculatorUrl } from "./checklists";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

// ── Localised copy ────────────────────────────────────────────────────────────

interface EmailCopy {
  subject: string;
  greeting: string;
  intro: string;
  checklistCta: string;
  calculatorLabel: string;
  calculatorCta: string;
  closing: string;
  footer: string;
}

const COPY: Record<NewsletterLocale, EmailCopy> = {
  pt: {
    subject: "O seu checklist gratuito — MoldCheck.pt",
    greeting: "Obrigado por subscrever o MoldCheck.pt.",
    intro: "Pode descarregar o seu checklist de humidade e bolor aqui:",
    checklistCta: "Descarregar checklist (PDF)",
    calculatorLabel: "Quer avaliar o risco da sua habitação?",
    calculatorCta: "Usar a calculadora gratuita de risco de humidade →",
    closing: "Publicamos informação independente sobre bolor, humidade e qualidade do ar interior em Portugal. Pode cancelar a subscrição a qualquer momento.",
    footer: "MoldCheck.pt · Uma iniciativa do FAIRBANK Group",
  },
  en: {
    subject: "Your free checklist — MoldCheck.pt",
    greeting: "Thank you for subscribing to MoldCheck.pt.",
    intro: "You can download your mold and damp checklist here:",
    checklistCta: "Download checklist (PDF)",
    calculatorLabel: "Want to assess your home's risk?",
    calculatorCta: "Use the free humidity risk calculator →",
    closing: "We publish independent information on mold, damp and indoor air quality in Portugal. You can unsubscribe at any time.",
    footer: "MoldCheck.pt · A FAIRBANK Group initiative",
  },
  es: {
    subject: "Tu checklist gratuito — MoldCheck.pt",
    greeting: "Gracias por suscribirte a MoldCheck.pt.",
    intro: "Puedes descargar tu checklist de humedad y moho aquí:",
    checklistCta: "Descargar checklist (PDF)",
    calculatorLabel: "¿Quieres evaluar el riesgo de tu vivienda?",
    calculatorCta: "Usar la calculadora gratuita de riesgo de humedad →",
    closing: "Publicamos información independiente sobre moho, humedad y calidad del aire interior en Portugal. Puedes cancelar tu suscripción en cualquier momento.",
    footer: "MoldCheck.pt · Una iniciativa del FAIRBANK Group",
  },
  fr: {
    subject: "Votre checklist gratuite — MoldCheck.pt",
    greeting: "Merci de vous être abonné à MoldCheck.pt.",
    intro: "Vous pouvez télécharger votre checklist humidité et moisissures ici :",
    checklistCta: "Télécharger la checklist (PDF)",
    calculatorLabel: "Vous souhaitez évaluer le risque de votre logement ?",
    calculatorCta: "Utiliser le calculateur gratuit de risque d'humidité →",
    closing: "Nous publions des informations indépendantes sur les moisissures, l'humidité et la qualité de l'air intérieur au Portugal. Vous pouvez vous désabonner à tout moment.",
    footer: "MoldCheck.pt · Une initiative du FAIRBANK Group",
  },
  de: {
    subject: "Ihre kostenlose Checkliste — MoldCheck.pt",
    greeting: "Vielen Dank für Ihre Anmeldung bei MoldCheck.pt.",
    intro: "Sie können Ihre Schimmel- und Feuchtigkeits-Checkliste hier herunterladen:",
    checklistCta: "Checkliste herunterladen (PDF)",
    calculatorLabel: "Möchten Sie das Risiko Ihres Hauses einschätzen?",
    calculatorCta: "Kostenlosen Feuchtigkeitsrisikorechner nutzen →",
    closing: "Wir veröffentlichen unabhängige Informationen zu Schimmel, Feuchtigkeit und Raumluftqualität in Portugal. Sie können sich jederzeit abmelden.",
    footer: "MoldCheck.pt · Eine Initiative der FAIRBANK Group",
  },
  nl: {
    subject: "Uw gratis checklist — MoldCheck.pt",
    greeting: "Bedankt voor uw aanmelding bij MoldCheck.pt.",
    intro: "U kunt uw schimmel- en vochtchecklist hier downloaden:",
    checklistCta: "Checklist downloaden (PDF)",
    calculatorLabel: "Wilt u het risico van uw woning beoordelen?",
    calculatorCta: "Gebruik de gratis vochtrisicocalculator →",
    closing: "Wij publiceren onafhankelijke informatie over schimmel, vocht en binnenluchtkwaliteit in Portugal. U kunt zich op elk moment afmelden.",
    footer: "MoldCheck.pt · Een initiatief van de FAIRBANK Group",
  },
  it: {
    subject: "La tua checklist gratuita — MoldCheck.pt",
    greeting: "Grazie per esserti iscritto a MoldCheck.pt.",
    intro: "Puoi scaricare la tua checklist su umidità e muffa qui:",
    checklistCta: "Scarica la checklist (PDF)",
    calculatorLabel: "Vuoi valutare il rischio della tua abitazione?",
    calculatorCta: "Usa il calcolatore gratuito del rischio di umidità →",
    closing: "Pubblichiamo informazioni indipendenti su muffa, umidità e qualità dell'aria interna in Portogallo. Puoi annullare l'iscrizione in qualsiasi momento.",
    footer: "MoldCheck.pt · Un'iniziativa del FAIRBANK Group",
  },
};

// ── HTML builder ──────────────────────────────────────────────────────────────

function buildHtml(copy: EmailCopy, checklistUrl: string, calculatorUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7fafa;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7fafa;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #d8e8e7;border-radius:6px;overflow:hidden;">

        <!-- Header -->
        <tr><td style="background:#1b4d4a;padding:28px 32px;">
          <p style="margin:0;font-family:'Palatino Linotype',Palatino,Georgia,serif;font-size:22px;color:#ffffff;letter-spacing:-0.02em;">MoldCheck.pt</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#0f1c1b;">${esc(copy.greeting)}</p>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#2e3f3e;">${esc(copy.intro)}</p>

          <!-- Checklist CTA -->
          <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr><td style="background:#2a7a75;border-radius:5px;">
              <a href="${checklistUrl}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">${esc(copy.checklistCta)}</a>
            </td></tr>
          </table>

          <!-- Calculator -->
          <p style="margin:0 0 8px;font-size:14px;color:#2e3f3e;">${esc(copy.calculatorLabel)}</p>
          <p style="margin:0 0 28px;">
            <a href="${calculatorUrl}" style="font-size:14px;color:#2a7a75;font-weight:600;">${esc(copy.calculatorCta)}</a>
          </p>

          <p style="margin:0;font-size:12px;line-height:1.65;color:#6b8a89;">${esc(copy.closing)}</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f7fafa;border-top:1px solid #d8e8e7;padding:16px 32px;">
          <p style="margin:0;font-size:11px;color:#9ab5b4;">${esc(copy.footer)}</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function sendChecklistEmail(email: string, locale: NewsletterLocale): Promise<void> {
  const resend = getResend();
  const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck <no-reply@moldcheck.pt>";
  const copy = COPY[locale];
  const checklistUrl = getChecklistUrl(locale);
  const calculatorUrl = getCalculatorUrl(locale);

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: copy.subject,
    html: buildHtml(copy, checklistUrl, calculatorUrl),
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}
