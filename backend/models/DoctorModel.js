const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema


const ContactInfoSchema = mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: [true, 'Please add an number'],
  },
    landLine: Number,
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      },
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
    //idpatient: mongoose.Schema.Types.ObjectId,
    file: String,
    result: {
      type:String,
      required:true,},

    comment: String,
    patient:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref :'Patient',
       }
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
    password: {
        type: String,
        required: [true, 'Please add a password'],
      },
    birthDate:{type:Date,
      required:true,},
   
    gender:{
        type :String,
        required: true
    },
    contacts:{ 
          type:ContactInfoSchema,
          required:true    
        },
    address:AddressSchema,
    position:PositionSchema,
  
    patientsList:[{
      type:mongoose.Schema.Types.ObjectId,
      ref :'Patient',
    }],
    scans:[ScanSchema],
},{timestamps:true})

// static create an account method
DoctorSchema.statics.signup = async function(password,firstName,familyName,gender,address,contacts,position,birthDate) {
  // validation
  if (!contacts.email || !password) {
    throw Error('You must fill the email and the password field')
  }
  if (!validator.isEmail(contacts.email)) {
    throw Error('Email not valid')
  }
 // if (!validator.isStrongPassword(password)) {
   // throw Error('Password not strong enough')
  //}
  const exists = await this.findOne({ "contacts.email":contacts.email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const doctor = await this.create({password:hash,firstName,familyName,gender,address,contacts,position,birthDate})

  return doctor
}

// static login method
DoctorSchema.statics.login = async function(email,password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const doctor = await this.findOne({ "contacts.email":email })
  if (!doctor) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, doctor.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return doctor
}
module.exports=mongoose.model('Doctor',DoctorSchema)