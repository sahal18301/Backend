import { User } from "../models";
import { Transaction } from "sequelize";

export class UserRepository {
  async createUser(name: string, email: string, transaction?: Transaction) {
    return User.create({ name, email }, { transaction });
  }

  async getUsers() {
    return User.findAll();
  }

  async updateUser(id: number, name: string, email: string) {
    await User.update(
      { name, email },
      {
        where: { id },
      },
    );

    return User.findByPk(id);
  }

  async getUserById(id: number) {
    return User.findByPk(id);
  }

  async deleteUser(id: number) {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.destroy();

    return true;
  }
}
