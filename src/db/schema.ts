import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const tasks = sqliteTable("tasks", {
  id: integer("id", { mode: "number"})
    .primaryKey(),
  name: text("name")
    .notNull(),
  done: integer("done", { mode: "boolean" })
    .notNull()
    .default(false),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
})

export const selectTasksSchema = createSelectSchema(tasks);

export const insertTasksSchema = createInsertSchema(tasks, {
  name: schema => schema.name.min(1).max(100),
}).required({
  done: true
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true
})

export const patchTasksSchema = insertTasksSchema.partial()
