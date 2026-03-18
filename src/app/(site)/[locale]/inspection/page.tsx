import type { ActiveLocale } from "@/config/locales";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

const meta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: { title: "Inspecção de Bolor e Humidade — MoldCheck.pt", description: "Como funciona uma inspecção independente de bolor e humidade em Portugal. Guia editorial imparcial." },
  en: { title: "Mold and Damp Inspection — MoldCheck.pt", description: "How independent mold and damp inspection works in Portugal. Impartial editorial guide." },
  fr: { title: "Inspection Moisissures et Humidité — MoldCheck.pt", description: "Comment fonctionne une inspection indépendante des moisissures et de l'humidité au Portugal." },
  de: { title: "Schimmel- und Feuchtigkeitsinspektion — MoldCheck.pt", description: "Wie eine unabhängige Schimmel- und Feuchtigkeitsinspektion in Portugal funktioniert." },
  nl: { title: "Schimmel- en Vochtinspectie — MoldCheck.pt", description: "Hoe een onafhankelijke schimmel- en vochtinspectie in Portugal werkt." },
  it: { title: "Ispezione Muffa e Umidità — MoldCheck.pt", description: "Come funziona un'ispezione indipendente di muffa e umidità in Portogallo." },
  es: { title: "Inspección de Moho y Humedad — MoldCheck.pt", description: "Cómo funciona una inspección independiente de moho y humedad en Portugal." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return meta[locale] ?? meta.en;
}

export default function InspectionPage() {
  return <PlaceholderPage eyebrow="Section" title="Inspection" description="Inspection section scaffold." />;
}
