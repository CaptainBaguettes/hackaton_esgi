const express = require('express');
const router = express.Router();

const socialController = require('../controllers/social');

router.get('/social', socialController.social);

module.exports = router;