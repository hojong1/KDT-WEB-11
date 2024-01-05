//함수
//함수 선언문(기본적인 형태)

// function sayHello() {
//     console.log('Hello');
// }
// sayHello();
/* 함수 선언문 
//덧셈 기능이 있는 함수 선언

sumFunc(50,20);    //  함수 호이스팅 가능 : 함수 선언문 위에서 사용

const num1 = 10;  // 전역 변수
function sumFunc(num2, num3) {   // ()안 변수 : 매개 변수
    const num1 = 11;
    const sum= num1+ num2 + num3;
    console.log("결과:", sum)
    // console.log(num1); // 지역
    // return 함수 제일 마지막에 사용, 값을 다시 전달
    return sum;
}
// console.log(num1); //전역

sumFunc(50, 10); 
sumFunc(30,10);

let result = sumFunc(30,15);
console.log(result);

*/

// 함수 표현식 
// sayHello();             // 호이스팅 불가

// let sayHello = function() {
//     console.log('Hello')
// }

// let sayHello = () => {        // 바로 위 함수랑 같음 화살표 함수
//     console.log('Hello');
// }
// sayHello();

// 실습 1 

// let multifly = function(num1, num2) {
//     return num1 * num2
// }

// console.log(multifly(3,7))
// console.log(multifly(2,2))

// 실습 2 

let square = (num1) => {

    console.log(num1**2);
}
square(4);
square(11);
square(5);