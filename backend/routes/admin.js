const express = require('express')

// controller functions
const { loginAdmin,createDoctor,signupAdmin} = require('../controllers/adminController')

const router = express.Router()

// login route 
router.post('/login', loginAdmin)
//create doctor route
router.post('/', createDoctor)


router.post('/signup', signupAdmin)

module.exports = router