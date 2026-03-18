import type { ActiveLocale } from "@/config/locales";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

const meta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: { title: "Remediação de Bolor — MoldCheck.pt", description: "Informação independente sobre remediação de bolor e humidade em Portugal. Sem vender tratamentos." },
  en: { title: "Mold Remediation — MoldCheck.pt", description: "Independent information on mold and damp remediation in Portugal. Without selling treatments." },
  fr: { title: "Remédiation des Moisissures — MoldCheck.pt", description: "Information indépendante sur la remédiation des moisissures et de l'humidité au Portugal." },
  de: { title: "Schimmelsanierung — MoldCheck.pt", description: "Unabhängige Informationen zur Schimmel- und Feuchtigkeitssanierung in Portugal." },
  nl: { title: "Schimmelsanering — MoldCheck.pt", description: "Onafhankelijke informatie over schimmel- en vochtbestrijding in Portugal." },
  it: { title: "Bonifica dalla Muffa — MoldCheck.pt", description: "Informazione indipendente sulla bonifica da muffa e umidità in Portogallo." },
  es: { title: "Remediación del Moho — MoldCheck.pt", description: "Información independiente sobre remediación de moho y humedad en Portugal." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return meta[locale] ?? meta.en;
}

export default function RemediationPage() {
  return <PlaceholderPage eyebrow="Section" title="Remediation" description="Remediation section scaffold." />;
}
