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

router.use(protect)
//get all patients 
router.get('/',getPatients)

//get one patient 
router.get('/:id',getOnePatient)
//create a patient
router.post('/create',createPatient)
//add new patient (already exists in database)
router.post('/add',addPatient)
//delete a patient
router.delete('/:id',deletePatient)

module.exports=router  