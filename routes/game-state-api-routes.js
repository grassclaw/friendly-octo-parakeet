// Pull in required dependencies
var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Get Enter Game: for administrative purposes
  app.get("/api/gamestate", function(req, res) {
    db.gameState.findAll({}).then(function(titato) {
      res.json(titato);
    });
  });
  app.get("/api/gamestate/:id", function(req, res) {
    // NEEDS HELP
    db.gameState
      .findOne({
        where: {
          id: req.params.id
        }
        //   include: [db.Post]
      })
      .then(function(titato) {
        res.json(titato);
      });
  });
  // Create a game state each time a player moves.
  app.post("/api/examples", function(req, res) {
    db.gameState.create(req.body).then(function(titato) {
      res.json(dbExample);
    });
  });

  // Delete an example by id: This would only be availble once games are deleted.
  app.delete("/api/examples/:id", function(req, res) {
    db.gameState
      .destroy({ where: { id: req.params.id } })
      .then(function(titato) {
        res.json(titato);
      });
  });
};
