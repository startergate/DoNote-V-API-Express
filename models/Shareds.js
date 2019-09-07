const Sequelize = require('sequelize');

const dbSetting = require('../modules/dbInfo');

const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
  host: dbSetting.host,
  dialect: "mysql"
});

class SharedMetaIndex extends Sequelize.Model {}

class SharedMetaData extends Sequelize.Model {}

SharedMetaIndex.init({
  note: {
    type: Sequelize.STRING(65),
    allowNull: false
  },
  id: {
    type: Sequelize.STRING(32),
    allowNull: false,
    unique: 'compositeIndex'
  },
  isEditable: {
    type: Sequelize.INTEGER(1)
  }
}, {
  sequelize,
  modelName: 'sharedMeta'
});

SharedMetaData.init({
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
  sequelize,
  modelName: 'sharedMeta'
});