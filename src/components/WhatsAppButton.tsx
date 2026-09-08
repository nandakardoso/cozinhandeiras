"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/content";
import { track } from "@/lib/tracking";

export function WhatsAppButton() {
  // brand.whatsappNumber ainda é um placeholder — ver src/lib/content.ts.
  // Ao confirmar o número oficial, o link abaixo passa a funcionar de fato.
  const isConfigured = /^\d+$/.test(brand.whatsappNumber);
  const href = isConfigured
    ? `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`
    : "#contato";

  return (
    <a
      href={href}
      target={isConfigured ? "_blank" : undefined}
      rel={isConfigured ? "noopener noreferrer" : undefined}
      onClick={() => track.clickWhatsapp("floating-button")}
      aria-label={
        isConfigured
          ? "Falar no WhatsApp"
          : "Número de WhatsApp ainda não configurado — role até o formulário"
      }
      title={isConfigured ? "Falar no WhatsApp" : "[INSERIR NÚMERO OFICIAL DO WHATSAPP]"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-gold)]"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
