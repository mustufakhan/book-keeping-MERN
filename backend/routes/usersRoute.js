const express = require('express')
const userRoute = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const generataToken = require('../utils/generateToken')
const authMiddleware = require('../middleware/authMiddleware')

userRoute.post(
  '/register',
   asyncHandler(async (req,res)=>{
    const{name, email, password}=req.body;
    const userExits = await User.findOne({email:email})
    if(userExits){
      throw new Error('User exits')
    }
    const user = await User.create({name, email, password})
    res.status(200)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generataToken(user._id)
    })
  })
)

userRoute.post('/login',
  asyncHandler( async(req,res)=>{
    const{name, email, password}=req.body;
    const user = await User.findOne({email})
    if(user && await(user.isPasswordMatch(password))){
      res.status(200)
      res.json
      ({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generataToken(user._id)
      })
    }else{
      res.status(401)
      throw new Error('invalid credentails')
    }
}))

userRoute.get('/', authMiddleware,(req,res)=>{
  res.send("fetch users")
})

module.exports = userRoute