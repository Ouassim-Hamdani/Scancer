const Doctor =require('../models/DoctorModel');



//create a scan
const createScan= async (req,res)=>{
    const {firstName,familyName,gender}=req.body
     
    try{
        const doctor = await Doctor.create({firstName,familyName,gender})
        res.status(200).json(doctor)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
    res.json({msg:'create'})
}
module.exports={
    createScan,
    
}