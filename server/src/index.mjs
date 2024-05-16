// Packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config({ path: ".env.local" });

// Schemas
import Users from "./mongoose/schemas/User.mjs";
import Cities from "./mongoose/schemas/City.mjs";

// Database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    console.log("Connected to database");
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User routes
app.get("/user", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// City routes
app.get("/city", async (req, res, next) => {
  try {
    const cities = await Cities.find();
    res.json(cities);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});
