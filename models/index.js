const Sequelize = require('sequelize');

const Note = require('./Note');

const config = require('modules/dbInfo');

const sequelize = new Sequelize('donote_beta', config.id, config.pw, {
  host: config.host,
  dialect: "mysql"
});

exports.note = Note(sequelize, Sequelize);

