const Sequelize = require('sequelize');

const dbSetting = require('../modules/dbInfo');

const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
  host: dbSetting.host,
  dialect: "mysql"
});

class MetaIndex extends Sequelize.Model { }

class MetaData extends Sequelize.Model { }

MetaIndex.init({
  metaid: {
    type: Sequelize.CHAR(32),
    allowNull: false
  },
  userid: {
    type: Sequelize.CHAR(32),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'metaIndex'
});

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