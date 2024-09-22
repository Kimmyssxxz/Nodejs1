
const express = require('express');
const router = express.Router();
const controller = require('../Controller/UserController');

router.get('/', controller.index);
router.get('/kim', controller.kim);
router.get('/ryan', controller.ryan);
router.get('/dela', controller.dela);
router.get('/luna', controller.luna);

module.exports = router;
