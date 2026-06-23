import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private repo = new UserRepository();

  createUser(name: string, email: string) {
    return this.repo.createUser(name, email);
  }

  getUsers() {
    return this.repo.getUsers();
  }
  
  getUserById(id: number) {
    return this.repo.getUserById(id);
  }

  updateUser(id: number, name: string, email: string) {
    return this.repo.updateUser(id, name, email);
  }

  async deleteUser(id: number) {
    return this.repo.deleteUser(id);
  }
}

