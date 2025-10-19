import pool from "../db/pool.js";

export const getAllCars = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM cars");
        res.json(result.rows); // Send the list of cars as JSON response
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM cars WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Car not found" });
        }
        res.json(result.rows[0]); // Send the car details as JSON response
    } catch (error) {
        console.error("Error fetching car by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


// POST /cars → Add a new car
export const createCar = async (req, res) => {
  const {
    brand,
    model,
    year,
    fuel_type,
    transmission,
    price_per_day,
    available,
    description,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO cars
      (brand, model, year, fuel_type, transmission, price_per_day, available, description)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *`,
      [brand, model, year, fuel_type, transmission, price_per_day, available, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// PUT /cars/:id → Update an existing car
export const updateCar = async (req, res) => {
  const { id } = req.params;
  const {
    brand,
    model,
    year,
    fuel_type,
    transmission,
    price_per_day,
    available,
    description,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE cars
      SET brand=$1, model=$2, year=$3, fuel_type=$4, transmission=$5,
          price_per_day=$6, available=$7, description=$8
      WHERE id=$9
      RETURNING *`,
      [brand, model, year, fuel_type, transmission, price_per_day, available, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE /cars/:id → Remove a car
export const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM cars WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};