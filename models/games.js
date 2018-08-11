module.exports = function(sequelize, DataTypes) {
  var gameStats = sequelize.define("Example", {
    gametitle: DataTypes.STRING,
    gameStatus: DataTypes.BOOLEAN,
    pid1: DataTypes.NUMBER,
    pid2: DataTypes.NUMBER
  });
  return Example;
};
