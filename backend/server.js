const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

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

app.post('/',(req,res)=>{
    res.send("welcome");
})
app.listen(PORT, ()=>{
    console.log('server is running')
})