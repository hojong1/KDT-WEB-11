// alert('링크방식');

// var name = '홍길동';
// console.log(name);
// var name = '나비';
// console.log(name);
// var age; //값이 할당되지 않을 때는 undefined가 할당
// console.log(name);
// age = 20;
// console.log(age);
// age = 10;
// console.log(age);

// let name = '홍길동';
// console.log(name);
// //let name = "나비"; // 중복 선언 불가
// name = '성춘향'; //값을 할당 가능
// console.log(name);
// let age;
// console.log(age);

//const

// const age = 20;
// console.log(age);
// //age = 30; // 값을 할당할 수 없음

// const AGE = 40;
// console.log(AGE);

//데이터 타입
// let myName = '홍길동';
// var email = 'gildong@naver.com';
// let city = '서울';
// console.log(myName, email, city);
// console.log('안녕하세요 ' + myName, '입니다.'); // +도 되고 ,도 된다 +를 추천함
// console.log(`안녕하세요 ${email}입니다`);

// //배열
let colors = ['red', 'orange', 'yellow', 'green'];
console.log(colors);
console.log(colors[2], colors[0]);
colors.push('blue');
console.log(colors);
console.log(colors.length);
colors.shift();
console.log(colors);
colors.unshift('navy');
console.log(colors);
colors.pop();
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
console.log(colors.indexOf('blue'));
console.log(colors.indexOf('orange'));
console.log(colors.indexOf('yellow'));
console.log(colors.includes('navy'));
console.log(colors);
colors.push('green');
console.log(colors);
colors.reverse();
console.log(colors);
