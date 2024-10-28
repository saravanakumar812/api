const Product = require("../Modal/product");
const multer = require("multer");
const upload = multer();

const getAllProducts = async (req, res) => {
  const data = await Product.find({}).sort("foodName");
  res.status(200).json({ message: "Get All Products Successfully", data });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.findOne({ foodName: req.body.foodName });

  res
    .status(200)
    .json({ message: "Get All Products Testing Successfully", data });
};

module.exports = { getAllProducts, getAllProductsTesting };
