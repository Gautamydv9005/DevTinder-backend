const adminauth=(req,res,next)=>{
    const token="xyz";
    const authorized=token==="xyz";
    if(!authorized){
        res.status(401).send("access denied");
    }else{
        next();
    }
}

const userauth=(req,res,next)=>{
    const token="xyz";
    const authorized=token==="xyz";
    if(!authorized){
        res.status(401).send("access denied");
    }else{
        next();
    }
}

module.exports={
    adminauth,
    userauth
}