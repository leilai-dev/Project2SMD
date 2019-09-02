const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema({
    // 스프레드시트 참고하기
    // 카테고리 | 이름 | 영양성분 | ...
    // 탄수화물(g)|단백질(g)|지방(g)|트랜스지방(g)|포화지방(g)|당류(g)|콜레스테롤(mg)|나트륨(mg)
    category: String,
    name: String,
    imgUrl: String,
    kcal: Number,
    carbo: Number,
    protein: Number,
    fat: Number,
    sFat: Number,
    tFat: Number,
    sugar: Number,
    choles: Number,
    natrium: Number,
    ingredi: String
});
itemSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model('item', itemSchema);