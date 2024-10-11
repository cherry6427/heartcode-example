import { SelectItem, SelectTrigger } from "@radix-ui/react-select";
import { pgTable, pgTableCreator, varchar, uuid } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `heartcode-example_${name}`)

export const usersTable = createTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  isnotdrug: varchar({ length: 255 }).notNull(),
  isdrugabuse: varchar({ length: 255 }).notNull(),
  iseffect: varchar({ length: 255 }).notNull(),
});