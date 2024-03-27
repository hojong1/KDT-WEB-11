const express = require("express"); //express 사용
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs"); // ejs 사용
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  //storage : 저장할 공간에 대한 정보
  //diskStorage() : 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
  storage: multer.diskStorage({
    //destination: 업로드할 파일을 저장할 폴더를 지정 (=dest)
    destination(req, file, done) {
      done(null, "uploads/"); //done : 콜백함수
    },
    //filename: 파일 이름 결정(요청 객체, 업로드된 파일객체, 콜백함수)
    filename(req, file, done) {
      //extname(): 확장자를 추출
      const ext = path.extname(file.originalname);
      //basename(): 파일 이름을 추출(파일의 오리지널명, 확장자)
      // => 확장자를 제외해서 파일이름만 추출
      const newName = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, newName);
    },
  }),

  //limits: 파일저장 용량제한
  limits: { fileSize: 1 * 1024 * 1024 }, //5mb 제한
});
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/uploads", uploadDetail.single("userfile"), (req, res) => {
  console.log("file:", req.file);
  const uploadedFileUrl = "/uploads/" + req.file.filename;
  res.render("index", { uploadedFileUrl });
});
app.listen(PORT, () => {
  // 서버 실행하기
  console.log(`http://localhost:${PORT}`);
});
