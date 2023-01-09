const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema(
    {
        members : [{
            type : mongoose.Schema.Types.ObjectId,
            refPath : 'members.model_type',
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
    let send = {sender, model_type : 'Doctor'};
    const doct = await Doctor.findOne({"_id": receiver})
    if(doct){
        let receiv = {receiver, model_type : 'Doctor'};
        let info = [send, receiv];
        const conversation = await this.create({members : info});
        return conversation;
    } else {
        const pat = await Doctor.findOne({"_id": receiver});
        if(pat){
            let receiv = {receiver, model_type : 'Patient'};
            let info = [send, receiv];
            const conversation = await this.create({members : info});
        return conversation;
        } else {
            throw Error('User does not exist!');
        }
    }
}

module.exports = mongoose.model("Conversation", ConversationSchema);