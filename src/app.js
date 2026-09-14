
const express=require('express');
const app=express();
const port=7777;

const{adminauth,userauth}=require("./middleware/auth")

app.use("/admin",adminauth);

app.get("/admin",(req,res)=>{
    res.send("data assess Gurented ");
})

app.get("/user/login",(req,res)=>{
    res.send("login successfully");
})
app.use("/user",userauth,(req,res)=>{
    res.send("user acess Gurented");
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});