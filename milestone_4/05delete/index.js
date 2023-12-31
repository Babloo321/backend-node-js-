const dbConnect = require('./mongodb');
// dbConnect().then(pro => pro.find().toArray().then(data => console.log(data)));


const main = async () => {
    const db = await dbConnect();
    const result = await db.find().toArray();
    console.log(result);
}
main();