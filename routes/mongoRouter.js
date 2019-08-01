var express = require('express');
const hasher = require('pbkdf2-password')();
const Users = require('../schemas/user');

module.exports = () => {
    var router = express.Router();
    router.get('/', (req, res) => {
        res.send('mongodb router');
    })

    router.post('/adduser', (req, res) => {
        
    });
    router.get('/', (req, res) => {
        
    });
    router.get('/', (req, res) => {
        
    });
    router.get('/', (req, res) => {
        
    });
    router.get('/', (req, res) => {
        
    });
    
    return router;
}
