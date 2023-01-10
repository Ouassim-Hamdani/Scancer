const mongoose = require("mongoose");
const Schema = mongoose.Schema

const MessagesSchema = new mongoose.Schema(
    {
        conversationId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Conversation',
            required : true
        },
        sender : {
            type : String
        },
        message : {
            type : String,
            required : true
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model("Messages", MessagesSchema);