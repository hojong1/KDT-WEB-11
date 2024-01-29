//setTimeout(code, delay)
//delay 시간동안 기다렸다가 코드 실행
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// // setTimeout(function () {
// //     console.log(2);
// // }, 2000);
// console.log(3);

//편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//     console.log('마트에 가서 어떤 음료수를 살지 고민한다.');
// }

// function pickDrink() {
//     setTimeout(() => {
//         console.log('고민 끝');
//         product = '코카 콜라';
//         price = 2000;
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격:${price}`);
// }
// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);

//콜백 함수 : 함수 타입 파라미터 맨 마지막에 하나 더 선언
//다른 함수가 실행을 끝낸 후 실행되는 함수
function mainFunc(param1, param2, callback) {
    console.log(param1, param2);
    callback();
}
function callbackFunc() {
    console.log('콜백함수 입니다.');
}
mainFunc(1, 2, callbackFunc);

function goMart() {
    console.log('마트에 가서 어떤 음료수를 살지 고민한다.');
}

function pickDrink(cb) {
    setTimeout(() => {
        console.log('고민 끝');
        product = '코카 콜라';
        price = 2000;
        cb(product, price); //콜백함수로 pay 함수 실행
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격:${price}`);
}
let product;
let price;
goMart();
pickDrink(pay);
