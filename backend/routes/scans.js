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
const { protect } = require('../middleware/authMiddleware')
//get all scans 
router.get('/',protect,getScans)

//get one scan 
router.get('/:id',protect,getOneScan)
//create a scan
router.post('/',protect,createScan)
//delete a scan
router.delete('/:id',protect,deleteScan)
//update a scan
router.patch('/:id',protect,updateScan)

module.exports=router  