// its time for nodemon, postman, and queries/apis

const express = require('express');
const app = express();

const { products} = require('./db/data');

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1><a href='/api/products'>Products</a>")
})

//return all products
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, age} = product
        return {id, name, age}
    })
    res.json(newProducts)
})

//This is how you set up params for the data query

app.get("/api/products/:productID", (req, res) => {
    console.log(req.query)
    const {productID} = req.params
    const singleProduct = products.find(product => product.id === Number(productID))
    if(!singleProduct) {
        return res.status(404).send("Product not found")
    }else if(req.query.Life == "42"){
        return res.status(200).send("The answer to life, the universe, and everything is 42")
    }
    return res.json(singleProduct)
})

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.productID))
    res.send("product has beedn reviewed by a person, 10/10")
})

//sets up a query that you can grab

app.get("/api/v1/query", (req, res) => {
    //console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => console.log("Server is running on port 5000"));