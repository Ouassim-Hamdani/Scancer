const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const moment = require('moment')
const mongoose = require('mongoose')
const getGender=async(req,res)=>{
    try {
      
const patients=await Doctor.findOne({_id:req.user._id}).populate('patientsList') //=>req.user:_id ...
const males =patients.patientsList.filter((patient)=>{
  if (patient.gender=="male"){
    return true
  }
  return false 
}).length


const maleValue= (100*males/patients.patientsList.length).toFixed(2)
const genderData = [
  { name: 'Female', value:(100-maleValue)*1,quantity:patients.patientsList.length-males },
  { name: 'Male', value: maleValue* 1,quantity:males },
]
res.status(200).json({genderData})
}
catch(error){
    res.status(400).json({msg:'no data ! try again later '})
}
}



const getData=async(req,res)=>{
  try {
    function subtractMonths(date, months) {
      date.setMonth(date.getMonth() - months);
    
      return date;
    }    
const patients=await Doctor.findOne({_id:req.user._id}).populate('patientsList') //=>req.user:_id ...
const all =patients.patientsList.length
const endDate=new Date()
const startDate = subtractMonths(endDate, 1);
const twoBefore = subtractMonths(endDate, 2);
console.log(startDate)
const newPatients = patients.patientsList.filter((patient)=>{
 
  return (patient.createdAt>startDate)

}

).length
const perc= (100*newPatients/all).toFixed(2)
const olderPatients = patients.patientsList.filter((patient)=>{
 
  return (patient.createdAt>twoBefore && patient.createdAt<startDate)

}

).length
var state=""
if (olderPatients>newPatients){
    state="down"
}else{
    state="up"
}

const Patientsdata = [{name:"New",value:newPatients,perc:perc,stat:state},
{name:"All",value:all,perc:100-perc,stat:"up"},
{name:"Sick",value:0,perc:0,stat:"down"}]
res.status(200).json({Patientsdata})
}
catch(error){
  res.status(400).json({msg:'no data ! try again later '})
}
}
module.exports = { getGender,getData}
