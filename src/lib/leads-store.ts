import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { leads } from "@/db/schema";
import type { LeadInput } from "@/lib/lead-schema";

export type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

async function saveLeadToFile(input: LeadInput): Promise<StoredLead> {
  await mkdir(DATA_DIR, { recursive: true });

  let existing: StoredLead[] = [];
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    existing = JSON.parse(raw) as StoredLead[];
  } catch {
    existing = [];
  }

  const record: StoredLead = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  existing.push(record);
  await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return record;
}

async function saveLeadToDatabase(input: LeadInput): Promise<StoredLead> {
  const { getDb } = await import("@/db/client");
  const db = getDb();

  const [row] = await db
    .insert(leads)
    .values({
      name: input.name,
      company: input.company,
      email: input.email,
      whatsapp: input.whatsapp,
      service: input.service,
      eventDate: input.eventDate,
      location: input.location,
      guestRange: input.guestRange,
      details: input.details || null,
    })
    .returning();

  return {
    ...input,
    id: String(row.id),
    createdAt: row.createdAt.toISOString(),
  };
}

async function saveLeadToGoogleSheets(input: LeadInput): Promise<StoredLead> {
  const record: StoredLead = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const res = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET || "",
      ...record,
    }),
  });

  if (!res.ok) {
    throw new Error(`Falha ao gravar lead na planilha: ${res.status} ${await res.text()}`);
  }

  const body = (await res.json().catch(() => null)) as { ok?: boolean } | null;
  if (!body?.ok) {
    throw new Error("Planilha rejeitou o lead (resposta sem ok:true).");
  }

  return record;
}

/**
 * Camada de persistência desacoplada dos leads.
 *
 * Ordem de prioridade:
 * 1. `GOOGLE_SHEETS_WEBHOOK_URL` — grava numa Google Sheet via Apps Script Web App
 *    (ver README/documentação do script em scripts/google-apps-script.js).
 * 2. `DATABASE_URL` — grava via Drizzle no PostgreSQL (tabela `leads`).
 * 3. Fallback: `data/leads.json` (arquivo local, fora do controle de versão) —
 *    só funciona em ambientes com sistema de arquivos gravável (dev local);
 *    a Vercel em produção tem filesystem somente leitura.
 *
 * Em nenhum caso o lead é apenas "simulado": o retorno só ocorre após a
 * gravação real ser concluída.
 */
export async function saveLead(input: LeadInput): Promise<StoredLead> {
  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    return saveLeadToGoogleSheets(input);
  }

  if (process.env.DATABASE_URL) {
    return saveLeadToDatabase(input);
  }

  return saveLeadToFile(input);
}
