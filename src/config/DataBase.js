const mongoose = require("mongoose");

const connectDB= async()=>{
    mongoose.connect("mongodb+srv://Gautam:Gautam2722@gautam.ativafl.mongodb.net/DevTinder");
}

module.exports = connectDB;