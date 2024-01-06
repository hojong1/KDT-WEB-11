//반복문 
//for문 
/* 
    for (초기값; 조건식; 증감식) {
        // 반복 코드
    }
*/
// step1. 0부터 5까지 1씩 증가

for(let i=0; i<6; i++){
    // console.log(i)
}
// step2. 5부터 0까지 1씩 감소
for (let i= 5; i>= 0; i--) {
    // console.log(i)
}

//step3. 1부터 10까지 중에서 짝수 출력 

//sol1. 반복문과 조건문 활용
for (let i=1; i<11; i++){
    if(i%2==0){
        // console.log(i)
    }
}
//sol2. 증감값 변경

for(let i=2; i<11; i=i+2) {
    // console.log(i)
}

// step4. 배열과 함께

const colors = ['red', 'orange', 'yellow'];

for(let i=0; i<colors.length; i++){
    console.log(`무지개 ${i+1}번째 색상은 ${colors[i]}입니다.`);
}