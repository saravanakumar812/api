const Product = require("../Modal/product");
const Signup = require("../Modal/signup");

const getAllProducts = async (req, res) => {
  const data = await Product.find({}).sort("foodName");
  res.status(200).json({ message: "Get All Products Successfully", data });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.findOne({ foodName: req.body.foodName });

  res
    .status(200)
    .json({ message: "Get All Products Testing Successfully", data });
};

const signUp = async (req, res) => {
  try {
    // Check if the user already exists
    const existingUser = await Signup.findOne({ email: req.body.email });

    if (existingUser) {
      // If user already exists, return an error message
      return res.status(400).json({
        message: "User already exists. Please try a different name.",
        error: true,
      });
    }

    // Create a new signup document
    const newSignup = new Signup({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      country: req.body.country,
    });

    // Save the new signup document
    const result = await newSignup.save();

    // Success response
    res.status(200).json({
      message: "Sign Up Successfully",
      error: false,
      userId: result.userId,
    });
  } catch (err) {
    // Error response
    console.error(err);
    res.status(500).json({
      message: "An error occurred during signup",
      error: err,
    });
  }
};
module.exports = { getAllProducts, getAllProductsTesting, signUp };
