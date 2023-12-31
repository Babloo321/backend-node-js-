const {MongoClient} = require('mongodb')
// const MongoClient = require('mongodb').MongoClient           //both are same
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "e-commerce";
async function getData()
{
    const result =await client.connect();
    const db = result.db(database);
    const collection = db.collection("product");
    const response = await collection.find({}).toArray();
    console.table(response)
    response.forEach(item=> console.log(item))
    console.table(response.at(1));
}

getData();