import Users from '../../api/v1/users/model.js';
import Organizers from '../../api/v1/organizer/model.js';
import { requestBadError } from '../../errors/index.js';

const createOrganizer = async (req) => {
  const { organizer, role, email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    throw new requestBadError('Password dan confirmation password tidak cocok');
  }

  // Check if email is already registered
  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    throw new requestBadError('Email sudah terdaftar');
  }

  const result = await Organizers.create({ organizer });

  // Create organizer only if email is not registered
  const users = await Users.create({ email, name, role, password, organizer: result._id });
  delete users._doc.password;
  return users;
};

const createUsers = async (req, res) => {
  const { name, password, role, confirmPassword, email } = req.body;

  if (password !== confirmPassword) {
    throw new requestBadError('Password dan confirmation password tidak cocok');
  }

  const result = await Users.create({
    name, email,
    organizer: req.user.organizer,
    password, role
  });

  return result;
};

export { createOrganizer, createUsers };