import express from "express";

import morgan from "morgan";
import cors from "cors";
import productRouter from "./routes/product.js"
import connectDB from "./database/db.js";
import mongoose from "mongoose";
const app = express();
//connectDB();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use('/api', productRouter);
mongoose.connect("mongodb://localhost:27017/demo-test")
    .then(() => { console.log("Ket noi Thanh Cong"); })
    .catch(err => { console.log(err); });
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running Port ${port}`));
