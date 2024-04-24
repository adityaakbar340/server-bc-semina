import { StatusCodes } from "http-status-codes";
import listBucket from "../../../services/s3/listBucket.js";

const getListBucket = async (req, res) => {
  try {
    const result = await listBucket();

    return res.status(StatusCodes.OK).json({
      data: result
    });
  } catch (error) {
    console.info(error);
  }
};

export default getListBucket;