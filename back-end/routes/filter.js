import express from "express";
import { getNewArrivals, searchByQueryType } from "../controller/filter.js";
const filterRoutes = express.Router();
filterRoutes.get("/", getNewArrivals);
filterRoutes.post("/search", searchByQueryType);

export default filterRoutes;
