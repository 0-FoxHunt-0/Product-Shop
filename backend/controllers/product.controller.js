/**
 * Product controller functions
 * Handles all CRUD operations for products
 */

import Product from "../models/product.model.js";
import mongoose from "mongoose";

/**
 * Get all products from database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};

/**
 * Create a new product
 * @param {Object} req - Express request object (contains product data in body)
 * @param {Object} res - Express response object
 */
export const createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create product" });
  }
};

/**
 * Delete a product by ID
 * @param {Object} req - Express request object (contains product ID in params)
 * @param {Object} res - Express response object
 */
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product ID" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: deletedProduct,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * Update a product by ID
 * @param {Object} req - Express request object (contains product ID in params and update data in body)
 * @param {Object} res - Express response object
 */
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true, // Returns the updated document
    });
    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update product" });
  }
};
