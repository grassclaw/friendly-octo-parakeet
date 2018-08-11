// Pull in required dependencies
var path = require('path');

var db = require("../models");

module.exports = function(app) {
  // Get Enter Game
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(titato) {
      res.json(titato);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(titato) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(titato) {
      res.json(titato);
    });
  });
};
