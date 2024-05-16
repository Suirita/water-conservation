import mongoose from "mongoose";

// Define the schema for the Cities collection
const CitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    water_level: {
      type: String,
      required: true,
    },
  },
  { collection: "Cities" }
);

// Create the cities model
const Cities = mongoose.model("Cities", CitiesSchema);

export default Cities;
