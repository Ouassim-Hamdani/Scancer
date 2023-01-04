const Doctor = require('../models/DoctorModel')
const jwt=require('jsonwebtoken')

//jwd token generator
const createtoken=(_id)=>{
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'1d'})
}

// login doctor
const loginDoctor = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Doctor.login(email, password)
    const token = createtoken(user._id)

    res.status(200).json({status:'ok',email, token,firstName:user.firstName,familyName:user.familyName})
  } catch (error) {
    res.status(400).json({status:'err',error: error.message,user:false})
  }
}

module.exports = { loginDoctor }