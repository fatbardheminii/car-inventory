import express from "express";
import { getAllFeatures, getFeatureById } from "../controllers/featureController.js";

const router = express.Router();

//GET /features -> get all features
router.get("/", getAllFeatures);

//GET /features/:id -> get feature by ID
router.get("/:id", getFeatureById); 

export default router;