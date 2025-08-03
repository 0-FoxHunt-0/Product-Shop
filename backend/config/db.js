/**
 * Database configuration and connection setup
 * Handles MongoDB connection using Mongoose
 */

import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * Uses MONGO_URI from environment variables
 * Exits process on connection failure
 */
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
