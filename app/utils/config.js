import dotenv from 'dotenv';

dotenv.config();

const configEnv = {
  urlDb: process.env.URL_MONGODB_DEV,
  portServer: process.env.PORT,
  awsEndpoint: process.env.AWS_ENDPOINT,
  awsAccess: process.env.AWS_ACCESS_KEY,
  awsSecret: process.env.AWS_SECRET_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: '1h'
};

// export const urlDb = process.env.URLMONGO_DB;
// export const PORT_SERVER = process.env.PORT;

export default configEnv;