const mongoose=require("mongoose");

const AdminSchema= new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String
    },
    Password:{
        type:String,
        required:true
    }
});

const Admin=mongoose.model("Admin",AdminSchema)

module.exports = Admin;