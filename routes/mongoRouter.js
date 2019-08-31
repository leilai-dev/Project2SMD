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
            email: req.body.email,
            password: hash,
            salt: salt,
            activity: req.body.activity,
            tall: req.body.tall,
            weight: req.body.weight,
            wishlist: []
            });

            user.save((err, result) => {
                if (err) console.log(err);
                else {
                    console.log(result);
                    res.status(200).json({ result: true });

                }
            });

        });
    });

    // 로그인 요청
    router.post('/login', (req, res) => {
        console.log(req.body);
        let userid = req.body.userid;
        let password = req.body.password;

        console.log(userid);
        Users.findOne({ userid }, (err, user) => {
            if (err) {
                console.log(err)
                return;
            }
            if (user === null) {
                console.log("사용자 없음");
                return res.status(401).json({ result: false });;
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
                    res.cookie("id", user.userid, { maxAge: 10 * 60 * 60 * 1000, httpOnly: true });
                    res.cookie("name", user.name, { maxAge: 10 * 60 * 60 * 1000, httpOnly: true });
                    res.cookie("isLoggedIn", true, { maxAge: 10 * 60 * 60 * 1000 });
                    res.json({ result: true, name: user.name, id: user._id });
                } else {
                    
                    console.log('패스워드가 맞지 않습니다');
                    res.redirect('/');
                }
            });
        });
    });

    //로그아웃 요청
    router.get('/logout', (req, res) => {
        console.log('로그아웃 요청 ...');
        console.log(req.session);
        
        //domain: 'localhost', 
        req.session.destroy(err => {
            if(err) res.status(422).send(err);
            // req.logout();
            delete res.locals.user;
            res.cookie("isLoggedIn", false);
            res.cookie("name", "", {maxAge: 0});
            res.cookie("id", "", {maxAge: 0});
            res.cookie("connect.sid", "", {maxAge: 0});
            res.status(200).json({result:true});
            console.log("destroyed");
        });
    })

    // 마이페이지 > 정보 수정 요청
    router.get('/myinfo', (req, res) => {
        let user = res.locals.user;
        if (!user)
            return res.status(401).json({ error: "Session not exist" });

        let userid = user.userid;
        Users.findOne({ userid }, (err, result) => {
            if (err)
                return res.json(err);
            res.json(result);
        });
    });

// 제품 정보 페이지
router.get('/detail/:id', async (req, res) => {
    console.log('detail 요청...');
    console.log(req.params.id);
    _id = req.params.id;
    var results = [];
    var element = ['sugar', 'natrium'];
    var full = await Items.findOne({ _id });
    results.push(full);

    console.log(results);
    console.log(results[0].category);
    console.log(results[0][element[0]]);

    var cate = await results[0].category;

    var i = 0;
    while (i < 2) {
        var figure = await results[0][element[i]];
        console.log(i + " : " + figure);
        if (figure == null) {
            break;
        } else {
            var lower = await Items.find({
                [element[i]]: { $lt: figure },
                category: { $ne: cate }
            },
                { _id: 1, name: 1, category: 1, imgUrl: 1, [element[i]]: 1 })
                .sort({ [element]: -1 }).limit(2);
            results.push(lower);

            var upper = await Items.find({
                [element[i]]: { $gte: figure },
                category: { $ne: cate }
            },
                { _id: 1, name: 1, category: 1, imgUrl: 1, [element[i]]: 1 })
                .sort({ [element]: 1 }).limit(2);
            results.push(upper);
            i++;
        }
    }
    console.log(results);

    if (results.length < 5) {
        res.status(500).send('Array involved Null.');
    }
    res.status(200).json(results);
})
    // id포함 전체 아이템 리스트 받기
    router.get('/itemlist', (req, res) => {
        // req.setTimeout(0); // 504에러 방지
        // Item
        console.log('요청옴');
        Items.find({}, {}, (err, results) => {
            res.json(results);
        })
    });

    router.get('/search/:value', (req, res) => {
        const searchVal = req.params.value;
        console.log("search: ", searchVal);
        Items.find({ $text: { $search: searchVal } }, (err, result) => {
            console.log(result);
            res.json(result);
        });
    });

    router.get('/searchCategory/:category/:value', (req, res) => {
        const searchVal = req.params.value;
        const category = req.params.category;

        console.log("search: ", searchVal);
        Items.find({ category, $text: { $search: searchVal } }, (err, result) => {
            console.log(result);
            res.json(result);
        });
    });

    router.delete('/user/delete/:id', (req, res, next) => {
        const userid = req.params.id;
        Users.deleteOne({ userid }, (err, result) => {
            console.log("delete result", result);
            req.session.destroy(() => {
                delete res.locals.user;
                res.cookie("isLoggedIn", false);
                res.cookie("name", "", {maxAge: 0});
                res.cookie("id", "", {maxAge: 0});
                res.cookie("connect.sid", "", {maxAge: 0});
                res.status(200).json({result:true});
            });
        });
    })



    // router.post('/exit', (req, res) => {
    //     // req.body 객체에서 바로 hasher로
    //     hasher({
    //         password: req.body.password
    //     }, (err, pass, salt, hash) => {
    //         if (err) {
    //             console.log('ERR: ', err);
    //             res.status(500).redirect('/');
    //             return;
    //         }

    //     // user 콜렉션에 hash 저장
    //     const exit = new Exits({
    //         userid: req.body.userid,
    //         email: req.body.email,
    //         password: hash,
    //         salt: salt,
    //         activity: req.body.activity,
    //         tall: req.body.tall,
    //         weight: req.body.weight,
    //         reason: req.body.reason,
    //         });

    //         user.save((err, result) => {
    //             if (err) console.log(err);
    //             else {
    //                 console.log(result);
    //                 res.status(200).json({ result: true });

    //             }
    //         });

    //     });
    // });



    return router;
}
