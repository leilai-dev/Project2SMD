const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const FileStore = require('session-file-store')(session);
const multer = require('multer'); // 파일 업로드용 모듈?
const moment = require('moment');
const cors = require('cors');
const helmet= require('helmet');
const item = require("./schemas/item");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: '1A@W#E$E',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 10 * 60 * 60 * 1000, // 쿠키 유효기간 10시간
    // name: res.locals.user.name
  },
  store: new FileStore()
}));
app.use(csrf());

// 각 유저별 세션 정보 res.locals에 저장
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  res.locals.user = req.session.user;
  console.log("Session user: ", res.locals.user);
  // res.cookie("name", req.session.user.name, {
  //   maxAge: 10 * 60 * 60 * 1000,
  // })
  next();
});

app.use(helmet.xssFilter());
app.use(cors());


// 몽고DB사용을 위한 선언
const dbConnect = require('./schemas');

dbConnect();

// 라우팅
app.use('/main', main);
app.use('/mongo', mongoRouter);

const server = app.listen(PORT);
server.setTimeout(0);