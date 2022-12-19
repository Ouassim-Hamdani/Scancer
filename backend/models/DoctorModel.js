const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ContactInfoSchema = mongoose.Schema({
    phoneNumber: Number,
    landLine: Number,
    email: String,
  });

const AddressSchema = mongoose.Schema({
    streetNumber: Number,
    streetName: String,
    ZIPcode: Number,
    city:String,
  });
const PositionSchema =mongoose.Schema({
    grade:String,
    speciality:String,
})

const ScanSchema = mongoose.Schema({
    idpatient: mongoose.Schema.Types.ObjectId,
    file: String,
    result: String,
    comment: String,
  },{timestamps:true});
const DoctorSchema = new Schema({
    
    firstName :{
        type :String,
        required: true
    },
    familyName:{
        type :String,
        required: true
    },
    birthDate:Date,
   
    gender:{
        type :String,
        required: true
    },
    contacts: ContactInfoSchema,
    address:AddressSchema,
    position:PositionSchema,
  
    patientsList:[mongoose.Schema.Types.ObjectId],
    scans:[ScanSchema],
},{timestamps:true})
module.exports=mongoose.model('Doctor',DoctorSchema)