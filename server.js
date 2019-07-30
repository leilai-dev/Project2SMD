const express = require('express');
const path = require('path');
const app = express()

app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);