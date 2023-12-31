const dbConnect = require('./mongodb');


// dbConnect().then((product) => {
//     product.find().toArray().then((item)=> console.log(item));
// })
// dbConnect().then(product => product.find().toArray().then(item => console.table(item)))
const main = async () =>{
    let data = await dbConnect();
    const items =await data.find().toArray();
    console.log(items);
}
main();