import mongoose from "mongoose";
import { Config } from "../config/config.js";

export const dbConnection = async () => {
  try {
    await mongoose.connect(Config.DB_URI);
    console.log("database connected 🚀");
  } catch (error) {
    console.log("connection to database fail", error);
  }
};
