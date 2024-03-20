const a = 10;
const b = 20;

//하나의 모듈 파일에 하나의 모듈 파일 만들기

function connect() {
  //~~~~로직
  return a + b;
}

// module.exports = connect;

//하나의 모듈 파일에 여러 개 모듈 만들기

const a1 = "a 변수";
const b1 = "b 변수";
const c1 = 20;

(module.exports = connect), { a1, b1, c1 };
