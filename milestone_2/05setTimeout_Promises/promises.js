// to the removing of the drawback of asynchronous used promise or async await
// we can make our nodejs or js as synchronous using promise
let a = 30;
let b = 0;
let mypromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(20)
    }, 1000);
})
mypromise.then((data)=>{
    b = data;
    console.log(a+b);
})