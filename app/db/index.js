import mongoose from 'mongoose';
import configEnv from '../utils/config.js';

mongoose.connect(configEnv.urlDb);

const dbMongoose = mongoose.connection;

export default dbMongoose;