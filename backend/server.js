require('dotenv').config()
//express app

const express =require('express')
const app = express()
const cors = require('cors');
app.use(cors());
//omport mongoose
const mongoose = require('mongoose')
//import routers 
const scanRoutes=require('./routes/scans')
const loginRoutes = require('./routes/login')
const adminRoutes = require('./routes/admin')
const patientRoutes = require('./routes/patients')
const dashboardRoutes = require('./routes/doctor')
const conversationRoutes = require('./routes/conversation')
const messagesRoutes = require('./routes/messages')


//middleware
app.use(express.json())
app.use((req, res,next)=>{
     console.log(req.path ,req.method)
    next()
})
 
//routes
app.use('/api/scans',scanRoutes)
app.use('/api/login',loginRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/patients',patientRoutes)
app.use('/api/dashboard',dashboardRoutes)
app.use('/api/conversation', conversationRoutes)
app.use('/api/messages', messagesRoutes)


//connect to db
mongoose.connect(process.env.db_uri).then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('listening...',process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})

