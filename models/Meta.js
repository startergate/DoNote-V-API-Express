exports.MetaIndex = (sequelize, DataTypes) => {
  sequelize.define({
    metaid: {
      type: Sequelize.CHAR(32),
      allowNull: false
    },
    userid: {
      type: Sequelize.CHAR(32),
      allowNull: false
    }
  }, {
    timestamps: true
  });
};

MetaData.init({
  datatype: {
    type: Sequelize.STRING(8),
    allowNull: false
  },
  metadata: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  metaid: {
    type: Sequelize.CHAR(32),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'metaData'
});