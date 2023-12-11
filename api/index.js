const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const { connectDB } = require("../config/db");
const productRoute = require("../routers/productsRouter");

const app = express();

const port = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to express-server");
});

app.use("/products", productRoute);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
