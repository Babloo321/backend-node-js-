const express = require('express');
const dbConnect = require('./database');
const app = express();
app.use(express.json());
app.get('/', async (req, res)=>{
    const result = await dbConnect();
    const data = await result.find().toArray();
    res.send(data);

})
app.post('/', async (req, res) => {
    const database = await dbConnect();
    let data =await database.insertMany(req.body);
    res.send(data);
    console.log(data);
    

});
app.listen(7000);