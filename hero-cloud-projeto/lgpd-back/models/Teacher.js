import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Teacher = sequelize.define("teachers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {underscored: true});

export default Teacher;
