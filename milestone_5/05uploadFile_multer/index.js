const express = require('express');
const multer = require('multer');

const app = express();
// Math.floor(Math.random())+1
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb)
        {
            cb(null, "uploads");        // which directory you have to upload
        },
        filename: function(req, file, cb)
        {
            cb(null, file.fieldname+"_"+Date.now()+".jpg");
        }
    })
}).single("user_file")

app.post('/upload',upload, (req, res) => {
    res.send("upload successfull");
});
app.listen(7000);