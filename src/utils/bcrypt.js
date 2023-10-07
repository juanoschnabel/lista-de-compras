import bcrypt from "bcrypt";
import config from "./config.js";
export const hashData = async (data) => {
  return bcrypt.hash(data, Number(config.SALT));
};
export const compareData = async (data, hashData) => {
  return bcrypt.compare(data, hashData);
};
