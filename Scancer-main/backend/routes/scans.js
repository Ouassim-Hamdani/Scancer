const express=require('express');
//import from controller
const{
    createScan,
    getScans,
    getOneScan,
    deleteScan,
    updateScan,

}=require('../controllers/scanController');


const router = express.Router()

//get all scans 
router.get('/',getScans)

//get one scan 
router.get('/:id',getOneScan)
//create a scan
router.post('/',createScan)
//delete a scan
router.delete('/:id',deleteScan)
//update a scan
router.patch('/:id',updateScan)

module.exports=router  