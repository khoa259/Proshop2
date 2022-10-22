import { Router } from 'express';
import { create, read, list, remove, update } from '../controller/category.js';

const router = Router();
router.post('/', create);
router.get("/:id", read);
router.get("/", list);
router.delete("/:id",remove);
router.put("/:id", update);

export default router;