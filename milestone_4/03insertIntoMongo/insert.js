const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
      [
        {name:"S 44", brand:"micromax", price:340, category:"mobile"},
        {name:"A 44", brand:"samung-glaxy", price:1340, category:"mobile"},
        {name:"A 24", brand:"samung-glaxy", price:640, category:"mobile"},
        {name:"M 44", brand:"micromax", price:340, category:"mobile"},

      ]
    )
    if(result.acknowledged) console.log("data inserted successfully");
}
insert();