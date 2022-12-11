const express = require ("express");
const app = express ();
const mongoose = require("mongoose");
const User = require("./users");
const User1 = require("./medicines");
var bodyParser = require('body-parser');
var jsonParser=bodyParser.json();

let uri= "mongodb+srv://shawon:Q1NyrSH5eKp9xGhw@cluster0.hlcznzy.mongodb.net/first?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);
mongoose.connect(uri, {
         useNewUrlParser: true,
         useUnifiedTopology: true
     }) .then(()=>{
    console.warn("connected with db");
 })


app.get('/api/User',function(req,res){
    User.find().then((data)=>{
     res.json(data)
    })
})

app.post('/api/User',jsonParser,function(req,res){

    const data= new User({
        _id:new mongoose.Types.ObjectId,
        name : req.body.name,
        email : req.body.email,
        address : req.body.address
    })
    data.save().then((result)=>{
        res.json(result)
    })
    .catch((error)=>console.warn(error))
})

app.delete('/api/User/:id',function(req,res){
    User.deleteOne({_id:req.params.id}).then((result) => {
        res.status(200).json(result)
    })
    .catch((err)=>console.warn(err))
})

app.get('/api/Product',function(req,res){
    User1.find().then((data)=>{
     res.json(data)
    })
})

app.post('/api/Product',jsonParser,function(req,res){

    const data= new User1({
        _id:new mongoose.Types.ObjectId,
        name : req.body.name,
        price : req.body.price,
        manufacturer : req.body.manufacturer
    })
    data.save().then((result)=>{
        res.json(result)
    })
    .catch((error)=>console.warn(error))
})

app.delete('/api/Product/:id',function(req,res){
    User1.deleteOne({_id:req.params.id}).then((result) => {
        res.status(200).json(result)
    })
    .catch((err)=>console.warn(err))
})

app.listen(5001);

