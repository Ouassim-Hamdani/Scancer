const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        doctor : {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'Doctor'
        }, 
        patient : {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'Patient'
        },
        latestMessage : {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Messages"
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model("Conversation", ConversationSchema);