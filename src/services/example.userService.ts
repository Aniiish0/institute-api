import { User } from "../models/example.user";
import { UserRepository } from "../repositories/example.userRepository";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public async get(id?: string, name?: string): Promise<User> {
    if (id) {
      const user = await new UserRepository().find(id);
      if (user) {
        return user;
      } else {
        throw new Error(`User with id ${id} not found.`);
      }
    } else if (name) {
      const user = await new UserRepository().findByName(name);
      if (user) {
        return user;
      } else {
        throw new Error(`User with name ${name} not found.`);
      }
    }
    throw new Error(`Cannot have both id and name undefined.`);
  }

  public async create(userCreationParams: UserCreationParams): Promise<User> {
    const user = await new UserRepository().create({
      status: "Happy",
      ...userCreationParams,
    });
    if (user) {
      return user;
    } else {
      throw new Error("Failed to create user.");
    }
  }
}
