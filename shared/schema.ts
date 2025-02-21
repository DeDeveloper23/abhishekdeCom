import { z } from "zod";
import type { User as PrismaUser, Project as PrismaProject } from "@prisma/client";

export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const insertProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().url("Must be a valid URL"),
  link: z.string().url("Must be a valid URL"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = PrismaUser;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = PrismaProject;