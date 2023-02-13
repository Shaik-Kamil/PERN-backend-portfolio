const express = require('express');
const games = express.Router();

const {
  checkTitle,
  checkBoolean,
  checkImage,
} = require('../validation/helper');

const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require('../queries/games');

// Index

games.get('/', async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json(allGames);
  } else res.status(500).json({ error: 'Invalid request' });
});

// Show

games.get('/:id', async (req, res) => {
  const { id } = req.params;
  const game = await getGame(id);
  if (!game.message) {
    res.status(200).json(game);
  } else res.status(500).json({ error: 'Not Found' });
});

// Create

games.post('/', checkTitle, checkBoolean, checkImage, async (req, res) => {
  console.log('hello', req.body);
  try {
    const game = await createGame(req.body);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: 'error ' });
  }
});

// Delete

games.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    res.status(200).json(deletedGame);
  } catch (error) {
    res.status(500).json({ error: 'invalid request' });
  }
});

// Update

games.put('/:id', checkTitle, checkBoolean, checkImage, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = await updateGame(id, req.body);
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});
module.exports = games;
