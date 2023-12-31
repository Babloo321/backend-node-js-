const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017";
const clint = new MongoClient(url);
const database = "e-commerce";

const dbConnect = async () => {
    const result =await clint.connect();
    const db = result.db(database);
    return db.collection("product");
}
module.exports = dbConnect;