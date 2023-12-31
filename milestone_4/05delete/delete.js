const dbConnect = require('./mongodb');

const deleteData = async () => {
    const db = await dbConnect();
    const result = await db.deleteOne({name:'glaxy-A-31'});
    if(result.acknowledged) console.log('deleted data successfully');
}
deleteData();