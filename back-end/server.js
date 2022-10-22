import express from "express";

import morgan from "morgan";
import cors from "cors";
import connectDB from "./database/db.js";
import productRoutes from "./routes/product.js";
import authRoutes from "./routes/auth.js";
const app = express();
connectDB();
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running Port ${port}`));
