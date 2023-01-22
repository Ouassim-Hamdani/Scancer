const express = require('express')

// controller functions
const { loginDoctor} = require('../controllers/doctorController')

const router = express.Router()

// login route 
router.post('/', loginDoctor)



module.exports = router