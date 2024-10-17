const express = require('express');
const app = express();
logger = require('./middleware/logger')
//request ==> middleware ==> response

app.get('/', logger, (req, res, next) => {
    res.send("home")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})