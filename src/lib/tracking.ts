"use client";

// Módulo central de rastreamento. Toda chamada de evento passa por aqui,
// para que a integração real (GA4 / GTM) seja plugada em um único lugar.
//
// Para ativar o Google Tag Manager: adicione o snippet do GTM em
// src/app/layout.tsx e garanta que `window.dataLayer` exista antes do uso.
// Para Google Analytics 4 direto: injete o gtag.js em layout.tsx e
// substitua o corpo de `sendEvent` por `window.gtag("event", name, payload)`.

export type TrackingEvent =
  | "view_service"
  | "click_whatsapp"
  | "click_instagram"
  | "click_linkedin"
  | "click_budget"
  | "form_start"
  | "generate_lead";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function sendEvent(name: TrackingEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...payload,
  });

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
