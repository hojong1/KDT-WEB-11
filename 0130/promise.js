// // //promise

// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `promise상태는 fulfilled!, then으로 연결됩니다. \n 이때의 flag가 true입니다.`
//       );
//     } else {
//       reject(
//         `promise상태는 rejected!, catch로 연결됩니다. \n 이때의 flag는 false입니다.`
//       );
//     }
//   });
// }

// promise1(false)
//   .then(function (message) {
//     console.log(message); // resolve 안 문자열이 들어감
//   })
//   .catch(function (error) {
//     console.log(error); // reject 안 문자열 들어감
//     console.log("에러다");
//   });

// function goMart() {
//   console.log("마트에가서 어떤 음료를 살지 고민한다.");
// }
// function pickDrink() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("고민 끝");
//       product = "코카 콜라";
//       price = 2000;
//       resolve();
//     }, 2000);
//   });
// }
// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink().then(pay);

// async function exec() {
//   goMart();
//   await pickDrink();
//   pay();
// }
//화살표 함수

// let exec = async () => {}
// exec();

//복습

// 실습 1 코드와 같음

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back(res) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(res);
      resolve(res);
    }, 1000);
  });
}
function hell(res) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(res);
      resolve(res);
    }, 1000);
  });
}

// call("Kim")
//   .then(function (name) {
//     console.log(name, "반가워");
//     return back("back");
//   })
//   .then(function (res) {
//     console.log(res, "를 실행했구나");
//     return hell("callback hell");
//   })
//   .then(function (res) {
//     console.log("여기는", res);
//   });

// 실습 2
async function exec() {
  let user = await call("Kim"); // user로 resolve값을 받음
  console.log(user, "반가워");
  let str1 = await back("back");
  console.log(str1, "을 실행했구나");
  let str2 = await hell("callback hell");
  console.log("여기는", str2);
}
exec();
