const express = require("express")
const path = require("path")
const app = express()

//static middleware
// middleware comes in the middle of the req and the res cycle of the node.js execution
// It also provides access to monay funcs like request and the response objects

//res obect is passed as the second arg/param to the requestlistener func
//the res obj represents the writable stream back to client
//--write() sends text or streams to the client
// --writeHead() sends status and response headers to the client
// --end() Signals that the severs should consider that the response object is complete
// --setTimeout() Sets the timeout value of the socket to the specified val in mms
// --statusCode() returns the status code that will be sent to client


//for the writeHead and statusCode methods, the following are accepted:
//100-199 information response
//200-299 succesful response
//300-399 redirect msg
//400-399 user err
//500-599 server err
//detailed list at developer.mozilla.org/en-US/docs/HTTP/Status

//The Request obj is made by a client to a named host which is on the server
//  the aim of req is to access resources on the server
// a proper HTTP req has:
// -- A request line
// -- A series of HTTP  headers
// -- A msg body

//request line
//Has 3 main aspects
//-- a method like GET, UPDATE, DELETE, ..etc and tells server who it is or what shuld be done with the resource
//--the path component identifies the resource on the server
//-- the HTTP version number showing what spec to which the client has tried to make the msg comply

//HTTP headers:
// HTTP headers are written on a message to provide the reciever with the info abt the req, the sender and the way ion which the sender wants to communicate with the server/recipient
//ex. {"content-type": "text/html"} or: -host, user-agent, etc..

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    console.log(req.url)
    res.sendFile(path.resolve(__dirname, "public/index.html"))
})

app.post("/", (req, res) => {
    console.log(req.url)
    res.status(404).send("lil bro stop posting on the index")
})

app.get("*", (req, res) => {
    res.status(404).send("404 you cannot used this jaun")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})