import { Config } from "../../config/config.js";
import axios from "axios";

export const getAirQuailty = async (lat, lon) => {
  if (!lat || !lon) return {};
  try {
    const { data } =
      await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${Config.AIR_QUALITY_TOKEN}
    `);
    return { Pollution: { ...data.data.current.pollution } };
  } catch (error) {
    console.log("error services", error.message);
  }
};
