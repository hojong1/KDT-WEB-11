const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

//router

router.get('/', controller.main);

router.get('/comments', controller.comments);
// :page는 {page: '값'} 형태, :이 붙고 안붙고 차이가 큼
router.get('/comment/:page', controller.comment);

module.exports = router;
