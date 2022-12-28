const express=require('express');
//import from controller
const{
    createPatient,
   getPatients,
   addPatient,
    getOnePatient,
    deletePatient,
    //updatePatient,

}=require('../controllers/patientController');

const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

//get all patients 
router.get('/',protect,getPatients)

//get one patient 
router.get('/:id',protect,getOnePatient)
//create a patient
router.post('/create',protect,createPatient)
//add new patient (already exists in database)
router.post('/add',protect,addPatient)
//delete a patient
router.delete('/:id',protect,deletePatient)

module.exports=router  