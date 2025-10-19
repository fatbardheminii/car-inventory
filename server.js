import express from "express";
import carRoutes from "./routes/carRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use car routes for any requests to /cars
app.use("/cars", carRoutes);
// Use category routes for any requests to /categories
app.use("/categories", categoryRoutes); 
// Use features routes for any requests to /features
app.use("/features", featureRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});