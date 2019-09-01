const multer = require('multer');
const moment = require('moment');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');  // 파일이 저장되는 경로입니다.
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYYMMDDHHmmss') + "_" + file.originalname);  // 저장되는 파일명
  },
});
// ... 
// 업로드 파일 필터링 설정
const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();
  const mimetyp = file.mimetype
  if (extension !== '.jpg'
    || extension !== '.jpeg'
    || extension !== '.png'
    || mimetyp !== 'image/png'
    || mimetyp !== 'image/jpg'
    || mimetyp !== 'image/jpeg') {
    return cb('Not allowed file type', false);
  }

  cb(null, true);
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2048 // 2Mbytes 용량 제한
  },
  fileFilter
}).single("file");   // single : 하나의 파일업로드 할때

module.exports = upload;