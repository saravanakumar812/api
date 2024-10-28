const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL of the image
    required: true
  }
});

module.exports = mongoose.model("Food", foodSchema);
