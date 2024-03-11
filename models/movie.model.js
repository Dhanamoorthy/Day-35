const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
  media: [{
    type: {
      type: String,
      enum: ['Video', 'Image'],
    },
    filePath: String,
  }],
  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  artists: [{
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
    },
    skills: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    }],
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    }],
  }],
});

module.exports = mongoose.model('Movie', MovieSchema);
