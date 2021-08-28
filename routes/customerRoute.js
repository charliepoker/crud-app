import express from "express";
const router = express.Router();
import {
  getCustomer,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controller/customer.js";

// GET CUSTOMERS
router.get("/", getCustomers);

// GET CUSTOMER
router.get("/:id", getCustomer);

// POST CUSTOMER
router.post("/", createCustomer);

// UPDATE CUSTOMER
router.patch("/:id", updateCustomer);

// DELETE CUSTOMER
router.delete("/:id", deleteCustomer);

export default router;
