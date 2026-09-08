"use client";

import { ReactNode } from "react";
import { track } from "@/lib/tracking";

export function SocialLink({
  href,
  network,
  children,
  className = "",
}: {
  href: string;
  network: "instagram" | "linkedin";
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => (network === "instagram" ? track.clickInstagram() : track.clickLinkedin())}
      className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--color-chocolate)]/30 px-6 py-3 text-sm font-medium text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/5 ${className}`}
    >
      {children}
    </a>
  );
}
