const express=require('express')
var cors = require('cors')
var axios = require('axios');
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const router = require('./api')
dotenv.config()
 
app.use(cors());
app.use(bodyParser.json())
app.use('/', router)

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(()=>{
    console.log('connect')
}).catch(err=>{
    console.log(err)
})


app.listen(4000, ()=>{
    console.log("listen node 4000!")
})