const Sequelize = require('sequelize');

const Meta = require('./Meta');
const Note = require('./Note');
const Shared = require('./Shared');
const User = require('./User');

const config = require('modules/dbInfo');

const sequelize = new Sequelize('donote_beta', config.id, config.pw, {
  host: config.host,
  dialect: "mysql"
});

exports.meta = Meta(sequelize, Sequelize);
exports.note = Note(sequelize, Sequelize);
exports.shared = Shared(sequelize, Sequelize);
exports.user = User(sequelize, Sequelize);

