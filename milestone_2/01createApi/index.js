// const http = require('http');
// http.createServer((req, res)=> {
//     res.writeHead(200,{'content-type':'application/json'});//
//     res.write(JSON.stringify({name: "babloo", age: '25', education: "b-tech", sex: "male"}));
//     res.end();

// }).listen(5000);

const http = require('http');
http.createServer((req, res)=>{
res.writeHead(200, {"content-type":"application/json"});
res.write(JSON.stringify({
    name : "Babloo Kumar",
    salary: "345678",
    college: "Galgotias University"
}))
}).listen(5000);