// app.js
const express = require('express');
const bodyParser = require('body-parser');// initialize our express app

const product = require('./routes/product.route'); // Imports routes for the products

const app = express();

app.use('/products', product);

let port = 4202;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
