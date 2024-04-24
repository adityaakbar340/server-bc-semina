import e from "express";
import signinCMS from "./controller.js";

const routes_auth = e.Router();

routes_auth.post('/signin', signinCMS);

export default routes_auth;