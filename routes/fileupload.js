const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');  // 파일이 저장되는 경로입니다.
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);  // 저장되는 파일명
  },
});

// 업로드 파일 필터링 설정
const fileFilter = (req, file, cb) => {
  let typeCheck = file.mimetype.split('/')[1];
  if (typeCheck === 'png'
    || typeCheck === 'jpg'
    || typeCheck === 'jpeg') {
    return cb(null, true);
  }

  cb('Not allowed file type', false);
}

// 필터링 적용
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 2048 // 2Mbytes 용량 제한
  },
  fileFilter
}).single("file");   // single : 하나의 파일업로드 할때

module.exports = upload;