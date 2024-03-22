const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice");
});
app.get("/getForm", (req, res) => {
  console.log(req.query);
  const { id, gender, year, month, day, interest, color, number } = req.query;
  res.render("practiceresult", {
    title: "회원가입 성공", // ex) id = id 이면 아래처럼 id로 생략가능
    userInfo: { id, gender, year, month, day, interest, color, number },
  });
});
app.post("/postForm", (req, res) => {
  console.log(req.body);
  const { id, gender, year, month, day, interest, color, number } = req.body;
  res.render("practiceresult", {
    title: "회원가입 성공",
    userInfo: { id, gender, year, month, day, interest, color, number },
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
