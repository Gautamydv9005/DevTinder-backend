const adminauth=(req,res,next)=>{
    console.log("admin auth is getting checkedd ");
    const token="xyz";
    const authorized=token==="xyz";
    if(!authorized){
        res.status(401).send("data access denied");
    }else{
        next();
    }
};

const userauth=(req,res,next)=>{
    const token="xyz";
    const authorized= token==="xy4z";
    if(!authorized){
        res.status(401).send("access denied");
    }else{
        next();
    }
};


module.exports={
    adminauth,
    userauth,
}