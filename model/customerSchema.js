import mongoose from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "A customer must have a name "],
  },
  date: {
    type: Date,
  },
  email: {
    type: "String",
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },

  password: {
    type: "String",
    required: [true, "Password is required"],
    minlength: 6,
    select: false,
  },

  date: { type: Date, default: Date.now },
});

customerSchema.pre("save", function (next) {
  let customer = this;

  // only hash the password if it has been modified (or is new)
  if (!customer.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(customer.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      customer.password = hash;
      next();
    });
  });
});





const customer = mongoose.model("customer", customerSchema);

export default customer;
