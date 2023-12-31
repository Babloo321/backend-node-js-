const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/profile', (_, res) => {
    const user = {
        name: 'aadi kumar',
        email: "aadi@gamil.com",
        phone: "8595636926",
        skills: ['php', 'javascript', 'c++', 'c'],
    }
    res.render('profile', {user})
})
app.get('/login',(_, res)=>{
    const user = {
        name: 'aadi kumar',
        email: "aadi@gamil.com",
        phone: "8595636926",
        skills: ['php', 'javascript', 'c++', 'c'],
    }
    res.render('login',{user})
})

app.listen(5000);