// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const gameController = require('./controller/gameController');
const morgan = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// Game ROUTES
app.use('/games', gameController);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Games Collection');
});

// Error
app.get('*', (req, res) => {
  res.status(404).send('Page does not exist');
});
// EXPORT
module.exports = app;
