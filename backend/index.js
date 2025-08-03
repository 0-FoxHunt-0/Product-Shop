/**
 * Main server file for Product Shop API
 * Sets up Express server with MongoDB connection and product routes
 */

import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount product routes under /api/products endpoint
app.use("/api/products", productRoutes);

// Start server and connect to database
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

export default app;
