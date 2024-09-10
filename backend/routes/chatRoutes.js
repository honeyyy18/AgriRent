const express = require('express');
const { startChat, sendMessage } = require('../controllers/chatController');

const router = express.Router();

router.post('/start', startChat);
router.post('/message', sendMessage);

module.exports = router;
