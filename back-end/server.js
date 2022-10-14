import express from "express";
import connectDB from "./database/db.js";
const app = express();

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running Port ${port}`));
