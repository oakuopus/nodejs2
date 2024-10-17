const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    console.log("User Hit Resource")
    res.status(200).send("Home Page found!")

})

app.get("/about", (req, res) =>{
    res.status(200).send("About Page Found")
})

app.get("*", (req, res)=>{
    res.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5000, () =>{
    console.log("Listening on localhost:5000")
})