const express = require('express');
const router = express.Router();

const chatbotController = require('../controllers/chatbot');

router.get('/chatbot', chatbotController.chatbot);

module.exports = router;