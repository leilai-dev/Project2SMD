// 임시 스키마
// carhistory 그대로 사용
// userid | password | salt | name | email
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);