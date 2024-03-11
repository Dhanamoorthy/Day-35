const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: String,
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  }],
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  }],
});

module.exports = mongoose.model('Artist', ArtistSchema);
