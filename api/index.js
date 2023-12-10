const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const { connectDB } = require("../src/config/db");

const productRoute = require("../src/routers/productsRouter");

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to express-server");
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
