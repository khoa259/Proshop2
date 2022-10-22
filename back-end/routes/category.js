import { Router } from 'express';
import { create, read, list, remove, update } from '../controller/category.js';

const router = Router();
router.post('/category', create);
router.get("/category/:id", read);
router.get("/category", list);
router.delete("/category/:id",remove);
router.put("/category/:id", update);

export default router;