import express from 'express';

import { films } from '../../schema/films.js';

const getFilmsRouter = express.Router();

getFilmsRouter.get('/', async (req, res) => {
  const categoryName = req.query.categoryName;
  try {
    const getFilmDetails = await films.find();
    if (categoryName) {
      const getCategoryFilmDetails = getFilmDetails.filter((i) => i.category === categoryName);
      res.send(getCategoryFilmDetails);
    } else {
      if (getFilmDetails.length > 0) res.json(getFilmDetails);
      else res.send('No Films Found');
    }
  } catch (error) {
    res.send(error);
  }
});

export { getFilmsRouter };
