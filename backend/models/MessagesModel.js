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
            type : mongoose.Schema.Types.ObjectId,
            refPath : 'model_type',
            model_type : {
                type : String,
                enum : ['Patient', 'Doctor'],
                required : true
            }
        },
        message : {
            type : String,
            required : true
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model("Messages", MessagesSchema);