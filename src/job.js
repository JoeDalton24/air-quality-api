import { CronJob } from "cron";
import { getAirQuailty } from "./services/airServices.js";
import { AirQualityModel } from "./model/airQualityModel.js";
import { Cron } from "../config/cron.js";

export const job = new CronJob(
  Cron.EVRY_MINUTE,
  async function () {
    try {
      const result = await getAirQuailty(48.856613, 2.352222);

      if (result) {
        await AirQualityModel.create({ ...result.Pollution });
      }

      console.log("Paris zone air quality job run");
    } catch (error) {
      console.log("error on cron jobs");
    }
  },
  null,
  true,
  "America/Los_Angeles"
);
