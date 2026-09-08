import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Schema Drizzle usado somente quando DATABASE_URL está configurada.
// Ver src/lib/leads-store.ts para a camada de persistência desacoplada.
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  service: text("service").notNull(),
  eventDate: text("event_date").notNull(),
  location: text("location").notNull(),
  guestRange: text("guest_range").notNull(),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type LeadRow = typeof leads.$inferSelect;
export type NewLeadRow = typeof leads.$inferInsert;
