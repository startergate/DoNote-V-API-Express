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
      type: DataTypes.STRING(65),
      allowNull: false
    },
    shareID: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: 'compositeIndex'
    },
    shareEdit: {
      type: DataTypes.NUMBER(1)
    }
  }, {
    timestamps: false
  });
};