const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/imdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use body-parser middleware
app.use(bodyParser.json());

// Import routes
const movieRoutes = require('./routes/movie.routes');
const genreRoutes = require('./routes/genre.routes');
const reviewRoutes = require('./routes/review.routes');
const userRoutes = require('./routes/user.routes');
const artistRoutes = require('./routes/artist.routes');
const skillRoutes = require('./routes/skill.routes');
const roleRoutes = require('./routes/role.routes');

// Use routes
app.use('/movies', movieRoutes);
app.use('/genres', genreRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);
app.use('/artists', artistRoutes);
app.use('/skills', skillRoutes);
app.use('/roles', roleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
