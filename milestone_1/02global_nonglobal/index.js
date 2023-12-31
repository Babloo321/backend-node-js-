// const fs = require("fs");           // fs -> it is non-global importing outside the file
// console.log("hello guys\nLearning node js with anil shidhu");       // console->it is non-global
// fs.writeFileSync("message.txt", "this is message for file system");
// const file = fs.readFileSync('message.txt');
// console.log(file);

const fs = require('fs').writeFileSync;         // specific methods or function require
fs('test.txt', "this is an example for testing purpose");