const mongoose = require("mongoose");
// const mongodb = require('mongodb');
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-commerce");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({ name: "MIU-24", price: 1000 });
  let result = await data.save();
  console.log(result);
};
main();
