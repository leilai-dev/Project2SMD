var express = require('express');
const hasher = require('pbkdf2-password')();
const Users = require('../schemas/user');
const Items = require('../schemas/item');

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
    router.post('/login', (req, res) => {
        let userid = req.body.userid;
        let password = req.body.password;

        Users.findOne({ userid }, (err, user) => {
            if (err) {
                console.log(err)
                return;
            }
            if (user === null) {
                console.log("사용자 없음");
                return res.status(401).json({ error: "USER NOT FOUND" });;
            }

            hasher({
                password: password,
                salt: user.salt
            }, (err, pass, salt, hash) => {
                console.log('hash : ', hash);
                console.log('pass : ', user.password);

                if (hash === user.password) {
                    console.log('로그인 성공');
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    console.log('패스워드가 맞지 않습니다');
                    res.redirect('/');
                }
            });
        });
    });

    // 마이페이지 > 정보 수정 요청
    router.get('/userinfo', (req, res) => {
        let user = res.locals.user;
        // console.log(userid);
        if (!user)
            return res.status(401).json({ error: "Session not exist" });

        let userid = user.userid;
        Users.findOne({ userid }, (err, result) => {
            if (err)
                return res.json(err);

            res.json(result);
        });
    });

    // 마이페이지 > 관심 상품
    router.get('/wishlist', (req, res) => {
        let user = res.locals.user;
        if (!user)
            return res.status(401).json({ error: "Session not exist" });

        let userid = user.userid;
        Users.findOne({ userid }, { _id: 0, createdAt: 1 }, (err, result) => {
            res.json(result);
        })
    });

    router.get('/itemlist', (req, res) => {
        // Item
        console.log('요청옴');

        Items.find({}, {
            _id: 0,
            category: 1,
            name: 1,
            imgUrl: 1,
            kcal: 1,
            carbo: 1,
            protein: 1,
            fat: 1,
            sFat: 1,
            tFat: 1,
            sugar: 1,
            choles: 1,
            natrium: 1,
            ingredi: 1
        }, (err, results) => {

            // console.log(results);
            res.json(results);
        })
    });

    router.get('/recomm', async (req, res) => {
        console.log('similar_recommendation');

        //axois로 fat =x 가져오기... 
        //axios로 카테고리 가져오기...
        element='fat';
        figure=4.17;
        results =[];

        var result1 = await Items.find(
            {[element]:{$gte:figure},
            category:{$ne:"소세지"}},
            {_id:0,name:1,category:1,fat:1})
            .sort({fat:1}).limit(2);
            
        results.push(result1);

        var result2 = await Items.find(
            {[element]:{$lte:figure},
            category:{$ne:"소세지"}},
            {_id:0,name:1,category:1,fat:1})       
            .sort({fat:-1}).limit(2);

            results.push(result2);

        res.json(results);
    })

    
    router.get('/recomm2', (req, res) => {
        console.log('similar_recommendation');

        //axois로 fat =x 가져오기... 
        //axios로 카테고리 가져오기...
        element='fat';
        figure=4.17;
        result =[];

        Items.find(
            {fat:{$gte:figure},
            category:{$ne:"소세지"}},
            {_id:0,name:1,category:1,fat:1}, 
        (err, result1) => {
            console.log(result1);
            console.log(err);
        }).sort({fat:1}).limit(2);

        results.push(result1);

        Items.find(
            {fat:{$lte:figure},
            category:{$ne:"소세지"}},
            {_id:0,name:1,category:1,fat:1},
        (err, result2) => {
            console.log(result2);
            console.log(err);
            results.push(result2);
        }).sort({fat:-1}).limit(2);

        res.json(results);
    })


    return router;
}
