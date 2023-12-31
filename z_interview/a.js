
// function showData(){
//     console.log("Variable: ", name);
//     console.log("Variable: ", age);
//     var name= "Norem red";
//     let age = 999;
// }
// showData();

// for(var i = 0; i < 5; i++){
//     setTimeout(()=> console.log(i),5);
// }
// console.log("after var");
// for(let i = 0;i < 4; i++){
//     setTimeout(()=> console.log(i), 5);
// }


// const income = {
//     skills : 108,
//     monthly(){
//         return this.skills * 108;
//     },
//     yearly: () => 888 * this.skills
// }
// console.log(income.monthly());
// console.log(income.yearly());

// console.log(+true);     // 1
// console.log(!"JavaScript");//false

// const code = {
//     type : "web",
// };
// const reactjs = {
//     name : "js",
//     web : true,
// };

// let a = {greeting: 'HI'};
// let z = a;
// z.greeting="Bye";
// a.goodby = "the end";
// console.log(a.goodby);
// console.log(z.goodby);

let a = 111;
let b = new Number(111);
let c = 111;
console.log(a == b);    // true
console.log(a === b);   // false
console.log(b === c);   // false

