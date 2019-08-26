const Sequelize = require('sequelize');

const dbSetting = require('../modules/dbInfo');

const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
    host: dbSetting.host,
    dialect: "mysql"
});

class Note extends Sequelize.Model { }

Note.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.STRING
    },
    edittime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    id: {
        type: Sequelize.TEXT("long")
    },
    align: {
        type: Sequelize.NUMBER(11),
        unique: "compositeIndex"
    },
    category: {
        type: Sequelize.STRING(32)
    }
}, {
    sequelize,
    modelName: 'note'
});