import express from "express";
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';
import { notFound } from "./app/middlewares/not-found.js";
import errorHandleMiddleware from "./app/middlewares/handle-error.js";
import router_categories from "./app/api/v1/categories/router.js";
import router_images from "./app/api/v1/images/router.js";
import routes_buckets from "./app/api/s3/buckets/routes.js";
import router_talents from "./app/api/v1/talents/router.js";
import router_events from "./app/api/v1/events/router.js";
import routes_organizer from "./app/api/v1/organizer/router.js";
import routes_auth from "./app/api/v1/auth/router.js";



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
app.use(v1, router_images);
app.use(v1, routes_buckets);
app.use(v1, router_talents);
app.use(v1, router_events);
app.use(v1, routes_organizer);
app.use(v1, routes_auth);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);




export default app;
