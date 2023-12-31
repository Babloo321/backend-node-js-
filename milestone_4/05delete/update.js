const dbConnect = require('./mongodb');

const update = async () => {
    const db = await dbConnect();
    const result = await db.updateOne(
        {name: 'one + pro'},{
            $set: {name: 'glaxy-A-31', brand:"samsung", price:"345"}
        }
    )
    if(result.acknowledged) console.log('update data successfully');
}
update();