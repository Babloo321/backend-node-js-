// const exp = require('express');
// const path = require('path');
// const app = exp();
// const publicPath = path.join(__dirname,'public');
// // app.use(exp.static(publicPath));

// //removing extension on browser
// app.get('',(_, res) => {
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about',(req, res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// })
// app.get('/contact', (req, res) => {
//     res.sendFile(`${publicPath}/contact.html`);
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/error.html`);
// })
// app.listen(5000);


const exp = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'public');
const app = exp();
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
})
app.get('*',(req, res) => {
    res.sendFile(`${publicPath}/error.html`);
})
app.listen(500);