import e from "express";
import { create, destroy, getById, getData, update } from "./controller.js";
import { authenticateUser, authorizeRoles } from "../../../middlewares/auth.js";

const router_categories = e.Router();

router_categories.get('/categories',
  authenticateUser,
  authorizeRoles('organizer'),
  getData);
router_categories.get('/categories/:id',
  authenticateUser,
  authorizeRoles('organizer'),
  getById);
router_categories.put('/categories/:id',
  authenticateUser,
  authorizeRoles('organizer'),
  update);
router_categories.post('/categories', authenticateUser, create);
router_categories.delete('/categories/:id', destroy);

export default router_categories;