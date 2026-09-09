"use client";

import { MessageCircle } from "lucide-react";
import { track } from "@/lib/tracking";
import { isWhatsappConfigured, whatsappHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target={isWhatsappConfigured ? "_blank" : undefined}
      rel={isWhatsappConfigured ? "noopener noreferrer" : undefined}
      onClick={() => track.clickWhatsapp("floating-button")}
      aria-label={
        isWhatsappConfigured
          ? "Falar no WhatsApp"
          : "Número de WhatsApp ainda não configurado — role até o formulário"
      }
      title={isWhatsappConfigured ? "Falar no WhatsApp" : "[INSERIR NÚMERO OFICIAL DO WHATSAPP]"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-gold)]"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
