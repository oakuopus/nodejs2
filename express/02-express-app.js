const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/edit.html'));
});

app.get("/javascript", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/javascript.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})