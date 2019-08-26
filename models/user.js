const Sequelize = require('sequelize');

const dbSetting = require('../modules/dbInfo');

const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
  host: dbSetting.host,
  dialect: "mysql"
});

class User extends Sequelize.Model {}

User.init({
  pid: {
    type: Sequelize.CHAR(32),
    allowNull: false,
    unique: "compositeIndex"
  },
  recentSessid: {
    type: Sequelize.STRING(64),
    unique: "compositeIndex"
  }
}, {
  sequelize,
  modelName: "user"
});
