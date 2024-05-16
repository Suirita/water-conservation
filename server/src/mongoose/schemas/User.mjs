import mongoose from "mongoose";

// Define the schema for the Users collection
const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    counter: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    daily_consummation: {
      type: Number,
      required: true,
    },
    daily_bill: {
      type: Number,
      required: true,
    },
    monthly_consummation: {
      type: [
        {
          month: {
            type: String,
            required: true,
          },
          consummation: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
    monthly_bill: {
      type: [
        {
          month: {
            type: String,
            required: true,
          },
          consummation: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
    Points: {
      type: Number,
      required: true,
    },
  },
  { collection: "Users" }
);

// Create the Users model
const Users = mongoose.model("Users", UsersSchema);

export default Users;
