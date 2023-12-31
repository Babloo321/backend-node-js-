const dbConnect = require('./mongodb');

const main = async () => {
    const db = await dbConnect();
    return await db.find().toArray();
}
module.exports = main;