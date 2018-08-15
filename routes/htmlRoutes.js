var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tictactoe1.html"));
    // db.Example.findAll({}).then(function(titato) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: titato
    //   });
    // });
  });

  // Load game profile page and pass in an example by id
  app.get("/game/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tictactoe2.html"));
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(titato) {
    //   res.render("example", {
    //     example: titato
    //   });
    // });
  });
  // Load gameplay page and pass in a game by id
  app.get("/game/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tictactoe3.html"));
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(titato) {
    //   res.render("example", {
    //     example: titato
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
