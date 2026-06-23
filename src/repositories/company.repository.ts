import { Company } from "../models";
import { Transaction } from "sequelize";

export class CompanyRepository {
  async createCompany(
    name: string,
    industry: string,
    transaction?: Transaction,
  ) {
    return Company.create({ name, industry }, { transaction });
  }

  async getCompanies() {
    return Company.findAll();
  }
}
