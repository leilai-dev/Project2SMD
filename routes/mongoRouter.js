var express = require('express');
const hasher = require('pbkdf2-password')();
const Users = require('../schemas/user');

module.exports = () => {
    var router = express.Router();
    router.get('/', (req, res) => {
        res.send('mongodb router');
    })

    // 신규 유저 생성
    // userid | password | salt | name | email
    router.post('/signup', (req, res) => {
        // req.body 객체에서 바로 hasher로
        hasher({
            password: req.body.password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.status(500).redirect('/');
                return;
            }

            // user 콜렉션에 hash 저장
            const user = new Users({
                userid: req.body.userid,
                password: hash,
                salt: salt,
                name: req.body.name,
                email: req.body.email,
            });

            user.save((err, result) => {
                if (err) console.log(err);
                else {
                    console.log(result);
                    res.status(201).json(result);
                }
            });

        });
    });

    // 로그인 요청
    router.get('/login', (req, res) => {
        let userid = req.body.userid;
        let password = req.body.password;

        Users.findOne();


    });
    router.get('/', (req, res) => {

    });
    router.get('/', (req, res) => {

    });
    router.get('/', (req, res) => {

    });

    return router;
}
