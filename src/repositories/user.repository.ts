import { User } from "../models";

export class UserRepository {
  async createUser(name: string, email: string) {
    return User.create({
      name,
      email,
    });
  }

  async getUsers() {
    return User.find();
  }

  async getUserById(id: string) {
    return User.findById(id);
  }

  async updateUser(id: string, name: string, email: string) {
    return User.findByIdAndUpdate(
      id,
      {
        name,
        email,
      },
      {
        new: true,
      },
    );
  }

  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }
}