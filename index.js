const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const userRoute = require('./router/users')

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser())


app.use('/user', userRoute)

const connect = async () => {
  try{
    // console.log(process.env.MONGO);
    await mongoose.connect(process.env.MONGO)
    console.log("run DB");
  } catch(err){
    throw err
  }
}


app.listen(8080, () => {
  connect()
  console.log('run server');
})