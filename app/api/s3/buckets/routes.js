import e from "express";
import getListBucket from "./controller.js";

const routes_buckets = e.Router();

routes_buckets.get('/buckets', getListBucket);

export default routes_buckets;