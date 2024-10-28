const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/testing").post(getAllProductsTesting);

module.exports = router;
