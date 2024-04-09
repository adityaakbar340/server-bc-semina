import e from "express";
import { create, destroy, getById, getData, update } from "./controller.js";

const router_categories = e.Router();

router_categories.get('/categories', getData);
router_categories.get('/categories/:id', getById);
router_categories.put('/categories/:id', update);
router_categories.post('/categories', create);
router_categories.delete('/categories/:id', destroy);

export default router_categories;