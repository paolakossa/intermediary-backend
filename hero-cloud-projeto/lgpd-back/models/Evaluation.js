import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Evalutation = sequelize.define(
  "evaluations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Evalutation;
