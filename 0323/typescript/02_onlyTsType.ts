// only typescript type

// Tuple
// 순서와 개수가 있는 배열
let drink: [string, number] = ["사이다", 1000];

drink[0] = "콜라";
drink.push("음료수"); // tuple 한계 - 값이 추가됨
console.log(drink);

// readonly: 요소의 타입 순서와 길이 고정
const drink2: readonly [string, number] = ["사이다", 1000];
// drink2.push("음료!"); // error

//Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log("Auth.admin :", Auth.admin);
console.log("Cafe.latte :", Cafe.latte);

//값을 안쓰면 숫자형, 가장 위의 요소부터 0으로 할당
enum Cake {
  chocolate,
  vanilla,
  strawberry,
}

enum Cake2 {
  chocolate,
  vanilla,
  strawberry = "딸기 케이크",
}

console.log("Cake2.chocolate :", Cake2.chocolate);
console.log("Cake2.strawberry :", Cake2.strawberry);

// any
// 명시적으로
let val: any;
val = true;
val = 1;
val = "str";
val = { name: "codingon" };

//암묵적으로
let val2;
val2 = false;
val2 = "hi";

// 사용자 정의 타입

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}
const student1: Student = {
  name: "codingon",
  isPassed: true,
  // addr:'seoul' // Student 타입에 없는 값이라 error
};

// enum 사용
enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

// interface 상속
interface BaseballClub extends Student {
  position: string;
  readonly height: number; // 바꿀수 없음 .
  backNumber?: number; // ?: 있어도 되고 없어도 된다라는 뜻.
  score: Score;
  [grade: number]: Score; //학년 : 점수
}

const otani: BaseballClub = {
  //Student 상속이라 사용 가능
  name: "otani",
  isPassed: true,
  position: "pitcher",
  height: 190, //네개 객체 : 하나라도 없으면 error
  // backNumber:2 // 없어도 error 안남
  score: Score.A, // Score안에 있는 값이 아니면 안된다.
  3: Score.A, //학년 : 점수
};
console.log(otani);
otani.position = "투수";
// otani.height=1 // readonly라서 바꿀라면 error
otani["isPassed"] = false;
console.log(otani);

// 2. type
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
const width1: Bp1 = 500; // 1200 error :없는 값
const width2: Bp2 = Bp2.LG;

//교차 타입 : 두 개 이상의 타입을 합치는 것

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}
type ToyCar = Toy & Car;
const toycar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발~");
  },
  color: "blue",
  price: 10000,
};

type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: "daniel",
  gender: "F",
};
