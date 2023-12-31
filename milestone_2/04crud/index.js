const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is simple text file');
// fs.appendFile(filePath, "\nthis is an apple.txt file", (err)=>{
//     if(!err) console.log('updated file content');
    
// });
// fs.readFile(filePath,'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.renameSync(filePath,`${dirPath}/orange.txt`, (err)=>{
//     if(err) throw err;
//     else  console.log('filename is update successfull');
// })
fs.unlinkSync(`${dirPath}/orange.txt`,(err)=>{
    if(err) throw err;
    else console.log('file is delete successfully');
})
