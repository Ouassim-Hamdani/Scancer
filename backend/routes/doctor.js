const express = require('express')

// controller functions
const { getData,getGender} = require('../controllers/dashboardController')

const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
//  route 
router.use(protect)
router.get('/lastMonth', getData)
router.get('/getGender', getGender)



module.exports = router