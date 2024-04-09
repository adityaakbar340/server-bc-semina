import mongoose, { Schema, model } from 'mongoose';

let imageSchema = Schema(
  {
    name: { type: String }
  },
  { timestamps: true }
);

export default model('Image', imageSchema);