const mongoose = require('mongoose')

const dbConnect = () =>{
  mongoose.connect(process.env.MONGO_DB_URL,{
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(()=>{
    console.log('connected')
  })
  .catch((err)=>{
    console.log('err', err)
  })
}
module.exports = dbConnect