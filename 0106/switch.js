//조건문 
//switch 문
/* 
switch (x) {
    case 값1 :    // x === 값1 일때 실행 
        break;
    case 값2 :    // x === 값2 
        break;
    default :    // 다 아닐때 
        break;
}

break : 조건문, 반복문에서 빠져나갈 때 사용하는 키워드 

*/

let a = 5;
switch(a) {
    case 3 : 
        console.log('현재 값은 3입니다.');
        break;
    case 4 : 
        console.log('현재 값은 4입니다.');
        break;
    case 5 :    
        console.log('현재 값은 5입니다.');
        break;
    default :
        console.log('알 수 없는 값입니다.')
        break;
}

let grade = 'e';
switch(grade) {
    case 'A' :
        console.log('학점 A');
        break;
    case 'B' :
        console.log('학점 B');
        break;
    case 'C' :
        console.log('학점 C');
        break;    
    case 'D' :
        console.log('학점 D');
        break;
    default :
        console.log('학점 F')
}

