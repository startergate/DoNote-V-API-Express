const express = require('express');
const router = express.Router();
const controller = require('./api.controller');

router.use(controller.sidAuthMiddleware);

router.get('/category', controller.findCategory);

// TODO: notedb category하고 metadb metaid 자료형 맞추기
router.post('/category', controller.createCategory);

router.get('/category/:id', controller.findCategorizedNote);

router.get('/note', controller.findAllNote);

router.post('/note', controller.createNote);

router.get('/note/shared', controller.findSharedNote);

router.get('/note/:id', controller.findNote);

router.put('/note/:id', controller.updateNote);

// router.get('/:sessid/note/:name/check', controller.checkExistName);

// router.get('/:sessid/note/:id/exist', controller.checkExistNote);

module.exports = router;
