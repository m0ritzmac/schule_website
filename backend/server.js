// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Middleware to parse JSON requests
app.use(express.json());

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle MongoDB connection events
db.on("error", (error) =>
  console.error("MongoDB connection error:", error)
);

db.once("open", () => console.log("Connected to Database"));
