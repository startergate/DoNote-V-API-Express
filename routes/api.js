const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/:userid/note', (req, res, next) => { 
    res.render('index', { title: 'Express' });
});

router.get('/:userid/note/:id', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/:userid/note/:id/exist', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;
