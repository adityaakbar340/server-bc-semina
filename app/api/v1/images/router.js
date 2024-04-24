import e from "express";
const router_images = e.Router();
import create from "./controller.js";
import uploadMiddleware from "../../../middlewares/multer.js";

router_images.post('/images', uploadMiddleware.single('avatar'), create);

export default router_images;