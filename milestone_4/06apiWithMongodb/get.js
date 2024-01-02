const express = require('express');
const database = require('./main');
const app = express();
app.get('/', async (req, res) => {
    let db = await database();
    
   console.log(db);
    res.send(db);
})
app.listen(5000);