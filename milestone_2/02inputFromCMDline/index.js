const fileSystem = require('fs');
let val = process.argv;
// fileSystem.writeFileSync(val[2], val[3]);
if(val[2] == 'add'){
    fileSystem.writeFileSync(val[3], val[4]);
} else if(val[2]=='remove'){
    fileSystem.unlinkSync(val[3]);
}else{
    console.log("Invalid Syntax");
}