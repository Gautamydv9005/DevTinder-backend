const express=require('express');
const app=express();
const port=7777;

app.get("/user",(req,res,next)=>{
    console.log("handling route from user1")
    next();
    res.send("hello from riute 1"); 
    
},
(req,res, next)=>{
    next();
    res.send("hello rom route 2");
},
(req,res)=>{
    res.send("hello from 3rd user route");
}

);

app.listen(port,()=>{
    console.log("server is running at port ")
});