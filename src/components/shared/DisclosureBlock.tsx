type DisclosureVariant = "homepage" | "article" | "checkout";

export function DisclosureBlock({
  title,
  text,
  variant = "article",
}: {
  title: string;
  text: string;
  variant?: DisclosureVariant;
}) {
  return (
    <section className={`disclosure-block disclosure-block--${variant}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}
