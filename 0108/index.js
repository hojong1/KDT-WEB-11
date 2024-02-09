// let str = 'Happy day~!  ';

// console.log(str.length); // 빈문자 포함한 문자열 길이
// console.log(str.toUpperCase()); // 대문자로 반환
// console.log(str);
// console.log(str.toLowerCase()); // 소문자로 반환
// console.log(str.indexOf('y'));
// // // 몇번째 인덱스인지 확인(단, 첫번째 문자만 검색)
// console.log(str.slice(2)); // 글자 자르기
// console.log(str.slice(5, -4)); // 음수는 뒤에서부터
// console.log(str.replace('a', 's')); //문자열 변경(단, 첫번째 문자만 변경)
// console.log(str.replaceAll('a', 's')); //전체 문자 변경
// console.log(str.repeat(5)); //문자열 반복
// console.log(str.trim());
// console.log(str.split('p')); //문자열 자르기
// console.log(str.split(' '));
// console.log(str.split(''));
// console.log(str.includes('!'));
// // //메소드 체이닝
// console.log(str.trim().toLowerCase().split('p').join(''));
// // //join()
// const colors = ['red', 'orange', 'yellow'];
// console.log(colors.join('-')); // join() 안에 있는 문자를 기준으로 병합
// console.log(colors.reverse());

//for문

let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['red', 'orange', '노', '초', '파', '남', '보'];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

//for of 문

for (let i of numbers) {
    console.log(i);
}

for (let color of colors) {
    console.log(color);
}

// forEach()문
// 변수명.forEach(){} 안에서 사용할 변수 , 인덱스, 배열) {}

//

let arr;
// //filter 조건에 부합하는 배열 요소만 반환

arr = numbers.filter((number) => {
    return number > 3;
});

console.log(arr);

let arr2;

arr2 = colors.filter((color) => color.length > 2);
console.log(arr2);

let sum1 = 0;

for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);
