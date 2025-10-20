// Note: Currently, only GET routes are implemented (read-only).
// In the future, POST, PUT, and DELETE routes can be added if needed.

import pool from "../db/pool.js";

export const getAllFeatures = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM features");
    res.json(result.rows); //Send the list of features as JSON response
  } catch (error) {
    console.error("Error fetching features:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getFeatureById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM features WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Feature not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching feature by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
