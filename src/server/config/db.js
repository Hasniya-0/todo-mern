const mongoose = require("mongoose");

const connectDB = async () => {
  const maxRetries = 10; // try 10 times
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("✅ MongoDB Connected");
      break;
    } catch (err) {
      retries++;
      console.log(`❌ MongoDB Connection Failed (${retries}/${maxRetries}) - retrying in 5s`);
      await new Promise(res => setTimeout(res, 5000)); // wait 5 seconds
    }
  }

  if (retries === maxRetries) {
    console.error("❌ Could not connect to MongoDB after multiple attempts");
    process.exit(1);
  }
};

module.exports = connectDB;
