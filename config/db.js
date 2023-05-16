const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Server Issue ${error}`);
  }
};

module.exports = connectDB;
