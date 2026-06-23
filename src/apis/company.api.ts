import { Router } from "express";
import { CompanyService } from "../services/company.services";

const router = Router();
const service = new CompanyService();

router.post("/companies", async (req, res) => {
  try {
    const { name, industry } = req.body;

    const company = await service.createCompany(name, industry);

    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: "Failed to create company" });
  }
});

router.get("/companies", async (_req, res) => {
  try {
    const companies = await service.getCompanies();

    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch companies" });
  }
});

export default router;
