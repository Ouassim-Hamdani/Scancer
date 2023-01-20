const express=require('express');

//import from controller
const{
    setupUploader,
    createScan,
    getScans,
    getOneScan,
    deleteScan,
    updateScan,
    downloadScan
}=require('../controllers/scanController');


const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
router.use(protect)



//get all scans 
router.get('/',getScans)

//get one scan 
router.get('/:id',getOneScan)

//create a scan
router.post('/', setupUploader().single("file"),(req, res)=>{createScan(req, res);console.log(req, res)})

//delete a scan
router.delete('/:id',deleteScan)

//update a scan
router.patch('/:id',updateScan)

//download a scan
router.get("/download/:id", downloadScan)

module.exports=router  