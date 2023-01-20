const express = require('express')

// controller functions
const { getData} = require('../controllers/dashboardController')

const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
//  route 
//router.use(protect)
router.get('/', getData)



module.exports = router