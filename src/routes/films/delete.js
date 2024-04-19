import { Router } from 'express';

import { films } from '../../schema/films.js';

const deleteFilmRouter = Router();

deleteFilmRouter.delete('/', async (req, res) => {
  try {
    const deleted = await films.deleteOne({ youtubeEmbedId: req.body.youtubeEmbedId });
    res.json({
      deleteCount: deleted.deletedCount,
      message: 'Object has been successfully removed'
    });
  } catch (error) {
    res.json({ message: error });
  }
});

export { deleteFilmRouter };
