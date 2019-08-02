// mongodb 연결
const mongoose = require('mongoose');

module.exports = () => {
    // 로컬환경 mongodb 연결
    mongoose.connect(process.env.MONGODB_URI || mongoUri, {
    // heroku 빌드시 mongodb uri 변경 < db유저/패스워드 관리는 어떻게?
    // mongoose.connect('mongodb://mongo:heroku!@34@ds157857.mlab.com:57857/heroku_x7r5lscv', {
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log('mongodb 연결 오류..');
        } else {
            console.log('mongodb 연결 성공..');
        }
    });

    mongoose.connection.on('error', (error) => {
        console.log('mongodb 연결 에러..');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb 연결 끊어짐');
    });
}
