-- delete database if it exists
DROP DATABASE IF EXISTS titato;
-- create and use the database
CREATE DATABASE titato;
USE titato;
-- create players table
CREATE TABLE players (
  pid INT NOT NULL AUTO_INCREMENT,
  playername VARCHAR(100) NOT NULL,
  PRIMARY KEY (pid)
);
-- create gamestats table
CREATE TABLE gamestate (
  gsid INT NOT NULL AUTO_INCREMENT,
  gid INT NOT NULL,
  pid1Turn Boolean, --player turn fix
  cel1 VARCHAR(30) NOT NULL,
  cel2 VARCHAR(30) NOT NULL,
  cel3 VARCHAR(30) NOT NULL,
  cel4 VARCHAR(30) NOT NULL,
  cel5 VARCHAR(30) NOT NULL,
  cel6 VARCHAR(30) NOT NULL,
  cel7 VARCHAR(30) NOT NULL,
  cel8 VARCHAR(30) NOT NULL,
  cel9 VARCHAR(30) NOT NULL,
  PRIMARY KEY (gsid)
);
-- create games table
CREATE TABLE games (
  gid INT NOT NULL AUTO_INCREMENT,
  gametitle VARCHAR(100) NOT NULL,
  gameStatus Boolean DEFAULT true,
  pid1 INT,
  pid2 INT,
  PRIMARY KEY (gid)
);