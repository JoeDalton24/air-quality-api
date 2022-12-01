import express from "express";
import { airQualityController } from "../controllers/airController.js";

const router = express.Router();

/**
 * @openapi
 * '/city_air_quality':
 *  get:
 *      tags:
 *      - Air Quality Info
 *      description: get information about air quality
 *      parameters:
 *          - in: query
 *            name: lat
 *            schema:
 *              type: number
 *            description: Latitude of city
 *            required: true
 *          - in: query
 *            name: lon
 *            schema:
 *              type: number
 *            description: Longitude of the city
 *            required: true
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AirQualityResponse'
 */
router.get("/city_air_quality", airQualityController);

export default router;
