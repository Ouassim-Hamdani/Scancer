const Doctor =require('../models/DoctorModel');

const mongoose = require('mongoose')

//create a doc
const createDoc= async (req,res)=>{
    const {firstName,familyName,gender,scans,password}=req.body
     
    try{
        const doctor = await Doctor.create({firstName,familyName,gender,scans,password})
        res.status(200).json(doctor)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
    res.json({msg:'create'})
}
//create scan
const createScan= async (req,res)=>{
    const {result,file,comment,Patient}=req.body
     
    try{  
        const scan=await Doctor.updateOne({'firstName':'notanis'},{ $push: { scans: {result: result ,file:file,comment:comment}}})
        res.status(200).json(scan)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
    
}

//get all scans 
const getScans=async(req,res)=>{
    const scans=await Doctor.findOne({'firstName':'notanis'})
    res.status(200).json(scans.scans.reverse())
}

//get one scan 
const getOneScan= async (req,res)=>{
     const {id}=req.params
     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such scan'})
      }
     const scan=await Doctor.findOne({'firstName':'notanis'},{ scans: { $elemMatch: {_id: id }}})

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
      
    const doc=await Doctor.updateOne({'firstName':'notanis'},{ $pull: { scans: {_id: id }}})
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
    const doc=await Doctor.updateOne({'firstName':'notanis','scans._id':id},
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
}