const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConnect')
// require('./config/dbConnect')()
const PORT = process.env.PORT || 5000
dbConnect()

app.post('/',(req,res)=>{
    res.send("welcome");
})
app.listen(PORT, ()=>{
    console.log('server is running')
})