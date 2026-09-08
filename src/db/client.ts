import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

let pool: Pool | undefined;

// Só instancia a pool de conexão quando DATABASE_URL está presente.
// Chamar isso sem DATABASE_URL configurada é um erro de configuração do chamador.
export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL não está configurada. Configure-a em .env.local para usar PostgreSQL via Drizzle.",
    );
  }

  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }

  return drizzle(pool, { schema });
}
