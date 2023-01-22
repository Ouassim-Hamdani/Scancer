<<<<<<< HEAD
const Messages = require('../models/MessagesModel')

const addMessage = async (req, res) => {
    const {conversationID, sender, message} = req.body;
    const newMessage = new Messages({
        conversationID, sender, message
    })
    try {
        const result = await newMessage.save();
        res.status(200).json({status:'ok', result})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, newMessage:false})
    }
}

const getChatMessages = async (req, res) => {
    const {conversationID} = req.params;
    try {
        const messages = await Messages.find({
            conversationID
        });
        res.status(200).json({status:'ok', messages})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, messages:false})
    }
}

=======
const Messages = require('../models/MessagesModel')
const Conversation = require('../models/ConversationModel')

const addMessage = async (req, res) => {
    const {conversationID, sender, message} = req.body;
    const newMessage = new Messages({
        conversationID, sender, message
    })
    let chat = await Conversation.findOneAndUpdate({_id : conversationID}, {latestMessage : newMessage._id})
    try {
        const result = await newMessage.save();
        res.status(200).json({status:'ok', result})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, newMessage:false})
    }
}

const getChatMessages = async (req, res) => {
    const {conversationID} = req.params;
    try {
        const messages = await Messages.find({
            conversationID
        });
        res.status(200).json({status:'ok', messages})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, messages:false})
    }
}

>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
module.exports = {addMessage, getChatMessages};