const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
// 스프레드시트 참고하기
// 카테고리 | 이름 | 영양성분 | ...
});

module.exports = mongoose.model('item', itemSchema);