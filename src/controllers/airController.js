import { getAirQuailty } from "../services/airServices.js";

export const airQualityController = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await getAirQuailty(lat, lon);

    res.send({ Result: response });
  } catch (error) {
    console.log("error controller");
  }
};
