const express = require("express");
const app = express();
const port = 7777;

const connectDB=  require("./config/DataBase");
const User= require("./models/user");

app.use(express.json());


app.post("/signup",async(req,res)=>{
    const user=new User(req.body);
    try{

    await user.save();
    res.send("User data added successfully");

    }
    catch(err){
        console.log(err);
        res.status(401).send("something went wrong");
    }
    
});

connectDB()
.then(()=>{
    console.log("Connection To the dataBase is successfully established");
    app.listen(port,()=>{
        console.log(`server is listening at port ${port}`)
    })
})
.catch((err)=>{
    console.log("something went wrong..........");
})

