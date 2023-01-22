const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const adminSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a Name'],
    },
    familyName: {
        type: String,
        required: [true, 'Please add a Name'],
      },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)
// static signup method
adminSchema.statics.signup = async function(email, password,firstName,familyName) {

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash,firstName,familyName })

  return user
}
// static login method
adminSchema.statics.login = async function(email,password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const admin = await this.findOne({ email })
  if (!admin) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, admin.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return admin
}

module.exports = mongoose.model('Admin', adminSchema)