import Image from "next/image";

// Quando `src` é informado, renderiza a foto real da Cozinhandeiras.
// Sem `src`, exibe um placeholder tracejado — usado onde a foto real
// ainda não foi fornecida. `label` descreve qual foto falta ou serve de alt text.
export function ImagePlaceholder({
  label,
  src,
  className = "",
  ratio = "aspect-[4/5]",
  sizes,
}: {
  label: string;
  src?: string;
  className?: string;
  ratio?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`${ratio} relative overflow-hidden rounded-3xl ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`${ratio} flex items-center justify-center rounded-3xl border border-dashed border-[color:var(--color-chocolate)]/25 bg-[color:var(--color-champagne)]/20 p-6 text-center ${className}`}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-chocolate)]/60">
        {label}
      </span>
    </div>
  );
}
