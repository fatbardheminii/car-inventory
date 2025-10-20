// Note: Currently, only GET routes are implemented (read-only).
// In the future, POST, PUT, and DELETE routes can be added if needed.

import pool from "../db/pool.js";

export const getAllCategories = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM categories");
        res.json(result.rows); // Send the list of categories as JSON response
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
      console.error("Error fetching category by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
}