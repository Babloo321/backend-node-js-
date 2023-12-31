const express = require('express');
// const dbConnect = require('./mongodb');
const main = require('./main');
const app = express();
// main().then(data => console.log(data));
app.get('/', async (req, res) => {
    // let data = await dbConnect();
    // data = await data.find().toArray();
    // console.log(data);
    const data = await main();
    console.log(data);
    res.send(data);
    // res.send(await main());
})
app.listen(7000);