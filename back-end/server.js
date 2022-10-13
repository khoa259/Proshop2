import express from "express";
const app = express();

const port = process.env.PORT || 5000;
console.log("123");

app.listen(port, () => console.log(`Server Running Port ${port}`));
