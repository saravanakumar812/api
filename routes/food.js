const express = require("express");
const multer = require("multer");
const Food = require("../Modal/food");
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
    const imageUrl = req.file ? `../uploads/${req.file.filename}` : null;

    const food = new Food({
      foodName: req.body.foodName,
      image: imageUrl
    });

    await food.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});

module.exports = router;
