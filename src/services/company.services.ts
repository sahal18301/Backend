import { CompanyRepository } from "../repositories/company.repository";

export class CompanyService {
  private repository = new CompanyRepository();

  async createCompany(name: string, industry: string) {
    return this.repository.createCompany(name, industry);
  }

  async getCompanies() {
    return this.repository.getCompanies();
  }
}

