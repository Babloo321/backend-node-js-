const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        {name:"one + pro", brand: "apple", price: '6400', category: 'mobile'}
    )
    if(result.acknowledged) console.log('inserted data successfully');
}
insert();