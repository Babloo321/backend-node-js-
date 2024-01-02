const express = require('express');
require('../config');
const product = require('../product');

const app = express();
app.use(express.json());

app.put('/update/:_id', async (req, res) => {
    let data = await product.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data);
    if(data.acknowledged) console.log(`data is updated successfully`);
    
})
app.listen(7000);