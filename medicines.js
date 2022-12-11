const mongoose = require('mongoose');
let userSchema1= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    price: mongoose.Schema.Types.Number,
    manufacturer: String
});

module.exports=mongoose.model('medicines',userSchema1);
