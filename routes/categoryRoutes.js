import express from "express";
import { getAllCategories, getCategoryById } from "../controllers/categoryController.js";

const router = express.Router();

//Get /categories -> get all categories
router.get("/", getAllCategories);

// Get /categories/:id -> get category by ID
router.get("/:id", getCategoryById);


export default router;