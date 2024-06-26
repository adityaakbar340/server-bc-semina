import { createTalents, deleteTalents, getAllTalents, getOneTalents, updateTalents } from "../../../services/mongoose/talentService.js";
import { StatusCodes } from "http-status-codes";

const create = async (req, res, next) => {
  try {
    const result = await createTalents(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export { create, index, find, update, destroy };