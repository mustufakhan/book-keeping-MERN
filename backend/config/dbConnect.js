const mongoose = require('mongoose')

const dbConnect = () =>{
  mongoose.connect('mongodb+srv://user:12345@cluster0.nl9vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
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