const Sequelize = require('Sequelize');

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
        type: Sequelize.TIME
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
});