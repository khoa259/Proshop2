import express from "express";
const app = express();

const port = process.env.PORT || 5000;
console.log("Hello World");

app.listen(port, () => console.log(`Server Running Port ${port}`));
