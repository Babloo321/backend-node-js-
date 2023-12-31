const express = require('express');
const app = express();
app.get('', (req, res)=>{
    // console.log("data: " + req.query.name);
    res.send(`Welcome ${req.query.name} this is home page`);
})
app.get('/about', (req, res) => {
    res.send("this is about page");
})
app.get('/contact', (req, res) => {
    res.send("This is contact us page");
})
app.listen(5000);