import express from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

// POST PRODUCT
router.post("/", createProduct);

// GET PRODUCTS
router.get("/", getProducts);

// GET PRODUCT
router.get("/:id", getProduct);

// UPDATE PRODUCT
router.patch("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
