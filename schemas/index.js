// mongodb 연결
const mongoose = require('mongoose');

module.exports = () => {
    // 로컬환경 mongodb 연결
    const DB_USER = 'mongo';
    const PASSWORD = encodeURIComponent('heroku!@34');
    const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@ds157857.mlab.com:57857/heroku_x7r5lscv`;
    mongoose.connect(DB_URL, {
        // heroku 빌드시 mongodb uri 변경 < db유저/패스워드 관리는 어떻게?
        // mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds157857.mlab.com:57857/heroku_x7r5lscv', {
        useNewUrlParser: true,
        socketTimeoutMS: 120000,
        connectTimeoutMS: 120000,
        useCreateIndex: true,
    }, (err) => {
        if (err) {
            console.log('mongodb 연결 오류..', err);
        } else {
            console.log('mongodb 연결 성공..');
        }
    });

    mongoose.connection.on('error', (error) => {
        console.log('mongodb 연결 에러..', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb 연결 끊어짐');
    });
}
