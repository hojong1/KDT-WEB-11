// // 실습 1
// //1~100까지 배열 for문으로 만들기
// let numbers = [];
// for (let i = 1; i <= 100; i++) {
//     //numbers[i - 1] = i;
//     numbers.push(i);
// }

// console.log(numbers);

// // for문
// let sum1 = 0;
// for (let i = 1; i <= numbers.length; i++) {
//     sum1 = sum1 + i;
// }

// console.log(sum1);

// // for of 문

// let sum2 = 0;
// for (let i of numbers) {
//     sum2 = sum2 + i;
// }
// console.log(sum2);

// //forEach 문

// let sum3 = 0;

// numbers.forEach((i) => {
//     sum3 = sum3 + i;
// });
// console.log(sum3);

//실습 2

let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let same = [];
let diff = [];

for (let i = 0; i < fruits1.length; i++) {
    if (!fruits2.includes(fruits1[i])) {
        diff.push(fruits1[i]);
    } else {
        same.push(fruits1[i]);
    }
}
console.log(diff);
console.log(same);

// for (let i = 0; i < fruits1.length; i++) {
//     for (let j = 0; j < fruits2.length; j++) {
//         if (fruits1[i] === fruits2[j]) {
//             same.push(fruits1[i]);
//             break;
//         }
//     }
// }
// for (let i = 0; i < fruits1.length; i++) {
//     if (fruits1.includes(fruits2[i])) {
//         same.push(fruits2[i]);
//     }
// }

//방법 1
// fruits1.forEach((fruits) => {
//     if (fruits2.includes(fruits)) {
//         same.push(fruits);
//     }
// });
// fruits1.forEach((fruits) => {
//     if (!fruits2.includes(fruits)) {
//         diff.push(fruits);
//     }
// });

// let same = fruits1.filter((fruits) => fruits2.includes(fruits));
// let diff = fruits1.filter((fruits) => !fruits2.includes(fruits));
// console.log(same);
// console.log(diff);
