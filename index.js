console.log('hello')
//println('hello)

const express= require('express');
const mongoose =require('mongoose');

//import from other files
const authRouter=require('./routes/auth');
// const adminRouter = require("./routes/admin");
const adminRouter=require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require("./routes/user");
//INIT

//import package:express/express.dart'
const PORT = process.env.PORT || 3000;
const app = express();
const DB="mongodb+srv://tranminhtuand2:khach0124@cluster0.u7ewwsz.mongodb.net/?retryWrites=true&w=majority"

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//conection
mongoose.connect(DB).then(()=>{
    console.log("succes");
}).catch(e=>{
    console.log(e);
});


//import 'package:flutter/screens/auth.dart
//import'./features/auth/screens/auth_screen.dart'


//creating an API
//http://<youripaddress>/hello-word
//create a Get Request giving a json response  with key of name 
//and value of your name

//get,put,post,delete,update-CRUD

app.listen(PORT,()=>{
    console.log(`connecting ad port ${PORT} ` );
})
