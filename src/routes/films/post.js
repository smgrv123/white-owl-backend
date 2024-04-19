import express from 'express';

import { films } from '../../schema/films.js';

const postFilmsRouter = express.Router();

postFilmsRouter.post('/', async (req, res) => {
  console.log('films', JSON.stringify(req.body));
  const film = new films(req.body);
  try {
    const saved = await film.save();
    res.send(saved);
  } catch (error) {
    res.send(error);
  }
});

export { postFilmsRouter };
