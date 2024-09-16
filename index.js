const express = require("express");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is undefined

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
