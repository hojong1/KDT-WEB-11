//ex1
const olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성계주",
  },
  true,
];

//ex2 // 아래 두 변수보고 Game 인터페이스로 구조 만들기

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_a: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

//ex3

function sum1(a1: number, b1: number) {
  return a1 + b1;
}
console.log(sum1(5, 11));

//ex4

// function sum2(a: number, b: number, c: number, d: number, e: number) {
//   return a + b + c + d + e;
// }
// console.log(sum2(1, 2, 3, 4, 10));

function sum2(...a: number[]) {
  let sum = 0;
  // a.forEach((el) => (sum += el));
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));

//ex5

function arrElement<T>(arr: T[], index: number) {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}
console.log(arrElement<string>(["a"], 0));

function arrElement2<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}
console.log(arrElement2<number>([1, 2, 3], 1));
