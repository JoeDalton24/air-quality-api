import express from "express";
import airRoutes from "./routes/airRoutes.js";
import { Config } from "../config/config.js";
import { dbConnection } from "./db_connection.js";
import { job } from "./job.js";
import swaggerDocs from "./utils/swagger.js";

const app = express();

// connection to database
await dbConnection();

app.use("api/", airRoutes);

// cron job to check Paris zone air quality;
job.start();

app.listen(Config.PORT ?? 8000, () => {
  console.log(`server is running on port ${Config.PORT ?? 8000} 🚀✅`);

  swaggerDocs(app, Config.PORT ?? 8000);
});
