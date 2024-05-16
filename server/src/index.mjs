// Packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
app.get("/user/all", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// User login
app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All the fields are required" });
  }
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return next(err);
      }
      if (result) {
        // Passwords match
        const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successful" });
      }
    });
  } catch (err) {
    next(err);
  }
});

// User Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

// User information
app.get("/user", async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.user_id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
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
