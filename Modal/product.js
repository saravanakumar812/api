const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
