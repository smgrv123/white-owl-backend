import mongoose from 'mongoose';

const filmsSchema = new mongoose.Schema({
  youtubeEmbedId: {
    type: String,
    required: true
  },
  directorsName: {
    type: String,
    required: false
  },
  fileTitle: {
    type: String,
    required: true
  },
  heroImageId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const films = mongoose.model('films', filmsSchema);

export { films };
