const express=require('express');
const app=express();
const port=7777;

// app.get("/user/:id",(req,res)=>{
//     res.send(`user id:${req.params.id}`);
// });
app.get("/users",(req,res)=>{
    console.log(req.query.age);
    res.send("done");
})


app.post("/user",(req,res)=>{
    res.send("data uploaded sucessfully");
})
app.delete("/user",(req,res)=>{
    res.send("data dekete successfully");
})

app.listen(port,()=>{
    console.log("server is running at port ")
});