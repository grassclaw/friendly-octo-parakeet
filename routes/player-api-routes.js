// Pull in required dependencies
var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Get all players...this would be for future use as an administrator. Not used for user end.
  app.get("/api/player", function(req, res) {
    db.Players.findAll({}).then(function(titato) {
      res.json(titato);
    });
  });
  //Used for login and grabbing a user
  app.get("/api/game/:id", function(req, res) {
    db.Players.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(titato) {
      res.json(titato);
    });
  });
  // Create a new player
  app.post("/api/player", function(req, res) {
    db.Players.create(req.body).then(function(titato) {
      res.json(titato);
    });
  });

  // Delete an example by id : THIS OPTION IS NOT CURRENTLY MADE AVAILABLE DUE TO CASCADING PREFERENCES OF THE MODEL
  app.delete("/api/player/:id", function(req, res) {
    db.Players.destroy({ where: { id: req.params.id } }).then(function(titato) {
      res.json(titato);
    });
  });
};
