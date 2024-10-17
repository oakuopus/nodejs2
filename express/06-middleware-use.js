const express = require('express');

const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

//req ==> middleware ==> response
//order matters if you place app.use after the home pathway get, then it will not run on the home get pathway since the response will end before the middleware has a chance to run

//if you have server middleware then you can call them in an array where order matters

app.get("/", function(req, res){
    res.send("Welcome Home")
})

app.use(logger)

app.get("/about", function(req, res){
    res.send("About Us")
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})

app.use("/api", [logger, authorize])
//this will apply the logget to the api path that includes /api as apart of its path, this is a nice way for your logger to run on an api and stop acertain amount of reqs but still allow them on the home and doc pages

app.get("/api/products", (req, res)=>{
    res.send(products)
})

app.get("/api/items", (req, res)=>{
    console.log(req.user)
    res.send("Items")
})
