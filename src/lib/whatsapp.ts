import { brand } from "@/lib/content";

// brand.whatsappNumber é digitado em formato local (DDD + número). O wa.me exige
// o código do país (55) na frente para abrir o contato certo.
const localDigits = brand.whatsappNumber.replace(/\D/g, "");

export const isWhatsappConfigured = localDigits.length >= 10;

const fullDigits = isWhatsappConfigured
  ? localDigits.startsWith("55")
    ? localDigits
    : `55${localDigits}`
  : "";

export const whatsappHref = isWhatsappConfigured
  ? `https://wa.me/${fullDigits}?text=${encodeURIComponent(brand.whatsappMessage)}`
  : "#contato";
