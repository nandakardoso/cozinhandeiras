export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-terracotta)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl leading-tight text-[color:var(--color-chocolate)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[color:var(--color-graphite)]/80">
          {description}
        </p>
      )}
    </div>
  );
}
