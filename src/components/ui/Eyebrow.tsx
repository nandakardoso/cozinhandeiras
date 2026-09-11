import { ReactNode } from "react";

const toneClass = {
  terracotta: "text-[color:var(--color-terracotta)]",
  champagne: "text-[color:var(--color-champagne)]",
};

export function Eyebrow({
  children,
  tone = "terracotta",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof toneClass;
  className?: string;
}) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.2em] ${toneClass[tone]} ${className}`}>
      {children}
    </p>
  );
}
