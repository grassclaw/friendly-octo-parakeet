// Pull in required dependencies
var path = require("path");

var db = require("../models");

module.exports = function(app) {
  // Get all games and list in table for the user
  app.get("/api/game", function(req, res) {
    db.Game.findAll({
      //   where: query
    }).then(function(titato) {
      res.json(titato);
    });
  });
  //Gets the game once one is selected
  app.get("/api/game/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    db.Author.findOne({
      where: {
        id: req.params.id
      }
      //   include: [db.Post]
    }).then(function(titato) {
      res.json(titato);
    });
  });

  // Create a new game
  app.post("/api/game", function(req, res) {
    db.Example.create(req.body).then(function(titato) {
      res.json(dbExample);
    });
  });

  // Delete an game:Currently unavailable. We keep all game states right now.
  // Will need to eventually delete games for storage purposes.
  app.delete("/api/game/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(titato) {
      res.json(titato);
    });
  });
};
