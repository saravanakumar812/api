// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const upload = multer();
// const Product = require("../Modal/product");

// router.get("/", async (req, res) => {
//   const data = await Product.find({}).sort("foodName");
//   res.status(200).json({ message: "Get All Products Successfully", data });
// });

// module.exports = router;
const express = require("express");
const multer = require("multer");
const Product = require("../Modal/product");
const router = express.Router();

// Configure multer to store images in an 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
    console.log(file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route to handle product creation with an image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { foodName } = req.body;
    const imageUrl = req.file ? `../uploads/${req.file.filename}` : null;

    const product = new Product({
      foodName,
      image: imageUrl
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});

module.exports = router;
