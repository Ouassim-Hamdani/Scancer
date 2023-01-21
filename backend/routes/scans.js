const express=require('express');
//import from controller
const{
    createScan,
    getScans,
    getOneScan,
    deleteScan,
    updateScan,
    scanResult,

}=require('../controllers/scanController');


const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
router.use(protect)
//get all scans 
router.get('/',getScans)

//get one scan 
router.get('/:id',getOneScan)

//get ai model result 
router.get('/zbi/zbi',scanResult)
//create a scan
router.post('/',createScan)
//delete a scan
router.delete('/:id',deleteScan)
//update a scan
router.patch('/:id',updateScan)

module.exports=router  