import { Router } from "express";
import { create, list, read, remove, update } from "../controller/product.js";
const router = Router();
router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', create);
router.delete('/products/:id', remove);
router.put('/products/:id', update);
export default router;