import dotenv from "dotenv";

dotenv.config();

export const Config = {
  AIR_QUALITY_TOKEN: process.env.air_quality_token,
  PORT: parseInt(process.env.port),
  DB_URI: process.env.db_uri,
};
