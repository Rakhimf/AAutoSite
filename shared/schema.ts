import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  industry: text("industry"),
  message: text("message").notNull(),
  newsletter: boolean("newsletter").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const roiCalculations = pgTable("roi_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  hoursPerTask: text("hours_per_task").notNull(),
  tasksPerWeek: text("tasks_per_week").notNull(),
  hourlyRate: text("hourly_rate").notNull(),
  errorRate: text("error_rate").notNull(),
  annualSavings: text("annual_savings").notNull(),
  roi: text("roi").notNull(),
  paybackPeriod: text("payback_period").notNull(),
  timesSaved: text("times_saved").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertRoiCalculationSchema = createInsertSchema(roiCalculations).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertRoiCalculation = z.infer<typeof insertRoiCalculationSchema>;
export type RoiCalculation = typeof roiCalculations.$inferSelect;
