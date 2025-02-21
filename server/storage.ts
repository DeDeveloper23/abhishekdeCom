import { prisma } from './prisma';
import type { User, Project } from '@prisma/client';

export interface InsertUser {
  username: string;
  password: string;
}

export interface InsertProject {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: { id }
    });
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    return await prisma.user.create({
      data: insertUser
    });
  }

  async getProjects(): Promise<Project[]> {
    return await prisma.project.findMany();
  }

  async getProject(id: number): Promise<Project | undefined> {
    const project = await prisma.project.findUnique({
      where: { id }
    });
    return project || undefined;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    return await prisma.project.create({
      data: insertProject
    });
  }
}

export const storage = new DatabaseStorage();