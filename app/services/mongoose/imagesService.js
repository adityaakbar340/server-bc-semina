import Image from "../../api/v1/images/model.js";
import { errorNotFound } from "../../errors/index.js";

const createImages = async (req, res) => {
  const result = await Image.create({
    name: req.file ? `uploads/${req.file.filename}` : 'uploads/avatar/default.jpg'
  });

  return result;
};

// tambahkan function checking Image
const checkingImage = async (id) => {
  const result = await Image.findOne({ _id: id });

  if (!result) throw new errorNotFound(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};


export { checkingImage, createImages };
