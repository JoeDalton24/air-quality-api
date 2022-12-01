import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *    AirQualityResponse:
 *      type: object
 *      properties:
 *        ts:
 *          type: string
 *        aqius:
 *          type: number
 *        mainus:
 *          type: string
 *        aqicn:
 *          type: number
 *        maincn:
 *          type: string
 */
const schema = new mongoose.Schema(
  {
    ts: String,
    aqius: Number,
    mainus: String,
    aqicn: Number,
    maincn: String,
  },
  { timestamps: true }
);

export const AirQualityModel = mongoose.model("air_qualities", schema);
