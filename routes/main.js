const express = require('express');
const session = require('express-session');


module.exports = function() {
    var router = express.Router();
    router.get('/login', (req, res) => {
    console.log('/login 요청 받음')
    res.send('Go to login page');
  })
  
  router.get('/signin', (req, res) => {
    console.log('/signin 요청 받음')
    // res.redirect('http://70.12.50.171:3030/#/login');
    res.send('Go to signin page');
  })
  
  router.get('/mylist', (req, res) => {
    console.log('/mylist 요청 받음')
    // res.redirect('http://70.12.50.171:3030/#/login');
    res.send('Go to 관심 목록');
  })
  
  router.get('/myinfo', (req, res) => {
    console.log('/myinfo 요청 받음')
    // res.redirect('http://70.12.50.171:3030/#/login');
    res.send('Go to profile');    
  })

  return router;
}