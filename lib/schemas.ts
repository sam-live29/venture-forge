import { z } from 'zod';

export const ApplicationSchema = z.object({
  role: z.enum(["founder", "co-founder"]),
  fullName: z.string().min(2, "Name is too short").max(100, "Name is too long").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  linkedIn: z.string().url("Invalid LinkedIn URL").trim(),
  location: z.string().min(2, "Location is too short").max(100, "Location is too long").trim(),
  startupName: z.string().min(1, "Startup name is required").max(100, "Startup name is too long").trim(),
  sector: z.string().min(2, "Sector is too short").max(50, "Sector is too long").trim(),
  startupType: z.string().min(2, "Startup type is too short").max(50, "Startup type is too long").trim(),
  launchTime: z.string().min(2, "Launch time is too short").max(50, "Launch time is too long").trim(),
  stage: z.enum(["Idea", "MVP", "Early Traction", "Scaling"]),
  problem: z.string().min(10, "Problem description is too short").max(2000, "Problem description is too long").trim(),
  solution: z.string().min(10, "Solution description is too short").max(2000, "Solution description is too long").trim(),
  targetMarket: z.string().min(5, "Target market description is too short").max(500, "Target market description is too long").trim(),
  traction: z.string().min(5, "Traction description is too short").max(2000, "Traction description is too long").trim(),
  team: z.string().min(10, "Team background is too short").max(2000, "Team background is too long").trim(),
  teamSize: z.string().regex(/^\d+(-\d+|\+)?$/, "Invalid team size format"),
  whyVentureForge: z.string().min(10, "Reason for joining is too short").max(1000, "Reason for joining is too long").trim(),
  coFounders: z.array(z.object({
    name: z.string().min(2).max(100).trim(),
    role: z.string().min(2).max(100).trim(),
    linkedIn: z.string().url().trim()
  })).max(10, "Too many co-founders")
});

export const TrafficLogSchema = z.object({
  page_url: z.string().url().max(500).trim(),
  referrer: z.string().max(500).trim().optional().nullable(),
  user_agent: z.string().max(500).trim(),
  ip_address: z.string().max(45).trim().optional().nullable() // IP is usually added by DB but can be logged
});
