const Doctor =require('../models/DoctorModel');
const Patient =require('../models/PatientModel');
const {spawn,exec} = require('child_process');
const mongoose = require('mongoose');
const grid = require("gridfs-stream");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const fs = require("fs");
/* for experimenting*/ 

// Setup file uploader 

const setupUploader = ()=>{
    // Init gfs
    let gfs;
    conn = mongoose.connection
    conn.once('open', () => {
    // Init stream
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('Files');
    });

    // Create storage engine
    const storage = new GridFsStorage({
    url: process.env.db_uri,
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'Files'
            };
    }
    });
    return multer({ storage });
    
}



/* end:: for experimenting */
const scanResult =async (req,res)=>{
    const {file,type}=req.body
   
 
    
    
      res.status(200).json();
}
//create scan
const createScan= async (req,res)=>{
    const {file}=req.body

    try{ 
        const scan=await Doctor.updateOne({_id:req.user._id},{ $push: { scans: {file:req.file.id}}})
        

        res.status(200).json(req.file.id)
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

let ModelInput;
const getScanForModel =  (req, res) =>{
    const conn = mongoose.connection
    const db = conn.db
    const mongo = mongoose.mongo

    const gfs = grid(db, mongo);
    gfs.collection("Files")

    
    const bucket = new mongoose.mongo.GridFSBucket(db, {bucketName: "Files"})
    
    
    //const prm = 
    let result;
    const downloadStream = bucket.openDownloadStream(mongoose.Types.ObjectId(req.params.id))
    let chunks = []
    downloadStream.on("data", (chunk)=>{chunks.push(Buffer.from(chunk))})
    downloadStream.on("error", (err)=>{console.log(err)})
    downloadStream.on("end", ()=>{console.log("done!!");
    let file;
    gfs.files.findOne({_id: mongoose.Types.ObjectId(req.params.id)}).then((fls)=>{
        ModelInput = {
        filetype : fls.contentType,
        data: Buffer.concat(chunks).toString(undefined)
    }

    const pyProg = exec('cd controllers && D:/python/Scripts/activate && D:/python/python.exe runAi.py '+ModelInput.data+"         "+ModelInput.filetype, (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });
    
    });
    });
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
    setupUploader,
    createScan,
    getScans,
    getOneScan,
    deleteScan,
    updateScan,
    getScanForModel,
    scanResult,
}