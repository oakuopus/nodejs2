const express = require("express")
const app = express()
let {people} = require("./db/data")

//static assets
app.use(express.static("./public"))

//parse form data built in middleware func express that parses incoming reqs, if you check req.body with it then you will see value is undefined
app.use(express.urlencoded({extended: true}))

//parse form data this works like the urlencoded middleware but for json
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.json({success: true, data: people})
})

app.post("/api/people", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success: true, data:name})
    }
    return res.status(404).json({success: false, msg: "Name is required"})
})

//Above is for javascript.html
//Below is for index.html

app.post("/login", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success: true, data: name})
    }
    res.send("please provide credentials")
})

app.listen(5000, () => console.log("Server running on port 5000"))