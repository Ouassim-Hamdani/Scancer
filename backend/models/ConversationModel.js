const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        members : Array
    },
    {timestamps : true}
);

ConversationSchema.statics.newConversation = async function (sender, receiver) {
    let info = [sender, receiver];
    const conversation = await this.create({members : info});
    return conversation;
}

module.exports = mongoose.model("Conversation", ConversationSchema);