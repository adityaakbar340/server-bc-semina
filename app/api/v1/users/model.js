import mongoose, { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

let usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus diisi']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email harus diisi']
    },
    password: {
      type: String,
      required: [true, 'Password harus diisi'],
      minlength: 6
    },
    role: {
      type: String,
      enum: ['admin', 'organizer', 'owner'],
      default: 'admin'
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true,
    },
  },
  { timestamps: true }
);

usersSchema.pre('save', async function (next) {
  const User = this;
  if (User.isModified('password')) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default model('Users', usersSchema);