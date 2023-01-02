const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const mongoose = require('mongoose')
const getData=async(req,res)=>{
    try {
const patients=await Doctor.findOne({'firstName':'anis'}).populate('patientsList') //=>req.user:_id ...
const males =patients.patientsList.filter((patient)=>{
  if (patient.gender=="male"){
    return true
  }
  return false 
}).length

const maleValue= 100*males/patients.patientsList.length
const genderData = [
  { name: 'Female', value:100-maleValue,quantity:patients.patientsList.length-males },
  { name: 'Male', value: maleValue,quantity:males },
]
res.status(200).json({genderData})
}
catch(error){
    res.status(400).json({msg:'no data ! try again later '})
}
}
module.exports = { getData}
