//(4+3)*2-1=13
//collback 방법

// function add(n1, n2, cb) {
//   setTimeout(() => {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }
// function mul(n, cb) {
//   setTimeout(() => {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }
// function sub(n, cb) {
//   setTimeout(() => {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }
// add(4, 3, function (x) {
//   console.log("1:", x);
//   mul(x, function (y) {
//     console.log("2", y);
//     sub(y, function (z) {
//       console.log("3", z);
//     });
//   });
// });

//promise

function add(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}
function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}
function sub(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n - 1;
      // resolve(result);
      reject("에러를 일으켜봤음.");
    }, 500);
  });
}
add(4, 3)
  .then((res) => {
    console.log("add:", res);
    return mul(res);
  })
  .then((res) => {
    console.log("mul:", res);
    return sub(res);
  })
  .then((res) => {
    console.log("sub:", res);
  })
  .catch((res) => {
    console.log("err", res);
  });
