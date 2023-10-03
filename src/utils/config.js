import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: process.env.PORT,
  URL_MONGODB_ATLAS: process.env.URL_MONGODB_ATLAS,
};
