import mongoose from "mongoose";

function connectDB() {
  const DB_URL = process.env.DB_URL;

  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database is Connected 😎😎`);
    })
    .catch((err) => console.log(err.message));
}

export default connectDB;
