const express = require('express');
const router = express.Router();
const controller = require('./api.controller');

/* GET home page. */
router.get('/:sessid/category', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post('/:sessid/category', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:sessid/category/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:sessid/note', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post('/:sessid/note', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:sessid/note/shared', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:sessid/note/:id', controller.findNote);

router.put('/:sessid/note/:id', controller.updateNote);

// router.get('/:sessid/note/:name/check', controller.checkExistName);

// router.get('/:sessid/note/:id/exist', controller.checkExistNote);

module.exports = router;
