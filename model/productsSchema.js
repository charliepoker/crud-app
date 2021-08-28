import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: "String",
    required: [true, "a product must have a name"],
  },
  description: {
    type: "String",
    required: [true, "a product must have a description"],
  },
  sku: { type: "String", required: [true, "a product must have an sku"] },
  weight: { type: "String", required: [true, "a product must have a weight"] },
  price: { type: "String", required: [true, "a product must have a price"] },
  quantity: {
    type: "String",
    required: [true, "a product must have a quantity"],
  },
  imageURL: {
    type: "String",
    required: [true, "a product must have an image"],
  },
});

const product = mongoose.model("product", productSchema);

export default product;
