// import { DataTypes, Model, Optional } from "sequelize";

// import { sequelize } from "../config/db";

// interface CompanyAttributes {
//   id: number;
//   name: string;
//   industry: string;
// }

// interface CompanyCreationAttributes extends Optional<CompanyAttributes, "id"> {}

// export class Company
//   extends Model<CompanyAttributes, CompanyCreationAttributes>
//   implements CompanyAttributes
// {
//   public id!: number;
//   public name!: string;
//   public industry!: string;
// }

// Company.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     industry: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: "companies",
//   },
// );
import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    industry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Company = mongoose.model("Company", CompanySchema);