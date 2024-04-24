import { errorNotFound, requestBadError } from "../../errors/index.js";
import categoriesSevrice from "./categoriesService.js";
import { checkingImage } from "./imagesService.js";
import { checkingTalents } from "./talentService.js";

import Event from "../../api/v1/events/model.js";

const createEvents = async (req, res) => {
  const { title, date, about, tagline, venueName, keyPoint, statusEvent, tickets, categories, image, talent } = req.body;

  // cari image, category dan talent dengan field id
  await checkingImage(image);
  await checkingTalents(talent);
  await categoriesSevrice.checkingCategories(categories);

  // cari Events dengan field name
  const check = await Event.findOne({ title });

  /* 
  apabila check true / data Events sudah ada maka kita tampilkan
  error bad requesy dengan message "judul event duplikat" 
  */

  if (check) throw new requestBadError('judul event duplikat');

  const result = await Event.create({
    title, date, about, tagline, venueName, keyPoint,
    statusEvent, tickets, image, categories, talent
  });

  return result;
};

const getAllEvents = async (req) => {
  const { keyword, category, talent } = req.query;

  let condition = {};

  if (keyword) {
    condition = { ...condition, title: { $regex: keyword, $options: 'i' } };
  }

  if (category) {
    condition = { ...condition, category: category };
  }

  if (talent) {
    condition = { ...condition, talent: talent };
  }

  const result = await Event.find(condition)
    .populate({ path: 'image', select: '_id name' })
    .populate({
      path: 'categories',
      select: '_id name'
    }).populate({
      path: 'talent',
      select: '_id name role image',
      populate: { path: 'image', select: '_id name' }
    });

  return result;
};

const getOneEvents = async (req) => {
  const { id } = req.params;

  const result = await Event.findOne({
    _id: id,
  }).populate({ path: 'image', select: '_id name' })
    .populate({ path: 'categories', select: '_id name' })
    .populate({
      path: 'talent',
      select: '_id name role image',
      populate: { path: 'image', select: '_id, name' }
    });

  if (!result) throw new errorNotFound(`Tidak ada acara dengan id : ${id}`);

  return result;
};

const updateEvents = async (req) => {
  const { id } = req.params;

  const { title, date, about, tagline, venueName, keyPoint, statusEvent, tickets, categories, image, talent } = req.body;

  // cari image, category dan talent dengan field id
  await checkingImage(image);
  await checkingTalents(talent);
  await categoriesSevrice.checkingCategories(categories);

  const check = await Event.findOne({
    title,
    _id: { $ne: id }
  });

  if (check) throw new requestBadError('judul event duplikat');

  const result = await Event.findOneAndUpdate({
    _id: id
  }, {
    title, date, about, tagline, venueName, keyPoint, statusEvent, tickets, categories, image, talent
  }, { new: true, runValidators: true }
  );

  if (!result) throw new errorNotFound(`Tidak ada acara dengan id : ${id}`);

  return result;
};

const deleteEvents = async (req) => {
  const { id } = req.params;

  const result = await Event.findOne({
    _id: id
  });

  if (!result) throw new errorNotFound(`tidak ada event dengan id : {id}`);

  await result.deleteOne();

  return result;
};

export { createEvents, getAllEvents, getOneEvents, updateEvents, deleteEvents };
