const dbConnect = require('./database');
const index = async () => {
    let db = await dbConnect();
    db = await db.find().toArray();
    return db;
}
module.exports = index;