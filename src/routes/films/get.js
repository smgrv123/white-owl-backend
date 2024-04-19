import express from 'express';

import { films } from '../../schema/films.js';

const getFilmsRouter = express.Router();

getFilmsRouter.get('/', async (req, res) => {
  try {
    const getFilmDetails = await films.find();
    if (getFilmDetails.length > 0) res.json(getFilmDetails);
    else res.send('No Films Found');
  } catch (error) {
    res.send('Error', error);
  }
});

export { getFilmsRouter };
