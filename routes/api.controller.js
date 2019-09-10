const dbUser = require('modules/dbInfo');
const sid = require('@startergate/sidjs');

const note = require('models').note;

exports.findNote = (req, res, next) => {
    sid.loginAuth(req.headers.sid_clientid, req.params.sessid).then(info => {
        if ((info.is_valid && info.is_succeed)) {
            res.status(500);
            res.send({
                type: 'error',

                is_valid: true,
                is_succeed: false
            });
            return;
        }
        note.tableName = `notedb_${info.pid}`;
        note.findByPk(req.params.id, {attributes: ['name', 'text', 'edittime', 'id', 'category']}).then(note => {
            res.send({
                type: 'data',

                is_valid: true,
                data: note
            });
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
};

exports.updateNote =  (req, res, next) => {
    sid.loginAuth(req.headers.sid_clientid, req.params.sessid).then(info => {
        if (info.is_vaild && info.is_succeed) {
            res.status(500);
            res.send({
                type: 'error',

                is_valid: true,
                is_succeed: false
            });
            return;
        }
        note.tableName = `notedb_${info.pid}`;
        note.update({
            name: req.body.name,
            text: req.body.text,
            edittime: new Date(Date.now()).toISOString()
        }, {
            where: {id: req.params.id},
            returning: true
        }).then(note => {
            res.send({
                type: 'data',

                is_valid: true,
                is_succeed: true,
                data: note
            });
        })
    })
};