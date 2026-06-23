import express from "express";
import dotenv from "dotenv";

import { connectDB, sequelize } from "./config/db";

import "./models";

import userRoutes from "./apis/user.api";

import companyRoutes from "./apis/company.api";


dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🚀 API running");
});

app.use("/api", userRoutes);

app.use("/api", companyRoutes);

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync({
      alter: true,
    });

    console.log("✅ Models synchronized");

    app.listen(Number(process.env.PORT), "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
  }
};

startServer();
