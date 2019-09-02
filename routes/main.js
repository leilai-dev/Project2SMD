const express = require('express');
const session = require('express-session');
const upload = require('./fileupload');
const multer = require('multer');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

module.exports = function() {
    var router = express.Router();

    router.get('/signup', csrfProtection, (req, res) => {
      res.render('send', {csrfToken: req.csrfToken() })
    });
  return router;
}