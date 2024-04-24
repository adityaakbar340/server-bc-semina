import { signin } from "../../../services/mongoose/authService.js";
import { StatusCodes } from "http-status-codes";

const signinCMS = async (req, res, next) => {
  try {
    const result = await signin(req);

    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};


export default signinCMS;