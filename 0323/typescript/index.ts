console.log("안녕");

const msg = "타입스크립트 배워보자!"; // 기존

const msg2: string = "타입스크립트 배워보자!";
const num: number = 100;
console.log(msg2);
console.log(num);

function sum(x: number, y: number): number {
  // 뒤에 : number 함수의 타입 number로 지정
  return x + y;
}

console.log(sum(10, 20));
