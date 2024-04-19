import CORS from 'cors';
import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { deleteFilmRouter, getFilmsRouter, postFilmsRouter } from './src/routes/films/index.js';

env.config();

const app = express();
const port = 3001;

const mongoDBString = process.env.DB_CONNECT;
app.use(CORS());
app.use(express.json());

app.use('/films/get', getFilmsRouter);
app.use('/films/post', postFilmsRouter);
app.use('/films/delete', deleteFilmRouter);

app.listen(port);

try {
  await mongoose.connect(mongoDBString, {
    autoIndex: true
  });
} catch (error) {
  console.error(error);
}
