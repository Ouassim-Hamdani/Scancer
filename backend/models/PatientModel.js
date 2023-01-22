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
const PatientSchema = new Schema({
    
    firstName :{
        type :String,
        required: [true, 'Please add a first name'],
    },
    familyName:{
        type :String,
        required: [true, 'Please add a family name'],
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
      },
    birthDate:{type:Date,
      required:true,},

    gender:{
        type :String,
        required: true,
    },
    contacts: {
      type:ContactInfoSchema,
      required:true},
    address:AddressSchema,
    status:String,
    documents:[String],
},{timestamps:true})

// static create an account method
PatientSchema.statics.signup = async function(password,firstName,familyName,gender,address,contacts,birthDate,status) {
  // validation
  if (!contacts.email || !password) { 
    throw Error('You must fill the email and the password field')
  }
  if (!validator.isEmail(contacts.email)) {
    throw Error('Email not valid')
  }
  //ne7iha for now to create fast user
  //if (!validator.isStrongPassword(password)) {
  //  throw Error('Password not strong enough')
 // }
  const exists = await this.findOne({ "contacts.email":contacts.email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const patient = await this.create({password:hash,firstName,familyName,gender,address,contacts,birthDate,status})

  return patient
}
module.exports=mongoose.model('Patient',PatientSchema)