const express = require('express');
require('../config');
const product = require('../product');
const app = express();
app.use(express.json());

app.get('/get', async (req, res) => {
    // let data = await product.find(req.body);
    let data = await product.find();
    console.log(data);
    res.send(data);
})
app.listen(7000);