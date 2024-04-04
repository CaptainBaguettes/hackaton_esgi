const express = require('express');
const router = express.Router();

const parseController = require('../controllers/parse');

router.get('/parse', parseController.parse);

module.exports = router;