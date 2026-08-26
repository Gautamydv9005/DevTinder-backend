const express=require('express');
const app=express();
const port=7777;

app.use("/",(req,res)=>{
    res.send("hello gautam from home page");
})
app.use("/test",(req,res)=>{
    res.send("hello from test route");
})

app.listen(port,()=>{
    console.log("server is running at port ")
})