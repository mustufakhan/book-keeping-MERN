const asyncHandler = require('express-async-handler');
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authMiddleware = asyncHandler( async(req, res, next)=>{
  let token;
	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
		try{
			token = req.headers.authorization.split(' ')[1];
			const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
			const user = await User.findById(decode.id);
			req.user = user;
			next();
		}catch(e){
			console.log("error",e)
			res.status(401)
			throw new Error('not authorized')
		}
	}
})
module.exports = authMiddleware