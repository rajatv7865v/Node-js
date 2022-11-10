module.exports= appFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("enter age frst")
    }
    else{
        next();
    }
}