require('dotenv').config()
//express app
const express =require('express')
const app = express()
//listen for requests
app.listen(process.env.PORT,()=>{
    console.log('listening...',process.env.PORT)
})
//middlware
app.use((req, res,next)=>{
    console.log(req.path ,req.method)
    next()
})
app.get('/',(req, res)=>{
    res.json({zbi:"zbi"})
})