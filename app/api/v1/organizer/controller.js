import { StatusCodes } from "http-status-codes";
import { createOrganizer, createUsers } from "../../../services/mongoose/usersService.js";

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const createCMSuser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export { createCMSOrganizer, createCMSuser };
