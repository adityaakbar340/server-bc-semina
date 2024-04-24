import e from "express";
import { create, destroy, find, index, update } from "./controller.js";
const router_talents = e.Router();
// const {
//   authenticateUser,
//   authorizeRoles,
// } = require('../../../middlewares/auth');

router_talents.get('/talents', index);
router_talents.get('/talents/:id', find);
router_talents.put('/talents/:id', update);
router_talents.delete('/talents/:id', destroy);
router_talents.post('/talents', create);

export default router_talents;