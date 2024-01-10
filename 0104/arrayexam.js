let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];
console.log(colors);

//1 . index 2인 값 출력

console.log(colors[2]);

//2. 좋아하는 색 마지막에 추가한 후 배열 출력

colors.push('navy');
console.log(colors);

//3. black 몇번째 인덱스인지 출력

console.log(colors.indexOf('black'));
// 없으므로 -1 출력

//4. 리스트의 순서 반전시켜서 출력

console.log(colors.reverse());

colors = ['orange'];
console.log(colors);

//const 사용시 재할당 불가, let,var은 재할당 가능 ex. colors= ['orange']

colors.pop();
colors.pop();
colors.pop();
colors.pop();
console.log(colors);
