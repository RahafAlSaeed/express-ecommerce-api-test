const { Product } = require("../models/productSchema");

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).send({
      message: "Get all the product",
      payload: products,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

// Get a single product by id
const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id });

    if (!product) {
      res.status(404).send(`product not found with id: ${id}`);
    }

    res.status(200).send({
      message: "Return a single product",
      payload: product,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getAllProducts, getProductById };
