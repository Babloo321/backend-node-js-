// console.log("first line");

// setTimeout(() => {
//     console.log("second line");      // this tell us to it is an asynchronous language it can't wait for answer
// }, 2000);

// console.log("third line");

console.log("first")
console.log("second")
console.log("third")                    // this is working like synchronous so it's behivour is synchrounous because it is single threaded language


// drawback of asynchronous
let a = 30;
let b = 0;
setTimeout(() => {
    b = 20;
}, 1000);
console.log(a+b);       // given output is: 30
