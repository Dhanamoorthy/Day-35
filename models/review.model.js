const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  rating: Number,
  comment: String,
});

module.exports = mongoose.model('Review', ReviewSchema);
