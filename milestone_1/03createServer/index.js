const http = require('http');
http.createServer((req, res) => {
    // req: it is request comming from clint side
    // res: it is response which we want to render on clint side
    res.write(`
    <div>
    <h1>Hello I'm Babloo Kumar</h1>
    <p>I'm learning node js</p>
    </div>
    `)
    res.end();


}).listen(4500);