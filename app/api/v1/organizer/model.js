import { model, Schema } from 'mongoose';

let organizerSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, 'Penyelenggara harus diisi']
    },
  },
  { timestamps: true }
);

export default model('Organizer', organizerSchema);