const jwt = require('jsonwebtoken')
const generataToken = (userId) =>{
  return jwt.sign({id:userId}, process.env.JWT_SECRET_KEY, {
		expiresIn:'30d',
	})
}
module.exports = generataToken