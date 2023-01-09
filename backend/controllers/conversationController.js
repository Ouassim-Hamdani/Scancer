const Conversation = require('../models/ConversationModel')
const jwt =require('jsonwebtoken')


const startConversation = async (req, res) => {
    const {senderID, receiverID} = req.body

    try {
        const savedConversation = await Conversation.newConversation(senderID, receiverID);
        res.status(200).json({status:'ok',sender : savedConversation.members[0], receiver : savedConversation.members[1]})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message,savedConversation:false})
    }
}

module.exports = {startConversation};