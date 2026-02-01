import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const eras = pgTable("eras", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  yearRange: text("year_range").notNull(),
  shortDescription: text("short_description").notNull(),
  visualType: text("visual_type").notNull(), // 'primitive', 'electromechanical', 'mainframe', 'personal', 'modern'
  details: jsonb("details").$type<string[]>().notNull(), // Array of text blocks for the scrolling storytelling
});

export const insertEraSchema = createInsertSchema(eras);
export type InsertEra = z.infer<typeof insertEraSchema>;
export type Era = typeof eras.$inferSelect;
