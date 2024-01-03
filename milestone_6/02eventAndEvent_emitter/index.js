const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();
let count = 0;
event.on("api called", ()=>{
    count++;
    console.log(`api called: ${count}`);
})
app.get('/get', (req, res) => {
    res.send("api called on get");
    event.emit("api called");
})

app.get('/search', (req, res) => {
    res.send("api called on search");
    event.emit("api called");
})

app.get('/upload', (req, res) => {
    res.send("api called on upload");
    event.emit("api called");
})
app.listen(7000);