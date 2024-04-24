import e from "express";
import { createCMSOrganizer, createCMSuser } from "./controller.js";
import { authenticateUser, authorizeRoles } from "../../../middlewares/auth.js";

const routes_organizer = e.Router();

routes_organizer.post('/organizer', createCMSOrganizer);
routes_organizer.post('/users', authenticateUser, createCMSuser);

export default routes_organizer;