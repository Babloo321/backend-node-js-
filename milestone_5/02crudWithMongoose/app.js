const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-commerce");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  const newProduct = new ProductModel({
    name: "MI-PRO",
    price: 1200,
    brand: "micromax",
    category: "mobile",
  });
  const data = await newProduct.save();
  console.log(data);
};
// main();
const updateInDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-commerce');
    const ProductSchema = new mongoose.Schema(
        {
            name: String,
            price: Number,
            brand: String,
            category: String
        }
    )
  const database = mongoose.model("products", ProductSchema);
  const data = await database.updateOne(
    { name: "MIU-12" },
    { $set: { price: 1200, brand: "micromax", category: "mobile" } }
  );
  console.log(data);
};
// updateInDb();

const deleteInDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-commerce');
    const ProductSchema = new mongoose.Schema(
        {name: String, price: Number, brand: String, category: String}
    )
    const database = mongoose.model('products', ProductSchema);
    const result = database.deleteOne({name: "MIU-12"});
    if((await result).acknowledged) console.log('record deleted successfull');
}
// deleteInDb();

const readInDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-commerce');
    const ProductSchema = new mongoose.Schema(
        {name: String, price: Number, brand: String, category: String}
    )
    const database = mongoose.model('products', ProductSchema);
    const result = await database.find()
    console.log(result);
}
readInDb();