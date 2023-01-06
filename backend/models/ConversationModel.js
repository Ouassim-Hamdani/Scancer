const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        members : [{
            type : mongoose.Schema.Types.ObjectId,
            refPath : 'model_type',
            model_type : {
                type : String,
                enum : ['Patient', 'Doctor'],
                required : true
            }
        }]
    },
    {timestamps : true}
);

ConversationSchema.statics.newConversation = async function (sender, receiver) {
    let info = [sender, receiver];
    const conversation = await this.create({members : info});
    return conversation;
}

module.exports = mongoose.model("Conversation", ConversationSchema);