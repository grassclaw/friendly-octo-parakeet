// Pull in required dependencies
var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Get Enter Game: for administrative purposes
  // app.get("/api/gamestate", function(req, res) {
  //   db.gameState.findAll({}).then(function(titato) {
  //     res.json(titato);
  //   });
  // });
  //Get most recent gamestate
  app.get("/api/gamestate/:id", function(req, res) {
    // NEEDS HELP
    db.gamestate
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
  app.post("/api/gameState", function(req, res) {
    db.gamestate.create(req.body).then(function(titato) {
      res.json(dbExample);
    });
  });

  // Delete an example by id: This would only be availble once games are deleted.
  app.delete("/api/gameState/:id", function(req, res) {
    db.gamestate
      .destroy({ where: { id: req.params.id } })
      .then(function(titato) {
        res.json(titato);
      });
  });
};
