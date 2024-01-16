$('.td1').css('color', 'red');
$('.td7').css('color', 'blue');
$('caption').css('color', 'green');
$('table').css('margin-top', '50px');
$('table').css('position', 'absolute');
$('table').css('right', '0');

let selectedTd;

$('.td').click(function () {
    $('.date').val(`2022년 7월 ${$(this).text()}일`);
    selectedTd = $(this);
});

$('.btn').click(function () {
    if (selectedTd) {
        let contentValue = $('.content').val();
        selectedTd.append(`<br>${contentValue}`);
        $('.content').val('');
    } else {
        alert('날짜를 선택해주세요.');
    }
});
