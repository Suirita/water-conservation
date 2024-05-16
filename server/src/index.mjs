// Packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config({ path: ".env.local" });

// Routes


// Database connection
mongoose
  .connect(`${database_connection}`)
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
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
