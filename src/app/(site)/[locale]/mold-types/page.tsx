import type { ActiveLocale } from "@/config/locales";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

const meta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: { title: "Tipos de Bolor — MoldCheck.pt", description: "Guia editorial sobre os principais tipos de bolor encontrados em habitações em Portugal." },
  en: { title: "Types of Mold — MoldCheck.pt", description: "Editorial guide to the main types of mold found in homes in Portugal." },
  fr: { title: "Types de Moisissures — MoldCheck.pt", description: "Guide éditorial sur les principaux types de moisissures trouvés dans les habitations au Portugal." },
  de: { title: "Schimmelarten — MoldCheck.pt", description: "Redaktioneller Leitfaden zu den wichtigsten Schimmelarten in Wohngebäuden in Portugal." },
  nl: { title: "Soorten Schimmel — MoldCheck.pt", description: "Redactionele gids over de belangrijkste schimmelsoorten in woningen in Portugal." },
  it: { title: "Tipi di Muffa — MoldCheck.pt", description: "Guida editoriale sui principali tipi di muffa nelle abitazioni in Portogallo." },
  es: { title: "Tipos de Moho — MoldCheck.pt", description: "Guía editorial sobre los principales tipos de moho encontrados en viviendas en Portugal." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return meta[locale] ?? meta.en;
}

export default function MoldTypesPage() {
  return <PlaceholderPage eyebrow="Section" title="Mold types" description="Mold types section scaffold." />;
}
