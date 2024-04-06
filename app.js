// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

import express from "express";
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';

import indexRouter from "./routes/index.js";
import usersRouter from './routes/users.js';
import labRouter from './routes/lab.js';

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lab', labRouter);

export default app;
