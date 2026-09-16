const mongoose=require("mongoose");


const Userscheme=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String
    },
    Age:{
        type:Number
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    }
});

const user=mongoose.model("user",Userscheme);
module.exports = user;