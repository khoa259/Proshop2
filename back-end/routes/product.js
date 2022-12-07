import express from "express";
import { Router } from "express";
import upload from "../middleware/multer.js";
import { create, update, remove, list, read, deleteManyUser } from "../controller/product.js";
const router = Router();

router.post("/", create);
router.get("/", list);
router.get("/:productId", read);
router.put("/:productId", update);
router.delete("/:productId", remove);
router.delete("/", deleteManyUser);
export default router;
