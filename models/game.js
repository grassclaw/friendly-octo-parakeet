module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    gametitle: DataTypes.STRING,
    gameStatus: DataTypes.BOOLEAN,
    pid1: DataTypes.INTEGER,
    pid2: DataTypes.INTEGER
  });

  Game.associate = function(models) {
    //   // We're saying that a Game should belong to an initial Player who created it
    //   // A Game can't be created without an Player1 due to the foreign key constraint
    // Game.belongsTo(models.players, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
    // Game.hasMany(models.gamestate, {
    //   onDelete: "cascade"
    // });
  };
  return Game;
};
