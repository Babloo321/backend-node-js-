const express = require('express');
const dbConnect = require('./database');
const app = express();
app.use(express.json());
app.put('/:name', async (req, res) => {
    let resp = await dbConnect();
    let data = await resp.updateOne(
        // {name: "S-glaxy"},
        // {name: req.body.name},
        // using prams
        {name: req.params.name},
        {$set:req.body}
    );
    res.send({update: "updates successfull"});
})
app.listen(7000);