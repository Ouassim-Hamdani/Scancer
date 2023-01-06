const express = require('express')

const { startConversation} = require('../controllers/conversationController')
const router = express.Router()

router.post("/", startConversation)

module.exports = router