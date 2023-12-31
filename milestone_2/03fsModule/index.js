const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
console.log(dirPath)
// for(let i = 0; i < 5; i++){
//     fs.writeFileSync(`hello${i}.txt`,"this is random file")      // to create files
//     // fs.unlinkSync(dirPath+`hello${i}.txt`)                      // to remove files
// }
fs.readdir(dirPath,(err,files)=>{
    console.log(files);
    files.forEach((item)=> console.log(item));
})