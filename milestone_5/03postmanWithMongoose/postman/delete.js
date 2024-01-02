const express = require('express');
require('../config');
const product = require('../product');
const app = express();

// app.use(express.json())

app.delete('/delete/:_id', async (req, res) => {
    let data = await product.deleteOne(req.body)
    console.log(req.params);
    res.send(data);
})

app.listen(7000);