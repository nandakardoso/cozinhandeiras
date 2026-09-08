import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-gold)] disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-[color:var(--color-chocolate)] text-[color:var(--color-offwhite)] hover:bg-[color:var(--color-terracotta)]",
  secondary:
    "border border-[color:var(--color-chocolate)]/30 text-[color:var(--color-chocolate)] bg-transparent hover:bg-[color:var(--color-chocolate)]/5",
  ghost: "text-[color:var(--color-chocolate)] hover:bg-[color:var(--color-chocolate)]/5",
};

type Variant = keyof typeof variants;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
