const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const main = require('./routes/main')();

app.use('/main', main);

app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})


app.listen(PORT);