let secureApi = (req,res,next) =>{
    // console.log(req.headers.authorization)
    if(req.headers.authorization == 12345){
        next();
    }
    else{
        res.send({error:"Not valid way"})
    }
}

module.exports = secureApi;