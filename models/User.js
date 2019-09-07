module.exports = (sequelize, DataTypes) => {
  sequelize.define('User', {
    pid: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      unique: "compositeIndex"
    },
    recentSessid: {
      type: DataTypes.STRING(64),
      unique: "compositeIndex"
    }
  }, {
    sequelize,
    modelName: "user"
  }, {
    timestamps: false
  });
};
