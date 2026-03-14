import { PageShell } from "@/components/shared/PageShell";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} description={description}>
      <article className="editorial-card">
        <h2>Scaffold reconstruido</h2>
        <p>La estructura base de esta sección se ha recreado para que el proyecto vuelva a estar operativo.</p>
      </article>
    </PageShell>
  );
}
