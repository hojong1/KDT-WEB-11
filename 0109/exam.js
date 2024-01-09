// 실습 1

let button1 = document.getElementById('button1');
button1.setAttribute('onclick', 'go();');
let button2 = document.getElementById('button2');
button2.setAttribute('onclick', 'window.location.reload()');

function go() {
    let num1 = Number(document.getElementById('value1').value);
    let num2 = Number(document.getElementById('value2').value);
    let str1 = document.getElementById('value3').value;

    if (str1 === '+') {
        document.getElementById('value4').value = num1 + num2;
    } else if (str1 === '-') {
        document.getElementById('value4').value = num1 - num2;
    } else if (str1 === 'x' || str1 === '*') {
        document.getElementById('value4').value = num1 * num2;
    } else if (str1 === '/') {
        document.getElementById('value4').value = num1 / num2;
    }
}
