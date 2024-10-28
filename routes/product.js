const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
  getAllProducts,
  getAllProductsTesting,
  signUp
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/testing").post(getAllProductsTesting);
router.route("/signup").post(signUp);

module.exports = router;
