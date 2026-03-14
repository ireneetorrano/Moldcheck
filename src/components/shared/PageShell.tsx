export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-shell">
      <header className="page-shell__header">
        {eyebrow ? <p className="page-shell__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="page-shell__description">{description}</p> : null}
      </header>
      <div className="page-shell__content">{children}</div>
    </section>
  );
}
