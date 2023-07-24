const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("inside try block");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("after trying to connect");
    console.log(`MongoDb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Message: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
