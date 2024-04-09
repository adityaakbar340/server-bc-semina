import 'dotenv/config';


const configEnv = {
  urlDb: process.env.URL_MONGODB_DEV,
  portServer: process.env.PORT
};
// export const urlDb = process.env.URLMONGO_DB;
// export const PORT_SERVER = process.env.PORT;

export default configEnv;