const express = require('express')

// controller functions
const { getData} = require('../controllers/dashboardController')

const router = express.Router()

//  route 
router.get('/', getData)



module.exports = router