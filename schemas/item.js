const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
// 스프레드시트 참고하기
// 카테고리 | 이름 | 영양성분 | ...
// 탄수화물(g)|단백질(g)|지방(g)|트랜스지방(g)|포화지방(g)|당류(g)|콜레스테롤(mg)|나트륨(mg)
category: "소세지",
name: "맛있닭 닭가슴살소시지 훈제" ,
imgUrl: "https://file.rankingdak.com/data/item/1421823810_l1.jpg",
kcal: 135,
carbo: 3,
protein: 23,
fat: 4,
sFat: 0.7,
tFat: 0,
sugar: 2,
choles:65,
natrium: 250,
ingredi: "닭고기(가슴살 국내산 79.52 %, 대두유{대두유(외국산 아르헨티나, 미국, 브라질 등), d-토코페놀 (혼합형), 규소수지}, 전란액(계란 100 %/국내산), 알콘에스비, 복합시즈닝SD, 복합믹스-J, 함수 포도당, 비프젤라틴, 산도조절제, 육풍미시즈닝, 기타소금, 비타민C, 스모크오일[히코리스모크오일RS(미국산/대두유, 스모크 향), 대두유(대두, 규소수지)] 007%, 생강분말, 콜라겐케이싱"

});

module.exports = mongoose.model('item', itemSchema);