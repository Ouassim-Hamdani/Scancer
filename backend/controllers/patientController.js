const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')


//jwd token generator
const createtoken=(_id)=>{
    //sami and hoummam u have to change process.env.secret_string to any string u want
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'1d'})
}
//get all patients 
const getPatients=async(req,res)=>{
    const patients=await Doctor.findOne({'firstName':'anis'}).populate('patientsList') //=>req.user:_id ...
    const results =patients.patientsList
    console.log('this is a result :'+results.type)
    res.status(200).json(patients.patientsList.reverse())
}
//add new patients to patientsList
const addPatient= async (req,res)=>{
    const {email}=req.body
    try{  
    const patient=await Patient.findOne({"contacts.email":email})
    if (!patient) {

        throw Error("Patient doesn't have an account")
      }
    const exists = await Doctor.findOne({patientsList:patient._id })
    if (exists) {
        throw Error('He is already in your patients list')
      }
    
       
        const doc=await Doctor.updateOne({'firstName':'anis'},{ $push: { patientsList:patient._id}})
        res.status(200).json(doc)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
    
}


// Create a new patient
const createPatient = async function(req, res) {
    
    const { password,firstName,familyName,gender,address,contacts,birthDate,status} = req.body
    console.log(req.body)
    try {
      const patient = await Patient.signup(password,firstName,familyName,gender,address,contacts,birthDate,status)
      //add patient to doctor's patient list ({'firstName':'anis'} will be _id:req.user._id after linking the login front)
      const addpatient=await Doctor.updateOne({'firstName':'anis'},{ $push: { patientsList: patient._id}})
      res.status(200).json({patient})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
//get one patient 
const getOnePatient= async (req,res)=>{
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: 'No such patient'})
     }
    const patient=await Doctor.findOne({'firstName':'anis'}, { patientsList: id }).populate('patientsList')
    if (!patient) {
       return res.status(404).json({error: 'No such patient'})
     }
    res.status(200).json(patient.patientsList[0])
}
//delete a patient
const deletePatient=async (req,res)=>{
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Patient'})
      }
      
    const doc=await Doctor.updateOne({'firstName':'anis'},{ $pull: { patientsList: id }})
    //const scan = doc.scans.id(id).remove()doc.save()
    res.status(200).json(doc)
}

module.exports = { createPatient,getPatients ,addPatient,deletePatient,getOnePatient}
