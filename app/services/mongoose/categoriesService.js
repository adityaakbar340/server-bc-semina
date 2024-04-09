import Categories from "../../api/v1/categories/model.js";
import { errorNotFound, requestBadError } from "../../errors/index.js";

const categoriesSevrice = {};

categoriesSevrice.getAllCategories = async () => {
  const result = await Categories.find();

  return result;
};

categoriesSevrice.createCategories = async (req) => {
  const { name } = req.body;

  const checkNameIsExists = await Categories.findOne({ name });

  if (checkNameIsExists) throw new requestBadError('Kategori nama duplikats');

  const result = await Categories.create({ name });

  return result;
};

categoriesSevrice.getOneCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({ _id: id });

  if (!result) throw new errorNotFound(`Tidak ada kategori dengan id : ${id}`);

  return result;
};

categoriesSevrice.updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const checkingCategories = await Categories.findOne({
    name,
    _id: { $ne: id }
  });

  if (checkingCategories) throw new requestBadError('kategori nama duplikat');

  const result = await Categories.findOneAndUpdate(
    {
      _id: id
    },
    { name },
    { new: true, runValidators: true }
  );

  if (!result) throw new errorNotFound(`Tidak ada kategori dengan id: ${id}`);

  return result;
};

categoriesSevrice.deleteCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({
    _id: id
  });

  if (!result) throw new errorNotFound(`Tidak ada kategori dengan id: ${id}`);

  await result.deleteOne();

  return result;
};

export default categoriesSevrice;