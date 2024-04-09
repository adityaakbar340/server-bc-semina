import express from "express";
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';
import { notFound } from "./app/middlewares/not-found.js";
import errorHandleMiddleware from "./app/middlewares/handle-error.js";
import router_categories from "./app/api/v1/categories/router.js";


const app = express();
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// router
const v1 = '/api/v1/cms';

const notFoundMiddleware = notFound;
const handleErrorMiddleware = errorHandleMiddleware;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', (req, res) => {
//   res.status(200).json({
//     message: 'Selamat datang di SEMINA API'
//   });
// });

app.use(v1, router_categories);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);




export default app;
