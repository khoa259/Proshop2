import express from "express";

import morgan from "morgan";
import cors from "cors";
import connectDB from "./database/db.js";
import productRoutes from './routes/product.js'
import categoryRoutes from './routes/category.js'
connectDB();
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running Port ${port}`));
