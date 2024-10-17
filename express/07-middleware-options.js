const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static('./public'));

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.send("welcone home")
});

app.get('/about', (req, res) => {
    res.send("about page chumpington")
});

app.get("/api/items", function(req, res){
    res.send("chumpington items")
})

app.get("/api/products", function(req, res){
    res.send("chumpington products")
})

app.get("*", function(req, res){
    res.status(404).send("Page not found")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})