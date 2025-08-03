/**
 * Product model definition
 * Defines the schema and model for product data
 */

import mongoose from "mongoose";

/**
 * Product schema definition
 * Includes name, price, image fields with timestamps
 */
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
