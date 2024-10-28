const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL of the image
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Product", productSchema);
