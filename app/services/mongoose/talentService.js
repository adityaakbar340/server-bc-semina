// import model Talents
import Talents from "../../api/v1/talents/model.js";
import { errorNotFound, requestBadError } from "../../errors/index.js";
import { checkingImage } from "./imagesService.js";

// import custom error not found dan bad request


const getAllTalents = async (req) => {
  const { keyword } = req.query;

  // let condition = { organizer: req.user.organizer };
  let condition = {};

  if (keyword) {
    condition = { ...condition, name: { $regex: keyword, $options: 'i' } };
  }

  const result = await Talents.find(condition)
    .populate({
      path: 'image',
      select: '_id name',
    })
    .select('_id name role image');

  return result;
};

const createTalents = async (req) => {
  const { name, role, image } = req.body;

  // cari image dengan field image
  await checkingImage(image);

  // cari talents dengan field name
  // const check = await Talents.findOne({ name, organizer: req.user.organizer });
  const check = await Talents.findOne({ name });

  // apa bila check true / data talents sudah ada maka kita tampilkan error bad request dengan message pembicara duplikat
  if (check) throw new requestBadError('pembicara nama duplikat');

  const result = await Talents.create({
    name,
    image,
    role,
    // organizer: req.user.organizer,
  });

  return result;
};

const getOneTalents = async (req) => {
  const { id } = req.params;

  const result = await Talents.findOne({
    _id: id,
    // organizer: req.user.organizer,
  })
    .populate({
      path: 'image',
      select: '_id name',
    })
    .select('_id name role image');

  if (!result)
    throw new errorNotFound(`Tidak ada pembicara dengan id :  ${id}`);

  return result;
};

const updateTalents = async (req) => {
  const { id } = req.params;
  const { name, image, role } = req.body;

  // cari image dengan field image
  await checkingImage(image);

  // cari talents dengan field name dan id selain dari yang dikirim dari params
  const check = await Talents.findOne({
    name,
    // organizer: req.user.organizer,
    _id: { $ne: id },
  });

  // apa bila check true / data talents sudah ada maka kita tampilkan error bad request dengan message pembicara nama duplikat
  if (check) throw new requestBadError('pembicara nama duplikat');

  const result = await Talents.findOneAndUpdate(
    { _id: id },
    {
      name,
      image,
      role,
      // organizer: req.user.organizer
    },
    { new: true, runValidators: true }
  );

  // jika id result false / null maka akan menampilkan error `Tidak ada pembicara dengan id` yang dikirim client
  if (!result)
    throw new errorNotFound(`Tidak ada pembicara dengan id :  ${id}`);

  return result;
};

const deleteTalents = async (req) => {
  const { id } = req.params;

  const result = await Talents.findOne({
    _id: id,
    // organizer: req.user.organizer,
  });

  if (!result)
    throw new errorNotFound(`Tidak ada pembicara dengan id :  ${id}`);

  await result.deleteOne();

  return result;
};

const checkingTalents = async (id) => {
  const result = await Talents.findOne({ _id: id });

  if (!result)
    throw new errorNotFound(`Tidak ada pembicara dengan id :  ${id}`);

  return result;
};

export {
  getAllTalents,
  createTalents,
  getOneTalents,
  updateTalents,
  deleteTalents,
  checkingTalents,
};