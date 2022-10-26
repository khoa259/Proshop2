import { Router } from "express";
import { create, read, list, remove, update } from "../controller/category.js";

const categoryRouter = Router();
categoryRouter.post("/", create);
categoryRouter.get("/:id", read);
categoryRouter.get("/", list);
categoryRouter.delete("/:id", remove);
categoryRouter.put("/:id", update);

export default categoryRouter;
