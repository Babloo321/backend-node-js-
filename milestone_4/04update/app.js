const dbConnect = require('./mongodb')

// dbConnect().then(prod => prod.find().toArray().then(item => console.log(item)));

const main = async () => {
    const db = await dbConnect();
    const data = await db.find().toArray();
    console.table(data);
}
main();