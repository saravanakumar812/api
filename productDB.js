require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./Modal/product");
const ProductJson = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
