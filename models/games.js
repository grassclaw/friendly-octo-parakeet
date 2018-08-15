module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    gametitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gameStatus: DataTypes.BOOLEAN,
    pid1: DataTypes.NUMBER,
    pid2: DataTypes.NUMBER
  });

  // Game.associate = function(models) {
  //   // We're saying that a Game should belong to an initial Player who created it
  //   // A Game can't be created without an Player1 due to the foreign key constraint
  //   Game.belongsToMany(models.Players, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //   Game.hasMany(models.gameState, {
  //     // onDelete: "cascade"
  //   });
  // };
  return Game;
};
