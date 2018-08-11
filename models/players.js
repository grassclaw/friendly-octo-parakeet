module.exports = function(sequelize, DataTypes) {
  var gameStats = sequelize.define("Example", {
    gametitle: DataTypes.NAME
  });
  return Example;
};
