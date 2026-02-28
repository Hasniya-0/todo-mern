const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB(); // Make sure this uses process.env.MONGO_URI inside db.js

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", require("./routes/todoRoutes"));

// Use dynamic PORT from Docker environment, fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
