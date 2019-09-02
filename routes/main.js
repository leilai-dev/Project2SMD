const express = require('express');
const session = require('express-session');
const upload = require('./fileupload');
const multer = require('multer');

module.exports = function() {
    var router = express.Router();
    

  // router.get('/myinfo', (req, res) => {
  //   console.log('/myinfo 요청 받음')
  //   res.send('Go to profile');    
  // })

  return router;
}