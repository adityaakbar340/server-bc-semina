import { createImages } from "../../../services/mongoose/imagesService.js";

import { StatusCodes } from "http-status-codes";

const create = async (req, res, next) => {
  try {
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export default create;