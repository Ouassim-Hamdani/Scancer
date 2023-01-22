const express = require('express')
const { addMessage, getChatMessages } = require('../controllers/messagesController')
const router = express.Router()

router.post("/", addMessage)
router.get("/:conversationID", getChatMessages)


module.exports = router