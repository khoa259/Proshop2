
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./database/db.js";
import productRoutes from "./routes/product.js";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import uploadRoutes from "./routes/upload.js";
import fileUpload from "express-fileupload";


const app = express();
app.use(fileUpload({
    useTempFiles: true
}))
connectDB();
app.use(cors());
app.use(bodyParser.json()); 
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/upload", uploadRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running Port ${port}`));
