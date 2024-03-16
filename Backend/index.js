const connectToMongo = require('./db.js');
const express = require('express')

connectToMongo();
const app = express()
const port =  3000;

app.use(express.json())

//available routes  
app.use('/api/auth',require('./routes/auth'))

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(port,()=>{
    console.log(`example app listening at ${port}`)
})