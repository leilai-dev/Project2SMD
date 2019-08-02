const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const multer = require('multer'); // 파일 업로드용 모듈?
const cors = require('cors');
const item = require("./schemas/item");

// 라우터 선언
const main = require('./routes/main')();
const mongoRouter = require('./routes/mongoRouter')();

// process.env.PORT < 노드 기본 환경설정 변수가 존재할 경우 5000대신 할당 됨
// heroku 배포시 필요함
const PORT = process.env.PORT || 5000;


app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false // querystring 모듈 사용
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/files', express.static(path.join(__dirname, 'uploads')));

app.use(session({
  secret: '1A@W#E$E',
  resave: false,
  saveUninitialized: true,
  cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 10*60*60*1000 // 쿠키 유효기간 10시간
  },
  store: new FileStore()
}));

app.use(cookieparser());

app.use(cors());

// 각 유저별 세션 정보 res.locals에 저장
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  console.log(res.locals.user);
  next();
});


// 몽고DB사용을 위한 선언
const dbConnect = require('./schemas');

dbConnect();

// 라우팅
app.use('/main', main);
app.use('/mongo', mongoRouter);

// App.js Greeting 예제를 위해 남겨둠
app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

app.listen(PORT);