// src/db/schema.ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  content: text("content").notNull(),
  userToken: text("user_token"), // Penanda pemilik komentar
  createdAt: timestamp("created_at").defaultNow().notNull(),
})