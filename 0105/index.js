// //오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태
// let cat = {
//     //key : value 형태
//     name: '고양이',
//     age: 2,
//     isCute: true,
//     mew: function () {
//         return '야옹!';
//     },
// };

// console.log(cat);
// console.log(cat.name);
// console.log(cat.age);
// console.log(cat.isCute);
// console.log(cat.mew());

// //실습 2

// let introduce = {
//     name: '성호종',
//     gender: '남자',
//     age: 25,
//     adress: '경기도 구리시',
// };

// console.log(introduce.name);
// console.log(introduce.gender);
// console.log(introduce.age);
// console.log(introduce.adress);

// //typeof 데이터가 어떤 타입인지 알려주는 키워드
// console.log(typeof 'hello');
// console.log(typeof true);
// const types = 20;
// console.log(typeof types);

//실습 3

// const types = 20;
// console.log(typeof types + " isn't " + typeof 'a' + ' data type.');
// console.log('Typeof를 boolean이나 null에 사용하면, ' + typeof true + ' 결과를 얻을 수 있습니다.');

// let data = `${typeof types} isn't ${typeof 'a'} data type.`;
// console.log(data);

//형 변환 : 데이터의 타입을 변환시켜주는 것
// prompt() : 사용자에 데이터를 입력받게 하는것

// let mathScore = prompt('수학점수를 입력하세요');
// let engScore = prompt('영어점수를 입력하세요');

// let avg = (Number(mathScore) + Number(engScore)) / 2; // 나누기 2 할때 자동 형변환
// console.log(avg);

// //문자형 변환
// let num = 123;
// console.log(typeof num);

// let a = String(num);
// console.log(typeof a);

// let b = num.toString(); //null과 undefined에서 사용불가
// console.log(typeof b);

// //숫자형 변환

// console.log(Number('1234'));
// console.log(Number('aaa')); //NaN 출력 문자는 숫자로 불가

// 실습 4

// let mathScore1 = '77';
// let engScore1 = '88';
// let avgScore = (Number(mathScore1) + Number(engScore1)) / 2;
// console.log(avgScore);

//연산자

// let num = 5;
// num += 10; // num= num+10과 동일
// console.log(num);

// let result1, result2;
// let nums = 10,
//     nums2 = 15;
// result1 = nums++; //result1 = 10
// console.log(result1);
// result1 = nums++; // result1 = 11
// console.log(result1);

// result2 = ++nums2; //result2 = 16
// console.log(result2);
// console.log(result1);
// result2 = ++nums2; // result2 = 17
// console.log(result2);

// 비교 연산자 (일치 연산자)

let a = 123;
let b = '123';
console.log(a == b); //t
console.log(a != b); //f
console.log(a === b); //f
console.log(a !== b); //t

let name = '뽀로로';
let age = 19;
let isAudult = age > 19;

if (name === '뽀로로' || age > 19) {
    // || or 연산자는 둘중 하나만 조건이 일치해도 통과
    console.log('통과');
} else console.log('돌아가');

if (name === '뽀로로' && age > 19) {
    // || && 연산자는 두 조건이 모두 일치해야 통과
    console.log('통과');
} else console.log('돌아가');

if (!isAudult) {
    // !isAudult :isAudult가 false냐?
    console.log('돌아가');
} else console.log('통과');
