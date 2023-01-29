// DEPENDENCIES
const express = require("express");
const cors = require("cors");

const snacksController = require("./controllers/snackController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use("/snacks", snacksController);

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Snack-A-Log App");
  });
  
  app.get("*", (req, res) => {
    res.status(404).json("Page not found");
  });

// EXPORT
module.exports = app;

