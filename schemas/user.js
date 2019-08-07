// 임시 스키마
// carhistory 그대로 사용
// userid | password | salt | name | email
// 추가 입력 정보
// 키 | 몸무게 | 성별 | 연령대 | 알러지 정보 | 위시 리스트 Obj
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userid: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    salt: String,
    name: String,
    email: String,
    extraInfo : {
        type: Object,
        gender: String,
        height: Number,
        weight: Number,
        age: Number,
        allergy: Array
    },
    wishlist: Array,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('user', userSchema);