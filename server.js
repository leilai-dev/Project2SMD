const express = require('express');
const path = require('path');
const app = express()

app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

app.get("/", (req,res) => {
  res.render("./src/HI")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);