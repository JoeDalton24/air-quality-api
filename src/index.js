import express from "express";
import airRoutes from "./routes/airRoutes.js";
import { Config } from "../config/config.js";
import { dbConnection } from "./db_connection.js";
import { job } from "./job.js";

const app = express();

// connection to database
await dbConnection();

app.use(airRoutes);

// cron job to check Paris zone air quality;
job.start();

app.listen(Config.PORT ?? 8000, () => {
  console.log(`server is running on port ${Config.PORT ?? 8000} 🚀✅`);
});
