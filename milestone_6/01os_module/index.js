const os = require('os');
console.log(`Architecture: ${os.arch()}`);
console.log(`User Information: ${JSON.stringify(os.userInfo())}`);
console.log(`Free Memory in System: ${os.freemem()/(1024*1024*1024)}`);
console.log(`Total Memory in System: ${os.totalmem()/(1024*1024*1024)}`);
console.log(`Host name: ${os.hostname()}`)
console.log(`Plateform name: ${os.platform()}`)