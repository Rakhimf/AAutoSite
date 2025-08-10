import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type RoiCalculation, type InsertRoiCalculation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createRoiCalculation(calculation: InsertRoiCalculation): Promise<RoiCalculation>;
  getRoiCalculations(): Promise<RoiCalculation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private roiCalculations: Map<string, RoiCalculation>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.roiCalculations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createRoiCalculation(insertCalculation: InsertRoiCalculation): Promise<RoiCalculation> {
    const id = randomUUID();
    const calculation: RoiCalculation = { 
      ...insertCalculation, 
      id, 
      createdAt: new Date()
    };
    this.roiCalculations.set(id, calculation);
    return calculation;
  }

  async getRoiCalculations(): Promise<RoiCalculation[]> {
    return Array.from(this.roiCalculations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
