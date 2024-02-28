// 배열 구조 분해

const lists = ['apple', 'grape'];
console.log(lists);

//기존 방식

console.log(lists[0], lists[1]);

// 구조 분해(순서가 매우 중요)

let [item1, item2, item3 = 'peach'] = lists; //

console.log('item1:', item1, 'item2:', item2); // apple , grape

console.log('item3:', item3); // peach

console.log(lists); // apple grape (peach)는 lists에 들어간게 (저장된게) 아님
console.log(item1, lists[0]); // apple apple

item1 = 'banana';

console.log('item1:', item1); //banana

console.log(lists); //apple grape

let x = 1,
    y = 3;

console.log(x, y);

[x, y] = [y, x]; // x,y의 값을 서로 바꿔준다

console.log(x, y);

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
console.log(obj.age); //25
console.log(obj.friends); //[~]
console.log(obj.friends[1]); //'ronaldo'

obj.age = 23; // obj의 age가 23으로 변경
console.log(obj.age);
obj.hello(); //hello world
obj.city = '서울'; //obj에 city 추가하고 값은 서울
console.log(obj.city);
console.log(obj);
console.log(obj['kdt-11']); //kdt 11기

const { name, city = '서울', age } = obj;
const { friends, hello, age: newAge } = obj;
console.log(name, city, age);
console.log(friends, hello, newAge); // newAge = age
