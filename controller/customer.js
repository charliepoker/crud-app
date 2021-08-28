import customerSchema from "../model/customerSchema.js";


// GET CUSTOMERS
export const getCustomers = async (req, res) => {
  try {
    const customers = await customerSchema.find();
    res.status(200).json({
      message: "Success",
      data: customers,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// GET CUSTOMER
export const getCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await customerSchema.findById(id);
    res.status(200).json({
      message: "Success",
      data: customer,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// POST CUSTOMERS
export const createCustomer = async (req, res) => {
  const customer = req.body;

  try {

    
    const newCustomer = new customerSchema(customer);
    await newCustomer.save();

    res.status(201).json({
      message: "success",
      data: newCustomer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};
// UPDATE CUSTOMER
export const updateCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    let customer = await customerSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Success",
      data: customer,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};

// DELETE CUSTOMER
export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    await customerSchema.findByIdAndDelete(id);

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
