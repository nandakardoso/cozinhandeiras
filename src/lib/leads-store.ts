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

/**
 * Camada de persistência desacoplada dos leads.
 *
 * - Se `DATABASE_URL` estiver configurada, grava via Drizzle no PostgreSQL
 *   (tabela `leads`, ver src/db/schema.ts — rode as migrations do Drizzle antes de usar em produção).
 * - Caso contrário, grava em `data/leads.json` (arquivo local, fora do controle de versão)
 *   como fallback funcional para desenvolvimento e ambientes sem banco configurado.
 *
 * Em nenhum dos dois casos o lead é apenas "simulado": o retorno só ocorre
 * após a gravação real ser concluída.
 */
export async function saveLead(input: LeadInput): Promise<StoredLead> {
  if (process.env.DATABASE_URL) {
    return saveLeadToDatabase(input);
  }

  return saveLeadToFile(input);
}
