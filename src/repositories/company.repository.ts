// import { Company } from "../models";
// import { Transaction } from "sequelize";

// export class CompanyRepository {
//   async createCompany(
//     name: string,
//     industry: string,
//     transaction?: Transaction,
//   ) {
//     return Company.create({ name, industry }, { transaction });
//   }

//   async getCompanies() {
//     return Company.findAll();
//   }
// }
import { Company } from "../models";

export class CompanyRepository {
  async createCompany(name: string, industry: string) {
    return Company.create({
      name,
      industry,
    });
  }

  async getCompanies() {
    return Company.find();
  }

  async deleteCompany(id: string) {
    return Company.findByIdAndDelete(id);
  }
}