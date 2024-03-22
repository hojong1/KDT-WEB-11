const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식
app.use(express.json()); //json 방식

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/getForm", (req, res) => {
  //get 방식일때
  //get 방식일때 받아오는 값  req.query
  console.log(req.query); // {id:'kdt11', pw : '1234'}
  res.render("result", { title: "get요청 결과", userInfo: req.query });
});
app.post("/postForm", (req, res) => {
  //post 방식일때
  //post 방식일때 받아오는 값  req.body
  console.log(req.body); // {id:'kdt11', pw : '1234'}
  res.render("result", { title: "POST 요청 결과", userInfo: req.body });
});

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
