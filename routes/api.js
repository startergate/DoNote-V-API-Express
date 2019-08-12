const express = require('express');
const router = express.Router();

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

router.get('/:sessid/note/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.put('/:sessid/note/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:sessid/note/:id/exist', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;
