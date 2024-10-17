const authorize = (req, res, next) => {
    //an example of how an api key can be used, NOT PROPER FOR ACTUAL USE, just an example
    var {apikey} = req.query
    if(apikey == 'ping'){
        console.log("Authorized")
        // modifies the req for the next res
        req.user = {name: "Jersey Mikes", id: 12453}
        next()
    }else{
        console.log("Not authorized")
        res.send({results:[], status: 401, message: "Access Denied"})
    }
}
module.exports = authorize;