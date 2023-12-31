const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "e-commerce";

async function dbConnect(){
    const result = await client.connect();
    const db = result.db(database);
    return db.collection("product");
}
module.exports = dbConnect;