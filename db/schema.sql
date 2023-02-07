DROP DATABASE IF EXISTS games_list;
CREATE DATABASE games_list;

\c games_list

DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    genre TEXT,
    release_date DATE,
    is_favorite BOOLEAN,
    ratings VARCHAR(6)
    publisher TEXT
)