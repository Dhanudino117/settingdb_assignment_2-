require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// Load environment variables
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1); // Exit the application on error
  });

// Set up a basic route
app.get("/", (req, res) => {
  res.send("Customer Management System is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
