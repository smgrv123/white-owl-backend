import CORS from 'cors';
import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { deleteFilmRouter, getFilmsRouter, postFilmsRouter } from './src/routes/films/index.js';

import { getImageKitAutParams } from './src/routes/auth/get.js';

env.config();

const app = express();
const port = 3001;

const mongoDBString = process.env.DB_CONNECT;
app.use(CORS());
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/films/get', getFilmsRouter);
app.use('/films/post', postFilmsRouter);
app.use('/films/delete', deleteFilmRouter);

app.use('/auth', getImageKitAutParams);

app.listen(port);

try {
  await mongoose.connect(mongoDBString, {
    autoIndex: true
  });
} catch (error) {
  console.error(error);
}
