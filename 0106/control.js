//반복문 제어
//break : 멈추고 빠져나옴

// for (let i = 0; i < 100; i++) {
//     if (i == 11) {
//         console.log('끝');
//         break;
//     }
//     console.log(i);
// }

//continue

let sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        continue;
    }
    sum += i;
}
console.log(sum);
