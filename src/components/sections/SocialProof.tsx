"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { brand } from "@/lib/content";
import { track } from "@/lib/tracking";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLink } from "@/components/SocialLink";

export function SocialProof() {
  const whatsappDigits = brand.whatsappNumber.replace(/\D/g, "");
  const isWhatsappConfigured = whatsappDigits.length > 0;
  const whatsappHref = isWhatsappConfigured
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(brand.whatsappMessage)}`
    : "#contato";

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-[color:var(--color-chocolate)]/10 px-8 py-12 text-center sm:px-10">
            <Image
              src="/logo-cozinhandeiras.png"
              alt={brand.name}
              width={1254}
              height={1254}
              className="h-16 w-auto sm:h-20"
            />

            <div className="flex flex-wrap items-center justify-center gap-3">
              <SocialLink href={brand.instagramUrl} network="instagram">
                <InstagramIcon size={18} />
                Instagram
              </SocialLink>

              <SocialLink href={brand.linkedinUrl} network="linkedin">
                <LinkedinIcon size={18} />
                LinkedIn
              </SocialLink>

              <a
                href="#contato"
                onClick={() => track.clickBudget("social-proof")}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-chocolate)]/30 px-6 py-3 text-sm font-medium text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/5"
              >
                Contato
              </a>

              <a
                href={whatsappHref}
                target={isWhatsappConfigured ? "_blank" : undefined}
                rel={isWhatsappConfigured ? "noopener noreferrer" : undefined}
                onClick={() => track.clickWhatsapp("social-proof")}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-chocolate)]/30 px-6 py-3 text-sm font-medium text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/5"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
