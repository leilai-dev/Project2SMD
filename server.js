const express = require('express');
const app = express();

const path = require('path');

// 라우터 선언
const main = require('./routes/main')();
// const testMongo = require('./routes/testMongo');
const mongoRouter = require('./routes/mongoRouter')();

// process.env.PORT < 노드 기본 환경설정 변수가 존재할 경우 5000대신 할당 됨
// heroku 배포시 필요함
const PORT = process.env.PORT || 5000;

// 몽고DB사용을 위한 선언
const dbConnect = require('./schemas');

dbConnect();

// 미들웨어
app.use('/main', main);
app.use('/mongo', mongoRouter);

// App.js Greeting 예제를 위해 남겨둠
app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

app.listen(PORT);