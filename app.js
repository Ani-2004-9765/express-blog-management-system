const express = require('express');
const {connectDB} = require('./db');
const router = require('./router/userRoute');

const methodOverride = require('method-override');
const session = require('express-session');
const brouter = require('./router/blogRouter');
const app=express();

connectDB()



app.use(
    session({
        secret:"blog application",
        resave:false,
        saveUninitialized:false
    })
)
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"))
app.set("view engine","ejs")

app.use("/",router)
app.use("/",brouter)

app.listen(4000,()=>{
    console.log("running...");
    
})