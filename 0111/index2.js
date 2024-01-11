/*
console.log(document);

console.log($(document));
//파일이 열리면서 실행되는 이벤트 넣기
$(document).ready(function () {
    console.log('ready() - 문서의 DOM 트리가 완성되면 실행되는 이벤트');
});
$(function () {
    console.log('안녕');
});
*/

//click()
$('.hello').click(function () {
    $('.hello').css('color', 'red');
});
// $('.nums').click(function () {
//     // 전체 $('.nums').css('color', 'blue');
//     //$(this)는 자기 자신 = 이벤트가 적용된 요소
//     $(this).css('color', 'blue');
// });

$('.nums').on('click', function () {
    $(this).css('color', 'red');
});

//mouseover() : 마우스 올렸을 때
$('.numbers').mouseover(function () {
    $('.numbers').css('background-color', 'green');
    // $('.numbers').append('<li>mouseover() call</li>');
});
//hover() : 마우스 올렸을때와 떼었을때
// $('.div-hover').hover(
//     function () {
//         $(this).addClass('hover');
//     },
//     function () {
//         $(this).removeClass('hover');
//     }
// );

$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

//scroll()
// ex 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
    console.log('scroll');
});

//keydown()

$('.input-key').keydown(function (e) {
    if (e.code === 'ArrowUp') {
        console.log('up');
    } else if (e.code === 'Arrowdown') {
        console.log('down');
    }
});
