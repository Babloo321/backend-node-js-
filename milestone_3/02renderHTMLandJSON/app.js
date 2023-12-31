const exp = require('express');
const app = exp();
app.get('', (req, res) => {
    res.send(`<h1>Welcom to the home page</h1>
    <a href="/about">Goto about page</a>
    `);
    // res.send(` <button>Click_Me</button>`)  // this will not working
})
app.get('/about', (req, res) => {
    res.send(`
    <input type='text' placeholder='enter your name' value="${req.query.name}"/>
    <button>Click me</button>
    <a href="/">Goto Home page</a>
    `)
})
app.get('/json', (req, res) => {
    res.send([      // can send array of object or normal object
        {
            name: "babloo",
            age : 24,
            phone: 939302492,
            pin : "845411"
        },
        {
            name: "Sona",
            age : 23,
            phone: "342525",
            pin : "845420"
        },
        {
            name: "Naina",
            age : 3,
            phone: "9898799",
            pin : "845411"
        }
    ])
})
app.listen(5000);