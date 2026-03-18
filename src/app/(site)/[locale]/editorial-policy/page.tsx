import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { getEditorialPolicyContent } from "@/features/content/data/editorialPolicyContent";
import { PageShell } from "@/components/shared/PageShell";

const editorialPolicyMeta: Record<ActiveLocale, { title: string; description: string }> = {
  pt: {
    title: "Política Editorial — MoldCheck.pt",
    description:
      "Como o MoldCheck.pt produz, revê e publica conteúdo. Independência editorial, fontes científicas e transparência sobre conflitos de interesse.",
  },
  en: {
    title: "Editorial Policy — MoldCheck.pt",
    description:
      "How MoldCheck.pt produces, reviews and publishes content. Editorial independence, scientific sources and transparency about conflicts of interest.",
  },
  fr: {
    title: "Politique Éditoriale — MoldCheck.pt",
    description:
      "Comment MoldCheck.pt produit, révise et publie du contenu. Indépendance éditoriale, sources scientifiques et transparence sur les conflits d'intérêts.",
  },
  de: {
    title: "Redaktionsrichtlinie — MoldCheck.pt",
    description:
      "Wie MoldCheck.pt Inhalte erstellt, prüft und veröffentlicht. Redaktionelle Unabhängigkeit, wissenschaftliche Quellen und Transparenz bei Interessenkonflikten.",
  },
  nl: {
    title: "Redactioneel Beleid — MoldCheck.pt",
    description:
      "Hoe MoldCheck.pt content produceert, beoordeelt en publiceert. Redactionele onafhankelijkheid, wetenschappelijke bronnen en transparantie over belangenconflicten.",
  },
  it: {
    title: "Politica Editoriale — MoldCheck.pt",
    description:
      "Come MoldCheck.pt produce, rivede e pubblica contenuti. Indipendenza editoriale, fonti scientifiche e trasparenza sui conflitti di interesse.",
  },
  es: {
    title: "Política Editorial — MoldCheck.pt",
    description:
      "Cómo MoldCheck.pt produce, revisa y publica contenido. Independencia editorial, fuentes científicas y transparencia sobre conflictos de interés.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}) {
  const { locale } = await params;
  const meta = editorialPolicyMeta[locale] ?? editorialPolicyMeta.en;
  return { title: meta.title, description: meta.description };
}

export default async function EditorialPolicyPage({
  params,
}: {
  params: Promise<{ locale: ActiveLocale }>;
}) {
  const { locale } = await params;
  const page = getEditorialPolicyContent(locale);

  return (
    <>
      <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <GlobalPageBlocks page={page} />
    </>
  );
}
