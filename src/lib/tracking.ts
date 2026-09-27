"use client";

// Módulo central de rastreamento. Toda chamada de evento passa por aqui,
// para que a integração real (GA4 / GTM) seja plugada em um único lugar.
//
// GA4: carregado em src/app/layout.tsx via @next/third-parties quando
// NEXT_PUBLIC_GA_ID está definida; os eventos vão por `sendGAEvent`.
// Sem o ID, os eventos continuam no `window.dataLayer` (formato GTM).

import { sendGAEvent } from "@next/third-parties/google";

const gaEnabled = Boolean(process.env.NEXT_PUBLIC_GA_ID);

export type TrackingEvent =
  | "view_service"
  | "click_whatsapp"
  | "click_instagram"
  | "click_linkedin"
  | "click_budget"
  | "form_start"
  | "generate_lead";

type EventPayload = Record<string, string | number | boolean | undefined>;

// `window.dataLayer` já é tipado globalmente por @next/third-parties.

function sendEvent(name: TrackingEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  if (gaEnabled) {
    sendGAEvent("event", name, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...payload,
    });
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[tracking]", name, payload);
  }
}

export const track = {
  viewService: (serviceId: string) => sendEvent("view_service", { serviceId }),
  clickWhatsapp: (context: string) => sendEvent("click_whatsapp", { context }),
  clickInstagram: () => sendEvent("click_instagram"),
  clickLinkedin: () => sendEvent("click_linkedin"),
  clickBudget: (context: string) => sendEvent("click_budget", { context }),
  formStart: () => sendEvent("form_start"),
  // generate_lead só deve ser chamado após a API confirmar o recebimento do lead.
  generateLead: (leadId: string) => sendEvent("generate_lead", { leadId }),
};
