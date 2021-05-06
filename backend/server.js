const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConnect')
const User = require('./models/User')
const userRoute = require('./routes/usersRoute')
// require('./config/dbConnect')()
const PORT = process.env.PORT || 5000
dbConnect()

app.use(express.json())
app.use('/api/user', userRoute)
app.listen(PORT, ()=>{
  console.log('server is running')
})