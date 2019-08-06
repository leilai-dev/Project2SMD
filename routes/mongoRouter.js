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
    element = 'fat';
    figure = 4.17;
    results = [];

    var result1 = await Items.find(
        {
            [element]: { $gte: figure },
            category: { $ne: "소세지" }
        },
        { _id: 0, name: 1, category: 1, fat: 1 })
        .sort({ fat: 1 }).limit(2);

    results.push(result1);

    var result2 = await Items.find(
        {
            [element]: { $lte: figure },
            category: { $ne: "소세지" }
        },
        { _id: 0, name: 1, category: 1, fat: 1 })
        .sort({ fat: -1 }).limit(2);

    results.push(result2);

    res.json(results);
})


router.get('/recomm2', (req, res) => {
    console.log('similar_recommendation');

    //axois로 fat =x 가져오기... 
    //axios로 카테고리 가져오기...
    element = 'fat';
    figure = 4.17;
    result = [];

    Items.find(
        {
            fat: { $gte: figure },
            category: { $ne: "소세지" }
        },
        { _id: 0, name: 1, category: 1, fat: 1 },
        (err, result1) => {
            console.log(result1);
            console.log(err);
        }).sort({ fat: 1 }).limit(2);

    results.push(result1);

    Items.find(
        {
            fat: { $lte: figure },
            category: { $ne: "소세지" }
        },
        { _id: 0, name: 1, category: 1, fat: 1 },
        (err, result2) => {
            console.log(result2);
            console.log(err);
            results.push(result2);
        }).sort({ fat: -1 }).limit(2);

    res.json(results);
})


return router;
