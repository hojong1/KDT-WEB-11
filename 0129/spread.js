//spread 연산자

const a = [1, 2, 3];
const b = [4, 5];

//함수 방식 concat

const concat = a.concat(b); // concat = [1,2,3,4,5] 배열이 합쳐짐 !
console.log('concat', concat);

//spread 방식

const spread = [...a, ...b]; // spread = [1,2,3,4,5] 배열이 합쳐짐 !
console.log('spread', spread);
const aaa = [...a, ...b];
console.log(aaa);

const obj = {
    name: '홍길동',
    age: 30,
};
console.log({ ...obj }); //객체로 저장
console.log(obj);

const str = 'hello';
console.log(...str); // h e l l o
console.log([...str]); //...str = ['h', 'e', ~] 한글자씩 문자로 저장된 배열

//rest
function get(a, b, ...rest) {
    console.log(a, b, rest);
}

const arr = [10, 20, 30, 40, 50];

get(...arr); // a = 10 , b = 20 , rest = [30, 40, 50] 나머지를 넣는 배열로 저장

//실습 1

const word1 = 'abc';
const word2 = 'xyz';

const spread2 = [...word1, ...word2];
console.log(spread2);
