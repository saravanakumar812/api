require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const product_routes = require("./routes/product");

const connectDB = require("./db/connect");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", product_routes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(` ${port} Connected with Port `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
