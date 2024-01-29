// 배열 구조 분해
/*
const lists = ['apple', 'grape'];
console.log(lists);
*/
//기존 방식

// console.log(lists[0], lists[1]);

//구조 분해(순서가 매우 중요)
/*
let [item1, item2, item3 = 'peach'] = lists;

console.log('item1:', item1, 'item2:', item2);

console.log('item3:', item3);

item1 = 'banana';

console.log('item1:', item1);

let x = 1,
    y = 3;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
*/
// 객체

const obj = {
    //key(변수) : value(값)
    name: 'hojong',
    age: 25,
    gender: 'M',
    friends: ['messi', 'ronaldo'],
    hello: function () {
        console.log('hello world');
    },
    'kdt-11': 'kdt 11기',
};

console.log(obj);
console.log(obj.age);
console.log(obj.friends);
console.log(obj.friends[1]);

obj.age = 23;
console.log(obj.age);
obj.hello();
obj.city = '서울';
console.log(obj.city);
console.log(obj);
console.log(obj['kdt-11']);

const { name, city = '서울', age } = obj;
const { friends, hello, age: newAge } = obj;
console.log(name, city, age);
console.log(friends, hello, newAge);
