const express = require('express')
const userRoute = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

userRoute.post(
  '/register',
   asyncHandler(async (req,res)=>{
    const{name, email, password}=req.body;
    const userExits = await User.findOne({email:email})
    if(userExits){
      throw new Error('User exits')
    }
    const user = await User.create({name, email, password})
    res.send(user)
  })
)

module.exports = userRoute