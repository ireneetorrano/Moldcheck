"use client";

// ── Heading → slug (same algorithm as ArticleBody) ────────────────────────
function toId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// ── Species comparison table (IT and ES) ─────────────────────────────────

interface SpeciesRow {
  characteristic: string;
  cladosporium: string;
  alternaria: string;
  aspergillusNiger: string;
  stachybotrys: string;
}

const IT_TABLE_HEADERS = ["Caratteristica", "Cladosporium", "Alternaria", "Aspergillus niger", "Stachybotrys"];
const IT_TABLE_ROWS: SpeciesRow[] = [
  { characteristic: "Colore", cladosporium: "Verde oliva / nero", alternaria: "Verde scuro / nero", aspergillusNiger: "Nero con alone bianco", stachybotrys: "Nero verdastro / gelatinoso" },
  { characteristic: "Texture", cladosporium: "Polverosa", alternaria: "Polverosa", aspergillusNiger: "Granulosa", stachybotrys: "Lucida / appiccicosa" },
  { characteristic: "Substrato tipico", cladosporium: "Superfici lisce, silicone", alternaria: "Pareti, tendaggi", aspergillusNiger: "Piastrelle, fughe", stachybotrys: "Cartongesso, legno, carta" },
  { characteristic: "Odore", cladosporium: "Lieve / terroso", alternaria: "Lieve", aspergillusNiger: "Lieve", stachybotrys: "Muschio forte / fermentato" },
  { characteristic: "Umidità richiesta", cladosporium: "Condensa intermittente", alternaria: "Umidità elevata", aspergillusNiger: "Condensa", stachybotrys: "Bagnatura cronica" },
];

const ES_TABLE_HEADERS = ["Característica", "Cladosporium", "Alternaria", "Aspergillus niger", "Stachybotrys"];
const ES_TABLE_ROWS: SpeciesRow[] = [
  { characteristic: "Color", cladosporium: "Verde oliva / negro", alternaria: "Verde oscuro / negro", aspergillusNiger: "Negro con halo blanco", stachybotrys: "Negro verdoso / gelatinoso" },
  { characteristic: "Textura", cladosporium: "Pulverulenta", alternaria: "Pulverulenta", aspergillusNiger: "Granulosa", stachybotrys: "Brillante / pegajosa" },
  { characteristic: "Sustrato típico", cladosporium: "Superficies lisas, silicona", alternaria: "Paredes, textiles", aspergillusNiger: "Azulejos, juntas", stachybotrys: "Paneles de yeso, madera, papel" },
  { characteristic: "Olor", cladosporium: "Suave / terroso", alternaria: "Suave", aspergillusNiger: "Suave", stachybotrys: "Fuerte musgo / fermentado" },
  { characteristic: "Humedad necesaria", cladosporium: "Condensación intermitente", alternaria: "Humedad elevada", aspergillusNiger: "Condensación", stachybotrys: "Encharcamiento crónico" },
];

