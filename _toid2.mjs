function toId(t) {
  return t.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
}
// Exact strings from the article data
const hs = [
  'O que este guia cobre',
  'Sinais de alerta que a maioria das pessoas ignora',
  'Inspecção divisão a divisão',   // exact from data
  'Checklist de 20 pontos',
  'O padrão de localização diz-lhe a causa',  // new heading
  'Quando pedir ajuda profissional',
  'Uma nota sobre o que este guia não substitui',
];
hs.forEach(h => console.log(JSON.stringify(h) + '\n  => ' + toId(h)));
