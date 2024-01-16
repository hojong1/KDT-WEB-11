//실습 4

// let age = Number(prompt('나이를 입력하세요'));

// if (age >= 20) {
//     console.log('성인');
// } else if (age >= 17) {
//     console.log('고등학생');
// } else if (age >= 14) {
//     console.log('중학생');
// } else if (age >= 8) {
//     console.log('초등학생');
// } else {
//     console.log('유아');
// }

//실습 5

// let age = Number(prompt('나이를 입력하세요'));
// let gender = prompt('성별을 입력하세요 (남자/여자로 입력)');

// if (age >= 20) {
//     if (gender === '남자') {
//         console.log('성인 남자입니다.');
//         // console.log(`성인 ${gender}`);
//     } else {
//         console.log('성인 여자입니다');
//     }
// } else if (age >= 17) {
//     if (gender === '남자') {
//         console.log('고등학생 남자입니다.');
//     } else {
//         console.log('고등학생 여자입니다');
//     }
// } else if (age >= 14) {
//     if (gender === '남자') {
//         console.log('중학생 남자입니다.');
//     } else {
//         console.log('중학생 여자입니다');
//     }
// } else if (age >= 8) {
//     if (gender === '남자') {
//         console.log('초등학생 남자입니다.');
//     } else {
//         console.log('초등학생 여자입니다');
//     }
// } else {
//     if (gender === '남자') {
//         console.log('유아 남자입니다.');
//     } else {
//         console.log('유아 여자입니다');
//     }
// }

// 함수를 이용한 실습 5

// let age = Number(prompt('나이를 입력하세요'));
// let gender = prompt('성별을 입력하세요 (남자/여자로 입력)');

// if (gender === '남자' || gender === '여자') {
//     ageFunc(age, gender);
// } else {
//     console.log('성별이 틀렸습니다.');
// }

// function ageFunc(age, gender) {
//     if (age >= 20) {
//         console.log(`성인 ${gender}`);
//     } else if (age >= 17) {
//         console.log(`고등학생 ${gender}`);
//     } else if (age >= 14) {
//         console.log(`중학생 ${gender}`);
//     } else if (age >= 8) {
//         console.log(`초등학생 ${gender}`);
//     } else if (age >= 0) {
//         console.log(`유아 ${gender}`);
//     } else {
//         console.log('나이가 틀렸습니다.');
//     }
// }

//실습 6

// let now = new Date().getHours();
// console.log(now);

// now < 12 ? console.log('오전') : console.log('오후');

//실습 7

// let num = Number(prompt('숫자를 입력하세요:'));

// // num = 10000이면 1번
// for (let i = 1; i <= num; i++) {
//     if (i % 13 == 0 && i % 2 == 1) {
//         console.log(i);
//     }
// }

// 실습 8

// for (let i = 2; i < 10; i++) {
//     console.log(`---${i} 단---`);
//     for (let k = 1; k < 10; k++) {
//         console.log(`${i} x ${k} = ${i * k}`);
//     }
// }

// 실습 9

let n = 1;
let sum = 0;
while (n < 100) {
    if (n % 2 == 0 || n % 3 == 0) {
        sum += n;
    }
    n++;
}
console.log(sum);
