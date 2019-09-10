const sid = require('@startergate/sidjs');

const note = require('models').note;

exports.sidAuthMiddleware = (req, res, next) => {
    sid.loginAuth(req.headers.sid_clientid, req.headers.sid_sessid).then(info => {
        if (info.is_vaild && info.is_succeed) {
            res.status(401);
            res.send({
                type: 'error',

                is_valid: true,
                is_succeed: false
            });
            return;
        }
        note.tableName = `notedb_${info.pid}`;
        next();
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
};

exports.findNote = (req, res, next) => {
    note.findByPk(req.params.id, {attributes: ['name', 'text', 'edittime', 'id', 'category']}).then(note => {
        res.send({
            type: 'data',

            is_valid: true,
            data: note
        });
    }).catch(err => {
        console.error(err);
        res.sendStatus(202);
    });
};

exports.updateNote = (req, res, next) => {
    let updateQuery;
    if (req.body.name || req.body.text) updateQuery = {
        name: req.body.name,
        text: req.body.text,
        edittime: new Date(Date.now()).toISOString().replace('T', ' ').split('Z').join('')
    };
    else {
        res.send({
            type: 'error',

            is_valid: true,
            is_succeed: true,
            is_modified: false
        });
    }
    note.update(updateQuery, {
        where: {id: req.params.id}
    }).then(result => {
        res.send({
            type: 'data',

            is_valid: true,
            is_succeed: true,
            is_modified: true
        });
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
};

exports.findAllNote = (req, res, next) => {
    note.findAll({ attributes: ['name', 'id', 'category'] }).then(notes => {
        res.send({
            type: 'data',

            is_valid: true,
            data: notes
        });
    }).catch(err => {
        res.sendStatus(202);
    });
};

exports.findCategorizedNote = (req, res, next) => {
    note.findAll({ where: { category: req.params.id }, attributes: ['name', 'id', 'category'] }).then(notes => {
        res.send({
            type: 'data',

            is_valid: true,
            data: notes
        });
    }).catch(err => {
        res.sendStatus(202);
    });
};
};