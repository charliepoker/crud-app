import productSchema from "../model/productsSchema.js";

// GET PRODUCTS
export const getProducts = async (req, res) => {
  console.log("working");

  try {
    const products = await productSchema.find();
    res.status(200).json({
      message: "Success",
      data: products,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

//GET A PRODUCT
export const getProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productSchema.findById(id);
    res.status(200).json({
      message: "Success",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// POST PRODUCT
export const createProduct = async (req, res) => {
  const product = req.body;

  try {
    const newProduct = await productSchema(product);
    await newProduct.save();

    res.status(200).json({
      message: "Success",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// UPDATE A PRODUCT

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    let product = await productSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Success",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// DELETE CUSTOMER

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await productSchema.findByIdAndDelete(id);
    res.status(204).json({
      message: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: error.message,
    });
  }
};
