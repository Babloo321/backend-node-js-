console.log("first");
setTimeout(() => {          // it goes NodeAPIs with 2sec
    console.log('second');
}, 2000);
setTimeout(() => {          // it goes NodeAPIs with 0sec
    console.log('third');
}, 0);
console.log('final');       // so first execute all call stack functions than callback queue