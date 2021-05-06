const express = require('express')
const userRoute = express.Router()
const User = require('../models/User')

userRoute.post('/register',async(req,res)=>{
  try {
    const{name, email, password}=req.body;
    const user = await User.create({name, email, password})
    res.send(user)
  }catch (error) {
    console.log(error)
  }
})

module.exports = userRoute