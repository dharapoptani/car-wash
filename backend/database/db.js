const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(" DB connected successfully"))
    .catch((err) => console.log("helloworld" + err));
};

module.exports = connectDB;
