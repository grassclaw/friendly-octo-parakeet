module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Example", {
    gametitle: DataTypes.NAME
  });
  Players.associate = function(models) {
    Players.hasMany(models.Game, {
      // onDelete: "cascade"
    });
  };
  return Players;
};
