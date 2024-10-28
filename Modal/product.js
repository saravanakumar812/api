const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL of the image
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
