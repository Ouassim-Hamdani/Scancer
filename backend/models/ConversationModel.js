const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        doctor1 : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref: 'Doctor'
        },
        doctor2 : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref: 'Doctor'
        },
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model("Conversation", ConversationSchema);