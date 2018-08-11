var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(titato) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: titato
    //   });
    // });
    res.sendFile(path.join(__dirname, "../public/tictactoe1.html"));
  });

  // Load example page and pass in an example by id
  app.get("/game/", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(titato) {
    //   res.render("example", {
    //     example: titato
    //   });
    // });
    res.sendFile(path.join(__dirname, "../public/tictactoe2.html"));
  });
  // Load example page and pass in an example by id
  app.get("/game/:id", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(titato) {
    //   res.render("example", {
    //     example: titato
    //   });
    // });
    res.sendFile(path.join(__dirname, "../public/tictactoe3.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
