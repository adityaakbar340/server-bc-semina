import categoriesSevrice from "../../../services/mongoose/categoriesService.js";
import { StatusCodes } from 'http-status-codes';


export const create = async (req, res, next) => {
  try {
    const result = await categoriesSevrice.createCategories(req);
    res.status(StatusCodes.CREATED).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const getData = async (req, res, next) => {
  try {
    const result = await categoriesSevrice.getAllCategories();
    res.status(StatusCodes.OK).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const result = await categoriesSevrice.getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const checkingCategories = await categoriesSevrice.updateCategories(req);
    return res.status(StatusCodes.OK).json({
      message: 'Updated Succesfully',
      data: checkingCategories
    });
  } catch (error) {
    next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const result = await categoriesSevrice.deleteCategories(req);
    return res.status(StatusCodes.OK).json({
      message: 'Deleted Successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }

};