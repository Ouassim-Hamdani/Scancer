const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        members : Array
    },
    {timestamps : true}
);

module.exports = mongoose.model("Conversation", ConversationSchema);