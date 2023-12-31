const { set } = require('mongoose');
const dbConnect = require('./mongodb');

const update = async () => {
    const db = await dbConnect();
    // const result =await db.updateOne(        // single update
    //     {name :"M 44"},{
    //         $set: {name : "M max-pro", price:540,}
    //     }
    //     )

    const result = await db.updateMany(
        {brand: "micromax"},{
            $set: {brand:"oppo", price:730}
        }
    )
        if(result.acknowledged) console.log('updated successfully');
    
}
update();