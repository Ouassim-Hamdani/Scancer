require('dotenv').config()
//express app
const express =require('express')
const app = express()
//omport mongoose
const mongoose = require('mongoose')
//import routers 
const scanRoutes=require('./routes/scans')


//middlware
app.use(express.json())
app.use((req, res,next)=>{
     console.log(req.path ,req.method)
    next()
})
 
//routes
app.use('/api/scans',scanRoutes)

//connect to db
mongoose.connect(process.env.db_uri).then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('listening...',process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req, res)=>{
    res.json({zbi:"zbi"})
})