import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error("Database environment variables missing");
}

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    logging: false,
  },
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();

    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database failed", error);

    throw error;
  }
};
