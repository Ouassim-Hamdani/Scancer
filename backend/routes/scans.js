const express=require('express');
//import from controller
const{
    createScan,


}=require('../controllers/scanController');


const router = express.Router()

//get all scans 
router.get('/',(req,res)=>{
    res.json({msg:'all'})
})

//get one scan 
router.get('/:id',(req,res)=>{
    res.json({msg:'get'})
})
//create a scan
router.post('/',createScan)
//delete a scan
router.delete('/:id',(req,res)=>{
    res.json({msg:'create'})
})
//update a scan
router.patch('/:id',(req,res)=>{
    res.json({msg:'create'})
})

module.exports=router  