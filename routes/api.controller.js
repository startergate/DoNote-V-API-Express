const dbUser = require('modules/dbInfo');
const sid = require('@startergate/sidjs');
const Sequelize = require('sequelize');

const dbSetting = require('modules/dbInfo');


const sequelize = new Sequelize('donote_beta', dbSetting.id, dbSetting.pw, {
    host: dbSetting.host,
    dialect: "mysql"
});

const Note = sequelize.import("note", + require('models/note'));

exports.checkExistNote = (req, res, next) => {
    sid.loginAuth(req.headers.sid_clientid, req.params.sessid).then(info => {
        if ((info.is_vaild && info.is_succeed)) {
            res.status(500);
            res.send({
                type: 'error',

                is_vaild: true,
                is_succeed: false
            });
            return;
        }
        Note.
        Note.findByPk(req.params.id).then(note => {
            res.send(note);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
        console.log(info);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
};