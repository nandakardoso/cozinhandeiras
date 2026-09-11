"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/content";
import { SocialLink } from "@/components/SocialLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whatsappHref } from "@/lib/whatsapp";
import { track } from "@/lib/tracking";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-chocolate)] text-[color:var(--color-offwhite)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl">
            {brand.name} - {brand.tagline}
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-offwhite)]/70">
            {brand.positioning}
          </p>
        </div>

        <div>
          <Eyebrow tone="champagne">Navegação</Eyebrow>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-offwhite)]/80">
            <li><a href="#quem-somos" className="hover:text-[color:var(--color-champagne)]">Quem somos</a></li>
            <li><a href="#galeria" className="hover:text-[color:var(--color-champagne)]">Galeria</a></li>
            <li><a href="#contato" className="hover:text-[color:var(--color-champagne)]">Contato</a></li>
          </ul>
        </div>

        <div>
          <Eyebrow tone="champagne">Contato</Eyebrow>
          <p className="mt-4 text-sm text-[color:var(--color-offwhite)]/80">
            Atendimento em {brand.region}
          </p>
          <p className="mt-1 text-sm text-[color:var(--color-offwhite)]/80">
            WhatsApp: {brand.whatsappNumber}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <SocialLink
              href={whatsappHref}
              network="whatsapp"
              onClick={() => track.clickWhatsapp("footer")}
              className="!border-[color:var(--color-offwhite)]/30 !text-[color:var(--color-offwhite)] hover:!bg-[color:var(--color-offwhite)]/10"
            >
              <MessageCircle size={16} />
              WhatsApp
            </SocialLink>
            <SocialLink
              href={brand.instagramUrl}
              network="instagram"
              className="!border-[color:var(--color-offwhite)]/30 !text-[color:var(--color-offwhite)] hover:!bg-[color:var(--color-offwhite)]/10"
            >
              Instagram
            </SocialLink>
            <SocialLink
              href={brand.linkedinUrl}
              network="linkedin"
              className="!border-[color:var(--color-offwhite)]/30 !text-[color:var(--color-offwhite)] hover:!bg-[color:var(--color-offwhite)]/10"
            >
              LinkedIn
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-offwhite)]/10 px-6 py-6 text-xs text-[color:var(--color-offwhite)]/60 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
          <a href="/politica-de-privacidade" className="hover:text-[color:var(--color-champagne)]">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
