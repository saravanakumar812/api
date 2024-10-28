const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
  getAllProducts,
  getAllProductsTesting,
  signUp,
  login
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/testing").post(getAllProductsTesting);
router.route("/signup").post(signUp);
router.route("/login").post(login);

module.exports = router;
