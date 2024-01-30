//promise
/*
function promise1(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(`promise상태는 fulfilled!, then으로 연결됩니다. \n 이때의 flag가 true입니다.`);
        } else {
            reject(`promise상태는 rejected!, catch로 연결됩니다. \n 이때의 flag는 false입니다.`);
        }
    });
}

promise1(false)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
*/

function goMart() {
    console.log('마트에가서 어떤 음료를 살지 고민한다.');
}
function pickDrink() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('고민 끝');
            product = '코카 콜라';
            price = 2000;
            resolve();
        }, 2000);
    });
}
function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

// goMart();
// pickDrink().then(pay);

async function exec() {
    goMart();
    await pickDrink();
    pay();
}
//화살표 함수

// let exec = async () => {}
exec();
