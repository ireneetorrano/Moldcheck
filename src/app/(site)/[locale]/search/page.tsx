import type { ActiveLocale } from "@/config/locales";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

const meta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: { title: "Pesquisa — MoldCheck.pt", description: "Pesquise artigos e recursos sobre bolor, humidade e qualidade do ar interior no MoldCheck.pt." },
  en: { title: "Search — MoldCheck.pt", description: "Search articles and resources on mold, damp and indoor air quality at MoldCheck.pt." },
  fr: { title: "Recherche — MoldCheck.pt", description: "Recherchez des articles et des ressources sur les moisissures, l'humidité et la qualité de l'air intérieur sur MoldCheck.pt." },
  de: { title: "Suche — MoldCheck.pt", description: "Suchen Sie Artikel und Ressourcen zu Schimmel, Feuchtigkeit und Innenraumluftqualität auf MoldCheck.pt." },
  nl: { title: "Zoeken — MoldCheck.pt", description: "Zoek artikelen en bronnen over schimmel, vocht en binnenluchtkwaliteit op MoldCheck.pt." },
  it: { title: "Ricerca — MoldCheck.pt", description: "Cerca articoli e risorse su muffa, umidità e qualità dell'aria interna su MoldCheck.pt." },
  es: { title: "Búsqueda — MoldCheck.pt", description: "Busca artículos y recursos sobre moho, humedad y calidad del aire interior en MoldCheck.pt." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return meta[locale] ?? meta.en;
}

export default function SearchPage() {
  return <PlaceholderPage eyebrow="Utility" title="Search" description="Search scaffold page." />;
}
