import { sequelize } from "../config/db";

import { UserRepository } from "../repositories/user.repository";

import { CompanyRepository } from "../repositories/company.repository";

export class TransactionService {
  private userRepo = new UserRepository();

  private companyRepo = new CompanyRepository();

  async createUserAndCompany(userData: any, companyData: any) {
    const transaction = await sequelize.transaction();

    try {
      const company = await this.companyRepo.createCompany(
        companyData.name,
        companyData.industry,
        transaction,
      );

      const user = await this.userRepo.createUser(
        userData.name,
        userData.email,
        transaction,
      );

      await transaction.commit();

      return {
        user,
        company,
      };
    } catch (error) {
      await transaction.rollback();

      throw error;
    }
  }
}
