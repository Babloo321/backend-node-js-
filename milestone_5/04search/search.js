const express = require('express');
require('./config');
const model = require('./model');
const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
    let data =  await model.find(
        {
            "$or":[
                { "name": {$regex: req.params.key}},
                { "brand": {$regex: req.params.key}}
            ]
        }
    );
    console.log(data);
    res.send(data);
})
app.listen(7000);