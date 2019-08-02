const express = require('express');
const session = require('express-session');


module.exports = function() {
    var router = express.Router();

  // router.get('/myinfo', (req, res) => {
  //   console.log('/myinfo 요청 받음')
  //   res.send('Go to profile');    
  // })

  return router;
}