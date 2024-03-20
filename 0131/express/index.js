const express = require("express"); //express 사용
const app = express();
const PORT = 8000; // PORT라는 상수 굳이 8000번이 아니어도 됨.

app.set("view engine", "ejs"); // ejs 사용
app.set("views", "./views");

//정적 파일 불러오기
app.use("/public", express.static(__dirname + "/public"));

//localhost:8000

app.get("/", (req, res) => {
  //send() 클라이언트에 응답데이터를 보낼때
  res.send("Hello Express11111");
});

app.get("/kdt", (req, res) => {
  // localhost:8000/kdt 입력시 > test.ejs가 열리는것
  //render() 뷰 엔진 렌더링
  res.render("test", { name: "홍길동" }); // '홍길동'이라는 값을 name으로 보냄 test에서 사용 가능
});

app.get("/gugu", (req, res) => {
  res.render("gugudan", {
    // 객체로 값 전달,
    data: 2,
    dan: 5,
    leng: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
});

app.get("/fruit", (req, res) => {
  res.render("fruit", {
    fruit: [
      { name: "apple", kor: "사과" },
      { name: "banana", kor: "바나나" },
      { name: "grape", kor: "포도" },
      { name: "peach", kor: "복숭아" },
    ],
  });
});
app.listen(PORT, () => {
  // 서버 실행하기
  console.log(`http://localhost:${PORT}`);
});
