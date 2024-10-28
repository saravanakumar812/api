const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const Product = require("../Modal/product");

router.get("/", async (req, res) => {
  const data = await Product.find({}).sort("foodName");
  res.status(200).json({ message: "Get All Products Successfully", data });
});

module.exports = router;
