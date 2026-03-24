import { Resend } from "resend";
import type { ContactSubmission } from "./supabase";

function getResend() {
 const key = process.env.RESEND_API_KEY;
 if (!key) throw new Error("RESEND_API_KEY not configured");
 return new Resend(key);
}

export async function sendContactEmail(data: ContactSubmission): Promise<void> {
 const resend = getResend();
 const to = process.env.CONTACT_TO_EMAIL ?? "info@moldcheck.pt";
 const from = process.env.CONTACT_FROM_EMAIL ?? "MoldCheck Contact <no-reply@moldcheck.pt>";

 const html = `
 <h2>Nueva consulta de contacto MoldCheck.pt</h2>
 <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
 <tr><td style="font-weight:600;padding-right:16px;">Nombre</td><td>${esc(data.full_name)}</td></tr>
 <tr><td style="font-weight:600;">Email</td><td>${esc(data.email)}</td></tr>
 <tr><td style="font-weight:600;">Teléfono</td><td>${esc(data.country_prefix)} ${esc(data.phone_number)}</td></tr>
 <tr><td style="font-weight:600;">Municipio</td><td>${esc(data.municipality)}</td></tr>
 <tr><td style="font-weight:600;">Página</td><td>${esc(data.source_page)}</td></tr>
 <tr><td style="font-weight:600;">Fecha</td><td>${esc(data.created_at)}</td></tr>
 </table>
 <h3 style="margin-top:24px;">Mensaje</h3>
 <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${esc(data.message)}</p>
 `;

 const { error } = await resend.emails.send({
 from,
 to,
 subject: `Nuevo contacto: ${data.full_name} MoldCheck.pt`,
 html,
 });

 if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}

function esc(s: string): string {
 return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
