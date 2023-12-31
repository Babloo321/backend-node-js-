/*  middleware: middleware is like a function which handle the request comes to the clint server
and send the response according to the needs, which is used with the routers and moving to the
next middleware function in the application request-response cycle.
*/
const express = require('express');
const app = express();
const routeMiddleware = require('./middleware/route_level_middleware')
const route = express.Router();
route.use(routeMiddleware);         //for using grouping route
// application-level middleware
// const applicationMiddleware = (req, res, next)=>{
//     if(!req.query.age){
//         res.send("Please Provide age");
//     } else if(req.query.age < 18){
//         res.send('Your age is less than 18, Please provide a valid age');
//     }else{
//         next();
//     }
// }
// app.use(applicationMiddleware);

app.get('/',(req, res) => {
    res.send('<h1>This is Home Page</h1>');
})
route.get('/user',(req, res)=>{
    res.send("<h1>This is user page</h1>");
})
route.get('/about', (req, res) => {
    res.send("<h1>This is about page</h1>");
})
route.get('/contact', (req, res) => {
    res.send("This is contact page");
})
app.use(route);
app.listen(5000);