function toId(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
}

const headings = {
  pt: [
    'O que este guia cobre',
    'Sinais de alerta que a maioria das pessoas ignora',
    'Inspecção divisão a divisão',
    'Checklist de 20 pontos',
    'Tabela: localização → causa provável',
    'Quando pedir ajuda profissional',
    'Uma nota sobre o que este guia não substitui',
  ],
  en: [
    'What this guide covers',
    'Warning signs most people ignore',
    'Room-by-room inspection',
    '20-point checklist',
    'Location-to-probable-cause table',
    'When to call a professional',
    'A note on what this guide does not replace',
  ],
  fr: [
    'Ce que ce guide couvre',
    'Signaux d\'alerte que la plupart des gens ignorent',
    'Inspection pièce par pièce',
    'Checklist de 20 points',
    'Tableau : Localisation → Cause probable',
    'Quand appeler un professionnel',
    'Ce que ce guide ne remplace pas',
  ],
  de: [
    'Was dieser Leitfaden abdeckt',
    'Warnsignale, die die meisten Menschen ignorieren',
    'Zimmer-für-Zimmer-Inspektion',
    '20-Punkte-Checkliste',
    'Standort-Ursache-Tabelle',
    'Wann ein Fachmann gerufen werden sollte',
    'Ein Hinweis darauf, was dieser Leitfaden nicht ersetzt',
  ],
  nl: [
    'Wat deze gids behandelt',
    'Waarschuwingssignalen die de meeste mensen negeren',
    'Kamer-voor-kamer inspectie',
    '20-punten checklist',
    'Locatie-naar-oorzaak tabel',
    'Wanneer een professional te bellen',
    'Een noot over wat deze gids niet vervangt',
  ],
  it: [
    'Cosa copre questa guida',
    'Segnali di allarme che la maggior parte delle persone ignora',
    'Ispezione stanza per stanza',
    'Checklist di 20 punti',
    'Tabella: posizione → causa probabile',
    'Quando chiamare un professionista',
    'Una nota su ciò che questa guida non sostituisce',
  ],
  es: [
    'Qué cubre esta guía',
    'Señales de advertencia que la mayoría de las personas ignora',
    'Inspección habitación por habitación',
    'Lista de verificación de 20 puntos',
    'Tabla: ubicación → causa probable',
    'Cuándo llamar a un profesional',
    'Una nota sobre lo que esta guía no sustituye',
  ],
};

for (const [locale, hs] of Object.entries(headings)) {
  console.log(locale + ':');
  for (const h of hs) console.log('  ' + JSON.stringify(h) + '\n    => ' + toId(h));
}
