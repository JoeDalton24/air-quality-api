import express from "express";
import { airQualityController } from "../controllers/airController.js";

const router = express.Router();

router.get("/air_quality", airQualityController);

export default router;
