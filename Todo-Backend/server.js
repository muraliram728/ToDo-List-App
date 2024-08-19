require('dotenv').config(); // Load environment variables
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

// Create an instance of express
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/todos", todoRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
