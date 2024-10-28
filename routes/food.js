const express = require("express");
const multer = require("multer");
const Food = require("../Modal/food");
const router = express.Router();

// Configure multer to store images in an 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

// Route to handle product creation with an image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const food = new Food({
      foodName: req.body.foodName,
      image: imageUrl
    });

    await food.save();
    res.status(200).json({ message: "Product created successfully", food });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});

module.exports = router;
