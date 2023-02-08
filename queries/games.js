const db = require('../db/dbConfig');

const getAllGames = async () => {
  try {
    const allGames = await db.any('SELECT * FROM games');
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const game = await db.get('SELECT * FROM games WHERE id = $1', id);
    return game;
  } catch (error) {
    return error;
  }
};

const createGame = async (game) => {
  let { title, genre, release_date, is_favorite, ratings, publisher } = game;
  try {
    const newGame = await db.one(
      'INSERT INTO games (title, genre, release_date, is_favorite, ratings, publisher) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, genre, release_date, is_favorite, ratings, publisher]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      'DELETE FROM games WHERE id = $1 RETURNING *',
      id
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      'UPDATE games SET  title= $1, genre = $2, release_date= $3, is_favorite = $4, ratings =$5, publisher= $6',
      [
        game.title,
        game.genre,
        game.release_date,
        game.is_favorite,
        game.ratings,
        game.publisher,
        id,
      ]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame };
