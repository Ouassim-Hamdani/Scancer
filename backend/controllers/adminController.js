const Admin = require('../models/AdminModel')
const Doctor = require('../models/DoctorModel')
const jwt =require('jsonwebtoken')

const createtoken=(_id)=>{
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'1d'})
}
// login admin
const loginAdmin = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Admin.login(email, password)
    const token = createtoken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Create a new doctor
const createDoctor = async function(req, res) {
    
    const { password,firstName,familyName,gender,address,contacts,position,birthDate} = req.body
    console.log(req.body)
    try {
      const doctor = await Doctor.signup(password,firstName,familyName,gender,address,contacts,position,birthDate)
  
      res.status(200).json({doctor})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
// sign up (temp)
const signupAdmin = async function(req, res) {
    
    const {email, password,firstName,familyName} = req.body
    console.log(req.body)
    try {
      const admin = await Admin.signup(email, password,firstName,familyName)
      token =createtoken(admin._id)
      res.status(200).json({token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }



module.exports = { loginAdmin,createDoctor,signupAdmin }