const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const loginModel = require('./models/loginModel')

const app  = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1s:27017/gymnasiumLogin");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    loginModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
           res.json("No record existed") 
        }
    })
})

app.post('/register',(req,res)=>{
     loginModel.create(req.body)
     .then(loginmodels => res.json(loginmodels))
     .catch(err => res.json(err))
})

app.listen(3001,() =>{
    console.log("server is running")
})