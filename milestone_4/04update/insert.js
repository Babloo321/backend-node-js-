const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        {name: "glaxyA31", brand: "samsun", price: 345, category: "mobile"}
    )
    if(result.acknowledged) console.log('data inserted successfully');
}
insert();