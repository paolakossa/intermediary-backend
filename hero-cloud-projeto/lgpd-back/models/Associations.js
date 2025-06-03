import User from "./User.js";
import Teacher from "./Teacher.js";
import Course from "./Course.js";
import Evalutation from "./Evaluation.js";

const associations = () => {
  Course.hasMany(Teacher);
  User.hasMany(Evalutation);
  Course.hasMany(Evalutation);
};
const factory = {
  associations,
};
export default factory;
