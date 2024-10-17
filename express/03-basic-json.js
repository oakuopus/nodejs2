const express = require('express');
const app = express();

const {products} = require("./db/data")

app.get('/', (req, res) => {
    res.json(products)
}).listen(5000, () => console.log('Server running on port 5000'))
//a basic API 
//APU stands for Application Programming Interface. 

