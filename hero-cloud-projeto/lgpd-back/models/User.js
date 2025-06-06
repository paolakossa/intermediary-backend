import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
  },
  { underscored: true }
);

export default User;
