import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertRoiCalculationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  // ROI calculation submission
  app.post("/api/roi-calculation", async (req, res) => {
    try {
      const validatedData = insertRoiCalculationSchema.parse(req.body);
      const calculation = await storage.createRoiCalculation(validatedData);
      res.json({ success: true, calculation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save ROI calculation" });
      }
    }
  });

  // Get ROI calculations
  app.get("/api/roi-calculations", async (req, res) => {
    try {
      const calculations = await storage.getRoiCalculations();
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch ROI calculations" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
