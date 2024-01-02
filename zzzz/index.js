const express = require('express');
require('./config');
const database = require('./products');
const app = express();
app.use(express.json());

app.get('/get', async (req, res) => {
    let data = await database.find();
    res.send(data);
    console.log(data);
});

app.post('/post', async (req, res) => {
    let data = new database(req.body);
    data = await data.save();
    res.send(data);
    console.table(data);
});

app.put('/update/:_id', async (req, res) => {
    let data = await database.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data);
    if(data.acknowledged) console.log("data updated successfully");
});

app.delete('/delete/:_id', async (req, res) => {
    let data = await database.deleteOne(req.params);
    res.send("Data deleted successfull");
    if(data.acknowledged) console.warn("data deleted successfull");
});

app.listen(7000);