function SpeciesTable({ headers, rows }: { headers: string[]; rows: SpeciesRow[] }) {
  return (
    <div className="a1-species-table-wrap">
      <table className="a1-species-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className={`a1-species-table__th${i === 0 ? " a1-species-table__th--first" : ""}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="a1-species-table__row">
              <td className="a1-species-table__td a1-species-table__td--label">{row.characteristic}</td>
              <td className="a1-species-table__td">{row.cladosporium}</td>
              <td className="a1-species-table__td">{row.alternaria}</td>
              <td className="a1-species-table__td">{row.aspergillusNiger}</td>
              <td className="a1-species-table__td a1-species-table__td--stachybotrys">{row.stachybotrys}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── PT assessment subsections ─────────────────────────────────────────────

const PT_ASSESS_CARDS = [
  {
    emoji: "🔍",
    title: "Textura",
    body: "Pulverulenta ou seca sugere Cladosporium, Aspergillus, ou Penicillium. Brilhante, viscosa, ou de aspecto gelatinoso sugere Stachybotrys activo.",
  },
  {
    emoji: "📍",
    title: "Localização",
    body: "Superfícies de condensação (caixilhos, cantos de tecto, vidros) favorecem Cladosporium. Materiais celulósicos encharcados (pladur, papel de parede molhado, madeira com humidade severa) favorecem Stachybotrys e Chaetomium.",
  },
  {
    emoji: "👃",
    title: "Odor",
    body: "O cheiro a mofo é causado por MVOCs — compostos orgânicos voláteis microbianos. A presença de cheiro a mofo forte sem bolor visível é um sinal de alerta de contaminação oculta. O Stachybotrys tem um odor característico descrito como húmido e terroso, distinto do cheiro mais ácido de algumas espécies de Penicillium.",
  },
  {
    emoji: "💧",
    title: "Condições de humidade necessárias",
    body: "Se a humidade na divisão é elevada mas não extrema (60 a 75%), a espécie presente é provavelmente Cladosporium, Penicillium, ou Aspergillus. Se houve dano por água severo — infiltração prolongada, inundação, materiais encharcados — o risco de Stachybotrys ou Chaetomium é real.",
  },
];

const PT_ASSESS_OPTIONS = [
  {
    title: "Amostragem de superfície ou material",
    body: "Raspagem ou tape lift enviados para laboratório para análise microscópica e/ou cultura. Identifica espécies presentes na superfície amostrada.",
  },
  {
    title: "Análise de poeira acumulada por MSqPCR",
    body: "Colheita de poeira acumulada com cassete de vácuo ou pano de microfibras, enviada para laboratório com capacidade de análise por PCR quantitativo. Detecta DNA de espécies específicas, incluindo Stachybotrys e Chaetomium, mesmo quando os esporos não estão no ar. O ERMI (Environmental Relative Moldiness Index) e o HERTSMI-2 são sistemas de pontuação desenvolvidos com base nesta metodologia.",
  },
  {
    title: "Amostragem de ar com análise laboratorial",
    body: "Útil para quantificar a exposição actual por via aérea, mas com as limitações já descritas para espécies de esporos pesados.",
  },
];

function AssessCardsPT() {
  return (
    <div className="a1-assess">
      <p className="a1-assess__intro">Dado tudo o que foi descrito, o que pode fazer um proprietário ou inquilino com uma mancha escura na parede?</p>
      <p className="a1-assess__subtitle">Observação visual — o que procurar:</p>
      <div className="a1-assess__cards">
        {PT_ASSESS_CARDS.map((card, i) => (
          <div key={i} className="a1-assess__card">
            <div className="a1-assess__card-header">
              <span className="a1-assess__card-emoji" aria-hidden="true">{card.emoji}</span>
              <span className="a1-assess__card-title">{card.title}</span>
            </div>
            <p className="a1-assess__card-body">{card.body}</p>
          </div>
        ))}
      </div>
      <p className="a1-assess__subtitle a1-assess__subtitle--sep">Quando a observação visual não chega:</p>
      <p className="a1-assess__text">Se suspeita de Stachybotrys ou Chaetomium com base nas condições acima descritas, a identificação requer análise laboratorial. As opções disponíveis:</p>
      <div className="a1-assess__options">
        {PT_ASSESS_OPTIONS.map((opt, i) => (
          <div key={i} className="a1-assess__option">
            <p className="a1-assess__option-title">{opt.title}</p>
            <p className="a1-assess__option-body">{opt.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EN assessment subsections ─────────────────────────────────────────────

const EN_ASSESS_CARDS = [
  {
    emoji: "🔍",
    title: "Texture",
    body: "Powdery or dry suggests Cladosporium, Aspergillus, or Penicillium. Shiny, slimy, or gelatinous appearance suggests active Stachybotrys.",
  },
  {
    emoji: "📍",
    title: "Location",
    body: "Condensation surfaces (window frames, ceiling corners, glass) favour Cladosporium. Cellulosic materials with severe moisture history (waterlogged plasterboard, soaked wallpaper, wet timber) favour Stachybotrys and Chaetomium.",
  },
  {
    emoji: "👃",
    title: "Smell",
    body: "The musty smell of mold is caused by MVOCs — microbial volatile organic compounds. A strong musty smell without visible mold is a warning sign of concealed contamination. Stachybotrys has a characteristic smell described as heavy and earthy, distinct from the more acidic smell of some Penicillium species.",
  },
  {
    emoji: "💧",
    title: "Moisture conditions required",
    body: "If room humidity is elevated but not extreme (60–75%), the species present is most likely Cladosporium, Penicillium, or Aspergillus. If there has been severe water damage — prolonged infiltration, flooding, materials that have been waterlogged — the risk of Stachybotrys or Chaetomium is real.",
  },
];

const EN_ASSESS_OPTIONS = [
  {
    title: "Surface or material sampling",
    body: "Scraping or tape lift sent to a laboratory for microscopic analysis and/or culture. Identifies species present on the sampled surface.",
  },
  {
    title: "Settled dust MSqPCR analysis",
    body: "Dust collected with a vacuum cassette or microfibre cloth, sent to a laboratory with quantitative PCR capacity. Detects DNA of specific species, including Stachybotrys and Chaetomium, even when spores are not airborne. The ERMI (Environmental Relative Moldiness Index) and HERTSMI-2 are scoring systems developed on this methodology.",
  },
  {
    title: "Air sampling with laboratory analysis",
    body: "Useful for quantifying current airborne exposure, but with the limitations already described for heavy-spore species.",
  },
];

function AssessCardsEN() {
  return (
    <div className="a1-assess">
      <p className="a1-assess__subtitle">Visual observation — what to look for:</p>
      <div className="a1-assess__cards">
        {EN_ASSESS_CARDS.map((card, i) => (
          <div key={i} className="a1-assess__card">
            <div className="a1-assess__card-header">
              <span className="a1-assess__card-emoji" aria-hidden="true">{card.emoji}</span>
              <span className="a1-assess__card-title">{card.title}</span>
            </div>
            <p className="a1-assess__card-body">{card.body}</p>
          </div>
        ))}
      </div>
      <p className="a1-assess__subtitle a1-assess__subtitle--sep">When visual observation is not enough:</p>
      <p className="a1-assess__text">If you suspect Stachybotrys or Chaetomium based on the conditions described above, species identification requires laboratory analysis. Available options:</p>
      <div className="a1-assess__options">
        {EN_ASSESS_OPTIONS.map((opt, i) => (
          <div key={i} className="a1-assess__option">
            <p className="a1-assess__option-title">{opt.title}</p>
            <p className="a1-assess__option-body">{opt.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main A1 body renderer ─────────────────────────────────────────────────

export function A1ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i];

    // Special marker: PT assessment subsections
    if (para === "##A1_ASSESS_PT") {
      elements.push(<AssessCardsPT key={`assess-pt-${i}`} />);
      continue;
    }

    // Special marker: EN assessment subsections
    if (para === "##A1_ASSESS_EN") {
      elements.push(<AssessCardsEN key={`assess-en-${i}`} />);
      continue;
    }

    // Special marker: IT species table
    if (para === "##A1_TABLE_IT") {
      elements.push(<SpeciesTable key={`table-it-${i}`} headers={IT_TABLE_HEADERS} rows={IT_TABLE_ROWS} />);
      continue;
    }

    // Special marker: ES species table
    if (para === "##A1_TABLE_ES") {
      elements.push(<SpeciesTable key={`table-es-${i}`} headers={ES_TABLE_HEADERS} rows={ES_TABLE_ROWS} />);
      continue;
    }

    // Standard ## heading
    if (para.startsWith("## ")) {
      const text = para.slice(3);
      const id = toId(text);
      elements.push(
        <h2 key={`h-${i}`} id={id} className="article-page__h2">
          {text}
        </h2>
      );
      continue;
    }

    // Standard paragraph
    elements.push(
      <p key={i} className="article-page__para">
        {para}
      </p>
    );
  }

  return <>{elements}</>;
}
