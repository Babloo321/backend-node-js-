const express = require('express');
const dbConnect = require('./database');
const app = express();
const mongodb = require('mongodb');
app.use(express.json());
// app.get('/', async (req, res) => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     res.send(data);
// })

app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    // data = await data.deleteOne(
    //     {name:"S-10"}
    // )
    //using prams
    data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(data);
})
app.listen(7000);