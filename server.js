import dotenv from "dotenv";
import customerRouter from "./routes/customerRoute.js";
import productRouter from "./routes/productRoute.js";
dotenv.config();

import express from "express";
import connectDb from "./config/connectdb.js";

const app = express();

app.use(express.json());

app.use("/customer", customerRouter);
app.use("/product", productRouter);

//CONNECT DATABASE
connectDb();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on => ${PORT} 😎😎`));
