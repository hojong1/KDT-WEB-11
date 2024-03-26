const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("prac1");
});
app.get("/prac2", (req, res) => {
  res.render("prac2");
});
app.get("/axios", (req, res) => {
  console.log("요청값", req.query);
  res.send(req.query);
});
const id = "kdt11";
const pw = "1234";
app.post("/POST", (req, res) => {
  console.log("요청값", req.body);
  const { id: reqId, pw: reqPw } = req.body;
  console.log(reqId, reqPw);
  if (id === reqId && pw === reqPw) {
    res.send({ result: true, userInfo: { id } });
  } else {
    res.send({ result: false, userInfo: null });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
