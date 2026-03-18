import type { ActiveLocale } from "@/config/locales";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

const meta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: { title: "Saúde e Bolor — MoldCheck.pt", description: "Efeitos do bolor e da humidade na saúde. Informação científica independente para residentes em Portugal." },
  en: { title: "Health and Mold — MoldCheck.pt", description: "Health effects of mold and damp. Independent scientific information for residents in Portugal." },
  fr: { title: "Santé et Moisissures — MoldCheck.pt", description: "Effets des moisissures et de l'humidité sur la santé. Information scientifique indépendante pour les résidents au Portugal." },
  de: { title: "Gesundheit und Schimmel — MoldCheck.pt", description: "Gesundheitliche Auswirkungen von Schimmel und Feuchtigkeit. Unabhängige wissenschaftliche Informationen für Bewohner in Portugal." },
  nl: { title: "Gezondheid en Schimmel — MoldCheck.pt", description: "Gezondheidseffecten van schimmel en vocht. Onafhankelijke wetenschappelijke informatie voor bewoners in Portugal." },
  it: { title: "Salute e Muffa — MoldCheck.pt", description: "Effetti della muffa e dell'umidità sulla salute. Informazione scientifica indipendente per i residenti in Portogallo." },
  es: { title: "Salud y Moho — MoldCheck.pt", description: "Efectos del moho y la humedad en la salud. Información científica independiente para residentes en Portugal." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return meta[locale] ?? meta.en;
}

export default function HealthPage() {
  return <PlaceholderPage eyebrow="Section" title="Health" description="Health section scaffold." />;
}
