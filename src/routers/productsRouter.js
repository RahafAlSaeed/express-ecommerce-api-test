const express = require("express");

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

const route = express();

route.get("/", getAllProducts);

route.get("/:id", getProductById);

module.exports = route;
