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

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { loginDoctor }