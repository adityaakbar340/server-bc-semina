import e from "express";
import { create, destroy, getOne, index, update } from "./controller.js";

const router_events = e.Router();

router_events.get('/events', index);
router_events.post('/events', create);
router_events.get('/events/:id', getOne);
router_events.put('/events/:id', update);
router_events.delete('/events/:id', destroy);

export default router_events;