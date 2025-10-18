const pool = require("./db/pool");

async function seedDatabase() {
  try {
    console.log("Seeding started...");

    const categories = [
      { name: "Small Cars", description: "Compact sedans and hatchbacks" },
      {
        name: "Luxury",
        description: "High-end vehicles with premium features",
      },
      { name: "SUV", description: "Sport utility vehicles" },
      { name: "Electric", description: "Fully electric cars" },
      { name: "Hybrid", description: "Hybrid vehicles (gas + electric)" },
      { name: "Pickup", description: "Pickup trucks and utility vehicles" },
    ];

    const categoryMap = {}; 

    for (const category of categories) {
      const result = await pool.query(
        "INSERT INTO categories(name, description) VALUES($1, $2) RETURNING id",
        [category.name, category.description]
      );
      categoryMap[category.name] = result.rows[0].id;
    }

    console.log("Categories inserted:", categoryMap);

    const features = [
      { name: "GPS", description: "Navigation system" },
      { name: "Bluetooth", description: "Wireless connectivity" },
      { name: "Leather Seats", description: "Premium interior" },
      { name: "Sunroof", description: "Open roof option" },
      { name: "Heated Seats", description: "Seats with heating function" },
      { name: "Backup Camera", description: "Rear-view camera" },
      { name: "AWD", description: "All-wheel drive" },
      { name: "Cruise Control", description: "Automatic speed control" },
      { name: "Keyless Entry", description: "No key needed to unlock/start" },
      { name: "Parking Sensors", description: "Sensors to assist parking" },
      { name: "Touchscreen", description: "Central infotainment touchscreen" },
      { name: "Premium Audio", description: "High-quality audio system" },
    ];
    const featureMap = {};

    for (const feature of features) {
      const result = await pool.query(
        "INSERT INTO features(name, description) VALUES($1, $2) RETURNING id",
        [feature.name, feature.description]
      );
      featureMap[feature.name] = result.rows[0].id;
    }

    console.log("Features inserted:", featureMap);

    const cars = [
      {
        brand: "Tesla",
        model: "Model 3",
        year: 2023,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 120,
        available: true,
        description: "Compact luxury electric sedan",
      },
      {
        brand: "Tesla",
        model: "Model S",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 200,
        available: true,
        description: "Luxury electric sedan",
      },
      {
        brand: "BMW",
        model: "X5",
        year: 2021,
        fuel_type: "Gasoline",
        transmission: "Automatic",
        price_per_day: 150,
        available: true,
        description: "Mid-size luxury SUV",
      },
      {
        brand: "BMW",
        model: "iX3",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 160,
        available: true,
        description: "Electric SUV",
      },
      {
        brand: "Audi",
        model: "Q7",
        year: 2021,
        fuel_type: "Diesel",
        transmission: "Automatic",
        price_per_day: 140,
        available: true,
        description: "Large SUV with premium features",
      },
      {
        brand: "Audi",
        model: "e-tron GT",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 210,
        available: true,
        description: "High-performance electric sedan",
      },
      {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        fuel_type: "Gasoline",
        transmission: "Manual",
        price_per_day: 70,
        available: true,
        description: "Reliable small sedan",
      },
      {
        brand: "Toyota",
        model: "Prius",
        year: 2021,
        fuel_type: "Hybrid",
        transmission: "Automatic",
        price_per_day: 90,
        available: true,
        description: "Hybrid eco-friendly vehicle",
      },
      {
        brand: "Mercedes",
        model: "C-Class",
        year: 2021,
        fuel_type: "Gasoline",
        transmission: "Automatic",
        price_per_day: 130,
        available: true,
        description: "Luxury sedan",
      },
      {
        brand: "Mercedes",
        model: "EQC",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 180,
        available: true,
        description: "Electric luxury SUV",
      },
      {
        brand: "Ford",
        model: "F-150",
        year: 2020,
        fuel_type: "Gasoline",
        transmission: "Manual",
        price_per_day: 100,
        available: true,
        description: "Popular pickup truck",
      },
      {
        brand: "Ford",
        model: "Mustang Mach-E",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 160,
        available: true,
        description: "Sporty electric SUV",
      },
      {
        brand: "Nissan",
        model: "Leaf",
        year: 2021,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 80,
        available: true,
        description: "Affordable electric car",
      },
      {
        brand: "Nissan",
        model: "Rogue",
        year: 2020,
        fuel_type: "Gasoline",
        transmission: "Automatic",
        price_per_day: 95,
        available: true,
        description: "Compact SUV",
      },
      {
        brand: "Chevrolet",
        model: "Bolt EV",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 85,
        available: true,
        description: "Small electric hatchback",
      },
      {
        brand: "Chevrolet",
        model: "Tahoe",
        year: 2021,
        fuel_type: "Gasoline",
        transmission: "Automatic",
        price_per_day: 120,
        available: true,
        description: "Large SUV, family-friendly",
      },
      {
        brand: "Honda",
        model: "Civic",
        year: 2020,
        fuel_type: "Gasoline",
        transmission: "Manual",
        price_per_day: 70,
        available: true,
        description: "Compact sedan",
      },
      {
        brand: "Honda",
        model: "Accord",
        year: 2021,
        fuel_type: "Hybrid",
        transmission: "Automatic",
        price_per_day: 90,
        available: true,
        description: "Hybrid sedan with comfort",
      },
      {
        brand: "Porsche",
        model: "Taycan",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 250,
        available: true,
        description: "High-end electric sports car",
      },
      {
        brand: "Jaguar",
        model: "I-Pace",
        year: 2022,
        fuel_type: "Electric",
        transmission: "Automatic",
        price_per_day: 230,
        available: true,
        description: "Luxury electric SUV",
      },
    ];

    const carMap = {}; 

    for (const car of cars) {
      const result = await pool.query(
        "INSERT INTO cars(brand, model, year, fuel_type, transmission, price_per_day, available, description) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id",
        [
          car.brand,
          car.model,
          car.year,
          car.fuel_type,
          car.transmission,
          car.price_per_day,
          car.available,
          car.description,
        ]
      );
      carMap[`${car.brand} ${car.model}`] = result.rows[0].id;
    }

    console.log("Cars inserted:", carMap);

    const carCategoryMapping = {
      "Tesla Model 3": ["Electric", "Luxury"],
      "Tesla Model S": ["Electric", "Luxury"],
      "BMW X5": ["SUV", "Luxury"],
      "BMW iX3": ["SUV", "Electric", "Luxury"],
      "Audi Q7": ["SUV", "Luxury"],
      "Audi e-tron GT": ["Electric", "Luxury"],
      "Toyota Corolla": ["Small Cars"],
      "Toyota Prius": ["Small Cars", "Hybrid"],
      "Mercedes C-Class": ["Luxury"],
      "Mercedes EQC": ["SUV", "Electric", "Luxury"],
      "Ford F-150": ["Pickup"],
      "Ford Mustang Mach-E": ["SUV", "Electric"],
      "Nissan Leaf": ["Small Cars", "Electric"],
      "Nissan Rogue": ["SUV"],
      "Chevrolet Bolt EV": ["Small Cars", "Electric"],
      "Chevrolet Tahoe": ["SUV"],
      "Honda Civic": ["Small Cars"],
      "Honda Accord": ["Small Cars", "Hybrid"],
      "Porsche Taycan": ["Electric", "Luxury"],
      "Jaguar I-Pace": ["SUV", "Electric", "Luxury"],
    };

    for (const [carName, catList] of Object.entries(carCategoryMapping)) {
      const carId = carMap[carName]; 
      for (const catName of catList) {
        const catId = categoryMap[catName]; 
        await pool.query(
          "INSERT INTO car_categories(car_id, category_id) VALUES($1, $2)",
          [carId, catId]
        );
      }
    }

    console.log("Car categories inserted!");

    const carFeatureMapping = {
      "Tesla Model 3": ["GPS", "Bluetooth", "Touchscreen", "Premium Audio"],
      "Tesla Model S": [
        "GPS",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
        "Leather Seats",
      ],
      "BMW X5": ["GPS", "AWD", "Sunroof", "Heated Seats", "Leather Seats"],
      "BMW iX3": ["GPS", "AWD", "Sunroof", "Bluetooth", "Touchscreen"],
      "Audi Q7": ["GPS", "AWD", "Sunroof", "Leather Seats", "Premium Audio"],
      "Audi e-tron GT": [
        "GPS",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
        "Heated Seats",
      ],
      "Toyota Corolla": ["GPS", "Bluetooth", "Backup Camera"],
      "Toyota Prius": ["GPS", "Bluetooth", "Backup Camera", "Hybrid"],
      "Mercedes C-Class": ["GPS", "Leather Seats", "Sunroof", "Premium Audio"],
      "Mercedes EQC": [
        "GPS",
        "AWD",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
      ],
      "Ford F-150": ["GPS", "AWD", "Backup Camera", "Cruise Control"],
      "Ford Mustang Mach-E": [
        "GPS",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
      ],
      "Nissan Leaf": ["GPS", "Bluetooth", "Touchscreen", "Premium Audio"],
      "Nissan Rogue": ["GPS", "AWD", "Backup Camera", "Cruise Control"],
      "Chevrolet Bolt EV": ["GPS", "Bluetooth", "Touchscreen", "Premium Audio"],
      "Chevrolet Tahoe": [
        "GPS",
        "AWD",
        "Sunroof",
        "Leather Seats",
        "Backup Camera",
      ],
      "Honda Civic": ["GPS", "Bluetooth", "Backup Camera"],
      "Honda Accord": ["GPS", "Bluetooth", "Hybrid", "Touchscreen"],
      "Porsche Taycan": [
        "GPS",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
        "Leather Seats",
        "Heated Seats",
      ],
      "Jaguar I-Pace": [
        "GPS",
        "AWD",
        "Bluetooth",
        "Touchscreen",
        "Premium Audio",
        "Leather Seats",
      ],
    };

    for (const [carName, featList] of Object.entries(carFeatureMapping)) {
      const carId = carMap[carName]; 
      for (const featName of featList) {
        const featId = featureMap[featName]; 
        await pool.query(
          "INSERT INTO car_features(car_id, feature_id) VALUES($1, $2)",
          [carId, featId]
        );
      }
    }

    console.log("Car features inserted!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end(); 
    console.log("Seeding finished!");
  }
}


seedDatabase();
