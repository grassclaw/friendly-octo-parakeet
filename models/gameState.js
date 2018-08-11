module.exports = function(sequelize, DataTypes) {
  var gameStats = sequelize.define("Example", {
    gid: DataTypes.Number,
    pid1Turn: DataTypes.Boolean,
    cel1: DataTypes.STRING,
    cel2: DataTypes.STRING,
    cel3: DataTypes.STRING,
    cel4: DataTypes.STRING,
    cel5: DataTypes.STRING,
    cel6: DataTypes.STRING,
    cel7: DataTypes.STRING,
    cel8: DataTypes.STRING,
    cel9: DataTypes.STRING
  });
  return Example;
};
