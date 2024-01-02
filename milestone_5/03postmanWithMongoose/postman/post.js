const express = require('express');
require('../config');
const product = require('../product');
const app = express();
app.use(express.json());

app.post('/post', async (req, res) => {
    let data = new product(req.body);
    data = await data.save();
    res.send(data);
    console.log("data posted successfull");
});
app.listen(7000);