const dbConnect = require('./mongodb');

const deleteCollection = async () => {
    const db = await dbConnect();
    // const result = await db.deleteOne({brand: "oppo"})       //single delete
    const result = await db.deleteMany({brand: 'oppo'});
    if(result.acknowledged) console.log('deleted successfully');
}
deleteCollection();