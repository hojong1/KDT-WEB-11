const express = require('express');
const controller = require('../controller/exam');
const router = express.Router();

router.get('/', controller.main);

router.post('/login', controller.login);

module.exports = router;
