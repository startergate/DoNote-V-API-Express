const dbUser = require('/modules/dbInfo');
const sid = require('@startergate/sidjs');
const sequelize = require('sequelize');

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

    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });

    req.sessid
    res.send();
};