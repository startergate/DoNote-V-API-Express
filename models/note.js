const Sequelize = require('sequelize');

const dbSetting = require('modules/dbInfo');

const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
    host: dbSetting.host,
    dialect: "mysql"
});

module.exports = (sequelize: Sequelize.Sequelize, DataTypes) => {
    class Note extends Sequelize.Model { }

    Note.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING
        },
        edittime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        id: {
            type: DataTypes.TEXT("long"),
            primaryKey: true
        },
        align: {
            type: DataTypes.NUMBER(11),
            unique: "compositeIndex"
        },
        category: {
            type: DataTypes.STRING(32)
        }
    }, {
        sequelize,
        modelName: 'note'
    });

    return Note;
};
