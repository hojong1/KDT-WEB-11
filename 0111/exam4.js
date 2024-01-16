// exam4.js

// jQuery를 사용하여 문서가 준비되면 실행
$(document).ready(function () {
    // 미디어 쿼리를 사용하여 화면 넓이가 480px 이하인 경우에 스타일 적용
    if (window.matchMedia('screen and (max-width: 480px)').matches) {
        // 화면 넓이가 480px 이하일 때
        $('body').css('background-color', 'orange');
    }
});
