//spread 연산자

const a = [1, 2, 3];
const b = [4, 5];

//함수 방식 concat

const concat = a.concat(b);
console.log('concat', concat);

//spread 방식

const spread = [...a, ...b];
console.log('spread', spread);

const obj = {
    name: '홍길동',
    age: 30,
};
console.log({ ...obj });
console.log(obj);

const str = 'hello';
console.log(...str);
console.log([...str]);

//rest
function get(a, b, ...rest) {
    console.log(a, b, rest);
}

const arr = [10, 20, 30, 40, 50];

get(...arr);

//실습 1

const word1 = 'abc';
const word2 = 'xyz';

const spread2 = [...word1, ...word2];
console.log(spread2);
