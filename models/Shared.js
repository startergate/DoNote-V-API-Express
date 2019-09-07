exports.SharedMetaIndex = (sequelize, DataTypes) => {
  return sequelize.define("SharedMetaData", {
    note: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: 'compositeIndex'
    },
    isEditable: {
      type: DataTypes.NUMBER(1)
    }
  }, {
    timestamps: false
  });
};

exports.SharedMetaData = (sequelize, DataTypes) => {
  return sequelize.define("SharedMetaData", {
    shareTable: {
      type: Sequelize.STRING(65),
      allowNull: false
    },
    shareID: {
      type: Sequelize.STRING(32),
      allowNull: false,
      unique: 'compositeIndex'
    },
    shareEdit: {
      type: Sequelize.INTEGER(1)
    }
  }, {
    timestamps: false
  });
};