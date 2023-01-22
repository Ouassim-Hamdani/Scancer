const express = require('express')
const { startConversation, userConversations, findConversation } = require('../controllers/conversationController')

const router = express.Router()

router.post("/", startConversation)
router.get("/:userID", userConversations)
router.get("/find/:firstID/:secondID", findConversation)

module.exports = router