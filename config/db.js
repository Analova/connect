const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

mongoose.connect(db);

module.exports = connectDB;
