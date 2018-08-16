module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("Player", {
    playername: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  players.associate = function(models) {
    players.hasMany(models.Game, {
      onDelete: "cascade"
    });
  };
  return players;
};
