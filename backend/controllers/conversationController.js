const Conversation = require('../models/ConversationModel')
//const jwt = require('jsonwebtoken')


const startConversation = async (req, res) => {
    const savedConversation = new Conversation({
        members : [req.body.senderID, req.body.receiverID]
    });
    try {
        const result = await savedConversation.save();
        res.status(200).json({status:'ok', result})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message,savedConversation:false})
    }
};

const userConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find({
            members : {$in : [req.params.userID]}
        });
        res.status(200).json({status:'ok', conversations})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, conversations:false})
    }

};

const findConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members : {$all : [req.params.firstID, req.params.secondID]}
        });
        res.status(200).json({status:'ok', conversation})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message, conversation:false})
    }

};


module.exports = {startConversation, userConversations, findConversation};