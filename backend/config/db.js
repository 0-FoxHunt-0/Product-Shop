/**
 * Database configuration and connection setup
 * Handles MongoDB connection using Mongoose
 */

import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * Uses mongo_uri from environment variables
 * Exits process on connection failure
 */
export const connectDB = async () => {
  try {
    const mongoUri =
      process.env.mongo_uri || process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!mongoUri) {
      console.error(
        "MongoDB connection string not found. Please set mongo_uri environment variable."
      );
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};
