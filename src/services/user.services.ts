import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private repo = new UserRepository();

  createUser(name: string, email: string) {
    return this.repo.createUser(name, email);
  }

  getUsers() {
    return this.repo.getUsers();
  }

  getUserById(id: string) {
    return this.repo.getUserById(id);
  }

  updateUser(id: string, name: string, email: string) {
    return this.repo.updateUser(id, name, email);
  }

  deleteUser(id: string) {
    return this.repo.deleteUser(id);
  }
}