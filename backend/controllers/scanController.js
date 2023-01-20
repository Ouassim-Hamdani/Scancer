const Doctor =require('../models/DoctorModel');
const Patient =require('../models/PatientModel');
const {spawn,exec} = require('child_process');
const mongoose = require('mongoose');


const scanResult =async (req,res)=>{
    //const {file}=req.body

    const {
        stdout,
        stderr
      } = await exec('runAi.py');
    
      console.log('stdout:', stdout);
      console.error('stderr:', stderr);
      res.status(200).json({stdout})
}
//create scan
const createScan= async (req,res)=>{

    const {result,file,comment,patient}=req.body
     
    try{  
        const scan=await Doctor.updateOne({_id:req.user._id},{ $push: { scans: {patient:patient,result: result ,file:file,comment:comment}}})
        res.status(200).json(scan)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
    
}

//get all scans 
const getScans=async(req,res)=>{
    const scans=await Doctor.findOne({_id:req.user._id}).populate({
        path: 'scans',
        populate: {
                path: 'patient',
                model: 'Patient'
        }
    })
    res.status(200).json(scans.scans.reverse())
}

//get one scan 
const getOneScan= async (req,res)=>{
     const {id}=req.params
     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such scan'})
      }
     const scan=await Doctor.findOne({_id:req.user._id},{ scans: { $elemMatch: {_id: id }}})

     if (!scan) {
        return res.status(404).json({error: 'No such scan'})
      }
     res.status(200).json(scan.scans[0])
}

//delete a scan
const deleteScan=async (req,res)=>{
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such scan'})
      }
      
    const doc=await Doctor.updateOne({_id:req.user._id},{ $pull: { scans: {_id: id }}})
    //const scan = doc.scans.id(id).remove()doc.save()
    res.status(200).json(doc)
}
//update a scan
const updateScan = async(req,res)=>{
    const {id}=req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such scan'})
      }
    const {result,file,comment,Patient}=req.body
    const doc=await Doctor.updateOne({_id:req.user._id,'scans._id':id},
    { $set: { "scans.$.result": result ,"scans.$.file":file,"scans.$.comment":comment
     }})
    //const scan = doc.scans.id(id).remove()doc.save()
    res.status(200).json(doc)
}

module.exports={
    createScan,
    getScans,
    getOneScan,
    deleteScan,
    updateScan,   
    scanResult,
}