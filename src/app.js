const express = require("express");
const app = express();
const port = 7777;

const connectDB=  require("./config/DataBase");
const User= require("./models/user");
const Admin=require("./models/admin");

app.use(express.json());

// to find all user
app.get("/feed",async(req,res)=>{
    try{
        const users = await User.find({});
        if(users.length===0){
            res.send("User not found");
        }else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send("something went wrong........");
    } 
});

// to get user by _id
app.get("/user/:id",async(req,res)=>{
    try{
    const userid=reqs.params.id;
    console.log("User ID:", userid);
    const user=await User.findById(userid);
    if(!user){
        res.status(404).send("somenthing went wrong");
    }else{
    res.send(user);
    }
    }catch(err){
        res.status(500).send("somenthing went wrong");
    }
})

// to find one user
app.get("/user",async(req,res)=>{
    try{
        const users=await User.findOne({
            FirstName:"Bishal"
        })
        if(!users){
            res.status(400).send("user not found");
        }else{
             res.send(users);
        }
    }catch(err){
        res.send("something went wrong");
    }
})

// to find user by email
app.get("/user",async(req,res)=>{
    const useremail=req.body.Email;
    try{
        const user= await User.find({Email:useremail});
        if(user.length===0){
            res.status(404).send("User not found");
        }else{
            res.send(user);
        }  
    }catch(err){
        res.status(400),send("something went wrong");
    }
})




app.post("/admin",async(req,res)=>{
    try{
        const admin = new Admin(req.body);

    await admin.save();
    res.send("admin resgiter succesfully.....");

    }
    catch(err){
        res.status(500).send("something went wrong")
    }
    
})


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

