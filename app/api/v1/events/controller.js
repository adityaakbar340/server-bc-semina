import { StatusCodes } from "http-status-codes";
import { createEvents, deleteEvents, getAllEvents, getOneEvents, updateEvents } from "../../../services/mongoose/eventsService.js";


const index = async (req, res, next) => {
  try {
    const result = await getAllEvents(req);

    res.status(StatusCodes.OK).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createEvents(req);

    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res) => {
  const result = await getOneEvents(req);

  res.status(StatusCodes.OK).json({
    data: result
  });
};

const update = async (req, res) => {
  const result = await updateEvents(req);

  res.status(StatusCodes.OK).json({
    message: 'Data berhasil di update!',
    data: result
  });
};

const destroy = async (req, res) => {
  const result = await deleteEvents(req);

  res.status(StatusCodes.OK).json({
    message: 'Event berhasil dihapus'
  });
};

export { create, index, getOne, update, destroy };
