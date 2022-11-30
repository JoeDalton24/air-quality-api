import mongoose from "mongoose";

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
