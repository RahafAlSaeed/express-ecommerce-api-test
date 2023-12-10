require("dotenv").config();

exports.dev = {
  app: {
    port: process.env.PORT || 3005,
  },
  db: {
    url: process.env.MONGODB_URI || "",
  },
};
