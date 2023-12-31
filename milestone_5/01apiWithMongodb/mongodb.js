const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-commerce';
const dbConnect = async () => {
    const result = await client.connect();
    const db = await result.db(database);
    return db.collection('product');
}
module.exports = dbConnect;