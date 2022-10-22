import { Router } from "express";
import { create, read, list, remove, update } from "../controller/category.js";

const authRouter = Router();
authRouter.post("/category", create);
authRouter.get("/category/:id", read);
authRouter.get("/category", list);
authRouter.delete("/category/:id", remove);
authRouter.put("/category/:id", update);

export default router;
