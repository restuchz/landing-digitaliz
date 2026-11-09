// src/db/schema.ts
import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core"

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})