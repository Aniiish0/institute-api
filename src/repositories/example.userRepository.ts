// src/repositories/UserRepository.ts
import { IRepository } from "./iRepository";
import { User } from "../models/example.user";
import { v4 as uuid } from "uuid";

export class UserRepository implements IRepository {
  async find(id: string): Promise<User | null> {
    // Logic to get a user by ID
    return {
      id,
      email: "jane@doe.com",
      name: "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    }; // Replace with actual logic
  }

  async findByName(name: string): Promise<User | null> {
    // Logic to get a user by name
    return {
      id: uuid(), // Random
      status: "Happy",
      email: "john@doe.com",
      name,
      phoneNumbers: [],
    }; // Replace with actual logic
  }

  async create(user: User): Promise<User> {
    // Logic to create a user
    user.id = uuid();
    return user; // Replace with actual logic
  }

  async update(_id: string, user: User): Promise<User | null> {
    // Logic to update a user
    return user; // Replace with actual logic
  }

  async delete(_id: string): Promise<void> {
    // Logic to delete a user
  }
}
