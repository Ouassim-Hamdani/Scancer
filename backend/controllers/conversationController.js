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
            members : {$in : [req.body.userID]}
        });
        res.status(200).json({status:'ok', conversations})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message})
    }

};

const findConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members : {$all : [req.body.firstID, req.body.secondID]}
        });
        res.status(200).json({status:'ok', conversation})
    } catch (error) {
        res.status(400).json({status:'err',error: error.message})
    }

};


module.exports = {startConversation, userConversations, findConversation};