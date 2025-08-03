/**
 * Product routes configuration
 * Defines all API endpoints for product operations
 */

import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// GET /api/products - Retrieve all products
router.get("/", getAllProducts);

// POST /api/products - Create a new product
router.post("/", createProduct);

// DELETE /api/products/:id - Delete a product by ID
router.delete("/:id", deleteProduct);

// PUT /api/products/:id - Update a product by ID
router.put("/:id", updateProduct);

export default router;
