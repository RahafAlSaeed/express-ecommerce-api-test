const mongoose = require("mongoose");

const { dev } = require(".");

exports.connectDB = async () => {
  try {
    await mongoose.connect(
      dev.db.MONGODB_URI || 'mongodb+srv://RahafAlsaeed:Rahaf12345@cluster0.dhetf0m.mongodb.net/test?retryWrites=true&w=majority'
    );
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected");
    console.log(error.message);
    process.exit(1);
  }
};
