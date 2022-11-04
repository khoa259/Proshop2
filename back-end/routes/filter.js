import express from "express";
import filterController from "../controllers/filter";

const router = express.Router();
router.get("/", filterController.getNewArrivals);
router.post("/search", filterController.searchByQueryType);

export default router;
