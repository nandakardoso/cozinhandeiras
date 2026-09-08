import { z } from "zod";
import { guestRangeOptions, serviceOptions } from "./content";

// Schema único usado tanto no formulário (client) quanto na API route (server).
export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  company: z
    .string()
    .trim()
    .min(2, "Informe o nome da empresa.")
    .max(120, "Nome da empresa muito longo."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail corporativo.")
    .email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Informe um número de WhatsApp válido.")
    .max(20, "Número muito longo."),
  service: z.enum(serviceOptions, {
    message: "Selecione o serviço desejado.",
  }),
  eventDate: z.string().trim().min(1, "Informe a data prevista do evento."),
  location: z
    .string()
    .trim()
    .min(2, "Informe a cidade e o local do evento.")
    .max(160, "Local muito longo."),
  guestRange: z.enum(guestRangeOptions, {
    message: "Selecione o número estimado de convidados.",
  }),
  details: z
    .string()
    .trim()
    .max(2000, "Descrição muito longa.")
    .optional()
    .or(z.literal("")),
  // Honeypot: campo invisível para humanos. Se vier preenchido, é bot.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
